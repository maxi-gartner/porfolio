"use client";

import { itemsNavbar } from "@/data";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const router = usePathname();
  return (
    <div className="fixed z-40 flex flex-col items-center justify-center w-full mt-auto h-max bottom-10">
      <nav>
        <div className="flex center justify-center gap-2 px-4 py-1 rounded-full bg-white/15 backdrop-blur-sm">
          {itemsNavbar.map((item) => (
            <div
              key={item.id}
              className={`px-3 py-2 transition duration-150 rounded-full cursor-pointer hover:bg-secondary  ${
                router === item.link && "bg-secondary"
              }`}
            >
              <Link href={item.link}>{item.icon}</Link>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
