import { cn } from "@/lib/utils";
import { motion as m } from "framer-motion";
import { ReactNode } from "react";

type PullUpProps = { whileInView?: boolean; staggerChildren?: number; viewPortProps?: { amount?: number; once?: boolean }; delay?: number; className?: string; children: ReactNode };

export const PullUp = ({ whileInView, staggerChildren = 0.2, viewPortProps = { once: true }, delay = 0, className, children }: PullUpProps) => {
  const pullUpVariants = {
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delay,
      },
    },
    hidden: {},
  };
  return (
    <m.div
      className={cn(className)}
      transition={{ duration: 10 }}
      variants={pullUpVariants}
      initial="hidden"
      animate={whileInView ? undefined : "show"}
      whileInView={whileInView ? "show" : undefined}
      viewport={viewPortProps}
    >
      {children}
    </m.div>
  );
};

type PullUpItemProps = { y?: number; delay?: number; duration?: number; clipBox?: boolean; className?: string; children: ReactNode };

export const PullUpItem = ({ y = 50, duration = 1, clipBox, className, children }: PullUpItemProps) => {
  const pullUpItemVariants = {
    show: {
      y: 0,
      opacity: 1,
      ease: "easeOut",
      transition: {
        ease: "easeInOut",
        stiffness: 0,
        restDelta: 30,
        restSpeed: 10,
        duration: duration,
      },
    },
    hidden: {
      y: y,
      opacity: 0,
      ease: "easeOut",
    },
  };
  return (
    <m.div className={cn(className, clipBox && " clip-box")} variants={pullUpItemVariants} transition={{ duration: 8 }}>
      {children}
    </m.div>
  );
};
