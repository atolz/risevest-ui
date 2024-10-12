import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React, { ReactNode } from "react";

type Props = { duration?: number; viewPortProps?: { amount?: number; once?: boolean }; className?: string; delay?: number; children: ReactNode };

const FadeIn = ({ duration = 0.5, viewPortProps, delay = 0, className, children }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={!viewPortProps ? { opacity: 1 } : undefined}
      whileInView={viewPortProps ? { opacity: 1 } : undefined}
      transition={{ delay: delay, duration: duration }}
      viewport={viewPortProps}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
