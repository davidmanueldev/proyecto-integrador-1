export const defaultCategories = [
    // Categorías de Ingresos
    {
      id: "salary",
      name: "Salario",
      type: "INCOME",
      color: "#22c55e", // verde-500
      icon: "Wallet",
    },
    {
      id: "freelance",
      name: "Freelance",
      type: "INCOME",
      color: "#06b6d4", // cian-500
      icon: "Laptop",
    },
    {
      id: "investments",
      name: "Inversiones",
      type: "INCOME",
      color: "#6366f1", // índigo-500
      icon: "TrendingUp",
    },
    {
      id: "business",
      name: "Negocio",
      type: "INCOME",
      color: "#ec4899", // rosa-500
      icon: "Building",
    },
    {
      id: "rental",
      name: "Alquiler",
      type: "INCOME",
      color: "#f59e0b", // ámbar-500
      icon: "Home",
    },
    {
      id: "other-income",
      name: "Otros Ingresos",
      type: "INCOME",
      color: "#64748b", // gris pizarra-500
      icon: "Plus",
    },
  
    // Categorías de Gastos
    {
      id: "housing",
      name: "Vivienda",
      type: "EXPENSE",
      color: "#ef4444", // rojo-500
      icon: "Home",
      subcategories: ["Alquiler", "Hipoteca", "Impuesto a la propiedad", "Mantenimiento"],
    },
    {
      id: "transportation",
      name: "Transporte",
      type: "EXPENSE",
      color: "#f97316", // naranja-500
      icon: "Car",
      subcategories: ["Combustible", "Transporte público", "Mantenimiento", "Estacionamiento"],
    },
    {
      id: "groceries",
      name: "Supermercado",
      type: "EXPENSE",
      color: "#84cc16", // lima-500
      icon: "Shopping",
    },
    {
      id: "utilities",
      name: "Servicios",
      type: "EXPENSE",
      color: "#06b6d4", // cian-500
      icon: "Zap",
      subcategories: ["Electricidad", "Agua", "Gas", "Internet", "Teléfono"],
    },
    {
      id: "entertainment",
      name: "Entretenimiento",
      type: "EXPENSE",
      color: "#8b5cf6", // violeta-500
      icon: "Film",
      subcategories: ["Cine", "Videojuegos", "Servicios de streaming"],
    },
    {
      id: "food",
      name: "Comida",
      type: "EXPENSE",
      color: "#f43f5e", // rosa fuerte-500
      icon: "UtensilsCrossed",
    },
    {
      id: "shopping",
      name: "Compras",
      type: "EXPENSE",
      color: "#ec4899", // rosa-500
      icon: "ShoppingBag",
      subcategories: ["Ropa", "Electrónica", "Artículos del hogar"],
    },
    {
      id: "healthcare",
      name: "Salud",
      type: "EXPENSE",
      color: "#14b8a6", // verde azulado-500
      icon: "HeartPulse",
      subcategories: ["Médico", "Dental", "Farmacia", "Seguro"],
    },
    {
      id: "education",
      name: "Educación",
      type: "EXPENSE",
      color: "#6366f1", // índigo-500
      icon: "GraduationCap",
      subcategories: ["Matrícula", "Libros", "Cursos"],
    },
    {
      id: "personal",
      name: "Cuidado Personal",
      type: "EXPENSE",
      color: "#d946ef", // fucsia-500
      icon: "Smile",
      subcategories: ["Corte de cabello", "Gimnasio", "Belleza"],
    },
    {
      id: "travel",
      name: "Viajes",
      type: "EXPENSE",
      color: "#0ea5e9", // celeste-500
      icon: "Plane",
    },
    {
      id: "insurance",
      name: "Seguros",
      type: "EXPENSE",
      color: "#64748b", // gris pizarra-500
      icon: "Shield",
      subcategories: ["Vida", "Hogar", "Vehículo"],
    },
    {
      id: "gifts",
      name: "Regalos y Donaciones",
      type: "EXPENSE",
      color: "#f472b6", // rosa-400
      icon: "Gift",
    },
    {
      id: "bills",
      name: "Facturas y Comisiones",
      type: "EXPENSE",
      color: "#fb7185", // rosa fuerte-400
      icon: "Receipt",
      subcategories: ["Comisiones bancarias", "Recargos por mora", "Cargos por servicios"],
    },
    {
      id: "other-expense",
      name: "Otros Gastos",
      type: "EXPENSE",
      color: "#94a3b8", // gris pizarra-400
      icon: "MoreHorizontal",
    },
  ];
  
  export const categoryColors = defaultCategories.reduce((acc, category) => {
    acc[category.name] = category.color;
    return acc;
  }, {});
  