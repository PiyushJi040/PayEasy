import { useState } from 'react';

function Advertisements() {
  const [selectedInvestment, setSelectedInvestment] = useState(null);

  const investments = [
    {
      id: 1,
      title: 'Mutual Funds',
      description: 'Invest in top-performing mutual funds with returns up to 12% annually',
      returns: '10-12%',
      risk: 'Medium',
      minAmount: 500,
      icon: '📈'
    },
    {
      id: 2,
      title: 'Fixed Deposits',
      description: 'Secure your money with guaranteed returns and zero risk',
      returns: '6-8%',
      risk: 'Low',
      minAmount: 1000,
      icon: '🏦'
    },
    {
      id: 3,
      title: 'Stock Market',
      description: 'Trade in stocks and build your portfolio with expert guidance',
      returns: '15-25%',
      risk: 'High',
      minAmount: 100,
      icon: '📊'
    },
    {
      id: 4,
      title: 'Gold Investment',
      description: 'Invest in digital gold and secure your future',
      returns: '8-10%',
      risk: 'Low',
      minAmount: 100,
      icon: '🪙'
    },
    {
      id: 5,
      title: 'Crypto Currency',
      description: 'Explore cryptocurrency investments with high potential returns',
      returns: '20-50%',
      risk: 'Very High',
      minAmount: 500,
      icon: '₿'
    },
    {
      id: 6,
      title: 'SIP Plans',
      description: 'Systematic Investment Plans for long-term wealth creation',
      returns: '12-15%',
      risk: 'Medium',
      minAmount: 500,
      icon: '💰'
    }
  ];

  const handleInvest = (investment) => {
    setSelectedInvestment(investment);
    alert(`Investment in ${investment.title} initiated! Minimum amount: ₹${investment.minAmount}`);
  };

  return (
    <div className="advertisements">
      <div className="ads-header">
        <h2>Investment Opportunities</h2>
        <p>Grow your wealth with smart investment choices</p>
      </div>

      <div className="investment-grid">
        {investments.map(inv => (
          <div key={inv.id} className="investment-card">
            <div className="inv-icon">{inv.icon}</div>
            <h3>{inv.title}</h3>
            <p>{inv.description}</p>
            <div className="inv-details">
              <div className="inv-stat">
                <span>Returns</span>
                <strong className="returns">{inv.returns}</strong>
              </div>
              <div className="inv-stat">
                <span>Risk</span>
                <strong className={`risk-${inv.risk.toLowerCase().replace(' ', '-')}`}>
                  {inv.risk}
                </strong>
              </div>
            </div>
            <div className="inv-footer">
              <span className="min-amount">Min: ₹{inv.minAmount}</span>
              <button onClick={() => handleInvest(inv)} className="invest-btn">
                Invest Now
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="promo-banner">
        <h3>🎉 Special Offer!</h3>
        <p>Get 0% commission on your first investment. Limited time offer!</p>
        <button className="promo-btn">Learn More</button>
      </div>
    </div>
  );
}

export default Advertisements;
