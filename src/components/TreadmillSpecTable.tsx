import React from 'react';
import { Sparkles, MessageCircle, Activity, Gauge, ShieldCheck, Zap, Layers, Maximize2, Smartphone, AlertTriangle, CheckCircle2, HeartPulse } from 'lucide-react';
import { CUCKOO_CONTACT } from '../data/cuckooData';

interface TreadmillSpecTableProps {
  onInquire?: (model: string) => void;
}

export const TreadmillSpecTable: React.FC<TreadmillSpecTableProps> = ({ onInquire }) => {
  const handleWhatsApp = () => {
    if (onInquire) {
      onInquire('B-FIT Treadmill');
      return;
    }
    const text = encodeURIComponent(
      `Hi ${CUCKOO_CONTACT.agentName},\nI am interested in the B-FIT Treadmill.\nRental Plan: RM102/mth | Outright: RM3,099.\nPlease share current promotion details and registration steps. Thank you!`
    );
    window.open(`https://wa.me/${CUCKOO_CONTACT.whatsappNumber}?text=${text}`, '_blank');
  };

  const usps = [
    { title: '2-in-1 Foldable Design', desc: 'Shift from walking to running in seconds' },
    { title: 'Walk-to-Run Dynamic Treck', desc: 'Smooth transition across 1-14 km/h' },
    { title: '15 Personalised Programs', desc: 'Pre-set workouts tailored for all levels' },
    { title: '3 Custom User Profiles', desc: 'Save unique training profiles (U1 - U3)' },
    { title: '8-Point Shock Absorption', desc: 'Joint-friendly cushioning for quiet home use' },
    { title: 'Space-Saving Easy Setup', desc: 'Foldable ultra-slim 200mm height' },
    { title: 'Device Holder', desc: 'Convenient tablet/phone slot for entertainment' },
    { title: 'Safety Pin Lock', desc: 'Instant emergency magnet safety clip' },
    { title: 'LED Display Panel', desc: 'Speed, Steps, Time, Distance, Calories' },
    { title: 'Robust Support up to 100kg', desc: 'Heavy-duty high-durability frame' },
  ];

  return (
    <div className="w-full bg-slate-900 text-slate-100 rounded-3xl p-4 sm:p-6 shadow-2xl border border-slate-800 overflow-hidden my-6">
      {/* Title Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-950/80 border border-rose-700/50 text-rose-300 text-xs font-bold mb-2">
            <Activity className="w-3.5 h-3.5 text-rose-400" />
            B-FIT Home Fitness • Official Specification Chart
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white tracking-wide">
            B-FIT TREADMILL SPECIFICATIONS
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Your 24/7 Fitness Partner — Anytime, Anywhere in Malaysia
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleWhatsApp}
            className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-2 transition-all shadow-md shadow-emerald-950 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Inquire Treadmill Promo</span>
          </button>
        </div>
      </div>

      {/* Malaysian Health Awareness Highlight Banner */}
      <div className="mb-6 p-4.5 rounded-2xl bg-gradient-to-r from-amber-950/70 via-slate-900 to-rose-950/60 border border-amber-500/30 shadow-lg">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30 shrink-0">
            <HeartPulse className="w-5 h-5 text-amber-400 animate-pulse" />
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-extrabold text-amber-400 uppercase tracking-wider">Health Insight Malaysia</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-950 border border-amber-800/80 text-amber-300 font-bold">*The Star Survey</span>
            </div>
            <h4 className="text-sm sm:text-base font-black text-white leading-tight">
              Did you know that <span className="text-amber-300 underline underline-offset-4">50% of Malaysians</span> spend too much time sitting?
            </h4>
            <p className="text-xs text-amber-100/90 font-medium pt-1">
              Malaysians are among the top countries in ASEAN for the longest hours seated. Stay active effortlessly at home with B-FIT 2-in-1 Treadmill!
            </p>
          </div>
        </div>
      </div>

      {/* Dimension Diagram Graphic Showcase */}
      <div className="mb-6 p-4 sm:p-5 rounded-2xl bg-slate-950/80 border border-slate-800">
        <h4 className="text-xs font-extrabold uppercase text-slate-400 tracking-wider mb-4 flex items-center gap-2">
          <Maximize2 className="w-4 h-4 text-cyan-400" />
          Dimension & Dual-Mode Configuration
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Unfolded Mode */}
          <div className="p-4 rounded-xl bg-slate-900/90 border border-cyan-800/40 relative overflow-hidden">
            <div className="flex items-center justify-between mb-2">
              <span className="px-2.5 py-1 rounded-lg bg-cyan-950 text-cyan-300 border border-cyan-800/60 text-[10px] font-black uppercase">
                Unfolded Running Mode
              </span>
              <span className="text-xs font-bold text-slate-300">1 - 14 km/h</span>
            </div>
            <div className="space-y-1 text-xs text-slate-300 font-mono">
              <p><strong className="text-slate-400">Height (H):</strong> 1087 mm</p>
              <p><strong className="text-slate-400">Width (W):</strong> 758 mm</p>
              <p><strong className="text-slate-400">Length (L):</strong> 1255 mm</p>
            </div>
            <div className="mt-3 pt-2 border-t border-slate-800/80 text-[11px] text-slate-400">
              Full-featured running treadmill with raised safety handrails & device console.
            </div>
          </div>

          {/* Folded Mode */}
          <div className="p-4 rounded-xl bg-slate-900/90 border border-emerald-800/40 relative overflow-hidden">
            <div className="flex items-center justify-between mb-2">
              <span className="px-2.5 py-1 rounded-lg bg-emerald-950 text-emerald-300 border border-emerald-800/60 text-[10px] font-black uppercase">
                Folded Walking Mode (Slim)
              </span>
              <span className="text-xs font-bold text-slate-300">1 - 6 km/h</span>
            </div>
            <div className="space-y-1 text-xs text-slate-300 font-mono">
              <p><strong className="text-slate-400">Height (H):</strong> 200 mm <span className="text-[10px] text-emerald-400 font-sans">(Ultra-slim 20cm)</span></p>
              <p><strong className="text-slate-400">Width (W):</strong> 758 mm</p>
              <p><strong className="text-slate-400">Length (L):</strong> 1327 mm</p>
            </div>
            <div className="mt-3 pt-2 border-t border-slate-800/80 text-[11px] text-slate-400">
              Folds flat in seconds — slides easily under sofa, bed or standing desk.
            </div>
          </div>
        </div>
      </div>

      {/* Unique Selling Points (USPs) Grid */}
      <div className="mb-6">
        <h4 className="text-xs font-extrabold uppercase text-slate-400 tracking-wider mb-3 flex items-center gap-2">
          <Zap className="w-4 h-4 text-amber-400" />
          Key Features & Highlights
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
          {usps.map((usp, idx) => (
            <div key={idx} className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 hover:bg-slate-800 transition-colors">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mb-1.5" />
              <div className="text-[11px] font-extrabold text-white leading-snug">{usp.title}</div>
              <div className="text-[10px] text-slate-400 mt-0.5 leading-tight">{usp.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Official Specification Chart Table */}
      <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-950/60 mb-6">
        <table className="w-full text-left text-xs sm:text-sm border-collapse">
          <thead>
            <tr className="bg-slate-900 border-b border-slate-800 text-slate-300 uppercase text-[11px] font-extrabold tracking-wider">
              <th className="p-3.5 sm:p-4 w-1/3 sm:w-1/4 border-r border-slate-800">Specification Item</th>
              <th className="p-3.5 sm:p-4">Details</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-slate-800/80 hover:bg-slate-900/40">
              <td className="p-3 sm:p-4 font-bold text-slate-400 bg-slate-900/80 border-r border-slate-800/80">
                Display
              </td>
              <td className="p-3 sm:p-4 font-extrabold text-white">
                LED
              </td>
            </tr>

            <tr className="border-b border-slate-800/80 hover:bg-slate-900/40">
              <td className="p-3 sm:p-4 font-bold text-slate-400 bg-slate-900/80 border-r border-slate-800/80">
                Input Voltage
              </td>
              <td className="p-3 sm:p-4 font-medium text-slate-200">
                220V / 60Hz
              </td>
            </tr>

            <tr className="border-b border-slate-800/80 hover:bg-slate-900/40">
              <td className="p-3 sm:p-4 font-bold text-slate-400 bg-slate-900/80 border-r border-slate-800/80">
                Display Readout
              </td>
              <td className="p-3 sm:p-4 font-semibold text-cyan-300">
                Speed, Step Number, Time, Distance, Calories
              </td>
            </tr>

            <tr className="border-b border-slate-800/80 hover:bg-slate-900/40">
              <td className="p-3 sm:p-4 font-bold text-slate-400 bg-slate-900/80 border-r border-slate-800/80">
                Built-In Program
              </td>
              <td className="p-3 sm:p-4 font-medium text-slate-200">
                15 Built-In Programs
              </td>
            </tr>

            <tr className="border-b border-slate-800/80 hover:bg-slate-900/40">
              <td className="p-3 sm:p-4 font-bold text-slate-400 bg-slate-900/80 border-r border-slate-800/80">
                Custom Program
              </td>
              <td className="p-3 sm:p-4 font-medium text-slate-200">
                3 Programs (U1 - U3)
              </td>
            </tr>

            <tr className="border-b border-slate-800/80 hover:bg-slate-900/40">
              <td className="p-3 sm:p-4 font-bold text-slate-400 bg-slate-900/80 border-r border-slate-800/80">
                Running Speed Range
              </td>
              <td className="p-3 sm:p-4 font-extrabold text-emerald-400">
                1 - 14 km / Hour
              </td>
            </tr>

            <tr className="border-b border-slate-800/80 hover:bg-slate-900/40">
              <td className="p-3 sm:p-4 font-bold text-slate-400 bg-slate-900/80 border-r border-slate-800/80">
                Walking Speed Range
              </td>
              <td className="p-3 sm:p-4 font-extrabold text-cyan-400">
                1 - 6 km / Hour
              </td>
            </tr>

            <tr className="border-b border-slate-800/80 hover:bg-slate-900/40">
              <td className="p-3 sm:p-4 font-bold text-slate-400 bg-slate-900/80 border-r border-slate-800/80">
                Max Weight Supported
              </td>
              <td className="p-3 sm:p-4 font-extrabold text-amber-400">
                100 kg ONLY
              </td>
            </tr>

            <tr className="border-b border-slate-800/80 hover:bg-slate-900/40">
              <td className="p-3 sm:p-4 font-bold text-slate-400 bg-slate-900/80 border-r border-slate-800/80">
                Motor
              </td>
              <td className="p-3 sm:p-4 font-medium text-slate-200">
                DC Motor Peak Power 2.0 HP
              </td>
            </tr>

            <tr className="border-b border-slate-800/80 hover:bg-slate-900/40">
              <td className="p-3 sm:p-4 font-bold text-slate-400 bg-slate-900/80 border-r border-slate-800/80">
                Running Belt (L x W)
              </td>
              <td className="p-3 sm:p-4 font-medium text-slate-200">
                1050 × 420 mm
              </td>
            </tr>

            <tr className="border-b border-slate-800/80 hover:bg-slate-900/40">
              <td className="p-3 sm:p-4 font-bold text-slate-400 bg-slate-900/80 border-r border-slate-800/80">
                Folded Size (L x W x H)
              </td>
              <td className="p-3 sm:p-4 font-mono text-emerald-300">
                1327 × 758 × 200 mm
              </td>
            </tr>

            <tr className="border-b border-slate-800/80 hover:bg-slate-900/40">
              <td className="p-3 sm:p-4 font-bold text-slate-400 bg-slate-900/80 border-r border-slate-800/80">
                Unfolded Size (L x W x H)
              </td>
              <td className="p-3 sm:p-4 font-mono text-cyan-300">
                1255 × 758 × 1087 mm
              </td>
            </tr>

            <tr className="border-b border-slate-800/80 hover:bg-slate-900/40">
              <td className="p-3 sm:p-4 font-bold text-slate-400 bg-slate-900/80 border-r border-slate-800/80">
                Package Size (L x W x H)
              </td>
              <td className="p-3 sm:p-4 font-mono text-slate-300">
                1430 × 750 × 165 mm
              </td>
            </tr>

            <tr className="border-b border-slate-800/80 hover:bg-slate-900/40">
              <td className="p-3 sm:p-4 font-bold text-slate-400 bg-slate-900/80 border-r border-slate-800/80">
                Gross Weight / Net Weight
              </td>
              <td className="p-3 sm:p-4 font-medium text-slate-200">
                39.2 kg / 32.5 kg
              </td>
            </tr>

            {/* Price Rows */}
            <tr className="border-b border-slate-800/80 hover:bg-slate-900/40 bg-indigo-950/30">
              <td className="p-3 sm:p-4 font-extrabold text-indigo-300 bg-slate-900/80 border-r border-slate-800/80">
                Purchase (Outright)
              </td>
              <td className="p-3 sm:p-4">
                <span className="text-base font-black text-white">RM 3,399.00</span>
                <span className="text-xs text-emerald-400 font-bold block mt-0.5">
                  FREE 1-Year Service & Warranty
                </span>
              </td>
            </tr>

            <tr className="hover:bg-slate-900/40 bg-emerald-950/30">
              <td className="p-3 sm:p-4 font-extrabold text-emerald-300 bg-slate-900/80 border-r border-slate-800/80">
                Rent (Rental Plan)
              </td>
              <td className="p-3 sm:p-4">
                <span className="text-base font-black text-emerald-400">RM 102.00 / month</span>
                <span className="text-xs text-emerald-300 font-bold block mt-0.5">
                  FREE 3-Year Service & Warranty
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
