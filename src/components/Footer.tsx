'use client';

import { motion } from 'framer-motion';
import { ArrowUp, ExternalLink, Instagram, Mail, MapPin, Phone, Youtube } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      name: 'Instagram',
      href: 'https://instagram.com/3rdfade',
      icon: Instagram,
      color: 'hover:text-pink-500',
    },
    {
      name: 'YouTube',
      href: 'https://youtube.com/@3rdfade',
      icon: Youtube,
      color: 'hover:text-red-500',
    },
  ];

  const quickLinks = [
    { name: 'Accueil', href: '/' },
    { name: 'À propos', href: '/about' },
    { name: 'Mes créations', href: '/creations' },
    { name: 'Contact', href: '/contact' },
  ];

  const services = [
    'Vidéos publicitaires',
    'Films de mariage',
    'Clips musicaux',
    'Vidéos corporate',
    'Documentaires',
    'Post-production',
  ];

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <Link href="/" className="flex items-center space-x-3">
                  {/* <div className="relative w-40 h-40">
                    <Image
                      src="/3RD_FADE_TRANSPARENT.png"
                      alt="3rd Fade Logo"
                      fill
                      className="object-contain"
                    />
                  </div> */}
                  <span className="text-2xl font-bold font-playfair text-white">3rd Fade</span>
                </Link>
                <p className="text-gray-400 leading-relaxed">
                  Créateur de rêves visuels. Je transforme vos idées en histoires 
                  cinématographiques captivantes qui marquent les esprits.
                </p>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 transition-all duration-300 ${social.color} hover:bg-gray-700`}
                        aria-label={`Suivez-nous sur ${social.name}`}
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    );
                  })}
                </div>
              </motion.div>
            </div>

            {/* Quick Links */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold text-white mb-6">Navigation</h3>
                <ul className="space-y-3">
                  {quickLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Services */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold text-white mb-6">Services</h3>
                <ul className="space-y-3">
                  {services.map((service) => (
                    <li key={service} className="text-gray-400">
                      {service}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Contact Info */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold text-white mb-6">Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-gray-400">thirdfade@gmail.com</p>
                      <p className="text-sm text-gray-500">Réponse sous 24h</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-gray-400">+33 6 12 34 56 78</p>
                      <p className="text-sm text-gray-500">Lun-Ven 9h-18h</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-gray-400">Hasselt, Belgique</p>
                      <p className="text-sm text-gray-500">Déplacements possibles</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <span className="text-xs">&copy;</span>
                <span>{new Date().getFullYear()}</span>
                <a
                  href="https://www.aely.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center space-x-1 text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <span className="font-medium">aely.dev</span>
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </a>
              </div>
            </motion.div>
            
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              onClick={scrollToTop}
              className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 text-gray-400 cursor-pointer hover:text-white px-4 py-2 rounded-lg transition-all duration-300"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="text-sm">Retour en haut</span>
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
