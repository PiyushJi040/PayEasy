import { useState } from 'react';

function PaymentScanner({ userData }) {
  const [amount, setAmount] = useState('');
  const [scannedData, setScannedData] = useState('');
  const [paymentStatus, setPaymentStatus] = useState('');
  const [manualUPI, setManualUPI] = useState('');

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        // Simulate QR code reading
        setScannedData('upi://pay?pa=merchant@paytm&pn=Merchant&cu=INR');
        setPaymentStatus('QR Code Scanned Successfully!');
      };
      reader.readAsDataURL(file);
    }
  };

  const processPayment = () => {
    if (!amount || amount <= 0) {
      alert('Please enter valid amount');
      return;
    }

    const upiData = scannedData || `upi://pay?pa=${manualUPI}&cu=INR`;
    
    // Simulate payment processing
    setPaymentStatus('Processing payment...');
    setTimeout(() => {
      const transaction = {
        type: 'Payment Sent',
        amount: -parseFloat(amount),
        date: new Date().toLocaleString(),
        to: manualUPI || 'Scanned Merchant'
      };
      
      const transactions = JSON.parse(localStorage.getItem('transactions') || '[]');
      transactions.unshift(transaction);
      localStorage.setItem('transactions', JSON.stringify(transactions));
      
      setPaymentStatus(`✅ Payment of ₹${amount} successful!`);
      setAmount('');
      setScannedData('');
      setManualUPI('');
    }, 2000);
  };

  return (
    <div className="payment-scanner">
      <h2>Make Payment</h2>
      
      <div className="scanner-container">
        <div className="scan-section">
          <h3>Scan QR Code</h3>
          <div className="upload-area">
            <label htmlFor="qr-upload" className="upload-label">
              📷 Upload QR Code Image
              <input 
                id="qr-upload" 
                type="file" 
                accept="image/*" 
                onChange={handleFileUpload}
                style={{ display: 'none' }}
              />
            </label>
          </div>
          {scannedData && (
            <div className="scanned-info">
              <p>✓ QR Code Detected</p>
            </div>
          )}
        </div>

        <div className="divider">OR</div>

        <div className="manual-section">
          <h3>Enter UPI ID Manually</h3>
          <input 
            type="text" 
            placeholder="Enter UPI ID (e.g., user@paytm)"
            value={manualUPI}
            onChange={(e) => setManualUPI(e.target.value)}
            className="upi-input"
          />
        </div>
      </div>

      <div className="payment-form">
        <input 
          type="number" 
          placeholder="Enter Amount (₹)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="amount-input"
        />
        
        <button 
          onClick={processPayment} 
          className="pay-btn"
          disabled={(!scannedData && !manualUPI) || !amount}
        >
          Pay ₹{amount || '0'}
        </button>

        {paymentStatus && (
          <div className={`status-message ${paymentStatus.includes('✅') ? 'success' : ''}`}>
            {paymentStatus}
          </div>
        )}
      </div>

      <div className="quick-amounts">
        <p>Quick Amount:</p>
        {[100, 500, 1000, 2000].map(amt => (
          <button key={amt} onClick={() => setAmount(amt.toString())}>₹{amt}</button>
        ))}
      </div>
    </div>
  );
}

export default PaymentScanner;
