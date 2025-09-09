"use client"

import { itemsNavbar } from "@/data"
import { usePathname } from "next/navigation"
import Link from "next/link"

const Navbar = () => {
  const pathname = usePathname()

  return (
    <div className='fixed bottom-0 left-0 right-0 z-50 md:hidden'>
      <nav className='bg-black/80 backdrop-blur-xl border-t border-zinc-800/50'>
        <div className='flex justify-around py-2'>
          {itemsNavbar.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              className={`group relative flex flex-col items-center p-3 min-w-0 flex-1 transition-all duration-300 ${
                pathname === item.link
                  ? "text-cyan-400"
                  : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              {/* Background glow for active item */}
              {pathname === item.link && (
                <div className='absolute inset-0 bg-gradient-to-t from-cyan-500/10 to-transparent rounded-t-xl'></div>
              )}

              {/* Top indicator line */}
              <div
                className={`absolute top-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 ${
                  pathname === item.link ? "w-8" : "w-0 group-hover:w-4"
                }`}
              ></div>

              {/* Icon container with effects */}
              <div
                className={`relative p-2 rounded-xl transition-all duration-300 ${
                  pathname === item.link
                    ? "bg-gradient-to-br from-cyan-500/20 to-blue-500/20 shadow-lg"
                    : "group-hover:bg-zinc-800/50"
                }`}
              >
                {/* Icon glow effect */}
                {pathname === item.link && (
                  <div className='absolute inset-0 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-xl blur-sm'></div>
                )}

                <div className='relative z-10'>{item.icon}</div>
              </div>

              {/* Label */}
              <span
                className={`text-xs font-medium tracking-wider mt-1 transition-all duration-300 uppercase ${
                  pathname === item.link
                    ? "text-cyan-400 transform scale-105"
                    : "text-zinc-500 group-hover:text-zinc-300"
                }`}
              >
                {item.title}
              </span>

              {/* Ripple effect on tap */}
              <div className='absolute inset-0 rounded-xl overflow-hidden'>
                <div className='absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 translate-y-full group-active:translate-y-0 transition-transform duration-150'></div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom safe area for iPhone */}
        <div className='h-safe-bottom bg-gradient-to-t from-black/40 to-transparent'></div>
      </nav>
    </div>
  )
}

export default Navbar
