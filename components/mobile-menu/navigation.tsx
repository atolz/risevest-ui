import { motion } from "framer-motion";
import Link from "next/link";
import { NavLink } from "../sections/header";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 40,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const Navigation = ({ links = [] }: { links: NavLink[] }) => {
  return (
    <motion.nav className=" flex flex-col gap-4 ml-auto relative z-10 w-full">
      {links.map((link, i) => (
        <motion.div key={i} variants={variants}>
          <Link className="transition-colors hover:text-foreground/90 text-white font-tomato-grotesk font-medium text-2xl" key={link.name} href={link.href}>
            {link.name}
          </Link>
        </motion.div>
      ))}
    </motion.nav>
  );
};
