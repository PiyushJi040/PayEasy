import { useState, useEffect } from 'react';
import { generateQRCode } from '../utils/qrGenerator';

function Dashboard({ userData }) {
  const [qrCode, setQrCode] = useState('');
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    generateQR();
    loadTransactions();
  }, [userData]);

  const generateQR = async () => {
    const paymentData = `upi://pay?pa=${userData.upiId}&pn=${userData.name}&cu=INR`;
    const qr = await generateQRCode(paymentData);
    setQrCode(qr);
  };

  const loadTransactions = () => {
    const saved = localStorage.getItem('transactions') || '[]';
    setTransactions(JSON.parse(saved));
  };

  const downloadQR = () => {
    const link = document.createElement('a');
    link.download = 'payment-qr.png';
    link.href = qrCode;
    link.click();
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h2>Welcome, {userData.name}!</h2>
        <p className="balance">Balance: ₹{Math.floor(Math.random() * 50000)}</p>
      </div>

      <div className="dashboard-grid">
        <div className="qr-section">
          <h3>Your Payment QR Code</h3>
          <div className="qr-container">
            {qrCode && <img src={qrCode} alt="QR Code" />}
          </div>
          <button onClick={generateQR} className="btn-primary">Regenerate QR</button>
          <button onClick={downloadQR} className="btn-secondary">Download QR</button>
          <div className="upi-info">
            <p><strong>UPI ID:</strong> {userData.upiId}</p>
            <p><strong>Account:</strong> {userData.accountNumber}</p>
          </div>
        </div>

        <div className="info-section">
          <h3>Account Details</h3>
          <div className="info-card">
            <div className="info-item">
              <span>Bank Name</span>
              <strong>{userData.bankName}</strong>
            </div>
            <div className="info-item">
              <span>IFSC Code</span>
              <strong>{userData.ifscCode}</strong>
            </div>
            <div className="info-item">
              <span>Card Number</span>
              <strong>•••• {userData.cardNumber.slice(-4)}</strong>
            </div>
          </div>

          <h3>Recent Transactions</h3>
          <div className="transactions">
            {transactions.length === 0 ? (
              <p className="no-data">No transactions yet</p>
            ) : (
              transactions.slice(0, 5).map((txn, i) => (
                <div key={i} className="transaction-item">
                  <div>
                    <strong>{txn.type}</strong>
                    <small>{txn.date}</small>
                  </div>
                  <span className={txn.amount > 0 ? 'credit' : 'debit'}>
                    ₹{Math.abs(txn.amount)}
                  </span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
