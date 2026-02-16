import * as React from 'react';
import { useOutletContext } from 'react-router-dom';
import { DataSection } from '../components/DataSection';
import { CameraFeed } from '../components/CameraFeed';
import { RecordingValues } from '../components/SetupRecordingModal';
import { IgnitionControl } from '../components/IgnitionControl';

interface AppContextType {
  state: string;
  thrust: number;
  rate: number;
  thrustHistory: any[];
  fullHistory?: any[];
  sessionStartTime: number | null;
  isConnected: boolean;
  samples: number;
  serverTime: string;
  showToast: (fileName: string) => void;
}

export function Dashboard() {
  const context = useOutletContext<AppContextType>();
  
  // State for recording values (engine ID, fuel mass, etc.)
  const [recordingValues, setRecordingValues] = React.useState<RecordingValues>({
    engineId: '',
    fuelMass: '',
    notes: '',
  });

  // Guard against null context
  if (!context) return null;

  const { state, thrust, rate, thrustHistory, fullHistory, sessionStartTime, isConnected, samples, serverTime, showToast } = context;
  const isRecording = state === 'R' || state === '0';
  
  // Calculate current duration
  const currentDuration = React.useMemo(() => {
    if (!isRecording || !sessionStartTime || thrustHistory.length === 0) return 0;
    const latestTime = thrustHistory[thrustHistory.length - 1].time;
    return Math.max(0, latestTime - sessionStartTime);
  }, [isRecording, sessionStartTime, thrustHistory]);
  
  const handleRecordingStopped = (fileName: string) => {
    showToast(fileName);
  };

  return (
    <div className="flex flex-col flex-grow w-full relative z-0">
      <DataSection 
        state={state} 
        thrust={thrust} 
        rate={rate} 
        thrustHistory={thrustHistory}
        fullHistory={fullHistory} 
        sessionStartTime={sessionStartTime} 
        recordingValues={recordingValues}
      />
      <CameraFeed 
        disabled={!isConnected}
        className="basis-0 box-border content-stretch flex grow items-center justify-center min-h-px min-w-px pl-0 pr-px py-0 relative shrink-0 w-full" 
        recordingValues={recordingValues}
        onRecordingValuesChange={setRecordingValues}
        isRecordingGlobal={isRecording}
        currentDuration={currentDuration}
        serverTime={serverTime}
        samples={samples}
        onRecordingStopped={handleRecordingStopped}
        state={state}
      />
      
      {/* Ignite Engine / Countdown Control */}
      <IgnitionControl state={state} />
    </div>
  );
}
