import { useState } from 'react';

function PINVerification({ onVerify, onCancel, action }) {
  const [pin, setPin] = useState(['', '', '', '']);
  const [error, setError] = useState('');

  const handleChange = (index, value) => {
    if (value.length > 1) return;
    const newPin = [...pin];
    newPin[index] = value;
    setPin(newPin);

    if (value && index < 3) {
      document.getElementById(`pin-${index + 1}`)?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !pin[index] && index > 0) {
      document.getElementById(`pin-${index - 1}`)?.focus();
    }
  };

  const verifyPIN = () => {
    const enteredPIN = pin.join('');
    const savedPIN = localStorage.getItem('userPIN');

    if (!savedPIN) {
      localStorage.setItem('userPIN', enteredPIN);
      onVerify();
    } else if (enteredPIN === savedPIN) {
      onVerify();
    } else {
      setError('Incorrect PIN. Please try again.');
      setPin(['', '', '', '']);
      document.getElementById('pin-0')?.focus();
    }
  };

  return (
    <div className="modal-overlay">
      <div className="pin-modal">
        <h2>🔒 Enter PIN</h2>
        <p>{action || 'Enter your 4-digit PIN to continue'}</p>
        
        <div className="pin-inputs">
          {pin.map((digit, index) => (
            <input
              key={index}
              id={`pin-${index}`}
              type="password"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="pin-box"
            />
          ))}
        </div>

        {error && <p className="error-message">{error}</p>}

        <div className="pin-actions">
          <button onClick={verifyPIN} className="verify-btn">Confirm</button>
          <button onClick={onCancel} className="cancel-btn">Cancel</button>
        </div>

        {!localStorage.getItem('userPIN') && (
          <p className="info-text">First time? Create your 4-digit PIN</p>
        )}
      </div>
    </div>
  );
}

export default PINVerification;
