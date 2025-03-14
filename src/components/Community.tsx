import { motion } from 'framer-motion';
import { Slack, Twitter, MessageCircle, Github } from 'lucide-react';

export default function Community() {
  const socials = [
    {
      icon: <Twitter size={24} />,
      name: "Twitter",
      handle: "@MixSol",
      color: "hover:text-blue-400"
    },
    {
      icon: <MessageCircle size={24} />,
      name: "Discord",
      handle: "MixSol Community",
      color: "hover:text-indigo-400"
    },
    {
      icon: <Github size={24} />,
      name: "GitHub",
      handle: "MixSol Protocol",
      color: "hover:text-gray-400"
    },
    {
      icon: <Slack size={24} />,
      name: "Telegram",
      handle: "MixSol Announcements",
      color: "hover:text-sky-400"
    }
  ];

  return (
    <section id="community" className="py-24 bg-mixsol-dark relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5 grid-pattern"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Our <span className="gradient-text">Community</span>
          </h2>
          <p className="text-lg text-mixsol-light/70 max-w-3xl mx-auto">
            Become part of the MixSol family and help us shape the future of privacy on Solana.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {socials.map((social, index) => (
            <motion.a
              key={index}
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className={`glass-effect rounded-xl p-6 border border-mixsol-light/10 hover:border-mixsol-primary/30 transition-all ${social.color} flex flex-col items-center text-center`}
            >
              <div className="bg-mixsol-dark/50 p-4 rounded-full inline-block mb-4">
                {social.icon}
              </div>
              <h3 className="text-xl font-semibold mb-1 text-mixsol-light">{social.name}</h3>
              <p className="text-mixsol-light/70">{social.handle}</p>
            </motion.a>
          ))}
        </div>

        <motion.div 
          className="glass-effect rounded-xl p-8 border border-mixsol-light/10 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4 purple-glow text-mixsol-secondary">
                Stay Updated
              </h3>
              <p className="text-mixsol-light/80 mb-4">
                Join our newsletter to get the latest updates on MixSol developments, 
                features, and community events.
              </p>
              <form className="space-y-4">
                <div>
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full bg-mixsol-dark border border-mixsol-light/20 rounded-lg px-4 py-3 text-mixsol-light focus:outline-none focus:ring-2 focus:ring-mixsol-primary/50 focus:border-transparent transition-all"
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="shine w-full py-3 px-6 bg-gradient-to-r from-mixsol-primary to-mixsol-secondary text-mixsol-dark font-semibold rounded-lg shadow-lg"
                >
                  Subscribe
                </motion.button>
              </form>
            </div>
            <div className="md:w-1/2">
              <div className="bg-mixsol-dark/70 p-6 rounded-lg">
                <h4 className="font-semibold text-mixsol-primary mb-3">MixSol Community Guidelines</h4>
                <ul className="space-y-2 text-sm text-mixsol-light/80">
                  <li>• Respect fellow community members</li>
                  <li>• Do not share investment advice</li>
                  <li>• Report suspicious activities</li>
                  <li>• Help newcomers with questions</li>
                  <li>• Share ideas for improving MixSol</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
