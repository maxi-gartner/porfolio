import {
  BookText,
  CodeSquare,
  HomeIcon,
  UserRound,
  Linkedin,
  Twitter,
  Rss,
  Twitch,
  Youtube,
  Crop,
  Pencil,
  Computer,
  Book,
  Rocket,
  Speech,
} from "lucide-react";

import { FaReact, FaNodeJs, FaBootstrap } from "react-icons/fa";
import {
  SiRedux,
  SiExpress,
  SiMongodb,
  SiPhp,
  SiLaravel,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFirebase,
  SiHtml5,
  SiCss3,
  SiMysql,
  SiJavascript,
  SiMicrosoftaccess,
  SiCplusplus,
} from "react-icons/si";

export function calculateExperience(startDate: Date): {
  years: number;
  months: number;
} {
  const currentDate = new Date();

  let years = currentDate.getFullYear() - startDate.getFullYear();
  let months = currentDate.getMonth() - startDate.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  return { years, months };
}

export const socialNetworks = [
  {
    id: 1,
    logo: <Youtube size={30} strokeWidth={1} />,
    src: "#!",
  },
  {
    id: 2,
    logo: <Linkedin size={30} strokeWidth={1} />,
    src: "#!",
  },
  {
    id: 3,
    logo: <Twitter size={30} strokeWidth={1} />,
    src: "#!",
  },
  {
    id: 4,
    logo: <Rss size={30} strokeWidth={1} />,
    src: "#!",
  },
  {
    id: 5,
    logo: <Twitch size={30} strokeWidth={1} />,
    src: "#!",
  },
];

export const itemsNavbar = [
  {
    id: 1,
    title: "Home",
    icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
    link: "/",
  },
  {
    id: 2,
    title: "User",
    icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
    link: "/aboutMe",
  },
  {
    id: 3,
    title: "Projects",
    icon: <BookText size={25} color="#fff" strokeWidth={1} />,
    link: "/projects",
  },
  {
    id: 4,
    title: "Target",
    icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
    link: "/portfolio",
  },
  {
    id: 5,
    title: "Home",
    icon: <Speech size={25} color="#fff" strokeWidth={1} />,
    link: "/testimonials",
  },
];

export const technologies = [
  {
    id: 1,
    title: "React",
    icon: <FaReact className="text-blue-500" title="React" />,
    link: "/react",
  },
  {
    id: 2,
    title: "Redux",
    icon: <SiRedux className="text-purple-600" title="Redux" />,
    link: "/redux",
  },
  {
    id: 3,
    title: "Express",
    icon: <SiExpress className="text-black" title="Express" />,
    link: "/express",
  },
  {
    id: 4,
    title: "MongoDB",
    icon: <SiMongodb className="text-green-600" title="MongoDB" />,
    link: "/mongodb",
  },
  {
    id: 5,
    title: "Node.js",
    icon: <FaNodeJs className="text-green-500" title="Node.js" />,
    link: "/nodejs",
  },
  {
    id: 6,
    title: "PHP",
    icon: <SiPhp className="text-purple-600" title="PHP" />,
    link: "/php",
  },
  {
    id: 7,
    title: "Laravel",
    icon: <SiLaravel className="text-red-600" title="Laravel" />,
    link: "/laravel",
  },
  {
    id: 8,
    title: "Next.js",
    icon: <SiNextdotjs className="text-black" title="Next.js" />,
    link: "/nextjs",
  },
  {
    id: 9,
    title: "TypeScript",
    icon: <SiTypescript className="text-blue-600" title="TypeScript" />,
    link: "/typescript",
  },
  {
    id: 10,
    title: "Tailwind CSS",
    icon: <SiTailwindcss className="text-blue-400" title="Tailwind CSS" />,
    link: "/tailwind",
  },
  {
    id: 11,
    title: "Bootstrap",
    icon: <FaBootstrap className="text-purple-700" title="Bootstrap" />,
    link: "/bootstrap",
  },
  {
    id: 12,
    title: "Firebase",
    icon: <SiFirebase className="text-yellow-500" title="Firebase" />,
    link: "/firebase",
  },
  {
    id: 13,
    title: "HTML",
    icon: <SiHtml5 className="text-orange-600" title="HTML" />,
    link: "/html",
  },
  {
    id: 14,
    title: "CSS",
    icon: <SiCss3 className="text-blue-600" title="CSS" />,
    link: "/css",
  },
];

export const dataAboutPage = [
  {
    id: 1,
    title: "Programación Web en PHP y MySQL",
    subtitle: "EducaciónIT",
    description:
      "Completar un curso en programación web utilizando PHP y MySQL el 13 de marzo de 2024, enfocado en el desarrollo de aplicaciones web dinámicas. Aprendí a implementar APIs y a trabajar con bases de datos relacionales.",
    date: "Marzo 2024",
    icons: [
      <SiPhp key="php" style={{ color: "#4F5B93", fontSize: "2rem" }} />,
      <SiMysql key="mysql" style={{ color: "#F29111", fontSize: "2rem" }} />,
    ],
  },
  {
    id: 2,
    title: "Estudios en Next.js",
    subtitle: "Autodidacta",
    description:
      "Comencé a estudiar Next.js en mayo de 2024 para expandir mis habilidades en desarrollo frontend y crear aplicaciones web más rápidas y eficientes con características como la generación de sitios estáticos y la optimización del rendimiento.",
    date: "Mayo 2024",
    icons: [
      <SiNextdotjs key="nextjs" style={{ color: "#000000" }} />,
      <FaReact key="react" style={{ color: "#61DAFB" }} />,
    ],
  },
  {
    id: 3,
    title: "Estudios en TypeScript",
    subtitle: "Autodidacta",
    description:
      "Inicié mi aprendizaje de TypeScript en febrero de 2024, mejorando mi capacidad para desarrollar aplicaciones más robustas y mantenibles mediante la tipificación estática y la mejora de la productividad en el desarrollo.",
    date: "Febrero 2024",
    icons: [
      <SiTypescript key="typescript" style={{ color: "#3178C6" }} />,
      <SiJavascript key="javascript" style={{ color: "#F7DF1E" }} />,
    ],
  },
  {
    id: 4,
    title: "Educación en Base de Datos y SQL",
    subtitle: "EducaciónIT",
    description:
      "Finalicé un curso sobre bases de datos y SQL el 4 de octubre de 2022, adquiriendo conocimientos fundamentales en gestión de datos. Aprendí sobre la normalización de bases de datos y la optimización de consultas.",
    date: "Octubre 2022",
    icons: [
      <SiMongodb key="mongodb" style={{ color: "#4DB33D" }} />,
      <SiMysql key="mysql" style={{ color: "#F29111", fontSize: "2rem" }} />,
    ],
  },
  {
    id: 5,
    title: "Desarrollador Full Stack",
    subtitle: "MindHub",
    description:
      "Bootcamp de 5 meses en 2023, donde adquirí habilidades en MongoDB, Express, React y Node. Trabajé en proyectos prácticos que simulan situaciones del mundo real, desarrollando tanto el frontend como el backend de aplicaciones.",
    date: "ABRIL 2023",
    icons: [
      <SiMongodb key="mongodb" style={{ color: "#4DB33D" }} />,
      <SiExpress key="express" style={{ color: "#000000" }} />,
      <FaReact key="react" style={{ color: "#61DAFB" }} />,
      <FaNodeJs key="nodejs" style={{ color: "#3C873A" }} />,
    ],
  },
  {
    id: 6,
    title: "Desarrollador FrontEnd",
    subtitle: "Accenture",
    description:
      "Bootcamp de 5 meses de 2022-2023, donde aprendí HTML, CSS y JavaScript. Me enfoqué en el desarrollo de interfaces interactivas y responsivas, mejorando la experiencia del usuario en aplicaciones web.",
    date: "AGOSTO 2022",
    icons: [
      <SiHtml5 key="html5" style={{ color: "#E34F26" }} />,
      <SiCss3 key="css3" style={{ color: "#1572B6" }} />,
      <SiJavascript key="javascript" style={{ color: "#F7DF1E" }} />,
    ],
  },
  {
    id: 7,
    title: "Técnico Analista de Sistemas",
    subtitle: "ISIV",
    description:
      "Cursado desde 2014-2019, donde obtuve conocimientos en análisis de sistemas, C++, Access,  resolución de problemas y diseño de sistemas. Desarrollé una sólida base en programación y metodologías de desarrollo.",
    date: "2014-2019",
    icons: [
      <Computer key="computer" style={{ color: "#6B7280" }} />,
      <SiMicrosoftaccess key="access" style={{ color: "#A4373A" }} />,
      <SiCplusplus key="cplusplus" style={{ color: "#00599C" }} />,
    ],
  },
];

export const dataCounter = [
  {
    id: 0,
    startDate: new Date(2022, 8), // Frontend desde septiembre 2022
    text: "Frontend",
    lineRight: true,
  },
  {
    id: 1,
    startDate: new Date(2022, 9), // PHP desde octubre 2022
    text: "PHP",
    lineRight: true,
  },
  {
    id: 2,
    startDate: new Date(2023, 3), // Full Stack desde abril 2023
    text: "Full Stack",
    lineRight: true,
  },
  {
    id: 3,
    startDate: new Date(2024, 2), // TypeScript desde junio 2024
    text: "TypeScript",
    lineRight: true,
  },
  {
    id: 4,
    startDate: new Date(2024, 5), // Next.js desde junio 2024
    text: "Next.js",
    lineRight: false,
  },
];

export const serviceData = [
  {
    icon: <Crop />,
    title: "Branding",
    description:
      "Desarrollo de una identidad de marca sólida y coherente, incluyendo diseño de logotipo, colores y elementos visuales",
  },
  {
    icon: <Pencil />,
    title: "Diseño web",
    description:
      "Diseño creativo y profesional de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario",
  },
  {
    icon: <Computer />,
    title: "Desarrollo web",
    description:
      "Diseño y desarrollo de sitios web a medida, adaptados a tus necesidades",
  },
  {
    icon: <Book />,
    title: "Copywriting",
    description:
      "Creación de contenido persuasivo y atractivo que capta la atención de tu audiencia",
  },
  {
    icon: <Rocket />,
    title: "SEO",
    description:
      "Optimización de tu presencia en línea mediante estrategias de SEO avanzadas, ",
  },
];

export const dataPortfolio = [
  {
    id: 1,
    title: "Web Pro",
    image: "/image-1.jpg",
    urlGithub: "#!",
    urlDemo: "#!",
  },
  {
    id: 2,
    title: "Desarrollo Web Ágil",
    image: "/image-2.jpg",
    urlGithub: "#!",
    urlDemo: "#!",
  },
  {
    id: 3,
    title: "Estrategias Web",
    image: "/image-3.jpg",
    urlGithub: "#!",
    urlDemo: "#!",
  },
  {
    id: 4,
    title: "Ideas Creativas",
    image: "/image-4.jpg",
    urlGithub: "#!",
    urlDemo: "#!",
  },
  {
    id: 5,
    title: "Webs Impactantes",
    image: "/image-5.jpg",
    urlGithub: "#!",
    urlDemo: "#!",
  },
  {
    id: 6,
    title: "Web Dinámica",
    image: "/image-6.jpg",
    urlGithub: "#!",
    urlDemo: "#!",
  },
  {
    id: 7,
    title: "Dark Web ",
    image: "/image-7.jpg",
    urlGithub: "#!",
    urlDemo: "#!",
  },
  {
    id: 8,
    title: "E-commerce web",
    image: "/image-8.jpg",
    urlGithub: "#!",
    urlDemo: "#!",
  },
];

export const dataTestimonials = [
  {
    id: 1,
    name: "George Snow",
    description:
      "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
    imageUrl: "/profile1.png",
  },
  {
    id: 2,
    name: "Juan Pérez",
    description:
      "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
    imageUrl: "/profile2.png",
  },
  {
    id: 3,
    name: "María García",
    description:
      "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
    imageUrl: "/profile3.png",
  },
  {
    id: 4,
    name: "Laura Snow",
    description:
      "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
    imageUrl: "/profile4.png",
  },
  {
    id: 5,
    name: "Carlos Sánchez",
    description:
      "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
    imageUrl: "/profile5.png",
  },
  {
    id: 6,
    name: "Antonio Martínez",
    description:
      "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
    imageUrl: "/profile6.png",
  },
];
