"use client"

import { useState, useEffect } from "react"
import { dataAboutPage } from "@/data"

const TimeLine = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([])

  useEffect(() => {
    const timer = setTimeout(() => {
      dataAboutPage.forEach((_, index) => {
        setTimeout(() => {
          setVisibleItems((prev) => [...prev, index])
        }, index * 200)
      })
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className='relative'>
      {/* Timeline line with gradient - Hidden on mobile */}
      <div className='absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-500 hidden md:block'></div>

      {/* Glow effect for the timeline - Hidden on mobile */}
      <div className='absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-500 blur-sm opacity-50 hidden md:block'></div>

      <div className='space-y-8 md:space-y-12'>
        {dataAboutPage.map((data, index) => (
          <div
            key={data.id}
            className={`relative pl-0 md:pl-20 transition-all duration-1000 ${
              visibleItems.includes(index)
                ? "opacity-100 transform translate-x-0"
                : "opacity-0 transform translate-x-10"
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            {/* Timeline dot with glow - Hidden on mobile */}
            <div className='absolute left-6 top-6 hidden md:block'>
              <div className='relative'>
                <div className='w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full border-4 border-zinc-900 relative z-10'></div>
                <div className='absolute inset-0 w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-md opacity-75 animate-pulse'></div>
              </div>
            </div>

            {/* Content card */}
            <div className='group'>
              <div className='bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6 md:p-8 hover:border-zinc-700 transition-all duration-300 hover:transform hover:scale-105'>
                {/* Date badge */}
                <div className='inline-flex items-center px-3 md:px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-full border border-cyan-500/30 mb-4 md:mb-6'>
                  <time className='text-cyan-400 text-xs md:text-sm font-bold tracking-[0.2em] uppercase'>
                    {data.date}
                  </time>
                </div>

                {/* Title */}
                <h3 className='text-xl md:text-2xl xl:text-3xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300'>
                  {data.title}
                </h3>

                {/* Subtitle with icons */}
                <div className='flex items-center flex-wrap gap-3 md:gap-4 mb-4 md:mb-6'>
                  <span className='text-lg md:text-xl font-semibold text-zinc-300 tracking-wide'>
                    {data.subtitle}
                  </span>

                  {/* Technology icons */}
                  <div className='flex items-center gap-2 md:gap-3'>
                    {data.icons.map((icon, iconIndex) => (
                      <div
                        key={iconIndex}
                        className='p-1.5 md:p-2 bg-zinc-800/50 backdrop-blur-sm rounded-lg border border-zinc-700 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-110'
                      >
                        <div className='text-xl md:text-2xl'>{icon}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <p className='text-zinc-400 text-base md:text-lg leading-relaxed tracking-wide'>
                  {data.description}
                </p>

                {/* Subtle glow effect on hover */}
                <div className='absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none'></div>
              </div>
            </div>

            {/* Connection line to next item (except for last item) - Hidden on mobile */}
            {index < dataAboutPage.length - 1 && (
              <div className='absolute left-8 top-16 w-px h-12 bg-gradient-to-b from-transparent via-zinc-700 to-transparent hidden md:block'></div>
            )}
          </div>
        ))}
      </div>

      {/* Bottom fade effect */}
      <div className='absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-zinc-950 to-transparent pointer-events-none'></div>
    </div>
  )
}

export default TimeLine
