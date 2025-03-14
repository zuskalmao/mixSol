import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-mixsol-dark overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20 grid-pattern"></div>
      
      {/* Animated Blurred Gradient Circles */}
      <motion.div 
        className="absolute top-1/4 -left-32 w-96 h-96 bg-mixsol-secondary/30 rounded-full blur-[100px]"
        animate={{ 
          x: [0, 50, 0],
          y: [0, -30, 0]
        }}
        transition={{ 
          repeat: Infinity,
          duration: 10,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-mixsol-primary/30 rounded-full blur-[100px]"
        animate={{ 
          x: [0, -50, 0],
          y: [0, 30, 0]
        }}
        transition={{ 
          repeat: Infinity,
          duration: 12,
          ease: "easeInOut"
        }}
      />

      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-4 gradient-text"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            Welcome to MixSol
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-mixsol-light/80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            The premier privacy mixing protocol on Solana. <br />
            <span className="text-mixsol-primary">$MIX</span> - Anonymize your transactions with ease.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.a 
              href="#mixer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="py-3 px-8 bg-gradient-to-r from-mixsol-primary to-mixsol-accent rounded-full text-mixsol-dark font-semibold shadow-lg hover:shadow-mixsol-primary/40 transition-all"
            >
              Try the Mixer
            </motion.a>
            
            <motion.a 
              href="#about"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="py-3 px-8 bg-transparent border border-mixsol-primary/70 text-mixsol-primary rounded-full font-semibold hover:bg-mixsol-primary/10 transition-all"
            >
              Learn More
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.a 
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-mixsol-light/60 hover:text-mixsol-primary transition-colors flex flex-col items-center"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <span className="text-sm mb-2">Scroll Down</span>
        <ArrowDown size={20} />
      </motion.a>
    </section>
  );
}
