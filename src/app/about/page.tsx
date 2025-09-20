'use client';

import { motion } from 'framer-motion';
import { Award, Camera, Clock, Edit3, Star, Users, Video } from 'lucide-react';

export default function About() {
  const skills = [
    { name: 'Réalisation', icon: Video, level: 95 },
    { name: 'Montage', icon: Edit3, level: 98 },
    { name: 'Cadrage', icon: Camera, level: 92 },
    { name: 'Post-production', icon: Edit3, level: 90 },
  ];

  const achievements = [
    {
      year: '2024',
      title: 'Prix du Meilleur Court-Métrage',
      description: 'Festival International du Film Indépendant',
    },
    {
      year: '2023',
      title: 'Réalisateur de l\'Année',
      description: 'Association des Créateurs Vidéo',
    },
    {
      year: '2022',
      title: 'Meilleure Direction Artistique',
      description: 'Festival de Cannes - Section Court',
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl sm:text-6xl font-bold font-playfair text-white mb-6">
              À propos de moi
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Passionné par l&apos;art cinématographique depuis plus de 10 ans, 
              je crée des histoires visuelles qui marquent les esprits.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold font-playfair text-white mb-8">
                Mon parcours
              </h2>
              <div className="space-y-6 text-gray-300">
                <p className="text-lg leading-relaxed">
                  Tout a commencé il y a plus de 10 ans avec une simple caméra et une passion 
                  dévorante pour raconter des histoires. Depuis, j&apos;ai eu le privilège de 
                  collaborer avec des marques prestigieuses et des artistes talentueux.
                </p>
                <p className="text-lg leading-relaxed">
                  Mon approche se base sur une compréhension profonde de la narration visuelle 
                  et une attention méticuleuse aux détails. Chaque projet est une opportunité 
                  d&apos;explorer de nouveaux horizons créatifs.
                </p>
                <p className="text-lg leading-relaxed">
                  Aujourd&apos;hui, je continue d&apos;évoluer dans cet univers fascinant, toujours 
                  à la recherche de nouvelles techniques et de nouvelles histoires à raconter.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <Camera className="w-24 h-24 text-red-500 mx-auto mb-4" />
                  <p className="text-gray-400">Photo de profil</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold font-playfair text-white mb-6">
              Mes compétences
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Une expertise technique solide au service de la créativité
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                      <p className="text-gray-400">{skill.level}%</p>
                    </div>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-r from-red-500 to-orange-500 h-2 rounded-full"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold font-playfair text-white mb-6">
              Récompenses & Reconnaissance
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Des moments de fierté qui marquent mon parcours professionnel
            </p>
          </motion.div>

          <div className="space-y-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex items-center space-x-6 p-6 bg-gray-800/30 rounded-xl hover:bg-gray-800/50 transition-colors"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-2">
                    <h3 className="text-xl font-semibold text-white">{achievement.title}</h3>
                    <span className="text-red-500 font-bold">{achievement.year}</span>
                  </div>
                  <p className="text-gray-400">{achievement.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold font-playfair text-white mb-6">
              Mes valeurs
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Les principes qui guident mon travail et ma relation avec mes clients
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Excellence</h3>
              <p className="text-gray-400">
                Chaque détail compte. Je m&apos;efforce de livrer un travail d&apos;exception 
                qui dépasse les attentes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Collaboration</h3>
              <p className="text-gray-400">
                Votre vision est au cœur de chaque projet. Je travaille en étroite 
                collaboration pour la concrétiser.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Ponctualité</h3>
              <p className="text-gray-400">
                Respecter les délais est essentiel. Je m&apos;engage à livrer vos projets 
                dans les temps convenus.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
