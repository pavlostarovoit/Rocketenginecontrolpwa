import svgPaths from "./svg-82pavbcneh";

function Close() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="close">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g>
          <path d={svgPaths.p23fd7e00} fill="var(--fill-0, black)" id="close-24" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex items-center relative rounded-[4px] shrink-0" data-name="Button">
      <Close />
    </div>
  );
}

function Title() {
  return (
    <div className="bg-white content-stretch flex gap-[24px] items-start p-[16px] relative shrink-0" data-name="Title">
      <div aria-hidden="true" className="absolute border-[#efefef] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['_IBM_Plex_Sans_:Medium',sans-serif] justify-center leading-[0] not-italic relative self-stretch shrink-0 text-[16px] text-black w-[284px]">
        <p className="leading-[24px] whitespace-pre-wrap">Setup new recording</p>
      </div>
      <Button />
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex gap-[12px] items-start not-italic relative shrink-0 text-[15px] w-full" data-name="Label">
      <div className="flex flex-col font-['_IBM_Plex_Sans_:Medium',sans-serif] justify-center leading-[0] relative shrink-0 text-black whitespace-nowrap">
        <p className="leading-[20px]">Engine ID</p>
      </div>
      <p className="flex-[1_0_0] font-['_IBM_Plex_Sans_:Regular',sans-serif] leading-[20px] min-h-px min-w-px relative text-[#666] text-right whitespace-pre-wrap">0/6 latin characters, numbers</p>
    </div>
  );
}

function TextInput() {
  return (
    <div className="bg-[#efefef] relative rounded-[4px] shrink-0 w-full" data-name="Text input">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <div className="flex flex-col font-['_IBM_Plex_Sans_:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#777] text-[15px] whitespace-nowrap">
            <p className="leading-[20px]">B</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TextField1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Text field">
      <Label />
      <TextInput />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="flex flex-col font-['_IBM_Plex_Sans_:Medium',sans-serif] justify-center leading-[0] relative shrink-0 text-black whitespace-nowrap">
        <p className="leading-[20px]">Fuel mass</p>
      </div>
      <p className="font-['_IBM_Plex_Sans_:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#666] text-right">(optional)</p>
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex gap-[12px] items-start not-italic relative shrink-0 text-[15px] w-full" data-name="Label">
      <Frame />
      <p className="flex-[1_0_0] font-['_IBM_Plex_Sans_:Regular',sans-serif] leading-[20px] min-h-px min-w-px relative text-[#666] text-right whitespace-pre-wrap">ISP calculation, grams</p>
    </div>
  );
}

function TextInput1() {
  return (
    <div className="bg-[#efefef] relative rounded-[4px] shrink-0 w-full" data-name="Text input">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex items-center justify-end px-[16px] py-[12px] relative w-full">
          <div className="flex flex-col font-['_IBM_Plex_Sans_:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#777] text-[15px] whitespace-nowrap">
            <p className="leading-[20px]">g</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TextField2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Text field">
      <Label1 />
      <TextInput1 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="flex flex-col font-['_IBM_Plex_Sans_:Medium',sans-serif] justify-center leading-[0] relative shrink-0 text-black whitespace-nowrap">
        <p className="leading-[20px]">Notes</p>
      </div>
      <p className="font-['_IBM_Plex_Sans_:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#666] text-right">(optional)</p>
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex gap-[12px] items-start not-italic relative shrink-0 text-[15px] w-full" data-name="Label">
      <Frame1 />
      <p className="flex-[1_0_0] font-['_IBM_Plex_Sans_:Regular',sans-serif] leading-[20px] min-h-px min-w-px relative text-[#666] text-right whitespace-pre-wrap">ASCII symbols</p>
    </div>
  );
}

function TextInput2() {
  return (
    <div className="bg-[#efefef] relative rounded-[4px] shrink-0 w-full" data-name="Text input">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] w-full" />
      </div>
    </div>
  );
}

function TextField3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Text field">
      <Label2 />
      <TextInput2 />
    </div>
  );
}

function TextField() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text field">
      <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] relative w-full">
        <TextField1 />
        <TextField2 />
        <TextField3 />
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-black border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] py-[12px] relative w-full">
          <div className="flex flex-col font-['_IBM_Plex_Sans_:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-black text-center whitespace-nowrap">
            <p className="leading-[20px]">Cancel</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Record() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="record">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="record">
          <path d={svgPaths.p2ceb2700} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-black flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="Button">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[12px] relative w-full">
          <Record />
          <div className="flex flex-col font-['_IBM_Plex_Sans_:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-center text-white whitespace-nowrap">
            <p className="leading-[20px]">Record</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Buttons() {
  return (
    <div className="relative shrink-0 w-full" data-name="Buttons">
      <div className="content-stretch flex gap-[12px] items-start px-[16px] relative w-full">
        <Button1 />
        <Button2 />
      </div>
    </div>
  );
}

export default function SetupNewRecordingModal() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-center justify-end overflow-clip pb-[16px] relative rounded-tl-[4px] rounded-tr-[4px] shadow-[0px_-1px_8px_0px_rgba(42,42,42,0.08)] size-full" data-name="Setup new recording modal">
      <Title />
      <TextField />
      <div className="h-0 relative shrink-0 w-[360px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 360 1">
            <line id="Line 4" stroke="var(--stroke-0, #EFEFEF)" x2="360" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Buttons />
    </div>
  );
}