import svgPaths from "./svg-q71hn9fop1";
import imgCameraViewport from "figma:asset/c7c185243b765067fcc555b2183fff8de0e33baf.png";

function WifiStrength() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="wifi-strength-4">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="wifi-strength-4">
          <path d={svgPaths.p16e59a80} fill="var(--fill-0, #545454)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Rssi1() {
  return (
    <div className="content-stretch flex font-['_IBM_Plex_Sans_:Medium',sans-serif] items-center leading-[20px] not-italic relative shrink-0 text-[#545454] text-[15px]" data-name="RSSI">
      <p className="relative shrink-0">100</p>
      <p className="relative shrink-0">%</p>
    </div>
  );
}

function Circle() {
  return (
    <div className="relative shrink-0 size-[8px]" data-name="circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
        <g id="circle">
          <path d={svgPaths.p3e39e400} fill="var(--fill-0, #545454)" id="Vector" opacity="0.5" />
        </g>
      </svg>
    </div>
  );
}

function RefreshRate() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Refresh rate">
      <p className="font-['_IBM_Plex_Sans_:Medium',sans-serif] leading-[20px] not-italic opacity-50 relative shrink-0 text-[#545454] text-[15px]">10Hz</p>
      <Circle />
    </div>
  );
}

function Rssi() {
  return (
    <div className="content-stretch flex gap-[4px] items-center px-[4px] relative rounded-[4px] shrink-0 w-[105px]" data-name="RSSI">
      <WifiStrength />
      <Rssi1 />
      <RefreshRate />
    </div>
  );
}

function DateTime() {
  return (
    <div className="content-stretch flex font-['_IBM_Plex_Sans_:Medium',sans-serif] gap-[4px] items-center leading-[20px] not-italic px-[4px] relative rounded-[4px] shrink-0 text-[#545454] text-[15px]" data-name="Date & Time">
      <p className="opacity-50 relative shrink-0">2 Oct 2025</p>
      <p className="relative shrink-0">11:03:23</p>
    </div>
  );
}

function StatusBar() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Status bar">
      <div aria-hidden="true" className="absolute border-[#efefef] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[8px] relative w-full">
          <Rssi />
          <DateTime />
        </div>
      </div>
    </div>
  );
}

function Status() {
  return (
    <div className="bg-[#545454] relative shrink-0" data-name="Status">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[inherit]">
        <div className="flex flex-col font-['_IBM_Plex_Sans_:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-center text-white uppercase whitespace-nowrap">
          <p className="leading-[16px]">standby</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#545454] border-b-2 border-dashed inset-[0_0_-2px_0] pointer-events-none" />
    </div>
  );
}

function Thrust() {
  return (
    <div className="content-stretch flex gap-[4px] items-center not-italic relative shrink-0 text-right" data-name="Thrust">
      <p className="font-['_IBM_Plex_Sans_:Medium',sans-serif] leading-[24px] relative shrink-0 text-[16px] text-black">5.02</p>
      <p className="font-['_IBM_Plex_Sans_:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#545454] text-[15px]">kg</p>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Title">
      <Status />
      <Thrust />
    </div>
  );
}

function Component3() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="3">
      <p className="font-['_IBM_Plex_Sans_:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#545454] text-[13px] w-[8px] whitespace-pre-wrap">3</p>
      <div className="flex-[1_0_0] h-0 min-h-px min-w-px relative" data-name="Guide line">
        <div className="absolute inset-[-1px_0_0_0]">
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
      <p className="font-['_IBM_Plex_Sans_:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#545454] text-[13px] w-[8px] whitespace-pre-wrap">2</p>
      <div className="flex-[1_0_0] h-0 min-h-px min-w-px relative" data-name="Guide line">
        <div className="absolute inset-[-1px_0_0_0]">
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
      <p className="font-['_IBM_Plex_Sans_:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#545454] text-[13px] w-[8px] whitespace-pre-wrap">1</p>
      <div className="flex-[1_0_0] h-0 min-h-px min-w-px relative" data-name="Guide line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 312 1">
            <line id="Guide line" stroke="var(--stroke-0, #EFEFEF)" x2="312" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="0">
      <p className="font-['_IBM_Plex_Sans_:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#545454] text-[13px] w-[8px] whitespace-pre-wrap">0</p>
      <div className="flex-[1_0_0] h-0 min-h-px min-w-px relative" data-name="Guide line">
        <div className="absolute inset-[-1px_0_0_0]">
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
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-h-px min-w-px overflow-clip relative w-full" data-name="Kilograms">
      <Component3 />
      <Component2 />
      <Component1 />
      <Component />
    </div>
  );
}

function Seconds() {
  return (
    <div className="relative shrink-0 w-full" data-name="Seconds">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex font-['_IBM_Plex_Sans_:Regular',sans-serif] items-center justify-between leading-[16px] not-italic pl-[12px] relative text-[#545454] text-[13px] text-right w-full">
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
    <div className="absolute inset-[0_0_26px_16px]" data-name="Data">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 312 90">
        <g clipPath="url(#clip0_149_1586)" id="Data">
          <path d={svgPaths.p1d2705c0} id="Data line" stroke="var(--stroke-0, #545454)" strokeDasharray="8 8" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_149_1586">
            <rect fill="white" height="90" width="312" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Graph() {
  return (
    <div className="content-stretch flex flex-col h-[116px] items-start justify-between overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Graph">
      <Kilograms />
      <Seconds />
      <Data />
    </div>
  );
}

function Value() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center leading-[20px] relative shrink-0 text-[15px] text-right" data-name="Value">
      <p className="font-['_IBM_Plex_Sans_:Medium',sans-serif] relative shrink-0 text-black">-</p>
      <p className="font-['_IBM_Plex_Sans_:Regular',sans-serif] relative shrink-0 text-[#545454]">Ns</p>
    </div>
  );
}

function TotalImpulse() {
  return (
    <div className="bg-[#f7f7f7] flex-[1_0_0] min-h-px min-w-px opacity-50 relative rounded-[4px]" data-name="Total impulse">
      <div aria-hidden="true" className="absolute border border-[#efefef] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col gap-[4px] items-start not-italic p-[8px] relative w-full">
        <div className="flex flex-col font-['_IBM_Plex_Sans_:Medium',sans-serif] justify-center leading-[0] min-w-full relative shrink-0 text-[#545454] text-[13px] uppercase w-[min-content]">
          <p className="leading-[16px] whitespace-pre-wrap">TOTAL IMPULSE</p>
        </div>
        <Value />
      </div>
    </div>
  );
}

function Value1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center leading-[20px] relative shrink-0 text-[15px] text-right" data-name="Value">
      <p className="font-['_IBM_Plex_Sans_:Medium',sans-serif] relative shrink-0 text-black">-</p>
      <p className="font-['_IBM_Plex_Sans_:Regular',sans-serif] relative shrink-0 text-[#545454]">kg</p>
    </div>
  );
}

function AverageThrust() {
  return (
    <div className="bg-[#f7f7f7] flex-[1_0_0] min-h-px min-w-px opacity-50 relative rounded-[4px]" data-name="Average thrust">
      <div aria-hidden="true" className="absolute border border-[#efefef] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col gap-[4px] items-start not-italic p-[8px] relative w-full">
        <div className="flex flex-col font-['_IBM_Plex_Sans_:Medium',sans-serif] justify-center leading-[0] min-w-full relative shrink-0 text-[#545454] text-[13px] uppercase w-[min-content]">
          <p className="leading-[16px] whitespace-pre-wrap">AVERAGE THRUST</p>
        </div>
        <Value1 />
      </div>
    </div>
  );
}

function Value2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center leading-[20px] relative shrink-0 text-[15px] text-right" data-name="Value">
      <p className="font-['_IBM_Plex_Sans_:Medium',sans-serif] relative shrink-0 text-black">-</p>
      <p className="font-['_IBM_Plex_Sans_:Regular',sans-serif] relative shrink-0 text-[#545454]">kg</p>
    </div>
  );
}

function PeakThrust() {
  return (
    <div className="bg-[#f7f7f7] flex-[1_0_0] min-h-px min-w-px opacity-50 relative rounded-[4px]" data-name="Peak thrust">
      <div aria-hidden="true" className="absolute border border-[#efefef] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col gap-[4px] items-start not-italic p-[8px] relative w-full">
        <div className="flex flex-col font-['_IBM_Plex_Sans_:Medium',sans-serif] justify-center leading-[0] min-w-full relative shrink-0 text-[#545454] text-[13px] uppercase w-[min-content]">
          <p className="leading-[16px] whitespace-pre-wrap">PEAK THRUST</p>
        </div>
        <Value2 />
      </div>
    </div>
  );
}

function Value3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center leading-[20px] relative shrink-0 text-[15px] text-right" data-name="Value">
      <p className="font-['_IBM_Plex_Sans_:Medium',sans-serif] relative shrink-0 text-black">500</p>
      <p className="font-['_IBM_Plex_Sans_:Regular',sans-serif] relative shrink-0 text-[#545454]">Hz</p>
    </div>
  );
}

function MeasureRate() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="Measure rate">
      <div aria-hidden="true" className="absolute border border-[#efefef] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col gap-[4px] items-start not-italic p-[8px] relative w-full">
        <div className="flex flex-col font-['_IBM_Plex_Sans_:Medium',sans-serif] justify-center leading-[0] min-w-full relative shrink-0 text-[#545454] text-[13px] uppercase w-[min-content]">
          <p className="leading-[16px] whitespace-pre-wrap">MEASURE RATE</p>
        </div>
        <Value3 />
      </div>
    </div>
  );
}

function ParametersBlocks() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Parameters blocks">
      <TotalImpulse />
      <AverageThrust />
      <PeakThrust />
      <MeasureRate />
    </div>
  );
}

function Parameters() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Parameters">
      <ParametersBlocks />
    </div>
  );
}

function DataSection() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Data section">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
        <Title />
        <Graph />
        <Parameters />
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

function RecordButton() {
  return (
    <div className="absolute bg-black bottom-[16px] content-stretch flex gap-[8px] items-center justify-center overflow-clip p-[16px] right-[16px] rounded-[4px]" data-name="Record button">
      <Record />
      <div className="flex flex-col font-['_IBM_Plex_Sans_:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-center text-white whitespace-nowrap">
        <p className="leading-[20px]">Record</p>
      </div>
    </div>
  );
}

function MagnifyPlusOutline() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="magnify-plus-outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="magnify-plus-outline">
          <path d={svgPaths.p8685080} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ZoomControl() {
  return (
    <div className="absolute bg-[#3d3c3c] content-stretch flex flex-col items-center justify-center p-[16px] right-[16.46px] rounded-[4px] top-[16px] w-[52px]" data-name="Zoom control">
      <MagnifyPlusOutline />
    </div>
  );
}

function CameraViewport() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px pr-px relative w-full" data-name="Camera viewport">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCameraViewport} />
      <div aria-hidden="true" className="absolute border-[#efefef] border-solid border-t inset-[-1px_0_0_0] pointer-events-none" />
      <RecordButton />
      <ZoomControl />
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

function Title1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Title">
      <div aria-hidden="true" className="absolute border-[#efefef] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex gap-[24px] items-start p-[16px] relative w-full">
        <div className="flex flex-[1_0_0] flex-col font-['_IBM_Plex_Sans_:Medium',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative self-stretch text-[16px] text-black">
          <p className="leading-[24px] whitespace-pre-wrap">Setup new recording</p>
        </div>
        <Button />
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex gap-[12px] items-start not-italic relative shrink-0 text-[15px] w-full" data-name="Label">
      <div className="flex flex-col font-['_IBM_Plex_Sans_:Medium',sans-serif] justify-center leading-[0] relative shrink-0 text-black whitespace-nowrap">
        <p className="leading-[20px]">Engine ID</p>
      </div>
      <p className="flex-[1_0_0] font-['_IBM_Plex_Sans_:Regular',sans-serif] leading-[20px] min-h-px min-w-px relative text-[#666] text-right whitespace-pre-wrap">6/6 latin characters, numbers</p>
    </div>
  );
}

function Close1() {
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

function Button1() {
  return (
    <div className="content-stretch flex items-center relative rounded-[4px] shrink-0" data-name="Button">
      <Close1 />
    </div>
  );
}

function TextInput() {
  return (
    <div className="bg-[#efefef] relative rounded-[4px] shrink-0 w-full" data-name="Text input">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative w-full">
          <div className="flex flex-col font-['_IBM_Plex_Sans_:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#777] text-[15px] whitespace-nowrap">
            <p className="leading-[20px]">B</p>
          </div>
          <div className="flex flex-[1_0_0] flex-col font-['_IBM_Plex_Sans_:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[15px] text-black">
            <p className="leading-[20px] whitespace-pre-wrap">5333.1</p>
          </div>
          <Button1 />
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

function Close2() {
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

function Button2() {
  return (
    <div className="content-stretch flex items-center relative rounded-[4px] shrink-0" data-name="Button">
      <Close2 />
    </div>
  );
}

function TextInput1() {
  return (
    <div className="bg-[#efefef] relative rounded-[4px] shrink-0 w-full" data-name="Text input">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative w-full">
          <div className="flex flex-[1_0_0] flex-col font-['_IBM_Plex_Sans_:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[15px] text-black">
            <p className="leading-[20px] whitespace-pre-wrap">5210</p>
          </div>
          <div className="flex flex-col font-['_IBM_Plex_Sans_:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#777] text-[15px] whitespace-nowrap">
            <p className="leading-[20px]">g</p>
          </div>
          <Button2 />
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

function Close3() {
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

function Button3() {
  return (
    <div className="content-stretch flex items-center relative rounded-[4px] shrink-0" data-name="Button">
      <Close3 />
    </div>
  );
}

function TextInput2() {
  return (
    <div className="bg-[#efefef] relative rounded-[4px] shrink-0 w-full" data-name="Text input">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative w-full">
          <div className="flex flex-[1_0_0] flex-col font-['_IBM_Plex_Sans_:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[15px] text-black">
            <p className="leading-[20px] whitespace-pre-wrap">Some notes here</p>
          </div>
          <Button3 />
        </div>
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

function Button4() {
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

function Record1() {
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

function Button5() {
  return (
    <div className="bg-black flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="Button">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[12px] relative w-full">
          <Record1 />
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
        <Button4 />
        <Button5 />
      </div>
    </div>
  );
}

function Modal() {
  return (
    <div className="absolute bg-white bottom-[-1px] content-stretch flex flex-col gap-[16px] items-center justify-end left-[0.5px] overflow-clip pb-[16px] right-[-0.5px] rounded-tl-[4px] rounded-tr-[4px] shadow-[0px_-1px_8px_0px_rgba(42,42,42,0.08)]" data-name="Modal">
      <Title1 />
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

function Close4() {
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

function Button6() {
  return (
    <div className="content-stretch flex items-center relative rounded-[4px] shrink-0" data-name="Button">
      <Close4 />
    </div>
  );
}

function Title2() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Title">
      <div aria-hidden="true" className="absolute border-[#efefef] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex gap-[24px] items-start p-[16px] relative w-full">
        <div className="flex flex-[1_0_0] flex-col font-['_IBM_Plex_Sans_:Medium',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative self-stretch text-[16px] text-black">
          <p className="leading-[24px] whitespace-pre-wrap">Setup new recording</p>
        </div>
        <Button6 />
      </div>
    </div>
  );
}

function Label3() {
  return (
    <div className="content-stretch flex gap-[12px] items-start not-italic relative shrink-0 text-[15px] w-full" data-name="Label">
      <div className="flex flex-col font-['_IBM_Plex_Sans_:Medium',sans-serif] justify-center leading-[0] relative shrink-0 text-black whitespace-nowrap">
        <p className="leading-[20px]">Engine ID</p>
      </div>
      <p className="flex-[1_0_0] font-['_IBM_Plex_Sans_:Regular',sans-serif] leading-[20px] min-h-px min-w-px relative text-[#666] text-right whitespace-pre-wrap">6/6 latin characters, ASCII symbols</p>
    </div>
  );
}

function Close5() {
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

function Button7() {
  return (
    <div className="content-stretch flex items-center relative rounded-[4px] shrink-0" data-name="Button">
      <Close5 />
    </div>
  );
}

function TextInput3() {
  return (
    <div className="bg-[#efefef] relative rounded-[4px] shrink-0 w-full" data-name="Text input">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative w-full">
          <div className="flex flex-col font-['_IBM_Plex_Sans_:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#777] text-[15px] whitespace-nowrap">
            <p className="leading-[20px]">B</p>
          </div>
          <div className="flex flex-[1_0_0] flex-col font-['_IBM_Plex_Sans_:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[15px] text-black">
            <p className="leading-[20px] whitespace-pre-wrap">5333.1</p>
          </div>
          <Button7 />
        </div>
      </div>
    </div>
  );
}

function TextField5() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Text field">
      <Label3 />
      <TextInput3 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="flex flex-col font-['_IBM_Plex_Sans_:Medium',sans-serif] justify-center leading-[0] relative shrink-0 text-black whitespace-nowrap">
        <p className="leading-[20px]">Fuel mass</p>
      </div>
      <p className="font-['_IBM_Plex_Sans_:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#666] text-right">(optional)</p>
    </div>
  );
}

function Label4() {
  return (
    <div className="content-stretch flex gap-[12px] items-start not-italic relative shrink-0 text-[15px] w-full" data-name="Label">
      <Frame2 />
      <p className="flex-[1_0_0] font-['_IBM_Plex_Sans_:Regular',sans-serif] leading-[20px] min-h-px min-w-px relative text-[#666] text-right whitespace-pre-wrap">ISP calculation, grams</p>
    </div>
  );
}

function Close6() {
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

function Button8() {
  return (
    <div className="content-stretch flex items-center relative rounded-[4px] shrink-0" data-name="Button">
      <Close6 />
    </div>
  );
}

function TextInput4() {
  return (
    <div className="bg-[#efefef] relative rounded-[4px] shrink-0 w-full" data-name="Text input">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative w-full">
          <div className="flex flex-[1_0_0] flex-col font-['_IBM_Plex_Sans_:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[15px] text-black">
            <p className="leading-[20px] whitespace-pre-wrap">5210</p>
          </div>
          <div className="flex flex-col font-['_IBM_Plex_Sans_:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#777] text-[15px] whitespace-nowrap">
            <p className="leading-[20px]">g</p>
          </div>
          <Button8 />
        </div>
      </div>
    </div>
  );
}

function TextField6() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Text field">
      <Label4 />
      <TextInput4 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="flex flex-col font-['_IBM_Plex_Sans_:Medium',sans-serif] justify-center leading-[0] relative shrink-0 text-black whitespace-nowrap">
        <p className="leading-[20px]">Notes</p>
      </div>
      <p className="font-['_IBM_Plex_Sans_:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#666] text-right">(optional)</p>
    </div>
  );
}

function Label5() {
  return (
    <div className="content-stretch flex gap-[12px] items-start not-italic relative shrink-0 text-[15px] w-full" data-name="Label">
      <Frame3 />
      <p className="flex-[1_0_0] font-['_IBM_Plex_Sans_:Regular',sans-serif] leading-[20px] min-h-px min-w-px relative text-[#666] text-right whitespace-pre-wrap">ASCII symbols</p>
    </div>
  );
}

function Close7() {
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

function Button9() {
  return (
    <div className="content-stretch flex items-center relative rounded-[4px] shrink-0" data-name="Button">
      <Close7 />
    </div>
  );
}

function TextInput5() {
  return (
    <div className="bg-[#efefef] relative rounded-[4px] shrink-0 w-full" data-name="Text input">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative w-full">
          <div className="flex flex-[1_0_0] flex-col font-['_IBM_Plex_Sans_:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[15px] text-black">
            <p className="leading-[20px] whitespace-pre-wrap">Some notes here</p>
          </div>
          <Button9 />
        </div>
      </div>
    </div>
  );
}

function TextField7() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Text field">
      <Label5 />
      <TextInput5 />
    </div>
  );
}

function TextField4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text field">
      <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] relative w-full">
        <TextField5 />
        <TextField6 />
        <TextField7 />
      </div>
    </div>
  );
}

function Button10() {
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

function Record2() {
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

function Button11() {
  return (
    <div className="bg-black flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="Button">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[12px] relative w-full">
          <Record2 />
          <div className="flex flex-col font-['_IBM_Plex_Sans_:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-center text-white whitespace-nowrap">
            <p className="leading-[20px]">Record</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Buttons1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Buttons">
      <div className="content-stretch flex gap-[12px] items-start px-[16px] relative w-full">
        <Button10 />
        <Button11 />
      </div>
    </div>
  );
}

function SetupNewRecordingModal() {
  return (
    <div className="absolute bg-white bottom-0 content-stretch flex flex-col gap-[16px] items-center justify-end left-0 overflow-clip pb-[16px] rounded-tl-[4px] rounded-tr-[4px] shadow-[0px_-1px_8px_0px_rgba(42,42,42,0.08)] w-[360px]" data-name="Setup new recording modal">
      <Title2 />
      <TextField4 />
      <div className="h-0 relative shrink-0 w-[360px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 360 1">
            <line id="Line 4" stroke="var(--stroke-0, #EFEFEF)" x2="360" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Buttons1 />
    </div>
  );
}

export default function MainStandbyDefaultStandbySetupRecordingFlyoutFilled() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative size-full" data-name="Main - Standby - DefaultStandby - Setup recording Flyout - Filled">
      <StatusBar />
      <DataSection />
      <CameraViewport />
      <div className="absolute backdrop-blur-[8px] bg-[#f7f7f7] inset-[36px_0_-1px_0] opacity-90 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" data-name="BG" />
      <Modal />
      <SetupNewRecordingModal />
    </div>
  );
}