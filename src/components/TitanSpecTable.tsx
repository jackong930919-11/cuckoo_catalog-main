import React from 'react';
import { Sparkles, MessageCircle, ShieldCheck, Droplets, Flame, Zap, Volume2, Lightbulb, Lock, Maximize2, Power, Play } from 'lucide-react';
import { CUCKOO_CONTACT } from '../data/cuckooData';

interface TitanSpecTableProps {
  onInquire?: (model: string) => void;
}

export const TitanSpecTable: React.FC<TitanSpecTableProps> = ({ onInquire }) => {
  const handleWhatsApp = (planDetails?: string) => {
    if (onInquire) {
      onInquire('CUCKOO TITAN Water Purifier');
      return;
    }
    const text = encodeURIComponent(
      `Hi ${CUCKOO_CONTACT.agentName},\nI am interested in CUCKOO TITAN Tankless Instant 100°C Extra Hot Water Purifier${planDetails ? ` (${planDetails})` : ''}.\nPlease share details on the RM109/mth or RM119/mth rental plans and latest promotions. Thank you!`
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
            Official Product Specification Chart
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white tracking-wide flex items-center gap-2">
            <span>CUCKOO TITAN</span>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/40 font-semibold">1st in Malaysia 100°C Tankless</span>
          </h3>
          <p className="text-xs sm:text-sm text-rose-300 font-bold mt-1">
            Tiny Body, Titanic Power — Instant 100°C Extra Hot & Tankless Water Purifier
          </p>
          <p className="text-xs text-slate-400 mt-0.5">
            Instant 100°C hot water purified by cutting-edge filtration technologies, in-out auto-sterilisation, voice navigation, and ultra-sleek 166mm slim design.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => handleWhatsApp('TITAN Deal')}
            className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-2 transition-all shadow-md shadow-emerald-950 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Inquire TITAN</span>
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
                CUCKOO TITAN Video Showcase
              </h4>
              <p className="text-[11px] text-slate-400">See TITAN Tankless Water Purifier in action</p>
            </div>
          </div>
          <a
            href="https://youtu.be/vbHtAV-TfYw"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-bold text-rose-400 hover:text-rose-300 bg-rose-950/60 px-2.5 py-1 rounded-lg border border-rose-800/50 flex items-center gap-1.5 transition-colors"
          >
            <span>Open on YouTube</span>
          </a>
        </div>

        <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black border border-slate-800 shadow-inner">
          <iframe
            src="https://www.youtube.com/embed/vbHtAV-TfYw"
            title="CUCKOO TITAN Video Showcase"
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>

      {/* Highlights / USPs Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 mb-6">
        <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between">
          <Flame className="w-5 h-5 text-rose-400 mb-1" />
          <div>
            <div className="text-[11px] font-extrabold text-white">Instant 100°C Hot</div>
            <div className="text-[10px] text-slate-400">1st in Malaysia</div>
          </div>
        </div>
        <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between">
          <Droplets className="w-5 h-5 text-cyan-400 mb-1" />
          <div>
            <div className="text-[11px] font-extrabold text-white">5-Stage System</div>
            <div className="text-[10px] text-slate-400">Nano Positive Filter</div>
          </div>
        </div>
        <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between">
          <ShieldCheck className="w-5 h-5 text-emerald-400 mb-1" />
          <div>
            <div className="text-[11px] font-extrabold text-white">In & Out Sterilise</div>
            <div className="text-[10px] text-slate-400">Auto Sterilisation</div>
          </div>
        </div>
        <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between">
          <Volume2 className="w-5 h-5 text-indigo-400 mb-1" />
          <div>
            <div className="text-[11px] font-extrabold text-white">Voice Guidance</div>
            <div className="text-[10px] text-slate-400">Malay & English</div>
          </div>
        </div>
        <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between col-span-2 sm:col-span-1">
          <Maximize2 className="w-5 h-5 text-amber-400 mb-1" />
          <div>
            <div className="text-[11px] font-extrabold text-white">166mm Slim Design</div>
            <div className="text-[10px] text-slate-400">Adjustable Faucet</div>
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
              <td className="py-3 px-4 text-white font-extrabold">CUCKOO TITAN</td>
            </tr>
            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">Filtration Type</td>
              <td className="py-3 px-4 text-slate-300 font-semibold">5-Stage Filtration System</td>
            </tr>
            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200 align-top">Filter & Replacement Period</td>
              <td className="py-3 px-4 text-slate-300 space-y-1">
                <div>• <strong className="text-slate-200">Carbon Composite Filter:</strong> Every 4 Months</div>
                <div>• <strong className="text-slate-200">Nano Positive Filter:</strong> Every 8 Months</div>
              </td>
            </tr>
            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">Power Consumption</td>
              <td className="py-3 px-4 text-slate-300">
                Hot: <strong className="text-rose-300 font-extrabold">2400 W</strong> | Cold: <strong className="text-cyan-300 font-extrabold">100 W</strong>
              </td>
            </tr>
            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200 align-top">Capacity & Family Size</td>
              <td className="py-3 px-4 text-slate-300 space-y-1">
                <div className="font-extrabold text-cyan-300 text-xs">Direct Water Flow (Tankless)</div>
                <p className="text-[11px] text-slate-400">Suitable for 2–4 family members</p>
              </td>
            </tr>
            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">Dimension & Gross Weight</td>
              <td className="py-3 px-4 text-slate-300">
                166mm (W) x 514mm (D) x 399mm (H) | <strong className="text-white">11 kg</strong>
              </td>
            </tr>
            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200 align-top">Key Features & USPs</td>
              <td className="py-3 px-4 text-slate-300 space-y-1">
                <div>01. <strong className="text-slate-100">Instant Extra Hot Function:</strong> 100°C instant boiling water on demand</div>
                <div>02. <strong className="text-slate-100">5-Stage Filtration System:</strong> Removes heavy metals, viruses & bacteria</div>
                <div>03. <strong className="text-slate-100">Multiple Hot Water Settings:</strong> Precise temperature controls</div>
                <div>04. <strong className="text-slate-100">Sterilisation Water:</strong> Dedicated hygienic water dispensing for food & bottle cleaning</div>
                <div>05. <strong className="text-slate-100">In & Out Auto-Sterilisation:</strong> Automatic internal flowway & faucet sanitization</div>
                <div>06. <strong className="text-slate-100">Adjustable Faucet:</strong> Height-adjustable spout to fit tall mugs & bottles</div>
                <div>07. <strong className="text-slate-100">Hidden Stop Touch:</strong> Instant safety stop touch button</div>
                <div>08. <strong className="text-slate-100">Voice Navigation:</strong> Interactive voice guidance in Malay & English</div>
                <div>09. <strong className="text-slate-100">Mood Lighting:</strong> Ambient LED lighting for night convenience</div>
                <div>10. <strong className="text-slate-100">Energy Saving Mode:</strong> Eco-smart power conservation</div>
              </td>
            </tr>
            <tr className="hover:bg-slate-900/40 bg-rose-950/20">
              <td className="py-3 px-4 font-bold text-rose-300 align-top">Rental Plan Options</td>
              <td className="py-3 px-4 text-slate-300 space-y-2">
                <div className="p-2.5 rounded-xl bg-slate-900/80 border border-rose-800/50">
                  <span className="px-2 py-0.5 rounded bg-rose-600 text-white font-bold text-[10px] inline-block mb-1">Option A</span>
                  <p className="text-white font-extrabold text-xs">RM 119.00 / month <span className="font-normal text-slate-400">(1st – 5th Year)</span></p>
                  <p className="text-[11px] text-rose-300 mt-0.5">✓ Includes FREE 5-year scheduled service & warranty</p>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-900/80 border border-emerald-800/50">
                  <span className="px-2 py-0.5 rounded bg-emerald-600 text-white font-bold text-[10px] inline-block mb-1">Option B (Lowest Monthly)</span>
                  <p className="text-white font-extrabold text-xs">RM 109.00 / month <span className="font-normal text-slate-400">(1st – 7th Year)</span></p>
                  <p className="text-[11px] text-emerald-300 mt-0.5">✓ Includes FREE 7-year scheduled service & warranty</p>
                </div>
              </td>
            </tr>
            <tr className="hover:bg-slate-900/40 bg-amber-950/20">
              <td className="py-3 px-4 font-bold text-amber-300 align-top">Purchase (Outright)</td>
              <td className="py-3 px-4 text-slate-300 space-y-1">
                <p className="text-amber-200 font-extrabold text-sm">RM 4,550.00</p>
                <p className="text-xs text-amber-300 font-semibold">
                  ✓ Includes FREE 1-year scheduled service & warranty
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Bottom CTA Banner */}
      <div className="p-4 rounded-2xl bg-gradient-to-r from-rose-900/60 to-slate-800/80 border border-rose-700/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="text-xs">
          <p className="font-extrabold text-white">Interested in CUCKOO TITAN 100°C Tankless Water Purifier?</p>
          <p className="text-slate-300 mt-0.5">Get it for RM109/mth or RM119/mth with free installation & servicing by authorized agent <strong className="text-amber-400">{CUCKOO_CONTACT.agentName}</strong>.</p>
        </div>
        <button
          onClick={() => handleWhatsApp('TITAN Deal')}
          className="py-2.5 px-5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black text-xs transition-all whitespace-nowrap self-start sm:self-auto cursor-pointer"
        >
          Inquire TITAN via WhatsApp
        </button>
      </div>
    </div>
  );
};
