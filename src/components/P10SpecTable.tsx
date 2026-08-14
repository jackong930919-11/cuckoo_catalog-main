import React from 'react';
import { Sparkles, MessageCircle, ShieldCheck, Zap, Award, Flame, Check, Minus, Play, Cpu, Volume2, Shield, Utensils, Timer, Clock } from 'lucide-react';
import { CUCKOO_CONTACT } from '../data/cuckooData';

interface P10SpecTableProps {
  onInquire?: (model: string) => void;
}

export const P10SpecTable: React.FC<P10SpecTableProps> = ({ onInquire }) => {
  const handleWhatsApp = (planDetails?: string) => {
    if (onInquire) {
      onInquire('CUCKOO P10 Pressure Multi-Cooker');
      return;
    }
    const text = encodeURIComponent(
      `Hi ${CUCKOO_CONTACT.agentName},\nI am interested in CUCKOO P10 Pressure Multi-Cooker (CRP-P10 Series in Pinkish Pearl White, RM 1,575.00)${planDetails ? ` (${planDetails})` : ''}.\nPlease share more details and order procedures. Thank you!`
    );
    window.open(`https://wa.me/${CUCKOO_CONTACT.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="w-full bg-slate-900 text-slate-100 rounded-3xl p-4 sm:p-6 shadow-2xl border border-slate-800 overflow-hidden my-6">
      {/* Title Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-950/80 border border-rose-700/50 text-rose-300 text-xs font-bold mb-2">
            <Sparkles className="w-3.5 h-3.5 text-rose-400" />
            Official Product & Cooking Specification Chart
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white tracking-wide flex items-center gap-2">
            <span>CUCKOO P10 Pressure Multi-Cooker</span>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/40 font-semibold">CRP-P10 Series</span>
          </h3>
          <p className="text-xs sm:text-sm text-rose-300 font-bold mt-1 uppercase tracking-wider">
            Discover The Joy Of Cooking With CUCKOO P10
          </p>
          <p className="text-xs text-slate-400 mt-0.5 max-w-2xl">
            Eco Pressure Multi Cooker equipped with Xwall Diamond Coating, 14 Safety Features, Stainless Steel Detachable Cover, Auto Steam Sterilisation, and 9 versatile cooking modes.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => handleWhatsApp('P10 Rice Cooker Inquiry')}
            className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-2 transition-all shadow-md shadow-emerald-950 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Inquire P10 Multi-Cooker</span>
          </button>
        </div>
      </div>

      {/* Official YouTube Video Showcase */}
      <div className="mb-8 p-4 sm:p-5 rounded-2xl bg-slate-950/90 border border-rose-900/50 shadow-xl">
        <div className="flex items-center justify-between gap-2 mb-3 pb-3 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-rose-950 border border-rose-800/60 text-rose-400">
              <Play className="w-4 h-4 fill-rose-400" />
            </div>
            <div>
              <h4 className="text-sm font-black text-white uppercase tracking-wide">
                CUCKOO P10 Cooking Video Showcase
              </h4>
              <p className="text-[11px] text-slate-400">See the P10 Pressure Multi-Cooker in action</p>
            </div>
          </div>
          <a
            href="https://www.youtube.com/watch?v=7uSygAYqrwc"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-bold text-rose-400 hover:text-rose-300 bg-rose-950/60 px-2.5 py-1 rounded-lg border border-rose-800/50 flex items-center gap-1.5 transition-colors"
          >
            <span>Open on YouTube</span>
          </a>
        </div>

        <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black border border-slate-800 shadow-inner">
          <iframe
            src="https://www.youtube.com/embed/7uSygAYqrwc"
            title="CUCKOO P10 Pressure Multi-Cooker Showcase"
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>

      {/* Highlights / Technology Pills Grid (4 + 4 Layout in 2 Rows) */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-6">
        <div className="bg-slate-800/60 p-3.5 rounded-2xl border border-slate-700/60 flex flex-col justify-between hover:border-rose-500/40 transition-colors">
          <Flame className="w-5 h-5 text-rose-400 mb-1" />
          <div>
            <div className="text-[12px] font-black text-white">Eco Pressure</div>
            <div className="text-[10px] text-slate-400 font-medium">78.4 kPa Pressure</div>
          </div>
        </div>

        <div className="bg-slate-800/60 p-3.5 rounded-2xl border border-slate-700/60 flex flex-col justify-between hover:border-rose-500/40 transition-colors">
          <ShieldCheck className="w-5 h-5 text-emerald-400 mb-1" />
          <div>
            <div className="text-[12px] font-black text-white">14 Safety Features</div>
            <div className="text-[10px] text-slate-400 font-medium">Full Protection</div>
          </div>
        </div>

        <div className="bg-slate-800/60 p-3.5 rounded-2xl border border-slate-700/60 flex flex-col justify-between hover:border-rose-500/40 transition-colors">
          <Award className="w-5 h-5 text-amber-400 mb-1" />
          <div>
            <div className="text-[12px] font-black text-white">Xwall Diamond</div>
            <div className="text-[10px] text-slate-400 font-medium">Non-Stick Coating</div>
          </div>
        </div>

        <div className="bg-slate-800/60 p-3.5 rounded-2xl border border-slate-700/60 flex flex-col justify-between hover:border-rose-500/40 transition-colors">
          <Shield className="w-5 h-5 text-cyan-400 mb-1" />
          <div>
            <div className="text-[12px] font-black text-white">Detachable Cover</div>
            <div className="text-[10px] text-slate-400 font-medium">Stainless Steel</div>
          </div>
        </div>

        <div className="bg-slate-800/60 p-3.5 rounded-2xl border border-slate-700/60 flex flex-col justify-between hover:border-rose-500/40 transition-colors">
          <Sparkles className="w-5 h-5 text-purple-400 mb-1" />
          <div>
            <div className="text-[12px] font-black text-white">Auto Sterilise</div>
            <div className="text-[10px] text-slate-400 font-medium">Steam Sterilisation</div>
          </div>
        </div>

        <div className="bg-slate-800/60 p-3.5 rounded-2xl border border-slate-700/60 flex flex-col justify-between hover:border-rose-500/40 transition-colors">
          <Volume2 className="w-5 h-5 text-blue-400 mb-1" />
          <div>
            <div className="text-[12px] font-black text-white">Voice Navigation</div>
            <div className="text-[10px] text-slate-400 font-medium">English & Mandarin</div>
          </div>
        </div>

        <div className="bg-slate-800/60 p-3.5 rounded-2xl border border-slate-700/60 flex flex-col justify-between hover:border-rose-500/40 transition-colors">
          <Cpu className="w-5 h-5 text-indigo-400 mb-1" />
          <div>
            <div className="text-[12px] font-black text-white">Smart Algorithm</div>
            <div className="text-[10px] text-slate-400 font-medium">Precision Heat Control</div>
          </div>
        </div>

        <div className="bg-slate-800/60 p-3.5 rounded-2xl border border-slate-700/60 flex flex-col justify-between hover:border-rose-500/40 transition-colors">
          <Utensils className="w-5 h-5 text-orange-400 mb-1" />
          <div>
            <div className="text-[12px] font-black text-white">10 Cups Capacity</div>
            <div className="text-[10px] text-slate-400 font-medium">Large Family Size (1.8L)</div>
          </div>
        </div>
      </div>

      {/* 9 Cooking Modes Showcase (5 + 4 Layout) */}
      <div className="mb-8 p-4 sm:p-5 rounded-2xl bg-slate-950/80 border border-slate-800">
        <div className="flex items-center justify-between gap-2 mb-4 pb-2 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <Utensils className="w-4 h-4 text-rose-400" />
            <h4 className="text-sm font-black text-white uppercase tracking-wider">
              9 Versatile Preset Cooking Modes
            </h4>
          </div>
          <span className="text-[10px] font-bold text-rose-300 bg-rose-950/80 px-2.5 py-1 rounded-full border border-rose-800/50">
            5 + 4 Smart Presets
          </span>
        </div>

        <div className="space-y-3">
          {/* Row 1: 5 Modes */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
            <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800 hover:border-rose-500/40 transition-colors text-center">
              <span className="text-rose-400 font-black block text-xs tracking-wide">1. RICE</span>
              <span className="text-[10px] sm:text-[11px] text-slate-300 font-medium block mt-1 leading-tight">White & Fluffy Rice</span>
            </div>
            <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800 hover:border-rose-500/40 transition-colors text-center">
              <span className="text-rose-400 font-black block text-xs tracking-wide">2. GABA RICE</span>
              <span className="text-[10px] sm:text-[11px] text-slate-300 font-medium block mt-1 leading-tight">Germinated Rice</span>
            </div>
            <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800 hover:border-rose-500/40 transition-colors text-center">
              <span className="text-rose-400 font-black block text-xs tracking-wide">3. Sushi Rice</span>
              <span className="text-[10px] sm:text-[11px] text-slate-300 font-medium block mt-1 leading-tight">Sticky & Firm Grain</span>
            </div>
            <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800 hover:border-rose-500/40 transition-colors text-center">
              <span className="text-rose-400 font-black block text-xs tracking-wide">4. Turbo Rice</span>
              <span className="text-[10px] sm:text-[11px] text-slate-300 font-medium block mt-1 leading-tight">Express Fast Cook</span>
            </div>
            <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800 hover:border-rose-500/40 transition-colors text-center col-span-2 sm:col-span-1">
              <span className="text-rose-400 font-black block text-xs tracking-wide">5. Multi Cook</span>
              <span className="text-[10px] sm:text-[11px] text-slate-300 font-medium block mt-1 leading-tight">Stewing & Soups</span>
            </div>
          </div>

          {/* Row 2: 4 Modes (Centered layout on desktop) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:max-w-[85%] sm:mx-auto">
            <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800 hover:border-rose-500/40 transition-colors text-center">
              <span className="text-rose-400 font-black block text-xs tracking-wide">6. Oven</span>
              <span className="text-[10px] sm:text-[11px] text-slate-300 font-medium block mt-1 leading-tight">Baking & Roasting</span>
            </div>
            <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800 hover:border-rose-500/40 transition-colors text-center">
              <span className="text-rose-400 font-black block text-xs tracking-wide">7. Baby Food</span>
              <span className="text-[10px] sm:text-[11px] text-slate-300 font-medium block mt-1 leading-tight">Nutritious Purees</span>
            </div>
            <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800 hover:border-rose-500/40 transition-colors text-center">
              <span className="text-rose-400 font-black block text-xs tracking-wide">8. Ferment Bread</span>
              <span className="text-[10px] sm:text-[11px] text-slate-300 font-medium block mt-1 leading-tight">Dough Proofing</span>
            </div>
            <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800 hover:border-rose-500/40 transition-colors text-center">
              <span className="text-rose-400 font-black block text-xs tracking-wide">9. Preset Mode</span>
              <span className="text-[10px] sm:text-[11px] text-slate-300 font-medium block mt-1 leading-tight">12h 50m Timer</span>
            </div>
          </div>
        </div>
      </div>

      {/* Official Specifications Table (Converted from Image Chart) */}
      <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-950/60 mb-6">
        <div className="p-3 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
          <span className="text-xs font-black text-rose-300 uppercase tracking-wider flex items-center gap-2">
            <Award className="w-4 h-4 text-rose-400" />
            CUCKOO P10 Technical Specification Chart
          </span>
          <span className="text-[10px] bg-rose-950 text-rose-300 px-2 py-0.5 rounded border border-rose-800 font-bold">
            Pinkish Pearl White
          </span>
        </div>

        <table className="w-full text-left text-xs text-slate-300 divide-y divide-slate-800/80">
          <thead className="bg-slate-900/60 text-slate-400 uppercase text-[10px] tracking-wider font-extrabold">
            <tr>
              <th className="py-3 px-4 w-2/5">Specification Metric</th>
              <th className="py-3 px-4 w-3/5">Details / Technical Data</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/50 text-xs">
            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">Model</td>
              <td className="py-3 px-4 text-white font-extrabold">CRP-P10 Series</td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">Colour</td>
              <td className="py-3 px-4 text-rose-300 font-bold">Pinkish Pearl White</td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">Weight</td>
              <td className="py-3 px-4 text-slate-300 font-semibold">7.2 kg</td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">Dimension (W × L × H)</td>
              <td className="py-3 px-4 text-white font-bold">
                (W) 294 mm × (L) 395 mm × (H) 290 mm
              </td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">Power Cord Length</td>
              <td className="py-3 px-4 text-slate-300">1.0 metre</td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">Cooking Pressure</td>
              <td className="py-3 px-4 text-emerald-400 font-black">
                78.4 kPa (0.8 kgf/cm²) Eco Pressure System
              </td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">Power Consumption</td>
              <td className="py-3 px-4 text-amber-300 font-bold">1150 W</td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">Heating Mechanism</td>
              <td className="py-3 px-4 text-slate-300 font-semibold">Hotplate Heating System</td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">Cups Serving Capacity</td>
              <td className="py-3 px-4 text-cyan-300 font-extrabold">10 Cups (1.8 Litres)</td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">Max. Preset Time</td>
              <td className="py-3 px-4 text-slate-300">12 Hours 50 Minutes</td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">Safety Lock</td>
              <td className="py-3 px-4 text-emerald-400 font-extrabold flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-400 inline" /> Included (14 Safety Features)
              </td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">Auto Steam Sterilisation</td>
              <td className="py-3 px-4 text-emerald-400 font-extrabold flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-400 inline" /> Yes (Auto Cleaning)
              </td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">Detachable Cover</td>
              <td className="py-3 px-4 text-emerald-400 font-extrabold flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-400 inline" /> Stainless Steel Detachable Cover
              </td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">Touch Screen</td>
              <td className="py-3 px-4 text-slate-500 font-medium flex items-center gap-1.5">
                <Minus className="w-4 h-4 text-slate-500 inline" /> Not Applicable (Push Button Panel)
              </td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">Voice Navigation</td>
              <td className="py-3 px-4 text-blue-300 font-extrabold">English & Mandarin Dual Language</td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200 align-top">Other Key Feature(s)</td>
              <td className="py-3 px-4 text-slate-300 space-y-1">
                <div>1. <strong className="text-white">Soft Steam Cap:</strong> Silent and gentle steam release for enhanced safety</div>
                <div>2. <strong className="text-white">Double Layer Rubber Packing:</strong> Superior pressure sealing preventing steam leakage</div>
                <div>3. <strong className="text-white">Preset Cooking:</strong> Up to 12 hours 50 minutes programmable timer</div>
                <div>4. <strong className="text-white">Xwall Diamond Coating:</strong> Premium scratch-resistant non-stick inner pot</div>
              </td>
            </tr>

            <tr className="hover:bg-slate-900/40 bg-rose-950/20">
              <td className="py-3 px-4 font-bold text-rose-300 align-top">Purchase Price (Outright)</td>
              <td className="py-3 px-4 text-slate-300 space-y-1">
                <p className="text-rose-300 font-black text-base">RM 1,575.00</p>
                <p className="text-xs text-slate-300 font-semibold">
                  ✓ Includes Official 1-Year CUCKOO Malaysia Warranty
                </p>
                <p className="text-[11px] text-slate-400">
                  (Note: Outright purchase model; rental plan & CCSP service packages are not applicable)
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Bottom CTA Banner */}
      <div className="p-4 rounded-2xl bg-gradient-to-r from-rose-950/70 to-slate-900/90 border border-rose-800/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="text-xs">
          <p className="font-extrabold text-white">Ready to elevate your home cooking with CUCKOO P10?</p>
          <p className="text-slate-300 mt-0.5">Order outright for RM 1,575.00 with official 1-year CUCKOO warranty from authorized agent <strong className="text-amber-400">{CUCKOO_CONTACT.agentName}</strong>.</p>
        </div>
        <button
          onClick={() => handleWhatsApp('P10 Special Offer')}
          className="py-2.5 px-5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black text-xs transition-all whitespace-nowrap self-start sm:self-auto cursor-pointer"
        >
          Inquire P10 via WhatsApp
        </button>
      </div>
    </div>
  );
};
