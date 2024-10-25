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
} from "react-icons/si";

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
    title: "Book",
    icon: <BookText size={25} color="#fff" strokeWidth={1} />,
    link: "/services",
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
    title: "Frontend Developer",
    subtitle: "TechSolutions",
    description:
      "Colabora con un equipo dinámico para desarrollar interfaces de usuario atractivas y funcionales que impulsen el éxito de nuestros clientes en el mundo digital.",
    date: "Nov 2023 ",
  },
  {
    id: 2,
    title: "Creador de Experiencias Digitales",
    subtitle: "PixelCrafters",
    description:
      "Trabaja en proyectos emocionantes que desafían los límites de la creatividad y la tecnología. Únete a nosotros mientras creamos experiencias digitales cautivadoras que inspiran y cautivan a nuestros usuarios.",
    date: "May 2021",
  },
  {
    id: 3,
    title: "Especialista en Desarrollo Frontend",
    subtitle: "CodeForge Solutions",
    description:
      "Como desarrollador frontend, tendrás la oportunidad de colaborar en proyectos diversos y desafiantes que te permitirán expandir tus habilidades y dejar tu huella en el mundo digital.",
    date: "Ago 2019",
  },
  {
    id: 4,
    title: "Prácticas Grado",
    subtitle: "WebWizards Inc.",
    description:
      "Únete a nosotros mientras creamos sitios web y aplicaciones interactivas que sorprenden y deleitan a nuestros clientes. Si tienes pasión por el diseño y la programación, y disfrutas colaborar en un entorno creativo, ¡queremos conocerte!        ",
    date: "Mar 2018",
  },
];
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
