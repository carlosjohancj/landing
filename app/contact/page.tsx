"use client";

import ContactForm from "@/components/ContactForm";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";

export default function ContactPage() {
  const contactInfo = [
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: "Email",
      content: "hola@vipiacommunity.com",
      description: "Respuesta en 24 horas"
    },
    {
      icon: <FaPhone className="text-2xl" />,
      title: "Teléfono",
      content: "+1 (555) 123-4567",
      description: "Lun-Vie 9AM-6PM EST"
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: "Oficina",
      content: "Corder, Tachira",
      description: "Venezuela"
    },
    {
      icon: <FaClock className="text-2xl" />,
      title: "Horario",
      content: "9:00 AM - 6:00 PM",
      description: "Lunes a Viernes"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Contacta con Nosotros
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            ¿Listo para transformar tu comunidad VIP? Nuestro equipo de expertos está aquí para ayudarte 
            a elegir la mejor solución para tu negocio.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <ContactForm />
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Información de Contacto
              </h2>
              <p className="text-gray-300 mb-8">
                Nuestro equipo está disponible para responder todas tus preguntas sobre 
                la plataforma y ayudarte a implementar la mejor estrategia para tu comunidad.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="flex items-start space-x-4 p-4 bg-gray-800/30 rounded-lg border border-gray-700"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {info.title}
                    </h3>
                    <p className="text-gray-300 font-medium">
                      {info.content}
                    </p>
                    <p className="text-gray-400 text-sm">
                      {info.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* FAQ Quick Links */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-white mb-4">
                Preguntas Frecuentes
              </h3>
              <div className="space-y-3">
                {[
                  "¿Cómo funciona el sistema de pagos?",
                  "¿Puedo migrar mi comunidad existente?",
                  "¿Qué tipo de contenido puedo ofrecer?",
                  "¿Hay límite en el número de miembros?"
                ].map((question, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                    className="p-3 bg-gray-800/30 rounded-lg border border-gray-700 hover:border-purple-500 transition-colors cursor-pointer"
                  >
                    <p className="text-gray-300 hover:text-white transition-colors">
                      {question}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 