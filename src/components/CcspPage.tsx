import React, { useState, useMemo, useEffect } from 'react';
import { CUCKOO_CONTACT, CATEGORIES_LIST } from '../data/cuckooData';
import { Product, ProductCategory } from '../types';
import { getStoredProducts } from '../lib/productStore';
import { HeartHandshake, ShieldCheck, CheckCircle2, MessageCircle, Info, ChevronDown, Sparkles, Filter, Search, RefreshCw } from 'lucide-react';
import { PromoCard } from './NewLaunchPromoCard';

interface CcspPageProps {
  onSelectProduct: (product: Product) => void;
}

export const CcspPage: React.FC<CcspPageProps> = ({ onSelectProduct }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'ALL'>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [visibleCount, setVisibleCount] = useState<number>(7); // 2 promo cards + 7 products = 9 items (3x3 grid)
  const [products, setProducts] = useState<Product[]>(getStoredProducts());

  useEffect(() => {
    const handleUpdate = (e: any) => {
      setProducts(e.detail || getStoredProducts());
    };
    window.addEventListener('cuckoo_products_updated', handleUpdate);
    return () => window.removeEventListener('cuckoo_products_updated', handleUpdate);
  }, []);

  const showPromoCards = selectedCategory === 'ALL' && searchQuery.trim() === '';

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const hasCcspService = p.ccspPrice && p.ccspPrice !== 'N/A' && p.ccspPrice !== 'No CCSP Service';
      const matchesCat = selectedCategory === 'ALL' || p.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.subtitle.toLowerCase().includes(searchQuery.toLowerCase());
      return hasCcspService && matchesCat && matchesSearch;
    });
  }, [selectedCategory, searchQuery, products]);

  const displayedProducts = filteredProducts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProducts.length;

  const handleApplyCCSP = (product: Product) => {
    const text = encodeURIComponent(
      `Hi ${CUCKOO_CONTACT.agentName},\nI would like to inquire about the CUCKOO Care Service Plan (CCSP) for:\nProduct: ${product.name} (${product.category})\nCCSP Service Package: ${product.ccspPrice}\n\nPlease share details on scheduled filter replacement & maintenance servicing. Thank you!`
    );
    window.open(`https://wa.me/${CUCKOO_CONTACT.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="space-y-8 animate-fade-in pb-12">
      
      {/* Dedicated CCSP Hero Header */}
      <div className="bg-gradient-to-r from-emerald-900 via-teal-800 to-slate-900 rounded-3xl text-white p-6 sm:p-10 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/30 border border-emerald-400/30 text-emerald-200 text-xs font-bold uppercase tracking-wider">
            <HeartHandshake className="w-3.5 h-3.5 text-emerald-300" /> CUCKOO Care Service Plan (CCSP)
          </div>

          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            CUCKOO Care Service Plan (CCSP) Packages
          </h1>

          <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed">
            Protect your family's health and maintain peak appliance performance with annual <strong className="text-white">CUCKOO Care Service Plans (CCSP)</strong>. Includes 100% original CUCKOO filter replacements, 15-point inspection, and high-pressure steam sterilization.
          </p>

          {/* CCSP Benefits Bullets */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div className="p-3 rounded-xl bg-white/10 border border-white/10 backdrop-blur-xs text-xs">
              <span className="font-extrabold text-white block mb-0.5">100% Genuine Filters</span>
              <span className="text-emerald-200 text-[11px]">Factory-sealed replacement filters</span>
            </div>
            <div className="p-3 rounded-xl bg-white/10 border border-white/10 backdrop-blur-xs text-xs">
              <span className="font-extrabold text-white block mb-0.5">Steam Sterilization</span>
              <span className="text-emerald-200 text-[11px]">Deep internal component cleaning</span>
            </div>
            <div className="p-3 rounded-xl bg-white/10 border border-white/10 backdrop-blur-xs text-xs">
              <span className="font-extrabold text-white block mb-0.5">15-Point Inspection</span>
              <span className="text-emerald-200 text-[11px]">Comprehensive check by CUCKOO Doctor</span>
            </div>
          </div>

          <div className="pt-2 text-xs text-emerald-200">
            Authorized Service Representative: <strong className="text-white">{CUCKOO_CONTACT.agentName} ({CUCKOO_CONTACT.phone})</strong>
          </div>
        </div>
      </div>

      {/* Category Filter Tabs & Search (Sticky on scroll) */}
      <div className="relative lg:sticky lg:top-[128px] z-30 bg-slate-50/95 backdrop-blur-md py-3 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 border-b border-slate-200/80 shadow-xs transition-all space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-emerald-600" />
            <h3 className="text-base font-extrabold text-slate-900">
              Filter CCSP Service Packages ({filteredProducts.length} Models)
            </h3>
          </div>

          <div className="relative max-w-xs w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                const val = e.target.value;
                setSearchQuery(val);
                setVisibleCount(selectedCategory === 'ALL' && val.trim() === '' ? 7 : 9);
              }}
              placeholder="Search CCSP packages..."
              className="w-full bg-white border border-slate-200 rounded-xl pl-9 pr-3 py-1.5 text-xs text-slate-800 placeholder-slate-400 outline-none focus:ring-2 focus:ring-emerald-100"
            />
          </div>
        </div>

        {/* Scrollable Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {CATEGORIES_LIST.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.id);
                setVisibleCount(cat.id === 'ALL' && searchQuery.trim() === '' ? 7 : 9);
              }}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all border shrink-0 cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
                  : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
              }`}
            >
              {cat.label} ({cat.count})
            </button>
          ))}
        </div>
      </div>

      {/* CCSP Products with Promotion Columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Promotional Column Cards: New Launch and Top Pick */}
        {showPromoCards && [
          <PromoCard key="ccsp-promo-new-launch" variant="NEW_LAUNCH" />,
          <PromoCard key="ccsp-promo-top-pick" variant="TOP_PICK" />
        ]}

        {displayedProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all overflow-hidden flex flex-col justify-between group"
          >
            <div>
              {/* Image Container with CCSP Pill */}
              <div className="relative aspect-4/3 bg-slate-100 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-emerald-700 text-white text-[10px] font-black uppercase tracking-wider shadow-xs">
                  {product.category}
                </span>

                <div className="absolute bottom-3 right-3 bg-emerald-600 text-white px-3 py-1 rounded-xl text-xs font-black shadow-md">
                  CCSP: {product.ccspPrice}
                </div>
              </div>

              {/* Body */}
              <div className="p-5 space-y-3">
                <div>
                  <h3 className="text-base font-extrabold text-slate-900 group-hover:text-emerald-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5 line-clamp-2">
                    {product.subtitle}
                  </p>
                </div>

                {/* CCSP Details Highlight Box */}
                <div className="p-3 rounded-xl bg-emerald-50/80 border border-emerald-100 space-y-1.5 text-xs">
                  <div className="flex items-center justify-between font-bold text-slate-900">
                    <span>CCSP Annual Rate</span>
                    <span className="text-base font-black text-emerald-700">{product.ccspPrice}</span>
                  </div>
                  <div className="text-[11px] text-slate-600 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Includes periodic natural care filter changes</span>
                  </div>
                </div>

                {/* Key Features */}
                <div className="space-y-1 text-xs text-slate-600">
                  {product.features.slice(0, 3).map((feat, i) => (
                    <div key={i} className="flex items-center gap-1.5 truncate">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                      <span className="truncate">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="p-5 pt-0 space-y-2">
              <button
                onClick={() => handleApplyCCSP(product)}
                className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Book CCSP Service via {CUCKOO_CONTACT.agentName}</span>
              </button>

              <button
                onClick={() => onSelectProduct(product)}
                className="w-full py-2 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center justify-center gap-1 transition-colors"
              >
                <Info className="w-3.5 h-3.5 text-slate-500" />
                <span>View Full Product Specs</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* See More Button */}
      {hasMore && (
        <div className="text-center pt-4">
          <button
            onClick={() => setVisibleCount((prev) => prev + 9)}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm shadow-md shadow-emerald-200 transition-all transform active:scale-95"
          >
            <span>See More CCSP Packages ({filteredProducts.length - visibleCount} Remaining)</span>
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};
