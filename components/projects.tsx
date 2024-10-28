import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    description: "E-comerce Informatico",
    logo: "/bug_fix_logo.png",
    secondLogo: "/bugFixTitle2.png",
    url: "https://bug-1wmh25i6o-maxigartners-projects.vercel.app/",
    imgSrc: "/bug-fix.png",
  },
  {
    description: "E-comerce Articulos de Hogar",
    logo: "/HELogo.png",
    url: "https://home-essentials-front-dev-propia-erzjk9ssi.vercel.app/",
    imgSrc: "/homeEssentials.png",
  },
  {
    description: "Gestion y Organizacion de eventos",
    logo: "/gestorDeEventosFilter.png",
    url: "https://gestor-de-eventos-front.vercel.app/",
    imgSrc: "/gestorDeEventos.png",
  },
];

export default function WebApp() {
  return (
    <div className="h-full mt-10 w-screen pb-16">
      <div className="flex justify-evenly relative flex-wrap">
        {projects.map((project, index) => (
          <Link
            href={project.url}
            key={index}
            className="flex flex-col pt-5 mx-2 w-96"
          >
            <div className="w-full max-w-sm rounded-xl relative transition-transform duration-300">
              <div className="flex items-center justify-center md:p-5">
                <Image
                  src={project.logo}
                  className="w-auto h-16 mr-2 rounded-xl"
                  alt={`Img Logo`}
                  width={500}
                  height={500}
                />
                {project.secondLogo && (
                  <Image
                    src={project.secondLogo}
                    className="w-auto h-16 rounded-xl"
                    alt={`Img Logo`}
                    width={500}
                    height={500}
                  />
                )}
              </div>
              <h2 className="text-xl py-1 md:py-0 text-center text-secondary mb-2 md:font-semibold">
                {project.description}
              </h2>
            </div>
            <div
              className={`w-full max-w-sm rounded-xl min-h-96 sm:min-h-auto h-[35rem] border-4 border-black relative mb-10 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] transition-transform duration-300 overflow-y-auto scrollbar scrollbar-secondary bg-black group`}
            >
              <Image
                src={project.imgSrc}
                className="w-full h-auto object-cover rounded-xl"
                alt="Project Image"
                width={500}
                height={500}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
