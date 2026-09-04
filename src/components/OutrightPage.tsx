import React, { useState, useMemo, useEffect } from 'react';
import { CUCKOO_CONTACT, CATEGORIES_LIST } from '../data/cuckooData';
import { Product, ProductCategory } from '../types';
import { getStoredProducts } from '../lib/productStore';
import { Award, ShieldCheck, CheckCircle2, MessageCircle, Info, ChevronDown, Sparkles, Filter, Search, Tag } from 'lucide-react';
import { PromoCard } from './NewLaunchPromoCard';

interface OutrightPageProps {
  onSelectProduct: (product: Product) => void;
}

export const OutrightPage: React.FC<OutrightPageProps> = ({ onSelectProduct }) => {
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
      const hasOutright = p.outrightPrice && p.outrightPrice !== 'N/A' && p.outrightPrice !== 'Not Available';
      const matchesCat = selectedCategory === 'ALL' || p.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.subtitle.toLowerCase().includes(searchQuery.toLowerCase());
      return hasOutright && matchesCat && matchesSearch;
    });
  }, [selectedCategory, searchQuery, products]);

  const displayedProducts = filteredProducts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProducts.length;

  const handleApplyOutright = (product: Product) => {
    const text = encodeURIComponent(
      `Hi ${CUCKOO_CONTACT.agentName},\nI would like to inquire about Outright Purchase for:\nProduct: ${product.name} (${product.category})\nOutright Price: ${product.outrightPrice}\n\nPlease share credit card 0% installment options & cash purchase promotions. Thank you!`
    );
    window.open(`https://wa.me/${CUCKOO_CONTACT.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="space-y-8 animate-fade-in pb-12">
      
      {/* Dedicated Outright Hero Header */}
      <div className="bg-gradient-to-r from-amber-900 via-amber-800 to-slate-900 rounded-3xl text-white p-6 sm:p-10 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-80 h-80 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/30 border border-amber-400/30 text-amber-200 text-xs font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5 text-amber-300" /> Outright Purchase Packages
          </div>

          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            CUCKOO Outright Purchase Deals
          </h1>

          <p className="text-sm sm:text-base text-amber-100/90 leading-relaxed">
            Own your CUCKOO products 100% upfront with exclusive cash discounts and <strong className="text-white">0% Credit Card Installment Plans</strong> up to 36 months. Every outright purchase comes with <strong className="text-white">1-Year FREE CUCKOO Natural Care Service</strong>.
          </p>

          {/* Outright Benefits Bullets */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div className="p-3 rounded-xl bg-white/10 border border-white/10 backdrop-blur-xs text-xs">
              <span className="font-extrabold text-white block mb-0.5">100% Product Ownership</span>
              <span className="text-amber-200 text-[11px]">No long-term rental contract</span>
            </div>
            <div className="p-3 rounded-xl bg-white/10 border border-white/10 backdrop-blur-xs text-xs">
              <span className="font-extrabold text-white block mb-0.5">1-Year Free Natural Care</span>
              <span className="text-amber-200 text-[11px]">Includes filters & servicing</span>
            </div>
            <div className="p-3 rounded-xl bg-white/10 border border-white/10 backdrop-blur-xs text-xs">
              <span className="font-extrabold text-white block mb-0.5">0% Easy Installments</span>
              <span className="text-amber-200 text-[11px]">Supported major bank cards</span>
            </div>
          </div>

          <div className="pt-2 text-xs text-amber-200">
            Consultant: <strong className="text-white">{CUCKOO_CONTACT.agentName} ({CUCKOO_CONTACT.phone})</strong>
          </div>
        </div>
      </div>

      {/* Category Filter Tabs & Search (Sticky on scroll) */}
      <div className="relative lg:sticky lg:top-[128px] z-30 bg-slate-50/95 backdrop-blur-md py-3 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 border-b border-slate-200/80 shadow-xs transition-all space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-amber-600" />
            <h3 className="text-base font-extrabold text-slate-900">
              Filter Outright Products ({filteredProducts.length} Models)
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
              placeholder="Search outright models..."
              className="w-full bg-white border border-slate-200 rounded-xl pl-9 pr-3 py-1.5 text-xs text-slate-800 placeholder-slate-400 outline-none focus:ring-2 focus:ring-amber-100"
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
                  ? 'bg-amber-600 text-white border-amber-600 shadow-sm'
                  : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
              }`}
            >
              {cat.label} ({cat.count})
            </button>
          ))}
        </div>
      </div>

      {/* Outright Products with Promotion Columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Promotional Column Cards: New Launch and Top Pick */}
        {showPromoCards && [
          <PromoCard key="outright-promo-new-launch" variant="NEW_LAUNCH" />,
          <PromoCard key="outright-promo-top-pick" variant="TOP_PICK" />
        ]}

        {displayedProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-amber-300 transition-all overflow-hidden flex flex-col justify-between group"
          >
            <div>
              {/* Image Container with Outright Pill */}
              <div className="relative aspect-4/3 bg-slate-100 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-slate-900 text-white text-[10px] font-black uppercase tracking-wider shadow-xs">
                  {product.category}
                </span>

                <div className="absolute bottom-3 right-3 bg-amber-500 text-slate-950 px-3 py-1 rounded-xl text-xs font-black shadow-md">
                  Outright: {product.outrightPrice}
                </div>
              </div>

              {/* Body */}
              <div className="p-5 space-y-3">
                <div>
                  <h3 className="text-base font-extrabold text-slate-900 group-hover:text-amber-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5 line-clamp-2">
                    {product.subtitle}
                  </p>
                </div>

                {/* Outright Details Highlight Box */}
                <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-100/80 space-y-1.5 text-xs">
                  <div className="flex items-center justify-between font-bold text-slate-900">
                    <span>Outright Purchase Price</span>
                    <span className="text-base font-black text-amber-700">{product.outrightPrice}</span>
                  </div>
                  <div className="text-[11px] text-slate-600 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Includes 1-Year Free Natural Care Service</span>
                  </div>
                </div>

                {/* Key Features */}
                <div className="space-y-1 text-xs text-slate-600">
                  {product.features.slice(0, 3).map((feat, i) => (
                    <div key={i} className="flex items-center gap-1.5 truncate">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                      <span className="truncate">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="p-5 pt-0 space-y-2">
              <button
                onClick={() => handleApplyOutright(product)}
                className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Inquire Outright via {CUCKOO_CONTACT.agentName}</span>
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
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-amber-600 hover:bg-amber-700 text-white font-extrabold text-sm shadow-md shadow-amber-200 transition-all transform active:scale-95"
          >
            <span>See More Outright Models ({filteredProducts.length - visibleCount} Remaining)</span>
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};
