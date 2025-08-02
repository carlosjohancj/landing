'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import nextLogo from '@/public/next.svg';
import reactLogo from '@/public/reactjs.svg';
import n8nLogo from '@/public/n8n.svg';
import awsLogo from '@/public/aws.svg';
import dbLogo from '@/public/postgresql.svg';
import { FaUsers, FaCreditCard, FaLock, FaChartLine, FaRocket, FaCheck, FaBrain } from 'react-icons/fa';

export default function AboutPage() {
  const features = [
    {
      icon: <FaUsers className="text-3xl text-purple-500" />,
      title: "Gestión de Miembros",
      description: "Administra fácilmente tu comunidad VIP con herramientas avanzadas de gestión de usuarios."
    },
    {
      icon: <FaCreditCard className="text-3xl text-purple-500" />,
      title: "Pagos Automatizados",
      description: "Sistema de pagos integrado con múltiples gateways para cobros recurrentes."
    },
    {
      icon: <FaLock className="text-3xl text-purple-500" />,
      title: "Contenido Exclusivo",
      description: "Protege tu contenido premium con acceso controlado por niveles de membresía."
    },
    {
      icon: <FaChartLine className="text-3xl text-purple-500" />,
      title: "Analytics Avanzados",
      description: "Métricas detalladas sobre el crecimiento y engagement de tu comunidad."
    },
    {
      icon: <FaRocket className="text-3xl text-purple-500" />,
      title: "Escalabilidad",
      description: "Crece sin límites con infraestructura que se adapta a tu comunidad."
    },
    {
      icon: <FaBrain className="text-3xl text-purple-500" />,
      title: "Asistente IA",
      description: "Asistencia de agente de IA para estrategia, programación y creación de contenido."
    }
  ];

  const technologies = [
    { name: "Next.js", logo: nextLogo, color: "text-white" },
    { name: "React", logo: reactLogo, color: "text-blue-400" },
    { name: "n8n", logo: n8nLogo, color: "text-red-400" },
    { name: "PostgreSQL", logo: dbLogo, color: "text-cyan-400" },
    { name: "AWS", logo: awsLogo, color: "text-yellow-400" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 px-4 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            Acerca de <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Nosotros</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Somos una comunidad dedicada a ayudar a creadores y emprendedores a monetizar sus comunidades VIP a través de un sistema SaaS innovador.
          </p>
        </motion.div>

        {/* Mission Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch mb-24">
  {/* Columna de Misión - Ocupa toda la altura */}
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="h-full flex flex-col"
  >
    <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-2xl p-8 border border-gray-800 shadow-xl h-full flex flex-col">
      <div className="flex-grow">
        <h2 className="text-3xl font-bold text-white mb-6">Nuestra Misión</h2>
        <p className="text-lg text-gray-300 mb-6">
          Empoderar a creadores digitales con herramientas que automatizan la monetización de sus comunidades VIP, permitiéndoles enfocarse en lo que mejor hacen: crear contenido de valor.
        </p>
      </div>
      
      <div className="flex items-center mt-auto pt-6">
        <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mr-4">
          <FaRocket className="text-xl" />
        </div>
        <div>
          <p className="text-white font-bold">Transformando comunidades</p>
          <p className="text-gray-400 text-sm">Desde 2023</p>
        </div>
      </div>
    </div>
  </motion.div>
  
  {/* Columna de Características - Grid interno responsivo */}
  <motion.div
    initial={{ opacity: 0, x: 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full"
  >
    {features.map((feature, index) => (
      <div 
        key={index} 
        className="bg-gray-900/80 border border-gray-800 rounded-xl p-6 hover:border-purple-500 transition-all flex flex-col h-full"
      >
        <div className="mb-4">
          {feature.icon}
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
        <p className="text-gray-400 text-sm flex-grow">{feature.description}</p>
      </div>
    ))}
  </motion.div>
</div>

        {/* How It Works */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              ¿Cómo funciona <span className="text-purple-400">nuestro sistema</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Una plataforma completa que automatiza todo el proceso de membresías VIP
            </p>
          </div>
          
          <div className="bg-gray-900/80 border border-gray-800 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Proceso Simplificado</h3>
                <p className="text-lg text-gray-300 mb-6">
                  El sistema permite gestionar membresías, pagos recurrentes, acceso a contenido exclusivo y comunicación directa con tu comunidad. Todo el proceso es automatizado, desde el registro de usuarios hasta la entrega de beneficios VIP.
                </p>
                <div className="space-y-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-purple-900/50 flex items-center justify-center mr-4">
                        <span className="text-purple-400 font-bold">1</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1">Registro y gestión</h4>
                      <p className="text-gray-400">Sistema completo para administrar miembros VIP</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-purple-900/50 flex items-center justify-center mr-4">
                        <span className="text-purple-400 font-bold">2</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1">Automatización de pagos</h4>
                      <p className="text-gray-400">Cobros recurrentes y renovaciones automáticas</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-purple-900/50 flex items-center justify-center mr-4">
                        <span className="text-purple-400 font-bold">3</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1">Entrega de contenido</h4>
                      <p className="text-gray-400">Protección y distribución de contenido premium</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-4">Beneficios Clave</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <FaCheck className="text-green-400 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">Panel de control para analíticas y crecimiento</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-green-400 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">Soporte y comunicación directa con los miembros</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-green-400 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">Integraciones con Stripe, PayPal y MercadoPago</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-green-400 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">Escalabilidad automática según tu crecimiento</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-green-400 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">Protección avanzada de contenido DRM</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-green-400 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">Actualizaciones constantes y nuevas funcionalidades</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Tecnologías de <span className="text-purple-400">Vanguardia</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Construida con las mejores herramientas para garantizar seguridad, velocidad y escalabilidad
            </p>
          </div>
          
          <div className="bg-gray-900/80 border border-gray-800 rounded-2xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-12">
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center"
                >
                  <div className="bg-gray-800/50 w-24 h-24 rounded-xl flex items-center justify-center mb-4 border border-gray-700">
                    <Image 
                      src={tech.logo} 
                      alt={tech.name} 
                      width={60} 
                      height={60}
                      className="object-contain"
                    />
                  </div>
                  <h3 className={`font-bold ${tech.color}`}>{tech.name}</h3>
                </motion.div>
              ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Frontend Moderno</h3>
                <p className="text-gray-300 mb-4">
                  Utilizamos <span className="font-bold text-purple-400">Next.js</span> y <span className="font-bold text-blue-400">React</span> para crear interfaces de usuario rápidas, dinámicas y con excelente rendimiento. 
                  Esto garantiza una experiencia fluida para los creadores y sus miembros.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Backend Robusto</h3>
                <p className="text-gray-300">
                  Nuestra infraestructura se basa en <span className="font-bold text-cyan-400">PostgreSQL</span> para bases de datos seguras y escalables, 
                  <span className="font-bold text-green-400"> n8n</span> para automatización de procesos complejos, y <span className="font-bold text-yellow-400">AWS</span> 
                  para despliegue global y alta disponibilidad.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Community Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-2xl p-10 border border-gray-700"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
                Emprendimiento y <span className="text-purple-400">Comunidad</span>
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Este proyecto nace del espíritu emprendedor y la pasión por ayudar a otros creadores a crecer y monetizar su trabajo. Creemos en el poder de la comunidad y en la tecnología como motor de cambio.
              </p>
              <p className="text-lg text-gray-300">
                <span className="font-bold text-purple-400">VIP IA Community</span> es más que una plataforma, es un movimiento para empoderar a quienes buscan independencia y éxito en el mundo digital.
              </p>
            </div>
            
            <div className="bg-gray-900/70 rounded-xl p-6 border border-gray-700">
              <div className="flex items-start mb-4">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-2 rounded-full flex items-center justify-center mr-2 ">
                  <FaUsers className="text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Únete al Movimiento</h3>
                  <p className="text-gray-300">
                    Sé parte de una nueva generación de creadores digitales que están transformando sus comunidades en negocios prósperos.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-2 rounded-full flex items-center justify-center mr-2">
                  <FaRocket className="text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Crecimiento Constante</h3>
                  <p className="text-gray-300">
                    Más de 500 creadores ya confían en nuestra plataforma para monetizar sus comunidades y alcanzar su independencia financiera.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}