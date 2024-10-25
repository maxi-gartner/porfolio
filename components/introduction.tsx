"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import { technologies } from "@/data";
import { FaGitAlt } from "react-icons/fa";

const Introduction = () => {
  return (
    <div className="z-20 w-full bg-darkBg/60 pt-28 md:pt-0">
      <div className="z-20 flex flex-col items-center w-full p-6 md:flex md:flex-row justify-evenly pt-10 mg:px-0 mg:gap-10 h-full">
        <div className="flex justify-between">
          <Image
            src="/MaximilianoGartner.jpg"
            priority
            width={300}
            height={300}
            alt="Profile"
            className="rounded-full object-cover object-top md:w-300 hidden md:block sm:w-200 sm:h-200 md:w-300 md:h-300"
          />
        </div>
        <div className="flex flex-col justify-center md:max-w-md items-center w-full max-w-md">
          <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl my-4 w-full">
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
            <span className="text-secondary font-bold ">
              Gartner Maximiliano
            </span>
            <br />
            Desarrollador Web Full Stack.
            <br />A lo largo de mi carrera, trabajé con tecnologías como:
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((item) => (
              <span key={item.id} className="inline-flex items-center">
                {item.icon}
                <span className="ml-1">{item.title}</span>
              </span>
            ))}
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
          <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10 mt-4 mb-24 md:mb-0">
            <Link
              href="/projects"
              className="px-3 py-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl font-bold  hover:shadow-white/50 "
            >
              Ver proyectos
            </Link>
            <Link
              href="/contact"
              className="px-3 py-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl font-bold hover:shadow-secondary/50 text-secondary border-secondary"
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
