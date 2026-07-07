"use client";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import { motion } from "motion/react";

export function LayoutTextFlipDemo() {
  return (
    <div>
       <h1 className="font-medium text-emerald-700/80 text-center text-[1.25rem] leading-[1] uppercase font-bold tracking-[4]">
            Chariz Dianne Falco
        </h1>
      <motion.div className="relative mx-4 my-4 flex flex-col items-center justify-center gap-4 text-center sm:mx-0 sm:mb-0 sm:flex-row">
        <LayoutTextFlip
          text="She's the "
          words={["Project Manager", "Data Analyst", "UI/UX Designer", "Full-Stack Developer", "AI Specialist", "IoT Developer", "Flutter Enthusiast"]}
        />
      </motion.div>
      <p className="mt-4 text-center text-base text-neutral-600 dark:text-neutral-400">
        I love creating web apps, embedded systems, and doing machine learning. Professionally, I enjoy full-stack development — but what genuinely excites me is bridging the gap between hardware and software to solve real-world problems.
      </p>
    </div>
  );
}
