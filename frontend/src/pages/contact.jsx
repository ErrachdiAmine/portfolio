// src/components/Contact.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

const contactMethods = [
  {
    icon: <Mail size={48} />,
    label: 'Email',
    value: 'you@domain.com',
    href: 'mailto:you@domain.com',
    color: 'rgba(0,255,255,0.8)', // cyan neon
  },
  {
    icon: <Phone size={48} />,
    label: 'WhatsApp',
    value: '+1234567890',
    href: 'https://wa.me/1234567890',
    color: 'rgba(0,255,0,0.8)', // green neon
  },
  {
    icon: <Linkedin size={48} />,
    label: 'LinkedIn',
    value: '/in/yourprofile',
    href: 'https://linkedin.com/in/yourprofile',
    color: 'rgba(0,119,255,0.8)', // blue neon
  },
  {
    icon: <Github size={48} />,
    label: 'GitHub',
    value: '/yourusername',
    href: 'https://github.com/yourusername',
    color: 'rgba(255,255,255,0.8)', // white neon
  },
];

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-6 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {contactMethods.map(({ icon, label, value, href, color }, i) => (
          <motion.a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-56 h-56 bg-black/20 backdrop-blur-sm rounded-lg flex flex-col items-center justify-center text-center p-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1, type: 'spring', stiffness: 200 }}
            style={{
              boxShadow: `0 0 20px ${color}`,
              border: `2px solid ${color}`,
            }}
            whileHover={{
              boxShadow: `0 0 30px ${color}`,
              scale: 1.05,
            }}
          >
            <div className="mb-4 text-white">{icon}</div>
            <h3 className="text-lg font-semibold text-white mb-1">{label}</h3>
            <p className="text-sm text-gray-300 break-all">{value}</p>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
