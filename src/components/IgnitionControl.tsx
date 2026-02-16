import * as React from 'react';
import { APP_CONFIG } from '../config/app-config';

// --- SVG Paths ---
// Paths extracted from the provided design files.
const SVG_PATHS = {
  numeric9: "M12 2C13.3132 2 14.6136 2.25866 15.8268 2.7612C17.0401 3.26375 18.1425 4.00035 19.0711 4.92893C19.9997 5.85752 20.7362 6.95991 21.2388 8.17317C21.7413 9.38642 22 10.6868 22 12C22 14.6522 20.9464 17.1957 19.0711 19.0711C17.1957 20.9464 14.6522 22 12 22C10.6868 22 9.38642 21.7413 8.17317 21.2388C6.95991 20.7362 5.85752 19.9997 4.92893 19.0711C3.05357 17.1957 2 14.6522 2 12C2 9.34784 3.05357 6.8043 4.92893 4.92893C6.8043 3.05357 9.34784 2 12 2ZM13 17C13.5304 17 14.0391 16.7893 14.4142 16.4142C14.7893 16.0391 15 15.5304 15 15V9C15 8.46957 14.7893 7.96086 14.4142 7.58579C14.0391 7.21071 13.5304 7 13 7H11C10.4696 7 9.96086 7.21071 9.58579 7.58579C9.21071 7.96086 9 8.46957 9 9V11C9 11.5304 9.21071 12.0391 9.58579 12.4142C9.96086 12.7893 10.4696 13 11 13H13V15H9V17H13ZM13 11H11V9H13V11Z",
  numeric8: "M11 13H13V15H11V13ZM11 9H13V11H11V9ZM11 17H13C13.5304 17 14.0391 16.7893 14.4142 16.4142C14.7893 16.0391 15 15.5304 15 15V13.5C15 13.1022 14.842 12.7206 14.5607 12.4393C14.2794 12.158 13.8978 12 13.5 12C13.8978 12 14.2794 11.842 14.5607 11.5607C14.842 11.2794 15 10.8978 15 10.5V9C15 7.89 14.1 7 13 7H11C10.4696 7 9.96086 7.21071 9.58579 7.58579C9.21071 7.96086 9 8.46957 9 9V10.5C9 10.8978 9.15804 11.2794 9.43934 11.5607C9.72064 11.842 10.1022 12 10.5 12C10.1022 12 9.72064 12.158 9.43934 12.4393C9.15804 12.7206 9 13.1022 9 13.5V15C9 16.11 9.9 17 11 17ZM12 2C13.3132 2 14.6136 2.25866 15.8268 2.7612C17.0401 3.26375 18.1425 4.00035 19.0711 4.92893C19.9997 5.85752 20.7362 6.95991 21.2388 8.17317C21.7413 9.38642 22 10.6868 22 12C22 14.6522 20.9464 17.1957 19.0711 19.0711C17.1957 20.9464 14.6522 22 12 22C10.6868 22 9.38642 21.7413 8.17317 21.2388C6.95991 20.7362 5.85752 19.9997 4.92893 19.0711C3.05357 17.1957 2 14.6522 2 12C2 9.34784 3.05357 6.8043 4.92893 4.92893C6.8043 3.05357 9.34784 2 12 2Z",
  numeric7: "M11 17L15 9V7H9V9H13L9 17H11ZM12 2C13.3132 2 14.6136 2.25866 15.8268 2.7612C17.0401 3.26375 18.1425 4.00035 19.0711 4.92893C19.9997 5.85752 20.7362 6.95991 21.2388 8.17317C21.7413 9.38642 22 10.6868 22 12C22 14.6522 20.9464 17.1957 19.0711 19.0711C17.1957 20.9464 14.6522 22 12 22C10.6868 22 9.38642 21.7413 8.17317 21.2388C6.95991 20.7362 5.85752 19.9997 4.92893 19.0711C3.05357 17.1957 2 14.6522 2 12C2 9.34784 3.05357 6.8043 4.92893 4.92893C6.8043 3.05357 9.34784 2 12 2Z",
  numeric6: "M11 7C10.4696 7 9.96086 7.21071 9.58579 7.58579C9.21071 7.96086 9 8.46957 9 9V15C9 15.5304 9.21071 16.0391 9.58579 16.4142C9.96086 16.7893 10.4696 17 11 17H13C13.5304 17 14.0391 16.7893 14.4142 16.4142C14.7893 16.0391 15 15.5304 15 15V13C15 12.4696 14.7893 11.9609 14.4142 11.5858C14.0391 11.2107 13.5304 11 13 11H11V9H15V7H11ZM11 13H13V15H11V13ZM12 2C13.3132 2 14.6136 2.25866 15.8268 2.7612C17.0401 3.26375 18.1425 4.00035 19.0711 4.92893C19.9997 5.85752 20.7362 6.95991 21.2388 8.17317C21.7413 9.38642 22 10.6868 22 12C22 14.6522 20.9464 17.1957 19.0711 19.0711C17.1957 20.9464 14.6522 22 12 22C10.6868 22 9.38642 21.7413 8.17317 21.2388C6.95991 20.7362 5.85752 19.9997 4.92893 19.0711C3.05357 17.1957 2 14.6522 2 12C2 9.34784 3.05357 6.8043 4.92893 4.92893C6.8043 3.05357 9.34784 2 12 2Z",
  numeric5: "M9 7V13H13V15H9V17H13C13.5304 17 14.0391 16.7893 14.4142 16.4142C14.7893 16.0391 15 15.5304 15 15V13C15 12.4696 14.7893 11.9609 14.4142 11.5858C14.0391 11.2107 13.5304 11 13 11H11V9H15V7H9ZM12 2C13.3132 2 14.6136 2.25866 15.8268 2.7612C17.0401 3.26375 18.1425 4.00035 19.0711 4.92893C19.9997 5.85752 20.7362 6.95991 21.2388 8.17317C21.7413 9.38642 22 10.6868 22 12C22 14.6522 20.9464 17.1957 19.0711 19.0711C17.1957 20.9464 14.6522 22 12 22C10.6868 22 9.38642 21.7413 8.17317 21.2388C6.95991 20.7362 5.85752 19.9997 4.92893 19.0711C3.05357 17.1957 2 14.6522 2 12C2 9.34784 3.05357 6.8043 4.92893 4.92893C6.8043 3.05357 9.34784 2 12 2Z",
  numeric4: "M9 7V13H13V17H15V7H13V11H11V7H9ZM12 2C13.3132 2 14.6136 2.25866 15.8268 2.7612C17.0401 3.26375 18.1425 4.00035 19.0711 4.92893C19.9997 5.85752 20.7362 6.95991 21.2388 8.17317C21.7413 9.38642 22 10.6868 22 12C22 14.6522 20.9464 17.1957 19.0711 19.0711C17.1957 20.9464 14.6522 22 12 22C10.6868 22 9.38642 21.7413 8.17317 21.2388C6.95991 20.7362 5.85752 19.9997 4.92893 19.0711C3.05357 17.1957 2 14.6522 2 12C2 9.34784 3.05357 6.8043 4.92893 4.92893C6.8043 3.05357 9.34784 2 12 2Z",
  numeric3: "M15 15V13.5C15 13.1022 14.842 12.7206 14.5607 12.4393C14.2794 12.158 13.8978 12 13.5 12C13.8978 12 14.2794 11.842 14.5607 11.5607C14.842 11.2794 15 10.8978 15 10.5V9C15 7.89 14.1 7 13 7H9V9H13V11H11V13H13V15H9V17H13C13.5304 17 14.0391 16.7893 14.4142 16.4142C14.7893 16.0391 15 15.5304 15 15ZM12 2C13.3132 2 14.6136 2.25866 15.8268 2.7612C17.0401 3.26375 18.1425 4.00035 19.0711 4.92893C19.9997 5.85752 20.7362 6.95991 21.2388 8.17317C21.7413 9.38642 22 10.6868 22 12C22 14.6522 20.9464 17.1957 19.0711 19.0711C17.1957 20.9464 14.6522 22 12 22C10.6868 22 9.38642 21.7413 8.17317 21.2388C6.95991 20.7362 5.85752 19.9997 4.92893 19.0711C3.05357 17.1957 2 14.6522 2 12C2 9.34784 3.05357 6.8043 4.92893 4.92893C6.8043 3.05357 9.34784 2 12 2Z",
  numeric2: "M9 7V9H13V11H11C10.4696 11 9.96086 11.2107 9.58579 11.5858C9.21071 11.9609 9 12.4696 9 13V17H11H15V15H11V13H13C13.5304 13 14.0391 12.7893 14.4142 12.4142C14.7893 12.0391 15 11.5304 15 11V9C15 8.46957 14.7893 7.96086 14.4142 7.58579C14.0391 7.21071 13.5304 7 13 7H9ZM12 2C13.3132 2 14.6136 2.25866 15.8268 2.7612C17.0401 3.26375 18.1425 4.00035 19.0711 4.92893C19.9997 5.85752 20.7362 6.95991 21.2388 8.17317C21.7413 9.38642 22 10.6868 22 12C22 14.6522 20.9464 17.1957 19.0711 19.0711C17.1957 20.9464 14.6522 22 12 22C10.6868 22 9.38642 21.7413 8.17317 21.2388C6.95991 20.7362 5.85752 19.9997 4.92893 19.0711C3.05357 17.1957 2 14.6522 2 12C2 9.34784 3.05357 6.8043 4.92893 4.92893C6.8043 3.05357 9.34784 2 12 2Z",
  numeric1: "M10 7V9H12V17H14V7H10ZM12 2C13.3132 2 14.6136 2.25866 15.8268 2.7612C17.0401 3.26375 18.1425 4.00035 19.0711 4.92893C19.9997 5.85752 20.7362 6.95991 21.2388 8.17317C21.7413 9.38642 22 10.6868 22 12C22 14.6522 20.9464 17.1957 19.0711 19.0711C17.1957 20.9464 14.6522 22 12 22C10.6868 22 9.38642 21.7413 8.17317 21.2388C6.95991 20.7362 5.85752 19.9997 4.92893 19.0711C3.05357 17.1957 2 14.6522 2 12C2 9.34784 3.05357 6.8043 4.92893 4.92893C6.8043 3.05357 9.34784 2 12 2Z",
  abort: "M10 1.66667C14.5833 1.66667 18.3333 5.41667 18.3333 10C18.3333 14.5833 14.5833 18.3333 10 18.3333C5.41667 18.3333 1.66667 14.5833 1.66667 10C1.66667 5.41667 5.41667 1.66667 10 1.66667ZM10 3.33333C8.41667 3.33333 7 3.83333 5.91667 4.75L15.25 14.0833C16.0833 12.9167 16.6667 11.5 16.6667 10C16.6667 6.33333 13.6667 3.33333 10 3.33333ZM14.0833 15.25L4.75 5.91667C3.83333 7 3.33333 8.41667 3.33333 10C3.33333 13.6667 6.33333 16.6667 10 16.6667C11.5833 16.6667 13 16.1667 14.0833 15.25Z"
};

// --- Components ---

function NumericIcon({ path }: { path: string }) {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <path d={path} fill="white" />
      </svg>
    </div>
  );
}

function AbortIcon() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <path d={SVG_PATHS.abort} fill="#C13211" />
      </svg>
    </div>
  );
}

function IgniteIcon() {
  return (
    <div className="size-[20px]">
       <svg className="block size-full" fill="none" viewBox="0 0 20 20">
         <path d="M14.7167 9.33333C14.525 9.08333 14.2917 8.86667 14.075 8.65C13.5167 8.15 12.8833 7.79167 12.35 7.26667C11.1083 6.05 10.8333 4.04167 11.625 2.5C10.8333 2.69167 10.1417 3.125 9.55 3.6C7.39167 5.33333 6.54167 8.39167 7.55833 11.0167C7.59167 11.1 7.625 11.1833 7.625 11.2917C7.625 11.475 7.5 11.6417 7.33333 11.7083C7.14167 11.7917 6.94167 11.7417 6.78333 11.6083C6.73333 11.5667 6.7 11.525 6.66667 11.4667C5.725 10.275 5.575 8.56667 6.20833 7.2C4.81667 8.33333 4.05833 10.25 4.16667 12.0583C4.21667 12.475 4.26667 12.8917 4.40833 13.3083C4.525 13.8083 4.75 14.3083 5 14.75C5.9 16.1917 7.45833 17.225 9.13333 17.4333C10.9167 17.6583 12.825 17.3333 14.1917 16.1C15.7167 14.7167 16.25 12.5 15.4667 10.6L15.3583 10.3833C15.1833 10 14.7167 9.33333 14.7167 9.33333ZM12.0833 14.5833C11.85 14.7833 11.4667 15 11.1667 15.0833C10.2333 15.4167 9.3 14.95 8.75 14.4C9.74167 14.1667 10.3333 13.4333 10.5083 12.6917C10.65 12.025 10.3833 11.475 10.275 10.8333C10.175 10.2167 10.1917 9.69167 10.4167 9.11667C10.575 9.43333 10.7417 9.75 10.9417 10C11.5833 10.8333 12.5917 11.2 12.8083 12.3333C12.8417 12.45 12.8583 12.5667 12.8583 12.6917C12.8833 13.375 12.5833 14.125 12.0833 14.5833Z" fill="white" />
       </svg>
     </div>
  );
}

// --- Main Component ---

interface IgnitionControlProps {
  state: string;
}

export function IgnitionControl({ state }: IgnitionControlProps) {
  const isRecording = state === 'R';
  const isCountdown = ['1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(state);

  // If not in a relevant state, return null
  if (!isRecording && !isCountdown) {
    return null;
  }

  const handleIgnite = async () => {
    try {
      const baseUrl = APP_CONFIG.server.url.replace('/mesData', ''); 
      const launchUrl = `${baseUrl}/launch`;
      
      console.log('Sending launch command to:', launchUrl);
      
      const response = await fetch(launchUrl, {
        method: 'POST',
      });
      
      if (!response.ok) {
        console.error('Launch request failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error sending launch command:', error);
    }
  };

  const handleAbort = async () => {
    try {
      const baseUrl = APP_CONFIG.server.url.replace('/mesData', '');
      const abortUrl = `${baseUrl}/abort`;
      
      console.log('Sending abort command to:', abortUrl);
      
      const response = await fetch(abortUrl, {
        method: 'POST',
      });
      
      if (!response.ok) {
        console.error('Abort request failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error sending abort command:', error);
    }
  };

  // State R: Ignite Button
  if (isRecording) {
    return (
      <div className="bg-white px-[16px] py-[12px] w-full">
         <button 
           onClick={handleIgnite}
           className="w-full bg-[#c13211] text-white rounded-[4px] py-[12px] px-[16px] flex items-center justify-center gap-[8px] shadow-[0px_-1px_8px_0px_rgba(42,42,42,0.08)] active:bg-[#a0290e] transition-colors"
         >
           <IgniteIcon />
           <span className="font-['IBM_Plex_Sans',_sans-serif] font-medium text-[15px] leading-[20px]">Ignite engine</span>
         </button>
      </div>
    );
  }

  // Countdown State
  const numericPath = {
    '9': SVG_PATHS.numeric9,
    '8': SVG_PATHS.numeric8,
    '7': SVG_PATHS.numeric7,
    '6': SVG_PATHS.numeric6,
    '5': SVG_PATHS.numeric5,
    '4': SVG_PATHS.numeric4,
    '3': SVG_PATHS.numeric3,
    '2': SVG_PATHS.numeric2,
    '1': SVG_PATHS.numeric1,
  }[state] || SVG_PATHS.numeric9;

  return (
    <div className="bg-white w-full">
      <div className="bg-[#c13211] relative shadow-[0px_-1px_8px_0px_rgba(42,42,42,0.08)] shrink-0 w-full" data-name="Button">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col gap-[16px] items-center justify-center px-[16px] py-[12px] relative w-full">
            
            {/* Countdown Header */}
            <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Countdown">
              <p className="font-['IBM_Plex_Sans',_sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[15px] text-center text-white">Engine ignition in</p>
              <NumericIcon path={numericPath} />
              <p className="font-['IBM_Plex_Sans',_sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[15px] text-center text-white">seconds</p>
            </div>

            {/* Abort Button */}
            <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="Button">
              <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                <button 
                  onClick={handleAbort}
                  className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[12px] relative w-full hover:bg-gray-50 active:bg-gray-100 transition-colors"
                >
                  <AbortIcon />
                  <div className="flex flex-col font-['IBM_Plex_Sans',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#c13211] text-[15px] text-center whitespace-nowrap">
                    <p className="leading-[20px]">Abort ignition</p>
                  </div>
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
