import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data";

export default function WebApp() {
  return (
    <div className="h-full mt-10 w-screen pb-16">
      <div className="flex justify-evenly relative flex-wrap gap-5">
        {projects.map((project, index) => (
          <Link
            href={project.url}
            key={index}
            className="flex flex-col pt-5 mx-2 w-96 group"
          >
            <div className="w-full max-w-sm rounded-xl relative transition-transform duration-300">
              <div className="flex items-center justify-center md:p-5">
                <Image
                  src={project.logo}
                  className="w-auto h-16 mr-2 rounded-xl"
                  alt="Img Logo"
                  width={500}
                  height={500}
                />
                {project.secondLogo && (
                  <Image
                    src={project.secondLogo}
                    className="w-auto h-16 rounded-xl"
                    alt="Img Logo"
                    width={500}
                    height={500}
                  />
                )}
              </div>
              <h2 className="text-xl py-1 md:py-0 text-center text-secondary mb-2 md:font-semibold group-hover:-translate-y-2 transition-transform duration-300">
                {project.description}
              </h2>
            </div>
            <div className="w-full max-w-sm rounded-xl h-[35rem] border-4 border-black relative mb-10 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] transition-transform duration-300 overflow-y-auto scrollbar scrollbar-secondary bg-black group-hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] group-hover:scale-105">
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
