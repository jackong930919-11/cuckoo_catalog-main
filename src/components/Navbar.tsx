import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Search, ShieldCheck, Sparkles, MessageCircle, Calculator, Home, Inbox, Lock, Database, ShieldAlert } from 'lucide-react';
import { CUCKOO_CONTACT } from '../data/cuckooData';
import { CuckooLogo } from './CuckooLogo';
import { PromoMarquee } from './PromoMarquee';
import { SmartSearchBar } from './SmartSearchBar';
import { Product } from '../types';
import { getBackgroundInquiries } from '../lib/inquiryStore';
import { VisitorCounter } from './VisitorCounter';
import { UserSession } from '../lib/authStore';

interface NavbarProps {
  activePage: 'all' | 'rental' | 'outright' | 'ccsp';
  setActivePage: (page: 'all' | 'rental' | 'outright' | 'ccsp') => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onOpenCalculator: () => void;
  onScrollToContact: () => void;
  onGoHome?: () => void;
  onSelectProduct?: (product: Product) => void;
  onScrollToCatalog?: () => void;
  onOpenInbox?: () => void;
  onOpenCms?: () => void;
  session?: UserSession;
}

export const Navbar: React.FC<NavbarProps> = ({
  activePage,
  setActivePage,
  searchQuery,
  setSearchQuery,
  onOpenCalculator,
  onScrollToContact,
  onGoHome,
  onSelectProduct,
  onScrollToCatalog,
  onOpenInbox,
  onOpenCms,
  session,
}) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const headerRef = React.useRef<HTMLElement>(null);

  const refreshUnread = () => {
    const list = getBackgroundInquiries();
    setUnreadCount(list.filter(i => !i.read).length);
  };

  useEffect(() => {
    refreshUnread();
    window.addEventListener('cuckoo_inquiry_saved', refreshUnread);
    window.addEventListener('cuckoo_inquiries_updated', refreshUnread);
    return () => {
      window.removeEventListener('cuckoo_inquiry_saved', refreshUnread);
      window.removeEventListener('cuckoo_inquiries_updated', refreshUnread);
    };
  }, []);

  React.useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        const height = headerRef.current.offsetHeight;
        document.documentElement.style.setProperty('--navbar-height', `${height}px`);
      }
    };

    updateHeaderHeight();
    const resizeObserver = new ResizeObserver(updateHeaderHeight);
    if (headerRef.current) {
      resizeObserver.observe(headerRef.current);
    }
    window.addEventListener('resize', updateHeaderHeight);
    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateHeaderHeight);
    };
  }, []);

  const handleHomeClick = () => {
    setActivePage('all');
    if (onGoHome) {
      onGoHome();
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(`Hi ${CUCKOO_CONTACT.agentName}, I am browsing CUCKOO product catalog and would like to inquire about rental and outright packages.`);
    window.open(`https://wa.me/${CUCKOO_CONTACT.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <header ref={headerRef} className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
      {/* Top Agent Announcement Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-3 flex-wrap justify-center sm:justify-start">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-indigo-600 text-white font-semibold text-[11px] uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              Authorized CUCKOO Sales Agent
            </span>
            <span className="text-slate-300 font-medium">
              Contact: <strong className="text-white">{CUCKOO_CONTACT.agentName} ({CUCKOO_CONTACT.phone})</strong>
            </span>
          </div>

          <div className="flex items-center gap-3 text-slate-300 text-xs">
            <VisitorCounter variant="compact" className="hidden lg:inline-flex" />
            
            <a 
              href={`mailto:${CUCKOO_CONTACT.email}`} 
              className="hover:text-indigo-300 transition-colors hidden xl:flex items-center gap-1"
            >
              <Mail className="w-3.5 h-3.5 text-indigo-400" />
              {CUCKOO_CONTACT.email}
            </a>
            <span className="hidden xl:inline text-slate-700">|</span>
            <button 
              onClick={onScrollToContact} 
              className="hover:text-indigo-300 transition-colors flex items-center gap-1"
            >
              <MapPin className="w-3.5 h-3.5 text-indigo-400" />
              Sunway Putra Mall, KL
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-3 sm:gap-4">
        {/* Brand Title */}
        <div 
          onClick={handleHomeClick}
          className="flex items-center gap-2 sm:gap-3 cursor-pointer group py-1 shrink-0"
        >
          <CuckooLogo variant="full" />
          <div className="hidden md:block border-l border-slate-200 pl-3">
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-red-50 text-[#801217] border border-red-100 block w-fit mb-0.5">
              OFFICIAL STORE
            </span>
            <p className="text-[11px] text-slate-500 font-medium">
              Sales Agent: <span className="text-slate-800 font-bold">{CUCKOO_CONTACT.agentName}</span>
            </p>
          </div>
        </div>

        {/* Smart Search Bar (Desktop & Tablet) */}
        <div className="hidden sm:block flex-1 max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-3xl mx-2 sm:mx-4">
          <SmartSearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            onSelectProduct={onSelectProduct}
            onScrollToCatalog={onScrollToCatalog}
            variant="navbar"
            placeholder="Search for CUCKOO water purifiers, air purifiers, mattresses, air conditioners..."
          />
        </div>

        {/* Navigation Page Tabs (Desktop & Tablet) */}
        <nav className="hidden lg:flex items-center gap-1.5 p-1 bg-slate-100/80 rounded-2xl border border-slate-200/80 text-xs font-extrabold">
          <button
            onClick={handleHomeClick}
            className={`px-3.5 py-2 rounded-xl transition-all flex items-center gap-1.5 ${
              activePage === 'all'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Home className="w-3.5 h-3.5 text-indigo-600" />
            <span>Home</span>
          </button>
          <button
            onClick={() => setActivePage('rental')}
            className={`px-3.5 py-2 rounded-xl transition-all ${
              activePage === 'rental'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-indigo-600'
            }`}
          >
            Monthly Rental
          </button>
          <button
            onClick={() => setActivePage('outright')}
            className={`px-3.5 py-2 rounded-xl transition-all ${
              activePage === 'outright'
                ? 'bg-amber-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-amber-600'
            }`}
          >
            Outright Purchase
          </button>
          <button
            onClick={() => setActivePage('ccsp')}
            className={`px-3.5 py-2 rounded-xl transition-all ${
              activePage === 'ccsp'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-emerald-600'
            }`}
          >
            CCSP Service
          </button>
        </nav>

        {/* Actions Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={onOpenCalculator}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-xs sm:text-sm transition-all shadow-xs"
            title="Calculate monthly rental vs outright"
          >
            <Calculator className="w-4 h-4 text-indigo-600" />
            <span className="hidden sm:inline">Rental</span> Calculator
          </button>

          <a
            href={`tel:${CUCKOO_CONTACT.phone}`}
            className="hidden xl:flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-indigo-600" />
            {CUCKOO_CONTACT.phone}
          </a>

          <button
            onClick={handleWhatsApp}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-all transform active:scale-95 cursor-pointer shrink-0 shadow-xs"
            title={`Chat on WhatsApp with ${CUCKOO_CONTACT.agentName}`}
          >
            <MessageCircle className="w-4 h-4 fill-white shrink-0" />
            <span>WhatsApp</span>
          </button>
        </div>
      </div>

      {/* Mobile Search Bar Row */}
      <div className="sm:hidden px-4 pb-2 pt-1 border-t border-slate-100">
        <SmartSearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onSelectProduct={onSelectProduct}
          onScrollToCatalog={onScrollToCatalog}
          variant="navbar"
          placeholder="Search for CUCKOO water purifiers, air purifiers, mattresses..."
        />
      </div>

      {/* Sub Navigation Bar for Mobile & Tablet */}
      <div className="lg:hidden px-4 pb-2.5 flex items-center justify-between gap-1 overflow-x-auto scrollbar-none text-xs font-bold pt-1">
        <button
          onClick={handleHomeClick}
          className={`px-3 py-1.5 rounded-xl whitespace-nowrap transition-all flex items-center gap-1 ${
            activePage === 'all'
              ? 'bg-slate-900 text-white'
              : 'bg-slate-100 text-slate-600'
          }`}
        >
          <Home className="w-3.5 h-3.5" />
          <span>Home</span>
        </button>
        <button
          onClick={() => setActivePage('rental')}
          className={`px-3 py-1.5 rounded-xl whitespace-nowrap transition-all ${
            activePage === 'rental'
              ? 'bg-indigo-600 text-white'
              : 'bg-slate-100 text-slate-600'
          }`}
        >
          Monthly Rental
        </button>
        <button
          onClick={() => setActivePage('outright')}
          className={`px-3 py-1.5 rounded-xl whitespace-nowrap transition-all ${
            activePage === 'outright'
              ? 'bg-amber-600 text-white'
              : 'bg-slate-100 text-slate-600'
          }`}
        >
          Outright Purchase
        </button>
        <button
          onClick={() => setActivePage('ccsp')}
          className={`px-3 py-1.5 rounded-xl whitespace-nowrap transition-all ${
            activePage === 'ccsp'
              ? 'bg-emerald-600 text-white'
              : 'bg-slate-100 text-slate-600'
          }`}
        >
          CCSP Service
        </button>
      </div>

      {/* Animated Moving Marquee Banner */}
      <PromoMarquee />
    </header>
  );
};
