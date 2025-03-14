import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 bg-mixsol-dark/90 border-t border-mixsol-light/10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <img src="/src/assets/mixsol-logo.svg" alt="MixSol Logo" className="h-8 mb-4" />
            <p className="text-mixsol-light/70 mb-4 max-w-md">
              MixSol is the premier privacy-focused mixing protocol on the Solana blockchain,
              helping users maintain transaction privacy with cutting-edge technology.
            </p>
            <div className="text-mixsol-light/50 text-sm">
              $MIX — Built for the Solana ecosystem
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-mixsol-light mb-4">Navigation</h3>
            <ul className="space-y-2 text-mixsol-light/70">
              <li><a href="#" className="hover:text-mixsol-primary transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-mixsol-primary transition-colors">About</a></li>
              <li><a href="#mixer" className="hover:text-mixsol-primary transition-colors">Mixer</a></li>
              <li><a href="#features" className="hover:text-mixsol-primary transition-colors">Features</a></li>
              <li><a href="#community" className="hover:text-mixsol-primary transition-colors">Community</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-mixsol-light mb-4">Resources</h3>
            <ul className="space-y-2 text-mixsol-light/70">
              <li><a href="#" className="hover:text-mixsol-primary transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-mixsol-primary transition-colors">GitHub</a></li>
              <li><a href="#" className="hover:text-mixsol-primary transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-mixsol-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-mixsol-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-mixsol-light/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-mixsol-light/60 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} MixSol. All rights reserved.
          </div>
          
          <div className="flex items-center text-mixsol-light/60 text-sm">
            <span>Made with</span>
            <Heart size={14} className="mx-1 text-mixsol-primary" />
            <span>for the Solana community</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
