import React, { useState, useEffect } from 'react';
import { Product, ProductCategory, RentalPlanOption, OutrightPlanOption } from '../types';
import { CATEGORIES_LIST } from '../data/cuckooData';
import { X, Plus, Trash2, Check, Sparkles, AlertCircle, Image as ImageIcon, Video, Tag, Upload, Eye } from 'lucide-react';
import { UserRole } from '../lib/authStore';

interface ProductEditModalProps {
  isOpen: boolean;
  product: Product | null; // null = Add New Product
  role: UserRole;
  onClose: () => void;
  onSave: (product: Product) => void;
}

// Preset product image URLs for convenience
const PRESET_IMAGES = [
  { label: 'Water Purifier (King Top)', url: '/images/product-placeholder.svg' },
  { label: 'Outdoor Filter (Prime X)', url: '/images/product-placeholder.svg' },
  { label: 'Air Purifier (C+)', url: '/images/product-placeholder.svg' },
  { label: 'Massage Chair (Bespoke)', url: '/images/product-placeholder.svg' },
  { label: 'Airconditioner (Vita S)', url: '/images/product-placeholder.svg' },
  { label: 'Mattress (A-Series)', url: '/images/product-placeholder.svg' },
  { label: 'Rice Cooker (P10)', url: '/images/product-placeholder.svg' },
  { label: 'Samsung Smart TV / Washer', url: '/images/product-placeholder.svg' },
];

export const ProductEditModal: React.FC<ProductEditModalProps> = ({
  isOpen,
  product,
  role,
  onClose,
  onSave,
}) => {
  const [formData, setFormData] = useState<Partial<Product>>({
    id: '',
    name: '',
    category: 'WATER PURIFIER',
    subtitle: '',
    description: '',
    image: '',
    rentalPrice: 'RM 60 / month',
    outrightPrice: 'RM 3,200',
    ccspPrice: 'RM 450 / year',
    popular: false,
    tag: '',
    features: ['Instant Hot & Cold Water', '6-Stage Filtration System'],
    rentalPlans: [],
    outrightPlans: [],
    specs: { Origin: 'Made in Korea', Warranty: '1 Year Full Warranty' },
    youtubeUrl: '',
    youtubeEmbedId: '',
  });

  const [featureInput, setFeatureInput] = useState('');
  const [specKey, setSpecKey] = useState('');
  const [specValue, setSpecValue] = useState('');

  const handleImageFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      alert('仅支持上传图片文件。');
      event.target.value = '';
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const result = typeof reader.result === 'string' ? reader.result : '';
      setFormData((prev) => ({ ...prev, image: result }));
    };
    reader.readAsDataURL(file);
    event.target.value = '';
  };

  const handleClearImage = () => {
    setFormData((prev) => ({ ...prev, image: '' }));
  };

  useEffect(() => {
    if (product) {
      setFormData({ ...product });
    } else {
      // New product defaults
      const randomId = 'P_' + Date.now().toString().slice(-6);
      setFormData({
        id: randomId,
        name: '',
        category: 'WATER PURIFIER',
        subtitle: 'Official CUCKOO Smart Appliance',
        description: 'Premium CUCKOO product with multi-stage filtration and flexible payment plans.',
        image: PRESET_IMAGES[0].url,
        rentalPrice: 'RM 60 / month',
        outrightPrice: 'RM 2,800',
        ccspPrice: 'RM 400 / year',
        popular: false,
        tag: 'NEW',
        features: ['Instant Temperature Control', 'Energy Saving Smart Sensor', 'Free Service & Filter Replacement'],
        rentalPlans: [
          { planName: 'Gooodplan (36 Months)', monthlyRate: 80, months: 36, customerType: 'New Customer' },
          { planName: 'Gooodplan (60 Months)', monthlyRate: 60, months: 60, customerType: 'All Customers' },
        ],
        outrightPlans: [
          { optionName: 'Standard Outright Purchase', outrightPrice: 'RM 2,800', perks: 'Includes 1 Year Free Service' }
        ],
        specs: { Origin: 'Made in Korea', Power: '500W', Material: 'Antibacterial Stainless Steel' },
        youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        youtubeEmbedId: '',
      });
    }
  }, [product, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name?.trim()) {
      alert('请输入产品名称 (Product Name)');
      return;
    }

    const finalProduct: Product = {
      id: formData.id || 'P_' + Date.now().toString().slice(-6),
      name: formData.name.trim(),
      category: (formData.category as ProductCategory) || 'WATER PURIFIER',
      subtitle: formData.subtitle || '',
      description: formData.description || '',
      image: formData.image || PRESET_IMAGES[0].url,
      rentalPrice: formData.rentalPrice || 'N/A',
      rentalPlans: formData.rentalPlans || [],
      outrightPrice: formData.outrightPrice || 'N/A',
      outrightPlans: formData.outrightPlans || [],
      ccspPrice: formData.ccspPrice || 'N/A',
      features: formData.features || [],
      popular: Boolean(formData.popular),
      tag: formData.tag || '',
      youtubeUrl: formData.youtubeUrl || '',
      youtubeEmbedId: formData.youtubeEmbedId || '',
      specs: formData.specs || {},
    };

    onSave(finalProduct);
    onClose();
  };

  const handleAddFeature = () => {
    if (featureInput.trim()) {
      setFormData((prev) => ({
        ...prev,
        features: [...(prev.features || []), featureInput.trim()],
      }));
      setFeatureInput('');
    }
  };

  const handleRemoveFeature = (idx: number) => {
    setFormData((prev) => ({
      ...prev,
      features: (prev.features || []).filter((_, i) => i !== idx),
    }));
  };

  const handleAddSpec = () => {
    if (specKey.trim() && specValue.trim()) {
      setFormData((prev) => ({
        ...prev,
        specs: { ...(prev.specs || {}), [specKey.trim()]: specValue.trim() },
      }));
      setSpecKey('');
      setSpecValue('');
    }
  };

  const handleRemoveSpec = (key: string) => {
    setFormData((prev) => {
      const copy = { ...(prev.specs || {}) };
      delete copy[key];
      return { ...prev, specs: copy };
    });
  };

  // Add rental plan
  const handleAddRentalPlan = () => {
    const newPlan: RentalPlanOption = {
      planName: 'Gooodplan Option',
      monthlyRate: 70,
      months: 60,
      customerType: 'All Customers',
    };
    setFormData((prev) => ({
      ...prev,
      rentalPlans: [...(prev.rentalPlans || []), newPlan],
    }));
  };

  const handleUpdateRentalPlan = (index: number, field: keyof RentalPlanOption, value: any) => {
    setFormData((prev) => {
      const updated = [...(prev.rentalPlans || [])];
      updated[index] = { ...updated[index], [field]: value };
      return { ...prev, rentalPlans: updated };
    });
  };

  const handleRemoveRentalPlan = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      rentalPlans: (prev.rentalPlans || []).filter((_, i) => i !== index),
    }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-fade-in">
      <div className="relative w-full max-w-3xl my-8 bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden text-slate-100 flex flex-col max-h-[90vh]">
        
        {/* Modal Header */}
        <div className="px-6 py-4 bg-slate-800 border-b border-slate-700 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2 text-indigo-400 font-black text-sm">
            <Sparkles className="w-5 h-5" />
            <span>{product ? '编辑产品 (Edit Product)' : '添加新产品 (Add New Product)'}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Form Content */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6 overflow-y-auto grow">
          
          {/* Basic Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">
                产品 ID (Product ID) *
              </label>
              <input
                type="text"
                value={formData.id || ''}
                onChange={(e) => setFormData({ ...formData, id: e.target.value })}
                disabled={Boolean(product)} // ID locked when editing
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs font-mono disabled:opacity-50"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">
                产品分类 (Category) *
              </label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value as ProductCategory })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs font-bold"
              >
                {CATEGORIES_LIST.filter((c) => c.id !== 'ALL').map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.label} ({cat.id})
                  </option>
                ))}
              </select>
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs font-bold text-slate-300 mb-1">
                产品全称 (Product Name) *
              </label>
              <input
                type="text"
                value={formData.name || ''}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="例如: CUCKOO KING TOP 2.0"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm font-black"
                required
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs font-bold text-slate-300 mb-1">
                副标题 (Subtitle)
              </label>
              <input
                type="text"
                value={formData.subtitle || ''}
                onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                placeholder="例如: Mild Alkaline Water Purifier"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs"
              />
            </div>
          </div>

          {/* Pricing & Tag */}
          <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-4">
            <h4 className="text-xs font-bold text-indigo-300 uppercase tracking-wider flex items-center gap-1.5">
              <Tag className="w-4 h-4" /> 价格与特色标记 (Pricing & Promotion Tags)
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-[11px] text-slate-400 mb-1">月租价格 (Rental Price Display)</label>
                <input
                  type="text"
                  value={formData.rentalPrice || ''}
                  onChange={(e) => setFormData({ ...formData, rentalPrice: e.target.value })}
                  placeholder="RM 60 / month"
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs font-bold"
                />
              </div>

              <div>
                <label className="block text-[11px] text-slate-400 mb-1">买断价格 (Outright Price)</label>
                <input
                  type="text"
                  value={formData.outrightPrice || ''}
                  onChange={(e) => setFormData({ ...formData, outrightPrice: e.target.value })}
                  placeholder="RM 3,200"
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs font-bold"
                />
              </div>

              <div>
                <label className="block text-[11px] text-slate-400 mb-1">年服务费 (CCSP Price)</label>
                <input
                  type="text"
                  value={formData.ccspPrice || ''}
                  onChange={(e) => setFormData({ ...formData, ccspPrice: e.target.value })}
                  placeholder="RM 450 / year"
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs"
                />
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2 border-t border-slate-700/60">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="popularCheck"
                  checked={Boolean(formData.popular)}
                  onChange={(e) => setFormData({ ...formData, popular: e.target.checked })}
                  className="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500 bg-slate-950 border-slate-700"
                />
                <label htmlFor="popularCheck" className="text-xs font-bold text-amber-300">
                  设置为热销旗舰 (Mark as Popular)
                </label>
              </div>

              <div className="flex items-center gap-2">
                <label className="text-xs text-slate-300">促销标签 (Tag):</label>
                <input
                  type="text"
                  value={formData.tag || ''}
                  onChange={(e) => setFormData({ ...formData, tag: e.target.value })}
                  placeholder="HOT / NEW / PROMO"
                  className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-700 text-white text-xs uppercase font-mono w-28"
                />
              </div>
            </div>
          </div>

          {/* Image & Video */}
          <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-3">
            <h4 className="text-xs font-bold text-indigo-300 uppercase tracking-wider flex items-center gap-1.5">
              <ImageIcon className="w-4 h-4" /> 产品图片与视频 (Image & Video URL)
            </h4>

            <div>
              <label className="block text-[11px] text-slate-400 mb-1">图片链接 (Image URL)</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={formData.image || ''}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  placeholder="https://..."
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs font-mono"
                />
                <label className="inline-flex items-center gap-1 px-3 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-[11px] font-bold cursor-pointer whitespace-nowrap">
                  <Upload className="w-3.5 h-3.5" />
                  Upload
                  <input type="file" accept="image/*" className="hidden" onChange={handleImageFileSelect} />
                </label>
                {formData.image && (
                  <button
                    type="button"
                    onClick={handleClearImage}
                    className="px-3 py-2 rounded-xl bg-red-700/80 hover:bg-red-600 text-white text-[11px] font-bold whitespace-nowrap"
                  >
                    Remove
                  </button>
                )}
              </div>
            </div>

            {formData.image && (
              <div className="rounded-xl border border-slate-700 bg-slate-950 p-2">
                <div className="mb-2 flex items-center gap-2 text-[11px] text-slate-400">
                  <Eye className="w-3.5 h-3.5" />
                  Preview
                </div>
                <img
                  src={formData.image}
                  alt="Product preview"
                  className="max-h-40 w-full object-contain rounded-lg border border-slate-700 bg-slate-900"
                />
              </div>
            )}

            {/* Image Preset Chips */}
            <div>
              <div className="text-[11px] text-slate-400 mb-1.5">或选择常用预设示例图片:</div>
              <div className="flex flex-wrap gap-1.5">
                {PRESET_IMAGES.map((preset, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setFormData({ ...formData, image: preset.url })}
                    className="px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-700 border border-slate-700 text-slate-300 hover:text-white text-[11px] transition-colors"
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-[11px] text-slate-400 mb-1">YouTube 视频链接 (YouTube URL)</label>
              <input
                type="text"
                value={formData.youtubeUrl || ''}
                onChange={(e) => setFormData({ ...formData, youtubeUrl: e.target.value })}
                placeholder="https://www.youtube.com/watch?v=..."
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs font-mono"
              />
            </div>
          </div>

          {/* Rental Plans List */}
          <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold text-indigo-300 uppercase tracking-wider">
                月租方案选项 (Rental Plan Options)
              </h4>
              <button
                type="button"
                onClick={handleAddRentalPlan}
                className="px-2.5 py-1 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold flex items-center gap-1 cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" /> 增加月租方案
              </button>
            </div>

            {formData.rentalPlans && formData.rentalPlans.length > 0 ? (
              <div className="space-y-2">
                {formData.rentalPlans.map((plan, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-950 border border-slate-800 grid grid-cols-1 sm:grid-cols-4 gap-2 items-center">
                    <input
                      type="text"
                      value={plan.planName}
                      onChange={(e) => handleUpdateRentalPlan(idx, 'planName', e.target.value)}
                      placeholder="Plan Name"
                      className="px-2 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs"
                    />
                    <input
                      type="number"
                      value={plan.monthlyRate}
                      onChange={(e) => handleUpdateRentalPlan(idx, 'monthlyRate', Number(e.target.value))}
                      placeholder="Monthly Rate (RM)"
                      className="px-2 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs"
                    />
                    <input
                      type="number"
                      value={plan.months}
                      onChange={(e) => handleUpdateRentalPlan(idx, 'months', Number(e.target.value))}
                      placeholder="Months (e.g. 60)"
                      className="px-2 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs"
                    />
                    <div className="flex items-center justify-between gap-2">
                      <input
                        type="text"
                        value={plan.customerType}
                        onChange={(e) => handleUpdateRentalPlan(idx, 'customerType', e.target.value)}
                        placeholder="Customer Type"
                        className="px-2 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs grow"
                      />
                      <button
                        type="button"
                        onClick={() => handleRemoveRentalPlan(idx)}
                        className="p-1.5 rounded-lg text-red-400 hover:bg-red-950 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-xs text-slate-500 italic">暂无月租方案，点击右上角添加。</p>
            )}
          </div>

          {/* Features Bullets */}
          <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-3">
            <h4 className="text-xs font-bold text-indigo-300 uppercase tracking-wider">
              产品核心卖点 (Key Features)
            </h4>

            <div className="flex gap-2">
              <input
                type="text"
                value={featureInput}
                onChange={(e) => setFeatureInput(e.target.value)}
                placeholder="添加一项新卖点描述..."
                className="grow px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs"
              />
              <button
                type="button"
                onClick={handleAddFeature}
                className="px-3 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold flex items-center gap-1 cursor-pointer"
              >
                <Plus className="w-4 h-4" /> 添加
              </button>
            </div>

            <div className="flex flex-wrap gap-2 pt-1">
              {formData.features?.map((feat, idx) => (
                <div
                  key={idx}
                  className="px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-700 text-slate-200 text-xs flex items-center gap-2"
                >
                  <span>{feat}</span>
                  <button
                    type="button"
                    onClick={() => handleRemoveFeature(idx)}
                    className="text-red-400 hover:text-red-300"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Specs Key-Value */}
          <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-3">
            <h4 className="text-xs font-bold text-indigo-300 uppercase tracking-wider">
              规格参数 (Specifications)
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <input
                type="text"
                value={specKey}
                onChange={(e) => setSpecKey(e.target.value)}
                placeholder="参数名 (如 Origin)"
                className="px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs"
              />
              <input
                type="text"
                value={specValue}
                onChange={(e) => setSpecValue(e.target.value)}
                placeholder="参数值 (如 South Korea)"
                className="px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs"
              />
              <button
                type="button"
                onClick={handleAddSpec}
                className="px-3 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold flex items-center justify-center gap-1 cursor-pointer"
              >
                <Plus className="w-4 h-4" /> 添加规格
              </button>
            </div>

            <div className="space-y-1.5 pt-1">
              {Object.entries(formData.specs || {}).map(([key, val]) => (
                <div key={key} className="flex items-center justify-between px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs">
                  <span className="font-bold text-slate-300">{key}:</span>
                  <div className="flex items-center gap-3">
                    <span className="text-slate-200">{val}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveSpec(key)}
                      className="text-red-400 hover:text-red-300"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Modal Actions */}
          <div className="pt-4 border-t border-slate-800 flex items-center justify-end gap-3 shrink-0">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold transition-colors cursor-pointer"
            >
              取消 (Cancel)
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-extrabold flex items-center gap-1.5 shadow-lg transition-all cursor-pointer"
            >
              <Check className="w-4 h-4" />
              <span>保存并更新 (Save Changes)</span>
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};
