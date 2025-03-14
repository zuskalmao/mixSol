import { useState, useEffect } from 'react';
import { Menu, X, ExternalLink, Wallet } from 'lucide-react';
import { motion } from 'framer-motion';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { connected } = useWallet();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-mixsol-dark/80 blur-backdrop shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center">
          <img src="https://ipfs.io/ipfs/bafybeib2g5xia4qn3m6jqpej22tlrvw6nsxpnvamjj2sry4xe24cwv3q3m" alt="MixSol Logo" className="h-8" />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          <a href="#about" className="text-mixsol-light hover:text-mixsol-primary transition-colors">About</a>
          <a href="#mixer" className="text-mixsol-light hover:text-mixsol-primary transition-colors">Mixer</a>
          <a href="#features" className="text-mixsol-light hover:text-mixsol-primary transition-colors">Features</a>
          <a href="#community" className="text-mixsol-light hover:text-mixsol-primary transition-colors">Community</a>
          
          <div className="wallet-adapter-button-wrapper">
            <WalletMultiButton 
              className="bg-gradient-to-r from-mixsol-primary to-mixsol-secondary text-mixsol-dark font-semibold py-2 px-6 rounded-full flex items-center space-x-2 shadow-lg hover:shadow-mixsol-primary/20 transition-all"
              startIcon={<Wallet size={16} />}
            />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-mixsol-light">
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden glass-effect py-4"
        >
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <a href="#about" className="text-mixsol-light hover:text-mixsol-primary py-2 transition-colors" onClick={() => setMobileMenuOpen(false)}>
              About
            </a>
            <a href="#mixer" className="text-mixsol-light hover:text-mixsol-primary py-2 transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Mixer
            </a>
            <a href="#features" className="text-mixsol-light hover:text-mixsol-primary py-2 transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Features
            </a>
            <a href="#community" className="text-mixsol-light hover:text-mixsol-primary py-2 transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Community
            </a>
            <div className="wallet-adapter-button-wrapper">
              <WalletMultiButton 
                className="bg-gradient-to-r from-mixsol-primary to-mixsol-secondary text-mixsol-dark font-semibold py-2 px-6 rounded-full flex items-center justify-center space-x-2 shadow-lg w-full"
                startIcon={<Wallet size={16} />}
              />
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}
