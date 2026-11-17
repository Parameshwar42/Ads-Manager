import React, { useState } from 'react';
import { Search, X, CreditCard, Megaphone, Users, Shield, FileText, ArrowRight } from 'lucide-react';

const SEARCH_ITEMS = [
  { id: 'billing', title: 'Billing & Payments', category: 'Finance', icon: <CreditCard size={16} />, section: 'billing' },
  { id: 'add-funds', title: 'Add Prepaid Funds via UPI QR', category: 'Payment', icon: <CreditCard size={16} />, section: 'add_funds' },
  { id: 'campaigns', title: 'Meta Ad Campaigns & Boosts', category: 'Services', icon: <Megaphone size={16} />, section: 'campaigns' },
  { id: 'audiences', title: 'Audience Targeting & Reach', category: 'Services', icon: <Users size={16} />, section: 'audiences' },
  { id: 'tax', title: 'GST & Tax Verification Settings', category: 'Settings', icon: <Shield size={16} />, section: 'tax' },
  { id: 'receipt', title: 'Download Latest Payment Receipt', category: 'Invoices', icon: <FileText size={16} />, section: 'receipt' },
  { id: 'overview', title: 'Meta Ads Services Overview', category: 'Services', icon: <Megaphone size={16} />, section: 'home' }
];

const SearchModal = ({ onClose, onSelectAction }) => {
  const [query, setQuery] = useState('');

  const filtered = SEARCH_ITEMS.filter(item => 
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="modal-overlay" style={{ zIndex: 1200 }}>
      <div className="modal-container" style={{ width: '540px' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          padding: '14px 18px',
          borderBottom: '1px solid #e4e6eb',
          gap: '12px'
        }}>
          <Search size={20} color="#606770" />
          <input 
            type="text"
            placeholder="Search Meta Ads services, billing, campaigns, or receipts..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            style={{
              border: 'none',
              outline: 'none',
              width: '100%',
              fontSize: '15px'
            }}
          />
          <button 
            onClick={onClose}
            style={{ border: 'none', background: 'none', cursor: 'pointer', padding: '4px' }}
          >
            <X size={20} color="#606770" />
          </button>
        </div>

        <div style={{ padding: '12px 18px', maxHeight: '360px', overflowY: 'auto' }}>
          <div style={{ fontSize: '11px', color: '#606770', textTransform: 'uppercase', fontWeight: 700, marginBottom: '8px' }}>
            Quick Navigation & Services
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {filtered.map(item => (
              <div 
                key={item.id}
                onClick={() => {
                  onSelectAction(item.section);
                  onClose();
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '10px 14px',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'background 0.15s ease',
                  background: '#f8f9fa'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = '#e7f3ff'}
                onMouseLeave={(e) => e.currentTarget.style.background = '#f8f9fa'}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ color: '#1877f2' }}>{item.icon}</div>
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: 600, color: '#1c1e21' }}>{item.title}</div>
                    <div style={{ fontSize: '11px', color: '#606770' }}>{item.category}</div>
                  </div>
                </div>
                <ArrowRight size={16} color="#8e8e93" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
