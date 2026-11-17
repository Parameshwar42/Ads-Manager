import React, { useState } from 'react';
import { 
  Megaphone, TrendingUp, Users, Briefcase, Plus, CheckCircle2, 
  ArrowUpRight, Download, CreditCard, ShieldCheck, Sparkles, Eye, Target,
  BookOpen, Video, Star, Award, Clock, FileText, ChevronRight, ArrowRight,
  Lock, Zap, Check, ExternalLink, HelpCircle, Gift, Shield
} from 'lucide-react';
import { downloadReceipt } from './ReceiptGenerator';
import ebookCover from '../assets/ebook-cover.jpg';

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
            onClick={() => onOpenAddFunds && onOpenAddFunds()}
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
          onClick={() => onOpenAddFunds && onOpenAddFunds()} 
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

// 3. Analytics View & Official Meta Ads E-Book Course (BarChart2 Icon)
export const AnalyticsView = ({ onEnrollCourse }) => {
  const [activeTab, setActiveTab] = useState('curriculum'); // 'curriculum' | 'included' | 'reviews'
  const [expandedChapter, setExpandedChapter] = useState(1);
  const [sampleDownloaded, setSampleDownloaded] = useState(false);

  const chapters = [
    {
      num: 1,
      title: "The Modern Meta Algorithm & Advantage+ Architecture",
      pages: "Pages 12 - 42",
      highlights: [
        "How the 2026 Meta Andromeda machine learning auction decides ad rank",
        "Broad targeting vs hyper-specific layering: When and how to deploy each",
        "Preventing the dreaded 'Learning Limited' status and eliminating bid inflation",
        "Configuring zero-latency Conversions API (CAPI) deduplication"
      ]
    },
    {
      num: 2,
      title: "High-Converting Creative Frameworks & 3-Second Hooks",
      pages: "Pages 43 - 82",
      highlights: [
        "The 15 Psychological 3-Second Visual & Audio Hooks for Reels and Stories",
        "Dynamic Creative Testing (DCT) blueprint: Finding unicorn creatives in 72 hours",
        "UGC (User Generated Content) scripting templates that convert cold traffic",
        "High-contrast carousel storytelling formulas for D2C and service brands"
      ]
    },
    {
      num: 3,
      title: "Advanced Audience Stacking, Retargeting & Custom Audiences",
      pages: "Pages 83 - 120",
      highlights: [
        "First-party customer data activation & WhatsApp list synchronization",
        "Cascading Lookalike strategies (1%, 1-3%, 3-5%) with exclusion hygiene",
        "High-intent retargeting funnels (0-3 day view, 7 day cart, 30 day visitor)",
        "Combating iOS tracking loss with blended attribution windows"
      ]
    },
    {
      num: 4,
      title: "Budget Optimization, CBO vs ABO & Surge Scaling Protocols",
      pages: "Pages 121 - 156",
      highlights: [
        "When to transition from ABO ad-set testing to CBO campaign scaling",
        "The 'Surge Scaling' formula: Increasing ad budgets by 30-50% safely without reset",
        "Cost-cap vs Minimum ROAS bidding: Scaling during high-competition festivals",
        "Budget pacing & preventing aggressive spend in the first 4 hours of the day"
      ]
    },
    {
      num: 5,
      title: "Ban-Proof Compliance, Account Protection & Copywriting Formulas",
      pages: "Pages 157 - 184",
      highlights: [
        "Uncensored Meta Advertising Policy audit: AI trigger words that cause auto-flags",
        "Landing page compliance rules (disclaimers, terms, and speed benchmarks)",
        "25+ copy-paste ad copy templates for Lead Generation, E-commerce, & Info Products",
        "Step-by-step procedure to unban and reinstate disabled ad accounts in under 48 hours"
      ]
    }
  ];

  const handleDownloadSample = () => {
    const sampleText = `===============================================================
   META ADS MANAGER MASTERCLASS — CHAPTER 1 PREVIEW (FREE SAMPLE)
       By Rama Rao Pulibandla | Meta Certified Ads Partner
===============================================================

Welcome to Chapter 1: The Modern Meta Algorithm & Advantage+ Architecture

CORE PRINCIPLE:
In 2026, creative IS your targeting. Meta's Andromeda AI models parse 
video tokens, audio scripts, and visual elements in real-time to match 
your ad with the highest-converting prospect in your demographic.

KEY TAKEAWAYS FROM CHAPTER 1:
1. Learning Phase Mastery:
   Never make budget changes exceeding 20% in a 24-hour cycle. 
   Sudden changes force the algorithm into re-learning mode, causing 
   CPA spikes of up to 140%.

2. Broad Targeting Protocol:
   Allow Meta's AI to optimize placements across Reels, Feeds, and 
   Messenger simultaneously by configuring broad location + gender filters 
   with creative-based hooks.

3. Conversions API (CAPI) Integration:
   Browser cookies only capture 68% of conversion signals. First-party 
   server-side event matching ensures 98%+ signal fidelity.

---------------------------------------------------------------
GET THE FULL 184-PAGE E-BOOK & VIDEO MASTERCLASS:
Unlock all 5 Chapters, 25+ Copy Templates, ROAS Calculator, & SOPs:
Enroll for just ₹499 (Limited Special Offer) inside your Ads Manager!
===============================================================`;

    const blob = new Blob([sampleText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Meta_Ads_Masterclass_Chapter1_Preview.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    setSampleDownloaded(true);
    setTimeout(() => setSampleDownloaded(false), 3000);
  };

  return (
    <div className="content-body" style={{ animation: 'fadeIn 0.2s ease-in-out' }}>
      {/* Top Header */}
      <div className="payment-settings-header" style={{ marginBottom: '20px' }}>
        <h2>Campaign Performance & Analytics</h2>
        <p style={{ margin: '4px 0 0', color: '#606770', fontSize: '13px' }}>
          Real-time delivery statistics, ROAS benchmarks, and advanced Meta advertising training resources.
        </p>
      </div>

      {/* Real-Time Live Performance Metrics */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '30px' }}>
        <div className="dashboard-card" style={{ padding: '16px', margin: 0 }}>
          <div style={{ fontSize: '12px', color: '#606770', fontWeight: 600 }}>Total Impressions</div>
          <div style={{ fontSize: '26px', fontWeight: 700, color: '#1c1e21', marginTop: '6px' }}>312,400</div>
          <div style={{ fontSize: '11px', color: '#34A853', marginTop: '4px', fontWeight: 600 }}>↑ +14.2% this period</div>
        </div>
        <div className="dashboard-card" style={{ padding: '16px', margin: 0 }}>
          <div style={{ fontSize: '12px', color: '#606770', fontWeight: 600 }}>Click-Through Rate (CTR)</div>
          <div style={{ fontSize: '26px', fontWeight: 700, color: '#1877f2', marginTop: '6px' }}>2.85%</div>
          <div style={{ fontSize: '11px', color: '#606770', marginTop: '4px' }}>Industry Avg: 1.20%</div>
        </div>
        <div className="dashboard-card" style={{ padding: '16px', margin: 0 }}>
          <div style={{ fontSize: '12px', color: '#606770', fontWeight: 600 }}>Cost Per Click (CPC)</div>
          <div style={{ fontSize: '26px', fontWeight: 700, color: '#1c1e21', marginTop: '6px' }}>₹4.12</div>
          <div style={{ fontSize: '11px', color: '#34A853', marginTop: '4px', fontWeight: 600 }}>↓ Cost reduced by 18%</div>
        </div>
        <div className="dashboard-card" style={{ padding: '16px', margin: 0 }}>
          <div style={{ fontSize: '12px', color: '#606770', fontWeight: 600 }}>Overall ROAS</div>
          <div style={{ fontSize: '26px', fontWeight: 700, color: '#34A853', marginTop: '6px' }}>4.2x</div>
          <div style={{ fontSize: '11px', color: '#34A853', marginTop: '4px', fontWeight: 600 }}>High Return Ratio</div>
        </div>
      </div>

      {/* ========================================================
          FEATURED COURSE & E-BOOK SALES SECTION
          ======================================================== */}
      <div 
        style={{
          background: 'linear-gradient(135deg, #0d1b2a 0%, #1b263b 60%, #1e3a8a 100%)',
          borderRadius: '14px',
          padding: '28px 32px',
          color: '#ffffff',
          boxShadow: '0 12px 32px rgba(15, 23, 42, 0.25)',
          marginBottom: '32px',
          position: 'relative',
          overflow: 'hidden',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}
      >
        {/* Subtle decorative glow */}
        <div style={{
          position: 'absolute',
          top: '-40px',
          right: '-40px',
          width: '240px',
          height: '240px',
          background: 'radial-gradient(circle, rgba(24, 119, 242, 0.35) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />

        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '32px', alignItems: 'center' }}>
          {/* Left Column: Course & Book Details */}
          <div>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '14px' }}>
              <span style={{ 
                background: 'rgba(24, 119, 242, 0.25)', 
                border: '1px solid #1877f2', 
                color: '#60a5fa', 
                fontSize: '11px', 
                fontWeight: 700, 
                padding: '4px 10px', 
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '5px'
              }}>
                <Sparkles size={12} /> #1 BESTSELLING ADS PLAYBOOK
              </span>
              <span style={{ 
                background: 'rgba(52, 168, 83, 0.25)', 
                border: '1px solid #34A853', 
                color: '#86efac', 
                fontSize: '11px', 
                fontWeight: 700, 
                padding: '4px 10px', 
                borderRadius: '20px'
              }}>
                ⭐ 4.9/5 (2,480+ Marketers Enrolled)
              </span>
              <span style={{ 
                background: 'rgba(255, 255, 255, 0.15)', 
                color: '#e2e8f0', 
                fontSize: '11px', 
                fontWeight: 600, 
                padding: '4px 8px', 
                borderRadius: '20px'
              }}>
                2026 EDITION
              </span>
            </div>

            <h1 style={{ fontSize: '26px', fontWeight: 800, margin: '0 0 10px 0', lineHeight: '1.25', color: '#ffffff' }}>
              Meta Ads Manager Mastery: The Complete 10x ROAS E-Book & Masterclass
            </h1>

            <p style={{ fontSize: '14px', color: '#cbd5e1', lineHeight: '1.5', margin: '0 0 18px 0' }}>
              The step-by-step operational blueprint to scale profitable Facebook & Instagram ad campaigns. Master Advantage+ AI, 3-second hook frameworks, CBO budget surge scaling, and zero-ban compliance policies.
            </p>

            {/* Author Credit */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #1877f2, #3b82f6)',
                color: '#fff',
                fontWeight: 700,
                fontSize: '13px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '2px solid rgba(255,255,255,0.3)'
              }}>
                RR
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '13px', color: '#f8fafc' }}>Rama Rao Pulibandla</div>
                <div style={{ fontSize: '11px', color: '#94a3b8' }}>Meta Certified Media Buying Partner & Performance Director</div>
              </div>
            </div>

            {/* Feature Bullets */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 16px', marginBottom: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#e2e8f0' }}>
                <CheckCircle2 size={16} color="#38bdf8" /> 184-Page Comprehensive E-Book
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#e2e8f0' }}>
                <CheckCircle2 size={16} color="#38bdf8" /> 14 Full HD Video Walkthroughs
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#e2e8f0' }}>
                <CheckCircle2 size={16} color="#38bdf8" /> 25+ Tested Copywriting Formulas
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#e2e8f0' }}>
                <CheckCircle2 size={16} color="#38bdf8" /> Lifetime Access + Quarterly Updates
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
              <button 
                onClick={() => onEnrollCourse && onEnrollCourse("499.00")}
                style={{
                  background: '#1877f2',
                  color: '#ffffff',
                  border: 'none',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 4px 14px rgba(24, 119, 242, 0.4)',
                  transition: 'transform 0.15s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <Zap size={16} /> Enroll & Get E-Book Access (₹499)
              </button>

              <button 
                onClick={handleDownloadSample}
                style={{
                  background: 'rgba(255, 255, 255, 0.12)',
                  color: '#ffffff',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  padding: '12px 18px',
                  borderRadius: '8px',
                  fontSize: '13px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <Download size={15} /> {sampleDownloaded ? 'Sample Downloaded!' : 'Free Sample Preview'}
              </button>
            </div>
          </div>

          {/* Right Column: 3D Book Mockup & Pricing Card */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div 
              style={{
                position: 'relative',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 18px 42px rgba(0, 0, 0, 0.55)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                background: '#0a0f1d',
                width: '100%',
                maxWidth: '320px'
              }}
            >
              <img 
                src={ebookCover} 
                alt="Meta Ads Manager Masterclass E-Book & Course Bundle" 
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              />
              
              <div style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                background: '#fa383e',
                color: '#ffffff',
                fontSize: '11px',
                fontWeight: 800,
                padding: '4px 8px',
                borderRadius: '6px',
                letterSpacing: '0.5px'
              }}>
                83% OFF TODAY
              </div>
            </div>

            {/* Pricing Summary Box */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.08)',
              borderRadius: '10px',
              padding: '14px 18px',
              width: '100%',
              maxWidth: '320px',
              boxSizing: 'border-box',
              marginTop: '16px',
              border: '1px solid rgba(255, 255, 255, 0.12)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <div>
                  <span style={{ fontSize: '12px', color: '#94a3b8', textDecoration: 'line-through', marginRight: '8px' }}>₹2,999</span>
                  <span style={{ fontSize: '24px', fontWeight: 800, color: '#38bdf8' }}>₹499.00</span>
                </div>
                <span style={{ fontSize: '11px', color: '#86efac', fontWeight: 700 }}>One-Time Payment</span>
              </div>
              <div style={{ fontSize: '11px', color: '#94a3b8', marginTop: '6px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Shield size={12} color="#34A853" /> 100% Risk-Free 14-Day Money Back Guarantee
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          CURRICULUM, BONUSES & TESTIMONIALS TABS
          ======================================================== */}
      <div className="dashboard-card" style={{ padding: '24px', marginBottom: '28px' }}>
        <div style={{ display: 'flex', gap: '20px', borderBottom: '1px solid #e4e6eb', marginBottom: '20px' }}>
          <button
            onClick={() => setActiveTab('curriculum')}
            style={{
              background: 'none',
              border: 'none',
              padding: '8px 4px 14px',
              fontSize: '15px',
              fontWeight: 700,
              cursor: 'pointer',
              color: activeTab === 'curriculum' ? '#1877f2' : '#606770',
              borderBottom: activeTab === 'curriculum' ? '3px solid #1877f2' : '3px solid transparent'
            }}
          >
            E-Book Curriculum (5 Chapters)
          </button>
          <button
            onClick={() => setActiveTab('included')}
            style={{
              background: 'none',
              border: 'none',
              padding: '8px 4px 14px',
              fontSize: '15px',
              fontWeight: 700,
              cursor: 'pointer',
              color: activeTab === 'included' ? '#1877f2' : '#606770',
              borderBottom: activeTab === 'included' ? '3px solid #1877f2' : '3px solid transparent'
            }}
          >
            What's Included & Free Bonuses
          </button>
          <button
            onClick={() => setActiveTab('reviews')}
            style={{
              background: 'none',
              border: 'none',
              padding: '8px 4px 14px',
              fontSize: '15px',
              fontWeight: 700,
              cursor: 'pointer',
              color: activeTab === 'reviews' ? '#1877f2' : '#606770',
              borderBottom: activeTab === 'reviews' ? '3px solid #1877f2' : '3px solid transparent'
            }}
          >
            Student Results & Reviews
          </button>
        </div>

        {/* Tab 1: Curriculum Chapters Accordion */}
        {activeTab === 'curriculum' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {chapters.map((ch) => (
              <div 
                key={ch.num}
                style={{
                  border: '1px solid #e4e6eb',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  background: '#ffffff'
                }}
              >
                <div 
                  onClick={() => setExpandedChapter(expandedChapter === ch.num ? null : ch.num)}
                  style={{
                    padding: '14px 18px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    background: expandedChapter === ch.num ? '#f0f7ff' : '#f8f9fa',
                    transition: 'background 0.15s ease'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{
                      width: '26px',
                      height: '26px',
                      borderRadius: '50%',
                      background: expandedChapter === ch.num ? '#1877f2' : '#e4e6eb',
                      color: expandedChapter === ch.num ? '#fff' : '#606770',
                      fontSize: '12px',
                      fontWeight: 700,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      {ch.num}
                    </span>
                    <div>
                      <strong style={{ fontSize: '14px', color: '#1c1e21' }}>{ch.title}</strong>
                      <span style={{ fontSize: '12px', color: '#606770', marginLeft: '10px' }}>({ch.pages})</span>
                    </div>
                  </div>
                  <ChevronRight 
                    size={18} 
                    color="#606770" 
                    style={{ 
                      transform: expandedChapter === ch.num ? 'rotate(90deg)' : 'rotate(0deg)',
                      transition: 'transform 0.2s ease'
                    }} 
                  />
                </div>

                {expandedChapter === ch.num && (
                  <div style={{ padding: '16px 22px 18px', background: '#ffffff', borderTop: '1px solid #e4e6eb' }}>
                    <div style={{ fontSize: '12px', fontWeight: 700, color: '#606770', textTransform: 'uppercase', marginBottom: '8px' }}>
                      Key Learning Modules:
                    </div>
                    <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '13px', lineHeight: '1.7', color: '#334155' }}>
                      {ch.highlights.map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Everything Included & Bonuses */}
        {activeTab === 'included' && (
          <div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '24px' }}>
              <div style={{ padding: '16px', borderRadius: '8px', background: '#f8f9fa', border: '1px solid #e4e6eb' }}>
                <BookOpen size={24} color="#1877f2" style={{ marginBottom: '8px' }} />
                <div style={{ fontWeight: 700, fontSize: '14px', marginBottom: '4px' }}>184-Page Color E-Book</div>
                <div style={{ fontSize: '12px', color: '#606770' }}>High-definition PDF with illustrations, screenshots, and visual checklists.</div>
              </div>
              <div style={{ padding: '16px', borderRadius: '8px', background: '#f8f9fa', border: '1px solid #e4e6eb' }}>
                <Video size={24} color="#1877f2" style={{ marginBottom: '8px' }} />
                <div style={{ fontWeight: 700, fontSize: '14px', marginBottom: '4px' }}>14 HD Video Lessons</div>
                <div style={{ fontSize: '12px', color: '#606770' }}>Over-the-shoulder video walkthroughs inside actual Meta Ads Manager accounts.</div>
              </div>
              <div style={{ padding: '16px', borderRadius: '8px', background: '#f8f9fa', border: '1px solid #e4e6eb' }}>
                <FileText size={24} color="#1877f2" style={{ marginBottom: '8px' }} />
                <div style={{ fontWeight: 700, fontSize: '14px', marginBottom: '4px' }}>25+ Ad Copy Templates</div>
                <div style={{ fontSize: '12px', color: '#606770' }}>Ready-to-use headlines, body copy, and 3-second hook scripts for Reels and Feeds.</div>
              </div>
            </div>

            {/* 3 Free Bonuses */}
            <h4 style={{ fontSize: '15px', fontWeight: 700, margin: '0 0 14px 0', color: '#1c1e21', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Gift size={18} color="#fa383e" /> 3 Exclusive Free Bonuses (Worth ₹2,397):
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ padding: '12px 16px', borderRadius: '8px', background: '#fef2f2', border: '1px solid #fecaca', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <strong style={{ fontSize: '13px', color: '#991b1b' }}>Bonus 1: Dynamic ROAS & Breakeven Ad Calculator (Excel/Sheets)</strong>
                  <div style={{ fontSize: '12px', color: '#7f1d1d' }}>Know your exact profit margins before spending a single rupee on ads.</div>
                </div>
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#dc2626' }}>Value: ₹999 (FREE)</span>
              </div>
              <div style={{ padding: '12px 16px', borderRadius: '8px', background: '#fef2f2', border: '1px solid #fecaca', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <strong style={{ fontSize: '13px', color: '#991b1b' }}>Bonus 2: 50+ Proven Instagram Reel Hooks Swipe File</strong>
                  <div style={{ fontSize: '12px', color: '#7f1d1d' }}>Stop the scroll and skyrocket video watch time past the 50% mark.</div>
                </div>
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#dc2626' }}>Value: ₹799 (FREE)</span>
              </div>
              <div style={{ padding: '12px 16px', borderRadius: '8px', background: '#fef2f2', border: '1px solid #fecaca', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <strong style={{ fontSize: '13px', color: '#991b1b' }}>Bonus 3: Zero-Ban Meta Policy Audit & Reinstatement SOP</strong>
                  <div style={{ fontSize: '12px', color: '#7f1d1d' }}>Keep your ad account protected from automated AI restriction algorithms.</div>
                </div>
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#dc2626' }}>Value: ₹599 (FREE)</span>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Reviews */}
        {activeTab === 'reviews' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
            <div style={{ padding: '16px', background: '#f8f9fa', borderRadius: '8px', border: '1px solid #e4e6eb' }}>
              <div style={{ color: '#F59E0B', marginBottom: '6px' }}>⭐⭐⭐⭐⭐</div>
              <p style={{ fontSize: '13px', color: '#334155', fontStyle: 'italic', margin: '0 0 10px 0', lineHeight: '1.5' }}>
                "We scaled our D2C brand from ₹50,000/month to over ₹6.5 Lakhs in 60 days following the Advantage+ scaling framework in Chapter 4."
              </p>
              <div style={{ fontWeight: 700, fontSize: '12px' }}>Vikram Sharma</div>
              <div style={{ fontSize: '11px', color: '#606770' }}>E-Commerce Store Owner</div>
            </div>

            <div style={{ padding: '16px', background: '#f8f9fa', borderRadius: '8px', border: '1px solid #e4e6eb' }}>
              <div style={{ color: '#F59E0B', marginBottom: '6px' }}>⭐⭐⭐⭐⭐</div>
              <p style={{ fontSize: '13px', color: '#334155', fontStyle: 'italic', margin: '0 0 10px 0', lineHeight: '1.5' }}>
                "The 3-second hook formulas and ad copy templates cut our cost-per-lead from ₹85 down to ₹32. Absolutely worth 100x the price."
              </p>
              <div style={{ fontWeight: 700, fontSize: '12px' }}>Pooja Mehta</div>
              <div style={{ fontSize: '11px', color: '#606770' }}>Digital Marketing Lead</div>
            </div>

            <div style={{ padding: '16px', background: '#f8f9fa', borderRadius: '8px', border: '1px solid #e4e6eb' }}>
              <div style={{ color: '#F59E0B', marginBottom: '6px' }}>⭐⭐⭐⭐⭐</div>
              <p style={{ fontSize: '13px', color: '#334155', fontStyle: 'italic', margin: '0 0 10px 0', lineHeight: '1.5' }}>
                "Rama Rao breaks down complicated server-side CAPI tracking and CBO surge scaling into clear, actionable steps. A must-read."
              </p>
              <div style={{ fontWeight: 700, fontSize: '12px' }}>Anand K.</div>
              <div style={{ fontSize: '11px', color: '#606770' }}>Agency Media Buyer</div>
            </div>
          </div>
        )}

        {/* Bottom CTA Bar */}
        <div style={{ 
          marginTop: '24px', 
          padding: '18px 24px', 
          background: '#f0f7ff', 
          borderRadius: '8px', 
          border: '1px solid #1877f2', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '14px'
        }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: '15px', color: '#1c1e21' }}>
              Ready to master Meta Ads and scale to 10x ROAS?
            </div>
            <div style={{ fontSize: '12px', color: '#606770', marginTop: '2px' }}>
              Instant digital download of the 184-Page E-Book + 14 Video Lessons + 3 Free Bonuses.
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '11px', color: '#606770', textDecoration: 'line-through' }}>₹2,999</div>
              <div style={{ fontSize: '20px', fontWeight: 800, color: '#1877f2' }}>₹499.00</div>
            </div>
            <button
              onClick={() => onEnrollCourse && onEnrollCourse("499.00")}
              style={{
                background: '#1877f2',
                color: '#ffffff',
                border: 'none',
                padding: '11px 22px',
                borderRadius: '6px',
                fontSize: '13px',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              Enroll Now <ArrowRight size={15} />
            </button>
          </div>
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
