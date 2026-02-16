import svgPaths from "./svg-wbrwjplaj2";

function Circle() {
  return (
    <div className="relative shrink-0 size-[8px]" data-name="circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
        <g clipPath="url(#clip0_49_905)" id="circle">
          <path d={svgPaths.p7ba9400} fill="var(--fill-0, #D58000)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_49_905">
            <rect fill="white" height="8" width="8" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export default function RefreshRate() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative size-full" data-name="Refresh rate">
      <p className="font-['_IBM_Plex_Sans_:Medium',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#d58000] text-[15px] text-nowrap whitespace-pre">2Hz</p>
      <Circle />
    </div>
  );
}