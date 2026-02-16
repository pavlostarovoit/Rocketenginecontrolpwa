import svgPaths from "./svg-cp60uvok19";

function WifiStrength4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="wifi-strength-4">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_36_303)" id="wifi-strength-4">
          <path d={svgPaths.p39fb3c00} fill="var(--fill-0, #545454)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_36_303">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Rssi() {
  return (
    <div className="content-stretch flex font-['Noto_Sans:Medium',_sans-serif] items-center leading-[20px] not-italic relative shrink-0 text-[#545454] text-[14px] text-nowrap whitespace-pre" data-name="RSSI">
      <p className="relative shrink-0">100</p>
      <p className="relative shrink-0">%</p>
    </div>
  );
}

function Circle() {
  return (
    <div className="relative shrink-0 size-[8px]" data-name="circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
        <g clipPath="url(#clip0_36_300)" id="circle">
          <path d={svgPaths.p102b0a80} fill="var(--fill-0, #545454)" id="Vector" opacity="0.5" />
        </g>
        <defs>
          <clipPath id="clip0_36_300">
            <rect fill="white" height="8" width="8" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function RefreshRate() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Refresh rate">
      <p className="font-['Noto_Sans:Regular',_sans-serif] leading-[20px] not-italic opacity-50 relative shrink-0 text-[#3d3c3c] text-[14px] text-nowrap whitespace-pre">10Hz</p>
      <Circle />
    </div>
  );
}

export default function Rssi1() {
  return (
    <div className="relative rounded-[4px] size-full" data-name="RSSI">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center px-[4px] py-0 relative size-full">
          <WifiStrength4 />
          <Rssi />
          <RefreshRate />
        </div>
      </div>
    </div>
  );
}