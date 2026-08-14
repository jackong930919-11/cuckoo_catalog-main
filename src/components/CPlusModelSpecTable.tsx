import React from 'react';
import { Sparkles, MessageCircle, Droplets, Wind, Zap, ShieldCheck, Layers, CheckCircle2, Sliders, Volume2, Calendar, ShieldAlert } from 'lucide-react';
import { CUCKOO_CONTACT } from '../data/cuckooData';

interface CPlusModelSpecTableProps {
  onInquire?: (model: string) => void;
}

export const CPlusModelSpecTable: React.FC<CPlusModelSpecTableProps> = ({ onInquire }) => {
  const handleWhatsApp = (planDetails?: string) => {
    if (onInquire) {
      onInquire('CUCKOO C+ Model Air Purifier + Humidifier');
      return;
    }
    const text = encodeURIComponent(
      `Hi ${CUCKOO_CONTACT.agentName},\nI am interested in CUCKOO C+ Model Air Purifier + Humidifier (37.4m² / 402.57 sq.ft. Coverage)${planDetails ? ` (${planDetails})` : ''}.\nPlease share more details on the RM121/mth rental plan, RM3,100 outright purchase, and current promotions. Thank you!`
    );
    window.open(`https://wa.me/${CUCKOO_CONTACT.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="w-full bg-slate-900 text-slate-100 rounded-3xl p-4 sm:p-6 shadow-2xl border border-slate-800 overflow-hidden my-6">
      {/* Title Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-600/50 text-cyan-300 text-xs font-bold mb-2">
            <Droplets className="w-3.5 h-3.5 text-cyan-400" />
            Malaysia’s 1st Air Purifier + Humidifier
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white tracking-wide flex items-center gap-2 flex-wrap">
            <span>CUCKOO C+ MODEL</span>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold">
              Air Purifier + Humidifier • 402.57 sq.ft.
            </span>
          </h3>
          <p className="text-xs sm:text-sm text-cyan-300 font-bold mt-1 uppercase tracking-wider">
            Purified Air & Superfine Humidification Moisture In One Machine
          </p>
          <p className="text-xs text-slate-400 mt-0.5 max-w-2xl">
            Need purified air? Looking for a humidifier? CUCKOO C+ Model gives the best of both worlds with periodic professional service, HEPA H14 filtration, CUCKOO Plasma Ioniser, and 2.5L water tank capability.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => handleWhatsApp('C+ Model Air Purifier & Humidifier Inquiry')}
            className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-2 transition-all shadow-md shadow-emerald-950 cursor-pointer shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Inquire C+ Model</span>
          </button>
        </div>
      </div>

      {/* Unique Selling Points (USP Highlights Grid) */}
      <div className="mb-6">
        <h4 className="text-xs font-extrabold uppercase text-cyan-400 tracking-wider mb-3 flex items-center gap-1.5">
          <CheckCircle2 className="w-4 h-4" />
          <span>Key Unique Selling Points (USP)</span>
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between hover:border-cyan-500/40 transition-colors">
            <Droplets className="w-5 h-5 text-cyan-400 mb-1" />
            <div>
              <div className="text-[11px] font-extrabold text-white">Superfine Moisture</div>
              <div className="text-[10px] text-slate-400 font-medium">300 ml/h humidifying capability</div>
            </div>
          </div>

          <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between hover:border-cyan-500/40 transition-colors">
            <ShieldCheck className="w-5 h-5 text-emerald-400 mb-1" />
            <div>
              <div className="text-[11px] font-extrabold text-white">HEPA H14 Filter</div>
              <div className="text-[10px] text-slate-400 font-medium">Eliminates up to 99.95% dust</div>
            </div>
          </div>

          <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between hover:border-cyan-500/40 transition-colors">
            <Zap className="w-5 h-5 text-amber-400 mb-1" />
            <div>
              <div className="text-[11px] font-extrabold text-white">CUCKOO Plasma Ioniser</div>
              <div className="text-[10px] text-slate-400 font-medium">Neutralizes airborne bacteria</div>
            </div>
          </div>

          <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between hover:border-cyan-500/40 transition-colors">
            <Layers className="w-5 h-5 text-indigo-400 mb-1" />
            <div>
              <div className="text-[11px] font-extrabold text-white">5-Stage Filtration</div>
              <div className="text-[10px] text-slate-400 font-medium">Includes Harmful Gas & Moisture Filter</div>
            </div>
          </div>

          <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between hover:border-cyan-500/40 transition-colors">
            <Sliders className="w-5 h-5 text-purple-400 mb-1" />
            <div>
              <div className="text-[11px] font-extrabold text-white">11 Operating Modes</div>
              <div className="text-[10px] text-slate-400 font-medium">Auto Humidity, Sterilisation & Room Care</div>
            </div>
          </div>

          <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between hover:border-cyan-500/40 transition-colors">
            <Volume2 className="w-5 h-5 text-teal-400 mb-1" />
            <div>
              <div className="text-[11px] font-extrabold text-white">4-Language Voice Guide</div>
              <div className="text-[10px] text-slate-400 font-medium">ENG, BM, CN, Korean navigation</div>
            </div>
          </div>

          <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between hover:border-cyan-500/40 transition-colors">
            <Wind className="w-5 h-5 text-blue-400 mb-1" />
            <div>
              <div className="text-[11px] font-extrabold text-white">Coverage 402.57 Sqft</div>
              <div className="text-[10px] text-slate-400 font-medium">37.4 m² recommended area</div>
            </div>
          </div>

          <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between hover:border-cyan-500/40 transition-colors">
            <Zap className="w-5 h-5 text-rose-400 mb-1" />
            <div>
              <div className="text-[11px] font-extrabold text-white">Ultra Low 25W Power</div>
              <div className="text-[10px] text-slate-400 font-medium">Energy efficient daily operation</div>
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
              <td className="py-3 px-4 text-white font-black text-sm">C+ Model | Air Purifier + Humidifier</td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">Product Weight & Dimensions</td>
              <td className="py-3 px-4 text-slate-200 font-semibold">9.2 kg | 430mm (W) x 276mm (D) x 550mm (H)</td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">Recommended Coverage Area</td>
              <td className="py-3 px-4 text-cyan-300 font-extrabold">37.4 m² / 402.57 ft²</td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">Power Consumption</td>
              <td className="py-3 px-4 text-slate-200 font-semibold">25W (Ultra Low Energy)</td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">Humidifying Capability & Tank</td>
              <td className="py-3 px-4 text-cyan-300 font-bold">300 ml/h | Water Tank Size: 2.5 L</td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">Sensors</td>
              <td className="py-3 px-4 text-slate-200 font-semibold">Fine Dust Sensor & Humidification Sensor</td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200 align-top">Modes (11 Operating Modes)</td>
              <td className="py-3 px-4 text-slate-300">
                <div className="flex flex-wrap gap-1.5 text-[11px]">
                  <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-cyan-300 font-semibold">1. Auto Mode</span>
                  <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-cyan-300 font-semibold">2. Baby Mode</span>
                  <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-cyan-300 font-semibold">3. Lock Mode</span>
                  <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-cyan-300 font-semibold">4. Auto Humidity Mode</span>
                  <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-cyan-300 font-semibold">5. Repeat Mode</span>
                  <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-cyan-300 font-semibold">6. Energy Eye Mode</span>
                  <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-cyan-300 font-semibold">7. Turbo Mode</span>
                  <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-cyan-300 font-semibold">8. Filter Replacement Indicator</span>
                  <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-cyan-300 font-semibold">9. Sterilisation Mode</span>
                  <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-cyan-300 font-semibold">10. Room Care Mode</span>
                  <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-cyan-300 font-semibold">11. Yellow Dust Mode</span>
                </div>
              </td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200 align-top">5-Stage Filtration System</td>
              <td className="py-3 px-4 text-slate-300 space-y-1">
                <div className="font-bold text-slate-100 mb-1">Includes 5 Filters:</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-[11px]">
                  <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                    <span className="font-bold text-cyan-400">1. Pre-Filter:</span> Traps dust, hair & fur
                  </div>
                  <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                    <span className="font-bold text-cyan-400">2. Harmful Gas Relax Filter*:</span> Neutralizes VOCs & harmful gases
                  </div>
                  <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                    <span className="font-bold text-cyan-400">3. Deodorisation Filter:</span> Eliminates bad odors & smoke
                  </div>
                  <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                    <span className="font-bold text-cyan-400">4. True HEPA H14 Filter:</span> Traps 99.95% fine particles
                  </div>
                  <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 sm:col-span-2">
                    <span className="font-bold text-cyan-400">5. Humidification Filter (Special Filter):</span> Disperses nano-scale moisture particles
                  </div>
                </div>
              </td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200 align-top">Filter Replacement Schedule</td>
              <td className="py-3 px-4 text-slate-300">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-[11px]">
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block font-medium">Pre Filter</span>
                    <span className="text-emerald-400 font-bold">Clean Every 2 Weeks</span>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block font-medium">Harmful Gas Filter</span>
                    <span className="text-amber-300 font-bold">Every 4 Months</span>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block font-medium">Deodorisation Filter</span>
                    <span className="text-amber-300 font-bold">Every 12 Months</span>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block font-medium">True HEPA H14 Filter</span>
                    <span className="text-amber-300 font-bold">Every 12 Months</span>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800 sm:col-span-2">
                    <span className="text-slate-400 block font-medium">Humidification Filter</span>
                    <span className="text-cyan-300 font-bold">Every 4 Months</span>
                  </div>
                </div>
              </td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">Voice Navigation</td>
              <td className="py-3 px-4 text-slate-200 font-semibold">English, Malay, Chinese, Korean (4 Languages)</td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">Air Quality Detection & Indicator</td>
              <td className="py-3 px-4 text-emerald-400 font-bold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Yes (Fine dust & humidity real-time sensor)</span>
              </td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">Special Feature(s)</td>
              <td className="py-3 px-4 text-cyan-300 font-extrabold">2-in-1 Air Purifier with Humidifier & Plasma Ioniser</td>
            </tr>

            <tr className="hover:bg-slate-900/40 bg-slate-900/30">
              <td className="py-3.5 px-4 font-bold text-slate-200 align-top">Price & Packages</td>
              <td className="py-3.5 px-4 text-slate-200 space-y-2">
                <div className="p-3.5 rounded-xl bg-slate-900 border border-emerald-900/50 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="text-[11px] text-slate-400 block font-medium">Purchase (Outright)</span>
                    <span className="text-base font-black text-emerald-400">RM 3,100.00</span>
                    <span className="text-[10px] text-slate-400 block">Includes FREE 1-year service & warranty</span>
                  </div>
                  <button
                    onClick={() => handleWhatsApp('C+ Model Outright RM3,100')}
                    className="px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-[11px] shrink-0 cursor-pointer transition-colors"
                  >
                    Select Outright
                  </button>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900 border border-cyan-900/50 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="text-[11px] text-slate-400 block font-medium">Rent (Rental Plan)</span>
                    <span className="text-base font-black text-cyan-300">RM 121.00 / month <span className="text-xs font-normal text-slate-400">(1st - 5th Year)</span></span>
                    <span className="text-[10px] text-slate-400 block">Includes FREE 5-year periodic service & warranty every 4 months</span>
                  </div>
                  <button
                    onClick={() => handleWhatsApp('C+ Model Rental RM121/mth')}
                    className="px-3.5 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-700 text-white font-extrabold text-[11px] shrink-0 cursor-pointer transition-colors"
                  >
                    Select Rental
                  </button>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="text-[11px] text-slate-400 block font-medium">CUCKOO+ CARE SERVICE PACKAGE (CCSP)</span>
                    <span className="text-sm font-bold text-slate-200">RM 660.00 / year</span>
                  </div>
                  <button
                    onClick={() => handleWhatsApp('C+ Model CCSP RM660/yr')}
                    className="px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-extrabold text-[11px] shrink-0 cursor-pointer transition-colors"
                  >
                    Inquire CCSP
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
