import { motion } from 'framer-motion';
import { Shield, Lock, Zap, RefreshCw, ArrowDownUp, LineChart } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Shield className="text-mixsol-primary" size={32} />,
      title: "Enhanced Privacy",
      description: "Break the link between source and destination addresses, making transactions untraceable."
    },
    {
      icon: <Lock className="text-mixsol-primary" size={32} />,
      title: "Zero-Knowledge Proofs",
      description: "Cryptographic techniques ensure complete transaction privacy without revealing sensitive information."
    },
    {
      icon: <Zap className="text-mixsol-primary" size={32} />,
      title: "Lightning Fast",
      description: "Built on Solana's high-performance blockchain for quick mixing and low-latency transactions."
    },
    {
      icon: <RefreshCw className="text-mixsol-primary" size={32} />,
      title: "Multiple Mix Pools",
      description: "Choose from different pool sizes to optimize your privacy needs and transaction speed."
    },
    {
      icon: <ArrowDownUp className="text-mixsol-primary" size={32} />,
      title: "Cross-Token Support",
      description: "Future support for mixing different SPL tokens, not just SOL (coming soon)."
    },
    {
      icon: <LineChart className="text-mixsol-primary" size={32} />,
      title: "Transparent Fee Structure",
      description: "Low and predictable fees clearly displayed before each transaction."
    }
  ];

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-mixsol-dark/95 to-mixsol-dark relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5 grid-pattern"></div>
      
      <motion.div 
        className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-mixsol-primary/5 to-transparent"
        animate={{ 
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ 
          repeat: Infinity,
          duration: 4,
          ease: "easeInOut"
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
            Powerful <span className="gradient-text">Features</span>
          </h2>
          <p className="text-lg text-mixsol-light/70 max-w-3xl mx-auto">
            MixSol combines cutting-edge technology with user-friendly design to provide
            the most secure and efficient mixing service on Solana.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="glass-effect rounded-xl p-6 border border-mixsol-light/10 hover:border-mixsol-primary/30 transition-all"
            >
              <div className="bg-mixsol-dark/50 p-3 rounded-lg inline-block mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-mixsol-light">{feature.title}</h3>
              <p className="text-mixsol-light/70">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
