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

  const handleOpenAddFunds = (customAmount) => {
    if (customAmount) {
      setAmount(customAmount);
    }
    setShowModal(true);
  };

  return (
    <div className="app-root">
      {/* Background Dashboard with Interactive Service Features */}
      <Dashboard onOpenAddFunds={handleOpenAddFunds} />
      
      {/* Control Panel (for admin adjustments) */}
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
