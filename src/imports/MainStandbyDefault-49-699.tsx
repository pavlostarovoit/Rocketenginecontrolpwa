import svgPaths from "./svg-zkyclbcgcn";
import imgCameraViewport from "figma:asset/c7c185243b765067fcc555b2183fff8de0e33baf.png";

function WifiStrength4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="wifi-strength-4">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_49_389)" id="wifi-strength-4">
          <path d={svgPaths.p39fb3c00} fill="var(--fill-0, #545454)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_49_389">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Rssi() {
  return (
    <div className="content-stretch flex font-['_IBM_Plex_Sans_:Medium',_sans-serif] items-center leading-[20px] not-italic relative shrink-0 text-[#545454] text-[15px] text-nowrap whitespace-pre" data-name="RSSI">
      <p className="relative shrink-0">100</p>
      <p className="relative shrink-0">%</p>
    </div>
  );
}

function Circle() {
  return (
    <div className="relative shrink-0 size-[8px]" data-name="circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
        <g clipPath="url(#clip0_49_386)" id="circle">
          <path d={svgPaths.p7ba9400} fill="var(--fill-0, #545454)" id="Vector" opacity="0.5" />
        </g>
        <defs>
          <clipPath id="clip0_49_386">
            <rect fill="white" height="8" width="8" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function RefreshRate() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Refresh rate">
      <p className="font-['_IBM_Plex_Sans_:Medium',_sans-serif] leading-[20px] not-italic opacity-50 relative shrink-0 text-[#545454] text-[15px] text-nowrap whitespace-pre">10Hz</p>
      <Circle />
    </div>
  );
}

function Rssi1() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center px-[4px] py-0 relative rounded-[4px] shrink-0" data-name="RSSI">
      <WifiStrength4 />
      <Rssi />
      <RefreshRate />
    </div>
  );
}

function DateTime() {
  return (
    <div className="box-border content-stretch flex font-['_IBM_Plex_Sans_:Medium',_sans-serif] gap-[4px] items-center leading-[20px] not-italic px-[4px] py-0 relative rounded-[4px] shrink-0 text-[#545454] text-[15px] text-nowrap whitespace-pre" data-name="Date & Time">
      <p className="opacity-50 relative shrink-0">2 Oct 2025</p>
      <p className="relative shrink-0">11:03</p>
    </div>
  );
}

function StatusBar() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Status bar">
      <div aria-hidden="true" className="absolute border-[#efefef] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between p-[8px] relative w-full">
          <Rssi1 />
          <DateTime />
        </div>
      </div>
    </div>
  );
}

function Status() {
  return (
    <div className="bg-[#545454] relative shrink-0" data-name="Status">
      <div className="box-border content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[inherit]">
        <div className="flex flex-col font-['_IBM_Plex_Sans_:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-center text-nowrap text-white uppercase">
          <p className="leading-[16px] whitespace-pre">standby</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#545454] border-[0px_0px_2px] border-dashed bottom-[-2px] left-0 pointer-events-none right-0 top-0" />
    </div>
  );
}

function Thrust() {
  return (
    <div className="content-stretch flex gap-[4px] items-center not-italic relative shrink-0 text-nowrap text-right whitespace-pre" data-name="Thrust">
      <p className="font-['_IBM_Plex_Sans_:Medium',_sans-serif] leading-[24px] relative shrink-0 text-[16px] text-black">5.02</p>
      <p className="font-['_IBM_Plex_Sans_:Regular',_sans-serif] leading-[20px] relative shrink-0 text-[#545454] text-[15px]">kg</p>
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
      <p className="font-['_IBM_Plex_Sans_:Regular',_sans-serif] leading-[16px] not-italic relative shrink-0 text-[#545454] text-[13px] w-[8px]">3</p>
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
      <p className="font-['_IBM_Plex_Sans_:Regular',_sans-serif] leading-[16px] not-italic relative shrink-0 text-[#545454] text-[13px] w-[8px]">2</p>
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
      <p className="font-['_IBM_Plex_Sans_:Regular',_sans-serif] leading-[16px] not-italic relative shrink-0 text-[#545454] text-[13px] w-[8px]">1</p>
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
      <p className="font-['_IBM_Plex_Sans_:Regular',_sans-serif] leading-[16px] not-italic relative shrink-0 text-[#545454] text-[13px] w-[8px]">0</p>
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
        <div className="box-border content-stretch flex font-['_IBM_Plex_Sans_:Regular',_sans-serif] items-center justify-between leading-[16px] not-italic pl-[12px] pr-0 py-0 relative text-[#545454] text-[13px] text-nowrap text-right w-full whitespace-pre">
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
        <g clipPath="url(#clip0_49_378)" id="Data">
          <path d={svgPaths.p1d2705c0} id="Data line" stroke="var(--stroke-0, #545454)" strokeDasharray="8 8" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_49_378">
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
    <div className="content-stretch flex gap-[4px] items-center justify-center leading-[20px] not-italic relative shrink-0 text-[15px] text-nowrap text-right whitespace-pre" data-name="Value">
      <p className="font-['_IBM_Plex_Sans_:Medium',_sans-serif] relative shrink-0 text-black">-</p>
      <p className="font-['_IBM_Plex_Sans_:Regular',_sans-serif] relative shrink-0 text-[#545454]">Ns</p>
    </div>
  );
}

function TotalImpulse() {
  return (
    <div className="basis-0 bg-[#f7f7f7] grow min-h-px min-w-px opacity-50 relative rounded-[4px] shrink-0" data-name="Total impulse">
      <div aria-hidden="true" className="absolute border border-[#efefef] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-start p-[8px] relative w-full">
          <div className="flex flex-col font-['_IBM_Plex_Sans_:Medium',_sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#545454] text-[13px] uppercase w-[min-content]">
            <p className="leading-[16px]">TOTAL IMPULSE</p>
          </div>
          <Value />
        </div>
      </div>
    </div>
  );
}

function Value1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center leading-[20px] not-italic relative shrink-0 text-[15px] text-nowrap text-right whitespace-pre" data-name="Value">
      <p className="font-['_IBM_Plex_Sans_:Medium',_sans-serif] relative shrink-0 text-black">-</p>
      <p className="font-['_IBM_Plex_Sans_:Regular',_sans-serif] relative shrink-0 text-[#545454]">kg</p>
    </div>
  );
}

function AverageThrust() {
  return (
    <div className="basis-0 bg-[#f7f7f7] grow min-h-px min-w-px opacity-50 relative rounded-[4px] shrink-0" data-name="Average thrust">
      <div aria-hidden="true" className="absolute border border-[#efefef] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-start p-[8px] relative w-full">
          <div className="flex flex-col font-['_IBM_Plex_Sans_:Medium',_sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#545454] text-[13px] uppercase w-[min-content]">
            <p className="leading-[16px]">AVERAGE THRUST</p>
          </div>
          <Value1 />
        </div>
      </div>
    </div>
  );
}

function Value2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center leading-[20px] not-italic relative shrink-0 text-[15px] text-nowrap text-right whitespace-pre" data-name="Value">
      <p className="font-['_IBM_Plex_Sans_:Medium',_sans-serif] relative shrink-0 text-black">-</p>
      <p className="font-['_IBM_Plex_Sans_:Regular',_sans-serif] relative shrink-0 text-[#545454]">kg</p>
    </div>
  );
}

function PeakThrust() {
  return (
    <div className="basis-0 bg-[#f7f7f7] grow min-h-px min-w-px opacity-50 relative rounded-[4px] shrink-0" data-name="Peak thrust">
      <div aria-hidden="true" className="absolute border border-[#efefef] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-start p-[8px] relative w-full">
          <div className="flex flex-col font-['_IBM_Plex_Sans_:Medium',_sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#545454] text-[13px] uppercase w-[min-content]">
            <p className="leading-[16px]">PEAK THRUST</p>
          </div>
          <Value2 />
        </div>
      </div>
    </div>
  );
}

function Value3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center leading-[20px] not-italic relative shrink-0 text-[15px] text-nowrap text-right whitespace-pre" data-name="Value">
      <p className="font-['_IBM_Plex_Sans_:Medium',_sans-serif] relative shrink-0 text-black">500</p>
      <p className="font-['_IBM_Plex_Sans_:Regular',_sans-serif] relative shrink-0 text-[#545454]">Hz</p>
    </div>
  );
}

function MeasureRate() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Measure rate">
      <div aria-hidden="true" className="absolute border border-[#efefef] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-start p-[8px] relative w-full">
          <div className="flex flex-col font-['_IBM_Plex_Sans_:Medium',_sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#545454] text-[13px] uppercase w-[min-content]">
            <p className="leading-[16px]">MEASURE RATE</p>
          </div>
          <Value3 />
        </div>
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
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Parameters">
      <ParametersBlocks />
    </div>
  );
}

function DataSection() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Data section">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
          <Title />
          <Graph />
          <Parameters />
        </div>
      </div>
    </div>
  );
}

function Record() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="record">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_49_375)" id="record">
          <path d={svgPaths.p7dd3700} fill="var(--fill-0, white)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_49_375">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function RecordButton() {
  return (
    <div className="absolute bg-black bottom-[16px] box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip p-[16px] right-[16px] rounded-[4px]" data-name="Record button">
      <Record />
      <div className="flex flex-col font-['_IBM_Plex_Sans_:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-center text-nowrap text-white">
        <p className="leading-[20px] whitespace-pre">Record</p>
      </div>
    </div>
  );
}

function MagnifyPlusOutline() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="magnify-plus-outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_49_381)" id="magnify-plus-outline">
          <path d={svgPaths.p3ac24400} fill="var(--fill-0, white)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_49_381">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ZoomControl() {
  return (
    <div className="absolute bg-[#545454] box-border content-stretch flex flex-col gap-[4px] items-center justify-center p-[16px] right-[16px] rounded-[4px] top-[16px] w-[52px]" data-name="Zoom control">
      <MagnifyPlusOutline />
    </div>
  );
}

function CameraViewport() {
  return (
    <div className="basis-0 box-border content-stretch flex grow items-center justify-center min-h-px min-w-px pl-0 pr-px py-0 relative shrink-0 w-full" data-name="Camera viewport">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgCameraViewport} />
      <div aria-hidden="true" className="absolute border-[#efefef] border-[1px_0px_0px] border-solid bottom-0 left-0 pointer-events-none right-0 top-[-1px]" />
      <RecordButton />
      <ZoomControl />
    </div>
  );
}

export default function MainStandbyDefault() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative size-full" data-name="Main - Standby - Default">
      <StatusBar />
      <DataSection />
      <CameraViewport />
    </div>
  );
}