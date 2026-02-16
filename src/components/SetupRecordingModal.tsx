import * as React from 'react';
import svgPaths from '../imports/svg-82pavbcneh';
import svgPathsClear from '../imports/svg-q71hn9fop1';
import { TYPOGRAPHY_CLASSES, TYPOGRAPHY_STYLES } from '../utils/typography';

export interface RecordingValues {
  engineId: string;
  fuelMass: string;
  notes: string;
}

interface SetupRecordingModalProps {
  onClose: () => void;
  onRecord: () => void;
  values: RecordingValues;
  onChange: (values: RecordingValues) => void;
}

function CloseIcon() {
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

function ClearIcon() {
  return (
    <div className="relative shrink-0 size-[20px] cursor-pointer" data-name="clear">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g>
          <path d={svgPaths.p23fd7e00} fill="black" />
        </g>
      </svg>
    </div>
  );
}

function RecordIcon({ fill }: { fill?: string }) {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="record">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="record">
          <path d={svgPaths.p2ceb2700} fill={fill || "var(--fill-0, white)"} id="Vector" />
        </g>
      </svg>
    </div>
  );
}

export function SetupRecordingModal({ onClose, onRecord, values, onChange }: SetupRecordingModalProps) {
  const { engineId, fuelMass, notes } = values;

  // Handlers
  const handleEngineIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value;
    // Replace non-latin/non-number with _
    val = val.replace(/[^a-zA-Z0-9]/g, '_');
    if (val.length > 6) return; // Block
    onChange({ ...values, engineId: val });
  };

  const handleFuelMassChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value;
    // Numbers only
    val = val.replace(/[^0-9]/g, '');
    if (val.length > 6) return;
    onChange({ ...values, fuelMass: val });
  };

  const handleNotesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value;
    // ASCII only (range 0-127)
    // Replace non-ascii with _
    // eslint-disable-next-line no-control-regex
    val = val.replace(/[^\x00-\x7F]/g, '_');
    onChange({ ...values, notes: val });
  };

  const handleClear = (field: keyof RecordingValues) => {
    onChange({ ...values, [field]: '' });
  };

  const isRecordEnabled = engineId.length > 0;

  return (
    <div className="bg-white content-stretch flex flex-col items-center w-full" data-name="Setup new recording modal">
      {/* Title Bar */}
      <div className="bg-white content-stretch flex gap-[24px] items-start p-[16px] relative shrink-0 w-full" data-name="Title">
        <div aria-hidden="true" className="absolute border-[#efefef] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-col justify-center leading-[0] not-italic relative grow shrink-0 text-black">
          <p className={`${TYPOGRAPHY_CLASSES.h1Title}`}>Setup new recording</p>
        </div>
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="content-stretch flex items-center relative rounded-[4px] shrink-0 p-1 -mr-1 hover:bg-gray-100"
        >
          <CloseIcon />
        </button>
      </div>

      {/* Fields Container */}
      <div className="relative shrink-0 w-full" data-name="Text field">
        <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] py-[16px] relative w-full">
          
          {/* Engine ID */}
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
            <div className="content-stretch flex gap-[12px] items-center justify-between not-italic relative shrink-0 w-full">
              <label className={`${TYPOGRAPHY_CLASSES.h2Title} text-black whitespace-nowrap`}>Engine ID</label>
              <p className={`${TYPOGRAPHY_CLASSES.h2Text} text-[#666] text-right`}>{engineId.length}/6 latin characters, numbers</p>
            </div>
            <div className="bg-[#efefef] relative rounded-[4px] shrink-0 w-full group focus-within:ring-2 focus-within:ring-black focus-within:ring-inset">
              <div className="flex flex-row items-center size-full px-[16px]">
                <div className="content-stretch flex items-center py-[12px] relative w-full gap-[8px]">
                  <p className={`${TYPOGRAPHY_CLASSES.h2Title} text-[#777] shrink-0`}>B</p>
                  <input
                    type="text"
                    value={engineId}
                    onChange={handleEngineIdChange}
                    className={`w-full bg-transparent border-none outline-none p-0 m-0 text-black h-[20px] ${TYPOGRAPHY_CLASSES.h2Text}`}
                    placeholder=""
                  />
                  {engineId.length > 0 && (
                    <button onClick={() => handleClear('engineId')} className="shrink-0">
                       <ClearIcon />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Fuel Mass */}
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
            <div className="content-stretch flex gap-[12px] items-center justify-between not-italic relative shrink-0 w-full">
              <div className="flex gap-[4px] items-center">
                <label className={`${TYPOGRAPHY_CLASSES.h2Title} text-black whitespace-nowrap`}>Fuel mass</label>
                <p className={`${TYPOGRAPHY_CLASSES.h2Text} text-[#666]`}>(optional)</p>
              </div>
              <p className={`${TYPOGRAPHY_CLASSES.h2Text} text-[#666] text-right`}>ISP calculation, grams</p>
            </div>
            <div className="bg-[#efefef] relative rounded-[4px] shrink-0 w-full group focus-within:ring-2 focus-within:ring-black focus-within:ring-inset">
              <div className="flex flex-row items-center size-full px-[16px]">
                <div className="content-stretch flex items-center py-[12px] relative w-full gap-[8px]">
                  <input
                    type="text"
                    inputMode="numeric"
                    value={fuelMass}
                    onChange={handleFuelMassChange}
                    className={`w-full bg-transparent border-none outline-none p-0 m-0 text-black h-[20px] text-left ${TYPOGRAPHY_CLASSES.h2Text}`}
                  />
                   <p className={`${TYPOGRAPHY_CLASSES.h2Title} text-[#777] shrink-0`}>g</p>
                   {fuelMass.length > 0 && (
                    <button onClick={() => handleClear('fuelMass')} className="shrink-0">
                       <ClearIcon />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Notes */}
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
            <div className="content-stretch flex gap-[12px] items-center justify-between not-italic relative shrink-0 w-full">
              <div className="flex gap-[4px] items-center">
                <label className={`${TYPOGRAPHY_CLASSES.h2Title} text-black whitespace-nowrap`}>Notes</label>
                <p className={`${TYPOGRAPHY_CLASSES.h2Text} text-[#666]`}>(optional)</p>
              </div>
              <p className={`${TYPOGRAPHY_CLASSES.h2Text} text-[#666] text-right`}>ASCII symbols</p>
            </div>
            <div className="bg-[#efefef] relative rounded-[4px] shrink-0 w-full group focus-within:ring-2 focus-within:ring-black focus-within:ring-inset">
              <div className="flex flex-row items-center size-full px-[16px]">
                <div className="content-stretch flex items-center py-[12px] relative w-full gap-[8px]">
                  <input
                    type="text"
                    value={notes}
                    onChange={handleNotesChange}
                    className={`w-full bg-transparent border-none outline-none p-0 m-0 text-black h-[20px] ${TYPOGRAPHY_CLASSES.h2Text}`}
                    placeholder=""
                  />
                  {notes.length > 0 && (
                    <button onClick={() => handleClear('notes')} className="shrink-0">
                       <ClearIcon />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Divider */}
      <div className="h-px w-full bg-[#EFEFEF]" />

      {/* Action Buttons */}
      <div className="content-stretch flex gap-[12px] items-start p-[16px] relative w-full bg-white pb-[32px]">
        {/* Cancel */}
        <button
          onClick={onClose}
          className="flex-1 relative rounded-[4px] border-2 border-black h-[48px] flex items-center justify-center"
        >
           <p className={`${TYPOGRAPHY_CLASSES.h2Title} text-black`}>Cancel</p>
        </button>

        {/* Record */}
        <button
          onClick={onRecord}
          disabled={!isRecordEnabled}
          className={`flex-1 relative rounded-[4px] h-[48px] flex items-center justify-center gap-[8px] ${
            !isRecordEnabled 
              ? 'bg-[#777] cursor-not-allowed text-[#efefef]' 
              : 'bg-black text-white'
          }`}
        >
          <RecordIcon fill={!isRecordEnabled ? "#efefef" : "white"} />
          <p className={`${TYPOGRAPHY_CLASSES.h2Title} text-inherit`}>Record</p>
        </button>
      </div>
    </div>
  );
}
