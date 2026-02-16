import * as React from 'react';
import { TYPOGRAPHY_CLASSES, TYPOGRAPHY_STYLES, COLORS } from '../utils/typography';
import svgPathsRssi from '../imports/svg-cp60uvok19';
import svgPathsCircle from '../imports/svg-eubfxrtni7';
import svgPathsWifi3 from '../imports/svg-89rup1yy87';
import svgPathsWifi2 from '../imports/svg-66smsd36y0';
import svgPathsWifi1 from '../imports/svg-4cxz24skwr';
import svgPathsDisconnected from '../imports/svg-4ui8lfeb8l';
import svgPathsInitial from '../imports/svg-0bp12cpru8';

function WifiStrength4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="wifi-strength-4">
      <svg className="block size-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_36_303)" id="wifi-strength-4">
          <path d={svgPathsRssi.p39fb3c00} fill="var(--fill-0, #545454)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_36_303">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function WifiStrength3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="wifi-strength-3">
      <svg className="block size-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_49_1063)" id="wifi-strength-3">
          <path d={svgPathsWifi3.p30e39f00} fill="var(--fill-0, #545454)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_49_1063">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function WifiStrength2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="wifi-strength-2">
      <svg className="block size-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_49_1158)" id="wifi-strength-2">
          <path d={svgPathsWifi2.p30e39f00} fill="var(--fill-0, #545454)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_49_1158">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function WifiStrength1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="wifi-strength-1">
      <svg className="block size-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_49_1072)" id="wifi-strength-1">
          <path d={svgPathsWifi1.p2ef2b100} fill={COLORS.warning} id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_49_1072">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Circle({ isVisible, color = '#545454', opacity = 1 }: { isVisible: boolean; color?: string; opacity?: number }) {
  return (
    <div className="relative shrink-0 size-[8px]" data-name="circle" style={{ opacity: isVisible ? opacity : 0 }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
        <g id="circle">
          <path d={svgPathsCircle.p7ba9400} fill={color} id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function RssiValue({ rssi }: { rssi: number }) {
  // Determine color based on RSSI value  // 1-25: warning orange, others: gray
  const isLowSignal = rssi >= 1 && rssi <= 25;
  const textColor = isLowSignal ? COLORS.warning : '#545454';
  
  return (
    <div className={`${TYPOGRAPHY_CLASSES.h2Title} content-stretch flex items-center not-italic relative shrink-0 text-nowrap whitespace-pre`} data-name="RSSI" style={{ ...TYPOGRAPHY_STYLES.fontWeights.medium, color: textColor }}>
      <p className="relative shrink-0">{rssi}</p>
      <p className="relative shrink-0">%</p>
    </div>
  );
}

function RefreshRate({ rate, showBlink }: { rate: number; showBlink: boolean }) {
  // Round refresh rate to nearest integer
  const roundedRate = Math.round(rate);
  
  // Use warning color if rate is 2Hz or lower
  const isLowRate = roundedRate <= 2;
  const textColor = isLowRate ? COLORS.warning : '#545454';
  const textOpacity = isLowRate ? 1 : 0.5;
  
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Refresh rate">
      <p 
        className={`${TYPOGRAPHY_CLASSES.h2Title} not-italic relative shrink-0 text-nowrap whitespace-pre`}
        style={{ ...TYPOGRAPHY_STYLES.fontWeights.medium, color: textColor, opacity: textOpacity }}
      >
        {roundedRate}Hz
      </p>
      <Circle isVisible={showBlink} color={textColor} opacity={textOpacity} />
    </div>
  );
}

// Component for disconnected state
function WifiStrengthOffOutline({ isInitial }: { isInitial?: boolean }) {
  const color = isInitial ? "var(--text-primary, black)" : "white";
  const path = isInitial ? svgPathsInitial.p20eb4900 : svgPathsDisconnected.p20eb4900;
  
  return (
    <div className="relative shrink-0 size-[20px]" data-name="wifi-strength-off-outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="wifi-strength-off-outline">
          <path d={path} fill={color} id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Rssi({ rssi, rate, isConnected, lastUpdateTime, isInitialLoading }: { rssi: number; rate: number; isConnected: boolean; lastUpdateTime: number | null; isInitialLoading?: boolean }) {
  const [showBlink, setShowBlink] = React.useState(false);
  const prevUpdateTimeRef = React.useRef<number | null>(null);

  // Trigger blink animation whenever new data is received (lastUpdateTime changes)
  React.useEffect(() => {
    if (isConnected && lastUpdateTime !== null) {
      // Check if this is a new update (different timestamp than previous)
      if (prevUpdateTimeRef.current !== lastUpdateTime) {
        prevUpdateTimeRef.current = lastUpdateTime;
        setShowBlink(true);
        const timer = setTimeout(() => {
          setShowBlink(false);
        }, 100); // Show for 100ms then hide
        
        return () => clearTimeout(timer);
      }
    }
  }, [lastUpdateTime, isConnected]);

  // Initial Loading State (White bg, Black text)
  if (isInitialLoading) {
    return (
      <div className="box-border content-stretch flex gap-[4px] items-center px-[4px] py-0 relative rounded-[4px] shrink-0" data-name="RSSI">
        <WifiStrengthOffOutline isInitial={true} />
        <p className={`${TYPOGRAPHY_CLASSES.h2Text} not-italic relative shrink-0 text-nowrap whitespace-pre text-black`} style={TYPOGRAPHY_STYLES.fontWeights.medium}>
          No connection
        </p>
      </div>
    );
  }

  // If disconnected (and not initial load), show "No connection" message with Red styling
  if (!isConnected) {
    return (
      <div className="box-border content-stretch flex gap-[4px] items-center px-[4px] py-0 relative rounded-[4px] shrink-0" data-name="RSSI">
        <WifiStrengthOffOutline />
        <p className={`${TYPOGRAPHY_CLASSES.h2Text} not-italic relative shrink-0 text-nowrap whitespace-pre text-white`} style={TYPOGRAPHY_STYLES.fontWeights.medium}>
          No connection
        </p>
      </div>
    );
  }
  
  // Determine which WiFi icon to show based on RSSI value
  // 76-100: wifi-strength-4
  // 51-75: wifi-strength-3
  // 26-50: wifi-strength-2
  // 1-25: wifi-strength-1 (with warning color)
  let WifiIcon;
  if (rssi >= 76) {
    WifiIcon = WifiStrength4;
  } else if (rssi >= 51) {
    WifiIcon = WifiStrength3;
  } else if (rssi >= 26) {
    WifiIcon = WifiStrength2;
  } else {
    WifiIcon = WifiStrength1;
  }
  
  return (
    <div className="relative rounded-[4px] size-full" data-name="RSSI">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center px-[4px] py-0 relative size-full">
          <WifiIcon />
          <RssiValue rssi={rssi} />
          <RefreshRate rate={rate} showBlink={showBlink} />
        </div>
      </div>
    </div>
  );
}

function DateTime({ isConnected }: { isConnected: boolean }) {
  const [currentTime, setCurrentTime] = React.useState(new Date());

  React.useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const dateStr = currentTime.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
  const timeStr = currentTime.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

  // Use white text when disconnected, default styling when connected
  const textColor = isConnected ? undefined : 'white';

  return (
    <div 
      className={`${TYPOGRAPHY_CLASSES.h2Title} box-border content-stretch flex gap-[4px] items-center not-italic px-[4px] py-0 relative rounded-[4px] shrink-0 text-nowrap whitespace-pre`}
      data-name="Date & Time" 
      style={{ 
        ...TYPOGRAPHY_STYLES.fontWeights.medium,
        color: textColor || 'var(--text-secondary)'
      }}
    >
      <p className="opacity-50 relative shrink-0">{dateStr}</p>
      <p className="relative shrink-0">{timeStr}</p>
    </div>
  );
}

export function StatusBar({ rssi, rate, isConnected, lastUpdateTime, isInitialLoading }: { rssi: number; rate: number; isConnected: boolean; lastUpdateTime: number | null; isInitialLoading?: boolean }) {
  // Use red background when disconnected, white when connected OR initial loading
  const backgroundColor = (isConnected || isInitialLoading) ? 'white' : COLORS.error;
  
  return (
    <div className="relative shrink-0 w-full" data-name="Status bar" style={{ backgroundColor }}>
      <div aria-hidden="true" className="absolute border-[#efefef] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between p-[8px] relative w-full">
          <Rssi rssi={rssi} rate={rate} isConnected={isConnected} lastUpdateTime={lastUpdateTime} isInitialLoading={isInitialLoading} />
          <DateTime isConnected={isConnected || isInitialLoading || false} />
        </div>
      </div>
    </div>
  );
}
