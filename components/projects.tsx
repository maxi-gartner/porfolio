"use client"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
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
  {
    name: "7- Modales integrados",
    src: "/GestorPro/7.jpg",
  },
  { name: "Apartado Alertas", src: "/GestorPro/8.jpg" },
  { name: "db", src: "/GestorPro/9.jpg" },
  {
    name: "dbGestorPRO.db_page-0001",
    src: "/GestorPro/10.jpg",
  },
  {
    name: "dbGestorPRO.db_page-0002",
    src: "/GestorPro/11.jpg",
  },
  {
    name: "dbGestorPRO.db_page-0003",
    src: "/GestorPro/12.jpg",
  },
  {
    name: "dbGestorPRO.db_page-0004",
    src: "/GestorPro/13.jpg",
  },
  {
    name: "dbGestorPRO.db_page-0005",
    src: "/GestorPro/14.jpg",
  },
  {
    name: "dbGestorPRO.db_page-0006",
    src: "/GestorPro/15.jpg",
  },
]

export default function WebApp() {
  const [showModal, setShowModal] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const handleProjectClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    project: Project
  ) => {
    // Verificamos si es GestorPro por la descripción ya que no tenemos un flag isGestorPro
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
    <div className='h-full mt-10 w-screen pb-16'>
      {/* SECCIÓN DE TRABAJOS REALIZADOS - LO MÁS IMPORTANTE */}
      <div className='mb-16'>
        <h1 className='text-3xl font-bold text-center text-white mb-8'>
          Trabajos Realizados
        </h1>
        <div className='flex justify-evenly relative flex-wrap gap-5'>
          {projects.slice(0, 2).map((project, index) => (
            <Link
              href={project.url}
              key={index}
              className='flex flex-col pt-5 mx-2 w-96 group cursor-pointer'
              onClick={(e) => handleProjectClick(e, project)}
            >
              <div className='w-full max-w-sm rounded-xl relative transition-transform duration-300'>
                <div className='flex items-center justify-center md:p-5'>
                  <Image
                    src={project.logo}
                    className='w-auto mr-2 rounded-xl'
                    alt='Img Logo'
                    width={500}
                    height={500}
                  />
                  {project.secondLogo && (
                    <Image
                      src={project.secondLogo}
                      className='w-auto h-16 rounded-xl'
                      alt='Img Logo'
                      width={500}
                      height={500}
                    />
                  )}
                </div>
                <h2 className='text-xl py-1 md:py-0 text-center text-white mb-2 md:font-semibold group-hover:-translate-y-2 transition-transform duration-300'>
                  {project.description}
                </h2>
                <div className='text-sm py-1 md:py-0 text-center text-white mb-2 group-hover:-translate-y-2 transition-transform duration-300 flex justify-center gap-2 flex-wrap'>
                  {project.technologies.map(
                    (technology: React.ReactNode, techIndex: number) => (
                      <span key={techIndex}>
                        {typeof technology === "string" ? (
                          <span className='bg-gray-200 px-2 py-1 rounded'>
                            {technology}
                          </span>
                        ) : (
                          technology
                        )}
                      </span>
                    )
                  )}
                </div>
              </div>
              <div className='w-full max-w-sm rounded-xl h-[35rem] border-4 border-black relative mb-10 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] transition-transform duration-300 overflow-hidden bg-black group-hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] group-hover:scale-105'>
                <Image
                  src={project.imgSrc}
                  className='w-full h-full object-cover rounded-xl'
                  alt='Project Image'
                  width={500}
                  height={500}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* SECCIÓN DE PROYECTOS PERSONALES */}
      <div className='mb-16'>
        <h1 className='text-3xl font-bold text-center text-white mb-8'>
          Proyectos Personales
        </h1>
        <div className='flex justify-evenly relative flex-wrap gap-5'>
          {projects.slice(2).map((project, index) => (
            <Link
              href={project.url}
              key={index + 2}
              className='flex flex-col pt-5 mx-2 w-96 group'
              onClick={(e) => handleProjectClick(e, project)}
            >
              <div className='w-full max-w-sm rounded-xl relative transition-transform duration-300'>
                <div className='flex items-center justify-center md:p-5'>
                  <Image
                    src={project.logo}
                    className='w-auto h-16 mr-2 rounded-xl'
                    alt='Img Logo'
                    width={500}
                    height={500}
                  />
                  {project.secondLogo && (
                    <Image
                      src={project.secondLogo}
                      className='w-auto h-16 rounded-xl'
                      alt='Img Logo'
                      width={500}
                      height={500}
                    />
                  )}
                </div>
                <h2 className='text-xl py-1 md:py-0 text-center text-white mb-2 md:font-semibold group-hover:-translate-y-2 transition-transform duration-300'>
                  {project.description}
                </h2>
                <div className='text-sm py-1 md:py-0 text-center text-white mb-2 group-hover:-translate-y-2 transition-transform duration-300 flex justify-center gap-2 flex-wrap'>
                  {project.technologies.map(
                    (technology: React.ReactNode, techIndex: number) => (
                      <span key={techIndex}>
                        {typeof technology === "string" ? (
                          <span className='bg-gray-200 px-2 py-1 rounded'>
                            {technology}
                          </span>
                        ) : (
                          technology
                        )}
                      </span>
                    )
                  )}
                </div>
              </div>
              <div className='w-full max-w-sm rounded-xl h-[35rem] border-4 border-black relative mb-10 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] transition-transform duration-300 overflow-hidden bg-black group-hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] group-hover:scale-105'>
                <Image
                  src={project.imgSrc}
                  className='w-full h-full object-cover rounded-xl'
                  alt='Project Image'
                  width={500}
                  height={500}
                />
              </div>
              <span className='text-center'>
                Servidor BackEnd gratuito puede tener demora en la respuesta
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* MODAL PARA GESTOR PRO */}
      {showModal && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90'>
          <div className='relative max-w-6xl max-h-screen p-4 w-full h-full flex flex-col'>
            {/* Botón cerrar */}
            <button
              onClick={() => setShowModal(false)}
              className='absolute top-4 right-4 z-60 text-white hover:text-red-400 transition-colors duration-200'
            >
              <X size={32} />
            </button>

            {/* Título */}
            <h2 className='text-white text-2xl font-bold text-center mb-4'>
              Gestor Empresarial - GestorPro
            </h2>

            {/* Contador de imágenes */}
            <div className='text-white text-center mb-4'>
              {currentImageIndex + 1} / {gestorProImages.length}
            </div>

            {/* Contenedor principal de imagen */}
            <div className='flex-1 flex items-center justify-center relative'>
              {/* Botón anterior */}
              <button
                onClick={prevImage}
                className='absolute left-4 z-10 text-white hover:text-blue-400 transition-colors duration-200 bg-black bg-opacity-50 rounded-full p-2'
              >
                <ChevronLeft size={32} />
              </button>

              {/* Imagen actual con animación */}
              <div className='relative max-w-full max-h-full overflow-hidden rounded-lg'>
                <div
                  className='transform transition-all duration-500 ease-in-out'
                  style={{
                    opacity: 1,
                    transform: `translateX(0) scale(1)`,
                  }}
                >
                  <Image
                    src={gestorProImages[currentImageIndex].src}
                    alt={gestorProImages[currentImageIndex].name}
                    width={1200}
                    height={800}
                    className='max-w-full max-h-full object-contain rounded-lg shadow-2xl'
                  />
                </div>
              </div>

              {/* Botón siguiente */}
              <button
                onClick={nextImage}
                className='absolute right-4 z-10 text-white hover:text-blue-400 transition-colors duration-200 bg-black bg-opacity-50 rounded-full p-2'
              >
                <ChevronRight size={32} />
              </button>
            </div>

            {/* Título de la imagen actual */}
            <div className='text-white text-center mt-4 text-lg font-medium'>
              {gestorProImages[currentImageIndex].name}
            </div>

            {/* Puntos indicadores */}
            <div className='flex justify-center mt-4 space-x-2 overflow-x-auto pb-2'>
              {gestorProImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentImageIndex
                      ? "bg-blue-500 scale-125"
                      : "bg-gray-400 hover:bg-gray-300"
                  }`}
                />
              ))}
            </div>

            {/* Navegación por teclado */}
            <div className='text-white text-xs text-center mt-2 opacity-70'>
              Usa las flechas del teclado o haz clic en los botones para navegar
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
