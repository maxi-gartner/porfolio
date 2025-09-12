"use client"

import Link from "next/link"
import MotionTransition from "./transition-components"
import { socialNetworks } from "@/data"
import Image from "next/image"
import { useState, useEffect } from "react"

const Header = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Función para abrir WhatsApp con mensaje personalizado
  const openWhatsApp = () => {
    const phoneNumber = "543435329910" // Reemplaza con tu número (código país + número sin +)
    const message = encodeURIComponent(
      "¡Hola Maxi! Vi tu portfolio y me interesa conocer más sobre tus servicios de desarrollo. ¿Podemos conversar?"
    )
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <MotionTransition
      position='bottom'
      className={`fixed z-50 w-full top-0 transition-all duration-500 ${
        scrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-zinc-800/50"
          : "bg-transparent"
      }`}
    >
      <header className='container mx-auto px-6 py-4'>
        <div className='grid grid-cols-4 lg:grid-cols-3 items-center'>
          {/* Logo/Brand con efecto holográfico */}
          <Link
            href='/'
            className='group col-span-3 lg:col-span-1 flex items-center space-x-3 '
          >
            <div className='relative'>
              <div className='absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity'></div>
              <Image
                src='/CirculoMaxiGartner.png'
                priority
                width={50}
                height={50}
                alt='Profile'
                className='relative rounded-full object-cover border-2 border-zinc-800 group-hover:border-cyan-500 transition-colors'
              />
            </div>
            <div>
              <h1 className='text-xl font-bold bg-gradient-to-r from-white via-zinc-300 to-cyan-400 bg-clip-text text-transparent tracking-wide'>
                M. GARTNER
              </h1>
              <p className='text-xs text-zinc-500 tracking-[0.2em] uppercase font-medium'>
                Full Stack Dev
              </p>
            </div>
          </Link>

          {/* Navigation Links - Desktop con efectos futuristas */}
          <nav className='hidden md:flex justify-center space-x-3 col-span-1'>
            {[
              { href: "/", label: "INICIO" },
              { href: "/aboutMe", label: "PERFIL" },
              { href: "/projects", label: "PROYECTOS" },
              { href: "/contact", label: "CONTACTO" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className='group relative text-zinc-400 hover:text-white font-medium tracking-[0.1em] transition-colors duration-300 py-2'
              >
                <span className='relative z-10'>{link.label}</span>

                {/* Underline effect */}
                <div className='absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300'></div>

                {/* Glow effect */}
                <div className='absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -m-2'></div>
              </Link>
            ))}
          </nav>

          {/* Social Links con efectos de hover - Solo LinkedIn activo */}
          <div className='flex justify-end space-x-3 col-span-1'>
            {/* LinkedIn (mantener activo) */}
            {socialNetworks
              .filter((item) => item.id === 2) // Filtra solo LinkedIn - ajusta según tu data
              .map((item) => (
                <Link
                  key={item.id}
                  href={item.src}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hidden md:block group relative p-3 text-zinc-500 hover:text-cyan-400 transition-all duration-300 hover:transform hover:scale-110'
                >
                  <div className='relative z-10'>{item.logo}</div>

                  {/* Background glow */}
                  <div className='absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm'></div>

                  {/* Border glow */}
                  <div className='absolute inset-0 border border-transparent group-hover:border-cyan-500/30 rounded-full transition-colors duration-300'></div>
                </Link>
              ))}

            {/* Botón de WhatsApp con logo original */}
            <button
              onClick={openWhatsApp}
              className='group relative p-2 text-green-400 transition-all duration-300 hover:transform hover:scale-110'
              title='Contactar por WhatsApp'
            >
              <div className='relative z-10'>
                {/* SVG del logo oficial de WhatsApp */}
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488' />
                </svg>
              </div>

              {/* Background glow verde para WhatsApp - siempre activo en mobile, hover en desktop */}
              <div className='absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full md:opacity-0 opacity-100 group-hover:opacity-100 transition-opacity duration-300 blur-sm'></div>

              {/* Border glow verde - siempre activo en mobile, hover en desktop */}
              <div className='absolute inset-0 border md:border-transparent border-green-500/30 group-hover:border-green-500/30 rounded-full transition-colors duration-300'></div>
            </button>

            {/* Separador decorativo */}
            <div className='hidden sm:block w-px h-8 bg-gradient-to-b from-transparent via-zinc-700 to-transparent mx-4'></div>

            {/* Status indicator */}
            <div className='hidden md:flex items-center space-x-2'>
              <div className='w-2 h-2 bg-green-400 rounded-full animate-pulse'></div>
              <span className='text-xs text-zinc-400 font-medium tracking-wide hidden lg:block'>
                DISPONIBLE
              </span>
            </div>
          </div>
        </div>
      </header>
    </MotionTransition>
  )
}

export default Header
