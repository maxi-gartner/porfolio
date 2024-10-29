"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { handleForm } from "../app/action/actionsForm";

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [showAlert, setShowAlert] = useState(false);
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    await handleForm(formData);

    setShowAlert(true);
    formRef.current?.reset();

    setTimeout(() => {
      setShowAlert(false);
      router.push("/");
    }, 3000);
  };

  return (
    <div className="max-w-md mx-auto p-6 mb-14 text-white relative">
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
        <div className="form-group">
          <label htmlFor="name" className="block font-medium text-lg">
            Nombre o Empresa:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-black shadow-md shadow-black"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="block text-lg font-medium">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-black shadow-md shadow-black"
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone" className="block text-lg font-medium">
            Telefono: (Opcional)
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-black shadow-md shadow-black"
          />
        </div>
        <div className="form-group">
          <label htmlFor="message" className="block text-lg font-medium">
            Mensaje:
          </label>
          <textarea
            id="message"
            name="message"
            required
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-black shadow-md shadow-black"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200 text-lg"
        >
          Enviar Mensaje
        </button>
      </form>

      {showAlert && (
        <div className="fixed top-0 left-0 flex w-full h-full justify-center items-center bg-black bg-opacity-40">
          <div className="transform -translate-x-1/2 -translate-y-1/2 bg-secondary text-white p-6 rounded-lg shadow-xl text-center transition-transform duration-500 scale-110 opacity-100 animate-fadeIn max-w-xs">
            <p className="text-xl mb-4">
              Tu mensaje ha sido enviado exitosamente.
            </p>
            <div className="flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 mx-2 animate-bounce text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 12h14m-5 5l5-5m-5 5l-5-5"
                />
              </svg>
              <span className="text-xl">Redirigiendo...</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
