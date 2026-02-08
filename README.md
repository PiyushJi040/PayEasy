# 💰 PayEasy - Universal Payment Platform

> 🎓 **Educational Project** - A demo payment application built for learning and showcasing React development skills.

A modern, fully functional React-based payment application that supports all banks. Generate QR codes for receiving payments, scan QR codes to make payments, manage your cards, and explore investment opportunities - all in one place.

![React](https://img.shields.io/badge/React-18.2.0-blue) ![Vite](https://img.shields.io/badge/Vite-5.0-purple) ![License](https://img.shields.io/badge/License-MIT-green) ![Status](https://img.shields.io/badge/Status-Demo-orange)

## ✨ Features

### 🔐 Enhanced Security (Demo)
- **OTP Verification** - 6-digit OTP for registration
- **PIN Authentication** - 4-digit PIN for payments
- **Transaction Limits** - ₹10,000 per transaction, ₹50,000 daily limit
- **Real-time Limit Tracking** - Monitor daily spending
- **Secure Payment Flow** - Multi-layer verification

### 🎫 User Registration
- Add credit/debit card information with live preview
- Store bank account details securely
- Register UPI ID for instant payments
- Real-time card visualization while entering details

### 📊 Dashboard
- View account balance at a glance
- **Generate payment QR code instantly**
- **Download QR code as image** for sharing
- View recent transaction history
- Display all account details securely
- One-click QR regeneration

### 💸 Payment System
- **Scan QR codes** to make payments (upload image)
- **Enter UPI ID manually** for direct payments
- Quick amount selection buttons (₹100, ₹500, ₹1000, ₹2000)
- Real-time payment processing simulation
- Complete transaction history tracking
- Payment status notifications

### 📈 Investment Opportunities
- **Mutual Funds** - 10-12% returns
- **Fixed Deposits** - 6-8% returns (Low risk)
- **Stock Market** - 15-25% returns (High risk)
- **Gold Investment** - 8-10% returns
- **Cryptocurrency** - 20-50% returns (Very high risk)
- **SIP Plans** - 12-15% returns
- Risk and return information for each investment
- Minimum investment amounts displayed

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/PiyushJi040/PayEasy.git
cd PayEasy
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:3000
```

## 🏗️ Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

## 📁 Project Structure

```
PayEasy/
├── src/
│   ├── components/
│   │   ├── CardForm.jsx          # User registration form
│   │   ├── Dashboard.jsx         # Main dashboard with QR
│   │   ├── PaymentScanner.jsx    # Payment interface
│   │   └── Advertisements.jsx    # Investment ads
│   ├── utils/
│   │   └── qrGenerator.js        # QR code generation utility
│   ├── styles/
│   │   └── App.css               # Complete styling
│   ├── App.jsx                   # Main app component
│   └── main.jsx                  # Entry point
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🎯 How to Use

1. **Register**: Fill in your card and bank details on the registration form
2. **Dashboard**: View your personalized QR code and account information
3. **Receive Payment**: Share your QR code with others to receive payments
4. **Make Payment**: Upload QR codes or enter UPI ID to send money
5. **Investments**: Explore various investment opportunities with risk analysis

## 🛠️ Technologies Used

- **React 18** - Modern UI library
- **Vite** - Lightning-fast build tool
- **QRCode.js** - QR code generation
- **LocalStorage** - Data persistence
- **CSS3** - Modern styling with gradients and animations

## 🎓 Educational Purpose

**This is a DEMO application created for:**
- 📚 Learning React and modern web development
- 🏆 College project fairs and exhibitions
- 💼 Portfolio showcase
- 🎯 Understanding payment system workflows

**⚠️ NOT FOR PRODUCTION USE**

This application simulates payment functionality for educational purposes only. It does NOT:
- ❌ Connect to real bank accounts
- ❌ Process actual money transactions
- ❌ Store data securely (uses localStorage for demo)
- ❌ Have real OTP or authentication

## 🔒 For Real Payment Applications

In a production environment, you would need:
- ✅ Payment Gateway Integration (Razorpay, Stripe, PayU)
- ✅ Backend API with proper security
- ✅ PCI DSS Compliance for card data
- ✅ RBI Payment Aggregator License (India)
- ✅ OTP and 2FA authentication
- ✅ Encryption for sensitive data
- ✅ HTTPS and secure communications
- ✅ Rate limiting and fraud detection

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

**Piyush Ji**
- GitHub: [@PiyushJi040](https://github.com/PiyushJi040)

## 🌟 Show your support

Give a ⭐️ if you like this project!

## 📧 Contact

For any queries or suggestions, feel free to reach out!

---

Made with ❤️ by Piyush Ji
