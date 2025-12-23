export const personalInfo = {
  name: "Gerardo Kohatus",
  title: "Full Stack Developer",
  location: "Buenos Aires, Argentina",
  email: "gerardo.kohatus@gmail.com",
  phone: "+54 9 11 3027 8472",
  linkedin: "https://linkedin.com/in/gerardo-kohatus",
  github: "https://github.com/Ger06",
  description: "Con más de 3 años de experiencia como Full Stack Developer, participé en el desarrollo y mantenimiento de aplicaciones escalables del lado del cliente y del servidor. Me enfoco en optimizar la experiencia de usuario y garantizar la seguridad en el manejo de datos.",
};

export const experiences = [
  {
    title: "Backend Developer",
    company: "Freelance",
    period: "Mayo 2025 - Actualidad",
    description: "Proyecto Linea Aérea",
    responsibilities: [
      "Desarrollo de la funcionalidad 'tallaje inteligente' utilizando Java con Spring Boot",
      "Mantenimiento y actualización de base de datos MySQL",
      "Gestión de imágenes en AWS S3",
    ],
    technologies: ["Java", "Spring Boot", "MySQL", "AWS S3"],
  },
  {
    title: "Full Stack Developer",
    company: "Ai Monkey",
    period: "Junio 2022 - Enero 2025",
    description: "Proyecto e-commerce",
    responsibilities: [
      "Desarrollo completo del sistema de tienda online con catálogo, carrito y pagos",
      "Integración de plataformas de pago como Affirm y Authorize",
      "Diseño de UI con React y Next.js, manejo de estado con Redux",
      "Construcción del backend con Node.js y Express",
      "Soporte en despliegue con AWS y Docker",
    ],
    technologies: ["React", "Next.js", "Redux", "Node.js", "Express", "AWS", "Docker"],
  },
  {
    title: "Full Stack Developer",
    company: "Ai Monkey",
    period: "Junio 2022 - Enero 2025",
    description: "App Social",
    responsibilities: [
      "Desarrollo de aplicación para creación y colaboración en recuerdos multimedia",
      "Lógica de manejo de relaciones entre usuarios con roles dinámicos",
      "Backend con Node.js y MongoDB",
      "Sistema de permisos personalizados para control de acceso",
    ],
    technologies: ["Node.js", "MongoDB", "React"],
  },
  {
    title: "Full Stack Developer",
    company: "Ai Monkey",
    period: "Junio 2022 - Enero 2025",
    description: "App Bienestar",
    responsibilities: [
      "Implementación de integraciones backend con NestJS",
      "Decisiones estructurales: modularización y controladores reutilizables",
      "Seguridad de datos sensibles",
    ],
    technologies: ["NestJS", "TypeScript"],
  },
];

export const skills = {
  frontend: [
    { name: "React", icon: "react" },
    { name: "Next.js", icon: "nextjs" },
    { name: "TypeScript", icon: "typescript" },
    { name: "JavaScript", icon: "javascript" },
    { name: "Redux", icon: "redux" },
    { name: "HTML5", icon: "html5" },
    { name: "CSS3", icon: "css3" },
    { name: "Tailwind CSS", icon: "tailwind" },
  ],
  backend: [
    { name: "Node.js", icon: "nodejs" },
    { name: "Express", icon: "express" },
    { name: "NestJS", icon: "nestjs" },
    { name: "Java", icon: "java" },
    { name: "Spring Boot", icon: "spring" },
  ],
  database: [
    { name: "MongoDB", icon: "mongodb" },
    { name: "PostgreSQL", icon: "postgresql" },
    { name: "MySQL", icon: "mysql" },
    { name: "Prisma", icon: "prisma" },
    { name: "Sequelize", icon: "sequelize" },
  ],
  tools: [
    { name: "Git", icon: "git" },
    { name: "Docker", icon: "docker" },
    { name: "AWS", icon: "aws" },
    { name: "Gitflow", icon: "git" },
    { name: "Scrum", icon: "scrum" },
    { name: "Trello", icon: "trello" },
    { name: "Jira", icon: "jira" },
  ],
};

export const projects = [
  {
    title: "Futbol App",
    description: "Aplicación de resultados de partidos en vivo, fixtures y tablas de posiciones de las ligas más importantes del mundo.",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS"],
    highlights: [
      "Resultados en tiempo real",
      "Tablas de posiciones dinámicas",
      "Diseño responsive y moderno",
      "Base de datos optimizada con Neon (PostgreSQL)",
    ],
    link: "https://futbol-app-iota.vercel.app/",
    period: "2024",
    type: "Personal",
  },
  {
    title: "SPA Videogames",
    description: "Single Page Application que muestra información de videojuegos consumiendo una API externa. Permite crear y guardar juegos en base de datos.",
    technologies: ["React", "Redux", "Node.js", "Express", "PostgreSQL"],
    highlights: [
      "Consumo de API externa",
      "Filtros y ordenamiento dinámico",
      "CRUD completo de videojuegos",
    ],
    link: "https://spa-videogame.vercel.app/",
    github: "https://github.com/Ger06/spa-videogames",
    period: "2021",
    type: "Personal",
  },
  {
    title: "Happy Dog - Paseadores",
    description: "Aplicación para conectar dueños de perros con paseadores, con búsqueda filtrada por horario, ubicación y puntaje.",
    technologies: ["React", "Node.js", "MongoDB"],
    highlights: [
      "Sistema de reservas",
      "Filtros avanzados de búsqueda",
      "Sistema de calificaciones",
    ],
    link: "https://happy-dogs.vercel.app/",
    github: "https://github.com/Ger06/Paseadores",
    period: "2021",
    type: "Personal",
  },
];
