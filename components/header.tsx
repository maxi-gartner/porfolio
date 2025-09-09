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
        <div className='grid grid-cols-1 lg:grid-cols-3 items-center'>
          {/* Logo/Brand con efecto holográfico */}
          <Link href='/' className='group flex items-center space-x-3 '>
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

          {/* Social Links con efectos de hover */}
          <div className='hidden md:flex justify-end space-x-3 col-span-1'>
            {socialNetworks.map((item) => (
              <Link
                key={item.id}
                href={item.src}
                target='_blank'
                rel='noopener noreferrer'
                className='group relative p-3 text-zinc-500 hover:text-cyan-400 transition-all duration-300 hover:transform hover:scale-110'
              >
                <div className='relative z-10'>{item.logo}</div>

                {/* Background glow */}
                <div className='absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm'></div>

                {/* Border glow */}
                <div className='absolute inset-0 border border-transparent group-hover:border-cyan-500/30 rounded-full transition-colors duration-300'></div>
              </Link>
            ))}

            {/* Separador decorativo */}
            <div className='hidden sm:block w-px h-8 bg-gradient-to-b from-transparent via-zinc-700 to-transparent mx-4'></div>

            {/* Status indicator */}
            <div className='flex items-center space-x-2'>
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
