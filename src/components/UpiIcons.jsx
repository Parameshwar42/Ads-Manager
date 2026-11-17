import React from 'react';

// Crisp, authentic SVG logos for Indian UPI payment apps

export const GooglePayIcon = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="10" fill="#FFFFFF" />
    <path d="M37.5 24.3c0-.8-.1-1.6-.2-2.3H24v4.5h7.6c-.3 1.8-1.4 3.4-3 4.4v3.6h4.8c2.8-2.6 4.1-6.4 4.1-10.2z" fill="#4285F4" />
    <path d="M24 38c3.8 0 7-1.3 9.4-3.5l-4.8-3.6c-1.3.9-3 1.4-4.6 1.4-3.6 0-6.6-2.4-7.7-5.7H11.3v3.7C13.7 35.1 18.5 38 24 38z" fill="#34A853" />
    <path d="M16.3 26.6c-.3-.9-.5-1.8-.5-2.6s.2-1.7.5-2.6v-3.7H11.3C10.5 19.3 10 21.6 10 24s.5 4.7 1.3 6.3l5-3.7z" fill="#FBBC05" />
    <path d="M24 14.7c2.1 0 3.9.7 5.4 2.1l4-4C30.9 10.5 27.7 9.5 24 9.5c-5.5 0-10.3 2.9-12.7 7.7l5 3.7c1.1-3.3 4.1-6.2 7.7-6.2z" fill="#EA4335" />
  </svg>
);

export const PhonePeIcon = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="10" fill="#5F259F" />
    <path d="M31.2 19.5c0-3.6-2.5-5.5-6.8-5.5H16v20h5.2V27.4h3.1c4.5 0 6.9-2.1 6.9-5.9zm-5.2 2.7h-4.8v-5.2h4.8c2 0 3.1.8 3.1 2.6s-1.1 2.6-3.1 2.6z" fill="#FFFFFF" />
    <path d="M24.8 24.6l7.8 9.4h6.4l-8.9-10.7c-.5-.6-1.3-.9-2.1-.9h-3.2v2.2z" fill="#FFFFFF" />
    <path d="M13 13.8h22v2.4H13z" fill="#FFFFFF" opacity="0.9" />
  </svg>
);

export const PaytmIcon = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="10" fill="#002E6E" />
    <path d="M12 17h5.2c2.4 0 4.1 1.4 4.1 3.6 0 2.3-1.7 3.7-4.1 3.7H15v6.7H12V17zm3 4.9h2.1c.8 0 1.4-.5 1.4-1.3s-.6-1.3-1.4-1.3H15v2.6z" fill="#FFFFFF" />
    <path d="M22.8 24.2c0-4.1 3.1-7.2 7.2-7.2 4.1 0 7.2 3.1 7.2 7.2 0 4.1-3.1 7.2-7.2 7.2-4.1 0-7.2-3.1-7.2-7.2zm11.4 0c0-2.5-1.8-4.4-4.2-4.4-2.4 0-4.2 1.9-4.2 4.4 0 2.5 1.8 4.4 4.2 4.4 2.4 0 4.2-1.9 4.2-4.4z" fill="#00BAF2" />
  </svg>
);

export const BhimIcon = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="10" fill="#FFFFFF" />
    <path d="M11 11h11l15 13-15 13H11l15-13L11 11z" fill="#008444" />
    <path d="M18 11h9l10 13-10 13h-9l10-13-10-13z" fill="#F47920" />
    <text x="14" y="27" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="8" fill="#FFFFFF">BHIM</text>
  </svg>
);

export const CredIcon = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="10" fill="#121212" />
    <circle cx="24" cy="24" r="14" stroke="#FFFFFF" strokeWidth="2.5" fill="none" />
    <path d="M18 24h12M24 18v12" stroke="#D4AF37" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

export const AmazonPayIcon = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="10" fill="#232F3E" />
    <path d="M15 28c4 3 14 3 18 0" stroke="#FF9900" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M31 26l2 2-2 2" stroke="#FF9900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <text x="14" y="22" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="10" fill="#FFFFFF">pay</text>
  </svg>
);
