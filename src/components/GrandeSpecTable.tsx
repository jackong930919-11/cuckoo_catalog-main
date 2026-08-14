import React, { useState } from 'react';
import { Sparkles, MessageCircle, ShieldCheck, Droplets, Flame, Gauge, Volume2, Lightbulb, Zap, Bookmark, HeartHandshake, Play } from 'lucide-react';
import { CUCKOO_CONTACT } from '../data/cuckooData';

interface GrandeSpecTableProps {
  onInquire?: (model: string) => void;
}

export const GrandeSpecTable: React.FC<GrandeSpecTableProps> = ({ onInquire }) => {
  const [videoLang, setVideoLang] = useState<'en' | 'zh' | 'ms'>('en');

  const grandeVideos = {
    en: { id: 'FC54IqHM1YA', label: 'English', url: 'https://youtu.be/FC54IqHM1YA' },
    zh: { id: 'Spct_hF0XF8', label: '中文 (Chinese)', url: 'https://youtu.be/Spct_hF0XF8' },
    ms: { id: 'tIHOoi0TryU', label: 'Bahasa Melayu', url: 'https://youtu.be/tIHOoi0TryU' },
  };

  const handleWhatsApp = (planDetails?: string) => {
    if (onInquire) {
      onInquire('CUCKOO GRANDE Water Purifier');
      return;
    }
    const text = encodeURIComponent(
      `Hi ${CUCKOO_CONTACT.agentName},\nI am interested in CUCKOO GRANDE Water Purifier (100°C Extra Hot & 7.6L Tank)${planDetails ? ` (${planDetails})` : ''}.\nPlease share details on the RM110/mth or RM121/mth rental plans and current promotions. Thank you!`
    );
    window.open(`https://wa.me/${CUCKOO_CONTACT.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="w-full bg-slate-900 text-slate-100 rounded-3xl p-4 sm:p-6 shadow-2xl border border-slate-800 overflow-hidden my-6">
      {/* Title Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/80 border border-sky-700/50 text-sky-300 text-xs font-bold mb-2">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            Official Product Specification Chart
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white tracking-wide flex items-center gap-2">
            <span>CUCKOO GRANDE</span>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-sky-500/20 text-sky-300 border border-sky-500/40 font-semibold">100°C Extra Hot & 7.6L Tank</span>
          </h3>
          <p className="text-xs sm:text-sm text-sky-300 font-bold mt-1">
            Ultra Versatile • Highly Convenient • Super Innovative
          </p>
          <p className="text-xs text-slate-400 mt-0.5">
            Your hydration solution, now epic-sized. Capacity-packed from 5°C cold to 100°C extra hot with faucet sterilisation & tri-lingual voice guide.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => handleWhatsApp('GRANDE Deal')}
            className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-2 transition-all shadow-md shadow-emerald-950 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Inquire GRANDE</span>
          </button>
        </div>
      </div>

      {/* Official YouTube Video Showcase with Multi-language tabs */}
      <div className="mb-8 p-4 sm:p-5 rounded-2xl bg-slate-950/90 border border-sky-900/50 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3 pb-3 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-sky-950 border border-sky-800/60 text-sky-400">
              <Play className="w-4 h-4 fill-sky-400" />
            </div>
            <div>
              <h4 className="text-sm font-black text-white uppercase tracking-wide">
                CUCKOO GRANDE Video Showcase
              </h4>
              <p className="text-[11px] text-slate-400">Watch GRANDE Water Purifier introduction in your language</p>
            </div>
          </div>

          {/* Language selector buttons */}
          <div className="flex items-center gap-1.5 bg-slate-900 p-1 rounded-xl border border-slate-800">
            {(['en', 'zh', 'ms'] as const).map((key) => (
              <button
                key={key}
                onClick={() => setVideoLang(key)}
                className={`px-3 py-1 rounded-lg text-xs font-extrabold transition-all cursor-pointer ${
                  videoLang === key
                    ? 'bg-sky-500 text-slate-950 shadow-md shadow-sky-950'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {grandeVideos[key].label}
              </button>
            ))}
          </div>
        </div>

        <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black border border-slate-800 shadow-inner">
          <iframe
            key={videoLang}
            src={`https://www.youtube.com/embed/${grandeVideos[videoLang].id}`}
            title={`CUCKOO GRANDE Video Showcase (${grandeVideos[videoLang].label})`}
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>

      {/* Highlights / USPs Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 mb-6">
        <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between">
          <Flame className="w-5 h-5 text-amber-400 mb-1" />
          <div>
            <div className="text-[11px] font-extrabold text-white">5°C to 100°C Hot</div>
            <div className="text-[10px] text-slate-400">Extra Hot Instant</div>
          </div>
        </div>
        <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between">
          <ShieldCheck className="w-5 h-5 text-emerald-400 mb-1" />
          <div>
            <div className="text-[11px] font-extrabold text-white">Faucet Sterilise</div>
            <div className="text-[10px] text-slate-400">Hot Water Cleaning</div>
          </div>
        </div>
        <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between">
          <Volume2 className="w-5 h-5 text-sky-400 mb-1" />
          <div>
            <div className="text-[11px] font-extrabold text-white">Tri-Lingual Voice</div>
            <div className="text-[10px] text-slate-400">ENG / BM / CHN</div>
          </div>
        </div>
        <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between">
          <Gauge className="w-5 h-5 text-indigo-400 mb-1" />
          <div>
            <div className="text-[11px] font-extrabold text-white">7.6L Large Tank</div>
            <div className="text-[10px] text-slate-400">4-8 Family Members</div>
          </div>
        </div>
        <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between">
          <Bookmark className="w-5 h-5 text-purple-400 mb-1" />
          <div>
            <div className="text-[11px] font-extrabold text-white">Memory Function</div>
            <div className="text-[10px] text-slate-400">Custom Presets</div>
          </div>
        </div>
        <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between">
          <Lightbulb className="w-5 h-5 text-yellow-400 mb-1" />
          <div>
            <div className="text-[11px] font-extrabold text-white">Mood Lamp & Sensor</div>
            <div className="text-[10px] text-slate-400">Energy Eye & Volume</div>
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
              <td className="py-3 px-4 text-white font-extrabold">CUCKOO GRANDE</td>
            </tr>
            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">Filtration Type</td>
              <td className="py-3 px-4 text-slate-300 font-semibold">6-Stage Filtration System</td>
            </tr>
            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200 align-top">Filter & Replacement Period</td>
              <td className="py-3 px-4 text-slate-300 space-y-1">
                <div>• <strong className="text-slate-200">Sediment Filter:</strong> Every 4 Months</div>
                <div>• <strong className="text-slate-200">Carbon Composite Filter:</strong> Every 4 Months</div>
                <div>• <strong className="text-slate-200">Nano Positive Filter:</strong> Every 8 Months</div>
              </td>
            </tr>
            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">Power Consumption</td>
              <td className="py-3 px-4 text-slate-300">
                Cold: <strong className="text-white">0.6A</strong> | Hot: <strong className="text-white">450W</strong> | Extra Hot: <strong className="text-amber-300">2400W</strong>
              </td>
            </tr>
            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200 align-top">Tank Capacity (Total 7.6L)</td>
              <td className="py-3 px-4 text-slate-300 space-y-1">
                <div className="text-xs text-sky-300 font-bold mb-1">Suitable for 4–8 family members</div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-slate-900 p-2 rounded-xl border border-slate-800 text-center">
                    <span className="block text-[10px] text-slate-400 font-medium">Cold</span>
                    <span className="font-extrabold text-cyan-300 text-xs">2.5L</span>
                  </div>
                  <div className="bg-slate-900 p-2 rounded-xl border border-slate-800 text-center">
                    <span className="block text-[10px] text-slate-400 font-medium">Room</span>
                    <span className="font-extrabold text-emerald-300 text-xs">2.7L</span>
                  </div>
                  <div className="bg-slate-900 p-2 rounded-xl border border-slate-800 text-center">
                    <span className="block text-[10px] text-slate-400 font-medium">Hot & Extra Hot</span>
                    <span className="font-extrabold text-amber-300 text-xs">2.4L</span>
                  </div>
                </div>
              </td>
            </tr>
            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">Dimension & Gross Weight</td>
              <td className="py-3 px-4 text-slate-300">
                260mm (W) x 527mm (D) x 506mm (H) | <strong className="text-white">18.5 kg</strong>
              </td>
            </tr>
            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200 align-top">Key Selling Features (USP)</td>
              <td className="py-3 px-4 text-slate-300 space-y-1">
                <div>1. <strong className="text-slate-100">Fast and Fuss-Free (5°C to 100°C):</strong> Instant chilling & 100°C extra hot boiling water</div>
                <div>2. <strong className="text-slate-100">Hot Water Faucet Sterilisation:</strong> Automatic high-temperature faucet hygiene</div>
                <div>3. <strong className="text-slate-100">6-Stage Mild Alkaline Filtration:</strong> Pure, mineralised, virus & bacteria-free water</div>
                <div>4. <strong className="text-slate-100">Tri-Lingual Voice Navigation:</strong> Interactive voice guidance in English, Malay & Mandarin</div>
                <div>5. <strong className="text-slate-100">Large 7.6L Tank Capacity:</strong> Perfectly sized for 4 to 8 family members</div>
                <div>6. <strong className="text-slate-100">Memory Function & Energy Eye Sensor:</strong> Eco-smart power management</div>
                <div>7. <strong className="text-slate-100">Mood Lamp & Voice Volume Control:</strong> Modern aesthetic lighting for nighttime use</div>
              </td>
            </tr>
            <tr className="hover:bg-slate-900/40 bg-sky-950/20">
              <td className="py-3 px-4 font-bold text-sky-300 align-top">Rental Plan Options</td>
              <td className="py-3 px-4 text-slate-300 space-y-2">
                <div className="p-2.5 rounded-xl bg-slate-900/80 border border-sky-800/50">
                  <span className="px-2 py-0.5 rounded bg-sky-600 text-white font-bold text-[10px] inline-block mb-1">Option A</span>
                  <p className="text-white font-extrabold text-xs">RM 121.00 / month <span className="font-normal text-slate-400">(1st – 5th year)</span></p>
                  <p className="text-[11px] text-sky-300 mt-0.5">✓ Includes FREE 5-year scheduled service & warranty</p>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-900/80 border border-emerald-800/50">
                  <span className="px-2 py-0.5 rounded bg-emerald-600 text-white font-bold text-[10px] inline-block mb-1">Option B (Lowest Monthly)</span>
                  <p className="text-white font-extrabold text-xs">RM 110.00 / month <span className="font-normal text-slate-400">(1st – 7th year)</span></p>
                  <p className="text-[11px] text-emerald-300 mt-0.5">✓ Includes FREE 7-year scheduled service & warranty</p>
                </div>
              </td>
            </tr>
            <tr className="hover:bg-slate-900/40 bg-amber-950/20">
              <td className="py-3 px-4 font-bold text-amber-300 align-top">Purchase (Outright)</td>
              <td className="py-3 px-4 text-slate-300 space-y-1">
                <p className="text-amber-200 font-extrabold text-sm">RM 4,750.00</p>
                <p className="text-xs text-amber-300 font-semibold">
                  ✓ Includes FREE 1-year scheduled service & warranty
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Bottom CTA Banner */}
      <div className="p-4 rounded-2xl bg-gradient-to-r from-sky-900/60 to-slate-800/80 border border-sky-700/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="text-xs">
          <p className="font-extrabold text-white">Interested in CUCKOO GRANDE (100°C Extra Hot & 7.6L Capacity)?</p>
          <p className="text-slate-300 mt-0.5">Choose RM110/mth or RM121/mth rental plans with free nationwide delivery & service by <strong className="text-amber-400">{CUCKOO_CONTACT.agentName}</strong>.</p>
        </div>
        <button
          onClick={() => handleWhatsApp('GRANDE Deal')}
          className="py-2.5 px-5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black text-xs transition-all whitespace-nowrap self-start sm:self-auto cursor-pointer"
        >
          Inquire GRANDE via WhatsApp
        </button>
      </div>
    </div>
  );
};
