import React, { useState, useEffect } from 'react';
import { X, ChevronLeft } from 'lucide-react';
import './index.css';
import AdsterraAd from './AdsterraAd';

const PaymentModal = ({ onClose, amount, qrCode, adKey300x250 }) => {
  // Timer state (9 minutes 34 seconds = 574 seconds)
  const [timeLeft, setTimeLeft] = useState(574);
  
  useEffect(() => {
    // Exit early when we reach 0
    if (timeLeft <= 0) return;

    // Save intervalId to clear the interval when the
    // component re-renders
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    // Clear interval on re-render to avoid memory leaks
    return () => clearInterval(intervalId);
  }, [timeLeft]);

  // Format time to MM:SS
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
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
          
          <div className="supported-apps">
            {/* Using generic colored circles as placeholders for supported app icons */}
            <div className="app-icon" style={{ backgroundColor: '#00BA92' }}></div>
            <div className="app-icon" style={{ backgroundColor: '#FF8400' }}></div>
            <div className="app-icon" style={{ backgroundColor: '#673AB7' }}></div>
            <div className="app-icon" style={{ backgroundColor: '#000000' }}></div>
            <div className="app-icon" style={{ backgroundColor: '#4285F4' }}></div>
          </div>
          
          <a href="#" className="see-all-link">See all supported apps</a>
        </div>

        {/* Adsterra Banner inside Modal */}
        <AdsterraAd adKey={adKey300x250} width={300} height={250} label="Sponsored Offer" />
      </div>

      {/* Footer */}
      <div className="modal-footer" style={{ background: '#f5f6f7' }}>
        <p className="timer-text">
          This page will automatically expire in <span className="timer" style={{ color: '#1877f2', fontWeight: 600 }}>{formatTime(timeLeft)}</span> minutes
        </p>
      </div>
    </div>
  );
};

export default PaymentModal;
