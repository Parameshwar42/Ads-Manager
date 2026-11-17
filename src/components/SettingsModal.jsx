import React, { useState } from 'react';
import { X, Settings, ShieldCheck, Bell, CreditCard, Lock, Check } from 'lucide-react';

export const SettingsModal = ({ onClose }) => {
  const [currency, setCurrency] = useState('INR (₹)');
  const [autoBilling, setAutoBilling] = useState(true);
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => {
      setSaved(false);
      onClose();
    }, 1000);
  };

  return (
    <div className="modal-overlay" style={{ zIndex: 1200 }}>
      <div className="modal-container" style={{ width: '480px' }}>
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Settings size={20} color="#1877f2" />
            <h2 style={{ fontSize: '16px', fontWeight: '700', margin: 0 }}>Advertising & Account Settings</h2>
          </div>
          <button onClick={onClose} style={{ border: 'none', background: 'none', cursor: 'pointer', padding: '4px' }}>
            <X size={20} />
          </button>
        </div>

        <div style={{ padding: '24px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#606770', marginBottom: '6px' }}>
                Primary Currency
              </label>
              <select 
                value={currency} 
                onChange={(e) => setCurrency(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  borderRadius: '6px',
                  border: '1px solid #ced0d4',
                  fontSize: '14px',
                  background: '#fff'
                }}
              >
                <option value="INR (₹)">Indian Rupee - INR (₹)</option>
                <option value="USD ($)">US Dollar - USD ($)</option>
                <option value="EUR (€)">Euro - EUR (€)</option>
              </select>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: '1px solid #f0f2f5' }}>
              <div>
                <div style={{ fontSize: '14px', fontWeight: 600 }}>Low Prepaid Balance Alert</div>
                <div style={{ fontSize: '12px', color: '#606770' }}>Send notification when funds drop below ₹500</div>
              </div>
              <input 
                type="checkbox" 
                checked={autoBilling} 
                onChange={(e) => setAutoBilling(e.target.checked)}
                style={{ width: '18px', height: '18px', cursor: 'pointer' }}
              />
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0' }}>
              <div>
                <div style={{ fontSize: '14px', fontWeight: 600 }}>WhatsApp Transaction Updates</div>
                <div style={{ fontSize: '12px', color: '#606770' }}>Receive instant payment confirmation via WhatsApp</div>
              </div>
              <input 
                type="checkbox" 
                checked={emailAlerts} 
                onChange={(e) => setEmailAlerts(e.target.checked)}
                style={{ width: '18px', height: '18px', cursor: 'pointer' }}
              />
            </div>
          </div>

          <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
            <button 
              onClick={onClose}
              style={{
                background: '#e4e6eb',
                border: 'none',
                padding: '9px 16px',
                borderRadius: '6px',
                fontSize: '13px',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              Cancel
            </button>
            <button 
              onClick={handleSave}
              style={{
                background: '#1877f2',
                color: '#fff',
                border: 'none',
                padding: '9px 20px',
                borderRadius: '6px',
                fontSize: '13px',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              {saved ? <><Check size={14} /> Saved!</> : 'Save Settings'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
