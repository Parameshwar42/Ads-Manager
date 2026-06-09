import React from 'react';
import { 
  Home, BarChart2, Briefcase, CreditCard, Users, Megaphone, 
  Settings, HelpCircle, ChevronRight, Info, Download, 
  Search, Bell, MoreHorizontal, User, Layout
} from 'lucide-react';
import './index.css';
import metaLogo from './assets/meta-logo.png';
import AdsterraAd from './AdsterraAd';

const Dashboard = ({ adKey728x90 }) => {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-top">
          <div className="sidebar-item" style={{ marginBottom: '20px' }}>
            <img src={metaLogo} alt="Meta Logo" style={{ width: '30px', height: '30px' }} />
          </div>
          <div className="sidebar-item"><Home size={20} /></div>
          <div className="sidebar-item"><BarChart2 size={20} /></div>
          <div className="sidebar-item active"><CreditCard size={20} /></div>
          <div className="sidebar-item"><Users size={20} /></div>
          <div className="sidebar-item"><Megaphone size={20} /></div>
          <div className="sidebar-item"><Briefcase size={20} /></div>
        </div>
        <div className="sidebar-bottom">
          <div className="sidebar-item"><HelpCircle size={20} /></div>
          <div className="sidebar-item"><Settings size={20} /></div>
          <div className="sidebar-item"><Search size={20} /></div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="main-content">
        {/* Top Header */}
        <header className="top-header">
          <div className="header-left">
            <h1>Billing & payments</h1>
            <div className="profile-selector">
              <div className="profile-avatar">RR</div>
              <span>Rama Rao Pulibandla</span>
              <ChevronRight size={16} />
            </div>
          </div>
          <div className="header-right">
             <div className="account-selector">
               <span>Rama Rao Pulibandla (21951436808...)</span>
               <ChevronRight size={16} />
             </div>
             <div className="notification-bell">
               <Bell size={20} />
               <span className="notification-badge">31</span>
             </div>
             <div className="user-icon">
               <User size={20} />
             </div>
          </div>
        </header>

        {/* Tab Sub-Header */}
        <div className="tab-subheader">
           <div className="tab active">
             <CreditCard size={18} />
             <span>Payment settings</span>
           </div>
           <div className="tab">
             <BarChart2 size={18} />
             <span>Payment activity</span>
           </div>
        </div>

        {/* Content Body */}
        <div className="content-body">
           <div className="payment-settings-header">
              <h2>Payment settings</h2>
           </div>

           {/* Info Banner */}
           <div className="info-banner">
             <Info size={16} color="#606770" />
             <div className="info-text">
               <strong>Verify your tax info</strong>
               <p>Submit your GST number to confirm that you're a registered taxpayer. We need this info to comply with local tax regulations.</p>
               <button className="verify-tax-btn">Verify tax info</button>
             </div>
           </div>

           {/* Adsterra Leaderboard Banner */}
           <AdsterraAd adKey={adKey728x90} width={728} height={90} label="Advertisement" />

           {/* Cards Grid */}
           <div className="dashboard-grid">
              <div className="grid-left">
                {/* Available Funds Card */}
                <div className="dashboard-card">
                  <div className="card-header">
                    <h3>Available funds <Info size={14} className="info-icon-small" /></h3>
                  </div>
                  <div className="funds-amount">
                    <span className="currency-symbol">₹</span>
                    <span className="amount-value">361.48</span>
                    <button className="add-funds-btn">Add funds</button>
                  </div>
                </div>

                {/* Ad Credits Card */}
                <div className="dashboard-card">
                  <div className="card-header">
                    <h3>Ad credits</h3>
                    <ChevronRight size={20} />
                  </div>
                  <div className="ad-credits-status">
                    <div className="credit-icon">
                      <CreditCard size={16} />
                    </div>
                    <span>₹0.00</span>
                  </div>
                </div>

                {/* Payment Methods Card */}
                <div className="dashboard-card">
                  <div className="card-header">
                    <h3>Payment methods <Info size={14} className="info-icon-small" /></h3>
                  </div>
                  <div className="no-methods">
                    <p>You haven't added any payment methods.</p>
                  </div>
                  <button className="add-method-btn">Add payment method</button>
                </div>
              </div>

              <div className="grid-right">
                {/* Daily Spending Limit Card */}
                <div className="dashboard-card border-left-accent">
                   <div className="card-header">
                     <h3>Daily spending limit <Info size={14} className="info-icon-small" /></h3>
                   </div>
                   <div className="spending-info">
                     <p>Your spending is within today's <strong>₹ 2,697.96</strong> limit, which is set by Meta and may increase over time.</p>
                   </div>
                </div>

                {/* Payment History Card */}
                <div className="dashboard-card">
                   <div className="card-header">
                     <h3>Payment history</h3>
                   </div>
                   <button className="download-receipt-btn">
                     <Download size={16} />
                     <span>Download last receipt</span>
                   </button>
                </div>

                {/* Help Centre Card */}
                <div className="dashboard-card">
                   <div className="card-header">
                     <h3>Help Centre</h3>
                   </div>
                   <ul className="help-links">
                     <li><Info size={16} /> Troubleshoot billing and payments</li>
                     <li><Info size={16} /> How ads billing works</li>
                     <li><Info size={16} /> What to do if your payment fails</li>
                   </ul>
                </div>
              </div>
           </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
