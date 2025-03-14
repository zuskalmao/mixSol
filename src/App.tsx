import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Mixer from './components/Mixer';
import Features from './components/Features';
import Community from './components/Community';
import Footer from './components/Footer';
import { WalletContextProvider } from './context/WalletContextProvider';

function App() {
  return (
    <WalletContextProvider>
      <div className="font-sans bg-mixsol-dark text-mixsol-light overflow-hidden">
        <Header />
        <main>
          <Hero />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <About />
            <Mixer />
            <Features />
            <Community />
          </motion.div>
        </main>
        <Footer />
      </div>
    </WalletContextProvider>
  );
}

export default App;
