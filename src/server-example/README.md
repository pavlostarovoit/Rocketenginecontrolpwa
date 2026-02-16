# Server Implementation Guide

This folder contains examples for implementing the server endpoint at 192.168.4.1/mesData.

## Expected Response Format

The server must respond to GET requests at `http://192.168.4.1/mesData` with JSON:

```json
{
  "state": "S",
  "time": "00:00:001",
  "thrust": 150,
  "samples": 100,
  "rate": 20,
  "rssi": -70
}
```

### Field Descriptions

- **state** (string): Current system state
  - `"S"` - Standby (gray badge)
  - `"R"` - Recording (red badge)
  - `"C"` - Calibrating (gray badge)
  - `"E"` - Error (red badge)

- **time** (string): Elapsed time in format "MM:SS:mmm"
  - Example: "00:15:234" = 15.234 seconds

- **thrust** (number): Current thrust reading in kilograms
  - Displayed with 2 decimal places
  - Graphed in real-time

- **samples** (number): Total number of samples collected
  - Not currently displayed in UI (reserved for future use)

- **rate** (number): Measurement sampling rate in Hz
  - Displayed in "Measure Rate" card and status bar

- **rssi** (number): WiFi signal strength in dBm
  - Typical range: -100 (worst) to -30 (best)
  - Converted to percentage for display
  - -50 or better: Excellent
  - -60 or better: Good
  - -70 or better: Fair
  - Below -70: Poor

## CORS Configuration (CRITICAL)

**IMPORTANT**: The server MUST handle CORS (Cross-Origin Resource Sharing) to allow the web app to make requests from a different origin. Without proper CORS configuration, you'll see errors like "CORS preflight request failed" in the browser console.

### What is CORS Preflight?

Browsers send an OPTIONS request before the actual GET request to check if the cross-origin request is allowed. Your server MUST respond to both OPTIONS and GET requests with proper headers.

### For Apache (.htaccess)
```apache
# Respond to preflight requests
Header set Access-Control-Allow-Origin "*"
Header set Access-Control-Allow-Methods "GET, OPTIONS"
Header set Access-Control-Allow-Headers "Content-Type"
Header always set Access-Control-Max-Age "3600"

# Return 200 for OPTIONS
RewriteEngine On
RewriteCond %{REQUEST_METHOD} OPTIONS
RewriteRule ^(.*)$ $1 [R=200,L]
```

### For Nginx (nginx.conf)
```nginx
location /mesData {
    # Handle preflight
    if ($request_method = 'OPTIONS') {
        add_header Access-Control-Allow-Origin '*';
        add_header Access-Control-Allow-Methods 'GET, OPTIONS';
        add_header Access-Control-Allow-Headers 'Content-Type';
        add_header Access-Control-Max-Age 3600;
        add_header Content-Length 0;
        return 204;
    }
    
    # Handle actual request
    add_header Access-Control-Allow-Origin '*';
    add_header Access-Control-Allow-Methods 'GET, OPTIONS';
    add_header Access-Control-Allow-Headers 'Content-Type';
}
```

### For Express.js (Node)
```javascript
const cors = require('cors');
app.use(cors());  // This handles everything automatically

// OR manually:
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  
  // Handle preflight
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});
```

### For Python Flask
```python
from flask_cors import CORS
app = Flask(__name__)
CORS(app)  # This handles everything automatically
```

## Example Implementations

### Arduino/ESP32 Example

```cpp
#include <WiFi.h>
#include <WebServer.h>
#include <ArduinoJson.h>

WebServer server(80);

// Handle CORS preflight (OPTIONS request)
void handleOptions() {
  server.sendHeader("Access-Control-Allow-Origin", "*");
  server.sendHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  server.sendHeader("Access-Control-Allow-Headers", "Content-Type");
  server.sendHeader("Access-Control-Max-Age", "3600");
  server.send(204);  // No content
}

void handleMesData() {
  // Create JSON document
  StaticJsonDocument<200> doc;
  
  doc["state"] = "S";  // Get from your system state
  doc["time"] = "00:00:001";  // Format your timer
  doc["thrust"] = readThrustSensor();  // Your sensor reading
  doc["samples"] = sampleCount;
  doc["rate"] = 500;  // Your sampling rate
  doc["rssi"] = WiFi.RSSI();
  
  String output;
  serializeJson(doc, output);
  
  // CRITICAL: Send CORS headers
  server.sendHeader("Access-Control-Allow-Origin", "*");
  server.sendHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  server.sendHeader("Access-Control-Allow-Headers", "Content-Type");
  server.send(200, "application/json", output);
}

void setup() {
  // WiFi AP setup
  WiFi.softAP("ThrustStand", "password");
  WiFi.softAPConfig(
    IPAddress(192, 168, 4, 1),
    IPAddress(192, 168, 4, 1),
    IPAddress(255, 255, 255, 0)
  );
  
  // CRITICAL: Handle both OPTIONS (preflight) and GET requests
  server.on("/mesData", HTTP_OPTIONS, handleOptions);
  server.on("/mesData", HTTP_GET, handleMesData);
  server.begin();
}

void loop() {
  server.handleClient();
}
```

### Python Flask Example

```python
from flask import Flask, jsonify
from flask_cors import CORS
import time

app = Flask(__name__)
CORS(app)

start_time = time.time()
sample_count = 0

@app.route('/mesData')
def mes_data():
    global sample_count
    sample_count += 1
    
    elapsed = time.time() - start_time
    minutes = int(elapsed // 60)
    seconds = int(elapsed % 60)
    milliseconds = int((elapsed % 1) * 1000)
    
    return jsonify({
        'state': 'S',
        'time': f'{minutes:02d}:{seconds:02d}:{milliseconds:03d}',
        'thrust': read_thrust_sensor(),  # Your sensor function
        'samples': sample_count,
        'rate': 500,
        'rssi': get_wifi_rssi()  # Your WiFi function
    })

if __name__ == '__main__':
    app.run(host='192.168.4.1', port=80)
```

### Node.js Express Example

```javascript
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

let startTime = Date.now();
let sampleCount = 0;

app.get('/mesData', (req, res) => {
  sampleCount++;
  
  const elapsed = (Date.now() - startTime) / 1000;
  const minutes = Math.floor(elapsed / 60);
  const seconds = Math.floor(elapsed % 60);
  const milliseconds = Math.floor((elapsed % 1) * 1000);
  
  res.json({
    state: 'S',
    time: `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(3, '0')}`,
    thrust: readThrustSensor(),  // Your sensor function
    samples: sampleCount,
    rate: 500,
    rssi: getWiFiRSSI()  // Your WiFi function
  });
});

app.listen(80, '192.168.4.1', () => {
  console.log('Server running on http://192.168.4.1:80');
});
```

## Testing the Server

### Using curl
```bash
curl http://192.168.4.1/mesData
```

### Using a browser
Navigate to: `http://192.168.4.1/mesData`

You should see the JSON response.

### Expected Response
```json
{
  "state": "S",
  "time": "00:00:001",
  "thrust": 150,
  "samples": 100,
  "rate": 20,
  "rssi": -70
}
```

## Performance Considerations

The app requests data every 200ms (5 times per second). Your server should:

1. **Respond quickly** - Keep processing under 50ms
2. **Be lightweight** - Minimize JSON size
3. **Cache when possible** - Don't recalculate static values
4. **Handle concurrent requests** - Multiple devices may connect

## State Machine Example

```cpp
enum SystemState {
  STANDBY,
  CALIBRATING,
  RECORDING,
  ERROR
};

SystemState currentState = STANDBY;

String getStateCode() {
  switch(currentState) {
    case STANDBY: return "S";
    case RECORDING: return "R";
    case CALIBRATING: return "C";
    case ERROR: return "E";
    default: return "S";
  }
}
```

## Troubleshooting

### "CORS preflight request failed" Error

This is the most common issue. The browser console will show errors like:
- `Access to fetch at 'http://192.168.4.1/mesData' has been blocked by CORS policy`
- `Response to preflight request doesn't pass access control check`

**Solutions:**
1. **Ensure your server responds to OPTIONS requests** with status 200 or 204
2. **Add CORS headers** to BOTH OPTIONS and GET responses:
   - `Access-Control-Allow-Origin: *`
   - `Access-Control-Allow-Methods: GET, OPTIONS`
   - `Access-Control-Allow-Headers: Content-Type`
3. **In the app config** (`/config/app-config.ts`), try setting `useCors: false` as a temporary workaround

### "Connection timeout" or "Request aborted" Errors

If you see `net::ERR_CONNECTION_TIMED_OUT` or "The user aborted a request":

**Solutions:**
1. **Increase timeout** in `/config/app-config.ts`:
   ```typescript
   server: {
     timeout: 15000, // Try 15 seconds for unstable connections
   }
   ```
2. **Check WiFi strength** - weak signal causes timeouts
3. **Reduce fetch interval** to reduce network load:
   ```typescript
   server: {
     fetchInterval: 500, // Try 500ms instead of 200ms
   }
   ```

### App can't connect at all
- Verify server is running: `ping 192.168.4.1`
- Check endpoint works: Open `http://192.168.4.1/mesData` in browser
- Ensure you're connected to the correct WiFi network
- Check firewall settings aren't blocking port 80
- Verify the server IP is actually 192.168.4.1

### Data not updating
- Ensure JSON format is exact (see Expected Response Format above)
- Check all fields are present in the response
- Verify numeric values are numbers, not strings
- Look for JSON syntax errors in browser Network tab
- Check server logs for errors

### Poor performance / Lag
- Server taking too long to respond (should be < 50ms)
- Reduce response time by caching values
- Minimize JSON size
- Check for memory leaks on the server
- Monitor CPU usage on embedded device
- Try increasing `fetchInterval` to 500ms or 1000ms

## Security Notes

This setup is designed for local, isolated networks. For production:

1. **Don't expose to internet** - 192.168.4.1 is a private network
2. **Add authentication** if needed
3. **Validate inputs** if accepting POST requests
4. **Use HTTPS** for sensitive data
5. **Implement rate limiting** to prevent abuse

## Hardware Integration

Your sensor reading function should:

1. Read from load cell/strain gauge
2. Apply calibration factors
3. Filter noise
4. Convert to kilograms
5. Return as float/double

Example:
```cpp
float readThrustSensor() {
  long rawValue = analogRead(SENSOR_PIN);
  float voltage = rawValue * (3.3 / 4095.0);
  float thrust = voltage * CALIBRATION_FACTOR;
  return thrust;
}
```
