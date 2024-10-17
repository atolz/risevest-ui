import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
// stroke={isOpen ? "#fff" : "var(--black)"}

export const MenuToggle = ({ isOpen, toggle, className }: { className?: string; isOpen: boolean; toggle: () => void }) => (
  <div className={cn("relative z-10", className)} onClick={toggle}>
    <svg width="26" height="26" viewBox="0 0 26 21">
      <motion.path
        fill="transparent"
        strokeWidth="3"
        stroke={isOpen ? "var(--black)" : "var(--black)"}
        strokeLinecap="round"
        variants={{
          closed: { d: "M 2 0 L 24 0" },
          open: { d: "M 2 16.5 L 17 2.5" },
        }}
      />
      <motion.path
        fill="transparent"
        strokeWidth="3"
        stroke={isOpen ? "var(--black)" : "var(--black)"}
        strokeLinecap="round"
        d="M 2 10.5 L 24 10.5"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <motion.path
        fill="transparent"
        strokeWidth="3"
        stroke={isOpen ? "var(--black)" : "var(--black)"}
        strokeLinecap="round"
        variants={{
          closed: { d: "M 2 21 L 24 21" },
          open: { d: "M 2 2.5 L 17 16.346" },
        }}
      />
    </svg>
  </div>
);
