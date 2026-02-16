export default function TextInput() {
  return (
    <div className="bg-[#efefef] content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative rounded-[4px] size-full" data-name="Text input">
      <div aria-hidden="true" className="absolute border-2 border-black border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col font-['_IBM_Plex_Sans_:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#777] text-[15px] whitespace-nowrap">
        <p className="leading-[20px]">B</p>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['_IBM_Plex_Sans_:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[15px] text-black">
        <p className="leading-[20px] whitespace-pre-wrap">|</p>
      </div>
    </div>
  );
}