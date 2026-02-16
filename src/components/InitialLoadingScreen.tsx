import * as React from 'react';
import { TYPOGRAPHY_CLASSES, TYPOGRAPHY_STYLES } from '../utils/typography';
import svgPaths from '../imports/svg-0bp12cpru8';

function Placeholder() {
  return (
    <div className="bg-[#efefef] content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative w-full" data-name="Placeholder">
      <div aria-hidden="true" className="absolute border-[#efefef] border-b border-solid inset-[0_0_-1px_0] pointer-events-none" />
      <p className="font-['IBM_Plex_Sans',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#666] text-[16px]" style={TYPOGRAPHY_STYLES.fontWeights.medium}>No connection</p>
    </div>
  );
}

function Message() {
  return (
    <div className="relative shrink-0 w-full" data-name="Message">
      <div className="content-stretch flex flex-col font-['IBM_Plex_Sans',_sans-serif] gap-[8px] items-start leading-[0] not-italic p-[16px] relative text-[#545454] text-[0px] text-[15px] w-full whitespace-pre-wrap" style={TYPOGRAPHY_STYLES.fontWeights.regular}>
        <p className="max-w-[624px] relative shrink-0 w-full">
          <span className="leading-[20px]">{`Connect to the `}</span>
          <span className="font-['IBM_Plex_Sans',_sans-serif] leading-[20px] text-black" style={TYPOGRAPHY_STYLES.fontWeights.medium}>bdzh.space</span>
          <span className="leading-[20px]">{` Wi-Fi network using the password `}</span>
          <span className="font-['IBM_Plex_Sans',_sans-serif] leading-[20px] text-black" style={TYPOGRAPHY_STYLES.fontWeights.medium}>12345678</span>
          <span className="leading-[20px]">.</span>
        </p>
        <p className="max-w-[624px] relative shrink-0 w-full">
          <span className="leading-[20px]">{`Ensure to enable `}</span>
          <span className="[text-decoration-skip-ink:none] decoration-solid font-['IBM_Plex_Sans',_sans-serif] leading-[20px] text-black underline" style={TYPOGRAPHY_STYLES.fontWeights.medium}>chrome://flags#unsafely-treat-insecure-origin-as-secure</span>
          <span className="leading-[20px]">{` with `}</span>
          <span className="font-['IBM_Plex_Sans',_sans-serif] leading-[20px] text-black" style={TYPOGRAPHY_STYLES.fontWeights.medium}>http://192.168.4.1</span>
          <span className="leading-[20px]">{` value and restart browser.`}</span>
        </p>
      </div>
    </div>
  );
}

function Version() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Version">
      <div aria-hidden="true" className="absolute border-[#efefef] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex font-['IBM_Plex_Sans',_sans-serif] items-center justify-between leading-[16px] not-italic px-[16px] py-[8px] relative text-[#545454] text-[13px] uppercase w-full" style={TYPOGRAPHY_STYLES.fontWeights.medium}>
          <p className="opacity-50 relative shrink-0">BDZH</p>
          <p className="opacity-50 relative shrink-0">v2</p>
        </div>
      </div>
    </div>
  );
}

export function InitialLoadingScreen() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative size-full flex-grow h-full" data-name="Initial loading">
      <Placeholder />
      <Message />
      <Version />
    </div>
  );
}
