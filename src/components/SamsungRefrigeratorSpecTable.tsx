import React from 'react';
import { Sparkles, MessageCircle, Wifi, Zap, ShieldCheck, Layers, CheckCircle2, Sliders, Box, Snowflake, ShieldAlert, Cpu } from 'lucide-react';
import { CUCKOO_CONTACT } from '../data/cuckooData';

interface SamsungRefrigeratorSpecTableProps {
  onInquire?: (model: string) => void;
}

export const SamsungRefrigeratorSpecTable: React.FC<SamsungRefrigeratorSpecTableProps> = ({ onInquire }) => {
  const handleWhatsApp = (planDetails?: string) => {
    if (onInquire) {
      onInquire('Samsung Refrigerator 583L Side-by-Side');
      return;
    }
    const text = encodeURIComponent(
      `Hi ${CUCKOO_CONTACT.agentName},\nI am interested in Samsung 583L Refrigerator SBS - SmartThings AI Energy Gentle Silver Matt${planDetails ? ` (${planDetails})` : ''}.\nPlease share more details on the RM85/mth rental plan, RM4,099 outright purchase, and current promotions. Thank you!`
    );
    window.open(`https://wa.me/${CUCKOO_CONTACT.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="w-full bg-slate-900 text-slate-100 rounded-3xl p-4 sm:p-6 shadow-2xl border border-slate-800 overflow-hidden my-6">
      {/* Title Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/80 border border-sky-600/50 text-sky-300 text-xs font-bold mb-2">
            <Wifi className="w-3.5 h-3.5 text-sky-400" />
            SmartThings AI Energy • Wi-Fi Embedded
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white tracking-wide flex items-center gap-2 flex-wrap">
            <span>SAMSUNG 583L REFRIGERATOR</span>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-sky-500/20 text-sky-300 border border-sky-500/40 font-semibold">
              Side-by-Side • Gentle Silver Matt
            </span>
          </h3>
          <p className="text-xs sm:text-sm text-sky-300 font-bold mt-1 uppercase tracking-wider">
            Do the SmartThings at home — Control Anywhere & AI Energy Mode
          </p>
          <p className="text-xs text-slate-400 mt-0.5 max-w-2xl">
            Large 583L capacity Side-by-Side refrigerator equipped with Wi-Fi SmartThings control, AI Energy mode, Digital Inverter Compressor with 10-Year Warranty, Power Cool & Freeze, and All-Around Cooling.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => handleWhatsApp('Samsung 583L Refrigerator Inquiry')}
            className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-2 transition-all shadow-md shadow-emerald-950 cursor-pointer shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Inquire Samsung 583L</span>
          </button>
        </div>
      </div>

      {/* Unique Selling Points (USP Highlights Grid) */}
      <div className="mb-6">
        <h4 className="text-xs font-extrabold uppercase text-sky-400 tracking-wider mb-3 flex items-center gap-1.5">
          <CheckCircle2 className="w-4 h-4" />
          <span>Key Smart Features & USPs</span>
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between hover:border-sky-500/40 transition-colors">
            <Wifi className="w-5 h-5 text-sky-400 mb-1" />
            <div>
              <div className="text-[11px] font-extrabold text-white">Control Anywhere</div>
              <div className="text-[10px] text-slate-400 font-medium">Wi-Fi Embedded & SmartThings</div>
            </div>
          </div>

          <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between hover:border-sky-500/40 transition-colors">
            <Zap className="w-5 h-5 text-emerald-400 mb-1" />
            <div>
              <div className="text-[11px] font-extrabold text-white">AI Energy Mode</div>
              <div className="text-[10px] text-slate-400 font-medium">Smart energy savings (385 kWh/yr)</div>
            </div>
          </div>

          <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between hover:border-sky-500/40 transition-colors">
            <Box className="w-5 h-5 text-amber-400 mb-1" />
            <div>
              <div className="text-[11px] font-extrabold text-white">583L Massive Space</div>
              <div className="text-[10px] text-slate-400 font-medium">375L Fridge + 208L Freezer</div>
            </div>
          </div>

          <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between hover:border-sky-500/40 transition-colors">
            <Cpu className="w-5 h-5 text-indigo-400 mb-1" />
            <div>
              <div className="text-[11px] font-extrabold text-white">Digital Inverter</div>
              <div className="text-[10px] text-slate-400 font-medium">Compressor with 10-Yr Warranty</div>
            </div>
          </div>

          <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between hover:border-sky-500/40 transition-colors">
            <Snowflake className="w-5 h-5 text-cyan-400 mb-1" />
            <div>
              <div className="text-[11px] font-extrabold text-white">No Frost & Power Cool</div>
              <div className="text-[10px] text-slate-400 font-medium">Power Freeze & All-Around Cooling</div>
            </div>
          </div>

          <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between hover:border-sky-500/40 transition-colors">
            <Sliders className="w-5 h-5 text-purple-400 mb-1" />
            <div>
              <div className="text-[11px] font-extrabold text-white">SmartThings Suite</div>
              <div className="text-[10px] text-slate-400 font-medium">Energy, Home Care & Food</div>
            </div>
          </div>

          <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between hover:border-sky-500/40 transition-colors">
            <Layers className="w-5 h-5 text-teal-400 mb-1" />
            <div>
              <div className="text-[11px] font-extrabold text-white">Modern Flat Design</div>
              <div className="text-[10px] text-slate-400 font-medium">Gentle Silver Matt & Recess Handle</div>
            </div>
          </div>

          <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between hover:border-sky-500/40 transition-colors">
            <ShieldCheck className="w-5 h-5 text-rose-400 mb-1" />
            <div>
              <div className="text-[11px] font-extrabold text-white">Extended Warranty</div>
              <div className="text-[10px] text-slate-400 font-medium">Free CUCKOO Exclusive Coverage</div>
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
              <td className="py-3 px-4 font-bold text-slate-200">Model</td>
              <td className="py-3 px-4 text-white font-black text-sm">583L Refrigerator SBS – SmartThings AI Energy Gentle Silver Matt</td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">Capacity</td>
              <td className="py-3 px-4 text-slate-200 font-semibold">
                <div className="grid grid-cols-3 gap-2 text-center text-[11px]">
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">Net Total</span>
                    <span className="text-sky-300 font-bold text-xs">583 ℓ</span>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">Net Fridge</span>
                    <span className="text-emerald-400 font-bold text-xs">375 ℓ</span>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">Net Freezer</span>
                    <span className="text-cyan-300 font-bold text-xs">208 ℓ</span>
                  </div>
                </div>
              </td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200 align-top">Physical Specification</td>
              <td className="py-3 px-4 text-slate-300 space-y-1">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
                  <div><span className="text-slate-400">Net Dimension (WxHxD):</span> <span className="font-bold text-white">912 x 1780 x 654 mm</span></div>
                  <div><span className="text-slate-400">Net Case Height w/o Hinge:</span> <span className="font-bold text-white">1744 mm</span></div>
                  <div><span className="text-slate-400">Packing Dimension (WxHxD):</span> <span className="font-bold text-white">974 x 1909 x 716 mm</span></div>
                  <div><span className="text-slate-400">Net Weight / Packing Weight:</span> <span className="font-bold text-sky-300">91 kg / 99 kg</span></div>
                  <div><span className="text-slate-400">20/40/40H Container:</span> <span className="font-bold text-slate-200">17 / 36 / 48</span></div>
                </div>
              </td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200 align-top">Cooling Features</td>
              <td className="py-3 px-4 text-slate-300">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px]">
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">No Frost</span>
                    <span className="text-emerald-400 font-bold">Yes</span>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">Power Cool</span>
                    <span className="text-emerald-400 font-bold">Yes</span>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">Power Freeze</span>
                    <span className="text-emerald-400 font-bold">Yes</span>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">Cooling Type</span>
                    <span className="text-sky-300 font-bold">Mono cooling</span>
                  </div>
                </div>
              </td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200 align-top">Refrigerator Features</td>
              <td className="py-3 px-4 text-slate-300">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-[11px]">
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">Number of Shelves</span>
                    <span className="text-white font-bold">5 EA</span>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">Number of Door Pockets</span>
                    <span className="text-white font-bold">5 EA</span>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">Egg Container / Tray</span>
                    <span className="text-emerald-400 font-bold">Yes</span>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">Interior LED Light</span>
                    <span className="text-white font-bold">Top LED</span>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">Shelf Material</span>
                    <span className="text-sky-300 font-bold">Glass(4EA) / HIPS(1EA)</span>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">Veg & Fruit Drawer</span>
                    <span className="text-white font-bold">1 EA</span>
                  </div>
                </div>
              </td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200 align-top">Freezer Features</td>
              <td className="py-3 px-4 text-slate-300">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-[11px]">
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">Number of Shelves</span>
                    <span className="text-white font-bold">5 EA</span>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">Number of Door Pockets</span>
                    <span className="text-white font-bold">5 EA</span>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">Shelf Material</span>
                    <span className="text-sky-300 font-bold">Glass(4EA) / HIPS(1EA)</span>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">Interior LED Light</span>
                    <span className="text-white font-bold">Top LED</span>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">Ice Tray</span>
                    <span className="text-emerald-400 font-bold">Yes</span>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">Number of Drawers</span>
                    <span className="text-white font-bold">1 EA</span>
                  </div>
                </div>
              </td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200 align-top">General & Exterior Features</td>
              <td className="py-3 px-4 text-slate-300">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-[11px]">
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">Door Alarm</span>
                    <span className="text-emerald-400 font-bold">Yes</span>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">Refrigerant</span>
                    <span className="text-white font-bold">R-600a</span>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">Compressor</span>
                    <span className="text-sky-300 font-bold">Digital Inverter</span>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">Display Type</span>
                    <span className="text-white font-bold">Simple UX LED</span>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">Door Handle & Type</span>
                    <span className="text-white font-bold">Recess / Flat Door</span>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">Color Finish</span>
                    <span className="text-sky-300 font-bold">Gentle Silver Matt</span>
                  </div>
                </div>
              </td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">Performance & Smart Features</td>
              <td className="py-3 px-4 text-slate-200">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px]">
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">Energy Consumption</span>
                    <span className="text-emerald-400 font-bold">385 kWh / year</span>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">WiFi Embedded</span>
                    <span className="text-sky-300 font-bold">Yes (Control Anywhere)</span>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">SmartThings App Support</span>
                    <span className="text-sky-300 font-bold">Yes (Energy, Care, Food)</span>
                  </div>
                </div>
              </td>
            </tr>

            <tr className="hover:bg-slate-900/40 bg-slate-900/30">
              <td className="py-3.5 px-4 font-bold text-slate-200 align-top">Price & Packages</td>
              <td className="py-3.5 px-4 text-slate-200 space-y-2">
                <div className="p-3.5 rounded-xl bg-slate-900 border border-emerald-900/50 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="text-[11px] text-slate-400 block font-medium">Purchase (Outright)</span>
                    <span className="text-base font-black text-emerald-400">RM 4,099.00</span>
                    <span className="text-[10px] text-slate-400 block">Includes FREE 2-Year standard + 1-Year CUCKOO Extended Exclusive Warranty</span>
                  </div>
                  <button
                    onClick={() => handleWhatsApp('Samsung 583L Outright RM4,099')}
                    className="px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-[11px] shrink-0 cursor-pointer transition-colors"
                  >
                    Select Outright
                  </button>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900 border border-sky-900/50 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="text-[11px] text-slate-400 block font-medium">Rent (Rental Plan)</span>
                    <span className="text-base font-black text-sky-300">RM 85.00 / month <span className="text-xs font-normal text-slate-400">(5 years)</span></span>
                    <span className="text-[10px] text-slate-400 block">Includes FREE 5-Year Exclusive Warranty</span>
                  </div>
                  <button
                    onClick={() => handleWhatsApp('Samsung 583L Rental RM85/mth')}
                    className="px-3.5 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-700 text-white font-extrabold text-[11px] shrink-0 cursor-pointer transition-colors"
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
