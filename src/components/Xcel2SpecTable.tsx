import React, { useState } from 'react';
import { Sparkles, MessageCircle, ShieldCheck, Droplets, Zap, Lock, Sliders, Layers, Play } from 'lucide-react';
import { CUCKOO_CONTACT } from '../data/cuckooData';

interface Xcel2SpecTableProps {
  onInquire?: (model: string) => void;
}

export const Xcel2SpecTable: React.FC<Xcel2SpecTableProps> = ({ onInquire }) => {
  const [selectedImage, setSelectedImage] = useState('/images/xcel2-main.png');

  const xcelGallery = [
    '/images/xcel2-main.png',
    '/images/xcel2-gallery-1.png',
    '/images/xcel2-gallery-2.png',
    '/images/xcel2-gallery-3.png',
    '/images/xcel2-gallery-4.png',
  ];

  const handleWhatsApp = (planType?: string) => {
    if (onInquire) {
      onInquire('CUCKOO XCEL 2');
      return;
    }
    const text = encodeURIComponent(
      `Hi ${CUCKOO_CONTACT.agentName},\nI am interested in the CUCKOO XCEL 2 Water Purifier${planType ? ` (${planType})` : ''}.\nPlease guide me on the registration process & latest promotions. Thank you!`
    );
    window.open(`https://wa.me/${CUCKOO_CONTACT.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="w-full bg-slate-900 text-slate-100 rounded-3xl p-4 sm:p-6 shadow-2xl border border-slate-800 overflow-hidden my-6">
      {/* Title Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-700/50 text-indigo-300 text-xs font-bold mb-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Official Product Specification Chart
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white tracking-wide flex items-center gap-2">
            <span>CUCKOO XCEL 2</span>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 font-semibold">Upgraded Edition</span>
          </h3>
          <p className="text-xs sm:text-sm text-indigo-300 font-bold mt-1">
            Modernised & Upgraded Design with Touch Panel & Button Lock
          </p>
          <p className="text-xs text-slate-400 mt-0.5">
            Compact countertop water purifier with 6-stage filtration and next-gen temperature lights.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => handleWhatsApp()}
            className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-2 transition-all shadow-md shadow-emerald-950 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Inquire XCEL 2</span>
          </button>
        </div>
      </div>

      <div className="mb-6 overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/70">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] items-center">
          <div className="bg-slate-950 p-3 sm:p-4">
            <img
              src={selectedImage}
              alt="CUCKOO XCEL 2 Water Purifier"
              className="w-full h-full max-h-[420px] object-contain rounded-2xl bg-slate-900 border border-slate-800 shadow-inner"
            />
            <div className="mt-3 grid grid-cols-4 gap-2">
              {xcelGallery.map((image, index) => (
                <button
                  key={image}
                  type="button"
                  onClick={() => setSelectedImage(image)}
                  className={`overflow-hidden rounded-xl border transition-all ${
                    selectedImage === image ? 'border-cyan-400 ring-2 ring-cyan-500/30' : 'border-slate-700 hover:border-slate-500'
                  }`}
                  aria-label={`View XCEL 2 product image ${index + 1}`}
                >
                  <img
                    src={image}
                    alt={`CUCKOO XCEL 2 product view ${index + 1}`}
                    className="h-20 w-full object-cover bg-slate-900"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="p-4 sm:p-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[0.18em] text-cyan-300">
              <Sparkles className="w-3.5 h-3.5" />
              Product Highlight
            </div>
            <h4 className="mt-3 text-lg sm:text-xl font-black text-white">Minimal, sleek, and built for daily comfort.</h4>
            <p className="mt-2 text-sm text-slate-300 leading-relaxed">
              The CUCKOO XCEL 2 brings a modern countertop design, touch-panel controls, and advanced filtration into a compact everyday companion for your home.
            </p>
            <div className="mt-4 space-y-2 text-xs text-slate-200">
              <div className="flex items-center gap-2"><Sliders className="w-4 h-4 text-indigo-400" /> Modernised and upgraded design</div>
              <div className="flex items-center gap-2"><Layers className="w-4 h-4 text-cyan-400" /> 6-stage smart filtration system</div>
              <div className="flex items-center gap-2"><Lock className="w-4 h-4 text-rose-400" /> Button lock for child safety</div>
            </div>
          </div>
        </div>
      </div>

      {/* Official YouTube Video Showcase */}
      <div className="mb-8 p-4 sm:p-5 rounded-2xl bg-slate-950/90 border border-indigo-900/50 shadow-xl">
        <div className="flex items-center justify-between gap-2 mb-3 pb-3 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-indigo-950 border border-indigo-800/60 text-indigo-400">
              <Play className="w-4 h-4 fill-indigo-400" />
            </div>
            <div>
              <h4 className="text-sm font-black text-white uppercase tracking-wide">
                CUCKOO XCEL 2 Video Showcase
              </h4>
              <p className="text-[11px] text-slate-400">See XCEL 2 Water Purifier feature highlights</p>
            </div>
          </div>
          <a
            href="https://youtube.com/shorts/_zm-wmjkztQ"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-bold text-indigo-400 hover:text-indigo-300 bg-indigo-950/60 px-2.5 py-1 rounded-lg border border-indigo-800/50 flex items-center gap-1.5 transition-colors"
          >
            <span>Open on YouTube</span>
          </a>
        </div>

        <div className="relative w-full aspect-video sm:max-w-md sm:mx-auto rounded-xl overflow-hidden bg-black border border-slate-800 shadow-inner">
          <iframe
            src="https://www.youtube.com/embed/_zm-wmjkztQ"
            title="CUCKOO XCEL 2 Video Showcase"
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>

      {/* Feature Badges Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 mb-6">
        <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between">
          <Sliders className="w-5 h-5 text-indigo-400 mb-1" />
          <div>
            <div className="text-[11px] font-extrabold text-white">Upgraded Design</div>
            <div className="text-[10px] text-slate-400">Modern Countertop</div>
          </div>
        </div>
        <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between">
          <Layers className="w-5 h-5 text-cyan-400 mb-1" />
          <div>
            <div className="text-[11px] font-extrabold text-white">6-Stage System</div>
            <div className="text-[10px] text-slate-400">4 Natural Filters</div>
          </div>
        </div>
        <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between">
          <Droplets className="w-5 h-5 text-amber-400 mb-1" />
          <div>
            <div className="text-[11px] font-extrabold text-white">Touch Panel</div>
            <div className="text-[10px] text-slate-400">Stylish Controls</div>
          </div>
        </div>
        <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between">
          <Lock className="w-5 h-5 text-rose-400 mb-1" />
          <div>
            <div className="text-[11px] font-extrabold text-white">Button Lock</div>
            <div className="text-[10px] text-slate-400">Child Safety System</div>
          </div>
        </div>
        <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between">
          <Zap className="w-5 h-5 text-emerald-400 mb-1" />
          <div>
            <div className="text-[11px] font-extrabold text-white">Temp Indicator</div>
            <div className="text-[10px] text-slate-400">Next-Gen Lights</div>
          </div>
        </div>
        <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between">
          <ShieldCheck className="w-5 h-5 text-purple-400 mb-1" />
          <div>
            <div className="text-[11px] font-extrabold text-white">Faucet Spacing</div>
            <div className="text-[10px] text-slate-400">Easier Cup/Bottle Fill</div>
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
              <td className="py-3 px-4 text-white font-extrabold">CUCKOO XCEL 2</td>
            </tr>
            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">Weight (kg)</td>
              <td className="py-3 px-4 text-slate-300">14.1 kg</td>
            </tr>
            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">Panel Colour</td>
              <td className="py-3 px-4 text-slate-300">Jet Black | White</td>
            </tr>
            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">Filtration Type</td>
              <td className="py-3 px-4 text-slate-300">Nano Positive Filtration System (6-Stage with 4 Filters)</td>
            </tr>
            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200 align-top">Filter Replacement Period</td>
              <td className="py-3 px-4 text-slate-300 space-y-1">
                <div>• <strong className="text-slate-200">Sediment Filter:</strong> Every 4 Months</div>
                <div>• <strong className="text-slate-200">Pre-Carbon Filter:</strong> Every 8 Months</div>
                <div>• <strong className="text-slate-200">Natural Filter:</strong> Every 12 Months</div>
                <div>• <strong className="text-slate-200">Nano Positive Filter:</strong> Every 12 Months</div>
              </td>
            </tr>
            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200 align-top">Tank Capacity</td>
              <td className="py-3 px-4 text-slate-300 space-y-1">
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-slate-900 p-2 rounded-xl border border-slate-800 text-center">
                    <span className="block text-[10px] text-slate-400 font-medium">Cold</span>
                    <span className="font-extrabold text-cyan-300 text-xs">1.0ℓ</span>
                  </div>
                  <div className="bg-slate-900 p-2 rounded-xl border border-slate-800 text-center">
                    <span className="block text-[10px] text-slate-400 font-medium">Purified (Room)</span>
                    <span className="font-extrabold text-emerald-300 text-xs">0.3ℓ</span>
                  </div>
                  <div className="bg-slate-900 p-2 rounded-xl border border-slate-800 text-center">
                    <span className="block text-[10px] text-slate-400 font-medium">Hot</span>
                    <span className="font-extrabold text-amber-300 text-xs">1.0ℓ</span>
                  </div>
                </div>
              </td>
            </tr>
            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">Power Consumption (W)</td>
              <td className="py-3 px-4 text-slate-300 font-bold">400W</td>
            </tr>
            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200 align-top">Key Upgraded Features</td>
              <td className="py-3 px-4 text-slate-300 space-y-1">
                <div>1. Modernised and Upgraded Design</div>
                <div>2. 6-Stage Filtration System with 4 Filters</div>
                <div>3. Stylish New Touch Panel</div>
                <div>4. Upgraded Safety with Button Lock</div>
                <div>5. Next-Gen Temperature Indicator Lights</div>
                <div>6. Upgraded Faucet-Tray Spacing for Ease of Use</div>
              </td>
            </tr>
            <tr className="hover:bg-slate-900/40 bg-indigo-950/20">
              <td className="py-3 px-4 font-bold text-indigo-300 align-top">Rental Plans</td>
              <td className="py-3 px-4 text-slate-300 space-y-2">
                <div className="p-2.5 rounded-xl bg-slate-900/80 border border-indigo-800/50">
                  <span className="px-2 py-0.5 rounded bg-indigo-600 text-white font-bold text-[10px] inline-block mb-1">Option A</span>
                  <p className="text-white font-extrabold text-xs">RM100 / month <span className="font-normal text-slate-400">(1st - 5th Year)</span></p>
                  <p className="text-[11px] text-indigo-300 mt-0.5">✓ Includes FREE 5-year scheduled service & warranty</p>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-900/80 border border-emerald-800/50">
                  <span className="px-2 py-0.5 rounded bg-emerald-600 text-white font-bold text-[10px] inline-block mb-1">Option B (Lowest Monthly)</span>
                  <p className="text-white font-extrabold text-xs">RM83 / month <span className="font-normal text-slate-400">(1st - 7th Year)</span></p>
                  <p className="text-[11px] text-emerald-300 mt-0.5">✓ Includes FREE 7-year scheduled service & warranty</p>
                </div>
              </td>
            </tr>
            <tr className="hover:bg-slate-900/40 bg-amber-950/20">
              <td className="py-3 px-4 font-bold text-amber-300">Purchase (Outright)</td>
              <td className="py-3 px-4 text-amber-200 font-extrabold text-sm">
                RM 4,200
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Bottom CTA Banner */}
      <div className="p-4 rounded-2xl bg-gradient-to-r from-indigo-900/60 to-slate-800/80 border border-indigo-700/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="text-xs">
          <p className="font-extrabold text-white">Ready to get CUCKOO XCEL 2?</p>
          <p className="text-slate-300 mt-0.5">Enjoy RM83/mth or RM100/mth options with free nationwide installation by CUCKOO experts.</p>
        </div>
        <button
          onClick={() => handleWhatsApp()}
          className="py-2.5 px-5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black text-xs transition-all whitespace-nowrap self-start sm:self-auto cursor-pointer"
        >
          Inquire XCEL 2 via WhatsApp
        </button>
      </div>
    </div>
  );
};
