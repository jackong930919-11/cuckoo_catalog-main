import React from 'react';
import { Sparkles, MessageCircle, WashingMachine, Zap, ShieldCheck, Layers, CheckCircle2, Sliders, Wifi, Droplets, Clock, Cpu } from 'lucide-react';
import { CUCKOO_CONTACT } from '../data/cuckooData';

interface SamsungWasherDryerSpecTableProps {
  onInquire?: (model: string) => void;
}

export const SamsungWasherDryerSpecTable: React.FC<SamsungWasherDryerSpecTableProps> = ({ onInquire }) => {
  const handleWhatsApp = (planDetails?: string) => {
    if (onInquire) {
      onInquire('Bespoke AI Laundry Combo AI Ecobubble™ 12/7kg');
      return;
    }
    const text = encodeURIComponent(
      `Hi ${CUCKOO_CONTACT.agentName},\nI am interested in Samsung Bespoke AI Laundry Combo AI Ecobubble™ 12/7kg (WD12DB8B85GBFQ)${planDetails ? ` (${planDetails})` : ''}.\nPlease share more details on the RM99/mth 7-year rental plan, RM5,299 outright purchase, and 6-month CUCKOO scheduled service. Thank you!`
    );
    window.open(`https://wa.me/${CUCKOO_CONTACT.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="w-full bg-slate-900 text-slate-100 rounded-3xl p-4 sm:p-6 shadow-2xl border border-slate-800 overflow-hidden my-6">
      {/* Title Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-950/80 border border-teal-600/50 text-teal-300 text-xs font-bold mb-2">
            <WashingMachine className="w-3.5 h-3.5 text-teal-400" />
            Bespoke AI Laundry Combo • 12kg Wash / 7kg Dry
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white tracking-wide flex items-center gap-2 flex-wrap">
            <span>BESPOKE AI LAUNDRY COMBO</span>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/40 font-semibold">
              WD12DB8B85GBFQ • Black
            </span>
          </h3>
          <p className="text-xs sm:text-sm text-teal-300 font-bold mt-1 uppercase tracking-wider">
            Smart Laundry, Tailored for You — AI Ecobubble™ & AI Wash Technology
          </p>
          <p className="text-xs text-slate-400 mt-0.5 max-w-2xl">
            All-in-one 12kg Washer & 7kg Dryer powered by AI Ecobubble™, AI Wash auto-sensing, Auto Dispense, QuickDrive™, Super Speed 39-min wash, and CUCKOO 6-Month Regular Servicing.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => handleWhatsApp('Samsung AI Laundry Combo Inquiry')}
            className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-2 transition-all shadow-md shadow-emerald-950 cursor-pointer shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Inquire AI Washer</span>
          </button>
        </div>
      </div>

      {/* Unique Selling Points (USP Highlights Grid) */}
      <div className="mb-6">
        <h4 className="text-xs font-extrabold uppercase text-teal-400 tracking-wider mb-3 flex items-center gap-1.5">
          <CheckCircle2 className="w-4 h-4" />
          <span>Key Smart Technologies & USPs</span>
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between hover:border-teal-500/40 transition-colors">
            <Droplets className="w-5 h-5 text-teal-400 mb-1" />
            <div>
              <div className="text-[11px] font-extrabold text-white">AI Ecobubble™</div>
              <div className="text-[10px] text-slate-400 font-medium">24% soil removal even in cool water</div>
            </div>
          </div>

          <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between hover:border-teal-500/40 transition-colors">
            <Sparkles className="w-5 h-5 text-amber-400 mb-1" />
            <div>
              <div className="text-[11px] font-extrabold text-white">AI Wash System</div>
              <div className="text-[10px] text-slate-400 font-medium">Sensory weight, fabric & soil load adjustment</div>
            </div>
          </div>

          <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between hover:border-teal-500/40 transition-colors">
            <Clock className="w-5 h-5 text-sky-400 mb-1" />
            <div>
              <div className="text-[11px] font-extrabold text-white">Super Speed 39-Min</div>
              <div className="text-[10px] text-slate-400 font-medium">Thorough clean in just 39 minutes</div>
            </div>
          </div>

          <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between hover:border-teal-500/40 transition-colors">
            <Sliders className="w-5 h-5 text-indigo-400 mb-1" />
            <div>
              <div className="text-[11px] font-extrabold text-white">Auto Dispense</div>
              <div className="text-[10px] text-slate-400 font-medium">Automatic detergent & softener dosing</div>
            </div>
          </div>

          <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between hover:border-teal-500/40 transition-colors">
            <Zap className="w-5 h-5 text-emerald-400 mb-1" />
            <div>
              <div className="text-[11px] font-extrabold text-white">QuickDrive™ & Air Wash</div>
              <div className="text-[10px] text-slate-400 font-medium">Sanitize without water & detergent</div>
            </div>
          </div>

          <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between hover:border-teal-500/40 transition-colors">
            <Cpu className="w-5 h-5 text-purple-400 mb-1" />
            <div>
              <div className="text-[11px] font-extrabold text-white">Digital Inverter (DIT)</div>
              <div className="text-[10px] text-slate-400 font-medium">Quiet performance & 1400 rpm spin</div>
            </div>
          </div>

          <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between hover:border-teal-500/40 transition-colors">
            <Wifi className="w-5 h-5 text-cyan-400 mb-1" />
            <div>
              <div className="text-[11px] font-extrabold text-white">Wi-Fi & SmartThings</div>
              <div className="text-[10px] text-slate-400 font-medium">AI Control panel & remote management</div>
            </div>
          </div>

          <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between hover:border-teal-500/40 transition-colors">
            <ShieldCheck className="w-5 h-5 text-rose-400 mb-1" />
            <div>
              <div className="text-[11px] font-extrabold text-white">6-Mth Service Included</div>
              <div className="text-[10px] text-slate-400 font-medium">Regular care by CUCKOO personnel</div>
            </div>
          </div>
        </div>
      </div>

      {/* Official Specification Chart Table */}
      <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-950/60 mb-6">
        <table className="w-full text-left text-xs text-slate-300 divide-y divide-slate-800/80">
          <thead className="bg-slate-900/90 text-slate-400 uppercase text-[10px] tracking-wider font-extrabold">
            <tr>
              <th className="py-3.5 px-4 w-2/5 sm:w-1/3">Specification Field</th>
              <th className="py-3.5 px-4 w-3/5 sm:w-2/3">Details / Specifications</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/50 text-xs">
            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">Product Name / Model</td>
              <td className="py-3 px-4 text-white font-black text-sm">Bespoke AI Laundry Combo AI Ecobubble™ 12/7kg</td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">Product Model Code</td>
              <td className="py-3 px-4 text-teal-300 font-bold">WD12DB8B85GBFQ</td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200 align-top">Washing & Drying Capacity</td>
              <td className="py-3 px-4 text-slate-300">
                <div className="grid grid-cols-2 gap-2 text-[11px]">
                  <div className="p-2.5 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">Washing Capacity</span>
                    <span className="text-teal-300 font-bold text-sm">12.0 kg</span>
                  </div>
                  <div className="p-2.5 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">Drying Capacity</span>
                    <span className="text-cyan-300 font-bold text-sm">7.0 kg</span>
                  </div>
                </div>
              </td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200 align-top">Design & Aesthetics</td>
              <td className="py-3 px-4 text-slate-300">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px]">
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">Body Color</span>
                    <span className="text-white font-bold">Black</span>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">Door Type</span>
                    <span className="text-white font-bold">Tempered Glass Door</span>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">Panel Display</span>
                    <span className="text-teal-300 font-bold">AI Control</span>
                  </div>
                </div>
              </td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200 align-top">Core Technologies & Features</td>
              <td className="py-3 px-4 text-slate-300">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-[11px]">
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">AI Control & AI Wash</span>
                    <span className="text-teal-300 font-bold">Yes (Senses weight & fabric)</span>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">QuickDrive™ & Air Wash</span>
                    <span className="text-emerald-400 font-bold">Yes</span>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">Max Spin Speed</span>
                    <span className="text-white font-bold">1400 rpm</span>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">Bubble Technology / Soak</span>
                    <span className="text-emerald-400 font-bold">Yes (AI Ecobubble™)</span>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">Motor Type</span>
                    <span className="text-indigo-300 font-bold">DIT (Digital Inverter)</span>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">Auto Dispense</span>
                    <span className="text-emerald-400 font-bold">Yes (Auto Dosing)</span>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">Super Speed (39 min)</span>
                    <span className="text-emerald-400 font-bold">Yes</span>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">Drum Clean+ & Drum Type</span>
                    <span className="text-white font-bold">Yes / Swirl Drum</span>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">Steam & StayClean Drawer</span>
                    <span className="text-emerald-400 font-bold">Yes / Yes</span>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800 sm:col-span-3">
                    <span className="text-slate-400 block text-[10px]">Additional Functions</span>
                    <span className="text-slate-200 font-medium">Child Lock, Delay End, Language Setting, Intensive, My Cycle, Pre Wash, Time Dry</span>
                  </div>
                </div>
              </td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200 align-top">Washing & Drying Cycles</td>
              <td className="py-3 px-4 text-slate-300">
                <div className="text-[11px] leading-relaxed text-slate-300">
                  <span className="font-bold text-teal-300">Supported Cycles:</span> AI Wash, Air Wash, Bedding, Cloudy Day, Cotton, Colours, Delicates, Drain/Spin, Drum Clean+, E Cotton, Intense Cold, Less Microfiber, Outdoor, Rinse + Spin, Shirts, Silent Wash, Super Speed, Synthetics, Towels, Wash+Dry, Wool, Cotton Dry, Synthetics Dry, 15′ Quick Wash, Hygiene Steam.
                </div>
              </td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200 align-top">Physical Dimensions & Weight</td>
              <td className="py-3 px-4 text-slate-300">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
                  <div><span className="text-slate-400">Net Dimension (WxHxD):</span> <span className="font-bold text-white">600 x 850 x 600 mm</span></div>
                  <div><span className="text-slate-400">Net Weight:</span> <span className="font-bold text-teal-300">77 kg</span></div>
                  <div><span className="text-slate-400">Gross Dimension (WxHxD):</span> <span className="font-bold text-slate-200">679 x 890 x 697 mm</span></div>
                  <div><span className="text-slate-400">Gross Weight:</span> <span className="font-bold text-slate-200">81 kg</span></div>
                </div>
              </td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">Smart Connectivity</td>
              <td className="py-3 px-4 text-slate-200 font-semibold">
                WiFi Embedded : Yes | SmartThings App Support : Yes
              </td>
            </tr>

            <tr className="hover:bg-slate-900/40 bg-slate-900/30">
              <td className="py-3.5 px-4 font-bold text-slate-200 align-top">Price & CUCKOO Service Packages</td>
              <td className="py-3.5 px-4 text-slate-200 space-y-2">
                <div className="p-3.5 rounded-xl bg-slate-900 border border-emerald-900/50 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="text-[11px] text-slate-400 block font-medium">Purchase (Outright)</span>
                    <span className="text-base font-black text-emerald-400">RM 5,299.00</span>
                    <span className="text-[10px] text-slate-400 block">Includes FREE 1-Year standard + 2-Year CUCKOO Extended Exclusive Warranty. Every 6 months service by CUCKOO personnel.</span>
                  </div>
                  <button
                    onClick={() => handleWhatsApp('Samsung AI Laundry Outright RM5,299')}
                    className="px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-[11px] shrink-0 cursor-pointer transition-colors"
                  >
                    Select Outright
                  </button>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900 border border-teal-900/50 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="text-[11px] text-slate-400 block font-medium">Rent (Rental Plan)</span>
                    <span className="text-base font-black text-teal-300">RM 99.00 / month <span className="text-xs font-normal text-slate-400">(7 years)</span></span>
                    <span className="text-[10px] text-slate-400 block">Includes FREE 7-Year CUCKOO Extended Exclusive Warranty. Every 6 months service by CUCKOO personnel.</span>
                  </div>
                  <button
                    onClick={() => handleWhatsApp('Samsung AI Laundry Rental RM99/mth')}
                    className="px-3.5 py-1.5 rounded-lg bg-teal-600 hover:bg-teal-700 text-white font-extrabold text-[11px] shrink-0 cursor-pointer transition-colors"
                  >
                    Select Rental
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
