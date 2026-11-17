import React, { useState } from 'react';
import { X, Bell, Check, CreditCard, Megaphone, ShieldAlert, CheckCircle2, TrendingUp } from 'lucide-react';

const INITIAL_NOTIFICATIONS = [
  {
    id: 1,
    title: 'Ad Budget Notice',
    message: 'Daily spending limit set to ₹2,697.96 by Meta Platforms.',
    time: '10m ago',
    icon: <CreditCard size={16} color="#1877f2" />,
    unread: true
  },
  {
    id: 2,
    title: 'GST Verification Action Required',
    message: 'Submit your GST number to confirm your registered taxpayer status.',
    time: '1h ago',
    icon: <ShieldAlert size={16} color="#fa383e" />,
    unread: true
  },
  {
    id: 3,
    title: 'Campaign Service Active',
    message: 'Facebook & Instagram Leads Campaign is delivering optimized impressions.',
    time: '3h ago',
    icon: <Megaphone size={16} color="#34A853" />,
    unread: true
  },
  {
    id: 4,
    title: 'Recent UPI Payment Settled',
    message: 'Prepaid funds credited to Rama Rao Pulibandla ad balance.',
    time: '1d ago',
    icon: <CheckCircle2 size={16} color="#34A853" />,
    unread: false
  },
  {
    id: 5,
    title: 'High CTR Performance Alert',
    message: 'Creative Ad set achieved a 3.4% click-through rate, exceeding benchmark.',
    time: '2d ago',
    icon: <TrendingUp size={16} color="#1877f2" />,
    unread: false
  }
];

const NotificationDrawer = ({ onClose, unreadCount, setUnreadCount }) => {
  const [notifications, setNotifications] = useState(INITIAL_NOTIFICATIONS);

  const handleMarkAllRead = () => {
    setNotifications(notifications.map(n => ({ ...n, unread: false })));
    setUnreadCount(0);
  };

  return (
    <div 
      style={{
        position: 'fixed',
        top: '60px',
        right: '20px',
        width: '360px',
        maxHeight: '480px',
        background: '#ffffff',
        borderRadius: '12px',
        boxShadow: '0 8px 28px rgba(0,0,0,0.18)',
        border: '1px solid #e4e6eb',
        zIndex: 1200,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden'
      }}
    >
      <div style={{
        padding: '14px 18px',
        borderBottom: '1px solid #e4e6eb',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Bell size={18} color="#1877f2" />
          <h3 style={{ margin: 0, fontSize: '15px', fontWeight: 700 }}>Notifications</h3>
          {unreadCount > 0 && (
            <span style={{ 
              background: '#fa383e', 
              color: '#fff', 
              fontSize: '11px', 
              padding: '1px 6px', 
              borderRadius: '10px', 
              fontWeight: 700 
            }}>
              {unreadCount}
            </span>
          )}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {unreadCount > 0 && (
            <button 
              onClick={handleMarkAllRead}
              style={{
                background: 'none',
                border: 'none',
                color: '#1877f2',
                fontSize: '12px',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              Mark all read
            </button>
          )}
          <button 
            onClick={onClose}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '2px' }}
          >
            <X size={18} color="#606770" />
          </button>
        </div>
      </div>

      <div style={{ padding: '8px 0', overflowY: 'auto', maxHeight: '400px' }}>
        {notifications.map((item) => (
          <div 
            key={item.id}
            style={{
              padding: '12px 16px',
              display: 'flex',
              gap: '12px',
              borderBottom: '1px solid #f0f2f5',
              background: item.unread ? 'rgba(24, 119, 242, 0.05)' : '#ffffff',
              transition: 'background 0.15s ease'
            }}
          >
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              background: '#f0f2f5',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              {item.icon}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '13px', fontWeight: 600, color: '#1c1e21' }}>{item.title}</span>
                <span style={{ fontSize: '11px', color: '#8e8e93' }}>{item.time}</span>
              </div>
              <p style={{ margin: '4px 0 0', fontSize: '12px', color: '#606770', lineHeight: '1.4' }}>
                {item.message}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationDrawer;
