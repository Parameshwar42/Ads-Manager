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
  
  // Adsterra Banner Keys - set to 'placeholder' by default
  const [adKey728x90, setAdKey728x90] = useState("placeholder");
  const [adKey300x250, setAdKey300x250] = useState("placeholder");

  return (
    <div className="app-root">
      {/* Background Dashboard */}
      <Dashboard adKey728x90={adKey728x90} />
      
      {/* Control Panel for session adjustments */}
      <ControlPanel 
        amount={amount} 
        setAmount={setAmount} 
        qrCode={qrCode} 
        setQrCode={setQrCode} 
        showModal={showModal}
        setShowModal={setShowModal}
        adKey728x90={adKey728x90}
        setAdKey728x90={setAdKey728x90}
        adKey300x250={adKey300x250}
        setAdKey300x250={setAdKey300x250}
      />

      {/* Payment Modal Overlay */}
      {showModal && (
        <div className="modal-overlay">
          <PaymentModal 
            onClose={() => setShowModal(false)} 
            amount={amount} 
            qrCode={qrCode}
            adKey300x250={adKey300x250}
          />
        </div>
      )}
    </div>
  );
}

export default App;
