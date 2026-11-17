import React from 'react';
import { X, HelpCircle, ExternalLink, MessageCircle, FileText, CheckCircle } from 'lucide-react';

const HELP_TOPICS = {
  troubleshoot: {
    title: 'Troubleshoot Billing & Payments',
    content: (
      <div>
        <p>If you encounter any issues while adding funds or paying for Meta Ads, try the following solutions:</p>
        <ol style={{ paddingLeft: '20px', lineHeight: '1.6', fontSize: '13px', color: '#1c1e21' }}>
          <li><strong>UPI Timeout / App Not Responding:</strong> Ensure your UPI app (Google Pay, PhonePe, Paytm) has permission for background data and notification alerts.</li>
          <li><strong>QR Code Expiry:</strong> Scan and approve the charge within the 10-minute validity window shown on the screen.</li>
          <li><strong>Bank Daily UPI Limits:</strong> Most Indian banks have a ₹1,00,000 daily UPI transfer limit. If your payment fails, try paying a smaller increment (e.g. ₹2,000 - ₹5,000) or check bank limits.</li>
          <li><strong>Card Payments:</strong> Ensure international and online merchant transactions are enabled on your debit or credit card via your mobile banking app.</li>
        </ol>
      </div>
    )
  },
  billing_works: {
    title: 'How Meta Ads Billing Works',
    content: (
      <div>
        <p>Meta Ads operates with both prepaid and post-paid billing structures depending on your ad account configuration:</p>
        <ul style={{ paddingLeft: '20px', lineHeight: '1.6', fontSize: '13px', color: '#1c1e21' }}>
          <li><strong>Prepaid Balance (UPI / Netbanking):</strong> Funds added to your Available Funds balance are deducted in real-time as your ads run on Facebook and Instagram.</li>
          <li><strong>Daily Spending Limit:</strong> Set by Meta to ensure account security. For your account, the daily spending limit is currently <strong>₹2,697.96</strong>, which increases as your billing history matures.</li>
          <li><strong>Tax Invoices:</strong> Official GST tax invoices are automatically generated at the end of each calendar month and can be downloaded from Payment Activity.</li>
        </ul>
      </div>
    )
  },
  payment_fails: {
    title: 'What to Do if Your Payment Fails',
    content: (
      <div>
        <p>If money was deducted from your bank account but your Meta Ads balance has not updated:</p>
        <ol style={{ paddingLeft: '20px', lineHeight: '1.6', fontSize: '13px', color: '#1c1e21' }}>
          <li><strong>Wait 5–15 minutes:</strong> Inter-bank UPI settlement can occasionally take up to 15 minutes during peak bank server loads.</li>
          <li><strong>Check UTR / Reference Number:</strong> Look at your bank statement or UPI app for the 12-digit UPI Reference Number (UTR).</li>
          <li><strong>Automatic Refund:</strong> If Meta’s payment gateway does not receive the credit, the funds are automatically reversed to your bank account within 24 to 48 banking hours.</li>
          <li><strong>Contact 24/7 Meta Priority Support:</strong> Submit your 12-digit UTR number to our billing help team for immediate manual balance credit.</li>
        </ol>
      </div>
    )
  }
};

const HelpDrawer = ({ topic = 'troubleshoot', onClose, onOpenAddFunds }) => {
  const current = HELP_TOPICS[topic] || HELP_TOPICS.troubleshoot;

  return (
    <div className="modal-overlay" style={{ zIndex: 1100 }}>
      <div className="modal-container" style={{ width: '520px', maxHeight: '85vh' }}>
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <HelpCircle size={20} color="#1877f2" />
            <h2 style={{ fontSize: '16px', fontWeight: '700', margin: 0 }}>{current.title}</h2>
          </div>
          <button 
            onClick={onClose} 
            style={{ border: 'none', background: 'none', cursor: 'pointer', padding: '4px' }}
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        <div style={{ padding: '24px', overflowY: 'auto' }}>
          {current.content}

          <div style={{ 
            marginTop: '20px', 
            background: '#f0f2f5', 
            borderRadius: '8px', 
            padding: '14px 16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <div>
              <div style={{ fontWeight: 600, fontSize: '13px', color: '#1c1e21' }}>Ready to top-up your ads balance?</div>
              <div style={{ fontSize: '12px', color: '#606770' }}>Instant UPI credit to Rama Rao Pulibandla account</div>
            </div>
            <button
              onClick={() => {
                onClose();
                if (onOpenAddFunds) onOpenAddFunds();
              }}
              style={{
                background: '#1877f2',
                color: '#fff',
                border: 'none',
                padding: '8px 14px',
                borderRadius: '6px',
                fontSize: '12px',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              Add Funds
            </button>
          </div>
        </div>

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

export default HelpDrawer;
