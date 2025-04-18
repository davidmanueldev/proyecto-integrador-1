import {
    BarChart3,
    Receipt,
    PieChart,
    CreditCard,
    Globe,
    Zap,
  } from "lucide-react";
  
  // Datos estadísticos
  export const statsData = [
    {
      value: "50K+",
      label: "Usuarios Activos",
    },
    {
      value: "$2B+",
      label: "Transacciones Procesadas",
    },
    {
      value: "99.9%",
      label: "Disponibilidad", // Tiempo de funcionamiento
    },
    {
      value: "4.9/5",
      label: "Valoración de los Usuarios",
    },
  ];
  
  // Datos de características (features)
  export const featuresData = [
    {
      icon: <BarChart3 className="h-8 w-8 text-purple-600" />,
      title: "Análisis Avanzados",
      description:
        "Obtenga información detallada sobre sus patrones de gasto con análisis basados en IA",
    },
    {
      icon: <Receipt className="h-8 w-8 text-purple-600" />,
      title: "Escáner Inteligente de Recibos",
      description:
        "Extraiga datos automáticamente de los recibos mediante tecnología avanzada de IA",
    },
    {
      icon: <PieChart className="h-8 w-8 text-purple-600" />,
      title: "Planificación de Presupuestos",
      description: "Cree y gestione presupuestos con recomendaciones inteligentes",
    },
    {
      icon: <CreditCard className="h-8 w-8 text-purple-600" />,
      title: "Soporte Multicuenta",
      description: "Gestionar varias cuentas y tarjetas de crédito en un solo lugar",
    },
    {
      icon: <Globe className="h-8 w-8 text-purple-600" />,
      title: "Multidivisa",
      description: "Soporte para múltiples divisas con conversión en tiempo real",
    },
    {
      icon: <Zap className="h-8 w-8 text-purple-600" />,
      title: "Información Financiera Automatizada",
      description: "Obtenga información y recomendaciones personalizadas basadas en IA",
    },
  ];
  
  // Datos de Como Funciona (How It Works)
  export const howItWorksData = [
    {
      icon: <CreditCard className="h-8 w-8 text-purple-600" />,
      title: "1. Crea Tu Cuenta",
      description:
        "Comience en cuestión de minutos con un proceso de registro fácil y rápido",
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-purple-600" />,
      title: "2. Controle Sus Gastos",
      description:
        "Categorice y rastree automáticamente sus transacciones en tiempo real",
    },
    {
      icon: <PieChart className="h-8 w-8 text-purple-600" />,
      title: "3. Obtén Información",
      description:
        "Reciba información y recomendaciones basadas en inteligencia artificial para optimizar sus finanzas.",
    },
  ];
  
  // Datos de Testimonios
  export const testimonialsData = [
    {
      name: "Juliana Salazar",
      role: "Propietaria de Negocio",
      image: "https://randomuser.me/api/portraits/women/85.jpg",
      quote:
        "YaFue ha transformado mi forma de gestionar las finanzas de mi empresa. La inteligencia artificial me ha ayudado a identificar oportunidades de ahorro que no sabía que existían.",
    },
    {
      name: "Brian Medina",
      role: "Freelancer",
      image: "https://randomuser.me/api/portraits/men/90.jpg",
      quote:
        "La función de escaneado de recibos me ahorra horas cada mes. Ahora puedo centrarme en mi trabajo en lugar de en la introducción manual de datos y el seguimiento de gastos.",
    },
    {
      name: "Jhon Salchi Chong",
      role: "Asesor Financiero",
      image: "https://randomuser.me/api/portraits/men/44.jpg",
      quote:
        "Recomiendo YaFue a todos mis clientes. El soporte multidivisa y los análisis detallados lo hacen perfecto para los inversores principiantes.",
    },
  ];