"use client";
import { FaReact, FaNodeJs, FaBootstrap, FaGitAlt } from "react-icons/fa";
import {
  SiRedux,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiTailwindcss,
  SiLaravel,
  SiPhp,
  SiNextdotjs,
  SiTypescript,
  SiHtml5,
  SiCss3,
} from "react-icons/si";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

const Introduction = () => {
  return (
    <div className="z-20 w-full bg-darkBg/60 pt-28 md:pt-0">
      <div className="z-20 flex flex-col items-center w-full p-6 md:flex md:flex-row justify-evenly mg:gap-10 mt-10 md:mt-0 ">
        <div className="flex justify-center">
          <Image
            src="/MaximilianoGartner.jpg"
            priority
            width="300"
            height="300"
            alt="Profile"
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col justify-center md:max-w-md items-center w-full">
          <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl">
            El código no es solo lógica,
            <TypeAnimation
              sequence={[
                "es innovación",
                1000,
                "es arte",
                1000,
                "es solución",
                1000,
                "es evolución",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="block font-bold text-secondary"
            />
          </h1>
          <p className="mx-auto mb-4 text-xl md:mx-0 md:mb-8">
            Hola, Soy{" "}
            <span className="text-secondary">Gartner Maximiliano</span>,
            Desarrollador Web Full Stack.
            <br />A lo largo de mi carrera, trabajé con tecnologías como:
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="inline-flex items-center">
              <FaReact className="text-blue-500" title="React" /> React
            </span>
            <span className="inline-flex items-center">
              <SiRedux className="text-purple-600" title="Redux" /> Redux
            </span>
            <span className="inline-flex items-center">
              <SiExpress className="text-black" title="Express" /> Express
            </span>
            <span className="inline-flex items-center">
              <SiMongodb className="text-green-600" title="MongoDB" /> MongoDB
            </span>
            <span className="inline-flex items-center">
              <FaNodeJs className="text-green-500" title="Node.js" /> Node.js
            </span>
            <span className="inline-flex items-center">
              <SiPhp className="text-purple-600" title="PHP" /> PHP
            </span>
            <span className="inline-flex items-center">
              <SiLaravel className="text-red-600" title="Laravel" /> Laravel
            </span>
            <span className="inline-flex items-center">
              <SiNextdotjs className="text-black" title="Next.js" /> Next.js
            </span>
            <span className="inline-flex items-center">
              <SiTypescript className="text-blue-600" title="TypeScript" />{" "}
              TypeScript
            </span>
            <span className="inline-flex items-center">
              <SiTailwindcss className="text-blue-400" title="Tailwind CSS" />{" "}
              Tailwind
            </span>
            <span className="inline-flex items-center">
              <FaBootstrap className="text-purple-700" title="Bootstrap" />{" "}
              Bootstrap
            </span>
            <span className="inline-flex items-center">
              <SiFirebase className="text-yellow-500" title="Firebase" />{" "}
              Firebase
            </span>
            <span className="inline-flex items-center">
              <SiHtml5 className="text-orange-600" title="HTML" /> HTML
            </span>
            <span className="inline-flex items-center">
              <SiCss3 className="text-blue-600" title="CSS" /> CSS
            </span>
          </div>
          <p className="mb-2">
            Además, me manejo muy bien con
            <span className="inline-flex items-center">
              <FaGitAlt className="text-red-600" title="Git" /> Git
            </span>
            y
            <span className="inline-flex items-center">
              <FaGitAlt className="text-black" title="GitHub" /> GitHub
            </span>
            para control de versiones. Estoy familiarizado con la metodología
            Scrum, usando herramientas como Trello y Jira para llevar proyectos
            al siguiente nivel.
          </p>
          <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10 mt-4 mb-32 md:mb-0">
            <Link
              href="/projects"
              className="px-3 py-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50 "
            >
              Ver proyectos
            </Link>
            <Link
              href="/contact"
              className="px-3 py-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50 text-secondary border-secondary"
            >
              Contactame
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
