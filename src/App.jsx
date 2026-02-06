import { useState, useEffect } from 'react';
import CardForm from './components/CardForm';
import Dashboard from './components/Dashboard';
import PaymentScanner from './components/PaymentScanner';
import Advertisements from './components/Advertisements';

function App() {
  const [view, setView] = useState('form');
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem('paymentUserData');
    if (saved) {
      setUserData(JSON.parse(saved));
      setView('dashboard');
    }
  }, []);

  const handleFormSubmit = (data) => {
    setUserData(data);
    localStorage.setItem('paymentUserData', JSON.stringify(data));
    setView('dashboard');
  };

  const handleLogout = () => {
    localStorage.removeItem('paymentUserData');
    setUserData(null);
    setView('form');
  };

  return (
    <div className="app">
      <nav className="navbar">
        <h1>💳 PayQR</h1>
        {userData && (
          <div className="nav-links">
            <button onClick={() => setView('dashboard')}>Dashboard</button>
            <button onClick={() => setView('scanner')}>Pay</button>
            <button onClick={() => setView('ads')}>Investments</button>
            <button onClick={handleLogout} className="logout">Logout</button>
          </div>
        )}
      </nav>

      <main className="main-content">
        {view === 'form' && <CardForm onSubmit={handleFormSubmit} />}
        {view === 'dashboard' && <Dashboard userData={userData} />}
        {view === 'scanner' && <PaymentScanner userData={userData} />}
        {view === 'ads' && <Advertisements />}
      </main>
    </div>
  );
}

export default App;
