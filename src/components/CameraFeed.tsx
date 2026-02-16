import * as React from 'react';
import { useEffect, useRef, useState, useCallback } from 'react';
import svgPaths from '../imports/svg-6eos6lj7at';
import svgPathsNew from '../imports/svg-mjjuvc3kaw';
import { APP_CONFIG } from '../config/app-config';
import { TYPOGRAPHY_CLASSES, TYPOGRAPHY_STYLES, COLORS } from '../utils/typography';
import { Flyout } from './Flyout';
import { SetupRecordingModal, RecordingValues } from './SetupRecordingModal';
import { StopRecordingModal } from './StopRecordingModal';
import { motion } from 'motion/react';

interface CameraFeedProps {
  className?: string;
  disabled?: boolean;
  recordingValues: RecordingValues;
  onRecordingValuesChange: (values: RecordingValues) => void;
  isRecordingGlobal?: boolean;
  currentDuration?: number;
  serverTime?: string;
  samples?: number;
  onRecordingStopped?: (fileName: string) => void;
  state?: string;
}

function formatCurrentTime() {
  const now = new Date();
  const d = now.getDate();
  const m = now.toLocaleString('en-GB', { month: 'short' });
  const y = now.getFullYear();
  const t = now.toLocaleTimeString('en-GB', { hour12: false });
  return `${d} ${m} ${y} ${t}`;
}

type CameraState = 'loading' | 'active' | 'denied' | 'error';

export function CameraFeed({ 
  className, 
  disabled = false, 
  recordingValues, 
  onRecordingValuesChange, 
  isRecordingGlobal, 
  currentDuration = 0,
  serverTime = '',
  samples = 0,
  onRecordingStopped,
  state
}: CameraFeedProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState<Blob[]>([]);
  const [zoom, setZoom] = useState(1);
  const [isSetupOpen, setIsSetupOpen] = useState(false);
  const [isStopOpen, setIsStopOpen] = useState(false);
  
  const [cameraState, setCameraState] = useState<CameraState>('loading');
  const [flashAvailable, setFlashAvailable] = useState(false);
  const [isFlashOn, setIsFlashOn] = useState(false);

  // Determine if we should show bottom stroke
  // Rule: Add bottom stroke for any State except S, 0
  const showBottomStroke = state && state !== 'S' && state !== '0';

  // Ignition states where recording interaction should be disabled
  const isIgnitionState = state && ['1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(state);
  
  // Sync local recording state with global state if provided
  useEffect(() => {
    if (isRecordingGlobal !== undefined) {
      if (isRecordingGlobal && !isRecording) {
        setIsRecording(true);
      } else if (!isRecordingGlobal && isRecording) {
        stopRecording();
      }
    }
  }, [isRecordingGlobal]);

  // Initialize camera
  const startCamera = useCallback(async () => {
    setCameraState('loading');
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: APP_CONFIG.camera.facingMode,
          width: { ideal: APP_CONFIG.camera.idealWidth },
          height: { ideal: APP_CONFIG.camera.idealHeight },
        },
        audio: true,
      });

      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
      setStream(mediaStream);
      setCameraState('active');

      // Check for torch/flash capability
      const track = mediaStream.getVideoTracks()[0];
      const capabilities = track.getCapabilities() as any;
      if (capabilities.torch || ('fillLightMode' in capabilities && capabilities.fillLightMode.includes('flash'))) {
        setFlashAvailable(true);
      }

    } catch (error: any) {
      console.error('Error accessing camera:', error);
      if (error.name === 'NotAllowedError' || error.name === 'PermissionDeniedError') {
        setCameraState('denied');
      } else {
        setCameraState('error');
      }
    }
  }, []);

  useEffect(() => {
    startCamera();

    return () => {
      // Cleanup: stop all tracks when component unmounts
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  // Apply zoom effect
  useEffect(() => {
    if (videoRef.current && stream) {
      const videoTrack = stream.getVideoTracks()[0];
      const capabilities = videoTrack.getCapabilities() as any;

      if ('zoom' in capabilities) {
        const constraints = {
          advanced: [{ zoom: zoom }],
        };
        videoTrack.applyConstraints(constraints).catch(console.error);
      }
    }
  }, [zoom, stream]);

  const toggleFlash = async () => {
    if (!stream || !flashAvailable) return;
    const track = stream.getVideoTracks()[0];
    const newFlashState = !isFlashOn;
    
    try {
      await track.applyConstraints({
        advanced: [{ torch: newFlashState } as any]
      });
      setIsFlashOn(newFlashState);
    } catch (err) {
      console.error('Error toggling flash:', err);
    }
  };

  // Handle actual recording start (called after setup)
  const startRecording = async () => {
    // 1. Send POST request to server to start logging data
    try {
      const payload = {
        fileName: `B${recordingValues.engineId}.txt`,
        propNote: recordingValues.notes,
        currentTime: formatCurrentTime(),
      };

      console.log('Sending recording configuration (POST):', payload);
      
      // Fire and forget the fetch
      fetch('http://192.168.4.1/rec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })
      .then(res => console.log('Recording start request sent, status:', res.status))
      .catch(err => console.error('Failed to send recording config:', err));

    } catch (error) {
      console.error('Error preparing recording:', error);
    }

    // Close the setup modal immediately
    setIsSetupOpen(false);
    setIsRecording(true);

    // 2. Start local camera recording if stream is available
    if (stream) {
      const mediaRecorder = new MediaRecorder(stream, {
        mimeType: 'video/webm',
      });

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          setRecordedChunks((prev) => [...prev, event.data]);
        }
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(recordedChunks, { type: 'video/webm' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `thrust-test-${Date.now()}.webm`;
        a.click();
        setRecordedChunks([]);
      };

      mediaRecorder.start();
      mediaRecorderRef.current = mediaRecorder;
    } else {
      console.warn('No camera stream available - only server recording started');
    }
  };

  // Stop recording
  const stopRecording = () => {
    // Stop local recording
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
      mediaRecorderRef.current.stop();
    }
    setIsRecording(false);
  };

  const handleStopSuccess = (savedFileName: string) => {
    setIsStopOpen(false);
    stopRecording();
    if (onRecordingStopped) {
      onRecordingStopped(savedFileName);
    }
  };

  // Toggle button handler
  const handleRecordClick = () => {
    if (isRecording) {
      setIsStopOpen(true);
    } else {
      setIsSetupOpen(true);
    }
  };

  // Increase zoom
  const handleZoom = () => {
    setZoom((prev) => Math.min(prev + APP_CONFIG.camera.zoomStep, APP_CONFIG.camera.maxZoom));
  };

  return (
    <div className={`${className} bg-[#efefef] relative overflow-hidden`}>
      {/* Video Feed - Only visible when active */}
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        className={`absolute inset-0 max-w-none object-cover pointer-events-none size-full object-center transition-opacity duration-300 ${cameraState === 'active' ? 'opacity-100' : 'opacity-0'}`}
      />
      
      {/* Bottom Border */}
      <div 
        aria-hidden="true" 
        className={`absolute border-[#efefef] border-solid bottom-0 left-0 pointer-events-none right-0 top-[-1px] ${showBottomStroke ? 'border-y' : 'border-t'}`} 
      />

      {/* Loading State */}
      {cameraState === 'loading' && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex items-center gap-[8px]">
            <p className={`${TYPOGRAPHY_CLASSES.h1Title} text-[#666666]`}>Camera loading</p>
            <div className="size-[20px] animate-spin">
              <svg className="block size-full" fill="none" viewBox="0 0 20 20">
                <path d={svgPathsNew.p204a7710} fill="#666666" />
              </svg>
            </div>
          </div>
        </div>
      )}

      {/* Denied / Error State */}
      {(cameraState === 'denied' || cameraState === 'error') && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-[8px] p-[32px] text-center">
          <div className="flex flex-col gap-[4px] items-center">
            <p className={`${TYPOGRAPHY_CLASSES.h1Title} text-[#666666] w-[296px]`}>
              No camera access
            </p>
            <p className={`${TYPOGRAPHY_CLASSES.h2Text} text-[#545454] w-[296px]`}>
              Please provide camera access permission to capture video.
            </p>
          </div>
          <button 
            onClick={() => startCamera()}
            className={`${TYPOGRAPHY_CLASSES.h2Title} text-[#0a64eb] underline mt-[8px] cursor-pointer hover:opacity-80 transition-opacity`}
          >
            Provide camera permission
          </button>
        </div>
      )}
      
      {/* Flashlight Control - Top Left */}
      <button
        onClick={toggleFlash}
        disabled={cameraState !== 'active' || !flashAvailable}
        className={`absolute top-[16px] left-[16px] w-[52px] p-[16px] rounded-[4px] flex items-center justify-center transition-colors ${
          isFlashOn ? 'bg-white' : 'bg-[#3d3c3c]'
        } ${(!flashAvailable || cameraState !== 'active') ? 'opacity-50 cursor-not-allowed' : 'active:bg-opacity-80'}`}
      >
        <div className="relative shrink-0 size-[20px]">
          <svg className="block size-full" fill="none" viewBox="0 0 20 20">
             <path d={svgPathsNew.p281d0900} fill={isFlashOn ? "black" : "white"} />
          </svg>
        </div>
      </button>

      {/* Record Button - Bottom Right */}
      <button
        onClick={handleRecordClick}
        disabled={(disabled && !isRecording) || isIgnitionState}
        className={`absolute bottom-[16px] box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip p-[16px] right-[16px] rounded-[4px] ${((disabled && !isRecording) || isIgnitionState) ? 'cursor-not-allowed' : ''}`}
        style={{ 
          backgroundColor: isRecording ? '#000000' : (disabled ? 'var(--muted)' : '#000000'),
          opacity: isIgnitionState ? 0.5 : 1 // Visual feedback for disabled state during ignition
        }}
      >
        {isRecording ? (
          // Recording State: Stop Icon + Timer
          <>
            <div className="relative shrink-0 size-[20px]">
              <svg className="block size-full" fill="none" viewBox="0 0 20 20">
                <path d="M15 15H5V5H15V15Z" fill="white" />
              </svg>
            </div>
            <div className={`${TYPOGRAPHY_CLASSES.h2Title} flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-center text-nowrap`} style={{ ...TYPOGRAPHY_STYLES.fontWeights.medium, color: 'white' }}>
              <p className="leading-[20px] whitespace-pre">{serverTime}</p>
            </div>
          </>
        ) : (
          // Standby State: Record Icon + Text
          <>
            <div className="relative shrink-0 size-[20px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                <g>
                  {/* Using existing record icon or new one - staying consistent with existing */}
                  <path d={svgPaths.p3cd9f000} fill={disabled ? "var(--muted-foreground)" : "white"} />
                </g>
              </svg>
            </div>
            <div className={`${TYPOGRAPHY_CLASSES.h2Title} flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-center text-nowrap`} style={{ ...TYPOGRAPHY_STYLES.fontWeights.medium, color: disabled ? 'var(--muted-foreground)' : 'white' }}>
              <p className="leading-[20px] whitespace-pre">Record</p>
            </div>
          </>
        )}
      </button>

      {/* Zoom Control - Top Right (Only when active) */}
      {cameraState === 'active' && (
        <>
          <button
            onClick={handleZoom}
            className="absolute bg-[#3d3c3c] box-border content-stretch flex flex-col gap-[4px] items-center justify-center p-[16px] right-[16.46px] rounded-[4px] top-[16px] w-[52px]"
          >
            <div className="relative shrink-0 size-[20px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                <g>
                  <path d={svgPaths.p8685080} fill="white" />
                </g>
              </svg>
            </div>
          </button>

          {/* Zoom indicator */}
          {zoom > 1 && (
            <div className={`${TYPOGRAPHY_CLASSES.h4Text} absolute top-[70px] right-[16px] bg-black/70 text-white px-[8px] py-[4px] rounded-[4px]`}>
              {zoom.toFixed(1)}x
            </div>
          )}
        </>
      )}

      {/* Setup Modal Flyout */}
      <Flyout isOpen={isSetupOpen} onClose={() => setIsSetupOpen(false)}>
        <SetupRecordingModal 
          onClose={() => setIsSetupOpen(false)}
          onRecord={startRecording}
          values={recordingValues}
          onChange={onRecordingValuesChange}
        />
      </Flyout>

      {/* Stop Modal Flyout */}
      <Flyout isOpen={isStopOpen} onClose={() => setIsStopOpen(false)}>
        <StopRecordingModal 
          onClose={() => setIsStopOpen(false)}
          onSave={handleStopSuccess}
          recordingValues={recordingValues}
          serverTime={serverTime}
          samples={samples}
        />
      </Flyout>
    </div>
  );
}
