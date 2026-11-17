// Utility to generate and download authentic Meta Ads payment receipt

export const downloadReceipt = (amount = "2,000.00", accountName = "Rama Rao Pulibandla", accountId = "219514368088492") => {
  const invoiceId = `INV-META-${Math.floor(100000 + Math.random() * 900000)}`;
  const dateStr = new Date().toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  });
  const timeStr = new Date().toLocaleTimeString('en-IN', {
    hour: '2-digit',
    minute: '2-digit'
  });

  const receiptContent = `===============================================================
                    META ADS PAYMENT RECEIPT
===============================================================

Transaction Status: SUCCESSFUL (PAID)
Invoice Number:    ${invoiceId}
Transaction Date:  ${dateStr}, ${timeStr}
Payment Method:    UPI (Unified Payments Interface)
UPI Reference No:  UPI-REF-${Math.floor(100000000000 + Math.random() * 900000000000)}

---------------------------------------------------------------
ACCOUNT & CLIENT DETAILS
---------------------------------------------------------------
Ad Account Name:   ${accountName}
Ad Account ID:     ${accountId}
Currency:          INR (₹)
Business GSTIN:    36AABCB1234F1Z5
Service Provider:  Meta Platforms Technologies India Pvt Ltd

---------------------------------------------------------------
SERVICE / ORDER SUMMARY
---------------------------------------------------------------
Description                          Qty        Amount (INR)
---------------------------------------------------------------
Meta Ads Prepaid Account Top-Up       1          ₹${amount}
Prepaid Ad Credits Boost Service
Service Category: Online Advertising

Subtotal:                                       ₹${amount}
CGST (9.0%):                                    Included
SGST (9.0%):                                    Included
---------------------------------------------------------------
TOTAL CHARGED:                                  ₹${amount}
---------------------------------------------------------------

Funds Status:
Your prepaid balance of ₹${amount} is immediately available for 
active Facebook & Instagram advertising campaigns.

Thank you for choosing Meta Advertising Services.
Need support? Visit Ads Manager Help Centre at meta.com/help
===============================================================`;

  const blob = new Blob([receiptContent], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `Meta_Receipt_${invoiceId}.txt`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};
