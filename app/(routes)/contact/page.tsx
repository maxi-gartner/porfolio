"use client"

import { useRef, useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { handleForm } from "@/app/action/actionsForm"

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement | null>(null)
  const [showAlert, setShowAlert] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(event.currentTarget)
    await handleForm(formData)

    setShowAlert(true)
    setIsSubmitting(false)
    formRef.current?.reset()

    setTimeout(() => {
      setShowAlert(false)
      router.push("/")
    }, 3000)
  }

  return (
    <div className='relative min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-black overflow-hidden pt-4 lg:pt-0 pb-10'>
      {/* Animated background elements */}
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
        <div className='max-w-2xl mx-auto'>
          {/* Header con animación inicial */}
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isLoaded
                ? "opacity-100 transform-none"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className='text-5xl xl:text-7xl font-extralight text-white leading-none tracking-tight mb-6'>
              CONECTEMOS
            </h1>
            <h2 className='text-2xl xl:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 leading-none tracking-tight mb-8'>
              JUNTOS
            </h2>

            <div className='h-px w-32 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-8'></div>

            <p className='text-xl text-zinc-400 font-light tracking-wide max-w-lg mx-auto'>
              ¿Tienes un proyecto en mente? Me encantaría saber más sobre tu
              visión y cómo podemos hacerla realidad.
            </p>
          </div>

          {/* Form con animaciones progresivas */}
          <div
            className={`space-y-8 transition-all duration-1000 delay-200 ${
              isLoaded
                ? "opacity-100 transform-none"
                : "opacity-0 translate-y-10"
            }`}
          >
            <form ref={formRef} onSubmit={handleSubmit} className='space-y-8'>
              {/* Name field */}
              <div
                className={`group transition-all duration-1000 delay-400 ${
                  isLoaded
                    ? "opacity-100 transform-none"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <label htmlFor='name' className='form-label-epic'>
                  Nombre o Empresa
                </label>
                <div className='relative'>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    required
                    className='form-input-epic group-hover:border-zinc-600 transition-all duration-300'
                    placeholder='Tu nombre o el de tu empresa'
                  />
                  <div className='absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none'></div>
                </div>
              </div>

              {/* Email field */}
              <div
                className={`group transition-all duration-1000 delay-500 ${
                  isLoaded
                    ? "opacity-100 transform-none"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <label htmlFor='email' className='form-label-epic'>
                  Email
                </label>
                <div className='relative'>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    required
                    className='form-input-epic group-hover:border-zinc-600 transition-all duration-300'
                    placeholder='tu@email.com'
                  />
                  <div className='absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none'></div>
                </div>
              </div>

              {/* Phone field */}
              <div
                className={`group transition-all duration-1000 delay-600 ${
                  isLoaded
                    ? "opacity-100 transform-none"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <label htmlFor='phone' className='form-label-epic'>
                  Teléfono{" "}
                  <span className='text-zinc-600 font-normal'>(Opcional)</span>
                </label>
                <div className='relative'>
                  <input
                    type='tel'
                    id='phone'
                    name='phone'
                    className='form-input-epic group-hover:border-zinc-600 transition-all duration-300'
                    placeholder='+54 9 11 1234-5678'
                  />
                  <div className='absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none'></div>
                </div>
              </div>

              {/* Message field */}
              <div
                className={`group transition-all duration-1000 delay-700 ${
                  isLoaded
                    ? "opacity-100 transform-none"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <label htmlFor='message' className='form-label-epic'>
                  Mensaje
                </label>
                <div className='relative'>
                  <textarea
                    id='message'
                    name='message'
                    required
                    rows={6}
                    className='form-input-epic resize-none group-hover:border-zinc-600 transition-all duration-300'
                    placeholder='Cuéntame sobre tu proyecto, ideas o cualquier pregunta que tengas...'
                  />
                  <div className='absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none'></div>
                </div>
              </div>

              {/* Submit button */}
              <div
                className={`pt-8 transition-all duration-1000 delay-800 ${
                  isLoaded
                    ? "opacity-100 transform-none"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <button
                  type='submit'
                  disabled={isSubmitting}
                  className='btn-primary-epic w-full relative group disabled:opacity-50 disabled:cursor-not-allowed'
                >
                  <span className='relative z-10 flex items-center justify-center space-x-3'>
                    {isSubmitting ? (
                      <>
                        <div className='w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin'></div>
                        <span>ENVIANDO...</span>
                      </>
                    ) : (
                      <>
                        <span>ENVIAR MENSAJE</span>
                        <svg
                          className='w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M17 8l4 4m0 0l-4 4m4-4H3'
                          />
                        </svg>
                      </>
                    )}
                  </span>
                </button>
              </div>
            </form>
          </div>

          {/* Contact info con animación final */}
          <div
            className={`mt-20 pt-12 border-t border-zinc-800/50 transition-all duration-1000 delay-1000 ${
              isLoaded
                ? "opacity-100 transform-none"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 text-center'>
              <div
                className={`group transition-all duration-1000 delay-1100 ${
                  isLoaded
                    ? "opacity-100 transform-none"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <div className='w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300'>
                  <svg
                    className='w-6 h-6 text-white'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                    />
                  </svg>
                </div>
                <h3 className='text-zinc-400 text-sm font-bold tracking-[0.2em] uppercase mb-2'>
                  Teléfono
                </h3>
                <p className='text-white text-lg font-light'>343 5329910</p>
              </div>

              <div
                className={`group transition-all duration-1000 delay-1200 ${
                  isLoaded
                    ? "opacity-100 transform-none"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <div className='w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300'>
                  <svg
                    className='w-6 h-6 text-white'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                    />
                  </svg>
                </div>
                <h3 className='text-zinc-400 text-sm font-bold tracking-[0.2em] uppercase mb-2'>
                  Email
                </h3>
                <p className='text-white text-lg font-light'>
                  consultas@gsi.com
                </p>
              </div>

              <div
                className={`group transition-all duration-1000 delay-1300 ${
                  isLoaded
                    ? "opacity-100 transform-none"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <div className='w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300'>
                  <svg
                    className='w-6 h-6 text-white'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                    />
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                    />
                  </svg>
                </div>
                <h3 className='text-zinc-400 text-sm font-bold tracking-[0.2em] uppercase mb-2'>
                  Ubicación
                </h3>
                <p className='text-white text-lg font-light'>
                  Entre Ríos, Argentina
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showAlert && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm'>
          <div className='relative bg-zinc-900/90 backdrop-blur-xl border border-zinc-700 rounded-2xl p-8 mx-4 max-w-md w-full animate-scale-in'>
            {/* Success animation */}
            <div className='flex justify-center mb-6'>
              <div className='w-20 h-20 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center animate-glow'>
                <svg
                  className='w-10 h-10 text-white animate-bounce'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M5 13l4 4L19 7'
                  />
                </svg>
              </div>
            </div>

            <div className='text-center'>
              <h3 className='text-2xl font-bold text-white mb-4'>
                ¡Mensaje Enviado!
              </h3>
              <p className='text-zinc-400 mb-6'>
                Tu mensaje ha sido enviado exitosamente. Me pondré en contacto
                contigo muy pronto.
              </p>

              {/* Loading animation */}
              <div className='flex items-center justify-center space-x-3 text-cyan-400'>
                <div className='flex space-x-1'>
                  <div className='w-2 h-2 bg-cyan-400 rounded-full animate-pulse'></div>
                  <div
                    className='w-2 h-2 bg-cyan-400 rounded-full animate-pulse'
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                  <div
                    className='w-2 h-2 bg-cyan-400 rounded-full animate-pulse'
                    style={{ animationDelay: "0.4s" }}
                  ></div>
                </div>
                <span className='text-sm font-medium tracking-wide'>
                  Redirigiendo...
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ContactForm
