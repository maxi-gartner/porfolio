export const transitionVariantsPage = {
  initial: {
    x: "100%", // Comienza fuera de la pantalla
    opacity: 0, // Comienza invisible
  },
  animate: {
    x: "0%", // Se mueve a su posición original
    opacity: 1, // Se vuelve visible
  },
  exit: {
    x: "100%", // Se mueve fuera de la pantalla
    opacity: 0, // Se desvanece
  },
};

export const fadeIn = (position: string) => {
  return {
    visible: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1.4,
        delay: 0.5,
        ease: [0.25, 0.25, 0.25, 0.75], // Corregido
      },
    },
    hidden: {
      y: position === "bottom" ? -80 : 0,
      x: position === "right" ? 80 : 0,
      opacity: 0,
      transition: {
        type: "tween",
        duration: 1.4,
        delay: 0.5,
        ease: [0.25, 0.25, 0.25, 0.75], // Corregido
      },
    },
  };
};
