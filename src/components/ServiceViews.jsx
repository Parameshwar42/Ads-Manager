import React from 'react';
import { 
  Megaphone, TrendingUp, Users, Briefcase, Plus, CheckCircle2, 
  ArrowUpRight, Download, CreditCard, ShieldCheck, Sparkles, Eye, Target 
} from 'lucide-react';
import { downloadReceipt } from './ReceiptGenerator';

// 1. Service Overview View (Home Icon)
export const ServiceOverviewView = ({ onNavigateToBilling, onOpenAddFunds }) => {
  return (
    <div className="content-body" style={{ animation: 'fadeIn 0.2s ease-in-out' }}>
      <div className="payment-settings-header" style={{ marginBottom: '20px' }}>
        <div>
          <h2>Meta Advertising & Campaign Services</h2>
          <p style={{ margin: '4px 0 0', color: '#606770', fontSize: '13px' }}>
            Comprehensive Meta Ads management, prepaid billing top-ups, and audience growth solutions.
          </p>
        </div>
      </div>

      {/* Hero Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '24px' }}>
        <div className="dashboard-card" style={{ padding: '16px', margin: 0 }}>
          <div style={{ fontSize: '12px', color: '#606770', fontWeight: 600 }}>Active Managed Ads</div>
          <div style={{ fontSize: '26px', fontWeight: 700, color: '#1c1e21', marginTop: '6px' }}>6 Campaigns</div>
          <div style={{ fontSize: '11px', color: '#34A853', marginTop: '4px', fontWeight: 600 }}>● Optimal Delivery</div>
        </div>
        <div className="dashboard-card" style={{ padding: '16px', margin: 0 }}>
          <div style={{ fontSize: '12px', color: '#606770', fontWeight: 600 }}>Total Reach This Month</div>
          <div style={{ fontSize: '26px', fontWeight: 700, color: '#1c1e21', marginTop: '6px' }}>148.2K</div>
          <div style={{ fontSize: '11px', color: '#1877f2', marginTop: '4px', fontWeight: 600 }}>↑ +24% vs last month</div>
        </div>
        <div className="dashboard-card" style={{ padding: '16px', margin: 0 }}>
          <div style={{ fontSize: '12px', color: '#606770', fontWeight: 600 }}>Available Prepaid Balance</div>
          <div style={{ fontSize: '26px', fontWeight: 700, color: '#1877f2', marginTop: '6px' }}>₹361.48</div>
          <div style={{ fontSize: '11px', color: '#fa383e', marginTop: '4px', fontWeight: 600 }}>Low Balance Alert</div>
        </div>
        <div className="dashboard-card" style={{ padding: '16px', margin: 0 }}>
          <div style={{ fontSize: '12px', color: '#606770', fontWeight: 600 }}>Account Health</div>
          <div style={{ fontSize: '26px', fontWeight: 700, color: '#34A853', marginTop: '6px' }}>100%</div>
          <div style={{ fontSize: '11px', color: '#606770', marginTop: '4px' }}>Verified Meta Partner</div>
        </div>
      </div>

      {/* Services Grid */}
      <h3 style={{ fontSize: '16px', fontWeight: 700, margin: '0 0 16px 0' }}>Available Services</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '18px', marginBottom: '24px' }}>
        <div className="dashboard-card" style={{ margin: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#1877f2', marginBottom: '10px' }}>
              <CreditCard size={20} />
              <strong style={{ fontSize: '15px' }}>Prepaid Account Top-Up</strong>
            </div>
            <p style={{ fontSize: '13px', color: '#606770', margin: 0, lineHeight: '1.4' }}>
              Instant UPI balance recharge with zero processing fees. Keep your Facebook & Instagram ads running uninterrupted.
            </p>
          </div>
          <button 
            onClick={onOpenAddFunds}
            className="add-funds-btn" 
            style={{ marginTop: '16px', width: '100%', textAlign: 'center' }}
          >
            Add Funds (UPI)
          </button>
        </div>

        <div className="dashboard-card" style={{ margin: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#1877f2', marginBottom: '10px' }}>
              <Megaphone size={20} />
              <strong style={{ fontSize: '15px' }}>Ad Campaign Setup & Boost</strong>
            </div>
            <p style={{ fontSize: '13px', color: '#606770', margin: 0, lineHeight: '1.4' }}>
              End-to-end campaign creation for Lead Generation, Sales conversions, and WhatsApp click-to-chat promotions.
            </p>
          </div>
          <button 
            onClick={() => onNavigateToBilling('campaigns')}
            style={{ 
              marginTop: '16px', 
              background: '#e7f3ff', 
              color: '#1877f2', 
              border: '1px solid #1877f2', 
              padding: '8px 16px', 
              borderRadius: '6px', 
              fontWeight: 600, 
              cursor: 'pointer' 
            }}
          >
            View Campaigns
          </button>
        </div>

        <div className="dashboard-card" style={{ margin: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#1877f2', marginBottom: '10px' }}>
              <Users size={20} />
              <strong style={{ fontSize: '15px' }}>Target Audience Strategy</strong>
            </div>
            <p style={{ fontSize: '13px', color: '#606770', margin: 0, lineHeight: '1.4' }}>
              Hyper-targeted demographics, custom website retargeting pixels, and Lookalike audiences to maximize ROAS.
            </p>
          </div>
          <button 
            onClick={() => onNavigateToBilling('audiences')}
            style={{ 
              marginTop: '16px', 
              background: '#e7f3ff', 
              color: '#1877f2', 
              border: '1px solid #1877f2', 
              padding: '8px 16px', 
              borderRadius: '6px', 
              fontWeight: 600, 
              cursor: 'pointer' 
            }}
          >
            Manage Audiences
          </button>
        </div>
      </div>
    </div>
  );
};

// 2. Campaigns View (Megaphone Icon)
export const CampaignsView = ({ onOpenAddFunds }) => {
  const campaigns = [
    { id: 1, name: 'Lead Generation - Real Estate & Local', status: 'Active', budget: '₹1,200/day', spent: '₹14,400', leads: 428, costPerLead: '₹33.64' },
    { id: 2, name: 'Instagram Reel Brand Awareness Boost', status: 'Active', budget: '₹800/day', spent: '₹9,600', leads: '54.2K Views', costPerLead: '₹0.17/view' },
    { id: 3, name: 'WhatsApp Click-to-Chat Direct Service', status: 'Active', budget: '₹500/day', spent: '₹5,000', leads: 182, costPerLead: '₹27.47' },
    { id: 4, name: 'E-Commerce Product Retargeting Promo', status: 'Paused', budget: '₹1,500/day', spent: '₹18,200', leads: 310, costPerLead: '₹58.70' },
  ];

  return (
    <div className="content-body" style={{ animation: 'fadeIn 0.2s ease-in-out' }}>
      <div className="payment-settings-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <div>
          <h2>Meta Ad Campaigns & Boost Services</h2>
          <p style={{ margin: '4px 0 0', color: '#606770', fontSize: '13px' }}>
            Manage active advertising services running on Facebook, Instagram, Messenger, and Audience Network.
          </p>
        </div>
        <button 
          onClick={onOpenAddFunds} 
          className="add-funds-btn"
          style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
        >
          <Plus size={16} /> Top-Up Campaign Budget
        </button>
      </div>

      <div className="dashboard-card" style={{ padding: 0, overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '13px' }}>
          <thead>
            <tr style={{ background: '#f5f6f7', borderBottom: '1px solid #e4e6eb' }}>
              <th style={{ padding: '12px 16px', fontWeight: 600, color: '#606770' }}>Campaign Name</th>
              <th style={{ padding: '12px 16px', fontWeight: 600, color: '#606770' }}>Status</th>
              <th style={{ padding: '12px 16px', fontWeight: 600, color: '#606770' }}>Daily Budget</th>
              <th style={{ padding: '12px 16px', fontWeight: 600, color: '#606770' }}>Total Spent</th>
              <th style={{ padding: '12px 16px', fontWeight: 600, color: '#606770' }}>Results</th>
            </tr>
          </thead>
          <tbody>
            {campaigns.map((c) => (
              <tr key={c.id} style={{ borderBottom: '1px solid #f0f2f5' }}>
                <td style={{ padding: '14px 16px', fontWeight: 600, color: '#1c1e21' }}>{c.name}</td>
                <td style={{ padding: '14px 16px' }}>
                  <span style={{ 
                    padding: '3px 8px', 
                    borderRadius: '12px', 
                    fontSize: '11px', 
                    fontWeight: 700,
                    background: c.status === 'Active' ? '#e6f4ea' : '#f1f3f4',
                    color: c.status === 'Active' ? '#137333' : '#5f6368'
                  }}>
                    ● {c.status}
                  </span>
                </td>
                <td style={{ padding: '14px 16px', fontWeight: 600 }}>{c.budget}</td>
                <td style={{ padding: '14px 16px', color: '#606770' }}>{c.spent}</td>
                <td style={{ padding: '14px 16px', color: '#1877f2', fontWeight: 600 }}>{c.leads}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// 3. Analytics View (BarChart2 Icon)
export const AnalyticsView = () => {
  return (
    <div className="content-body" style={{ animation: 'fadeIn 0.2s ease-in-out' }}>
      <div className="payment-settings-header" style={{ marginBottom: '20px' }}>
        <h2>Campaign Performance & Analytics</h2>
        <p style={{ margin: '4px 0 0', color: '#606770', fontSize: '13px' }}>
          Real-time delivery statistics and return on ad spend (ROAS) for Rama Rao Pulibandla ad account.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '24px' }}>
        <div className="dashboard-card" style={{ padding: '16px', margin: 0 }}>
          <div style={{ fontSize: '12px', color: '#606770', fontWeight: 600 }}>Total Impressions</div>
          <div style={{ fontSize: '26px', fontWeight: 700, color: '#1c1e21', marginTop: '6px' }}>312,400</div>
          <div style={{ fontSize: '11px', color: '#34A853', marginTop: '4px' }}>↑ +14.2% this period</div>
        </div>
        <div className="dashboard-card" style={{ padding: '16px', margin: 0 }}>
          <div style={{ fontSize: '12px', color: '#606770', fontWeight: 600 }}>Click-Through Rate (CTR)</div>
          <div style={{ fontSize: '26px', fontWeight: 700, color: '#1877f2', marginTop: '6px' }}>2.85%</div>
          <div style={{ fontSize: '11px', color: '#606770', marginTop: '4px' }}>Industry Avg: 1.20%</div>
        </div>
        <div className="dashboard-card" style={{ padding: '16px', margin: 0 }}>
          <div style={{ fontSize: '12px', color: '#606770', fontWeight: 600 }}>Cost Per Click (CPC)</div>
          <div style={{ fontSize: '26px', fontWeight: 700, color: '#1c1e21', marginTop: '6px' }}>₹4.12</div>
          <div style={{ fontSize: '11px', color: '#34A853', marginTop: '4px' }}>↓ Cost reduced by 18%</div>
        </div>
        <div className="dashboard-card" style={{ padding: '16px', margin: 0 }}>
          <div style={{ fontSize: '12px', color: '#606770', fontWeight: 600 }}>Overall ROAS</div>
          <div style={{ fontSize: '26px', fontWeight: 700, color: '#34A853', marginTop: '6px' }}>4.2x</div>
          <div style={{ fontSize: '11px', color: '#34A853', marginTop: '4px' }}>High Return Ratio</div>
        </div>
      </div>
    </div>
  );
};

// 4. Audiences View (Users Icon)
export const AudiencesView = () => {
  return (
    <div className="content-body" style={{ animation: 'fadeIn 0.2s ease-in-out' }}>
      <div className="payment-settings-header" style={{ marginBottom: '20px' }}>
        <h2>Target Audiences & Customer Segments</h2>
        <p style={{ margin: '4px 0 0', color: '#606770', fontSize: '13px' }}>
          Configured custom and lookalike audiences powering your Meta Ad campaigns.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        <div className="dashboard-card">
          <div className="card-header">
            <h3><Users size={18} color="#1877f2" /> Custom Audiences</h3>
          </div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '13px' }}>
            <li style={{ padding: '10px 0', borderBottom: '1px solid #f0f2f5', display: 'flex', justifyContent: 'space-between' }}>
              <span>Website Visitors (Last 30 Days)</span>
              <strong>42,000 users</strong>
            </li>
            <li style={{ padding: '10px 0', borderBottom: '1px solid #f0f2f5', display: 'flex', justifyContent: 'space-between' }}>
              <span>Instagram Page Engagers</span>
              <strong>18,500 users</strong>
            </li>
            <li style={{ padding: '10px 0', display: 'flex', justifyContent: 'space-between' }}>
              <span>Customer Phone / Lead List</span>
              <strong>6,200 leads</strong>
            </li>
          </ul>
        </div>

        <div className="dashboard-card">
          <div className="card-header">
            <h3><Target size={18} color="#1877f2" /> Lookalike Audiences</h3>
          </div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '13px' }}>
            <li style={{ padding: '10px 0', borderBottom: '1px solid #f0f2f5', display: 'flex', justifyContent: 'space-between' }}>
              <span>1% India Lookalike (Top Converters)</span>
              <strong>1.8M audience</strong>
            </li>
            <li style={{ padding: '10px 0', display: 'flex', justifyContent: 'space-between' }}>
              <span>2% High-Income Shoppers</span>
              <strong>3.6M audience</strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

// 5. Business Suite View (Briefcase Icon)
export const BusinessSuiteView = () => {
  return (
    <div className="content-body" style={{ animation: 'fadeIn 0.2s ease-in-out' }}>
      <div className="payment-settings-header" style={{ marginBottom: '20px' }}>
        <h2>Meta Business Suite & Brand Assets</h2>
        <p style={{ margin: '4px 0 0', color: '#606770', fontSize: '13px' }}>
          Connected pages, pixels, and verified enterprise business manager assets.
        </p>
      </div>

      <div className="dashboard-grid">
        <div className="dashboard-card">
          <div className="card-header">
            <h3><Briefcase size={18} color="#1877f2" /> Business Account Portfolio</h3>
          </div>
          <div style={{ fontSize: '14px', lineHeight: '1.6' }}>
            <p><strong>Business Name:</strong> Rama Rao Media & Advertising Solutions</p>
            <p><strong>Business ID:</strong> 492019482019401</p>
            <p><strong>Verification Status:</strong> <span style={{ color: '#34A853', fontWeight: 600 }}>✓ Meta Business Verified</span></p>
            <p><strong>Primary Contact:</strong> ramarao@adsmedia.in</p>
          </div>
        </div>

        <div className="dashboard-card">
          <div className="card-header">
            <h3><ShieldCheck size={18} color="#34A853" /> Connected Ad Assets</h3>
          </div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '13px', lineHeight: '1.8' }}>
            <li>✓ Facebook Page Connected (Active)</li>
            <li>✓ Instagram Business Account Linked</li>
            <li>✓ Meta Pixel & CAPI Configured</li>
            <li>✓ WhatsApp Business API Gateway Active</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

// 6. Payment Activity Table (Payment Activity Sub-Tab)
export const PaymentActivityView = ({ onDownloadReceipt }) => {
  const transactions = [
    { id: 'TXN-984210', date: '01 Nov 2026, 14:22', desc: 'Prepaid Funds Recharge via UPI', method: 'UPI (GPay / PhonePe)', amount: '₹2,000.00', status: 'Completed' },
    { id: 'TXN-874192', date: '24 Oct 2026, 11:05', desc: 'Campaign Budget Top-Up', method: 'UPI (Paytm)', amount: '₹5,000.00', status: 'Completed' },
    { id: 'TXN-763019', date: '12 Oct 2026, 18:40', desc: 'Prepaid Funds Recharge', method: 'UPI (BHIM)', amount: '₹1,500.00', status: 'Completed' },
    { id: 'TXN-652940', date: '29 Sep 2026, 09:15', desc: 'Monthly Ad Boost Package', method: 'UPI (CRED)', amount: '₹4,000.00', status: 'Completed' },
  ];

  return (
    <div style={{ marginTop: '20px', animation: 'fadeIn 0.2s ease-in-out' }}>
      <div className="dashboard-card" style={{ padding: 0, overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '13px' }}>
          <thead>
            <tr style={{ background: '#f5f6f7', borderBottom: '1px solid #e4e6eb' }}>
              <th style={{ padding: '12px 16px', fontWeight: 600, color: '#606770' }}>Transaction ID</th>
              <th style={{ padding: '12px 16px', fontWeight: 600, color: '#606770' }}>Date & Time</th>
              <th style={{ padding: '12px 16px', fontWeight: 600, color: '#606770' }}>Description</th>
              <th style={{ padding: '12px 16px', fontWeight: 600, color: '#606770' }}>Payment Method</th>
              <th style={{ padding: '12px 16px', fontWeight: 600, color: '#606770' }}>Amount</th>
              <th style={{ padding: '12px 16px', fontWeight: 600, color: '#606770' }}>Status</th>
              <th style={{ padding: '12px 16px', fontWeight: 600, color: '#606770' }}>Receipt</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((t) => (
              <tr key={t.id} style={{ borderBottom: '1px solid #f0f2f5' }}>
                <td style={{ padding: '14px 16px', fontWeight: 600, color: '#1c1e21' }}>{t.id}</td>
                <td style={{ padding: '14px 16px', color: '#606770' }}>{t.date}</td>
                <td style={{ padding: '14px 16px', fontWeight: 600 }}>{t.desc}</td>
                <td style={{ padding: '14px 16px', color: '#606770' }}>{t.method}</td>
                <td style={{ padding: '14px 16px', fontWeight: 700, color: '#1c1e21' }}>{t.amount}</td>
                <td style={{ padding: '14px 16px' }}>
                  <span style={{ 
                    padding: '3px 8px', 
                    borderRadius: '12px', 
                    fontSize: '11px', 
                    fontWeight: 700,
                    background: '#e6f4ea',
                    color: '#137333'
                  }}>
                    ✓ {t.status}
                  </span>
                </td>
                <td style={{ padding: '14px 16px' }}>
                  <button 
                    onClick={() => downloadReceipt(t.amount.replace('₹', ''))}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#1877f2',
                      fontWeight: 600,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      padding: 0
                    }}
                  >
                    <Download size={14} /> Receipt
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
