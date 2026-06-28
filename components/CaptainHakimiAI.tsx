"use client";

import Image from "next/image";
import { useState } from "react";

export default function CaptainHakimiAI() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6">
        {open && (
          <div className="mb-4 w-80 rounded-3xl border border-green-400/30 bg-black/90 p-5 text-white shadow-[0_0_40px_rgba(0,255,136,.25)] backdrop-blur-xl">
            <h3 className="font-bold text-green-400">Captain Hakimi AI</h3>
            <p className="mt-2 text-sm text-gray-300">
              Hi! Ask me anything about football.
            </p>

            <div className="mt-4 flex gap-2">
              <button className="rounded-xl bg-green-400 px-4 py-2 font-bold text-black">
                🎙 Voice
              </button>
              <button className="rounded-xl border border-green-400 px-4 py-2 text-green-400">
                Chat
              </button>
            </div>
          </div>
        )}

        <button
          onClick={() => setOpen(!open)}
          className="group relative block"
          aria-label="Open Captain Hakimi AI"
        >
          <Image
            src="/images/captain-hakimi.png"
            alt="Captain Hakimi AI"
            width={150}
            height={150}
            priority
            className="h-28 w-28 object-contain drop-shadow-[0_0_25px_rgba(0,255,136,.45)] transition duration-300 group-hover:scale-110 sm:h-36 sm:w-36 lg:h-44 lg:w-44"
          />

          <span className="absolute -right-1 top-2 flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-green-400 shadow-lg animate-bounce">
            💬
          </span>
        </button>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        button img {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}