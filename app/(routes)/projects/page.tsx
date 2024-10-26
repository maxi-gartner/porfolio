import TransitionPage from "@/components/transition-page";
import { CoverParticles } from "@/components/cover-particles";
import ContainerPage from "@/components/container";

const projectsPage = () => {
  return (
    <>
      <TransitionPage />
      <div className="flex min-h-[100vh] h-full bg-no-repeat bg-gradient-cover">
        <CoverParticles />
        <ContainerPage>
          <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl">
            <span className="font-bold text-secondary">Proyectos y </span>
            <span className="font-bold text-secondary">trabajos</span>{" "}
            terminados
          </h1>
        </ContainerPage>
      </div>
    </>
  );
};

export default projectsPage;
