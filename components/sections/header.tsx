"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import ArrowDown from "../arrow-down";
import RiseLogo from "../rise-logo";
import MobileMenu from "../mobile-menu";

export type NavLink = { name: string; dropDown: boolean; href: string; active?: boolean };

const Header = () => {
  const links: NavLink[] = [
    { name: "Home", dropDown: false, href: "#", active: true },
    { name: "Products", dropDown: true, href: "#" },
    { name: "Investment Club", dropDown: false, href: "#" },
    { name: "Blog", dropDown: false, href: "#" },
    { name: "About Us", dropDown: false, href: "#" },
    { name: "FAQs", dropDown: false, href: "#" },
  ];
  return (
    <header className="w-full bg-white  ">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2 xl:ml-10 text-primary">
          <RiseLogo />
        </Link>
        <nav className="hidden lg:flex gap-6">
          {links.map((link, i) => (
            <Link key={i} className="group relative flex items-center text-primary font-tomato-grotesk text-base tracking-wider font-normal " href={link.href}>
              {link.name}
              {link.dropDown ? <ArrowDown className=" ml-1" /> : null}
              <div className={cn(" absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-3 w-2 h-2 rounded-full bg-primary transition-all opacity-0", link.active && "opacity-100")}></div>
            </Link>
          ))}
        </nav>

        <MobileMenu links={links} />
      </div>
    </header>
  );
};

export default Header;
