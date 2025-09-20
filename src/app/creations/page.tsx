'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, Eye, Filter, Play, Search } from 'lucide-react';
import { useState } from 'react';

export default function Creations() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'Toutes les créations' },
    { id: 'commercial', name: 'Publicités' },
    { id: 'wedding', name: 'Mariages' },
    { id: 'corporate', name: 'Corporate' },
    { id: 'music', name: 'Clips musicaux' },
    { id: 'documentary', name: 'Documentaires' },
  ];

  const projects = [
    {
      id: 1,
      title: 'Campagne Publicitaire - Luxe',
      category: 'commercial',
      duration: '2:30',
      views: '125K',
      date: '2024',
      thumbnail: '/api/placeholder/600/400',
      description: 'Une campagne publicitaire sophistiquée mettant en valeur l&apos;élégance et le raffinement.',
    },
    {
      id: 2,
      title: 'Mariage de Sarah & Marc',
      category: 'wedding',
      duration: '8:45',
      views: '89K',
      date: '2024',
      thumbnail: '/api/placeholder/600/400',
      description: 'Un film de mariage émouvant capturant les moments les plus précieux de cette journée spéciale.',
    },
    {
      id: 3,
      title: 'Clip Musical - Artiste Indé',
      category: 'music',
      duration: '4:12',
      views: '256K',
      date: '2024',
      thumbnail: '/api/placeholder/600/400',
      description: 'Un clip musical créatif explorant les thèmes de l&apos;introspection et de la croissance personnelle.',
    },
    {
      id: 4,
      title: 'Documentaire - Entrepreneurs',
      category: 'documentary',
      duration: '15:30',
      views: '67K',
      date: '2023',
      thumbnail: '/api/placeholder/600/400',
      description: 'Un documentaire inspirant sur le parcours de jeunes entrepreneurs passionnés.',
    },
    {
      id: 5,
      title: 'Vidéo Corporate - Tech Startup',
      category: 'corporate',
      duration: '3:20',
      views: '45K',
      date: '2023',
      thumbnail: '/api/placeholder/600/400',
      description: 'Présentation dynamique d&apos;une startup innovante dans le domaine de la technologie.',
    },
    {
      id: 6,
      title: 'Film de Mariage - Destination',
      category: 'wedding',
      duration: '12:15',
      views: '134K',
      date: '2023',
      thumbnail: '/api/placeholder/600/400',
      description: 'Un mariage de rêve dans un cadre idyllique, capturé avec poésie et émotion.',
    },
  ];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
              Mes créations
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Découvrez une sélection de mes projets les plus marquants. 
              Chaque création raconte une histoire unique.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-12 bg-black border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Rechercher un projet..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20">
              <Filter className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-2">Aucun projet trouvé</h3>
              <p className="text-gray-400">Essayez de modifier vos critères de recherche.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-xl bg-gray-800 aspect-video mb-4">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-orange-500/20 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                    
                    {/* Project Info Overlay */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center justify-between text-white">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span className="text-sm">{project.duration}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Eye className="w-4 h-4" />
                            <span className="text-sm">{project.views}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">{project.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-red-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold font-playfair text-white mb-6">
              Prêt à créer quelque chose ensemble ?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Chaque projet est une nouvelle aventure créative. Discutons de votre vision 
              et transformons-la en réalité.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-red-500/25 transition-all duration-300">
                Démarrer un projet
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300">
                Voir plus de projets
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
