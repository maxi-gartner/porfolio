"use client"

import { useState, useEffect } from "react"
import CounterServices from "@/components/experience"
import TimeLine from "@/components/timeLine"

const PageAboutMe = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <>
      <div className='relative min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-black overflow-hidden pt-4 lg:pt-0 pb-20'>
        {/* Background effects */}
        <div className='absolute inset-0 opacity-30'>
          <div className='absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-float'></div>
          <div
            className='absolute bottom-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-float'
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        {/* Grid background */}
        <div className='absolute inset-0 opacity-10'>
          <div className='absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:100px_100px]'></div>
        </div>

        <div className='relative z-10 container mx-auto px-6 py-20'>
          {/* Header con animación inicial */}
          <div
            className={`text-center mb-20 transition-all duration-1000 ${
              isLoaded
                ? "opacity-100 transform-none"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className='text-5xl xl:text-7xl font-extralight text-white leading-none tracking-tight mb-6'>
              MI TRAYECTORIA
            </h1>
            <h2 className='text-2xl xl:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 leading-none tracking-tight mb-8'>
              PROFESIONAL
            </h2>

            <div className='h-px w-32 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-8'></div>

            <p className='text-xl text-zinc-400 font-light tracking-wide max-w-3xl mx-auto'>
              Un recorrido a través de mi evolución como desarrollador, desde
              mis primeros pasos en programación hasta convertirme en un
              especialista full-stack.
            </p>
          </div>

          {/* Experience Counter con animación */}
          <div
            className={`mb-20 transition-all duration-1000 delay-200 ${
              isLoaded
                ? "opacity-100 transform-none"
                : "opacity-0 translate-y-10"
            }`}
          >
            <CounterServices />
          </div>

          {/* Timeline con animación */}
          <div
            className={`max-w-4xl mx-auto transition-all duration-1000 delay-400 ${
              isLoaded
                ? "opacity-100 transform-none"
                : "opacity-0 translate-y-10"
            }`}
          >
            <TimeLine />
          </div>
        </div>
      </div>
    </>
  )
}

export default PageAboutMe
