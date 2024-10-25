import TransitionPage from "@/components/transition-page";
import { CoverParticles } from "@/components/cover-particles";
import ContainerPage from "@/components/container";
import CounterServices from "@/components/experience";
import TimeLine from "@/components/timeLine";

const PageAboutMe = () => {
  return (
    <>
      <TransitionPage />
      <div className="flex min-h-[100vh] h-full bg-no-repeat bg-gradient-cover">
        <CoverParticles />
        <ContainerPage>
          <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl">
            Toda mi{" "}
            <span className="font-bold text-secondary">
              trayectoria profesional
            </span>
          </h1>
          <CounterServices />
          <TimeLine />
        </ContainerPage>
      </div>
    </>
  );
};

export default PageAboutMe;
