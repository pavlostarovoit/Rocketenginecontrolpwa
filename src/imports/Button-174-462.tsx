import svgPaths from "./svg-qjfzu7y2ep";

function Numeric9Circle() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="numeric-9-circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="numeric-9-circle">
          <path d={svgPaths.p2cde8480} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Countdown() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Countdown">
      <p className="font-['_IBM_Plex_Sans_:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[15px] text-center text-white">Engine ignition in</p>
      <Numeric9Circle />
      <p className="font-['_IBM_Plex_Sans_:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[15px] text-center text-white">seconds</p>
    </div>
  );
}

function Abort() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="abort">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="abort">
          <path d={svgPaths.p10d5a180} fill="var(--fill-0, #C13211)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[12px] relative w-full">
          <Abort />
          <div className="flex flex-col font-['_IBM_Plex_Sans_:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#c13211] text-[15px] text-center whitespace-nowrap">
            <p className="leading-[20px]">Abort ignition</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Button() {
  return (
    <div className="bg-[#c13211] content-stretch flex flex-col gap-[16px] items-center justify-center px-[16px] py-[12px] relative rounded-[8px] shadow-[0px_-1px_8px_0px_rgba(42,42,42,0.08)] size-full" data-name="Button">
      <Countdown />
      <Button1 />
    </div>
  );
}