import React, { useState, useRef, useEffect, useMemo } from 'react';
import { Search, X, Sparkles, ChevronRight, ArrowRight, Tag } from 'lucide-react';
import { Product, ProductCategory } from '../types';
import { getStoredProducts } from '../lib/productStore';

interface SmartSearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onSelectProduct?: (product: Product) => void;
  onScrollToCatalog?: () => void;
  placeholder?: string;
  variant?: 'navbar' | 'catalog';
}

const ALIAS_MAP: Record<string, ProductCategory[]> = {
  water: ['WATER PURIFIER', 'OUTDOOR FILTER'],
  purifier: ['WATER PURIFIER', 'AIR PURIFIER'],
  air: ['AIR PURIFIER', 'AIRCONDITIONER'],
  aircond: ['AIRCONDITIONER'],
  ac: ['AIRCONDITIONER'],
  sejuk: ['AIRCONDITIONER', 'WATER PURIFIER'],
  panas: ['WATER PURIFIER'],
  alkaline: ['WATER PURIFIER'],
  alkali: ['WATER PURIFIER'],
  tilam: ['MATTRESS', 'DAYBED'],
  bed: ['MATTRESS', 'DAYBED'],
  mattress: ['MATTRESS'],
  samsung: ['SAMSUNG PRODUCT'],
  tv: ['SAMSUNG PRODUCT'],
  fridge: ['SAMSUNG PRODUCT'],
  peti: ['SAMSUNG PRODUCT'],
  washer: ['SAMSUNG PRODUCT'],
  dryer: ['SAMSUNG PRODUCT'],
  cooker: ['RICE COOKER'],
  periuk: ['RICE COOKER'],
  nasi: ['RICE COOKER'],
  outdoor: ['OUTDOOR FILTER'],
  massage: ['MASSAGE CHAIR'],
  urut: ['MASSAGE CHAIR'],
  treadmill: ['TREADMILL'],
  ice: ['WATER PURIFIER'],
  ais: ['WATER PURIFIER'],
  filter: ['WATER PURIFIER', 'OUTDOOR FILTER', 'AIR PURIFIER']
};

export const QUICK_TAGS = [
  { label: 'Water Purifier', query: 'water' },
  { label: 'Air Purifier', query: 'air' },
  { label: 'Air Conditioner', query: 'aircond' },
  { label: 'Mattress & Bed', query: 'tilam' },
  { label: 'Samsung Series', query: 'samsung' },
  { label: 'Ice Water Purifier', query: 'ice' }
];

export function getSmartSearchResults(queryStr: string): Product[] {
  if (!queryStr.trim()) return [];

  const query = queryStr.toLowerCase().trim();

  let aliasCategories: ProductCategory[] = [];
  Object.keys(ALIAS_MAP).forEach((alias) => {
    if (query.includes(alias) || alias.includes(query)) {
      aliasCategories.push(...ALIAS_MAP[alias]);
    }
  });

  return getStoredProducts().filter((p) => {
    const nameMatch = p.name.toLowerCase().includes(query);
    const catMatch = p.category.toLowerCase().includes(query);
    const subMatch = p.subtitle.toLowerCase().includes(query);
    const descMatch = p.description.toLowerCase().includes(query);
    const tagMatch = p.tag?.toLowerCase().includes(query);
    const featMatch = p.features.some((f) => f.toLowerCase().includes(query));
    const aliasMatch = aliasCategories.includes(p.category);

    return nameMatch || catMatch || subMatch || descMatch || tagMatch || featMatch || aliasMatch;
  });
}

export const SmartSearchBar: React.FC<SmartSearchBarProps> = ({
  searchQuery,
  setSearchQuery,
  onSelectProduct,
  onScrollToCatalog,
  placeholder = "Search for CUCKOO water purifiers, air purifiers, mattresses, air conditioners, and home appliances...",
  variant = 'catalog'
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const searchResults = useMemo(() => {
    return getSmartSearchResults(searchQuery);
  }, [searchQuery]);

  // Click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelectTag = (query: string) => {
    setSearchQuery(query);
    setIsOpen(true);
    if (onScrollToCatalog) {
      onScrollToCatalog();
    }
  };

  const handleProductClick = (product: Product) => {
    setIsOpen(false);
    if (onSelectProduct) {
      onSelectProduct(product);
    }
  };

  const handleViewAllResults = () => {
    setIsOpen(false);
    if (onScrollToCatalog) {
      onScrollToCatalog();
    }
  };

  const handleClear = () => {
    setSearchQuery('');
    setIsOpen(false);
  };

  const isNavbar = variant === 'navbar';

  return (
    <div ref={containerRef} className="relative w-full max-w-2xl md:max-w-3xl lg:max-w-4xl">
      {/* Input Field with Search Logo */}
      <div className="relative flex items-center">
        {/* Search Logo Icon */}
        <div className={`absolute left-3.5 sm:left-4 flex items-center justify-center pointer-events-none transition-colors ${
          searchQuery ? 'text-indigo-600' : 'text-slate-400'
        }`}>
          <Search className={isNavbar ? "w-4 h-4 sm:w-5 sm:h-5" : "w-4 h-4 sm:w-5 sm:h-5"} />
        </div>

        <input
          type="text"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          placeholder={placeholder}
          className={`w-full pl-10 sm:pl-11 pr-10 rounded-2xl border text-xs sm:text-sm bg-white font-medium transition-all focus:outline-none ${
            isNavbar
              ? 'py-2.5 sm:py-3 border-slate-200/90 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 shadow-2xs'
              : 'py-3 sm:py-3.5 border-slate-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 shadow-xs'
          }`}
        />

        {/* Clear Button (X) */}
        {searchQuery ? (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-3.5 p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
            title="Clear search"
          >
            <X className="w-4 h-4" />
          </button>
        ) : (
          <div className="absolute right-3.5 hidden sm:flex items-center gap-1 text-[10px] font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200 pointer-events-none">
            <span>⌘</span>
            <span>K</span>
          </div>
        )}
      </div>

      {/* Live Auto-Complete Dropdown */}
      {isOpen && (
        <div className="absolute left-0 right-0 sm:-left-2 sm:-right-2 md:-left-4 md:-right-4 top-full mt-2 bg-white/98 backdrop-blur-md border border-slate-200 rounded-2xl shadow-2xl z-50 overflow-hidden animate-fadeIn space-y-2 min-w-full sm:min-w-[500px] md:min-w-[620px]">
          
          {/* Top Status Header */}
          {searchQuery.trim() ? (
            <div className="px-5 py-3 bg-slate-50/90 border-b border-slate-100 flex items-center justify-between text-xs sm:text-sm">
              <span className="font-bold text-slate-700 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-indigo-600 shrink-0" />
                <span>Results for <strong className="text-indigo-600">"{searchQuery}"</strong></span>
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 text-xs font-extrabold border border-indigo-100">
                {searchResults.length} {searchResults.length === 1 ? 'model' : 'models'} found
              </span>
            </div>
          ) : (
            <div className="px-5 py-3 bg-slate-50/90 border-b border-slate-100 flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-700">
              <Tag className="w-4 h-4 text-indigo-600 shrink-0" />
              <span>Popular Quick Search Categories:</span>
            </div>
          )}

          {/* Quick Search Chips */}
          <div className="px-4 py-2 flex flex-wrap gap-2">
            {QUICK_TAGS.map((tag) => (
              <button
                key={tag.query}
                type="button"
                onClick={() => handleSelectTag(tag.query)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 border shadow-2xs ${
                  searchQuery.toLowerCase() === tag.query
                    ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                    : 'bg-slate-100/90 hover:bg-slate-200 text-slate-700 border-slate-200/90'
                }`}
              >
                <span>{tag.label}</span>
              </button>
            ))}
          </div>

          {/* Results List */}
          {searchQuery.trim() !== '' && (
            <div className="max-h-72 overflow-y-auto divide-y divide-slate-100 py-1">
              {searchResults.length > 0 ? (
                searchResults.slice(0, 5).map((product) => (
                  <div
                    key={product.id}
                    onClick={() => handleProductClick(product)}
                    className="p-3 hover:bg-indigo-50/60 transition-colors flex items-center gap-3 cursor-pointer group"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-12 h-12 object-contain bg-slate-50 rounded-xl p-1 border border-slate-200 shrink-0 group-hover:scale-105 transition-transform"
                    />

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 mb-0.5">
                        <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[10px] font-extrabold uppercase tracking-wide truncate">
                          {product.category}
                        </span>
                        {product.tag && (
                          <span className="px-1.5 py-0.5 rounded-md bg-amber-100 text-amber-800 text-[9px] font-extrabold truncate">
                            {product.tag}
                          </span>
                        )}
                      </div>
                      <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 group-hover:text-indigo-600 transition-colors truncate">
                        {product.name}
                      </h4>
                      <p className="text-[11px] text-slate-500 truncate">
                        {product.subtitle}
                      </p>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="block text-xs font-black text-indigo-600">
                        {product.rentalPrice}
                      </span>
                      <span className="text-[10px] text-slate-400 font-bold flex items-center justify-end gap-0.5 group-hover:text-indigo-600">
                        View <ChevronRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-6 text-center space-y-2">
                  <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
                    <Search className="w-5 h-5" />
                  </div>
                  <p className="text-xs font-bold text-slate-700">
                    No products found for "{searchQuery}"
                  </p>
                  <p className="text-[11px] text-slate-500">
                    Try searching for <strong className="text-slate-800">water</strong>, <strong className="text-slate-800">air</strong>, <strong className="text-slate-800">tilam</strong> or <strong className="text-slate-800">samsung</strong>.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Footer Action */}
          {searchQuery.trim() !== '' && searchResults.length > 0 && (
            <div className="p-2 bg-slate-50 border-t border-slate-100 text-center">
              <button
                type="button"
                onClick={handleViewAllResults}
                className="w-full py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-xs flex items-center justify-center gap-1.5 shadow-xs transition-colors cursor-pointer"
              >
                <span>View All {searchResults.length} Products in Catalog</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

        </div>
      )}
    </div>
  );
};
