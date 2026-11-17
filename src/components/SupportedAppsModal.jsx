import React, { useState } from 'react';
import { X, Search, Check, Copy, ExternalLink, ShieldCheck } from 'lucide-react';
import { GooglePayIcon, PhonePeIcon, PaytmIcon, BhimIcon, CredIcon, AmazonPayIcon } from './UpiIcons';

const UPI_APPS = [
  { id: 'phonepe', name: 'PhonePe', vpa: '@ybl', icon: <PhonePeIcon size={32} />, popular: true, desc: 'Instant UPI transfer' },
  { id: 'gpay', name: 'Google Pay', vpa: '@okhdfcbank', icon: <GooglePayIcon size={32} />, popular: true, desc: 'Google Pay direct UPI' },
  { id: 'paytm', name: 'Paytm UPI', vpa: '@paytm', icon: <PaytmIcon size={32} />, popular: true, desc: 'Paytm Wallet & UPI' },
  { id: 'bhim', name: 'BHIM UPI', vpa: '@upi', icon: <BhimIcon size={32} />, popular: true, desc: 'NPCI Official App' },
  { id: 'cred', name: 'CRED UPI', vpa: '@cred', icon: <CredIcon size={32} />, popular: true, desc: 'CRED Club Member UPI' },
  { id: 'amazon', name: 'Amazon Pay', vpa: '@apl', icon: <AmazonPayIcon size={32} />, popular: true, desc: 'Amazon Pay UPI' },
  { id: 'whatsapp', name: 'WhatsApp Pay', vpa: '@wa', icon: <span style={{ background: '#25D366', color: '#fff', borderRadius: '8px', padding: '6px 10px', fontWeight: 'bold', fontSize: '13px' }}>WA</span>, popular: false, desc: 'WhatsApp In-chat payments' },
  { id: 'navi', name: 'Navi UPI', vpa: '@navi', icon: <span style={{ background: '#0052FF', color: '#fff', borderRadius: '8px', padding: '6px 8px', fontWeight: 'bold', fontSize: '13px' }}>Navi</span>, popular: false, desc: 'Navi UPI App' },
  { id: 'jupiter', name: 'Jupiter', vpa: '@jupiteraxis', icon: <span style={{ background: '#FF5E00', color: '#fff', borderRadius: '8px', padding: '6px 8px', fontWeight: 'bold', fontSize: '13px' }}>Jupi</span>, popular: false, desc: 'Jupiter Banking & UPI' },
  { id: 'imobile', name: 'iMobile Pay', vpa: '@icici', icon: <span style={{ background: '#A30000', color: '#fff', borderRadius: '8px', padding: '6px 8px', fontWeight: 'bold', fontSize: '13px' }}>ICICI</span>, popular: false, desc: 'ICICI Bank iMobile' },
  { id: 'yono', name: 'YONO SBI', vpa: '@sbi', icon: <span style={{ background: '#1B65A6', color: '#fff', borderRadius: '8px', padding: '6px 8px', fontWeight: 'bold', fontSize: '13px' }}>SBI</span>, popular: false, desc: 'State Bank of India UPI' },
];

const SupportedAppsModal = ({ onClose, amount = "2,000.00" }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedApp, setSelectedApp] = useState(null);
  const [copied, setCopied] = useState(false);

  const filteredApps = UPI_APPS.filter(app => 
    app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    app.desc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const upiId = "metaads.billing@upi";

  const handleCopyUpi = () => {
    navigator.clipboard.writeText(upiId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleOpenApp = (app) => {
    // Generate UPI Intent URL
    const upiUrl = `upi://pay?pa=${upiId}&pn=Meta%20Ads%20India&am=${amount.replace(/,/g, '')}&cu=INR&tn=MetaAdsTopUp`;
    window.location.href = upiUrl;
  };

  return (
    <div className="modal-overlay" style={{ zIndex: 1100 }}>
      <div className="modal-container" style={{ width: '480px', maxHeight: '85vh' }}>
        {/* Header */}
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <ShieldCheck size={20} color="#1877f2" />
            <h2 style={{ fontSize: '16px', fontWeight: '700', margin: 0 }}>Supported UPI Apps</h2>
          </div>
          <button 
            onClick={onClose} 
            style={{ border: 'none', background: 'none', cursor: 'pointer', padding: '4px' }}
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div style={{ padding: '20px 24px', overflowY: 'auto' }}>
          <p style={{ margin: '0 0 16px 0', fontSize: '13px', color: '#606770' }}>
            You can pay ₹{amount} using any bank or third-party UPI application installed on your device or via scanner.
          </p>

          {/* Quick Copy UPI Box */}
          <div style={{ 
            background: '#f0f2f5', 
            borderRadius: '8px', 
            padding: '12px 16px', 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            marginBottom: '18px',
            border: '1px solid #e4e6eb'
          }}>
            <div>
              <div style={{ fontSize: '11px', color: '#606770', textTransform: 'uppercase', fontWeight: 600 }}>Official UPI ID (VPA)</div>
              <div style={{ fontSize: '14px', fontWeight: 700, color: '#1c1e21', marginTop: '2px' }}>{upiId}</div>
            </div>
            <button 
              onClick={handleCopyUpi}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                background: copied ? '#e7f3ff' : '#ffffff',
                border: '1px solid #1877f2',
                color: '#1877f2',
                padding: '6px 12px',
                borderRadius: '6px',
                fontSize: '12px',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              {copied ? <><Check size={14} /> Copied</> : <><Copy size={14} /> Copy ID</>}
            </button>
          </div>

          {/* Search bar */}
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            background: '#f0f2f5', 
            borderRadius: '8px', 
            padding: '8px 12px', 
            gap: '8px',
            marginBottom: '16px' 
          }}>
            <Search size={16} color="#606770" />
            <input 
              type="text" 
              placeholder="Search your UPI app (GPay, PhonePe, Paytm...)" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                border: 'none',
                background: 'transparent',
                outline: 'none',
                width: '100%',
                fontSize: '13px'
              }}
            />
          </div>

          {/* App List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {filteredApps.map((app) => (
              <div 
                key={app.id}
                onClick={() => setSelectedApp(app)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '10px 14px',
                  borderRadius: '8px',
                  border: selectedApp?.id === app.id ? '1.5px solid #1877f2' : '1px solid #e4e6eb',
                  background: selectedApp?.id === app.id ? '#f0f7ff' : '#ffffff',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {app.icon}
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '14px', color: '#1c1e21' }}>{app.name}</div>
                    <div style={{ fontSize: '12px', color: '#606770' }}>{app.desc}</div>
                  </div>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleOpenApp(app);
                  }}
                  style={{
                    background: '#1877f2',
                    color: '#ffffff',
                    border: 'none',
                    padding: '6px 12px',
                    borderRadius: '6px',
                    fontSize: '12px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  Pay Now <ExternalLink size={12} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div style={{ padding: '14px 24px', background: '#f5f6f7', borderTop: '1px solid #e4e6eb', display: 'flex', justifyContent: 'flex-end' }}>
          <button 
            onClick={onClose}
            style={{
              background: '#e4e6eb',
              color: '#1c1e21',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '6px',
              fontSize: '13px',
              fontWeight: 600,
              cursor: 'pointer'
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default SupportedAppsModal;
