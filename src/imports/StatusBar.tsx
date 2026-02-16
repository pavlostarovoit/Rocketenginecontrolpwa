import svgPaths from "./svg-3fdqdgozly";

function WifiStrengthOffOutline() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="wifi-strength-off-outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_58_1402)" id="wifi-strength-off-outline">
          <path d={svgPaths.p3d42e670} fill="var(--fill-0, white)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_58_1402">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Rssi() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center px-[4px] py-0 relative rounded-[4px] shrink-0" data-name="RSSI">
      <WifiStrengthOffOutline />
      <p className="font-['_IBM_Plex_Sans_:Medium',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[15px] text-nowrap text-white whitespace-pre">No connection</p>
    </div>
  );
}

function DateTime() {
  return (
    <div className="box-border content-stretch flex font-['_IBM_Plex_Sans_:Medium',_sans-serif] gap-[4px] items-center leading-[20px] not-italic px-[4px] py-0 relative rounded-[4px] shrink-0 text-[15px] text-nowrap text-white whitespace-pre" data-name="Date & Time">
      <p className="opacity-50 relative shrink-0">2 Oct 2025</p>
      <p className="relative shrink-0">11:03</p>
    </div>
  );
}

export default function StatusBar() {
  return (
    <div className="bg-[#c13211] relative size-full" data-name="Status bar">
      <div aria-hidden="true" className="absolute border-[#efefef] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between p-[8px] relative size-full">
          <Rssi />
          <DateTime />
        </div>
      </div>
    </div>
  );
}