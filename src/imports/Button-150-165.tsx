import svgPaths from "./svg-zvx6prvdmd";

function Loader() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Loader">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="loading">
          <path d={svgPaths.p204a7710} fill="var(--fill-0, #EFEFEF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

export default function Button() {
  return (
    <div className="bg-[#777] content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[4px] size-full" data-name="Button">
      <Loader />
      <div className="flex flex-col font-['_IBM_Plex_Sans_:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#efefef] text-[15px] text-center whitespace-nowrap">
        <p className="leading-[20px]">Text</p>
      </div>
    </div>
  );
}