import svgPaths from "./svg-asvo5dc9ga";

function Component3() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="3">
      <p className="font-['Noto_Sans:Regular',_sans-serif] leading-[16px] not-italic relative shrink-0 text-[#545454] text-[12px] w-[8px]">3</p>
      <div className="basis-0 grow h-0 min-h-px min-w-px relative shrink-0" data-name="Guide line">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 312 1">
            <line id="Guide line" stroke="var(--stroke-0, #EFEFEF)" x2="312" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Component2() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="2">
      <p className="font-['Noto_Sans:Regular',_sans-serif] leading-[16px] not-italic relative shrink-0 text-[#545454] text-[12px] w-[8px]">2</p>
      <div className="basis-0 grow h-0 min-h-px min-w-px relative shrink-0" data-name="Guide line">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 312 1">
            <line id="Guide line" stroke="var(--stroke-0, #EFEFEF)" x2="312" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Component1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="1">
      <p className="font-['Noto_Sans:Regular',_sans-serif] leading-[16px] not-italic relative shrink-0 text-[#545454] text-[12px] w-[8px]">1</p>
      <div className="basis-0 grow h-0 min-h-px min-w-px relative shrink-0" data-name="Guide line">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 312 1">
            <line id="Guide line" stroke="var(--stroke-0, #EFEFEF)" x2="312" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Component0() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="0">
      <p className="font-['Noto_Sans:Regular',_sans-serif] leading-[16px] not-italic relative shrink-0 text-[#545454] text-[12px] w-[8px]">0</p>
      <div className="basis-0 grow h-0 min-h-px min-w-px relative shrink-0" data-name="Guide line">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 312 1">
            <line id="Guide line" stroke="var(--stroke-0, #EFEFEF)" x2="312" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Kilograms() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-between min-h-px min-w-px overflow-clip relative shrink-0 w-full" data-name="Kilograms">
      <Component3 />
      <Component2 />
      <Component1 />
      <Component0 />
    </div>
  );
}

function Seconds() {
  return (
    <div className="relative shrink-0 w-full" data-name="Seconds">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex font-['Noto_Sans:Regular',_sans-serif] items-center justify-between leading-[16px] not-italic pl-[12px] pr-0 py-0 relative text-[#545454] text-[12px] text-nowrap text-right w-full whitespace-pre">
          <p className="relative shrink-0">0</p>
          <p className="relative shrink-0">2</p>
          <p className="relative shrink-0">4</p>
          <p className="relative shrink-0">6</p>
          <p className="relative shrink-0">8</p>
          <p className="relative shrink-0">10</p>
          <p className="relative shrink-0">12</p>
          <p className="relative shrink-0">14</p>
        </div>
      </div>
    </div>
  );
}

function Data() {
  return (
    <div className="absolute bottom-[26px] left-[16px] right-0 top-0" data-name="Data">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 312 90">
        <g clipPath="url(#clip0_34_418)" id="Data">
          <path d={svgPaths.p1d2705c0} id="Data line" stroke="var(--stroke-0, #545454)" strokeDasharray="12 12" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_34_418">
            <rect fill="white" height="90" width="312" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export default function Graph() {
  return (
    <div className="content-stretch flex flex-col items-start justify-between overflow-clip relative rounded-[8px] size-full" data-name="Graph">
      <Kilograms />
      <Seconds />
      <Data />
    </div>
  );
}