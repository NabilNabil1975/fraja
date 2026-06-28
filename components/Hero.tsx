"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#00ff8830,transparent_70%)]" />

      <div className="relative max-w-7xl mx-auto px-6 py-36 text-center">

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-7xl md:text-8xl font-black tracking-tight"
        >
          EXPERIENCE
          <br />
          <span className="text-green-400 drop-shadow-[0_0_20px_#00ff88]">
            FOOTBALL
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .4 }}
          className="mt-8 text-gray-400 text-xl max-w-3xl mx-auto"
        >
          Live scores, breaking news, AI insights, player statistics,
          transfers and everything football in one futuristic platform.
        </motion.p>

        <motion.div
          initial={{ opacity:0,y:30 }}
          animate={{ opacity:1,y:0 }}
          transition={{ delay:.7 }}
          className="mt-12 flex justify-center gap-6"
        >
          <button className="bg-green-400 text-black px-8 py-4 rounded-xl font-bold hover:scale-105 transition">
            Watch Live
          </button>

          <button className="border border-green-400 text-green-400 px-8 py-4 rounded-xl hover:bg-green-400 hover:text-black transition">
            Explore
          </button>
        </motion.div>

      </div>
    </section>
  );
}