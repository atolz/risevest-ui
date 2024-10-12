import { useEffect, useState } from "react";
import { MenuToggle } from "./toggle";
import { Navigation } from "./navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { NavLink } from "../sections/header";
import RiseLogo from "../rise-logo";

type Props = { links: NavLink[] };

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 74px 1.6rem)`,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.2,
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(0px at 74px 1.6rem)",
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const MobileMenu = ({ links }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      window.scrollTo(0, 0);
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);
  return (
    <motion.div animate={isOpen ? "open" : "closed"} initial={false} custom={500} className="z-10 overscroll-contain lg:hidden">
      <MenuToggle isOpen={isOpen} className="relative" toggle={() => setIsOpen((val) => !val)} />
      {isOpen ? <div onClick={() => setIsOpen(false)} className=" fixed inset-0"></div> : null}
      <motion.div className="fixed px-4 py-6 pb-10 clip-box overflow-hidden top-0 right-0 flex flex-col w-full min-h-[50vh] bg-primary shadow-sm" variants={sidebar}>
        <RiseLogo className=" text-white mb-8 shrink-0" />
        <Navigation links={links} />
        <img src="/rise-footer.png" className={cn(` absolute bottom-0 left-0 transition-all w-full h-auto`, isOpen ? " opacity-100" : "opacity-0")} />
      </motion.div>
    </motion.div>
  );
};

export default MobileMenu;
