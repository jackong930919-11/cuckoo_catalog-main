import React, { useState } from 'react';
import { CheckCircle2, MessageCircle, User, Phone, Mail, HelpCircle, Send, Sparkles } from 'lucide-react';
import { CUCKOO_CONTACT } from '../data/cuckooData';
import { saveBackgroundInquiry } from '../lib/inquiryStore';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    inquiries: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    if (name === 'contact') {
      const sanitized = value.replace(/[^0-9+]/g, '');
      const plusOnlyAtStart = sanitized.startsWith('+') ? '+' + sanitized.slice(1).replace(/\+/g, '') : sanitized.replace(/\+/g, '');
      setFormData(prev => ({ ...prev, [name]: plusOnlyAtStart }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }

    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name';
    }

    const normalizedContact = formData.contact.trim();
    const contactPattern = /^\+?[0-9]+$/;
    if (!normalizedContact) {
      newErrors.contact = 'Please enter your contact number';
    } else if (!contactPattern.test(normalizedContact)) {
      newErrors.contact = 'Contact number can only contain + and digits';
    }

    if (!formData.inquiries.trim()) {
      newErrors.inquiries = 'Please enter your inquiries';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Save inquiry automatically into background storage
    saveBackgroundInquiry({
      name: formData.name.trim(),
      contact: formData.contact.trim(),
      email: formData.email.trim(),
      inquiries: formData.inquiries.trim()
    });

    // Auto-send the inquiry to the sales WhatsApp number as a prefilled bot message
    handleWhatsAppSend();

    setIsSubmitted(true);
  };

  const handleWhatsAppSend = () => {
    let text = `*New Customer Inquiry via Website*\n\n`;
    text += `*Name:* ${formData.name}\n`;
    text += `*Contact:* ${formData.contact}\n`;
    if (formData.email.trim()) {
      text += `*Email:* ${formData.email}\n`;
    }
    text += `*Inquiries:* ${formData.inquiries}`;

    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${CUCKOO_CONTACT.whatsappNumber}?text=${encodedText}`, '_blank');
  };

  const handleReset = () => {
    setFormData({
      name: '',
      contact: '',
      email: '',
      inquiries: ''
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section id="customer-contact-form" className="py-12 bg-white border-t border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-2 mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" /> Customer Inquiry
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Customer Contact Form
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
            Have questions about CUCKOO water purifiers, rental plans, or latest promotions? Fill out the form below and Sales Agent <strong className="text-slate-800">{CUCKOO_CONTACT.agentName}</strong> will assist you directly.
          </p>
        </div>

        {/* Card Form */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm relative">

          {isSubmitted ? (
            <div className="text-center py-6 space-y-5 animate-fadeIn">
              <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <h3 className="text-xl font-black text-slate-900">
                  Thank You, {formData.name}!
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-md mx-auto">
                  Your inquiry has been recorded and sent to Sales Agent <strong>{CUCKOO_CONTACT.agentName}</strong> on WhatsApp.
                </p>
              </div>

              {/* Inquiry details summary */}
              <div className="bg-white rounded-2xl p-4 border border-slate-200/90 text-left text-xs space-y-2 max-w-lg mx-auto shadow-2xs">
                <div className="font-bold text-slate-900 border-b border-slate-100 pb-2">
                  <span>Submitted Details:</span>
                </div>
                <div>
                  <span className="text-slate-500 font-medium">Name:</span> <span className="font-bold text-slate-800">{formData.name}</span>
                </div>
                <div>
                  <span className="text-slate-500 font-medium">Contact:</span> <span className="font-bold text-slate-800">{formData.contact}</span>
                </div>
                {formData.email && (
                  <div>
                    <span className="text-slate-500 font-medium">Email Address:</span> <span className="font-bold text-slate-800">{formData.email}</span>
                  </div>
                )}
                <div>
                  <span className="text-slate-500 font-medium">Inquiries:</span>
                  <p className="font-medium text-slate-800 bg-slate-50 p-2.5 rounded-xl border border-slate-100 mt-1 whitespace-pre-wrap">
                    {formData.inquiries}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleWhatsAppSend}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20 transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Send via WhatsApp for Instant Response</span>
                </button>

                <button
                  type="button"
                  onClick={handleReset}
                  className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold text-xs transition-colors cursor-pointer"
                >
                  Submit Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Row 1: Name & Contact */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                
                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="name" className="block text-xs font-bold text-slate-800 flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-indigo-600" />
                    <span><span className="text-red-500 font-bold">*</span>Name:</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className={`w-full px-4 py-2.5 rounded-xl border text-xs sm:text-sm bg-white focus:outline-none transition-all ${
                      errors.name
                        ? 'border-red-400 ring-2 ring-red-100 bg-red-50/20'
                        : 'border-slate-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-[11px] font-semibold text-red-500">{errors.name}</p>
                  )}
                </div>

                {/* Contact */}
                <div className="space-y-1.5">
                  <label htmlFor="contact" className="block text-xs font-bold text-slate-800 flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5 text-indigo-600" />
                    <span><span className="text-red-500 font-bold">*</span>Contact:</span>
                  </label>
                  <input
                    type="tel"
                    id="contact"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    placeholder="Enter phone/mobile number (e.g. +60123456789)"
                    inputMode="numeric"
                    className={`w-full px-4 py-2.5 rounded-xl border text-xs sm:text-sm bg-white focus:outline-none transition-all ${
                      errors.contact
                        ? 'border-red-400 ring-2 ring-red-100 bg-red-50/20'
                        : 'border-slate-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100'
                    }`}
                  />
                  {errors.contact && (
                    <p className="text-[11px] font-semibold text-red-500">{errors.contact}</p>
                  )}
                </div>

              </div>

              {/* Email Address (Optional) */}
              <div className="space-y-1.5">
                <label htmlFor="email" className="block text-xs font-bold text-slate-800 flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Email Address:</span>
                  <span className="text-[11px] text-slate-400 font-normal">(Optional)</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email address (e.g. name@example.com)"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm bg-white focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 transition-all"
                />
              </div>

              {/* Inquiries */}
              <div className="space-y-1.5">
                <label htmlFor="inquiries" className="block text-xs font-bold text-slate-800 flex items-center gap-1">
                  <HelpCircle className="w-3.5 h-3.5 text-indigo-600" />
                  <span><span className="text-red-500 font-bold">*</span>Inquiries:</span>
                </label>
                <textarea
                  id="inquiries"
                  name="inquiries"
                  rows={4}
                  value={formData.inquiries}
                  onChange={handleChange}
                  placeholder="Type your questions or product inquiries here (e.g., Interested in King Top 2 water purifier rental plan...)"
                  className={`w-full px-4 py-2.5 rounded-xl border text-xs sm:text-sm bg-white focus:outline-none transition-all resize-none ${
                    errors.inquiries
                      ? 'border-red-400 ring-2 ring-red-100 bg-red-50/20'
                      : 'border-slate-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100'
                  }`}
                />
                {errors.inquiries && (
                  <p className="text-[11px] font-semibold text-red-500">{errors.inquiries}</p>
                )}
              </div>

              {/* Submit Button & Inbox link */}
              <div className="pt-2 flex justify-end">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md shadow-indigo-200 transition-all cursor-pointer active:scale-98"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry</span>
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </section>
  );
};
