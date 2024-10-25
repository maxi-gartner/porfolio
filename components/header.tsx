import Link from "next/link";
import MotionTransition from "./transition-components";
import { socialNetworks } from "@/data";

const Header = () => {
  return (
    <MotionTransition
      position="bottom"
      className="absolute z-40 inline-block w-full top-5 md:top-10"
    >
      <header>
        <div className="container justify-between max-w-6xl mx-auto md:flex sm:px-6">
          <Link href={"/"}>
            <h1 className="my-3 text-4xl font-bold text-center md:text-left">
              Developer
              <samp className="text-secondary"> Full Stack</samp>
            </h1>
          </Link>
          <div className="flex items-center justify-center gap-7">
            {socialNetworks.map((item) => (
              <Link
                key={item.id}
                href={item.src}
                className="transition duration-150 hover:text-secondary"
              >
                {item.logo}
              </Link>
            ))}
          </div>
        </div>
      </header>
    </MotionTransition>
  );
};

export default Header;
