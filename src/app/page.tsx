'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Award, Film, Play, Users } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video Placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800">
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Main Title */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-playfair">
              <span className="block text-white">Créateur de</span>
              <span className="block bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                Rêves Visuels
              </span>
            </h1>
            
            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              Je transforme vos idées en histoires cinématographiques captivantes. 
              Chaque projet est une nouvelle aventure créative.
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12"
            >
              <Link
                href="/creations"
                className="group bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-red-500/25 transition-all duration-300 flex items-center space-x-2"
              >
                <Play className="w-5 h-5" />
                <span>Voir mes créations</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300"
              >
                Travaillons ensemble
              </Link>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          >
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto">
                <Film className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-white">150+</h3>
              <p className="text-gray-400 text-lg">Projets réalisés</p>
            </div>
            
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-white">25+</h3>
              <p className="text-gray-400 text-lg">Récompenses</p>
            </div>
            
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-white">100+</h3>
              <p className="text-gray-400 text-lg">Clients satisfaits</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold font-playfair text-white mb-6">
              Dernières Créations
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Découvrez mes projets les plus récents et laissez-vous inspirer par la diversité de mes créations.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: item * 0.2 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg bg-gray-800 aspect-video">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-orange-500/20 flex items-center justify-center">
                    <Play className="w-16 h-16 text-white opacity-80 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Projet Cinématographique {item}
                  </h3>
                  <p className="text-gray-400">
                    Description du projet et de son impact créatif.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              href="/creations"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-red-500/25 transition-all duration-300"
            >
              <span>Voir toutes les créations</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
