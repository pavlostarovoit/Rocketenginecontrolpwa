import svgPaths from "./svg-0bp12cpru8";

function WifiStrengthOffOutline() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="wifi-strength-off-outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="wifi-strength-off-outline">
          <path d={svgPaths.p20eb4900} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Rssi() {
  return (
    <div className="content-stretch flex gap-[4px] items-center px-[4px] relative rounded-[4px] shrink-0" data-name="RSSI">
      <WifiStrengthOffOutline />
      <p className="font-['_IBM_Plex_Sans_:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[15px] text-black">No connection</p>
    </div>
  );
}

function DateTime() {
  return (
    <div className="content-stretch flex font-['_IBM_Plex_Sans_:Medium',sans-serif] gap-[4px] items-center leading-[20px] not-italic px-[4px] relative rounded-[4px] shrink-0 text-[#545454] text-[15px]" data-name="Date & Time">
      <p className="opacity-50 relative shrink-0">2 Oct 2025</p>
      <p className="relative shrink-0">11:03:23</p>
    </div>
  );
}

function StatusBar() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Status bar">
      <div aria-hidden="true" className="absolute border-[#efefef] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[8px] relative w-full">
          <Rssi />
          <DateTime />
        </div>
      </div>
    </div>
  );
}

function Placeholder() {
  return (
    <div className="bg-[#efefef] content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative w-full" data-name="Placeholder">
      <div aria-hidden="true" className="absolute border-[#efefef] border-b border-solid inset-[0_0_-1px_0] pointer-events-none" />
      <p className="font-['_IBM_Plex_Sans_:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#666] text-[16px]">No connection</p>
    </div>
  );
}

function Message() {
  return (
    <div className="relative shrink-0 w-full" data-name="Message">
      <div className="content-stretch flex flex-col font-['_IBM_Plex_Sans_:Regular',sans-serif] gap-[8px] items-start leading-[0] not-italic p-[16px] relative text-[#545454] text-[0px] text-[15px] w-full whitespace-pre-wrap">
        <p className="max-w-[624px] relative shrink-0 w-full">
          <span className="leading-[20px]">{`Connect to the `}</span>
          <span className="font-['IBM_Plex_Sans:Medium',sans-serif] leading-[20px] text-black">bdzh.space</span>
          <span className="leading-[20px]">{` Wi-Fi network using the password `}</span>
          <span className="font-['IBM_Plex_Sans:Medium',sans-serif] leading-[20px] text-black">12345678</span>
          <span className="leading-[20px]">.</span>
        </p>
        <p className="max-w-[624px] relative shrink-0 w-full">
          <span className="leading-[20px]">{`Ensure to enable `}</span>
          <span className="[text-decoration-skip-ink:none] decoration-solid font-['IBM_Plex_Sans:Medium',sans-serif] leading-[20px] text-black underline">chrome://flags#unsafely-treat-insecure-origin-as-secure</span>
          <span className="leading-[20px]">{` with `}</span>
          <span className="font-['IBM_Plex_Sans:Medium',sans-serif] leading-[20px] text-black">http://192.168.4.1</span>
          <span className="leading-[20px]">{` value and restart browser.`}</span>
        </p>
      </div>
    </div>
  );
}

function Message1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Message">
      <div aria-hidden="true" className="absolute border-[#efefef] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex font-['_IBM_Plex_Sans_:Medium',sans-serif] items-center justify-between leading-[16px] not-italic px-[16px] py-[8px] relative text-[#545454] text-[13px] uppercase w-full">
          <p className="opacity-50 relative shrink-0">BDZH</p>
          <p className="opacity-50 relative shrink-0">v2</p>
        </div>
      </div>
    </div>
  );
}

export default function InitialLoadingNoVideoLoaded() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative size-full" data-name="Initial loading - No video loaded">
      <StatusBar />
      <Placeholder />
      <Message />
      <Message1 />
    </div>
  );
}