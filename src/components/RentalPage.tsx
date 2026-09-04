import React, { useState, useMemo, useEffect } from 'react';
import { CUCKOO_CONTACT, CATEGORIES_LIST } from '../data/cuckooData';
import { Product, ProductCategory } from '../types';
import { getStoredProducts } from '../lib/productStore';
import { Zap, ShieldCheck, CheckCircle2, MessageCircle, Info, ChevronDown, Sparkles, Filter, Search } from 'lucide-react';
import { PromoCard } from './NewLaunchPromoCard';

interface RentalPageProps {
  onSelectProduct: (product: Product) => void;
  onOpenCalculator: () => void;
}

export const RentalPage: React.FC<RentalPageProps> = ({ onSelectProduct, onOpenCalculator }) => {
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
      const hasRentalPlan = p.rentalPrice && p.rentalPrice !== 'Outright Only' && p.rentalPrice !== 'N/A';
      const matchesCat = selectedCategory === 'ALL' || p.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.subtitle.toLowerCase().includes(searchQuery.toLowerCase());
      return hasRentalPlan && matchesCat && matchesSearch;
    });
  }, [selectedCategory, searchQuery, products]);

  const displayedProducts = filteredProducts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProducts.length;

  const handleApplyRental = (product: Product) => {
    const text = encodeURIComponent(
      `Hi ${CUCKOO_CONTACT.agentName},\nI would like to apply for the Monthly Rental Plan for:\nProduct: ${product.name} (${product.category})\nMonthly Rate: ${product.rentalPrice}\n\nPlease guide me with the document requirement and registration process. Thank you!`
    );
    window.open(`https://wa.me/${CUCKOO_CONTACT.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="space-y-8 animate-fade-in pb-12">
      
      {/* Dedicated Rental Hero Header */}
      <div className="bg-gradient-to-r from-indigo-900 via-indigo-800 to-slate-900 rounded-3xl text-white p-6 sm:p-10 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/30 border border-indigo-400/30 text-indigo-200 text-xs font-bold uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5 fill-indigo-300" /> Dedicated Monthly Rental Plans
          </div>

          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            CUCKOO Flexible Monthly Rental Plans
          </h1>

          <p className="text-sm sm:text-base text-indigo-100/90 leading-relaxed">
            Enjoy premium CUCKOO appliances with <strong className="text-white font-bold">Low Advance Payment & RM0 Processing Fees</strong>. Every rental plan includes free periodic filter replacements, sanitization service, and 100% full warranty coverage throughout your tenure.
          </p>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-500/20 border border-emerald-400/30 text-emerald-200 text-xs font-extrabold backdrop-blur-xs">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Free Every 4/6 months Services</span>
          </div>

          {/* Rental Benefits Bullets */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div className="p-3 rounded-xl bg-white/10 border border-white/10 backdrop-blur-xs text-xs">
              <span className="font-extrabold text-white block mb-0.5">Low Advance Payment</span>
              <span className="text-indigo-200 text-[11px]">RM 0 Processing & Registration Fees</span>
            </div>
            <div className="p-3 rounded-xl bg-white/10 border border-white/10 backdrop-blur-xs text-xs">
              <span className="font-extrabold text-white block mb-0.5">Free Every 4/6 Months Services</span>
              <span className="text-indigo-200 text-[11px]">Includes scheduled filter & steam care</span>
            </div>
            <div className="p-3 rounded-xl bg-white/10 border border-white/10 backdrop-blur-xs text-xs">
              <span className="font-extrabold text-white block mb-0.5">Full Warranty Cover</span>
              <span className="text-indigo-200 text-[11px]">Free parts & maintenance coverage</span>
            </div>
          </div>

          <div className="pt-2 flex items-center gap-3">
            <button
              onClick={onOpenCalculator}
              className="px-5 py-2.5 rounded-xl bg-white hover:bg-indigo-50 text-indigo-900 font-extrabold text-xs shadow-md transition-colors"
            >
              Calculate Tenure Options
            </button>
            <span className="text-xs text-indigo-200">
              Agent Contact: <strong className="text-white">{CUCKOO_CONTACT.agentName} ({CUCKOO_CONTACT.phone})</strong>
            </span>
          </div>
        </div>
      </div>

      {/* Category Filter Tabs & Search */}
      <div className="relative z-30 bg-slate-50/95 backdrop-blur-md py-3 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 border-b border-slate-200/80 shadow-xs transition-all space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-indigo-600" />
            <h3 className="text-base font-extrabold text-slate-900">
              Filter Rental Plans ({filteredProducts.length} Models)
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
              placeholder="Search rental models..."
              className="w-full bg-white border border-slate-200 rounded-xl pl-9 pr-3 py-1.5 text-xs text-slate-800 placeholder-slate-400 outline-none focus:ring-2 focus:ring-indigo-100"
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
                  ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm'
                  : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
              }`}
            >
              {cat.label} ({cat.count})
            </button>
          ))}
        </div>
      </div>

      {/* Rental Products with Promotion Columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Promotional Column Cards: New Launch and Top Pick */}
        {showPromoCards && [
          <PromoCard key="rental-promo-new-launch" variant="NEW_LAUNCH" onOpenCalculator={onOpenCalculator} />,
          <PromoCard key="rental-promo-top-pick" variant="TOP_PICK" onOpenCalculator={onOpenCalculator} />
        ]}

        {displayedProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-indigo-300 transition-all overflow-hidden flex flex-col justify-between group"
          >
            <div>
              {/* Image Container with Rental Pill */}
              <div className="relative aspect-4/3 bg-slate-100 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-indigo-600 text-white text-[10px] font-black uppercase tracking-wider shadow-xs">
                  {product.category}
                </span>

                <div className="absolute bottom-3 right-3 bg-slate-900/90 backdrop-blur-md text-white px-3 py-1 rounded-xl text-xs font-black shadow-md">
                  Rental: {product.rentalPrice}
                </div>
              </div>

              {/* Body */}
              <div className="p-5 space-y-3">
                <div>
                  <h3 className="text-base font-extrabold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5 line-clamp-2">
                    {product.subtitle}
                  </p>
                </div>

                {/* Rental Details Highlight Box */}
                <div className="p-3 rounded-xl bg-indigo-50/70 border border-indigo-100/80 space-y-1.5 text-xs">
                  <div className="flex items-center justify-between font-bold text-indigo-900">
                    <span>Monthly Rental Rate</span>
                    <span className="text-sm font-black text-indigo-600">{product.rentalPrice}</span>
                  </div>
                  <div className="text-[11px] text-slate-600 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Includes free 4-month natural care service</span>
                  </div>
                </div>

                {/* Key Features */}
                <div className="space-y-1 text-xs text-slate-600">
                  {product.features.slice(0, 3).map((feat, i) => (
                    <div key={i} className="flex items-center gap-1.5 truncate">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                      <span className="truncate">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="p-5 pt-0 space-y-2">
              <button
                onClick={() => handleApplyRental(product)}
                className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Apply Rental via {CUCKOO_CONTACT.agentName}</span>
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
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-sm shadow-md shadow-indigo-200 transition-all transform active:scale-95"
          >
            <span>See More Rental Models ({filteredProducts.length - visibleCount} Remaining)</span>
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};
