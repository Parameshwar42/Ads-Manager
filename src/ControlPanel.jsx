import React, { useState } from 'react';
import { Settings, X, Upload } from 'lucide-react';
import './index.css';

const ControlPanel = ({ amount, setAmount, qrCode, setQrCode, showModal, setShowModal }) => {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) {
    return (
      <button 
        className="control-panel-toggle" 
        onClick={() => setIsOpen(true)}
        style={{
          position: 'fixed', bottom: '20px', right: '20px', 
          background: '#1877f2', color: 'white', border: 'none', 
          borderRadius: '50%', width: '40px', height: '40px', 
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)', cursor: 'pointer'
        }}
      >
        <Settings size={20} />
      </button>
    );
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setQrCode(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="control-panel">
      <h4>
        <span>Live Controls</span>
        <X size={18} style={{ cursor: 'pointer' }} onClick={() => setIsOpen(false)} />
      </h4>
      
      <div className="control-group">
        <label>Payment Amount (₹)</label>
        <input 
          type="text" 
          value={amount} 
          onChange={(e) => setAmount(e.target.value)} 
          placeholder="e.g. 2,000.00"
        />
      </div>

      <div className="control-group">
        <label>Change QR Code</label>
        <input 
          type="file" 
          accept="image/*" 
          onChange={handleFileChange}
          style={{ display: 'none' }}
          id="qr-upload"
        />
        <label 
          htmlFor="qr-upload" 
          className="verify-tax-btn" 
          style={{ 
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
            textAlign: 'center', padding: '8px', cursor: 'pointer'
          }}
        >
          <Upload size={16} /> Upload QR
        </label>
      </div>



      <button 
        className="toggle-control" 
        onClick={() => setShowModal(!showModal)}
      >
        {showModal ? "Hide Modal" : "Show Modal"}
      </button>

      <div style={{ fontSize: '11px', color: '#606770', marginTop: '10px' }}>
        Note: These changes are live for this session.
      </div>
    </div>
  );
};

export default ControlPanel;
