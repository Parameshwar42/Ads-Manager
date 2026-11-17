import React, { useState } from 'react';
import { 
  Home, BarChart2, Briefcase, CreditCard, Users, Megaphone, 
  Settings, HelpCircle, ChevronRight, Info, Download, 
  Search, Bell, MoreHorizontal, User, CheckCircle2, ChevronDown, LogOut, Check
} from 'lucide-react';
import './index.css';

import metaLogo from './assets/meta-logo.png';
import { downloadReceipt } from './components/ReceiptGenerator';
import TaxVerificationModal from './components/TaxVerificationModal';
import HelpDrawer from './components/HelpDrawer';
import NotificationDrawer from './components/NotificationDrawer';
import SearchModal from './components/SearchModal';
import { SettingsModal } from './components/SettingsModal';
import { 
  ServiceOverviewView, 
  CampaignsView, 
  AnalyticsView, 
  AudiencesView, 
  BusinessSuiteView, 
  PaymentActivityView 
} from './components/ServiceViews';

const Dashboard = ({ onOpenAddFunds }) => {
  // Navigation State
  const [activeNav, setActiveNav] = useState('billing'); // 'billing' | 'overview' | 'campaigns' | 'analytics' | 'audiences' | 'business'
  const [activeTab, setActiveTab] = useState('settings'); // 'settings' | 'activity'
  
  // Interactive Modals State
  const [showTaxModal, setShowTaxModal] = useState(false);
  const [isGstVerified, setIsGstVerified] = useState(false);
  const [verifiedGstin, setVerifiedGstin] = useState('');
  
  const [helpTopic, setHelpTopic] = useState(null); // 'troubleshoot' | 'billing_works' | 'payment_fails' | null
  const [showNotifications, setShowNotifications] = useState(false);
  const [unreadCount, setUnreadCount] = useState(31);
  const [showSearch, setShowSearch] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  
  const [accountName, setAccountName] = useState('Rama Rao Pulibandla');
  const [accountId, setAccountId] = useState('219514368088492');

  const handleTaxVerified = ({ gstin }) => {
    setIsGstVerified(true);
    setVerifiedGstin(gstin);
  };

  const handleSearchAction = (action) => {
    if (action === 'add_funds') {
      if (onOpenAddFunds) onOpenAddFunds();
    } else if (action === 'tax') {
      setShowTaxModal(true);
    } else if (action === 'receipt') {
      downloadReceipt("2,000.00", accountName, accountId);
    } else if (action === 'home') {
      setActiveNav('overview');
    } else {
      setActiveNav(action);
    }
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar with interactive icons and tooltips */}
      <aside className="sidebar">
        <div className="sidebar-top">
          <div 
            className="sidebar-item" 
            style={{ marginBottom: '20px', cursor: 'pointer' }}
            title="Meta Business Suite"
            onClick={() => setActiveNav('overview')}
          >
            <img src={metaLogo} alt="Meta Logo" style={{ width: '30px', height: '30px' }} />
          </div>

          <div 
            className={`sidebar-item ${activeNav === 'overview' ? 'active' : ''}`}
            title="Services Overview (Home)"
            onClick={() => setActiveNav('overview')}
          >
            <Home size={20} />
          </div>

          <div 
            className={`sidebar-item ${activeNav === 'analytics' ? 'active' : ''}`}
            title="Campaign Reports & Analytics"
            onClick={() => setActiveNav('analytics')}
          >
            <BarChart2 size={20} />
          </div>

          <div 
            className={`sidebar-item ${activeNav === 'billing' ? 'active' : ''}`}
            title="Billing & Payments"
            onClick={() => setActiveNav('billing')}
          >
            <CreditCard size={20} />
          </div>

          <div 
            className={`sidebar-item ${activeNav === 'audiences' ? 'active' : ''}`}
            title="Audience & Targeting Services"
            onClick={() => setActiveNav('audiences')}
          >
            <Users size={20} />
          </div>

          <div 
            className={`sidebar-item ${activeNav === 'campaigns' ? 'active' : ''}`}
            title="Meta Ad Campaigns & Boosts"
            onClick={() => setActiveNav('campaigns')}
          >
            <Megaphone size={20} />
          </div>

          <div 
            className={`sidebar-item ${activeNav === 'business' ? 'active' : ''}`}
            title="Business Suite Assets"
            onClick={() => setActiveNav('business')}
          >
            <Briefcase size={20} />
          </div>
        </div>

        <div className="sidebar-bottom">
          <div 
            className="sidebar-item" 
            title="Help & Support Centre"
            onClick={() => setHelpTopic('troubleshoot')}
          >
            <HelpCircle size={20} />
          </div>

          <div 
            className="sidebar-item" 
            title="Account & Advertising Settings"
            onClick={() => setShowSettings(true)}
          >
            <Settings size={20} />
          </div>

          <div 
            className="sidebar-item" 
            title="Search Services (Cmd + K)"
            onClick={() => setShowSearch(true)}
          >
            <Search size={20} />
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="main-content">
        {/* Top Header */}
        <header className="top-header">
          <div className="header-left">
            <h1>Billing & payments</h1>
            
            {/* Interactive Profile Selector */}
            <div 
              className="profile-selector" 
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              style={{ position: 'relative' }}
              title="Click to view profile options"
            >
              <div className="profile-avatar">RR</div>
              <span>{accountName}</span>
              <ChevronRight size={16} />

              {showProfileMenu && (
                <div 
                  className="dropdown-menu"
                  style={{
                    position: 'absolute',
                    top: '36px',
                    left: 0,
                    width: '240px',
                    background: '#ffffff',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.18)',
                    borderRadius: '8px',
                    border: '1px solid #e4e6eb',
                    padding: '8px 0',
                    zIndex: 1000
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div style={{ padding: '8px 16px', borderBottom: '1px solid #f0f2f5' }}>
                    <div style={{ fontWeight: 700, fontSize: '13px' }}>{accountName}</div>
                    <div style={{ fontSize: '11px', color: '#606770' }}>Meta Certified Ads Partner</div>
                  </div>
                  <div 
                    style={{ padding: '10px 16px', fontSize: '13px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}
                    onClick={() => { setShowSettings(true); setShowProfileMenu(false); }}
                  >
                    <Settings size={15} /> Advertising Settings
                  </div>
                  <div 
                    style={{ padding: '10px 16px', fontSize: '13px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}
                    onClick={() => { setHelpTopic('troubleshoot'); setShowProfileMenu(false); }}
                  >
                    <HelpCircle size={15} /> Help & Priority Support
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="header-right">
             {/* Interactive Account Selector */}
             <div 
               className="account-selector"
               onClick={() => setShowAccountMenu(!showAccountMenu)}
               style={{ position: 'relative', cursor: 'pointer' }}
               title="Click to switch ad account"
             >
               <span>{accountName} ({accountId.slice(0, 11)}...)</span>
               <ChevronRight size={16} />

               {showAccountMenu && (
                 <div 
                   className="dropdown-menu"
                   style={{
                     position: 'absolute',
                     top: '36px',
                     right: 0,
                     width: '280px',
                     background: '#ffffff',
                     boxShadow: '0 8px 24px rgba(0,0,0,0.18)',
                     borderRadius: '8px',
                     border: '1px solid #e4e6eb',
                     padding: '8px 0',
                     zIndex: 1000
                   }}
                   onClick={(e) => e.stopPropagation()}
                 >
                   <div style={{ padding: '8px 16px', borderBottom: '1px solid #f0f2f5', fontSize: '12px', fontWeight: 600, color: '#606770' }}>
                     SELECT AD ACCOUNT
                   </div>
                   <div 
                     style={{ padding: '10px 16px', fontSize: '13px', cursor: 'pointer', background: '#e7f3ff', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                   >
                     <div>
                       <div style={{ fontWeight: 600 }}>{accountName} (Primary)</div>
                       <div style={{ fontSize: '11px', color: '#606770' }}>ID: {accountId}</div>
                     </div>
                     <Check size={16} color="#1877f2" />
                   </div>
                   <div 
                     style={{ padding: '10px 16px', fontSize: '13px', cursor: 'pointer' }}
                     onClick={() => {
                       setAccountName('Rama Rao Media Agency');
                       setAccountId('982140192847102');
                       setShowAccountMenu(false);
                     }}
                   >
                     <div style={{ fontWeight: 600 }}>Rama Rao Media Agency</div>
                     <div style={{ fontSize: '11px', color: '#606770' }}>ID: 982140192847102</div>
                   </div>
                 </div>
               )}
             </div>

             {/* Interactive Notification Bell */}
             <div 
               className="notification-bell"
               onClick={() => setShowNotifications(!showNotifications)}
               title="Notifications"
             >
               <Bell size={20} />
               {unreadCount > 0 && <span className="notification-badge">{unreadCount}</span>}
             </div>

             {/* User Icon */}
             <div 
               className="user-icon"
               onClick={() => setShowProfileMenu(!showProfileMenu)}
               title="User Profile"
             >
               <User size={20} />
             </div>
          </div>
        </header>

        {/* Dynamic Views: Service Overview, Campaigns, Analytics, Audiences, Business Suite */}
        {activeNav === 'overview' && (
          <ServiceOverviewView 
            onNavigateToBilling={(nav) => setActiveNav(nav)} 
            onOpenAddFunds={onOpenAddFunds} 
          />
        )}

        {activeNav === 'campaigns' && (
          <CampaignsView onOpenAddFunds={onOpenAddFunds} />
        )}

        {activeNav === 'analytics' && (
          <AnalyticsView onEnrollCourse={onOpenAddFunds} />
        )}

        {activeNav === 'audiences' && (
          <AudiencesView />
        )}

        {activeNav === 'business' && (
          <BusinessSuiteView />
        )}

        {/* Default / Core View: Billing & Payments */}
        {activeNav === 'billing' && (
          <>
            {/* Tab Sub-Header */}
            <div className="tab-subheader">
               <div 
                 className={`tab ${activeTab === 'settings' ? 'active' : ''}`}
                 onClick={() => setActiveTab('settings')}
               >
                 <CreditCard size={18} />
                 <span>Payment settings</span>
               </div>
               <div 
                 className={`tab ${activeTab === 'activity' ? 'active' : ''}`}
                 onClick={() => setActiveTab('activity')}
               >
                 <BarChart2 size={18} />
                 <span>Payment activity</span>
               </div>
            </div>

            {/* Tab 2: Payment Activity (Invoices & History) */}
            {activeTab === 'activity' && (
              <div className="content-body">
                <div className="payment-settings-header" style={{ marginBottom: '16px' }}>
                  <h2>Payment Activity & Invoices</h2>
                  <p style={{ margin: '4px 0 0', color: '#606770', fontSize: '13px' }}>
                    View past transactions, UPI recharge history, and download tax invoices for GST compliance.
                  </p>
                </div>
                <PaymentActivityView onDownloadReceipt={() => downloadReceipt("2,000.00", accountName, accountId)} />
              </div>
            )}

            {/* Tab 1: Payment Settings (Default Screen) */}
            {activeTab === 'settings' && (
              <div className="content-body">
                 <div className="payment-settings-header">
                    <h2>Payment settings</h2>
                 </div>

                 {/* Tax Info Banner */}
                 <div 
                   className="info-banner"
                   style={{
                     backgroundColor: isGstVerified ? '#e6f4ea' : '#fcefdc',
                     borderColor: isGstVerified ? '#34A853' : '#ffd591'
                   }}
                 >
                   {isGstVerified ? (
                     <CheckCircle2 size={18} color="#137333" style={{ flexShrink: 0, marginTop: '2px' }} />
                   ) : (
                     <Info size={16} color="#606770" style={{ flexShrink: 0, marginTop: '2px' }} />
                   )}
                   <div className="info-text">
                     <strong>{isGstVerified ? 'GST info verified' : 'Verify your tax info'}</strong>
                     <p>
                       {isGstVerified 
                         ? `GSTIN ${verifiedGstin || '36AABCB1234F1Z5'} is verified with the GST portal. You are registered to claim Input Tax Credit.` 
                         : "Submit your GST number to confirm that you're a registered taxpayer. We need this info to comply with local tax regulations."}
                     </p>
                     <button 
                       className="verify-tax-btn" 
                       onClick={() => setShowTaxModal(true)}
                     >
                       {isGstVerified ? 'Edit tax info' : 'Verify tax info'}
                     </button>
                   </div>
                 </div>

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
                          <button 
                            className="add-funds-btn" 
                            onClick={onOpenAddFunds}
                            title="Add funds via UPI QR Code"
                          >
                            Add funds
                          </button>
                        </div>
                      </div>

                      {/* Ad Credits Card */}
                      <div 
                        className="dashboard-card" 
                        style={{ cursor: 'pointer' }}
                        onClick={onOpenAddFunds}
                        title="Click to manage ad credits"
                      >
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
                        <button 
                          className="add-method-btn"
                          onClick={onOpenAddFunds}
                          title="Add payment method"
                        >
                          Add payment method
                        </button>
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
                         <button 
                           className="download-receipt-btn"
                           onClick={() => downloadReceipt("2,000.00", accountName, accountId)}
                           title="Download official receipt"
                         >
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
                           <li onClick={() => setHelpTopic('troubleshoot')}>
                             <Info size={16} /> Troubleshoot billing and payments
                           </li>
                           <li onClick={() => setHelpTopic('billing_works')}>
                             <Info size={16} /> How ads billing works
                           </li>
                           <li onClick={() => setHelpTopic('payment_fails')}>
                             <Info size={16} /> What to do if your payment fails
                           </li>
                         </ul>
                      </div>
                    </div>
                 </div>
              </div>
            )}
          </>
        )}
      </main>

      {/* Interactive Support & Service Modals */}
      {showTaxModal && (
        <TaxVerificationModal 
          onClose={() => setShowTaxModal(false)}
          onVerifySuccess={handleTaxVerified}
        />
      )}

      {helpTopic && (
        <HelpDrawer 
          topic={helpTopic}
          onClose={() => setHelpTopic(null)}
          onOpenAddFunds={onOpenAddFunds}
        />
      )}

      {showNotifications && (
        <NotificationDrawer 
          onClose={() => setShowNotifications(false)}
          unreadCount={unreadCount}
          setUnreadCount={setUnreadCount}
        />
      )}

      {showSearch && (
        <SearchModal 
          onClose={() => setShowSearch(false)}
          onSelectAction={handleSearchAction}
        />
      )}

      {showSettings && (
        <SettingsModal 
          onClose={() => setShowSettings(false)}
        />
      )}
    </div>
  );
};

export default Dashboard;
