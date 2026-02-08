import { useState } from 'react';
import OTPVerification from './OTPVerification';

function CardForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    bankName: '',
    accountNumber: '',
    ifscCode: '',
    upiId: '',
    phoneNumber: ''
  });
  const [showOTP, setShowOTP] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowOTP(true);
  };

  const handleOTPVerify = () => {
    setShowOTP(false);
    onSubmit(formData);
  };

  return (
    <div className="card-form-container">
      <div className="card-preview">
        <div className="credit-card">
          <div className="card-header">
            <div className="chip"></div>
            <span className="card-type">💳 Card</span>
          </div>
          <div className="card-number">{formData.cardNumber || '•••• •••• •••• ••••'}</div>
          <div className="card-footer">
            <div>
              <small>CARDHOLDER</small>
              <div>{formData.name || 'YOUR NAME'}</div>
            </div>
            <div>
              <small>EXPIRES</small>
              <div>{formData.expiryDate || 'MM/YY'}</div>
            </div>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="payment-form">
        <h2>Register Your Payment Details</h2>
        
        <div className="form-section">
          <h3>Card Information</h3>
          <input name="name" placeholder="Cardholder Name" onChange={handleChange} required />
          <input name="cardNumber" placeholder="Card Number" maxLength="19" onChange={handleChange} required />
          <div className="form-row">
            <input name="expiryDate" placeholder="MM/YY" maxLength="5" onChange={handleChange} required />
            <input name="cvv" placeholder="CVV" maxLength="3" type="password" onChange={handleChange} required />
          </div>
        </div>

        <div className="form-section">
          <h3>Bank Details</h3>
          <input name="bankName" placeholder="Bank Name" onChange={handleChange} required />
          <input name="accountNumber" placeholder="Account Number" onChange={handleChange} required />
          <input name="ifscCode" placeholder="IFSC Code" onChange={handleChange} required />
          <input name="upiId" placeholder="UPI ID (e.g., user@paytm)" onChange={handleChange} required />
          <input name="phoneNumber" placeholder="Phone Number" maxLength="10" onChange={handleChange} required />
        </div>

        <button type="submit" className="submit-btn">Create Account</button>
      </form>

      {showOTP && (
        <OTPVerification
          phoneNumber={formData.phoneNumber}
          onVerify={handleOTPVerify}
          onCancel={() => setShowOTP(false)}
        />
      )}
    </div>
  );
}

export default CardForm;
