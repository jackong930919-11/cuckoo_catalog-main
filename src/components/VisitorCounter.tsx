import React, { useState, useEffect } from 'react';
import { Users, Eye, TrendingUp, Sparkles } from 'lucide-react';

interface VisitorCounterProps {
  className?: string;
  variant?: 'hero' | 'compact' | 'footer';
}

const BASE_VISITOR_COUNT = 200000;
const STORAGE_KEY = 'cuckoo_total_visitors_v3';
const LAST_VISIT_KEY = 'cuckoo_last_visit_timestamp';

export function getOrUpdateVisitorCount(): number {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    const lastVisit = localStorage.getItem(LAST_VISIT_KEY);
    const now = Date.now();

    let currentCount = stored ? parseInt(stored, 10) : BASE_VISITOR_COUNT;
    if (isNaN(currentCount) || currentCount < BASE_VISITOR_COUNT) {
      currentCount = BASE_VISITOR_COUNT;
    }

    // Calculate simulated organic traffic since last visit (e.g. ~1 to 5 visitors per 10 seconds elapsed)
    if (lastVisit) {
      const elapsedSeconds = Math.floor((now - parseInt(lastVisit, 10)) / 1000);
      if (elapsedSeconds > 0) {
        const organicAdditions = Math.min(Math.floor(elapsedSeconds / 8), 1200); // cap max catchup
        currentCount += organicAdditions;
      }
    }

    // Increment current visitor session
    currentCount += 1;

    localStorage.setItem(STORAGE_KEY, currentCount.toString());
    localStorage.setItem(LAST_VISIT_KEY, now.toString());

    return currentCount;
  } catch (err) {
    console.error('LocalStorage error in visitor counter:', err);
    return BASE_VISITOR_COUNT + 142;
  }
}

export const VisitorCounter: React.FC<VisitorCounterProps> = ({ className = '', variant = 'hero' }) => {
  const [visitorCount, setVisitorCount] = useState<number>(BASE_VISITOR_COUNT);
  const [displayCount, setDisplayCount] = useState<number>(BASE_VISITOR_COUNT);
  const [isLiveActive, setIsLiveActive] = useState<boolean>(true);
  const [recentLocation, setRecentLocation] = useState<string>('Kuala Lumpur');

  const LOCATIONS = [
    'Kuala Lumpur', 'Petaling Jaya', 'Johor Bahru', 'Penang', 'Shah Alam', 
    'Subang Jaya', 'Melaka', 'Ipoh', 'Kota Kinabalu', 'Kuching', 'Kuantan', 'Seremban'
  ];

  useEffect(() => {
    const finalCount = getOrUpdateVisitorCount();
    setVisitorCount(finalCount);

    // Animate counter from (finalCount - 50) up to finalCount
    const startVal = Math.max(BASE_VISITOR_COUNT, finalCount - 35);
    setDisplayCount(startVal);

    const duration = 1200; // ms
    const steps = 30;
    const stepTime = duration / steps;
    const increment = (finalCount - startVal) / steps;

    let current = startVal;
    const timer = setInterval(() => {
      current += increment;
      if (current >= finalCount) {
        setDisplayCount(finalCount);
        clearInterval(timer);
      } else {
        setDisplayCount(Math.floor(current));
      }
    }, stepTime);

    // Live periodic incrementer (simulates real-time live visitors arriving)
    const liveInterval = setInterval(() => {
      setVisitorCount(prev => {
        const next = prev + 1;
        setDisplayCount(next);
        try {
          localStorage.setItem(STORAGE_KEY, next.toString());
        } catch (e) {}
        return next;
      });

      // Pick random Malaysian location for live feedback
      const randomLoc = LOCATIONS[Math.floor(Math.random() * LOCATIONS.length)];
      setRecentLocation(randomLoc);
      setIsLiveActive(true);
    }, 12000); // every 12 seconds add a visitor

    return () => {
      clearInterval(timer);
      clearInterval(liveInterval);
    };
  }, []);

  const formattedCount = displayCount.toLocaleString('en-US');

  if (variant === 'compact') {
    return (
      <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 text-white border border-slate-700/80 shadow-md text-xs font-bold ${className}`}>
        <div className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </div>
        <span className="text-slate-300">Live Visitors:</span>
        <span className="text-emerald-400 font-extrabold font-mono tracking-tight">{formattedCount}</span>
      </div>
    );
  }

  if (variant === 'footer') {
    return (
      <div className={`flex flex-col sm:flex-row items-center justify-between p-4 rounded-2xl bg-slate-900 border border-slate-800 text-slate-300 text-xs gap-3 ${className}`}>
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-indigo-600/30 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
            <Users className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-sm text-white font-mono tracking-tight">{formattedCount}+</span>
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold border border-emerald-500/30">
                Live Count
              </span>
            </div>
            <p className="text-[11px] text-slate-400">Total Website Visitors & CUCKOO Customers Served</p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-[11px] text-slate-400 bg-slate-800/80 px-3 py-1.5 rounded-xl border border-slate-700/60">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>New visitor from <strong className="text-slate-200">{recentLocation}</strong> just joined</span>
        </div>
      </div>
    );
  }

  // Hero default variant
  return (
    <div className={`relative overflow-hidden bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white rounded-2xl p-4 sm:p-5 border border-indigo-500/30 shadow-xl ${className}`}>
      {/* Background Glow */}
      <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -left-10 -top-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        
        {/* Left Stats Section */}
        <div className="flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-2xl bg-indigo-600/30 border border-indigo-400/30 flex items-center justify-center text-indigo-300 shrink-0 shadow-inner">
            <Eye className="w-6 h-6" />
          </div>

          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl sm:text-3xl font-black font-mono tracking-tight text-white drop-shadow-xs">
                {formattedCount}
              </span>
              <span className="text-indigo-400 font-bold text-lg sm:text-xl">+</span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] font-extrabold border border-emerald-500/30">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                Live Traffic
              </span>
            </div>
            <p className="text-xs text-slate-300 font-medium flex items-center gap-1.5 mt-0.5">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
              <span>Verified Website Visitors & CUCKOO Water Purifier Admirers</span>
            </p>
          </div>
        </div>

        {/* Right Live Pulse Tag */}
        <div className="w-full sm:w-auto bg-slate-800/80 backdrop-blur-xs border border-slate-700/80 px-3.5 py-2 rounded-xl flex items-center justify-between sm:justify-start gap-2.5 text-xs text-slate-300 shadow-2xs">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-[11px] text-slate-400">Recent Activity:</span>
          </div>
          <span className="font-bold text-slate-100 text-[11px]">
            New visitor from <strong className="text-emerald-400 font-extrabold">{recentLocation}</strong>
          </span>
        </div>

      </div>
    </div>
  );
};
