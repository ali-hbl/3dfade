'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Clock, Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: '',
    budget: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Erreur inconnue lors de l’envoi.');
      }

      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          project: '',
          budget: '',
          message: '',
        });
      }, 3000);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Erreur inattendue lors de l’envoi.';
      alert('Erreur lors de l’envoi du formulaire : ' + message);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      details: 'thirdfade@gmail.com',
      description: 'Réponse sous 24h',
    },
    {
      icon: Phone,
      title: 'Téléphone',
      details: '+33 6 12 34 56 78',
      description: 'Lun-Ven 9h-18h',
    },
    {
      icon: MapPin,
      title: 'Localisation',
      details: 'Paris, France',
      description: 'Déplacements possibles',
    },
  ];

  const questions = [
    {
      question: "Quel est le délai de livraison moyen ?",
      answer: "Le délai varie selon la complexité du projet. Pour un court-métrage simple, comptez 2-3 semaines. Pour des projets plus complexes, cela peut aller jusqu'à 6-8 semaines."
    },
    {
      question: "Proposez-vous des révisions ?",
      answer: "Oui, j'inclus généralement 2-3 révisions dans mes forfaits pour m'assurer que le résultat final correspond parfaitement à vos attentes."
    },
    {
      question: "Travaillez-vous en équipe ?",
      answer: "Je peux travailler seul ou en équipe selon les besoins du projet. J'ai un réseau de professionnels (monteurs, coloristes, musiciens) que je peux mobiliser."
    },
    {
      question: "Quels formats de livraison proposez-vous ?",
      answer: "Je livre dans tous les formats standards (MP4, MOV, AVI) et en différentes résolutions selon vos besoins (HD, 4K, etc.)."
    }
  ];

  const projectTypes = [
    'Publicité / Commercial',
    'Mariage',
    'Vidéo Corporate',
    'Clip Musical',
    'Documentaire',
    'Autre',
  ];

  const budgetRanges = [
    'Moins de 1000€',
    '1000€ - 3000€',
    '3000€ - 5000€',
    '5000€ - 10000€',
    'Plus de 10000€',
    'À discuter',
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
              Contactez-moi
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Prêt à donner vie à votre projet ? Discutons de vos idées et créons 
              ensemble quelque chose d'extraordinaire.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold font-playfair text-white mb-8">
                Informations de contact
              </h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-1">{info.title}</h3>
                        <p className="text-lg text-gray-300 mb-1">{info.details}</p>
                        <p className="text-sm text-gray-400">{info.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-12 p-6 bg-gray-800/50 rounded-xl">
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="w-6 h-6 text-red-500" />
                  <h3 className="text-xl font-semibold text-white">Disponibilités</h3>
                </div>
                <div className="space-y-2 text-gray-300">
                  <p>• Lundi - Vendredi : 9h00 - 18h00</p>
                  <p>• Week-ends : Sur rendez-vous</p>
                  <p>• Réponse email : Sous 24h</p>
                  <p>• Appels : Disponible selon planning</p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8">
                <h2 className="text-3xl font-bold font-playfair text-white mb-8">
                  Démarrer un projet
                </h2>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-semibold text-white mb-2">Message envoyé !</h3>
                    <p className="text-gray-400">Je vous répondrai dans les plus brefs délais.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                          Nom complet *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors"
                          placeholder="Votre nom"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors"
                          placeholder="votre@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors"
                        placeholder="+33 6 12 34 56 78"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="project" className="block text-sm font-medium text-gray-300 mb-2">
                          Type de projet *
                        </label>
                        <select
                          id="project"
                          name="project"
                          value={formData.project}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-red-500 transition-colors"
                        >
                          <option value="">Sélectionnez un type</option>
                          {projectTypes.map((type) => (
                            <option key={type} value={type}>{type}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">
                          Budget estimé
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-red-500 transition-colors"
                        >
                          <option value="">Sélectionnez un budget</option>
                          {budgetRanges.map((range) => (
                            <option key={range} value={range}>{range}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors resize-none"
                        placeholder="Décrivez votre projet en détail..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-red-500/25 transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <Send className="w-5 h-5" />
                      <span>Envoyer le message</span>
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold font-playfair text-white mb-6">
              Questions fréquentes
            </h2>
            <p className="text-xl text-gray-400">
              Quelques réponses aux questions que vous pourriez vous poser
            </p>
          </motion.div>

          <div className="space-y-6">
            {questions.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
