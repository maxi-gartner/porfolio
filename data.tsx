import { Computer, Mail, HomeIcon, UserRound, FolderOpen } from "lucide-react"

import {
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaLinkedin,
  FaTwitter,
  //FaTwitch,
  FaYoutube,
  //FaRss,
} from "react-icons/fa"
import {
  SiMysql,
  SiMicrosoftaccess,
  SiCplusplus,
  SiPhp,
  SiLaravel,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiBootstrap,
  SiFirebase,
  SiReact,
  SiRedux,
  SiAxios,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiJsonwebtokens,
  SiNextdotjs,
  SiCsharp,
  SiMicrosoftsqlserver,
  SiDotnet,
  SiPostgresql,
} from "react-icons/si"

export const works = [
  {
    description: "Plataforma de Gestión Comercial",
    logo: "/arya_logo.jpg",
    url: "#",
    imgSrc: "/arya.png",
    technologies: [
      <SiNextdotjs
        key='nextjs'
        style={{ color: "#ffffff", fontSize: "2rem" }}
      />,
      <SiTypescript
        key='typescript'
        style={{ color: "#007ACC", fontSize: "2rem" }}
      />,
      <SiDotnet key='dotnet' style={{ color: "#512BD4", fontSize: "2rem" }} />,
      <SiCsharp key='csharp' style={{ color: "#239120", fontSize: "2rem" }} />,
      <SiPostgresql
        key='postgresql'
        style={{ color: "#336791", fontSize: "2rem" }}
      />,
    ],
  },
  {
    description: "Tienda Virtual de Dietética",
    logo: "/nutricerealia_logo.png",
    url: "https://nutricerealia.com/",
    imgSrc: "/nutricerealia.png",
    technologies: [
      <SiNextdotjs
        key='nextjs'
        style={{ color: "#ffffff", fontSize: "2rem" }}
      />,
      <SiReact key='react' style={{ color: "#61DAFB", fontSize: "2rem" }} />,
      <SiTypescript
        key='typescript'
        style={{ color: "#007ACC", fontSize: "2rem" }}
      />,
      <SiTailwindcss
        key='tailwind'
        style={{ color: "#38B2AC", fontSize: "2rem" }}
      />,
      <SiNodedotjs
        key='nodejs'
        style={{ color: "#4bc866", fontSize: "2rem" }}
      />,
      <SiExpress
        key='express'
        style={{ color: "#adff55", fontSize: "2rem" }}
      />,
      <SiMongodb
        key='mongodb'
        style={{ color: "#47A248", fontSize: "2rem" }}
      />,
      <SiRedux key='redux' style={{ color: "#764ABC", fontSize: "2rem" }} />,
    ],
  },
  {
    description: "Gestor Empresarial Privado",
    logo: "/gestorProLogo.png",
    url: "#",
    imgSrc: "/gestorpro.png",
    technologies: [
      <SiReact key='react' style={{ color: "#61DAFB", fontSize: "2rem" }} />,
      <Computer
        key='electron'
        style={{ color: "#47848F", fontSize: "2rem" }}
      />,
      <SiTailwindcss
        key='tailwind'
        style={{ color: "#38B2AC", fontSize: "2rem" }}
      />,
      <SiExpress
        key='express'
        style={{ color: "#adff55", fontSize: "2rem" }}
      />,
    ],
  },
]

export const personalProjects = [
  {
    description: "E-commerce Informático",
    logo: "/bug_fix_logo.png",
    secondLogo: "/bugFixTitle2.png",
    url: "https://bug-fix-two.vercel.app/",
    imgSrc: "/bug-fix.png",
    technologies: [
      <SiHtml5 key='html' style={{ color: "#E34F26", fontSize: "2rem" }} />,
      <SiCss3 key='css' style={{ color: "#1572B6", fontSize: "2rem" }} />,
      <SiJavascript
        key='javascript'
        style={{ color: "#F7DF1E", fontSize: "2rem" }}
      />,
      <SiBootstrap
        key='bootstrap'
        style={{ color: "#563D7C", fontSize: "2rem" }}
      />,
      <SiFirebase
        key='firebase'
        style={{ color: "#FFCA28", fontSize: "2rem" }}
      />,
    ],
  },
  {
    description: "E-commerce Artículos de Hogar",
    logo: "/HELogo.png",
    url: "https://home-essentials-front-dev-propia.vercel.app/",
    imgSrc: "/homeEssentials.png",
    technologies: [
      <SiReact key='react' style={{ color: "#61DAFB", fontSize: "2rem" }} />,
      <SiRedux key='redux' style={{ color: "#764ABC", fontSize: "2rem" }} />,
      <SiAxios key='axios' style={{ color: "#5A29E3", fontSize: "2rem" }} />,
      <SiTailwindcss
        key='tailwind'
        style={{ color: "#38B2AC", fontSize: "2rem" }}
      />,
      <SiNodedotjs
        key='nodejs'
        style={{ color: "#8CC84B", fontSize: "2rem" }}
      />,
      <SiExpress
        key='express'
        style={{ color: "#adff55", fontSize: "2rem" }}
      />,
      <SiMongodb
        key='mongodb'
        style={{ color: "#47A248", fontSize: "2rem" }}
      />,
      <SiJsonwebtokens
        key='bcrypt'
        style={{ color: "#D9D9D9", fontSize: "2rem" }}
      />,
    ],
  },
  {
    description: "Gestión y Organización de Eventos",
    logo: "/gestorDeEventosFilter.png",
    url: "https://gestor-de-eventos-front.vercel.app/",
    imgSrc: "/gestorDeEventos.png",
    technologies: [
      <SiReact key='react' style={{ color: "#61DAFB", fontSize: "2rem" }} />,
      <SiRedux key='redux' style={{ color: "#764ABC", fontSize: "2rem" }} />,
      <SiAxios key='axios' style={{ color: "#5A29E3", fontSize: "2rem" }} />,
      <SiTailwindcss
        key='tailwind'
        style={{ color: "#38B2AC", fontSize: "2rem" }}
      />,
      <SiNodedotjs
        key='nodejs'
        style={{ color: "#8CC84B", fontSize: "2rem" }}
      />,
      <SiExpress
        key='express'
        style={{ color: "#adff55", fontSize: "2rem" }}
      />,
      <SiMongodb
        key='mongodb'
        style={{ color: "#47A248", fontSize: "2rem" }}
      />,
      <SiJsonwebtokens
        key='jwt'
        style={{ color: "#000000", fontSize: "2rem" }}
      />,
    ],
  },
  {
    description: "Portafolio Personal",
    logo: "/PorfolioTitle.png",
    url: "/",
    imgSrc: "/porfolioIMG.png",
    technologies: [
      <SiNextdotjs
        key='nextjs'
        style={{ color: "#ffffff", fontSize: "2rem" }}
      />,
      <SiReact key='react' style={{ color: "#61DAFB", fontSize: "2rem" }} />,
      <SiTailwindcss
        key='tailwind'
        style={{ color: "#38B2AC", fontSize: "2rem" }}
      />,
      <SiTypescript
        key='typescript'
        style={{ color: "#007ACC", fontSize: "2rem" }}
      />,
    ],
  },
]

export const socialNetworks = [
  {
    id: 1,
    logo: <FaYoutube size={30} strokeWidth={1} />,
    src: "https://www.youtube.com/@ReactiveMERN",
  },
  {
    id: 2,
    logo: <FaLinkedin size={30} strokeWidth={1} />,
    src: "https://www.linkedin.com/in/maxi-gartner/",
  },
  {
    id: 3,
    logo: <FaTwitter size={30} strokeWidth={1} />,
    src: "https://x.com/reactiveMERN",
  },
]

export const itemsNavbar = [
  {
    id: 1,
    title: "Inicio",
    icon: <HomeIcon size={25} color='#fff' strokeWidth={1} />,
    link: "/",
  },
  {
    id: 2,
    title: "Perfil",
    icon: <UserRound size={25} color='#fff' strokeWidth={1} />,
    link: "/aboutMe",
  },
  {
    id: 3,
    title: "Proyectos",
    icon: <FolderOpen size={25} color='#fff' strokeWidth={1} />, // Cambiado a FolderOpen
    link: "/projects",
  },
  {
    id: 5,
    title: "Contacto",
    icon: <Mail size={25} color='#fff' strokeWidth={1} />, // Cambiado a Mail
    link: "/contact",
  },
]

export const technologies = [
  {
    id: 1,
    title: "React",
    icon: (
      <FaReact style={{ color: "#61DAFB", fontSize: "2rem" }} title='React' />
    ),
    link: "/react",
  },
  {
    id: 2,
    title: "Redux",
    icon: (
      <SiRedux style={{ color: "#764ABC", fontSize: "2rem" }} title='Redux' />
    ),
    link: "/redux",
  },
  {
    id: 3,
    title: "Express",
    icon: (
      <SiExpress
        style={{ color: "#adff55", fontSize: "2rem" }}
        title='Express'
      />
    ),
    link: "/express",
  },
  {
    id: 4,
    title: "MongoDB",
    icon: (
      <SiMongodb
        style={{ color: "#47A248", fontSize: "2rem" }}
        title='MongoDB'
      />
    ),
    link: "/mongodb",
  },
  {
    id: 5,
    title: "Node.js",
    icon: (
      <FaNodeJs
        style={{ color: "#339933", fontSize: "2rem" }}
        title='Node.js'
      />
    ),
    link: "/nodejs",
  },
  {
    id: 6,
    title: "PHP",
    icon: <SiPhp style={{ color: "#8892BF", fontSize: "2rem" }} title='PHP' />,
    link: "/php",
  },
  {
    id: 7,
    title: "Laravel",
    icon: (
      <SiLaravel
        style={{ color: "#FF2D20", fontSize: "2rem" }}
        title='Laravel'
      />
    ),
    link: "/laravel",
  },
  {
    id: 8,
    title: "Next.js",
    icon: (
      <SiNextdotjs
        style={{ color: "#ffffff", fontSize: "2rem" }}
        title='Next.js'
      />
    ),
    link: "/nextjs",
  },
  {
    id: 9,
    title: "TypeScript",
    icon: (
      <SiTypescript
        style={{ color: "#3178C6", fontSize: "2rem" }}
        title='TypeScript'
      />
    ),
    link: "/typescript",
  },
  {
    id: 10,
    title: "Tailwind CSS",
    icon: (
      <SiTailwindcss
        style={{ color: "#38B2AC", fontSize: "2rem" }}
        title='Tailwind CSS'
      />
    ),
    link: "/tailwind",
  },
  {
    id: 11,
    title: "Bootstrap",
    icon: (
      <FaBootstrap
        style={{ color: "#7952B3", fontSize: "2rem" }}
        title='Bootstrap'
      />
    ),
    link: "/bootstrap",
  },
  {
    id: 12,
    title: "Firebase",
    icon: (
      <SiFirebase
        style={{ color: "#FFA611", fontSize: "2rem" }}
        title='Firebase'
      />
    ),
    link: "/firebase",
  },
  {
    id: 13,
    title: "HTML",
    icon: (
      <SiHtml5 style={{ color: "#E34F26", fontSize: "2rem" }} title='HTML' />
    ),
    link: "/html",
  },
  {
    id: 14,
    title: "CSS",
    icon: <SiCss3 style={{ color: "#1572B6", fontSize: "2rem" }} title='CSS' />,
    link: "/css",
  },
]

export const dataAboutPage = [
  {
    id: 1,
    title: "Tecnicatura Universitaria en Programación",
    subtitle: "UTN (Universidad Tecnológica Nacional)",
    description:
      "Aprendiendo fundamentos sólidos en algoritmos, programación en C# y SQL, así como diseño de sistemas, estructuras de datos y desarrollo de aplicaciones web.",
    date: "Actualmente",
    icons: [
      <SiMysql key='mysql' style={{ color: "#F29111", fontSize: "2rem" }} />,
      <SiCsharp key='csharp' style={{ color: "#239120", fontSize: "2rem" }} />,
      <SiMicrosoftsqlserver
        key='sqlserver'
        style={{ color: "#CC2927", fontSize: "2rem" }}
      />,
    ],
  },
  {
    id: 2,
    title: "Programación Web en PHP y MySQL",
    subtitle: "EducaciónIT",
    description:
      "Completar un curso en programación web utilizando PHP y MySQL el 13 de marzo de 2024, enfocado en el desarrollo de aplicaciones web dinámicas. Aprendí a implementar APIs y a trabajar con bases de datos relacionales.",
    date: "Marzo 2024",
    icons: [
      <SiPhp key='php' style={{ color: "#4F5B93", fontSize: "2rem" }} />,
      <SiMysql key='mysql' style={{ color: "#F29111", fontSize: "2rem" }} />,
    ],
  },
  {
    id: 3,
    title: "Estudios en Next.js",
    subtitle: "Autodidacta",
    description:
      "Comencé a estudiar Next.js en mayo de 2024 para expandir mis habilidades en desarrollo frontend y crear aplicaciones web más rápidas y eficientes con características como la generación de sitios estáticos y la optimización del rendimiento.",
    date: "Mayo 2024",
    icons: [
      <SiNextdotjs key='nextjs' style={{ color: "#ffffff" }} />,
      <FaReact key='react' style={{ color: "#61DAFB" }} />,
    ],
  },
  {
    id: 4,
    title: "Estudios en TypeScript",
    subtitle: "Autodidacta",
    description:
      "Inicié mi aprendizaje de TypeScript en febrero de 2024, mejorando mi capacidad para desarrollar aplicaciones más robustas y mantenibles mediante la tipificación estática y la mejora de la productividad en el desarrollo.",
    date: "Febrero 2024",
    icons: [
      <SiTypescript key='typescript' style={{ color: "#3178C6" }} />,
      <SiJavascript key='javascript' style={{ color: "#F7DF1E" }} />,
    ],
  },
  {
    id: 5,
    title: "Educación en Base de Datos y SQL",
    subtitle: "EducaciónIT",
    description:
      "Finalicé un curso sobre bases de datos y SQL el 4 de octubre de 2022, adquiriendo conocimientos fundamentales en gestión de datos. Aprendí sobre la normalización de bases de datos y la optimización de consultas.",
    date: "Octubre 2022",
    icons: [
      <SiMongodb key='mongodb' style={{ color: "#4DB33D" }} />,
      <SiMysql key='mysql' style={{ color: "#F29111", fontSize: "2rem" }} />,
    ],
  },
  {
    id: 6,
    title: "Desarrollador Full Stack",
    subtitle: "MindHub",
    description:
      "Bootcamp de 5 meses en 2023, donde adquirí habilidades en MongoDB, Express, React y Node. Trabajé en proyectos prácticos que simulan situaciones del mundo real, desarrollando tanto el frontend como el backend de aplicaciones.",
    date: "ABRIL 2023",
    icons: [
      <SiMongodb key='mongodb' style={{ color: "#4DB33D" }} />,
      <SiExpress key='express' style={{ color: "#adff55" }} />,
      <FaReact key='react' style={{ color: "#61DAFB" }} />,
      <FaNodeJs key='nodejs' style={{ color: "#3C873A" }} />,
    ],
  },
  {
    id: 7,
    title: "Desarrollador FrontEnd",
    subtitle: "Accenture",
    description:
      "Bootcamp de 5 meses de 2022-2023, donde aprendí HTML, CSS y JavaScript. Me enfoqué en el desarrollo de interfaces interactivas y responsivas, mejorando la experiencia del usuario en aplicaciones web.",
    date: "AGOSTO 2022",
    icons: [
      <SiHtml5 key='html5' style={{ color: "#E34F26" }} />,
      <SiCss3 key='css3' style={{ color: "#1572B6" }} />,
      <SiJavascript key='javascript' style={{ color: "#F7DF1E" }} />,
    ],
  },
  {
    id: 8,
    title: "Técnico Analista de Sistemas",
    subtitle: "ISIV",
    description:
      "Cursado desde 2014-2019, donde obtuve conocimientos en análisis de sistemas, C++, Access,  resolución de problemas y diseño de sistemas. Desarrollé una sólida base en programación y metodologías de desarrollo.",
    date: "2014-2019",
    icons: [
      <Computer key='computer' style={{ color: "#6B7280" }} />,
      <SiMicrosoftaccess key='access' style={{ color: "#A4373A" }} />,
      <SiCplusplus key='cplusplus' style={{ color: "#00599C" }} />,
    ],
  },
]

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
]

export function calculateExperience(startDate: Date): {
  years: number
  months: number
} {
  const currentDate = new Date()

  let years = currentDate.getFullYear() - startDate.getFullYear()
  let months = currentDate.getMonth() - startDate.getMonth()

  if (months < 0) {
    years--
    months += 12
  }

  return { years, months }
}
