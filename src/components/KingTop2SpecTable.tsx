import React from 'react';
import { Sparkles, MessageCircle, ShieldCheck, Droplets, Flame, Snowflake, Gauge, Lock, Zap, Award, CheckCircle2, Play } from 'lucide-react';
import { CUCKOO_CONTACT } from '../data/cuckooData';

interface KingTop2SpecTableProps {
  onInquire?: (model: string) => void;
}

export const KingTop2SpecTable: React.FC<KingTop2SpecTableProps> = ({ onInquire }) => {
  const handleWhatsApp = (planDetails?: string) => {
    if (onInquire) {
      onInquire('CUCKOO KING TOP 2 Water Purifier');
      return;
    }
    const text = encodeURIComponent(
      `Hi ${CUCKOO_CONTACT.agentName},\nI am interested in CUCKOO KING TOP 2 Water Purifier${planDetails ? ` (${planDetails})` : ''}.\nPlease share details on the RM61/mth GOOODPLAN or RM86/mth rental options. Thank you!`
    );
    window.open(`https://wa.me/${CUCKOO_CONTACT.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="w-full bg-slate-900 text-slate-100 rounded-3xl p-4 sm:p-6 shadow-2xl border border-slate-800 overflow-hidden my-6">
      {/* Title Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-700/50 text-cyan-300 text-xs font-bold mb-2">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            Official Product Specification Chart
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white tracking-wide flex items-center gap-2">
            <span>CUCKOO KING TOP 2</span>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold">New King, New Era</span>
          </h3>
          <p className="text-xs sm:text-sm text-cyan-300 font-bold mt-1">
            Minimalist Modern Design • Indoor Water Purifier
          </p>
          <p className="text-xs text-slate-400 mt-0.5">
            Aesthetically pleasing & perfectly fits into any home. Effortless operation with 6-stage filtration, antibacterial stainless steel tank & status lights.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => handleWhatsApp('King Top 2 Promotion')}
            className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-2 transition-all shadow-md shadow-emerald-950 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Inquire King Top 2</span>
          </button>
        </div>
      </div>

      {/* Official YouTube Video Showcase */}
      <div className="mb-8 p-4 sm:p-5 rounded-2xl bg-slate-950/90 border border-cyan-900/50 shadow-xl">
        <div className="flex items-center justify-between gap-2 mb-3 pb-3 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-cyan-950 border border-cyan-800/60 text-cyan-400">
              <Play className="w-4 h-4 fill-cyan-400" />
            </div>
            <div>
              <h4 className="text-sm font-black text-white uppercase tracking-wide">
                CUCKOO KING TOP 2 Video Showcase
              </h4>
              <p className="text-[11px] text-slate-400">See KING TOP 2 Mild Alkaline Water Purifier in action</p>
            </div>
          </div>
          <a
            href="https://youtu.be/xjkyBvAQ2Zk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-bold text-cyan-400 hover:text-cyan-300 bg-cyan-950/60 px-2.5 py-1 rounded-lg border border-cyan-800/50 flex items-center gap-1.5 transition-colors"
          >
            <span>Open on YouTube</span>
          </a>
        </div>

        <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black border border-slate-800 shadow-inner">
          <iframe
            src="https://www.youtube.com/embed/xjkyBvAQ2Zk"
            title="CUCKOO KING TOP 2 Video Showcase"
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>

      {/* Highlights / USPs Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 mb-6">
        <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between">
          <Award className="w-5 h-5 text-cyan-400 mb-1" />
          <div>
            <div className="text-[11px] font-extrabold text-white">New King, New Era</div>
            <div className="text-[10px] text-slate-400">Minimalist Modern</div>
          </div>
        </div>
        <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between">
          <Droplets className="w-5 h-5 text-indigo-400 mb-1" />
          <div>
            <div className="text-[11px] font-extrabold text-white">6-Stage System</div>
            <div className="text-[10px] text-slate-400">4 Premium Filters</div>
          </div>
        </div>
        <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between">
          <Gauge className="w-5 h-5 text-emerald-400 mb-1" />
          <div>
            <div className="text-[11px] font-extrabold text-white">Room/Cold Valve</div>
            <div className="text-[10px] text-slate-400">Switching Control</div>
          </div>
        </div>
        <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between">
          <Lock className="w-5 h-5 text-rose-400 mb-1" />
          <div>
            <div className="text-[11px] font-extrabold text-white">Child Safety Lock</div>
            <div className="text-[10px] text-slate-400">Scald Protection</div>
          </div>
        </div>
        <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between">
          <ShieldCheck className="w-5 h-5 text-amber-400 mb-1" />
          <div>
            <div className="text-[11px] font-extrabold text-white">Stainless Steel</div>
            <div className="text-[10px] text-slate-400">Antibacterial Tank</div>
          </div>
        </div>
        <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between">
          <Zap className="w-5 h-5 text-sky-400 mb-1" />
          <div>
            <div className="text-[11px] font-extrabold text-white">Status Indicator</div>
            <div className="text-[10px] text-slate-400">Light Status Display</div>
          </div>
        </div>
      </div>

      {/* Specification Chart Table */}
      <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-950/60 mb-6">
        <table className="w-full text-left text-xs text-slate-300 divide-y divide-slate-800/80">
          <thead className="bg-slate-900/90 text-slate-400 uppercase text-[10px] tracking-wider font-extrabold">
            <tr>
              <th className="py-3 px-4 w-2/5">Specification Field</th>
              <th className="py-3 px-4 w-3/5">Details / Specifications</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/50 text-xs">
            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">Model</td>
              <td className="py-3 px-4 text-white font-extrabold">CUCKOO KING TOP 2</td>
            </tr>
            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">Power Consumption</td>
              <td className="py-3 px-4 text-slate-300">
                Cold Water: <strong className="text-white">0.6A</strong> | Hot Water: <strong className="text-amber-300">300 W</strong>
              </td>
            </tr>
            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">Filtration Type</td>
              <td className="py-3 px-4 text-slate-300 font-semibold">6-Stage Filtration System</td>
            </tr>
            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200 align-top">Filter & Replacement Period</td>
              <td className="py-3 px-4 text-slate-300 space-y-1">
                <div>• <strong className="text-slate-200">Sediment Filter:</strong> Every 4 Months</div>
                <div>• <strong className="text-slate-200">Pre-Carbon Block 2.0 Filter:</strong> Every 8 Months</div>
                <div>• <strong className="text-slate-200">Natural 2.0 Filter:</strong> Every 12 Months</div>
                <div>• <strong className="text-slate-200">Nano Positive Filter:</strong> Every 12 Months</div>
              </td>
            </tr>
            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200 align-top">Tank Capacity</td>
              <td className="py-3 px-4 text-slate-300 space-y-1">
                <div className="text-xs text-cyan-300 font-bold mb-1">Suitable for 4–8 family members</div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-slate-900 p-2 rounded-xl border border-slate-800 text-center">
                    <span className="block text-[10px] text-slate-400 font-medium">Cold</span>
                    <span className="font-extrabold text-cyan-300 text-xs">1.0 L</span>
                  </div>
                  <div className="bg-slate-900 p-2 rounded-xl border border-slate-800 text-center">
                    <span className="block text-[10px] text-slate-400 font-medium">Room</span>
                    <span className="font-extrabold text-emerald-300 text-xs">0.3 L</span>
                  </div>
                  <div className="bg-slate-900 p-2 rounded-xl border border-slate-800 text-center">
                    <span className="block text-[10px] text-slate-400 font-medium">Hot</span>
                    <span className="font-extrabold text-amber-300 text-xs">1.0 L</span>
                  </div>
                </div>
              </td>
            </tr>
            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200 align-top">Key Selling Features (USP)</td>
              <td className="py-3 px-4 text-slate-300 space-y-1">
                <div>1. <strong className="text-slate-100">Minimalist Modern Design:</strong> Aesthetically pleasing indoor purifier that fits any home</div>
                <div>2. <strong className="text-slate-100">6-Stage Mild Alkaline System:</strong> Pure, mineralised, virus & bacteria-free drinking water</div>
                <div>3. <strong className="text-slate-100">Room/Cold Switching Valve:</strong> Convenient dial control for instant temperature selection</div>
                <div>4. <strong className="text-slate-100">Child Lock Safety Feature:</strong> Protects kids from accidental scalding</div>
                <div>5. <strong className="text-slate-100">Antibacterial Stainless-Steel Tank:</strong> Hygienic, durable, heat-resistant storage</div>
                <div>6. <strong className="text-slate-100">Status Light Indicator:</strong> Clear visual feedback for hot/cold readiness</div>
              </td>
            </tr>
            <tr className="hover:bg-slate-900/40 bg-cyan-950/20">
              <td className="py-3 px-4 font-bold text-cyan-300 align-top">Rental Options</td>
              <td className="py-3 px-4 text-slate-300 space-y-2">
                <div className="p-2.5 rounded-xl bg-slate-900/80 border border-emerald-800/50">
                  <span className="px-2 py-0.5 rounded bg-emerald-600 text-white font-bold text-[10px] inline-block mb-1">CUCKOO GOOODPLAN™ (Lowest Rate)</span>
                  <p className="text-white font-extrabold text-xs">RM 61.00 / month <span className="font-normal text-slate-400">(Free 7-year service & warranty)</span></p>
                  <p className="text-[11px] text-emerald-300 mt-0.5">✓ Includes 7-year free filter replacements, scheduled service & warranty</p>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-900/80 border border-cyan-800/50">
                  <span className="px-2 py-0.5 rounded bg-cyan-600 text-white font-bold text-[10px] inline-block mb-1">5-Year Rental Plan</span>
                  <p className="text-white font-extrabold text-xs">RM 86.00 / month <span className="font-normal text-slate-400">(1st – 5th Year)</span></p>
                  <p className="text-[11px] text-cyan-300 mt-0.5">✓ Includes 5-year free filter replacements, scheduled service & warranty</p>
                </div>
              </td>
            </tr>
            <tr className="hover:bg-slate-900/40 bg-amber-950/20">
              <td className="py-3 px-4 font-bold text-amber-300 align-top">Purchase (Outright)</td>
              <td className="py-3 px-4 text-slate-300 space-y-1">
                <p className="text-amber-200 font-extrabold text-sm">RM 3,850.00</p>
                <p className="text-xs text-amber-300 font-semibold">
                  ✓ Includes FREE 1-year scheduled service & warranty
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Bottom CTA Banner */}
      <div className="p-4 rounded-2xl bg-gradient-to-r from-cyan-900/60 to-slate-800/80 border border-cyan-700/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="text-xs">
          <p className="font-extrabold text-white">Interested in CUCKOO KING TOP 2?</p>
          <p className="text-slate-300 mt-0.5">Get it for as low as RM61/mth with free installation & servicing by authorized agent <strong className="text-amber-400">{CUCKOO_CONTACT.agentName}</strong>.</p>
        </div>
        <button
          onClick={() => handleWhatsApp('King Top 2 Deal')}
          className="py-2.5 px-5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black text-xs transition-all whitespace-nowrap self-start sm:self-auto cursor-pointer"
        >
          Inquire King Top 2 via WhatsApp
        </button>
      </div>
    </div>
  );
};
