import TransitionPage from "@/components/transition-page";
import { CoverParticles } from "@/components/cover-particles";
import ContainerPage from "@/components/container";
import FormData from "@/components/form";

const PageAboutMe = () => {
  return (
    <>
      <TransitionPage />
      <div className="flex min-h-[100vh] h-full bg-no-repeat bg-gradient-cover">
        <CoverParticles />
        <ContainerPage>
          <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl text center flex flex-col items-center pb-5">
            Si deseas ponerte en contacto conmigo
            <span>puedes escribirme</span>
            <span className="font-bold text-secondary">AQUI!</span>
          </h1>
          <FormData />
        </ContainerPage>
      </div>
    </>
  );
};

export default PageAboutMe;
