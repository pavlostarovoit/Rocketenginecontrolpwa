import svgPaths from "./svg-bvxm6wz8d2";
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
    <div className="content-stretch flex gap-[4px] items-center px-[4px] relative rounded-[4px] shrink-0" data-name="RSSI">
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

function Name() {
  return (
    <div className="bg-black content-stretch flex items-center justify-center overflow-clip px-[8px] py-[4px] relative shrink-0" data-name="Name">
      <div className="flex flex-col font-['_IBM_Plex_Sans_:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-center text-white uppercase whitespace-nowrap">
        <p className="leading-[16px]">B5333.1</p>
      </div>
    </div>
  );
}

function Status1() {
  return (
    <div className="bg-black relative shrink-0" data-name="Status">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[inherit]">
        <div className="flex flex-col font-['_IBM_Plex_Sans_:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-center text-white uppercase whitespace-nowrap">
          <p className="leading-[16px]">RECording</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#efefef] border-l border-solid inset-[0_0_0_-1px] pointer-events-none" />
    </div>
  );
}

function Status() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Status">
      <Name />
      <Status1 />
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
        <g clipPath="url(#clip0_179_4862)" id="Data">
          <path d={svgPaths.p1d2705c0} id="Data line" stroke="var(--stroke-0, black)" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_179_4862">
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
      <p className="font-['_IBM_Plex_Sans_:Medium',sans-serif] relative shrink-0 text-black">6000</p>
      <p className="font-['_IBM_Plex_Sans_:Regular',sans-serif] relative shrink-0 text-[#545454]">Ns</p>
    </div>
  );
}

function TotalImpulse() {
  return (
    <div className="bg-[#f7f7f7] flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="Total impulse">
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
      <p className="font-['_IBM_Plex_Sans_:Medium',sans-serif] relative shrink-0 text-black">6</p>
      <p className="font-['_IBM_Plex_Sans_:Regular',sans-serif] relative shrink-0 text-[#545454]">kg</p>
    </div>
  );
}

function AverageThrust() {
  return (
    <div className="bg-[#f7f7f7] flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="Average thrust">
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
      <p className="font-['_IBM_Plex_Sans_:Medium',sans-serif] relative shrink-0 text-black">6</p>
      <p className="font-['_IBM_Plex_Sans_:Regular',sans-serif] relative shrink-0 text-[#545454]">kg</p>
    </div>
  );
}

function PeakThrust() {
  return (
    <div className="bg-[#f7f7f7] flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="Peak thrust">
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

function RecordButton() {
  return (
    <div className="absolute bg-black bottom-[16px] content-stretch flex gap-[8px] items-center justify-center overflow-clip p-[16px] right-[16px] rounded-[4px]" data-name="Record button">
      <Stop />
      <div className="flex flex-col font-['_IBM_Plex_Sans_:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-center text-white whitespace-nowrap">
        <p className="leading-[20px]">00:05:023</p>
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
      <div aria-hidden="true" className="absolute border-[#efefef] border-b border-solid border-t inset-[-1px_0] pointer-events-none" />
      <RecordButton />
      <ZoomControl />
    </div>
  );
}

function Numeric7Circle() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="numeric-7-circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="numeric-7-circle">
          <path d={svgPaths.p338a400} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Countdown() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Countdown">
      <p className="font-['_IBM_Plex_Sans_:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[15px] text-center text-white">Engine ignition in</p>
      <Numeric7Circle />
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

function Button() {
  return (
    <div className="bg-[#c13211] relative rounded-[8px] shadow-[0px_-1px_8px_0px_rgba(42,42,42,0.08)] shrink-0 w-full" data-name="Button">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center justify-center px-[16px] py-[12px] relative w-full">
          <Countdown />
          <Button1 />
        </div>
      </div>
    </div>
  );
}

export default function MainStandbyDefaultIgnitionState() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative size-full" data-name="Main - Standby - DefaultIgnition - State 7">
      <StatusBar />
      <DataSection />
      <CameraViewport />
      <Button />
    </div>
  );
}