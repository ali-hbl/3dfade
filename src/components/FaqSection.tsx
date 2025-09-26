'use client';

import { motion } from 'framer-motion';

type FaqItem = {
  question: string;
  answer: string;
};

type FaqSectionProps = {
  title?: string;
  description?: string;
  items?: FaqItem[];
  sectionClassName?: string;
};

const defaultItems: FaqItem[] = [
  {
    question: "Quel est le délai de livraison moyen ?",
    answer:
      "Le délai varie selon la complexité du projet. Pour un court-métrage simple, comptez 2-3 semaines. Pour des projets plus complexes, cela peut aller jusqu'à 6-8 semaines.",
  },
  {
    question: "Proposez-vous des révisions ?",
    answer:
      "Oui, j'inclus généralement 2-3 révisions dans mes forfaits pour m'assurer que le résultat final correspond parfaitement à vos attentes.",
  },
  {
    question: "Travaillez-vous en équipe ?",
    answer:
      "Je peux travailler seul ou en équipe selon les besoins du projet. J'ai un réseau de professionnels (monteurs, coloristes, musiciens) que je peux mobiliser.",
  },
  {
    question: "Quels formats de livraison proposez-vous ?",
    answer:
      "Je livre dans tous les formats standards (MP4, MOV, AVI) et en différentes résolutions selon vos besoins (HD, 4K, etc.).",
  },
];

export function FaqSection({ title, description, items, sectionClassName }: FaqSectionProps) {
  const sectionClasses = [
    'py-20 bg-gradient-to-r from-gray-900 to-black',
    sectionClassName,
  ]
    .filter(Boolean)
    .join(' ');

  const faqs = items?.length ? items : defaultItems;

  return (
    <section className={sectionClasses}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold font-playfair text-white mb-6">{title}</h2>
          {description ? (
            <p className="text-xl text-gray-400">{description}</p>
          ) : null}
        </motion.div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
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
  );
}
