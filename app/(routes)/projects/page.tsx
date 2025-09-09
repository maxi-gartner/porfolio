"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import { projects } from "@/data"

// Tipos para TypeScript
interface Project {
  description: string
  logo: string
  url: string
  imgSrc: string
  technologies: JSX.Element[]
  secondLogo?: string
}

// Imágenes del GestorPro
const gestorProImages = [
  { name: "1- Inicio", src: "/GestorPro/1.jpg" },
  { name: "2- Alertas", src: "/GestorPro/2.jpg" },
  { name: "3- Productos", src: "/GestorPro/3.jpg" },
  { name: "4- Trabajos", src: "/GestorPro/4.jpg" },
  { name: "5-Comprobante", src: "/GestorPro/5.jpg" },
  { name: "6- Presupeusto", src: "/GestorPro/6.jpg" },
  { name: "7- Modales integrados", src: "/GestorPro/7.jpg" },
  { name: "Apartado Alertas", src: "/GestorPro/8.jpg" },
  { name: "db", src: "/GestorPro/9.jpg" },
  { name: "dbGestorPRO.db_page-0001", src: "/GestorPro/10.jpg" },
  { name: "dbGestorPRO.db_page-0002", src: "/GestorPro/11.jpg" },
  { name: "dbGestorPRO.db_page-0003", src: "/GestorPro/12.jpg" },
  { name: "dbGestorPRO.db_page-0004", src: "/GestorPro/13.jpg" },
  { name: "dbGestorPRO.db_page-0005", src: "/GestorPro/14.jpg" },
  { name: "dbGestorPRO.db_page-0006", src: "/GestorPro/15.jpg" },
]

export default function ProjectsEpic() {
  const [showModal, setShowModal] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const handleProjectClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    project: Project
  ) => {
    if (project.description === "Gestor Empresarial - GestorPro") {
      e.preventDefault()
      setShowModal(true)
      setCurrentImageIndex(0)
    }
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % gestorProImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + gestorProImages.length) % gestorProImages.length
    )
  }

  const goToImage = (index: number) => {
    setCurrentImageIndex(index)
  }

  return (
    <div className='relative min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-black overflow-hidden pt-4 lg:pt-0'>
      {/* Background effects */}
      <div className='absolute inset-0 opacity-30'>
        <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-float'></div>
        <div
          className='absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-float'
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Grid background */}
      <div className='absolute inset-0 opacity-10'>
        <div className='absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:100px_100px]'></div>
      </div>

      <div className='relative z-10 container mx-auto px-6 py-20'>
        {/* Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isLoaded ? "opacity-100 transform-none" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className='text-5xl xl:text-7xl font-extralight text-white leading-none tracking-tight mb-6'>
            PROYECTOS
          </h1>
          <h2 className='text-2xl xl:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 leading-none tracking-tight mb-8'>
            & TRABAJOS
          </h2>

          <div className='h-px w-32 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-8'></div>

          <p className='text-xl text-zinc-400 font-light tracking-wide max-w-2xl mx-auto'>
            Una colección de proyectos que demuestran mi experiencia en
            desarrollo full-stack, desde aplicaciones empresariales hasta
            experiencias web interactivas.
          </p>
        </div>

        {/* SECCIÓN DE TRABAJOS REALIZADOS */}
        <div className='mb-20'>
          <div
            className={`text-center mb-12 transition-all duration-1000 delay-200 ${
              isLoaded
                ? "opacity-100 transform-none"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className='text-3xl xl:text-4xl font-light text-white mb-4 tracking-wide'>
              TRABAJOS REALIZADOS
            </h3>
            <div className='h-px w-20 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto'></div>
          </div>

          <div className='grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto'>
            {projects.slice(0, 2).map((project, index) => (
              <Link
                href={project.url}
                key={index}
                className={`project-card-epic group transition-all duration-1000 delay-${
                  400 + index * 200
                } ${
                  isLoaded
                    ? "opacity-100 transform-none"
                    : "opacity-0 translate-y-10"
                }`}
                onClick={(e) => handleProjectClick(e, project)}
              >
                {/* Logo section */}
                <div className='p-8 bg-zinc-900/30 backdrop-blur-sm'>
                  <div className='flex items-center justify-center mb-6'>
                    <div className='relative'>
                      <div className='absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl blur-lg group-hover:blur-md transition-all duration-300'></div>
                      <Image
                        src={project.logo}
                        className='relative w-full p-3 h-16 object-contain rounded-xl'
                        alt='Project Logo'
                        width={200}
                        height={200}
                      />
                    </div>
                    {/* {project.secondLogo && (
                      <div className='relative ml-4'>
                        <Image
                          src={project.secondLogo}
                          className='w-24 h-16 object-contain rounded-xl'
                          alt='Secondary Logo'
                          width={200}
                          height={200}
                        />
                      </div>
                    )} */}
                  </div>

                  <h3 className='text-2xl font-bold text-white text-center mb-4 group-hover:text-cyan-400 transition-colors duration-300'>
                    {project.description}
                  </h3>

                  {/* Technologies */}
                  <div className='flex flex-wrap justify-center gap-3 mb-6'>
                    {project.technologies.map((tech, techIndex) => (
                      <div
                        key={techIndex}
                        className='p-2 bg-zinc-800/50 backdrop-blur-sm rounded-lg border border-zinc-700 hover:border-cyan-500/50 transition-colors duration-300'
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Preview image */}
                <div className='relative overflow-hidden rounded-b-2xl'>
                  <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10'></div>
                  <Image
                    src={project.imgSrc}
                    className='w-full h-80 object-cover object-top group-hover:scale-105 transition-transform duration-500'
                    alt='Project Preview'
                    width={600}
                    height={400}
                  />

                  {/* Hover overlay */}
                  <div className='absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20'></div>

                  {/* View project button */}
                  <div className='absolute bottom-6 right-6 z-30'>
                    <div className='flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300'>
                      <ExternalLink size={16} className='text-white' />
                      <span className='text-white text-sm font-medium'>
                        Ver Proyecto
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* SECCIÓN DE PROYECTOS PERSONALES */}
        <div className='mb-20'>
          <div
            className={`text-center mb-12 transition-all duration-1000 delay-600 ${
              isLoaded
                ? "opacity-100 transform-none"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className='text-3xl xl:text-4xl font-light text-white mb-4 tracking-wide'>
              PROYECTOS PERSONALES
            </h3>
            <div className='h-px w-20 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto'></div>
          </div>

          <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto'>
            {projects.slice(2).map((project, index) => (
              <Link
                href={project.url}
                key={index + 2}
                className={`project-card-epic group transition-all duration-1000 delay-${
                  800 + index * 200
                } ${
                  isLoaded
                    ? "opacity-100 transform-none"
                    : "opacity-0 translate-y-10"
                }`}
                onClick={(e) => handleProjectClick(e, project)}
              >
                {/* Logo section */}
                <div className='p-6 bg-zinc-900/30 backdrop-blur-sm h-64 flex flex-col justify-start'>
                  <div className='flex items-center justify-center mb-4'>
                    <div className='relative'>
                      <div className='absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-cyan-500/20 rounded-xl blur-lg group-hover:blur-md transition-all duration-300'></div>
                      <Image
                        src={project.logo}
                        className='relative w-full p-3 h-16 object-contain rounded-xl'
                        alt='Project Logo'
                        width={100}
                        height={100}
                      />
                    </div>
                    {project.secondLogo && (
                      <div className='relative ml-3'>
                        <div className='absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-cyan-500/20 rounded-xl blur-lg group-hover:blur-md transition-all duration-300'></div>
                        <Image
                          src={project.secondLogo}
                          className=' w-full p-3 h-12 object-contain rounded-xl'
                          alt='Secondary Logo'
                          width={100}
                          height={100}
                        />
                      </div>
                    )}
                  </div>

                  <h3 className='text-lg font-bold text-white text-center mb-3 group-hover:text-purple-400 transition-colors duration-300'>
                    {project.description}
                  </h3>

                  {/* Technologies */}
                  <div className='flex flex-wrap justify-center gap-2 mb-4'>
                    {project.technologies.map((tech, techIndex) => (
                      <div
                        key={techIndex}
                        className='p-1.5 bg-zinc-800/50 backdrop-blur-sm rounded-lg border border-zinc-700 hover:border-purple-500/50 transition-colors duration-300'
                      >
                        <div className='text-sm'>{tech}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Preview image */}
                <div className='relative overflow-hidden rounded-b-2xl'>
                  <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10'></div>
                  <Image
                    src={project.imgSrc}
                    className='w-full h-60 object-cover object-top group-hover:scale-105 transition-transform duration-500'
                    alt='Project Preview'
                    width={400}
                    height={300}
                  />

                  {/* Hover overlay */}
                  <div className='absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20'></div>

                  {/* Free server notice */}
                  <div className='absolute bottom-4 left-4 right-4 z-30'>
                    <div className='px-3 py-2 bg-yellow-500/20 backdrop-blur-sm rounded-lg border border-yellow-500/30'>
                      <p className='text-yellow-300 text-xs text-center'>
                        Servidor BackEnd gratuito puede tener demora
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* MODAL ÉPICO PARA GESTOR PRO */}
      {showModal && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm'>
          <div className='relative max-w-7xl max-h-screen p-6 w-full h-full flex flex-col bg-zinc-900/50 backdrop-blur-xl border border-zinc-700 rounded-3xl m-4'>
            {/* Header del modal */}
            <div className='flex items-center justify-between mb-6'>
              <div>
                <h2 className='text-white text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>
                  Gestor Empresarial - GestorPro
                </h2>
                <p className='text-zinc-400 text-sm mt-1'>
                  {currentImageIndex + 1} de {gestorProImages.length} capturas
                </p>
              </div>

              <button
                onClick={() => setShowModal(false)}
                className='p-3 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-full transition-all duration-200'
              >
                <X size={24} />
              </button>
            </div>

            {/* Contenedor principal de imagen */}
            <div className='flex-1 flex items-center justify-center relative bg-zinc-950/50 rounded-2xl overflow-hidden'>
              {/* Botón anterior */}
              <button
                onClick={prevImage}
                className='absolute left-4 z-10 p-3 text-white hover:text-cyan-400 bg-zinc-900/80 hover:bg-zinc-800 backdrop-blur-sm rounded-full transition-all duration-200 border border-zinc-700'
              >
                <ChevronLeft size={24} />
              </button>

              {/* Imagen actual */}
              <div className='relative max-w-full max-h-full overflow-hidden rounded-xl'>
                <Image
                  src={gestorProImages[currentImageIndex].src}
                  alt={gestorProImages[currentImageIndex].name}
                  width={1200}
                  height={800}
                  className='max-w-full max-h-full object-contain shadow-2xl'
                />
              </div>

              {/* Botón siguiente */}
              <button
                onClick={nextImage}
                className='absolute right-4 z-10 p-3 text-white hover:text-cyan-400 bg-zinc-900/80 hover:bg-zinc-800 backdrop-blur-sm rounded-full transition-all duration-200 border border-zinc-700'
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Footer del modal */}
            <div className='mt-6'>
              {/* Título de la imagen actual */}
              <div className='text-white text-center mb-4 text-lg font-medium'>
                {gestorProImages[currentImageIndex].name}
              </div>

              {/* Puntos indicadores */}
              <div className='flex justify-center space-x-2 overflow-x-auto pb-2'>
                {gestorProImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToImage(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentImageIndex
                        ? "bg-gradient-to-r from-cyan-400 to-blue-500 scale-125 shadow-lg shadow-cyan-400/50"
                        : "bg-zinc-600 hover:bg-zinc-500"
                    }`}
                  />
                ))}
              </div>

              {/* Instrucciones */}
              <div className='text-zinc-400 text-sm text-center mt-4'>
                Usa las flechas del teclado o los botones para navegar • ESC
                para cerrar
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
