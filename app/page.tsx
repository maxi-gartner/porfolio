"use client"

import Image from "next/image"
import { TypeAnimation } from "react-type-animation"
import Link from "next/link"
import { useState, useEffect } from "react"
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiCsharp,
  SiDotnet,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiMicrosoftsqlserver,
} from "react-icons/si"

const Introduction = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const technologies = [
    {
      icon: SiReact,
      name: "React",
      color: "#06b6d4", // cyan-400
      hoverBg: "from-cyan-500/10 to-blue-500/10",
    },
    {
      icon: SiNextdotjs,
      name: "Next.js",
      color: "#a1a1aa", // zinc-400
      hoverBg: "from-zinc-400/10 to-zinc-600/10",
    },
    {
      icon: SiTypescript,
      name: "TypeScript",
      color: "#60a5fa", // blue-400
      hoverBg: "from-blue-400/10 to-blue-600/10",
    },
    {
      icon: SiCsharp,
      name: "C#",
      color: "#c084fc", // purple-400
      hoverBg: "from-purple-400/10 to-purple-600/10",
    },
    {
      icon: SiDotnet,
      name: ".NET",
      color: "#a78bfa", // indigo-400
      hoverBg: "from-indigo-400/10 to-purple-500/10",
    },
    {
      icon: SiNodedotjs,
      name: "Node.js",
      color: "#4ade80", // green-400
      hoverBg: "from-green-400/10 to-green-600/10",
    },
    {
      icon: SiExpress,
      name: "Express",
      color: "#d4d4d8", // zinc-300
      hoverBg: "from-zinc-300/10 to-zinc-500/10",
    },
    {
      icon: SiMongodb,
      name: "MongoDB",
      color: "#22c55e", // green-500
      hoverBg: "from-green-500/10 to-green-700/10",
    },
    {
      icon: SiMicrosoftsqlserver,
      name: "SQL Server",
      color: "#f87171", // red-400
      hoverBg: "from-red-400/10 to-orange-500/10",
    },
  ]

  return (
    <div className='relative min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-black overflow-hidden pt-4 lg:pt-0 pb-20'>
      {/* Animated background grid */}
      <div className='absolute inset-0 opacity-10'>
        <div className='absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:100px_100px]'></div>
      </div>

      {/* Floating geometric elements */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div
          className='absolute w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl'
          style={{
            transform: `translate(${mousePosition.x * 0.05}px, ${
              mousePosition.y * 0.05
            }px)`,
            transition: "transform 0.1s ease-out",
          }}
        ></div>
        <div
          className='absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl'
          style={{
            transform: `translate(${mousePosition.x * -0.03}px, ${
              mousePosition.y * -0.03
            }px)`,
            transition: "transform 0.1s ease-out",
          }}
        ></div>
      </div>

      {/* Main content */}
      <div
        className={`relative z-10 container mx-auto px-6 py-20 transition-all duration-1000 ${
          isLoaded ? "opacity-100 transform-none" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Hero section */}
        <div className='grid lg:grid-cols-2 gap-20 items-center min-h-[90vh]'>
          {/* Left side - Main content */}
          <div className='space-y-12'>
            {/* Name and title */}
            <div className='space-y-6'>
              <div className='overflow-hidden'>
                <h1
                  className={`text-7xl xl:text-8xl font-extralight text-white leading-none tracking-tight transition-all duration-1000 delay-200 ${
                    isLoaded ? "transform-none" : "translate-y-full"
                  }`}
                >
                  MAXIMILIANO
                </h1>
              </div>
              <div className='overflow-hidden'>
                <h1
                  className={`text-7xl xl:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 leading-none tracking-tight transition-all duration-1000 delay-400 ${
                    isLoaded ? "transform-none" : "translate-y-full"
                  }`}
                >
                  GARTNER
                </h1>
              </div>

              <div
                className={`h-px w-32 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-1000 delay-600 ${
                  isLoaded ? "opacity-100 w-32" : "opacity-0 w-0"
                }`}
              ></div>

              <div className='space-y-2'>
                <p
                  className={`text-2xl xl:text-3xl text-zinc-200 font-light tracking-widest uppercase transition-all duration-1000 delay-700 ${
                    isLoaded
                      ? "opacity-100 transform-none"
                      : "opacity-0 translate-x-10"
                  }`}
                >
                  DESARROLLADOR FULL STACK
                </p>
                <div
                  className={`text-xl xl:text-2xl text-cyan-400 font-light tracking-widest uppercase transition-all duration-1000 delay-800 ${
                    isLoaded
                      ? "opacity-100 transform-none"
                      : "opacity-0 translate-x-10"
                  }`}
                >
                  <TypeAnimation
                    sequence={[
                      "ARQUITECTO DE SOLUCIONES",
                      3000,
                      "ESPECIALISTA EN REACT",
                      3000,
                      "DESARROLLADOR .NET",
                      3000,
                      "CREADOR DE EXPERIENCIAS",
                      3000,
                    ]}
                    wrapper='span'
                    speed={50}
                    repeat={Infinity}
                  />
                </div>
              </div>
            </div>

            {/* Tech stack with hover effects */}
            <div
              className={`space-y-8 transition-all duration-1000 delay-1000 ${
                isLoaded
                  ? "opacity-100 transform-none"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <h3 className='text-sm font-bold text-zinc-300 tracking-[0.3em] uppercase'>
                TECNOLOGÍAS PRINCIPALES
              </h3>

              <div className='grid grid-cols-3 lg:grid-cols-4 gap-6'>
                {technologies.map((tech) => (
                  <div
                    key={tech.name}
                    className='group relative p-4 bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl hover:border-zinc-700 transition-all duration-300 hover:transform hover:scale-105'
                  >
                    <div className='flex flex-col items-center space-y-2'>
                      <tech.icon
                        className='text-3xl group-hover:scale-110 transition-transform duration-300'
                        style={{ color: tech.color }}
                      />
                      <span className='text-zinc-400 text-xs font-medium tracking-wide group-hover:text-white transition-colors text-center'>
                        {tech.name}
                      </span>
                    </div>
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${tech.hoverBg} opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300`}
                    ></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to action buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-6 transition-all duration-1000 delay-1200 ${
                isLoaded
                  ? "opacity-100 transform-none"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <Link
                href='/projects'
                className='group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold tracking-wide rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/25'
              >
                <span className='relative z-10'>VER PROYECTOS</span>
                <div className='absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              </Link>

              <Link
                href='/contact'
                className='group px-8 py-4 border-2 border-zinc-700 text-zinc-300 font-semibold tracking-wide rounded-full hover:border-cyan-400 hover:text-white transition-all duration-300 hover:shadow-xl hover:shadow-cyan-400/20'
              >
                CONTACTAR
              </Link>
            </div>

            {/* Contact info with elegant styling */}
            <div
              className={`space-y-4 pt-12 transition-all duration-1000 delay-1400 ${
                isLoaded
                  ? "opacity-100 transform-none"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className='h-px w-full bg-gradient-to-r from-transparent via-zinc-800 to-transparent'></div>

              <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 text-zinc-500'>
                <div className='flex items-center space-x-3'>
                  <div className='w-2 h-2 bg-cyan-400 rounded-full'></div>
                  <span className='text-sm tracking-wide'>343 5329910</span>
                </div>
                <div className='flex items-center space-x-3'>
                  <div className='w-2 h-2 bg-purple-400 rounded-full'></div>
                  <span className='text-sm tracking-wide'>
                    maxi.gartner@hotmail.com
                  </span>
                </div>
                <div className='flex items-center space-x-3'>
                  <div className='w-2 h-2 bg-blue-400 rounded-full'></div>
                  <span className='text-sm tracking-wide'>Entre Ríos, AR</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Profile image with advanced effects */}
          <div
            className={`flex justify-center lg:justify-end transition-all duration-1000 delay-600 ${
              isLoaded ? "opacity-100 transform-none" : "opacity-0 scale-95"
            }`}
          >
            <div className='relative group'>
              {/* Glowing background */}
              <div className='absolute -inset-8 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-full blur-3xl group-hover:blur-2xl transition-all duration-500'></div>

              {/* Rotating border */}
              <div className='absolute -inset-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full opacity-75 animate-spin-slow'></div>

              {/* Image container */}
              <div className='relative w-80 h-80 xl:w-96 xl:h-96'>
                <div className='absolute inset-2 bg-gradient-to-br from-zinc-900 to-black rounded-full'></div>
                <Image
                  src='/MaximilianoGartner.jpg'
                  priority
                  fill
                  alt='Maximiliano Gartner'
                  className='object-cover rounded-full p-2 filter grayscale group-hover:grayscale-0 transition-all duration-500'
                />

                {/* Overlay gradient */}
                <div className='absolute inset-2 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-full opacity-60 group-hover:opacity-30 transition-opacity duration-500'></div>
              </div>

              {/* Floating elements */}
              <div className='absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-80 animate-pulse'></div>
              <div className='absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-80 animate-pulse delay-1000'></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`hidden md:flex absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1600 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className='flex flex-col items-center space-y-2 text-zinc-500'>
          <span className='text-xs tracking-widest uppercase'>Scroll</span>
          <div className='w-px h-16 bg-gradient-to-b from-zinc-500 to-transparent animate-pulse'></div>
        </div>
      </div>
    </div>
  )
}

export default Introduction
