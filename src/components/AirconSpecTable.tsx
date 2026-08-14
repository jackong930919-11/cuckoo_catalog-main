import React from 'react';
import { Sparkles, MessageCircle, FileText, Play, ShieldCheck, Zap, Sparkle, HeartPulse } from 'lucide-react';
import { CUCKOO_CONTACT } from '../data/cuckooData';

interface AirconSpecTableProps {
  onInquire?: (model: string) => void;
  selectedHp?: '1.0HP' | '1.5HP' | 'ALL';
}

export const AirconSpecTable: React.FC<AirconSpecTableProps> = ({ onInquire, selectedHp = 'ALL' }) => {
  const show10 = selectedHp === 'ALL' || selectedHp === '1.0HP';
  const show15 = selectedHp === 'ALL' || selectedHp === '1.5HP';

  const handleWhatsApp = (modelName: string) => {
    if (onInquire) {
      onInquire(modelName);
      return;
    }
    const text = encodeURIComponent(
      `Hi ${CUCKOO_CONTACT.agentName},\nI am looking at the CUCKOO Vita Star Air Conditioner Specification Chart (${selectedHp}).\nI'd like to ask more about the ${modelName} model promotion and installation options. Thank you!`
    );
    window.open(`https://wa.me/${CUCKOO_CONTACT.whatsappNumber}?text=${text}`, '_blank');
  };

  const featureVideos = [
    {
      title: 'Vitamin C Infuser',
      subtitle: 'For your skin & overall wellness',
      desc: 'Infuses vitamin C moisture into the airflow to keep your skin hydrated and glowing while cooling your home.',
      badge: 'Skin & Wellness Care',
      gradient: 'from-amber-950/80 via-slate-900 to-rose-950/80',
      borderColor: 'border-amber-500/40',
      icon: <Sparkle className="w-5 h-5 text-amber-400" />,
      videoTag: 'ATTACHMENT FEATURE 1'
    },
    {
      title: 'Total Air Protection',
      subtitle: 'Silver Ion Filter • UVC LED Sterilisation',
      desc: 'Protects against 99.9% of germs, viruses, and bacteria with advanced Silver Ion filtration and built-in UVC LED sterilisation (*SGS Certified).',
      badge: '99.9% Germ Protection',
      gradient: 'from-emerald-950/80 via-slate-900 to-cyan-950/80',
      borderColor: 'border-emerald-500/40',
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
      videoTag: 'ATTACHMENT FEATURE 2'
    },
    {
      title: 'Fast Cooling Technology',
      subtitle: 'Golden Hydrophilic Fin',
      desc: 'Ultra-fast heat dissipation with anticorrosive Golden Hydrophilic Fin that accelerates cooling while extending unit lifespan.',
      badge: 'Rapid Turbo Cooling',
      gradient: 'from-cyan-950/80 via-slate-900 to-indigo-950/80',
      borderColor: 'border-cyan-500/40',
      icon: <Zap className="w-5 h-5 text-cyan-400" />,
      videoTag: 'ATTACHMENT FEATURE 3'
    }
  ];

  return (
    <div className="w-full bg-[#18090b] text-slate-100 rounded-3xl p-4 sm:p-6 shadow-2xl border border-[#3b171c] overflow-hidden my-6">
      {/* Title Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-[#3b171c]">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-950/80 border border-rose-800/40 text-rose-300 text-xs font-bold mb-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Official Technical Specifications & Video Highlights
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white tracking-wide">
            CUCKOO VITA STAR {selectedHp !== 'ALL' ? selectedHp : ''} AIR CONDITIONER
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            {selectedHp === '1.0HP' && '5-Star Inverter Air Conditioner 1.0 HP Model Specification & Feature Videos'}
            {selectedHp === '1.5HP' && '5-Star Inverter Air Conditioner 1.5 HP Model Specification & Feature Videos'}
            {selectedHp === 'ALL' && '5-Star Inverter Air Conditioner Model Comparison (1.0 HP vs 1.5 HP)'}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => handleWhatsApp(selectedHp !== 'ALL' ? `CUCKOO Vita Star ${selectedHp}` : 'CUCKOO Vita Star 1.0HP / 1.5HP')}
            className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-2 transition-all shadow-md shadow-emerald-950"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Inquire Aircon Promo</span>
          </button>
        </div>
      </div>

      {/* Video Feature Showcase Cards (Attached Videos) */}
      <div className="mb-6">
        <h4 className="text-xs font-extrabold uppercase text-rose-300 tracking-wider mb-3 flex items-center gap-2">
          <Play className="w-4 h-4 fill-rose-400 text-rose-400" />
          Air Conditioner Video Feature Showcase
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
          {featureVideos.map((item, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-2xl bg-gradient-to-br ${item.gradient} border ${item.borderColor} shadow-lg relative overflow-hidden group hover:scale-[1.01] transition-all`}
            >
              <div className="flex items-center justify-between gap-2 mb-2">
                <div className="p-2 rounded-xl bg-slate-900/90 border border-slate-700/60 shadow-xs">
                  {item.icon}
                </div>
                <span className="text-[10px] font-black uppercase tracking-wider text-white/90 bg-slate-950/80 px-2.5 py-1 rounded-full border border-slate-700/60">
                  {item.badge}
                </span>
              </div>

              <h5 className="text-sm font-black text-white mt-1 leading-tight">{item.title}</h5>
              <div className="text-xs font-bold text-amber-300 mt-0.5">{item.subtitle}</div>
              <p className="text-[11px] text-slate-300/90 leading-relaxed mt-2">{item.desc}</p>

              <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-slate-400 font-mono">
                <span>CUCKOO VITA 5TAR</span>
                <span className="text-emerald-400 font-bold flex items-center gap-1">
                  <Play className="w-3 h-3 fill-emerald-400" />
                  Video Feature
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Table Container - Scrollable on small screens */}
      <div className="overflow-x-auto rounded-2xl border border-[#3b171c] bg-[#120608]">
        <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[500px]">
          <thead>
            <tr className="border-b border-[#3b171c] bg-[#220d10]">
              <th colSpan={2} className="p-3 sm:p-4 text-xs font-black uppercase tracking-wider text-slate-300">
                FULL NAME
              </th>
              {show10 && (
                <th className="p-3 sm:p-4 text-xs sm:text-sm font-black text-center text-rose-200 border-l border-[#3b171c]">
                  CUCKOO VITA STAR<br />
                  AIR CONDITIONER 1.0 HP INVERTER
                </th>
              )}
              {show15 && (
                <th className="p-3 sm:p-4 text-xs sm:text-sm font-black text-center text-rose-200 border-l border-[#3b171c]">
                  CUCKOO VITA STAR<br />
                  AIR CONDITIONER 1.5 HP INVERTER
                </th>
              )}
            </tr>
          </thead>
          <tbody className="divide-y divide-[#2a1014] text-slate-200">
            {/* Stock Code */}
            <tr>
              <td rowSpan={2} className="p-3 sm:p-4 font-bold text-slate-300 bg-[#17080a] border-r border-[#2a1014] w-1/4">
                Stock Code
              </td>
              <td className="p-2.5 sm:p-3 text-slate-400 bg-[#17080a] border-r border-[#2a1014] text-xs">
                Indoor
              </td>
              {show10 && (
                <td className="p-2.5 sm:p-3 text-center border-r border-[#2a1014] font-mono text-slate-200">
                  CIW10V-MC3-1U
                </td>
              )}
              {show15 && (
                <td className="p-2.5 sm:p-3 text-center font-mono text-slate-200">
                  CIW15V-MC3-1U
                </td>
              )}
            </tr>
            <tr>
              <td className="p-2.5 sm:p-3 text-slate-400 bg-[#17080a] border-r border-[#2a1014] text-xs">
                Outdoor
              </td>
              {show10 && (
                <td className="p-2.5 sm:p-3 text-center border-r border-[#2a1014] font-mono text-slate-200">
                  CL10V-MC3-OU
                </td>
              )}
              {show15 && (
                <td className="p-2.5 sm:p-3 text-center font-mono text-slate-200">
                  CL15V-MC3-OU
                </td>
              )}
            </tr>

            {/* Dimensions */}
            <tr className="bg-[#150709]">
              <td rowSpan={2} className="p-3 sm:p-4 font-bold text-slate-300 bg-[#17080a] border-r border-[#2a1014]">
                Dimensions (WxHxD) (mm)
              </td>
              <td className="p-2.5 sm:p-3 text-slate-400 bg-[#17080a] border-r border-[#2a1014] text-xs">
                Indoor
              </td>
              {show10 && (
                <td className="p-2.5 sm:p-3 text-center border-r border-[#2a1014]">
                  815 x 290 x 200
                </td>
              )}
              {show15 && (
                <td className="p-2.5 sm:p-3 text-center">
                  815 x 290 x 200
                </td>
              )}
            </tr>
            <tr className="bg-[#150709]">
              <td className="p-2.5 sm:p-3 text-slate-400 bg-[#17080a] border-r border-[#2a1014] text-xs">
                Outdoor
              </td>
              {show10 && (
                <td className="p-2.5 sm:p-3 text-center border-r border-[#2a1014]">
                  680 x 462 x 246
                </td>
              )}
              {show15 && (
                <td className="p-2.5 sm:p-3 text-center">
                  718 x 540 x 300
                </td>
              )}
            </tr>

            {/* Cooling Capacity */}
            <tr>
              <td rowSpan={2} className="p-3 sm:p-4 font-bold text-slate-300 bg-[#17080a] border-r border-[#2a1014]">
                Cooling Capacity
              </td>
              <td className="p-2.5 sm:p-3 text-slate-400 bg-[#17080a] border-r border-[#2a1014] text-xs">
                W
              </td>
              {show10 && (
                <td className="p-2.5 sm:p-3 text-center border-r border-[#2a1014] font-medium">
                  2,700
                </td>
              )}
              {show15 && (
                <td className="p-2.5 sm:p-3 text-center font-medium">
                  3,560
                </td>
              )}
            </tr>
            <tr>
              <td className="p-2.5 sm:p-3 text-slate-400 bg-[#17080a] border-r border-[#2a1014] text-xs">
                Btu/h
              </td>
              {show10 && (
                <td className="p-2.5 sm:p-3 text-center border-r border-[#2a1014] font-medium">
                  9,200
                </td>
              )}
              {show15 && (
                <td className="p-2.5 sm:p-3 text-center font-medium">
                  12,000
                </td>
              )}
            </tr>

            {/* Power Supply Source */}
            <tr className="bg-[#150709]">
              <td className="p-3 sm:p-4 font-bold text-slate-300 bg-[#17080a] border-r border-[#2a1014]">
                Power Supply Source
              </td>
              <td className="p-2.5 sm:p-3 text-slate-400 bg-[#17080a] border-r border-[#2a1014] text-xs">
                V/Ph/Hz
              </td>
              {show10 && (
                <td className="p-2.5 sm:p-3 text-center border-r border-[#2a1014]">
                  220-240V~1-50Hz
                </td>
              )}
              {show15 && (
                <td className="p-2.5 sm:p-3 text-center">
                  220-240V~1-50Hz
                </td>
              )}
            </tr>

            {/* Power */}
            <tr>
              <td rowSpan={2} className="p-3 sm:p-4 font-bold text-slate-300 bg-[#17080a] border-r border-[#2a1014]">
                Power
              </td>
              <td className="p-2.5 sm:p-3 text-slate-400 bg-[#17080a] border-r border-[#2a1014] text-xs">
                Rated (W)
              </td>
              {show10 && (
                <td className="p-2.5 sm:p-3 text-center border-r border-[#2a1014]">
                  800
                </td>
              )}
              {show15 && (
                <td className="p-2.5 sm:p-3 text-center">
                  1,100
                </td>
              )}
            </tr>
            <tr>
              <td className="p-2.5 sm:p-3 text-slate-400 bg-[#17080a] border-r border-[#2a1014] text-xs">
                Maximum (W)
              </td>
              {show10 && (
                <td className="p-2.5 sm:p-3 text-center border-r border-[#2a1014]">
                  1,100
                </td>
              )}
              {show15 && (
                <td className="p-2.5 sm:p-3 text-center">
                  1,500
                </td>
              )}
            </tr>

            {/* Monthly Rental Plans */}
            <tr className="bg-[#1e0a0d] border-t border-b border-[#3b171c]">
              <td rowSpan={2} className="p-3 sm:p-4 font-bold text-rose-300 bg-[#17080a] border-r border-[#2a1014]">
                Monthly Rental Plans
              </td>
              <td className="p-2.5 sm:p-3 text-slate-300 bg-[#17080a] border-r border-[#2a1014] text-xs font-semibold">
                Normal Rental Plan<br/>
                <span className="text-[10px] text-slate-400 font-normal">(New / Existing)</span>
              </td>
              {show10 && (
                <td className="p-2.5 sm:p-3 text-center border-r border-[#2a1014] font-black text-white text-sm sm:text-base">
                  RM 103 <span className="text-xs font-normal text-slate-400">/ mth</span>
                  <span className="block text-[10px] text-slate-400 font-normal">60 Months Contract</span>
                </td>
              )}
              {show15 && (
                <td className="p-2.5 sm:p-3 text-center font-black text-white text-sm sm:text-base">
                  RM 113 <span className="text-xs font-normal text-slate-400">/ mth</span>
                  <span className="block text-[10px] text-slate-400 font-normal">60 Months Contract</span>
                </td>
              )}
            </tr>
            <tr className="bg-[#1e0a0d]">
              <td className="p-2.5 sm:p-3 text-amber-300 bg-[#17080a] border-r border-[#2a1014] text-xs font-bold">
                Loyalty Rental Plan ⭐<br/>
                <span className="text-[10px] text-amber-400/90 font-medium">(Existing Customer)</span>
              </td>
              {show10 && (
                <td className="p-2.5 sm:p-3 text-center border-r border-[#2a1014] font-black text-amber-400 text-sm sm:text-base bg-amber-950/20">
                  RM 88 <span className="text-xs font-normal text-amber-200/80">/ mth</span>
                  <span className="block text-[10px] text-amber-300/90 font-semibold">Save RM15 / mth</span>
                </td>
              )}
              {show15 && (
                <td className="p-2.5 sm:p-3 text-center font-black text-amber-400 text-sm sm:text-base bg-amber-950/20">
                  RM 98 <span className="text-xs font-normal text-amber-200/80">/ mth</span>
                  <span className="block text-[10px] text-amber-300/90 font-semibold">Save RM15 / mth</span>
                </td>
              )}
            </tr>

            {/* Energy Rating */}
            <tr className="bg-[#150709]">
              <td colSpan={2} className="p-3 sm:p-4 font-bold text-slate-300 bg-[#17080a] border-r border-[#2a1014]">
                Energy Rating
              </td>
              {show10 && (
                <td className="p-2.5 sm:p-3 text-center border-r border-[#2a1014] font-bold text-amber-400">
                  5 star ⭐⭐⭐⭐⭐
                </td>
              )}
              {show15 && (
                <td className="p-2.5 sm:p-3 text-center font-bold text-amber-400">
                  5 star ⭐⭐⭐⭐⭐
                </td>
              )}
            </tr>

            {/* Refrigerant */}
            <tr>
              <td colSpan={2} className="p-3 sm:p-4 font-bold text-slate-300 bg-[#17080a] border-r border-[#2a1014]">
                Refrigerant
              </td>
              {show10 && (
                <td className="p-2.5 sm:p-3 text-center border-r border-[#2a1014] font-medium text-emerald-400">
                  R32
                </td>
              )}
              {show15 && (
                <td className="p-2.5 sm:p-3 text-center font-medium text-emerald-400">
                  R32
                </td>
              )}
            </tr>

            {/* Noise Level */}
            <tr className="bg-[#150709]">
              <td rowSpan={2} className="p-3 sm:p-4 font-bold text-slate-300 bg-[#17080a] border-r border-[#2a1014]">
                Noise Level (dBA)
              </td>
              <td className="p-2.5 sm:p-3 text-slate-400 bg-[#17080a] border-r border-[#2a1014] text-xs">
                Indoor
              </td>
              {show10 && (
                <td className="p-2.5 sm:p-3 text-center border-r border-[#2a1014]">
                  38 [+/- 3dB]
                </td>
              )}
              {show15 && (
                <td className="p-2.5 sm:p-3 text-center">
                  38 [+/- 3dB]
                </td>
              )}
            </tr>
            <tr className="bg-[#150709]">
              <td className="p-2.5 sm:p-3 text-slate-400 bg-[#17080a] border-r border-[#2a1014] text-xs">
                Outdoor
              </td>
              {show10 && (
                <td className="p-2.5 sm:p-3 text-center border-r border-[#2a1014]">
                  49 [+/- 3dB]
                </td>
              )}
              {show15 && (
                <td className="p-2.5 sm:p-3 text-center">
                  51 [+/- 3dB]
                </td>
              )}
            </tr>

            {/* Net Weight */}
            <tr>
              <td rowSpan={2} className="p-3 sm:p-4 font-bold text-slate-300 bg-[#17080a] border-r border-[#2a1014]">
                Net Weight (kg)
              </td>
              <td className="p-2.5 sm:p-3 text-slate-400 bg-[#17080a] border-r border-[#2a1014] text-xs">
                Indoor
              </td>
              {show10 && (
                <td className="p-2.5 sm:p-3 text-center border-r border-[#2a1014]">
                  8.5
                </td>
              )}
              {show15 && (
                <td className="p-2.5 sm:p-3 text-center">
                  8.5
                </td>
              )}
            </tr>
            <tr>
              <td className="p-2.5 sm:p-3 text-slate-400 bg-[#17080a] border-r border-[#2a1014] text-xs">
                Outdoor
              </td>
              {show10 && (
                <td className="p-2.5 sm:p-3 text-center border-r border-[#2a1014]">
                  21
                </td>
              )}
              {show15 && (
                <td className="p-2.5 sm:p-3 text-center">
                  26
                </td>
              )}
            </tr>

            {/* Gross Weight */}
            <tr className="bg-[#150709]">
              <td rowSpan={2} className="p-3 sm:p-4 font-bold text-slate-300 bg-[#17080a] border-r border-[#2a1014]">
                Gross Weight (kg)
              </td>
              <td className="p-2.5 sm:p-3 text-slate-400 bg-[#17080a] border-r border-[#2a1014] text-xs">
                Indoor
              </td>
              {show10 && (
                <td className="p-2.5 sm:p-3 text-center border-r border-[#2a1014]">
                  11
                </td>
              )}
              {show15 && (
                <td className="p-2.5 sm:p-3 text-center">
                  11
                </td>
              )}
            </tr>
            <tr className="bg-[#150709]">
              <td className="p-2.5 sm:p-3 text-slate-400 bg-[#17080a] border-r border-[#2a1014] text-xs">
                Outdoor
              </td>
              {show10 && (
                <td className="p-2.5 sm:p-3 text-center border-r border-[#2a1014]">
                  23
                </td>
              )}
              {show15 && (
                <td className="p-2.5 sm:p-3 text-center">
                  28
                </td>
              )}
            </tr>
            {/* Standard Installation SOP */}
            <tr className="bg-[#1f0b0f]">
              <td colSpan={2} className="p-3 sm:p-4 font-bold text-amber-300 bg-[#19080b] border-r border-[#2a1014]">
                Standard Installation Package
              </td>
              <td colSpan={selectedHp === 'ALL' ? 2 : 1} className="p-3 sm:p-4 text-center font-medium text-emerald-300">
                <span className="font-bold text-white block mb-1">FREE Standard Installation</span>
                <span className="text-xs text-emerald-200 block">✔ 10ft Copper Piping</span>
                <span className="text-xs text-emerald-200 block">✔ 10ft Electrical Wiring</span>
                <span className="text-[11px] text-slate-400 block mt-1">(As per Official Installation SOP)</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-400">
        <span>* Specifications subject to official CUCKOO Malaysia documentation. Includes free scheduled servicing every 6 months & FREE standard installation (10ft copper piping & 10ft electrical wiring as per SOP).</span>
        <span className="font-bold text-rose-300">*Terms and conditions applied</span>
      </div>
    </div>
  );
};
