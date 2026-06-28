"use client";

import { motion } from "framer-motion";

export default function BackgroundEffects() {
  return (
    <>
      <div className="fixed inset-0 -z-50 bg-[#040404]" />

      <div className="fixed inset-0 -z-40 overflow-hidden">

        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -60, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 18,
          }}
          className="absolute w-[700px] h-[700px] rounded-full bg-green-500/15 blur-[180px] left-[-150px] top-[-150px]"
        />

        <motion.div
          animate={{
            x: [0, -120, 0],
            y: [0, 80, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 20,
          }}
          className="absolute w-[650px] h-[650px] rounded-full bg-cyan-500/10 blur-[180px] right-[-150px] bottom-[-150px]"
        />

      </div>
    </>
  );
}