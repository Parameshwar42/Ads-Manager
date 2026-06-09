import React, { useState } from 'react';
import Dashboard from './Dashboard';
import PaymentModal from './PaymentModal';
import ControlPanel from './ControlPanel';

// Default QR code import
import defaultQrCode from './assets/qr-code.png';

function App() {
  const [showModal, setShowModal] = useState(true);
  const [amount, setAmount] = useState("2,000.00");
  const [qrCode, setQrCode] = useState(defaultQrCode);

  return (
    <div className="app-root">
      {/* Background Dashboard */}
      <Dashboard />
      
      {/* Control Panel (Hidden from screenshot, but useful for user) */}
      <ControlPanel 
        amount={amount} 
        setAmount={setAmount} 
        qrCode={qrCode} 
        setQrCode={setQrCode} 
        showModal={showModal}
        setShowModal={setShowModal}
      />

      {/* Payment Modal Overlay */}
      {showModal && (
        <div className="modal-overlay">
          <PaymentModal 
            onClose={() => setShowModal(false)} 
            amount={amount} 
            qrCode={qrCode}
          />
        </div>
      )}
    </div>
  );
}

export default App;
