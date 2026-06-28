"use client";

import { motion } from "framer-motion";

const matches = [
  {
    home: "Manchester City",
    away: "Arsenal",
    score: "2 - 1",
    minute: "72'",
  },
  {
    home: "Barcelona",
    away: "Real Madrid",
    score: "1 - 1",
    minute: "58'",
  },
  {
    home: "Bayern",
    away: "Dortmund",
    score: "3 - 2",
    minute: "84'",
  },
];

export default function LiveMatches() {
  return (
    <section className="bg-[#050505] py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="flex items-center gap-3 mb-10">
          <div className="w-3 h-3 rounded-full bg-red-500 animate-ping"></div>
          <h2 className="text-4xl font-bold text-white">
            LIVE MATCHES
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {matches.map((match, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.04,
                y: -8,
              }}
              className="rounded-3xl border border-green-500/20 bg-white/5 backdrop-blur-xl p-8 shadow-[0_0_30px_rgba(0,255,136,.08)]"
            >
              <div className="flex justify-between mb-6">

                <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full animate-pulse">
                  LIVE
                </span>

                <span className="text-green-400 font-bold">
                  {match.minute}
                </span>

              </div>

              <h3 className="text-white text-xl font-bold">
                {match.home}
              </h3>

              <div className="text-center my-6">

                <div className="text-5xl font-black text-green-400">
                  {match.score}
                </div>

              </div>

              <h3 className="text-white text-xl font-bold">
                {match.away}
              </h3>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}