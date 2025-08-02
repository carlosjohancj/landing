'use client'
import { Card, CardBody, CardHeader, Divider, Button } from "@heroui/react";
import { motion } from "framer-motion";
import { FaCheck, FaTimes, FaStar, FaRocket, FaCrown } from "react-icons/fa";

export default function PricingCard({ isAnnual, setIsAnnual }: { isAnnual: boolean, setIsAnnual: (v: boolean) => void }) {
 const plans = [
    {
      name: "Starter",
      icon: <FaRocket className="text-2xl" />,
      monthlyPrice: 29,
      annualPrice: 290,
      description: "Perfecto para comenzar tu comunidad VIP",
      features: [
        { text: "Hasta 100 miembros", included: true },
        { text: "Contenido básico", included: true },
        { text: "Pagos manuales", included: true },
        { text: "Soporte por email", included: true },
        { text: "Tema básico", included: true },
        { text: "Analytics básicos", included: false },
        { text: "Pagos automatizados", included: false },
        { text: "Contenido premium", included: false },
        { text: "Soporte prioritario", included: false },
        { text: "Temas personalizados", included: false },
        { text: "API personalizada", included: false },
        { text: "Soporte 24/7", included: false }
      ],
      popular: false,
      color: "default"
    },
    {
      name: "Professional",
      icon: <FaStar className="text-2xl" />,
      monthlyPrice: 79,
      annualPrice: 790,
      description: "Para comunidades en crecimiento",
      features: [
        { text: "Hasta 1,000 miembros", included: true },
        { text: "Contenido premium", included: true },
        { text: "Pagos automatizados", included: true },
        { text: "Soporte prioritario", included: true },
        { text: "Temas personalizados", included: true },
        { text: "Analytics básicos", included: true },
        { text: "Contenido básico", included: true },
        { text: "Pagos manuales", included: true },
        { text: "Soporte por email", included: true },
        { text: "Tema básico", included: true },
        { text: "API personalizada", included: false },
        { text: "Soporte 24/7", included: false }
      ],
      popular: true,
      color: "primary"
    },
    {
      name: "Enterprise",
      icon: <FaCrown className="text-2xl" />,
      monthlyPrice: 199,
      annualPrice: 1990,
      description: "Para comunidades grandes",
      features: [
        { text: "Miembros ilimitados", included: true },
        { text: "Contenido ilimitado", included: true },
        { text: "Múltiples gateways", included: true },
        { text: "Soporte 24/7", included: true },
        { text: "Personalización total", included: true },
        { text: "Analytics avanzados", included: true },
        { text: "API personalizada", included: true },
        { text: "Contenido premium", included: true },
        { text: "Pagos automatizados", included: true },
        { text: "Soporte prioritario", included: true },
        { text: "Temas personalizados", included: true },
        { text: "Analytics básicos", included: true }
      ],
      popular: false,
      color: "secondary"
    }
  ];


  const getPrice = (plan: any) => isAnnual ? plan.annualPrice : plan.monthlyPrice;
  const getPeriod = () => isAnnual ? "/año" : "/mes";

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {plans.map((plan, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="h-full"
        >
          <Card className={`h-full flex flex-col overflow-hidden ${
            plan.popular 
              ? "ring-2 ring-purple-500 bg-gradient-to-b from-purple-900/10 to-gray-900/50" 
              : "bg-gray-900/50 border-gray-800"
          }`}>
            <CardHeader className={` flex flex-col pt-8 pb-6 text-center ${
              plan.popular ? "bg-gradient-to-r from-purple-900/20 to-blue-900/20" : ""
            }`}>
              <div className="flex justify-center mb-4">
                <div className={`w-14 h-14 rounded-full flex items-center justify-center ${
                  plan.popular 
                    ? "bg-gradient-to-r from-purple-600 to-blue-600" 
                    : "bg-gray-800"
                }`}>
                  {plan.icon}
                </div>
              </div>
              
              <h2 className={`text-3xl font-bold ${
                plan.popular ? "text-white" : "text-gray-200"
              }`}>
                {plan.name}
              </h2>
              
              <p className="text-gray-400 mt-2 text-sm max-w-xs mx-auto">
                {plan.description}
              </p>
              
              <div className="mt-4">
                <div className="flex items-baseline justify-center gap-2">
                  <span className={`text-4xl font-bold ${
                    plan.popular ? "text-white" : "text-gray-200"
                  }`}>
                    ${getPrice(plan)}
                  </span>
                  <span className="text-gray-400 text-sm">{getPeriod()}</span>
                </div>
              </div>
            </CardHeader>
            
            <Divider className="my-0" />
            
            <CardBody className="flex-1 flex flex-col pt-6 pb-0">
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    {feature.included ? (
                      <FaCheck className="text-green-400 mt-1 mr-3 flex-shrink-0" />
                    ) : (
                      <FaTimes className="text-red-400 mt-1 mr-3 flex-shrink-0" />
                    )}
                    <span className={`${feature.included ? 'text-gray-300' : 'text-gray-500'}`}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
              
              <div className="py-4">
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700" 
                      : "bg-gray-800 hover:bg-gray-700"
                  }`}
                  size="lg"
                >
                  Seleccionar
                </Button>
              </div>
            </CardBody>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}