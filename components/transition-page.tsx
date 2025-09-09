"use client"

import { transitionVariantsPage } from "@/utils/motion-transitions"
import { AnimatePresence, motion } from "framer-motion"

const TransitionPage = () => {
  return (
    <AnimatePresence mode='wait'>
      <div>
        {/* Main transition overlay with futuristic gradient */}
        <motion.div
          className='fixed top-0 bottom-0 right-full w-screen z-50 bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-700'
          variants={transitionVariantsPage}
          initial='initial'
          animate='animate'
          exit='exit'
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* Simple grid pattern */}
          <div className='absolute inset-0 opacity-10'>
            <div className='absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:100px_100px]'></div>
          </div>

          {/* Loading indicator */}
          <div className='absolute inset-0 flex items-center justify-center'>
            <div className='text-center'>
              {/* Simple spinning circle */}
              <div className='w-16 h-16 mx-auto mb-6 border-4 border-white/30 border-t-white rounded-full animate-spin'></div>

              {/* Loading text */}
              <div className='text-white font-light text-lg tracking-[0.2em] uppercase'>
                CARGANDO
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}

export default TransitionPage
