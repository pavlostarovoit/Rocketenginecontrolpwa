import svgPaths from "./svg-25pklir3jb";

function Title() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center leading-[0] min-h-px min-w-px not-italic py-[12px] relative text-[15px] text-white" data-name="Title">
      <div className="flex flex-col font-['_IBM_Plex_Sans_:Medium',sans-serif] justify-center relative shrink-0 whitespace-nowrap">
        <p className="leading-[20px]">B5333.1.txt</p>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['_IBM_Plex_Sans_:Regular',sans-serif] justify-center min-h-px min-w-px relative">
        <p className="leading-[20px] whitespace-pre-wrap">saved to SD card.</p>
      </div>
    </div>
  );
}

function Close() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="close">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g>
          <path d={svgPaths.p23fd7e00} fill="var(--fill-0, white)" id="close-24" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex h-full items-center px-[16px] relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#0a771a] border-l border-solid inset-0 pointer-events-none" />
      <Close />
    </div>
  );
}

export default function Toast() {
  return (
    <div className="bg-[#0d881f] content-stretch flex gap-[16px] items-center overflow-clip pl-[16px] relative rounded-[4px] size-full" data-name="Toast">
      <Title />
      <div className="flex flex-row items-center self-stretch">
        <Button />
      </div>
    </div>
  );
}