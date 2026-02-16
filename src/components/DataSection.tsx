import * as React from 'react';
import { TYPOGRAPHY_CLASSES, TYPOGRAPHY_STYLES, COLORS } from '../utils/typography';
import { STATE_CONFIG, StateCode } from '../config/app-config';
import { ThrustGraph } from './ThrustGraph';
import svgPathsCircle from '../imports/svg-eubfxrtni7';
import { RecordingValues } from './SetupRecordingModal';

// Data Section Components
function Status({ state, engineId }: { state: string, engineId?: string }) {
  const isRecording = state === 'R' || ['1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(state);
  const isIgnited = state === '0';

  if (isIgnited) {
    return (
      <div className="content-stretch flex items-center relative shrink-0" data-name="Status">
        {/* Name Block */}
        <div className="bg-[#c13211] content-stretch flex items-center justify-center overflow-clip px-[8px] py-[4px] relative shrink-0" data-name="Name">
          <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-center text-white uppercase whitespace-nowrap" style={{ fontWeight: 'var(--font-weight-medium)' }}>
            <p className="leading-[16px]">B{engineId || ''}</p>
          </div>
        </div>
        
        {/* Status 1: Recording */}
        <div className="bg-[#c13211] relative shrink-0" data-name="Status">
          <div className="content-stretch flex items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[inherit]">
            <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-center text-white uppercase whitespace-nowrap" style={{ fontWeight: 'var(--font-weight-medium)' }}>
              <p className="leading-[16px]">RECORDING</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#efefef] border-l border-solid inset-[0_0_0_-1px] pointer-events-none" />
        </div>

        {/* Status 2: Ignited */}
        <div className="bg-[#c13211] relative shrink-0" data-name="Status 2">
          <div className="content-stretch flex items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[inherit]">
            <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-center text-white uppercase whitespace-nowrap" style={{ fontWeight: 'var(--font-weight-medium)' }}>
              <p className="leading-[16px]">IGNITED</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#efefef] border-l border-solid inset-[0_0_0_-1px] pointer-events-none" />
        </div>
      </div>
    );
  }
  
  if (isRecording) {
    return (
      <div className="content-stretch flex items-center relative shrink-0" data-name="Status">
        {/* Name Block */}
        <div className="bg-black content-stretch flex items-center justify-center overflow-clip px-[8px] py-[4px] relative shrink-0" data-name="Name">
          <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-center text-white uppercase whitespace-nowrap" style={{ fontWeight: 'var(--font-weight-medium)' }}>
            <p className="leading-[16px]">B{engineId || ''}</p>
          </div>
        </div>
        
        {/* Status Block */}
        <div className="bg-black relative shrink-0" data-name="Status">
          <div className="content-stretch flex items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[inherit]">
            <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-center text-white uppercase whitespace-nowrap" style={{ fontWeight: 'var(--font-weight-medium)' }}>
              <p className="leading-[16px]">RECORDING</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#efefef] border-l border-solid inset-[0_0_0_-1px] pointer-events-none" />
        </div>
      </div>
    );
  }

  // Standby / Default State
  const stateKey = (state in STATE_CONFIG ? state : 'UNKNOWN') as StateCode;
  const config = STATE_CONFIG[stateKey];
  const label = config.label;
  const bgColor = config.color;

  return (
    <div className="relative shrink-0" data-name="Status" style={{ backgroundColor: bgColor }}>
      <div className="box-border content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[inherit]">
        <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-center text-nowrap text-white uppercase" style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--font-weight-medium)' }}>
          <p className={`${TYPOGRAPHY_CLASSES.h4Title} leading-[16px] whitespace-pre text-white`}>{label}</p>
        </div>
      </div>
      {/* Dashed underline with 8px dash, 8px gap pattern */}
      <div aria-hidden="true" className="absolute bottom-[-2px] left-0 pointer-events-none right-0 h-[2px]">
        <svg className="block size-full" preserveAspectRatio="none" viewBox="0 0 100 2">
          <line 
            x1="0" 
            y1="1" 
            x2="100" 
            y2="1" 
            stroke={bgColor} 
            strokeWidth="2"
            strokeDasharray="12 12"
          />
        </svg>
      </div>
    </div>
  );
}

function Thrust({ thrust }: { thrust: number }) {
  return (
    <div className="content-stretch flex gap-[4px] items-center not-italic relative shrink-0 text-nowrap text-right whitespace-pre" data-name="Thrust">
      <p className="leading-[24px] relative shrink-0 text-black" style={{ fontSize: 'var(--text-xl)', fontWeight: 'var(--font-weight-medium)' }}>
        {thrust.toFixed(2)}
      </p>
      <p className="relative shrink-0 text-text-secondary" style={{ fontSize: 'var(--text-h2-size)', fontWeight: 'var(--font-weight-normal)', lineHeight: 'var(--text-h2-line-height)' }}>
        kg
      </p>
    </div>
  );
}

function Title({ state, thrust, engineId }: { state: string; thrust: number; engineId?: string }) {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Title">
      <Status state={state} engineId={engineId} />
      <Thrust thrust={thrust} />
    </div>
  );
}

/**
 * Calculates a "nice" scale for the thrust graph with proper headroom
 * Always generates exactly 4 grid lines (3 intervals) with round numbers
 * Step size is always 1kg - simple and consistent
 * IMPORTANT: Always ensures ALL data is visible within the calculated scale
 */
function calculateNiceScale(minValue: number, maxValue: number): { min: number; max: number; step: number } {
  // Add 10% headroom to avoid graph touching the edges
  const targetMin = minValue < 0 ? minValue * 1.1 : minValue * 0.9;
  const targetMax = maxValue > 0 ? maxValue * 1.1 : maxValue * 0.9;
  
  // Always use step of 1kg for simplicity
  const step = 1;
  
  // Special case: Both values are negative (e.g., -1.5, -2.1, -3.35, -4.5)
  if (targetMax <= 0) {
    // Check if data is close to zero (within 1.5kg from zero)
    // If so, add positive headroom for better context
    if (Math.abs(targetMax) < 1.5) {
      // Close to zero - show positive headroom: step, 0, -step, -2*step
      let min = -2 * step;
      const max = step;
      
      // Ensure scale actually contains the data with headroom
      // Keep extending downward until data fits
      while (min > targetMin) {
        min -= step;
      }
      
      return { min, max, step };
    } else {
      // Far from zero - show only negative range: 0, -step, -2*step, -3*step
      let min = -3 * step;
      const max = 0;
      
      // Ensure scale contains data with headroom
      // Keep extending downward until data fits
      while (min > targetMin) {
        min -= step;
      }
      
      return { min, max, step };
    }
  }
  
  // Special case: Both values are positive (e.g., 2.5 to 3.2)
  if (targetMin >= 0) {
    // All values are positive - create a scale from 0 upward
    let max = 3 * step; // Start with 3kg
    const min = 0;
    
    // Keep extending upward until data fits
    while (max < targetMax) {
      max += step;
    }
    
    return { min, max, step };
  }
  
  // Mixed case: We have both negative and positive values
  // Check if negative values are negligible compared to positive range
  const negativeRange = Math.abs(targetMin);
  const positiveRange = Math.abs(targetMax);
  const isNegligibleNegative = targetMin < 0 && 
    positiveRange > 0 && 
    negativeRange < positiveRange * 0.1; // Less than 10% of positive range
  
  if (isNegligibleNegative) {
    // Negligible negatives - treat as all positive
    let max = 3 * step;
    const min = 0;
    
    while (max < targetMax) {
      max += step;
    }
    
    return { min, max, step };
  }
  
  // We have significant negative and positive values - need balanced scale
  // Calculate how many intervals we need for each side
  const negativeIntervalsNeeded = Math.ceil(negativeRange / step);
  const positiveIntervalsNeeded = Math.ceil(positiveRange / step);
  
  // Distribute based on actual need, always include 0 as one of the lines
  if (negativeIntervalsNeeded >= 2 && positiveIntervalsNeeded <= 1) {
    // Need more negative range: start with -2*step, -step, 0, step
    let min = -2 * step;
    let max = step;
    
    // Extend as needed to fit data
    while (min > targetMin) {
      min -= step;
    }
    while (max < targetMax) {
      max += step;
    }
    
    return { min, max, step };
  } else if (positiveIntervalsNeeded >= 2 && negativeIntervalsNeeded <= 1) {
    // Need more positive range: start with -step, 0, step, 2*step
    let min = -step;
    let max = 2 * step;
    
    // Extend as needed to fit data
    while (min > targetMin) {
      min -= step;
    }
    while (max < targetMax) {
      max += step;
    }
    
    return { min, max, step };
  } else {
    // Balanced - default to more positive range: -step, 0, step, 2*step
    let min = -step;
    let max = 2 * step;
    
    // Extend as needed to fit data
    while (min > targetMin) {
      min -= step;
    }
    while (max < targetMax) {
      max += step;
    }
    
    return { min, max, step };
  }
}

function Graph({ thrustHistory, sessionStartTime, state }: { thrustHistory: any[]; sessionStartTime: number | null; state: string }) {
  // Calculate dynamic scale based on ALL visible data to ensure nothing is clipped
  // This ensures all data points within the time window stay within the graph bounds
  const minThrust = thrustHistory.length > 0 
    ? Math.min(...thrustHistory.map(d => d.thrust))
    : 0;
  const maxThrust = thrustHistory.length > 0 
    ? Math.max(...thrustHistory.map(d => d.thrust))
    : 0;
  
  const scale = calculateNiceScale(minThrust, maxThrust);
  
  // Debug logging to help diagnose scale issues
  React.useEffect(() => {
    if (thrustHistory.length > 0) {
      console.log('Graph Scale Debug:', {
        totalPoints: thrustHistory.length,
        dataRange: { min: minThrust, max: maxThrust },
        scale: { min: scale.min, max: scale.max, step: scale.step },
        gridLines: [scale.max, scale.max - scale.step, scale.max - 2*scale.step, scale.min]
      });
    }
  }, [minThrust, maxThrust, scale.min, scale.max, scale.step, thrustHistory.length]);
  
  return (
    <div className="relative rounded-[8px] size-full" data-name="Graph">
      {/* CSS Grid layout: auto-sized Y-axis column + flexible graph area column */}
      <div 
        className="h-full"
        style={{ 
          display: 'grid', 
          gridTemplateColumns: 'auto 1fr',
          gridTemplateRows: '1fr auto',
          columnGap: '8px', // 8px between Y-axis labels and guide lines
          rowGap: '10px'    // 10px between graph and seconds row
        }}
      >
        {/* Row 1: Y-axis labels (in first column) */}
        <div className="flex flex-col justify-between items-end" style={{ gridColumn: '1', gridRow: '1' }}>
          {[scale.max, scale.max - scale.step, scale.max - 2 * scale.step, scale.min].map((value, index) => (
            <div key={index} className="h-[20px] flex items-center">
              <p className="font-['IBM_Plex_Sans',_sans-serif] leading-[16px] not-italic text-[#545454] text-[13px] text-right">{value}</p>
            </div>
          ))}
        </div>
        
        {/* Row 1: Guide lines and data (in second column) - with overflow clipping */}
        <div className="relative overflow-clip" style={{ gridColumn: '2', gridRow: '1' }}>
          {/* Guide lines */}
          <div className="flex flex-col justify-between h-full">
            {[scale.max, scale.max - scale.step, scale.max - 2 * scale.step, scale.min].map((_, index) => (
              <div key={index} className="h-[20px] flex items-center w-full">
                <div className="w-full h-0 relative">
                  <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 312 1">
                      <line id="Guide line" stroke="var(--stroke-0, #EFEFEF)" x2="312" y1="0.5" y2="0.5" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Graph data overlay - positioned absolutely within this grid cell */}
          <div className="absolute inset-0 pointer-events-none">
            <ThrustGraph 
              data={thrustHistory} 
              minThrust={scale.min} 
              maxThrust={scale.max}
              variant={state === '0' ? 'ignited' : (state === 'R' || ['1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(state)) ? 'recording' : 'standby'}
            />
          </div>
        </div>
        
        {/* Row 2: Empty cell for Y-axis column */}
        <div style={{ gridColumn: '1', gridRow: '2' }} />
        
        {/* Row 2: X-axis time labels */}
        <div style={{ gridColumn: '2', gridRow: '2' }} className="w-full">
          <Seconds thrustHistory={thrustHistory} sessionStartTime={sessionStartTime} />
        </div>
      </div>
    </div>
  );
}

/**
 * Format time in seconds according to the rules:
 * - "S" for values < 10 seconds (e.g., "0", "2", "5", "9")
 * - "SS" for values 10-59 seconds (e.g., "10", "25", "45")
 * - "MM:SS" for values >= 60 seconds (e.g., "1:00", "2:30")
 */
function formatTimeLabel(seconds: number): string {
  if (seconds < 10) {
    return seconds.toString();
  } else if (seconds < 60) {
    return seconds.toString().padStart(2, '0');
  } else {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  }
}

function Seconds({ thrustHistory, sessionStartTime }: { thrustHistory: any[]; sessionStartTime: number | null }) {
  const numLabels = 8; // Number of time labels to show
  
  // Calculate time range from actual data
  let labels: string[];
  
  if (thrustHistory.length === 0 || sessionStartTime === null) {
    // No data - show all zeros
    labels = Array.from({ length: numLabels }, () => '0');
  } else {
    // Calculate elapsed time from session start for each label position
    const oldestTime = thrustHistory[0]?.time || Date.now();
    const newestTime = thrustHistory[thrustHistory.length - 1]?.time || Date.now();
    
    // Calculate elapsed time from session start (in seconds)
    const oldestElapsed = Math.round((oldestTime - sessionStartTime) / 1000);
    const newestElapsed = Math.round((newestTime - sessionStartTime) / 1000);
    
    // Generate labels based on absolute elapsed time
    labels = Array.from({ length: numLabels }, (_, i) => {
      const elapsedSeconds = Math.round(oldestElapsed + (i / (numLabels - 1)) * (newestElapsed - oldestElapsed));
      return formatTimeLabel(elapsedSeconds);
    });
  }
  
  return (
    <div className="flex items-center justify-between font-['IBM_Plex_Sans',_sans-serif] leading-[16px] not-italic text-[#545454] text-[13px] text-nowrap text-right whitespace-pre w-full">
      {labels.map((label, index) => (
        <p key={index} className="relative shrink-0">{label}</p>
      ))}
    </div>
  );
}

function MeasureRate({ rate }: { rate: number }) {
  // Convert rate from milliseconds to Hz (1000ms / rate)
  const rateHz = rate > 0 ? Math.round((1000 / rate) * 10) / 10 : 0;
  
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Measure rate">
      <div aria-hidden="true" className="absolute border border-[#efefef] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-start p-[8px] relative w-full">
          <div className="flex flex-col font-['IBM_Plex_Sans',_sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#545454] text-[13px] uppercase w-[min-content]" style={{ fontWeight: 'var(--font-weight-medium)' }}>
            <p className="leading-[16px]">measure rate</p>
          </div>
          <div className="content-stretch flex gap-[4px] items-center justify-center leading-[20px] not-italic relative shrink-0 text-[15px] text-nowrap text-right whitespace-pre">
            <p className="font-['IBM_Plex_Sans',_sans-serif] relative shrink-0 text-black" style={{ fontWeight: 'var(--font-weight-medium)' }}>{Math.round(rateHz)}</p>
            <p className="font-['IBM_Plex_Sans',_sans-serif] relative shrink-0 text-[#545454]" style={{ fontWeight: 'var(--font-weight-normal)' }}>Hz</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Parameters({ rate, thrustHistory, state, fuelMass }: { rate: number; thrustHistory: any[]; state: string; fuelMass?: string }) {
  const isRecording = state === 'R' || state === '0' || ['1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(state);
  const isActive = isRecording;
  
  // Calculate stats
  const totalImpulse = React.useMemo(() => {
    if (!isRecording || thrustHistory.length < 2) return 0;
    // Trapezoidal rule integration
    let impulse = 0;
    for (let i = 1; i < thrustHistory.length; i++) {
      const p1 = thrustHistory[i-1];
      const p2 = thrustHistory[i];
      const dt = (p2.time - p1.time) / 1000; // seconds
      const avgThrust = (p1.thrust + p2.thrust) / 2; // kg
      // Convert kg to Newtons: kg * 9.80665
      const force = avgThrust * 9.80665; 
      impulse += force * dt;
    }
    return Math.round(impulse);
  }, [thrustHistory, isRecording]);

  const peakThrust = React.useMemo(() => {
    if (!isRecording || thrustHistory.length === 0) return 0;
    const max = Math.max(...thrustHistory.map(d => d.thrust));
    return Math.round(max * 100) / 100; // 2 decimals? Prompt says just "6 kg"
  }, [thrustHistory, isRecording]);

  const averageThrust = React.useMemo(() => {
    if (!isRecording || thrustHistory.length === 0) return 0;
    const sum = thrustHistory.reduce((acc, curr) => acc + curr.thrust, 0);
    const avg = sum / thrustHistory.length;
    return Math.round(avg * 100) / 100;
  }, [thrustHistory, isRecording]);

  const specificImpulse = React.useMemo(() => {
    if (!fuelMass || !totalImpulse) return 0;
    const massGrams = parseFloat(fuelMass);
    if (isNaN(massGrams) || massGrams === 0) return 0;
    
    // Isp = Itotal / (mass_kg * g0)
    // Itotal is already in Ns
    const massKg = massGrams / 1000;
    const g0 = 9.80665;
    const isp = totalImpulse / (massKg * g0);
    return Math.round(isp);
  }, [totalImpulse, fuelMass]);

  const displayOrDash = (val: number, decimals: number = 0) => isActive ? val.toFixed(decimals).replace(/\.00$/, '') : '-';

  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Parameters">
      <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Parameters blocks">
        {/* Total Impulse */}
        <div className={`basis-0 grow min-h-px min-w-px relative rounded-[4px] shrink-0 ${isActive ? 'bg-[#f7f7f7]' : 'bg-[#f7f7f7] opacity-50'}`}>
          <div aria-hidden="true" className="absolute border border-[#efefef] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <div className="size-full">
            <div className="box-border content-stretch flex flex-col gap-[4px] items-start p-[8px] relative w-full">
              <div className="flex flex-col font-['IBM_Plex_Sans',_sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#545454] text-[13px] uppercase w-[min-content]" style={{ fontWeight: 'var(--font-weight-medium)' }}>
                <p className="leading-[16px] whitespace-pre-wrap">TOTAL IMPULSE</p>
              </div>
              <div className="content-stretch flex gap-[4px] items-center justify-center leading-[20px] not-italic relative shrink-0 text-[15px] text-nowrap text-right whitespace-pre">
                <p className="font-['IBM_Plex_Sans',_sans-serif] relative shrink-0 text-black" style={{ fontWeight: 'var(--font-weight-medium)' }}>{displayOrDash(totalImpulse)}</p>
                <p className="font-['IBM_Plex_Sans',_sans-serif] relative shrink-0 text-[#545454]" style={{ fontWeight: 'var(--font-weight-normal)' }}>Ns</p>
              </div>
            </div>
          </div>
        </div>
        {/* Average Thrust */}
        <div className={`basis-0 grow min-h-px min-w-px relative rounded-[4px] shrink-0 ${isActive ? 'bg-[#f7f7f7]' : 'bg-[#f7f7f7] opacity-50'}`}>
          <div aria-hidden="true" className="absolute border border-[#efefef] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <div className="size-full">
            <div className="box-border content-stretch flex flex-col gap-[4px] items-start p-[8px] relative w-full">
              <div className="flex flex-col font-['IBM_Plex_Sans',_sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#545454] text-[13px] uppercase w-[min-content]" style={{ fontWeight: 'var(--font-weight-medium)' }}>
                <p className="leading-[16px] whitespace-pre-wrap">Average thrust</p>
              </div>
              <div className="content-stretch flex gap-[4px] items-center justify-center leading-[20px] not-italic relative shrink-0 text-[15px] text-nowrap text-right whitespace-pre">
                <p className="font-['IBM_Plex_Sans',_sans-serif] relative shrink-0 text-black" style={{ fontWeight: 'var(--font-weight-medium)' }}>{displayOrDash(averageThrust)}</p>
                <p className="font-['IBM_Plex_Sans',_sans-serif] relative shrink-0 text-[#545454]" style={{ fontWeight: 'var(--font-weight-normal)' }}>kg</p>
              </div>
            </div>
          </div>
        </div>
        {/* Peak Thrust */}
        <div className={`basis-0 grow min-h-px min-w-px relative rounded-[4px] shrink-0 ${isActive ? 'bg-[#f7f7f7]' : 'bg-[#f7f7f7] opacity-50'}`}>
          <div aria-hidden="true" className="absolute border border-[#efefef] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <div className="size-full">
            <div className="box-border content-stretch flex flex-col gap-[4px] items-start p-[8px] relative w-full">
              <div className="flex flex-col font-['IBM_Plex_Sans',_sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#545454] text-[13px] uppercase w-[min-content]" style={{ fontWeight: 'var(--font-weight-medium)' }}>
                <p className="leading-[16px] whitespace-pre-wrap">Peak thrust</p>
              </div>
              <div className="content-stretch flex gap-[4px] items-center justify-center leading-[20px] not-italic relative shrink-0 text-[15px] text-nowrap text-right whitespace-pre">
                <p className="font-['IBM_Plex_Sans',_sans-serif] relative shrink-0 text-black" style={{ fontWeight: 'var(--font-weight-medium)' }}>{displayOrDash(peakThrust)}</p>
                <p className="font-['IBM_Plex_Sans',_sans-serif] relative shrink-0 text-[#545454]" style={{ fontWeight: 'var(--font-weight-normal)' }}>kg</p>
              </div>
            </div>
          </div>
        </div>
        <MeasureRate rate={rate} />
      </div>

      {/* Specific Impulse Block - only if fuelMass is provided */}
      {isActive && fuelMass && fuelMass.length > 0 && (
        <div className="bg-[#f7f7f7] relative rounded-[4px] shrink-0 w-full" data-name="Specific impulse">
          <div aria-hidden="true" className="absolute border border-[#efefef] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center justify-between not-italic p-[8px] relative w-full">
              <div className="flex flex-col font-['IBM_Plex_Sans',_sans-serif] justify-center leading-[0] relative shrink-0 text-[#545454] text-[13px] uppercase whitespace-nowrap" style={{ fontWeight: 'var(--font-weight-medium)' }}>
                <p className="leading-[16px]">Specific impulse</p>
              </div>
              <div className="content-stretch flex gap-[4px] items-center justify-center leading-[20px] relative shrink-0 text-[15px] text-right">
                <p className="font-['IBM_Plex_Sans',_sans-serif] relative shrink-0 text-black" style={{ fontWeight: 'var(--font-weight-medium)' }}>{specificImpulse}</p>
                <p className="font-['IBM_Plex_Sans',_sans-serif] relative shrink-0 text-[#545454]" style={{ fontWeight: 'var(--font-weight-normal)' }}>s</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export function DataSection({ state, thrust, rate, thrustHistory, fullHistory, sessionStartTime, recordingValues }: { state: string; thrust: number; rate: number; thrustHistory: any[]; fullHistory?: any[]; sessionStartTime: number | null; recordingValues?: RecordingValues }) {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Data section">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
          <Title state={state} thrust={thrust} engineId={recordingValues?.engineId} />
          <div className="h-[116px] w-full">
            <Graph thrustHistory={thrustHistory} sessionStartTime={sessionStartTime} state={state} />
          </div>
          <Parameters rate={rate} thrustHistory={fullHistory || thrustHistory} state={state} fuelMass={recordingValues?.fuelMass} />
        </div>
      </div>
    </div>
  );
}
