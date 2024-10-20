"use client"

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function FAQSection() {
  const [openQuestion, setOpenQuestion] = useState(0)

  const faqData = [
    {
      question: "Quels sont les services proposés par Kadi Prestige ?",
      answer: "Kadi Prestige offre une gamme variée de services, incluant des travaux de forage et d'adduction d'eau potable, des projets de BTP (construction de routes et de bâtiments), la livraison de denrées alimentaires, la production et distribution d'eau potable 'Kadi Prestige', ainsi que la confection de tenues et uniformes de travail. Nous avons également une ONG dédiée à l'autonomisation des femmes et à l'aide aux personnes démunies."
    },
    {
      question: "Comment puis-je demander un devis pour un projet ?",
      answer: "Pour obtenir un devis, vous pouvez nous contacter via notre formulaire en ligne sur notre site web, nous appeler directement au numéro indiqué dans la section contact, ou nous envoyer un email détaillant votre projet. Notre équipe vous répondra dans les plus brefs délais pour discuter de vos besoins spécifiques et vous fournir une estimation précise."
    },
    {
      question: "Quelle est la zone géographique couverte par vos services ?",
      answer: "Kadi Prestige opère principalement en Côte d'Ivoire, avec une présence forte à Abidjan et dans les principales villes du pays. Cependant, nous sommes en mesure de réaliser des projets sur l'ensemble du territoire national et sommes ouverts à des opportunités dans la sous-région ouest-africaine selon la nature et l'envergure du projet."
    },
    {
      question: "Comment Kadi Prestige garantit-elle la qualité de ses services ?",
      answer: "Chez Kadi Prestige, nous accordons une importance primordiale à la qualité. Nous employons des professionnels hautement qualifiés, utilisons des équipements modernes et suivons rigoureusement les normes internationales dans tous nos projets. De plus, nous effectuons des contrôles qualité réguliers et sollicitons systématiquement les retours de nos clients pour assurer une amélioration continue de nos services."
    }
  ]

  return (
    <motion.div 
      className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold mb-2 text-center">Vous avez quelques questions ?</h2>
          <p className="text-gray-600 mb-8 text-center">Voici quelques questions fréquemment posées</p>
        </motion.div>
        
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <motion.div 
              key={index} 
              className="border-b border-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <button
                className="flex justify-between items-center w-full py-4 text-left"
                onClick={() => setOpenQuestion(openQuestion === index ? -1 : index)}
                aria-expanded={openQuestion === index}
              >
                <span className="text-blue-700 text-[17px] font-medium">{faq.question}</span>
                <span className="text-2xl transition-transform duration-300" style={{
                  transform: openQuestion === index ? 'rotate(45deg)' : 'rotate(0deg)'
                }}>
                  +
                </span>
              </button>
              <motion.div 
                className="overflow-hidden"
                initial={{ height: 0 }}
                animate={{ height: openQuestion === index ? 'auto' : 0 }}
                transition={{ duration: 0.3 }}
              >
                <p className="pb-4 text-gray-600">{faq.answer}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="flex justify-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          <Link href="../pages/contact">
            <button className="bg-[#EA1D24] text-white px-6 py-2 rounded-full hover:bg-red-600 transition-colors">
              J'ai une question
            </button>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  )
}