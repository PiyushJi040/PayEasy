import { useState } from 'react';

function OTPVerification({ phoneNumber, onVerify, onCancel }) {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [error, setError] = useState('');
  const [generatedOTP] = useState(Math.floor(100000 + Math.random() * 900000).toString());

  const handleChange = (index, value) => {
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`)?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      document.getElementById(`otp-${index - 1}`)?.focus();
    }
  };

  const verifyOTP = () => {
    const enteredOTP = otp.join('');
    if (enteredOTP === generatedOTP) {
      onVerify();
    } else {
      setError('Invalid OTP. Please try again.');
      setOtp(['', '', '', '', '', '']);
      document.getElementById('otp-0')?.focus();
    }
  };

  return (
    <div className="modal-overlay">
      <div className="otp-modal">
        <h2>🔐 OTP Verification</h2>
        <p>OTP sent to {phoneNumber}</p>
        <p className="demo-otp">Demo OTP: <strong>{generatedOTP}</strong></p>
        
        <div className="otp-inputs">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="otp-box"
            />
          ))}
        </div>

        {error && <p className="error-message">{error}</p>}

        <div className="otp-actions">
          <button onClick={verifyOTP} className="verify-btn">Verify OTP</button>
          <button onClick={onCancel} className="cancel-btn">Cancel</button>
        </div>

        <p className="resend-text">Didn't receive? <span className="resend-link">Resend OTP</span></p>
      </div>
    </div>
  );
}

export default OTPVerification;
