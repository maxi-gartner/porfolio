import Link from "next/link";
import MotionTransition from "./transition-components";
import { socialNetworks } from "@/data";
import Image from "next/image";

const Header = () => {
  return (
    <MotionTransition
      position="bottom"
      className="absolute z-40 inline-block w-full top-5 md:top-10"
    >
      <header>
        <div className="container justify-between max-w-6xl mx-auto sm:flex sm:px-6">
          <div className="flex px-4 justify-evenly sm:gap-4 md:gap-0">
            <Image
              src="/CirculoMaxiGartner.png"
              priority
              width={100}
              height={100}
              alt="Profile"
              className="rounded-full object-cover object-top md:hidden"
            />
            <Link href={"/"}>
              <h1 className="my-3 text-4xl font-bold text-center md:text-left">
                Developer
                <span className="block md:inline text-secondary">
                  {" "}
                  Full Stack
                </span>
              </h1>
            </Link>
          </div>
          <div className="flex items-center justify-center gap-7 mt-2 sm:mt-0">
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
