'use client';
import { useState } from "react";
import { Button, Input, Textarea, Card, CardBody, Chip } from "@heroui/react";
import { motion } from "framer-motion";
import { FaEnvelope, FaUser, FaBuilding, FaPhone, FaCheck } from "react-icons/fa";

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
  plan: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    plan: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envío del formulario
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: "",
        plan: ""
      });
    }, 3000);
  };

  const plans = [
    { id: "starter", name: "Starter", price: "$29/mes" },
    { id: "professional", name: "Professional", price: "$79/mes" },
    { id: "enterprise", name: "Enterprise", price: "$199/mes" },
    { id: "custom", name: "Plan Personalizado", price: "Contactar" }
  ];

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center"
      >
        <Card className="bg-green-900/20 border-green-500">
          <CardBody className="p-8">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaCheck className="text-white text-2xl" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              ¡Gracias por tu interés!
            </h3>
            <p className="text-gray-300 mb-4">
              Hemos recibido tu solicitud. Uno de nuestros expertos se pondrá en contacto contigo en las próximas 24 horas.
            </p>
            <Chip color="success" variant="flat">
              Mensaje enviado exitosamente
            </Chip>
          </CardBody>
        </Card>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Card className="bg-gray-800/50 border-gray-700">
        <CardBody className="p-8">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-2">
              Solicita tu Demo Gratuito
            </h3>
            <p className="text-gray-300">
              Descubre cómo nuestra plataforma puede transformar tu comunidad VIP
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                type="text"
                label="Nombre completo"
                placeholder="Tu nombre"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                startContent={<FaUser className="text-gray-400" />}
                variant="bordered"
                color="primary"
                isRequired
              />
              
              <Input
                type="email"
                label="Email"
                placeholder="tu@email.com"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                startContent={<FaEnvelope className="text-gray-400" />}
                variant="bordered"
                color="primary"
                isRequired
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                type="text"
                label="Empresa/Proyecto"
                placeholder="Nombre de tu empresa"
                value={formData.company}
                onChange={(e) => handleChange("company", e.target.value)}
                startContent={<FaBuilding className="text-gray-400" />}
                variant="bordered"
                color="primary"
              />
              
              <Input
                type="tel"
                label="Teléfono"
                placeholder="+1 (555) 123-4567"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                startContent={<FaPhone className="text-gray-400" />}
                variant="bordered"
                color="primary"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Plan de interés
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {plans.map((plan) => (
                  <button
                    key={plan.id}
                    type="button"
                    onClick={() => handleChange("plan", plan.id)}
                    className={`p-3 rounded-lg border transition-all duration-200 ${
                      formData.plan === plan.id
                        ? "border-purple-500 bg-purple-500/20 text-white"
                        : "border-gray-600 bg-gray-700/50 text-gray-300 hover:border-gray-500"
                    }`}
                  >
                    <div className="text-sm font-medium">{plan.name}</div>
                    <div className="text-xs text-gray-400">{plan.price}</div>
                  </button>
                ))}
              </div>
            </div>

            <Textarea
              label="Mensaje (opcional)"
              placeholder="Cuéntanos sobre tu comunidad y objetivos..."
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
              variant="bordered"
              color="primary"
              minRows={3}
              maxRows={5}
            />

            <Button
              type="submit"
              color="primary"
              size="lg"
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white"
              isLoading={isSubmitting}
              disabled={!formData.name || !formData.email}
            >
              {isSubmitting ? "Enviando..." : "Solicitar Demo Gratuito"}
            </Button>

            <p className="text-xs text-gray-400 text-center">
              Al enviar este formulario, aceptas recibir comunicaciones sobre nuestro producto. 
              Puedes cancelar en cualquier momento.
            </p>
          </form>
        </CardBody>
      </Card>
    </motion.div>
  );
} 