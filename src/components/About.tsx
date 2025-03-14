import { motion } from 'framer-motion';
import { ShieldCheck, Lock, RefreshCw, TrendingUp } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-mixsol-dark to-mixsol-dark/95 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10 grid-pattern"></div>
      
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">MixSol</span>
          </h2>
          <p className="text-lg text-mixsol-light/70 max-w-3xl mx-auto">
            MixSol is revolutionizing privacy on the Solana blockchain with a powerful and efficient mixing protocol.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6 purple-glow text-mixsol-secondary">
              The Future of Transaction Privacy
            </h3>
            
            <p className="text-mixsol-light/80 mb-6 leading-relaxed">
              In the transparent world of blockchain, privacy is a rare commodity. MixSol 
              provides a solution by enabling Solana users to anonymize their transactions 
              through our cutting-edge mixing protocol.
            </p>
            
            <p className="text-mixsol-light/80 mb-6 leading-relaxed">
              By using cryptographic techniques and zero-knowledge proofs, MixSol ensures 
              that your transactions cannot be traced back to you, providing a layer of 
              privacy that is essential in today's digital landscape.
            </p>
            
            <div className="space-y-4 mt-8">
              {[
                { icon: <ShieldCheck className="text-mixsol-primary" size={24} />, text: "End-to-end transaction privacy" },
                { icon: <Lock className="text-mixsol-primary" size={24} />, text: "Zero-knowledge cryptography" },
                { icon: <RefreshCw className="text-mixsol-primary" size={24} />, text: "Fast and efficient mixing" },
                { icon: <TrendingUp className="text-mixsol-primary" size={24} />, text: "Built for Solana's high performance" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  {item.icon}
                  <span className="text-mixsol-light/90">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 glass-effect rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1632&auto=format&fit=crop" 
                alt="Privacy on Solana" 
                className="w-full h-auto rounded-xl object-cover opacity-70"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-mixsol-dark/90 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h4 className="text-xl font-bold text-mixsol-primary mb-2">
                  Privacy-Focused Design
                </h4>
                <p className="text-mixsol-light/80">
                  MixSol's architecture is built from the ground up with privacy as the 
                  central focus, leveraging Solana's speed and low fees.
                </p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-mixsol-secondary/30 rounded-full blur-[100px] -z-10"></div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-mixsol-primary/20 rounded-full blur-[50px] -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
