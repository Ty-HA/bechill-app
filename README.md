# 🧘 BeChill

**BeChill** is your AI-powered crypto coach, designed to help you stay focused, balanced, and grow both wealth and well-being.

> Think of it as Headspace meets Web3 🧠💸

---

## 🚀 Features

- 🧠 Personal AI guidance based on your investor profile and personality
- 🔐 Connect wallet easily via Phantom, Solflare, or Fake Wallet
- 💬 Sign transactions & messages
- 💎 Request airdrops (Devnet)
- 🌱 Set goals and track your emotional + financial growth

---

## 📱 Mobile Stack

- React Native + TypeScript
- [Solana Mobile Stack](https://docs.solanamobile.com/)
- Solana Wallet Adapter (Phantom, Solflare & Fake Wallet)
- AI Coach ✨ (Coming soon)

> 🧪 **Built with the official scaffold**:  
> [solana-mobile-dapp-scaffold](https://github.com/solana-mobile/solana-mobile-dapp-scaffold)

---

## 🧪 Testing the App

You can test **BeChill** in two ways:

### 1. ✅ On a physical Android device
Use your real Solana wallet (e.g. **Phantom** or **Solflare**) when prompted.

### 2. 🧪 On an Android emulator
Use the **Fake Wallet** to simulate wallet behavior without requiring a real seed phrase.

> 💡 The app automatically detects your environment and adapts accordingly.

To support Fake Wallet / Fake DApp testing, clone this helper repo:

```bash
git clone https://github.com/solana-mobile/mobile-wallet-adapter.git
```

🔧 Run locally
```bash
Copy
Modify
git clone https://github.com/Ty-HA/bechill-app.git
cd bechill-app
npm install
npx react-native run-android
```
✅ You can also use Android Studio to run the emulator and debug easily.

💭 Coming soon
AI onboarding

Mood & goal tracking

Personalized wallet insights

iOS support (Solana Mobile only)