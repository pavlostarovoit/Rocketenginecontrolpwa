import svgPaths from "./svg-4ui8lfeb8l";

function WifiStrengthOffOutline() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="wifi-strength-off-outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="wifi-strength-off-outline">
          <path d={svgPaths.p20eb4900} fill="var(--fill-0, #C13211)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

export default function Rssi() {
  return (
    <div className="relative rounded-[4px] size-full" data-name="RSSI">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center px-[4px] py-0 relative size-full">
          <WifiStrengthOffOutline />
          <p className="font-['Noto_Sans:Medium',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#c13211] text-[14px] text-nowrap whitespace-pre">No connection</p>
        </div>
      </div>
    </div>
  );
}