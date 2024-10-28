import Link from "next/link";
import Image from "next/image"; // Asegúrate de importar el componente Image

const projects = [
  {
    name: "Bug Fix",
    description: "E-comerce Informatico",
    url: "https://bug-1wmh25i6o-maxigartners-projects.vercel.app/",
    imgSrc: "/bug-fix.png", // Asegúrate de la ruta correcta
    scrollbarClass: "scrollbar-bugfix", // Clase para scrollbar
  },
  {
    name: "Home Essentials",
    description: "E-comerce Venta de articulos de hogar",
    url: "https://home-essentials-front-dev-propia-erzjk9ssi.vercel.app/",
    imgSrc: "/homeEssentials.png",
    scrollbarClass: "scrollbar-home-essentials", // Clase para scrollbar
  },
  {
    name: "Gestor De Eventos",
    description: "Gestion y organizacion de eventos",
    url: "https://gestor-de-eventos-front.vercel.app/",
    imgSrc: "/gestorDeEventos.png",
    scrollbarClass: "scrollbar-gestor-eventos", // Clase para scrollbar
  },
];

export default function WebApp() {
  return (
    <div className="h-full mt-10 w-screen">
      <div className="flex justify-evenly relative flex-wrap">
        {projects.map((project, index) => (
          <Link
            href={project.url}
            key={index}
            className="flex flex-col pt-5 mx-2 w-96"
          >
            <div className="w-full max-w-sm rounded-xl min-h-16 sm:min-h-auto h-[8rem] relative transition-transform duration-300">
              <h1 className="text-black text-3xl p-5 text-center">
                {project.name}
              </h1>
              <h1 className="text-black text-3xl text-center">
                {project.description}
              </h1>
            </div>
            <div
              className={`w-full max-w-sm bg-white rounded-xl min-h-96 sm:min-h-auto h-[35rem] border-4 border-black relative mb-10 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] transition-transform duration-300 overflow-y-auto scrollbar ${project.scrollbarClass}`}
            >
              <Image
                src={project.imgSrc}
                className="w-full h-auto object-cover rounded-xl"
                alt={project.name}
                width={500}
                height={500} // Cambia la altura según sea necesario
              />
              <div className="w-full h-full bg-black absolute top-0 left-0 flex justify-center items-center bg-opacity-40 hover:bg-opacity-0">
                <div className="flex flex-col justify-center items-center p-10 pb-16">
                  <h2 className="text-white text-xl">{project.description}</h2>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
