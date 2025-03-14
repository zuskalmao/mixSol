import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Droplets, Shuffle, Shield, ExternalLink } from 'lucide-react';

export default function Mixer() {
  const [amount, setAmount] = useState('');
  
  return (
    <section id="mixer" className="py-24 bg-mixsol-dark relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5 grid-pattern"></div>
      
      <motion.div 
        className="absolute top-1/3 right-1/4 w-64 h-64 bg-mixsol-primary/20 rounded-full blur-[80px]"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{ 
          repeat: Infinity,
          duration: 8,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-mixsol-secondary/20 rounded-full blur-[90px]"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.25, 0.2]
        }}
        transition={{ 
          repeat: Infinity,
          duration: 10,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The SOL <span className="gradient-text">Mixer</span>
          </h2>
          <p className="text-lg text-mixsol-light/70 max-w-3xl mx-auto">
            Anonymize your Solana transactions with our cutting-edge mixer technology.
            Deposit SOL, mix it, and withdraw - all with complete privacy.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
          {/* Mixer UI */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-md"
          >
            <div className="glass-effect rounded-2xl p-6 shadow-lg border border-mixsol-light/10">
              <h3 className="text-xl font-bold mb-6 text-center text-mixsol-primary light-glow">
                Mix Your SOL
              </h3>
              
              <div className="space-y-6">
                <div>
                  <label htmlFor="amount" className="block text-sm font-medium text-mixsol-light/80 mb-2">
                    Amount (SOL)
                  </label>
                  <div className="relative">
                    <input
                      id="amount"
                      type="text"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="w-full bg-mixsol-dark border border-mixsol-light/20 rounded-lg px-4 py-3 text-mixsol-light focus:outline-none focus:ring-2 focus:ring-mixsol-primary/50 focus:border-transparent transition-all"
                      placeholder="0.0"
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-mixsol-light/60">
                      SOL
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-4 gap-2">
                  {[0.1, 0.5, 1, 5].map((value) => (
                    <button
                      key={value}
                      onClick={() => setAmount(value.toString())}
                      className="bg-mixsol-dark/50 hover:bg-mixsol-primary/20 border border-mixsol-light/10 rounded-lg py-2 text-sm text-mixsol-light/80 transition-colors"
                    >
                      {value} SOL
                    </button>
                  ))}
                </div>
                
                <div className="relative pt-4">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-mixsol-dark p-2 rounded-full border border-mixsol-light/10 z-10">
                    <ArrowRight className="text-mixsol-primary" size={20} />
                  </div>
                  <div className="border-t border-mixsol-light/10"></div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-mixsol-light/70">Recipient address</span>
                    <span className="text-sm text-mixsol-primary cursor-pointer hover:underline">Clear</span>
                  </div>
                  <input
                    type="text"
                    className="w-full bg-mixsol-dark border border-mixsol-light/20 rounded-lg px-4 py-3 text-mixsol-light focus:outline-none focus:ring-2 focus:ring-mixsol-primary/50 focus:border-transparent transition-all"
                    placeholder="Solana address"
                  />
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full shine py-4 px-6 bg-gradient-to-r from-mixsol-primary to-mixsol-secondary text-mixsol-dark font-semibold rounded-lg shadow-lg flex items-center justify-center space-x-2"
                >
                  <Shuffle size={18} />
                  <span>Mix SOL</span>
                </motion.button>
                
                <div className="text-xs text-center text-mixsol-light/50">
                  Connect your wallet to use the mixer. A small fee of 0.5% applies.
                </div>
              </div>
            </div>
          </motion.div>

          {/* How it Works */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full max-w-md"
          >
            <h3 className="text-2xl font-bold mb-6 purple-glow text-mixsol-secondary">
              How It Works
            </h3>
            
            <div className="space-y-6">
              {[
                {
                  icon: <Droplets className="text-mixsol-primary" size={24} />,
                  title: "Deposit SOL",
                  description: "Connect your wallet and deposit SOL into the MixSol protocol. Your transaction will be pooled with others for maximum privacy."
                },
                {
                  icon: <Shuffle className="text-mixsol-primary" size={24} />,
                  title: "Mixing Process",
                  description: "Our advanced protocol uses zero-knowledge proofs to mix your SOL with other deposits, making it impossible to trace the source."
                },
                {
                  icon: <Shield className="text-mixsol-primary" size={24} />,
                  title: "Private Withdrawal",
                  description: "Withdraw your SOL to any address. The link between your deposit and withdrawal is completely broken."
                }
              ].map((step, index) => (
                <motion.div 
                  key={index}
                  className="flex space-x-4 p-4 glass-effect rounded-xl"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 + index * 0.15 }}
                >
                  <div className="flex-shrink-0 bg-mixsol-dark/50 p-3 rounded-lg">
                    {step.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-mixsol-light mb-1">{step.title}</h4>
                    <p className="text-sm text-mixsol-light/70">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.a
              href="#"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-8 inline-flex items-center text-mixsol-primary hover:text-mixsol-secondary transition-colors"
            >
              <span>Learn more about our security</span>
              <ExternalLink size={16} className="ml-1" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
