import React, { useState, useEffect } from 'react';
import { X, Mail, Phone, Calendar, Trash2, CheckCircle2, MessageSquare, Search, Inbox, ShieldCheck } from 'lucide-react';
import {
  BackgroundInquiry,
  getBackgroundInquiries,
  deleteBackgroundInquiry,
  clearAllBackgroundInquiries,
  markInquiryAsRead
} from '../lib/inquiryStore';
import { CUCKOO_CONTACT } from '../data/cuckooData';

interface BackgroundMessagesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BackgroundMessagesModal: React.FC<BackgroundMessagesModalProps> = ({ isOpen, onClose }) => {
  const [inquiries, setInquiries] = useState<BackgroundInquiry[]>([]);
  const [selectedInquiry, setSelectedInquiry] = useState<BackgroundInquiry | null>(null);
  const [filterQuery, setFilterQuery] = useState('');

  const refreshInquiries = () => {
    const list = getBackgroundInquiries();
    setInquiries(list);
    if (selectedInquiry) {
      const stillExists = list.find(item => item.id === selectedInquiry.id);
      if (!stillExists) setSelectedInquiry(null);
    }
  };

  useEffect(() => {
    if (isOpen) {
      refreshInquiries();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleUpdate = () => refreshInquiries();
    window.addEventListener('cuckoo_inquiry_saved', handleUpdate);
    window.addEventListener('cuckoo_inquiries_updated', handleUpdate);
    return () => {
      window.removeEventListener('cuckoo_inquiry_saved', handleUpdate);
      window.removeEventListener('cuckoo_inquiries_updated', handleUpdate);
    };
  }, []);

  if (!isOpen) return null;

  const filteredInquiries = inquiries.filter(inq => {
    const query = filterQuery.toLowerCase().trim();
    if (!query) return true;
    return (
      inq.name.toLowerCase().includes(query) ||
      inq.contact.toLowerCase().includes(query) ||
      (inq.email && inq.email.toLowerCase().includes(query)) ||
      inq.inquiries.toLowerCase().includes(query)
    );
  });

  const handleDelete = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const updated = deleteBackgroundInquiry(id);
    setInquiries(updated);
    if (selectedInquiry?.id === id) {
      setSelectedInquiry(null);
    }
  };

  const handleClearAll = () => {
    if (confirm('Are you sure you want to clear all background messages?')) {
      clearAllBackgroundInquiries();
      setInquiries([]);
      setSelectedInquiry(null);
    }
  };

  const handleSelect = (inq: BackgroundInquiry) => {
    setSelectedInquiry(inq);
    if (!inq.read) {
      const updated = markInquiryAsRead(inq.id);
      setInquiries(updated);
    }
  };

  const handleWhatsAppContact = (inq: BackgroundInquiry) => {
    let text = `Hi ${inq.name}, thank you for your inquiry regarding CUCKOO products.\n\n`;
    text += `Your inquiry: "${inq.inquiries}"\n\n`;
    text += `I am ${CUCKOO_CONTACT.agentName} from CUCKOO Official Store. How can I assist you today?`;
    window.open(`https://wa.me/${inq.contact.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="bg-white rounded-3xl w-full max-w-4xl h-[90vh] max-h-[700px] border border-slate-200 shadow-2xl flex flex-col overflow-hidden">
        
        {/* Modal Top Header */}
        <div className="p-4 sm:p-5 bg-slate-900 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-indigo-600/30 border border-indigo-400/30 flex items-center justify-center text-indigo-400">
              <Inbox className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-extrabold text-base sm:text-lg text-white">
                  Background Messages Inbox
                </h3>
                <span className="px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 text-[10px] font-bold border border-indigo-500/30">
                  {inquiries.length} {inquiries.length === 1 ? 'Message' : 'Messages'}
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Customer inquiries submitted via website form saved in background storage
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Main Content Area: Split View */}
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden divide-y md:divide-y-0 md:divide-x divide-slate-200">
          
          {/* Left Column: Message List */}
          <div className="w-full md:w-5/12 flex flex-col bg-slate-50/70 overflow-hidden">
            
            {/* Search & Action Bar */}
            <div className="p-3 bg-white border-b border-slate-200 space-y-2 shrink-0">
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                <input
                  type="text"
                  value={filterQuery}
                  onChange={(e) => setFilterQuery(e.target.value)}
                  placeholder="Filter by name, contact, text..."
                  className="w-full pl-9 pr-3 py-1.5 rounded-xl border border-slate-200 text-xs bg-slate-50 focus:bg-white focus:outline-none focus:border-indigo-600 transition-all"
                />
              </div>

              {inquiries.length > 0 && (
                <div className="flex justify-between items-center text-[11px] px-1">
                  <span className="text-slate-500 font-medium">
                    Showing {filteredInquiries.length} of {inquiries.length}
                  </span>
                  <button
                    type="button"
                    onClick={handleClearAll}
                    className="text-red-600 hover:text-red-700 font-bold flex items-center gap-1 cursor-pointer"
                  >
                    <Trash2 className="w-3 h-3" /> Clear All
                  </button>
                </div>
              )}
            </div>

            {/* List Items */}
            <div className="flex-1 overflow-y-auto divide-y divide-slate-200/80 p-2 space-y-1.5">
              {filteredInquiries.length > 0 ? (
                filteredInquiries.map((inq) => {
                  const isSelected = selectedInquiry?.id === inq.id;
                  return (
                    <div
                      key={inq.id}
                      onClick={() => handleSelect(inq)}
                      className={`p-3.5 rounded-2xl cursor-pointer transition-all border ${
                        isSelected
                          ? 'bg-indigo-50/90 border-indigo-300 shadow-xs'
                          : inq.read
                          ? 'bg-white hover:bg-slate-100/80 border-slate-200/80'
                          : 'bg-white border-indigo-200 font-bold shadow-2xs'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-1.5 min-w-0">
                          {!inq.read && (
                            <span className="w-2 h-2 rounded-full bg-indigo-600 shrink-0" />
                          )}
                          <span className="text-xs font-black text-slate-900 truncate">
                            {inq.name}
                          </span>
                        </div>
                        <span className="text-[10px] text-slate-400 font-medium shrink-0 ml-2">
                          {new Date(inq.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      </div>

                      <p className="text-[11px] text-slate-600 font-semibold truncate mb-1">
                        📞 {inq.contact}
                      </p>

                      <p className="text-[11px] text-slate-500 line-clamp-2 italic bg-slate-50 p-1.5 rounded-lg border border-slate-100">
                        "{inq.inquiries}"
                      </p>
                    </div>
                  );
                })
              ) : (
                <div className="p-8 text-center space-y-2">
                  <Inbox className="w-8 h-8 text-slate-300 mx-auto" />
                  <p className="text-xs font-bold text-slate-600">No background messages found</p>
                  <p className="text-[11px] text-slate-400">
                    When customers submit inquiry form, messages will appear here.
                  </p>
                </div>
              )}
            </div>

          </div>

          {/* Right Column: Message Detail View */}
          <div className="w-full md:w-7/12 flex flex-col bg-white overflow-y-auto p-5 sm:p-6 space-y-5">
            {selectedInquiry ? (
              <div className="space-y-5 animate-fadeIn">
                {/* Header */}
                <div className="flex items-start justify-between border-b border-slate-100 pb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-lg font-black text-slate-900">
                        {selectedInquiry.name}
                      </h4>
                      <span className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 text-[10px] font-bold border border-emerald-100">
                        Saved in Background
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      Submitted on {new Date(selectedInquiry.timestamp).toLocaleString()}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleDelete(selectedInquiry.id)}
                    className="p-2 rounded-xl text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors cursor-pointer"
                    title="Delete message"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Details Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs bg-slate-50 p-4 rounded-2xl border border-slate-200">
                  <div>
                    <span className="text-slate-400 text-[10px] uppercase font-bold block">Contact Phone:</span>
                    <a
                      href={`tel:${selectedInquiry.contact}`}
                      className="font-extrabold text-indigo-600 hover:underline flex items-center gap-1 mt-0.5"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      {selectedInquiry.contact}
                    </a>
                  </div>

                  <div>
                    <span className="text-slate-400 text-[10px] uppercase font-bold block">Email Address:</span>
                    <span className="font-extrabold text-slate-800 flex items-center gap-1 mt-0.5">
                      <Mail className="w-3.5 h-3.5 text-slate-500" />
                      {selectedInquiry.email || 'Not provided'}
                    </span>
                  </div>
                </div>

                {/* Inquiry Body */}
                <div className="space-y-1.5">
                  <span className="text-xs font-bold text-slate-700 flex items-center gap-1">
                    <MessageSquare className="w-3.5 h-3.5 text-indigo-600" />
                    Customer Message / Questions:
                  </span>
                  <div className="p-4 rounded-2xl bg-indigo-50/50 border border-indigo-100 text-slate-800 text-xs sm:text-sm font-medium leading-relaxed whitespace-pre-wrap">
                    {selectedInquiry.inquiries}
                  </div>
                </div>

                {/* Quick Reply Actions */}
                <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() => handleWhatsAppContact(selectedInquiry)}
                    className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs flex items-center gap-2 shadow-sm transition-colors cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Reply via WhatsApp
                  </button>

                  <a
                    href={`tel:${selectedInquiry.contact}`}
                    className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs flex items-center gap-1.5 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    Call Customer
                  </a>
                </div>
              </div>
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center text-center p-8 space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <h4 className="font-extrabold text-slate-800 text-sm">Select a message from the left</h4>
                <p className="text-xs text-slate-500 max-w-xs">
                  Click on any background inquiry to view complete customer details and message body.
                </p>
              </div>
            )}
          </div>

        </div>

        {/* Footer info */}
        <div className="p-3 bg-slate-50 border-t border-slate-200 text-center text-[11px] text-slate-500 font-medium flex items-center justify-between px-6">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> All messages safely preserved in background storage
          </span>
          <button
            type="button"
            onClick={onClose}
            className="text-indigo-600 font-bold hover:underline cursor-pointer"
          >
            Close Window
          </button>
        </div>

      </div>
    </div>
  );
};
