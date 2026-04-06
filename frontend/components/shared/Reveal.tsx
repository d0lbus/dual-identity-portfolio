"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/cn";
import { fadeUp } from "@/lib/motion";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
};

export function Reveal({ children, className }: RevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
