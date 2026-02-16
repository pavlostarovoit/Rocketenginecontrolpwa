import svgPaths from "./svg-8wdqkjm58d";

function Title1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center min-h-px min-w-px not-italic relative text-black" data-name="Title">
      <div className="flex flex-col font-['_IBM_Plex_Sans_:Medium',sans-serif] justify-center leading-[0] relative shrink-0 text-[16px] w-full">
        <p className="leading-[24px] whitespace-pre-wrap">Setup new recording</p>
      </div>
      <p className="font-['_IBM_Plex_Sans_:Light',sans-serif] leading-[20px] relative shrink-0 text-[15px] w-full whitespace-pre-wrap">{`Recorded file will be saved to SD card. `}</p>
    </div>
  );
}

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
    <div className="bg-white relative shrink-0 w-full" data-name="Title">
      <div aria-hidden="true" className="absolute border-[#efefef] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex gap-[24px] items-start p-[16px] relative w-full">
        <Title1 />
        <Button />
      </div>
    </div>
  );
}

function FileInfo() {
  return (
    <div className="content-stretch flex font-['_IBM_Plex_Sans_:Regular',sans-serif] gap-[4px] items-start leading-[20px] relative shrink-0 text-[#777]" data-name="File info">
      <p className="relative shrink-0">00:05:023</p>
      <p className="relative shrink-0">/</p>
      <p className="relative shrink-0">232323</p>
      <p className="relative shrink-0">samples</p>
    </div>
  );
}

function FileStatus() {
  return (
    <div className="relative shrink-0 w-full" data-name="File status">
      <div className="content-stretch flex flex-col gap-[4px] items-start not-italic px-[16px] relative text-[15px] w-full">
        <div className="flex flex-col font-['_IBM_Plex_Sans_:Medium',sans-serif] justify-center leading-[0] relative shrink-0 text-black whitespace-nowrap">
          <p>
            <span className="leading-[20px]">B</span>
            <span className="font-['Noto_Sans:Medium',sans-serif] leading-[20px] not-italic">5333.1</span>
            <span className="leading-[20px]">.txt</span>
          </p>
        </div>
        <FileInfo />
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="flex flex-col font-['_IBM_Plex_Sans_:Medium',sans-serif] justify-center leading-[0] relative shrink-0 text-black whitespace-nowrap">
        <p className="leading-[20px]">Study notes</p>
      </div>
      <p className="font-['_IBM_Plex_Sans_:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#666] text-right">(optional)</p>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex gap-[12px] items-start not-italic relative shrink-0 text-[15px] w-full" data-name="Label">
      <Frame />
      <p className="flex-[1_0_0] font-['_IBM_Plex_Sans_:Regular',sans-serif] leading-[20px] min-h-px min-w-px relative text-[#666] text-right whitespace-pre-wrap">ASCII symbols</p>
    </div>
  );
}

function TextInput() {
  return (
    <div className="bg-[#efefef] h-[264px] relative rounded-[4px] shrink-0 w-full" data-name="Text input">
      <div className="content-stretch flex items-start px-[16px] py-[12px] size-full" />
    </div>
  );
}

function TextArea1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Text area">
      <Label />
      <TextInput />
    </div>
  );
}

function TextArea() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text area">
      <div className="content-stretch flex flex-col items-start px-[16px] relative w-full">
        <TextArea1 />
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

function Stop() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="stop">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="stop">
          <path d="M15 15H5V5H15V15Z" fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#c13211] flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="Button">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[12px] relative w-full">
          <Stop />
          <div className="flex flex-col font-['_IBM_Plex_Sans_:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-center text-white whitespace-nowrap">
            <p className="leading-[20px]">{`Stop & Save`}</p>
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

export default function Modal() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-center justify-end overflow-clip pb-[16px] relative rounded-tl-[4px] rounded-tr-[4px] shadow-[0px_-1px_8px_0px_rgba(42,42,42,0.08)] size-full" data-name="Modal">
      <Title />
      <FileStatus />
      <TextArea />
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