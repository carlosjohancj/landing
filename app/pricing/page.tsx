'use client';
import { Button, Card, CardBody, Chip, Switch } from "@heroui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import PricingCard from "@/components/ui/pricingcard";

export default function PricingPage() {


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Planes que se Adaptan a tu Crecimiento
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Elige el plan perfecto para tu comunidad VIP. Todos los planes incluyen
            actualizaciones gratuitas y soporte técnico.
          </p>

   
        </motion.div>

        {/* Pricing Cards */}
        <PricingCard />
        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Preguntas Frecuentes sobre Precios
            </h2>
            <p className="text-gray-300">
              Resolvemos las dudas más comunes sobre nuestros planes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "¿Puedo cambiar de plan en cualquier momento?",
                answer: "Sí, puedes actualizar o degradar tu plan en cualquier momento. Los cambios se reflejan inmediatamente en tu facturación."
              },
              {
                question: "¿Hay cargos ocultos o comisiones?",
                answer: "No, nuestros precios son transparentes. No cobramos comisiones por transacciones ni cargos ocultos."
              },
              {
                question: "¿Ofrecen descuentos para organizaciones sin fines de lucro?",
                answer: "Sí, ofrecemos descuentos especiales para organizaciones sin fines de lucro. Contáctanos para más detalles."
              },
              {
                question: "¿Qué incluye el soporte técnico?",
                answer: "Todos los planes incluyen soporte por email. Professional y Enterprise incluyen soporte prioritario y Enterprise incluye soporte 24/7."
              }
            ].map((faq, index) => (
              <Card key={index} className="bg-gray-800/30 border-gray-700">
                <CardBody className="p-6">
                  <h3 className="text-lg font-bold text-white mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-300">
                    {faq.answer}
                  </p>
                </CardBody>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-center mt-16"
        >
          <Card className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 border-purple-500">
            <CardBody className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                ¿Necesitas un Plan Personalizado?
              </h3>
              <p className="text-gray-300 mb-6">
                Si tienes necesidades específicas o una comunidad muy grande,
                podemos crear un plan personalizado para ti.
              </p>
              <Button
                color="primary"
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600"
              >
                Contactar para Plan Personalizado
              </Button>
            </CardBody>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}