'use client'
import { Button, Card, CardBody, Chip } from "@heroui/react";
import { motion } from "framer-motion";
import { 
  FaUsers, 
  FaCreditCard, 
  FaLock, 
  FaChartLine, 
  FaCog, 
  FaRocket,
  FaStar,
  FaArrowRight,
  FaPlay
} from "react-icons/fa";
import {HeaderLg, HeaderMd} from "@/components/Header-Landing";
import PricingCard from "@/components/ui/pricingcard";
import { useState } from "react";

export default function Home() {
  const [isAnnual, setIsAnnual] = useState(false);

  const features = [
    {
      icon: <FaUsers className="text-2xl" />,
      title: "Gestión de Miembros",
      description: "Administra fácilmente tu comunidad VIP con herramientas avanzadas de gestión de usuarios."
    },
    {
      icon: <FaCreditCard className="text-2xl" />,
      title: "Pagos Automatizados",
      description: "Sistema de pagos integrado con múltiples gateways para cobros recurrentes."
    },
    {
      icon: <FaLock className="text-2xl" />,
      title: "Contenido Exclusivo",
      description: "Protege tu contenido premium con acceso controlado por niveles de membresía."
    },
    {
      icon: <FaChartLine className="text-2xl" />,
      title: "Analytics Avanzados",
      description: "Métricas detalladas sobre el crecimiento y engagement de tu comunidad."
    },
    {
      icon: <FaCog className="text-2xl" />,
      title: "Personalización Total",
      description: "Adapta la plataforma a tu marca con temas y configuraciones personalizadas."
    },
    {
      icon: <FaRocket className="text-2xl" />,
      title: "Escalabilidad",
      description: "Crece sin límites con infraestructura que se adapta a tu comunidad."
    }
  ];

  const testimonials = [
    {
      name: "María González",
      role: "Creadora de Contenido",
      content: "Esta plataforma revolucionó mi negocio. Ahora puedo gestionar mi comunidad de 10,000 miembros sin problemas.",
      rating: 5
    },
    {
      name: "Carlos Rodríguez",
      role: "Coach Digital",
      content: "Los pagos automatizados y el contenido exclusivo me han ayudado a multiplicar mis ingresos por 5.",
      rating: 5
    },
    {
      name: "Ana Martínez",
      role: "Influencer Tech",
      content: "La mejor inversión que he hecho. Mi comunidad creció un 300% en el primer mes.",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "¿Cómo funciona el sistema de pagos?",
      answer: "Integramos con los principales gateways de pago como Stripe, PayPal y MercadoPago. Los pagos se procesan automáticamente y puedes configurar cobros recurrentes."
    },
    {
      question: "¿Puedo migrar mi comunidad existente?",
      answer: "Sí, ofrecemos servicios de migración gratuitos para comunidades con más de 500 miembros. Nuestro equipo te ayuda con todo el proceso."
    },
    {
      question: "¿Qué tipo de contenido puedo ofrecer?",
      answer: "Soporta videos, audios, documentos, cursos, webinars en vivo, y cualquier tipo de contenido digital. Todo con protección DRM."
    },
    {
      question: "¿Hay límite en el número de miembros?",
      answer: "Depende del plan. Starter hasta 100, Professional hasta 1,000, y Enterprise sin límites. Todos los planes incluyen escalabilidad automática."
    },
    {
      question: "¿Ofrecen soporte técnico?",
      answer: "Sí, todos los planes incluyen soporte. Professional y Enterprise incluyen soporte prioritario y Enterprise incluye soporte 24/7."
    }
  ];

  return (
    <> 
      <div className="hidden sm:block">
        <HeaderLg />
      </div>
      <div className="sm:hidden">
        <HeaderMd />
      </div>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/40 to-blue-900/40" />
          <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Chip color="primary" variant="flat" className="mb-6 text-base">
                🚀 Lanzamiento Próximo
              </Chip>
              <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-xl">
                La Plataforma Definitiva para
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  {" "}Comunidades VIP
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Automatiza, monetiza y escala tu comunidad con la herramienta más completa del mercado. 
                Gestiona miembros, pagos y contenido exclusivo desde un solo dashboard.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  size="lg" 
                  color="primary" 
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 text-lg shadow-lg hover:scale-105 transition"
                >
                  Únete a la Preventa
                  <FaArrowRight className="ml-2" />
                </Button>
                <Button 
                  size="lg" 
                  variant="bordered" 
                  className="border-white text-white px-8 py-4 text-lg hover:bg-gray-900/40"
                >
                  <FaPlay className="mr-2" />
                  Ver Demo
                </Button>
              </div>
              <p className="text-gray-400 mt-6">
                ✨ Únete a 500+ creadores en la lista de espera
              </p>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 drop-shadow-lg">
                Todo lo que Necesitas para tu Comunidad VIP
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Una plataforma completa que combina las mejores herramientas para hacer crecer tu negocio
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-gray-900/80 border border-gray-800 rounded-xl shadow-lg hover:border-purple-500 transition-all duration-300">
                    <CardBody className="text-center p-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400">
                        {feature.description}
                      </p>
                    </CardBody>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 bg-gray-900/70">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 drop-shadow-lg">
                Lo que Dicen Nuestros Creadores
              </h2>
              <p className="text-xl text-gray-300">
                Creadores que ya están transformando sus comunidades
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-gray-900/80 border border-gray-800 rounded-xl shadow-lg">
                    <CardBody className="p-6">
                      <div className="flex items-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <FaStar key={i} className="text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-gray-400 mb-4 italic">
                        &quot;{testimonial.content}&quot;
                      </p>
                      <div>
                        <p className="font-bold text-white">{testimonial.name}</p>
                        <p className="text-gray-500 text-sm">{testimonial.role}</p>
                      </div>
                    </CardBody>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 drop-shadow-lg">
                Planes que se Adaptan a tu Crecimiento
              </h2>
              <p className="text-xl text-gray-300">
                Elige el plan perfecto para tu comunidad
              </p>
            </motion.div>
            <PricingCard isAnnual={isAnnual} />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 bg-gray-900/70">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 drop-shadow-lg">
                Preguntas Frecuentes
              </h2>
              <p className="text-xl text-gray-300">
                Todo lo que necesitas saber sobre nuestra plataforma
              </p>
            </motion.div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-gray-900/80 border border-gray-800 rounded-xl shadow-lg">
                    <CardBody className="p-6">
                      <h3 className="text-xl font-bold text-white mb-3">
                        {faq.question}
                      </h3>
                      <p className="text-gray-400">
                        {faq.answer}
                      </p>
                    </CardBody>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 drop-shadow-lg">
                ¿Listo para Transformar tu Comunidad?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Únete a cientos de creadores que ya están monetizando sus comunidades con nuestra plataforma
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  color="primary" 
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 text-lg shadow-lg hover:scale-105 transition"
                >
                  Comenzar Gratis por 14 Días
                  <FaArrowRight className="ml-2" />
                </Button>
                <Button 
                  size="lg" 
                  variant="bordered" 
                  className="border-white text-white px-8 py-4 text-lg hover:bg-gray-900/40"
                >
                  Hablar con un Experto
                </Button>
              </div>
              <p className="text-gray-400 mt-6">
                ✨ Sin tarjeta de crédito requerida • Cancelación en cualquier momento
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}