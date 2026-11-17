import React, { useState } from 'react';
import { X, CheckCircle2, Shield, Info } from 'lucide-react';

const TaxVerificationModal = ({ onClose, onVerifySuccess }) => {
  const [gstin, setGstin] = useState('36AABCB1234F1Z5');
  const [businessName, setBusinessName] = useState('Rama Rao Media & Advertising Solutions');
  const [stateName, setStateName] = useState('Telangana (36)');
  const [pincode, setPincode] = useState('500081');
  const [pan, setPan] = useState('AABCB1234F');
  const [loading, setLoading] = useState(false);
  const [verified, setVerified] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setVerified(true);
      setTimeout(() => {
        onVerifySuccess({ gstin, businessName });
        onClose();
      }, 1200);
    }, 1000);
  };

  return (
    <div className="modal-overlay" style={{ zIndex: 1100 }}>
      <div className="modal-container" style={{ width: '500px' }}>
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Shield size={18} color="#1877f2" />
            <h2 style={{ fontSize: '16px', fontWeight: '700', margin: 0 }}>Tax and GST Information</h2>
          </div>
          <button 
            onClick={onClose} 
            style={{ border: 'none', background: 'none', cursor: 'pointer', padding: '4px' }}
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} style={{ padding: '24px' }}>
          {verified ? (
            <div style={{ textAlign: 'center', padding: '30px 10px' }}>
              <CheckCircle2 size={54} color="#34A853" style={{ margin: '0 auto 12px' }} />
              <h3 style={{ margin: '0 0 8px 0', fontSize: '18px', color: '#1c1e21' }}>GST Details Verified!</h3>
              <p style={{ margin: 0, fontSize: '13px', color: '#606770' }}>
                Your GSTIN <strong>{gstin}</strong> has been validated with GST Portal records.
              </p>
            </div>
          ) : (
            <>
              <div style={{ 
                background: '#e7f3ff', 
                border: '1px solid #1877f2', 
                borderRadius: '8px', 
                padding: '12px 14px', 
                display: 'flex', 
                gap: '10px', 
                marginBottom: '18px' 
              }}>
                <Info size={18} color="#1877f2" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div style={{ fontSize: '12px', color: '#1c1e21', lineHeight: '1.4' }}>
                  Registering your GST number allows you to claim Input Tax Credit (ITC) for your advertising expenses and keeps your account compliant.
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#606770', marginBottom: '4px' }}>
                    Goods and Services Tax Identification Number (GSTIN) *
                  </label>
                  <input 
                    type="text" 
                    value={gstin}
                    onChange={(e) => setGstin(e.target.value.toUpperCase())}
                    required
                    maxLength={15}
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      border: '1px solid #ced0d4',
                      borderRadius: '6px',
                      fontSize: '14px',
                      fontWeight: 600,
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#606770', marginBottom: '4px' }}>
                    Legal Business Name (as on GST Certificate) *
                  </label>
                  <input 
                    type="text" 
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    required
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      border: '1px solid #ced0d4',
                      borderRadius: '6px',
                      fontSize: '14px',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#606770', marginBottom: '4px' }}>
                      Permanent Account Number (PAN)
                    </label>
                    <input 
                      type="text" 
                      value={pan}
                      onChange={(e) => setPan(e.target.value.toUpperCase())}
                      style={{
                        width: '100%',
                        padding: '10px 12px',
                        border: '1px solid #ced0d4',
                        borderRadius: '6px',
                        fontSize: '14px',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#606770', marginBottom: '4px' }}>
                      State / Jurisdiction
                    </label>
                    <input 
                      type="text" 
                      value={stateName}
                      onChange={(e) => setStateName(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '10px 12px',
                        border: '1px solid #ced0d4',
                        borderRadius: '6px',
                        fontSize: '14px',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '22px', display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
                <button 
                  type="button" 
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
                  type="submit" 
                  disabled={loading}
                  style={{
                    background: '#1877f2',
                    color: '#ffffff',
                    border: 'none',
                    padding: '9px 20px',
                    borderRadius: '6px',
                    fontSize: '13px',
                    fontWeight: 600,
                    cursor: loading ? 'not-allowed' : 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  {loading ? 'Verifying with GSTIN...' : 'Save & Verify Tax Info'}
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default TaxVerificationModal;
