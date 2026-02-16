import { useState } from 'react';
import { APP_CONFIG } from '../config/app-config';

interface ConnectionDebugProps {
  isConnected: boolean;
  error: string | null;
}

/**
 * Debug panel for troubleshooting connection issues
 * This component can be added to the app during development
 */
export function ConnectionDebug({ isConnected, error }: ConnectionDebugProps) {
  const [showDebug, setShowDebug] = useState(false);
  const [testResult, setTestResult] = useState<string>('');

  const testConnection = async () => {
    setTestResult('Testing...');
    try {
      const response = await fetch(APP_CONFIG.server.url, {
        method: 'GET',
        mode: 'cors',
      });
      
      if (response.ok) {
        const data = await response.json();
        setTestResult(`✓ Success! Data: ${JSON.stringify(data)}`);
      } else {
        setTestResult(`✗ Error: ${response.status} ${response.statusText}`);
      }
    } catch (err) {
      setTestResult(`✗ Failed: ${err instanceof Error ? err.message : 'Unknown error'}`);
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50">
      <button
        onClick={() => setShowDebug(!showDebug)}
        className="bg-black text-white px-[16px] py-[8px] rounded-t-[4px] m-[8px]"
        style={{ fontSize: 'var(--text-sm)' }}
      >
        {showDebug ? 'Hide' : 'Show'} Debug
      </button>
      
      {showDebug && (
        <div className="bg-black/90 text-white p-[16px] max-h-[300px] overflow-auto" style={{ fontSize: 'var(--text-sm)' }}>
          <h3 className="mb-[8px]" style={{ fontSize: 'var(--text-lg)', fontWeight: 'var(--font-weight-medium)' }}>
            Connection Debug
          </h3>
          
          <div className="mb-[8px]">
            <strong>Status:</strong> {isConnected ? '✓ Connected' : '✗ Disconnected'}
          </div>
          
          {error && (
            <div className="mb-[8px] text-[#ff6b6b]">
              <strong>Error:</strong> {error}
            </div>
          )}
          
          <div className="mb-[8px]">
            <strong>Server URL:</strong> {APP_CONFIG.server.url}
          </div>
          
          <div className="mb-[8px]">
            <strong>Update Interval:</strong> {APP_CONFIG.server.fetchInterval}ms
          </div>
          
          <button
            onClick={testConnection}
            className="bg-white text-black px-[12px] py-[6px] rounded-[4px] mt-[8px]"
          >
            Test Connection
          </button>
          
          {testResult && (
            <div className="mt-[8px] p-[8px] bg-black/50 rounded-[4px] break-all">
              {testResult}
            </div>
          )}
          
          <div className="mt-[12px] pt-[12px] border-t border-white/20">
            <strong>Tips:</strong>
            <ul className="list-disc pl-[20px] mt-[4px]">
              <li>Ensure you're connected to the 192.168.4.1 network</li>
              <li>Check if server is running and responding</li>
              <li>Verify CORS is enabled on the server</li>
              <li>Check browser console for detailed errors</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
