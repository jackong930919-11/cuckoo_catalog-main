import React from 'react';
import { Sparkles, MessageCircle, Tv, Zap, ShieldCheck, Layers, CheckCircle2, Sliders, Volume2, Wifi, Gamepad2, Eye, Box } from 'lucide-react';
import { CUCKOO_CONTACT } from '../data/cuckooData';

interface SamsungTVSpecTableProps {
  onInquire?: (model: string) => void;
}

export const SamsungTVSpecTable: React.FC<SamsungTVSpecTableProps> = ({ onInquire }) => {
  const handleWhatsApp = (planDetails?: string) => {
    if (onInquire) {
      onInquire('65″ Mini LED M1EH 4K Samsung Vision AI Smart TV (2026)');
      return;
    }
    const text = encodeURIComponent(
      `Hi ${CUCKOO_CONTACT.agentName},\nI am interested in 65″ Mini LED M1EH 4K Samsung Vision AI Smart TV (2026) [UA65M1EHAKXXM]${planDetails ? ` (${planDetails})` : ''}.\nPlease share more details on the RM153/mth 3-year rental plan, RM4,599 outright purchase, and current promotions. Thank you!`
    );
    window.open(`https://wa.me/${CUCKOO_CONTACT.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="w-full bg-slate-900 text-slate-100 rounded-3xl p-4 sm:p-6 shadow-2xl border border-slate-800 overflow-hidden my-6">
      {/* Title Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-600/50 text-indigo-300 text-xs font-bold mb-2">
            <Tv className="w-3.5 h-3.5 text-indigo-400" />
            Mini LED 4K • Samsung Vision AI • 2026 Model
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white tracking-wide flex items-center gap-2 flex-wrap">
            <span>65″ MINI LED M1EH 4K TV</span>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 font-semibold">
              Model: UA65M1EHAKXXM
            </span>
          </h3>
          <p className="text-xs sm:text-sm text-indigo-300 font-bold mt-1 uppercase tracking-wider">
            Smarter Mini LED 4K Viewing, Powered by Vision AI & Pure Spectrum Color
          </p>
          <p className="text-xs text-slate-400 mt-0.5 max-w-2xl">
            Experience enhanced clarity, richer colors, and immersive sound with Mini LED Processor 4K, Motion Xcelerator, DLG 120Hz, Object Tracking Sound (OTS Lite), Tizen OS, and personalized Vision AI Companion.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => handleWhatsApp('Samsung 65" Mini LED TV Inquiry')}
            className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-2 transition-all shadow-md shadow-emerald-950 cursor-pointer shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Inquire Samsung TV</span>
          </button>
        </div>
      </div>

      {/* Unique Selling Points (USP Highlights Grid) */}
      <div className="mb-6">
        <h4 className="text-xs font-extrabold uppercase text-indigo-400 tracking-wider mb-3 flex items-center gap-1.5">
          <CheckCircle2 className="w-4 h-4" />
          <span>Key Technological USPs</span>
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between hover:border-indigo-500/40 transition-colors">
            <Tv className="w-5 h-5 text-indigo-400 mb-1" />
            <div>
              <div className="text-[11px] font-extrabold text-white">Mini LED Precision</div>
              <div className="text-[10px] text-slate-400 font-medium">Deeper contrast & precise backlights</div>
            </div>
          </div>

          <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between hover:border-indigo-500/40 transition-colors">
            <Sparkles className="w-5 h-5 text-amber-400 mb-1" />
            <div>
              <div className="text-[11px] font-extrabold text-white">Vision AI Companion</div>
              <div className="text-[10px] text-slate-400 font-medium">Smart personalized AI discovery</div>
            </div>
          </div>

          <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between hover:border-indigo-500/40 transition-colors">
            <Eye className="w-5 h-5 text-cyan-400 mb-1" />
            <div>
              <div className="text-[11px] font-extrabold text-white">4K Processor & Upscaling</div>
              <div className="text-[10px] text-slate-400 font-medium">Supreme Mini LED Dimming</div>
            </div>
          </div>

          <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between hover:border-indigo-500/40 transition-colors">
            <Gamepad2 className="w-5 h-5 text-rose-400 mb-1" />
            <div>
              <div className="text-[11px] font-extrabold text-white">DLG 120Hz & Motion Xcelerator</div>
              <div className="text-[10px] text-slate-400 font-medium">ALLM, VRR & HGiG Gaming</div>
            </div>
          </div>

          <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between hover:border-indigo-500/40 transition-colors">
            <Volume2 className="w-5 h-5 text-emerald-400 mb-1" />
            <div>
              <div className="text-[11px] font-extrabold text-white">OTS Lite & Q-Symphony</div>
              <div className="text-[10px] text-slate-400 font-medium">Adaptive Sound 20W 2ch</div>
            </div>
          </div>

          <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between hover:border-indigo-500/40 transition-colors">
            <Wifi className="w-5 h-5 text-sky-400 mb-1" />
            <div>
              <div className="text-[11px] font-extrabold text-white">Tizen Smart Ecosystem</div>
              <div className="text-[10px] text-slate-400 font-medium">AirPlay, Google Cast & Bixby</div>
            </div>
          </div>

          <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between hover:border-indigo-500/40 transition-colors">
            <Layers className="w-5 h-5 text-purple-400 mb-1" />
            <div>
              <div className="text-[11px] font-extrabold text-white">Metal Stream Design</div>
              <div className="text-[10px] text-slate-400 font-medium">3 Bezel-less sleek body</div>
            </div>
          </div>

          <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 flex flex-col justify-between hover:border-indigo-500/40 transition-colors">
            <ShieldCheck className="w-5 h-5 text-teal-400 mb-1" />
            <div>
              <div className="text-[11px] font-extrabold text-white">CUCKOO Warranty</div>
              <div className="text-[10px] text-slate-400 font-medium">2-Yr Standard + 1-Yr Extended</div>
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
              <td className="py-3 px-4 font-bold text-slate-200">Product Name / Model</td>
              <td className="py-3 px-4 text-white font-black text-sm">65″ Mini LED M1EH 4K Samsung Vision AI Smart TV (2026)</td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">Product Model Code & Type</td>
              <td className="py-3 px-4 text-indigo-300 font-bold">UA65M1EHAKXXM <span className="text-slate-400 font-normal">(Product Type: LED / Mini LED)</span></td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200 align-top">Display Panel</td>
              <td className="py-3 px-4 text-slate-300">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px]">
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">Screen Size</span>
                    <span className="text-white font-bold">65″</span>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">Resolution</span>
                    <span className="text-indigo-300 font-bold">3840 x 2160 (4K UHD)</span>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">Refresh Rate</span>
                    <span className="text-white font-bold">50 Hz</span>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">DLG Mode</span>
                    <span className="text-emerald-400 font-bold">120 Hz</span>
                  </div>
                </div>
              </td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200 align-top">Video Processing & Picture Quality</td>
              <td className="py-3 px-4 text-slate-300">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-[11px]">
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">Picture Engine</span>
                    <span className="text-indigo-300 font-bold">Mini LED Processor 4K</span>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">HDR & Support</span>
                    <span className="text-white font-bold">Mini LED HDR / HDR 10+</span>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">Micro Dimming</span>
                    <span className="text-white font-bold">Supreme Mini LED Dimming</span>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">Motion Technology</span>
                    <span className="text-cyan-300 font-bold">Motion Xcelerator</span>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">Upscaling & Color</span>
                    <span className="text-white font-bold">4K Upscaling / Color Booster</span>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">Filmmaker Mode & Contrast</span>
                    <span className="text-emerald-400 font-bold">Yes / Contrast Enhancer</span>
                  </div>
                </div>
              </td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200 align-top">Audio System</td>
              <td className="py-3 px-4 text-slate-300">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-[11px]">
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">Object Tracking Sound</span>
                    <span className="text-indigo-300 font-bold">OTS Lite</span>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">Q-Symphony</span>
                    <span className="text-emerald-400 font-bold">Yes</span>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">Sound Output & Speaker</span>
                    <span className="text-white font-bold">20 W / 2ch</span>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800 sm:col-span-3">
                    <span className="text-slate-400 block text-[10px]">Adaptive Sound</span>
                    <span className="text-white font-bold">Yes (Environment Sound Optimization)</span>
                  </div>
                </div>
              </td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200 align-top">Smart Services & AI Companion</td>
              <td className="py-3 px-4 text-slate-300">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-[11px]">
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">Operating System</span>
                    <span className="text-indigo-300 font-bold">Tizen™ Smart TV</span>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">Vision AI Companion</span>
                    <span className="text-amber-300 font-bold">Yes (AU, VN, TH, MM, KH, LA, PH, SG)</span>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">Voice Assistant & Browser</span>
                    <span className="text-white font-bold">Bixby (Voice Ready) / Web Browser</span>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">Casting & Mirroring</span>
                    <span className="text-white font-bold">Apple AirPlay & Google Cast</span>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">Entertainment Features</span>
                    <span className="text-white font-bold">Daily+, Karaoke Mic & Soccer Mode</span>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">SmartThings / Remote</span>
                    <span className="text-white font-bold">Quick Remote Only</span>
                  </div>
                </div>
              </td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200 align-top">Gaming & Tuner Broadcast</td>
              <td className="py-3 px-4 text-slate-300">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px]">
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">Auto Game Mode (ALLM)</span>
                    <span className="text-emerald-400 font-bold">Yes</span>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">VRR & HGiG</span>
                    <span className="text-emerald-400 font-bold">Yes</span>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">Digital Broadcast</span>
                    <span className="text-white font-bold">DVB-T2</span>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">Analog & TV Key</span>
                    <span className="text-white font-bold">Yes</span>
                  </div>
                </div>
              </td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200 align-top">Connectivity & Ports</td>
              <td className="py-3 px-4 text-slate-300">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-[11px]">
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">Wi-Fi & Bluetooth</span>
                    <span className="text-indigo-300 font-bold">Wi-Fi 5 / Bluetooth 5.3</span>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">HDMI Ports</span>
                    <span className="text-white font-bold">3 Ports (4K 60Hz for HDMI 1/2/3)</span>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">HDMI Audio Return & CEC</span>
                    <span className="text-white font-bold">eARC / Anynet+ (HDMI-CEC)</span>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">USB & Ethernet</span>
                    <span className="text-white font-bold">1 x USB-A / 1 x Ethernet (LAN)</span>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800 sm:col-span-2">
                    <span className="text-slate-400 block text-[10px]">RF In (Terrestrial/Cable)</span>
                    <span className="text-white font-bold">1/1 (Common Use for Terrestrial) / 0 Satellite</span>
                  </div>
                </div>
              </td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200 align-top">Design & Dimensions</td>
              <td className="py-3 px-4 text-slate-300">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
                  <div><span className="text-slate-400">Design & Bezel:</span> <span className="font-bold text-white">Metal Stream / 3 Bezel-less (Black)</span></div>
                  <div><span className="text-slate-400">Stand Type & Color:</span> <span className="font-bold text-white">Basic Feet (Black)</span></div>
                  <div><span className="text-slate-400">Package Size (WxHxD):</span> <span className="font-bold text-slate-200">1578 x 930 x 142 mm</span></div>
                  <div><span className="text-slate-400">Set Size with Stand:</span> <span className="font-bold text-indigo-300">1444.1 x 882.2 x 222 mm</span></div>
                  <div><span className="text-slate-400">Set Size without Stand:</span> <span className="font-bold text-slate-200">1444.1 x 831.2 x 76.8 mm</span></div>
                  <div><span className="text-slate-400">VESA Spec:</span> <span className="font-bold text-white">200 x 200 mm</span></div>
                  <div><span className="text-slate-400">Weights (Pkg / Set w/ Stand / Set w/o):</span> <span className="font-bold text-amber-300">19.9 kg / 14.5 kg / 14.2 kg</span></div>
                </div>
              </td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200 align-top">Power & Eco Solution</td>
              <td className="py-3 px-4 text-slate-300">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-[11px]">
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">Power Supply</span>
                    <span className="text-white font-bold">AC220-240 V~ 50/60 Hz</span>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">Power Consumption</span>
                    <span className="text-white font-bold">Max 170 W / Typical 111 W</span>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">Standby Consumption</span>
                    <span className="text-emerald-400 font-bold">0.50 W</span>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">Yearly Power Consumption</span>
                    <span className="text-amber-300 font-bold">206.04 kWh (EU Standard)</span>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">Energy Efficiency Class</span>
                    <span className="text-white font-bold">Class 2</span>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">Eco Sensor & Auto Off</span>
                    <span className="text-emerald-400 font-bold">Yes (Auto Power Saving)</span>
                  </div>
                </div>
              </td>
            </tr>

            <tr className="hover:bg-slate-900/40">
              <td className="py-3 px-4 font-bold text-slate-200">Included Accessories</td>
              <td className="py-3 px-4 text-slate-200 font-semibold">
                Full Motion Slim Wall Mount Support (Y22) : Yes | User Manual : Yes | Power Cable : Yes
              </td>
            </tr>

            <tr className="hover:bg-slate-900/40 bg-slate-900/30">
              <td className="py-3.5 px-4 font-bold text-slate-200 align-top">Price & Packages</td>
              <td className="py-3.5 px-4 text-slate-200 space-y-2">
                <div className="p-3.5 rounded-xl bg-slate-900 border border-emerald-900/50 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="text-[11px] text-slate-400 block font-medium">Purchase (Outright)</span>
                    <span className="text-base font-black text-emerald-400">RM 4,599.00</span>
                    <span className="text-[10px] text-slate-400 block">Includes FREE 2-Year standard + 1-Year CUCKOO Extended Exclusive Warranty</span>
                  </div>
                  <button
                    onClick={() => handleWhatsApp('Samsung 65" TV Outright RM4,599')}
                    className="px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-[11px] shrink-0 cursor-pointer transition-colors"
                  >
                    Select Outright
                  </button>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900 border border-indigo-900/50 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="text-[11px] text-slate-400 block font-medium">Rent (Rental Plan)</span>
                    <span className="text-base font-black text-indigo-300">RM 153.00 / month <span className="text-xs font-normal text-slate-400">(3 years)</span></span>
                    <span className="text-[10px] text-slate-400 block">Includes FREE 2-Year standard + 1-Year CUCKOO Extended Exclusive Warranty</span>
                  </div>
                  <button
                    onClick={() => handleWhatsApp('Samsung 65" TV Rental RM153/mth')}
                    className="px-3.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-[11px] shrink-0 cursor-pointer transition-colors"
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
