import React, { useState } from 'react';
import { Sparkles, MessageCircle, Flame, Snowflake, ShieldCheck, Droplets, Zap, Clock } from 'lucide-react';
import { CUCKOO_CONTACT } from '../data/cuckooData';

interface GraniteSpecTableProps {
  onInquire?: (model: string) => void;
}

export const GraniteSpecTable: React.FC<GraniteSpecTableProps> = ({ onInquire }) => {
  const [selectedImage, setSelectedImage] = useState('/images/granite-main.png');

  const graniteGallery = [
    '/images/granite-main.png',
    '/images/granite-gallery-1.png',
    '/images/granite-gallery-2.png',
    '/images/granite-gallery-3.png',
    '/images/granite-gallery-4.png',
  ];

  const handleWhatsApp = () => {
    if (onInquire) {
      onInquire('CUCKOO GRANITE Ice-Making Water Purifier');
      return;
    }
    const text = encodeURIComponent(
      `Hi ${CUCKOO_CONTACT.agentName},\nI am interested in CUCKOO GRANITE Ice-Making Water Purifier.\nI would like to inquire about the RM155/mth rental plan or RM7,200 outright deal. Please share details. Thank you!`
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
            <span>CUCKOO GRANITE</span>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold">Ice-Making</span>
          </h3>
          <p className="text-xs sm:text-sm text-amber-400 font-bold mt-1">
            BREAK THE ICE, BRING THE HEAT.
          </p>
          <p className="text-xs text-slate-400 mt-0.5">
            0°C to 100°C all yours to command. Chill out. Turn up the heat. Indulge every sip.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleWhatsApp}
            className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-2 transition-all shadow-md shadow-emerald-950 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Inquire Granite Promo</span>
          </button>
        </div>
      </div>

      <div className="mb-6 overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/70">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] items-center">
          <div className="bg-slate-950 p-3 sm:p-4">
            <img
              src={selectedImage}
              alt="CUCKOO GRANITE Ice-Making Water Purifier"
              className="w-full h-full max-h-[420px] object-contain rounded-2xl bg-slate-900 border border-slate-800 shadow-inner"
            />
            <div className="mt-3 grid grid-cols-4 gap-2">
              {graniteGallery.map((image, index) => (
                <button
                  key={image}
                  type="button"
                  onClick={() => setSelectedImage(image)}
                  className={`overflow-hidden rounded-xl border transition-all ${
                    selectedImage === image ? 'border-cyan-400 ring-2 ring-cyan-500/30' : 'border-slate-700 hover:border-slate-500'
                  }`}
                  aria-label={`View Granite product image ${index + 1}`}
                >
                  <img
                    src={image}
                    alt={`CUCKOO GRANITE product view ${index + 1}`}
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
            <h4 className="mt-3 text-lg sm:text-xl font-black text-white">Fresh ice, hot water, and instant comfort in one smart unit.</h4>
            <p className="mt-2 text-sm text-slate-300 leading-relaxed">
              Designed for modern homes, the CUCKOO GRANITE brings together rapid ice-making, powerful hot water output, and a premium styling finish in a compact footprint.
            </p>
            <div className="mt-4 space-y-2 text-xs text-slate-200">
              <div className="flex items-center gap-2"><Snowflake className="w-4 h-4 text-cyan-400" /> 18-minute rapid ice making</div>
              <div className="flex items-center gap-2"><Flame className="w-4 h-4 text-amber-400" /> 0°C to 100°C all-purpose water output</div>
              <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-emerald-400" /> Auto sterilisation and UV protection</div>
            </div>
          </div>
        </div>
      </div>

      {/* Highlights Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-6">
        <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between">
          <Snowflake className="w-5 h-5 text-cyan-400 mb-1" />
          <div>
            <div className="text-[11px] font-extrabold text-white">18-Min Rapid Ice</div>
            <div className="text-[10px] text-slate-400">700g Built-in Ice Tank</div>
          </div>
        </div>
        <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between">
          <Flame className="w-5 h-5 text-amber-400 mb-1" />
          <div>
            <div className="text-[11px] font-extrabold text-white">0°C – 100°C Range</div>
            <div className="text-[10px] text-slate-400">Instant Ice & Boiling Hot</div>
          </div>
        </div>
        <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between">
          <Droplets className="w-5 h-5 text-indigo-400 mb-1" />
          <div>
            <div className="text-[11px] font-extrabold text-white">In & Out Electrolysis</div>
            <div className="text-[10px] text-slate-400">Auto Sterilisation System</div>
          </div>
        </div>
        <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between">
          <ShieldCheck className="w-5 h-5 text-emerald-400 mb-1" />
          <div>
            <div className="text-[11px] font-extrabold text-white">UV Tank Sterilisation</div>
            <div className="text-[10px] text-slate-400">99.99% Bacteria-Free Ice</div>
          </div>
        </div>
      </div>

      {/* Specification Chart Table */}
      <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-950/60 mb-6">
        <table className="w-full text-left text-xs text-slate-300 divide-y divide-slate-800/80">
          <thead className="bg-slate-900/90 text-slate-400 uppercase text-[10px] tracking-wider font-extrabold">
            <tr>
              <th className="py-3 px-4 w-2/5">Specification Field</th>
              <th className="py-3 px-4 w-3/5">Details / Capacity</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/50 text-xs">
            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">Product Name</td>
              <td className="py-3 px-4 text-white font-extrabold">CUCKOO GRANITE Ice-Making Water Purifier</td>
            </tr>
            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">Product Colour</td>
              <td className="py-3 px-4 text-slate-300">Black</td>
            </tr>
            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">Weight (kg)</td>
              <td className="py-3 px-4 text-slate-300">22.9 kg</td>
            </tr>
            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">Product Dimension (W x D x H)</td>
              <td className="py-3 px-4 text-slate-300">260 x 527 x 506 mm</td>
            </tr>
            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">Rated Voltage</td>
              <td className="py-3 px-4 text-slate-300">Single Phase AC 220-240V / 50Hz</td>
            </tr>
            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200 align-top">Power Consumption</td>
              <td className="py-3 px-4 text-slate-300 space-y-1">
                <div><strong className="text-slate-400">Cold:</strong> 0.8A</div>
                <div><strong className="text-slate-400">Hot:</strong> 2,500W</div>
                <div><strong className="text-slate-400">Total:</strong> 2,600W</div>
              </td>
            </tr>
            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200 align-top">Tank Capacity</td>
              <td className="py-3 px-4 text-slate-300 space-y-1">
                <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                  <div><strong className="text-slate-400">Room:</strong> Direct</div>
                  <div><strong className="text-slate-400">Cold:</strong> Direct</div>
                  <div><strong className="text-slate-400">Hot:</strong> Direct</div>
                  <div><strong className="text-cyan-400">Ice:</strong> 700g</div>
                </div>
              </td>
            </tr>
            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200 align-top">Filter Set Replacement Cycle</td>
              <td className="py-3 px-4 text-slate-300 space-y-1">
                <div>• <strong className="text-slate-200">Sediment Filter:</strong> Every 4 months</div>
                <div>• <strong className="text-slate-200">Carbon Composite Filter:</strong> Every 4 months</div>
                <div>• <strong className="text-slate-200">Nano Positive Plus Filter:</strong> Every 8 months</div>
              </td>
            </tr>
            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">Filtration</td>
              <td className="py-3 px-4 text-slate-300">Nano Filtration System (6-Stage with 3 Filters)</td>
            </tr>
            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">Refrigerant Type</td>
              <td className="py-3 px-4 text-slate-300">R600 Eco Refrigerant</td>
            </tr>
            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200 align-top">Key Features</td>
              <td className="py-3 px-4 text-slate-300 space-y-1.5">
                <div className="flex items-center gap-1.5 text-amber-300 font-semibold">1. 0°C–100°C All-purpose Range</div>
                <div className="flex items-center gap-1.5 text-cyan-300 font-semibold">2. 18-minute rapid ice-making</div>
                <div>3. 6-stage filtration system with 3 filters</div>
                <div>4. In & Out Auto Electrolysis Sterilisation</div>
                <div>5. UV Tank Sterilisation</div>
                <div>6. Electrolysis Sterilisation Water</div>
              </td>
            </tr>
            <tr className="hover:bg-slate-900/40 bg-indigo-950/20">
              <td className="py-3 px-4 font-bold text-indigo-300">Rental Plan</td>
              <td className="py-3 px-4 text-indigo-200 font-extrabold">
                RM155 / month (5 Years) <span className="font-normal text-slate-400 text-[11px] block sm:inline sm:ml-2">(FREE scheduled service & filter replacements every 4 months)</span>
              </td>
            </tr>
            <tr className="hover:bg-slate-900/40 bg-amber-950/20">
              <td className="py-3 px-4 font-bold text-amber-300">Outright Purchase</td>
              <td className="py-3 px-4 text-amber-200 font-extrabold">
                RM7,200 <span className="font-normal text-slate-400 text-[11px] block sm:inline sm:ml-2">(Includes FREE 2 years of scheduled service & warranty)</span>
              </td>
            </tr>
            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">CUCKOO+ CARE (CCSP)</td>
              <td className="py-3 px-4 text-slate-300 font-semibold">RM711.90 / year</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Bottom CTA Banner */}
      <div className="p-4 rounded-2xl bg-gradient-to-r from-indigo-900/60 to-slate-800/80 border border-indigo-700/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="text-xs">
          <p className="font-extrabold text-white">Interested in CUCKOO GRANITE Ice-Making Water Purifier?</p>
          <p className="text-slate-300 mt-0.5">Contact Authorized Agent <strong className="text-amber-400">{CUCKOO_CONTACT.agentName}</strong> for instant registration & free gift claims.</p>
        </div>
        <button
          onClick={handleWhatsApp}
          className="py-2.5 px-5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black text-xs transition-all whitespace-nowrap self-start sm:self-auto cursor-pointer"
        >
          Book Now via WhatsApp
        </button>
      </div>
    </div>
  );
};
