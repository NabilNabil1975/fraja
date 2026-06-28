"use client";

import Image from "next/image";
import { useState } from "react";

type Message = {
  role: "assistant" | "user";
  content: string;
};

const quickQuestions = [
  "Who plays today?",
  "Show Botola standings",
  "Top scorers this week",
  "Best Moroccan players abroad",
  "Explain offside",
  "Explain VAR",
];

function getAnswer(question: string): string {
  const q = question.toLowerCase();

  if (q.includes("plays today")) {
    return "Today's key matches include Raja vs Wydad in Botola, Manchester City vs Arsenal, and Real Madrid vs Barcelona. Once live providers are connected, I will show exact kickoff times and live scores.";
  }

  if (q.includes("botola")) {
    return "Botola Pro currently includes Raja Casablanca, Wydad Casablanca, FAR Rabat, RS Berkane, FUS Rabat, and Maghreb Fes in our mock engine. Full standings will load automatically once the football provider is connected.";
  }

  if (q.includes("scorers")) {
    return "Top scorers will be pulled from the Football Engine. FRAJA is ready to connect scorer data from API-Football, Sportmonks, Football-Data, or the manual dashboard provider.";
  }

  if (q.includes("moroccan")) {
    return "Top Moroccan players abroad include Achraf Hakimi and other Atlas Lions. Later I will rank them using minutes played, goals, assists, ratings, club strength, and current form.";
  }

  if (q.includes("offside")) {
    return "Offside happens when an attacking player is nearer to the opponent's goal than both the ball and the second-last defender at the moment the ball is played to them, unless they are level, in their own half, or not interfering with play.";
  }

  if (q.includes("var")) {
    return "VAR checks clear and obvious errors related to goals, penalties, direct red cards, and mistaken identity. The referee can review the incident before confirming or changing the decision.";
  }

  return "I can help with matches, players, leagues, tactics, transfers, and football rules.";
}

export default function AIChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Salam! I'm Captain Hakimi. Ask me anything about football.",
    },
  ]);

  return (
    <main className="min-h-screen bg-[#050505] px-6 py-10 text-white">
      <section className="mx-auto max-w-5xl">
        <div className="flex items-center gap-4">
          <Image
            src="/images/captain-hakimi.png"
            alt="Captain Hakimi"
            width={80}
            height={80}
            priority
            className="rounded-full object-contain drop-shadow-[0_0_25px_rgba(0,255,136,.5)]"
            style={{ width: "80px", height: "80px" }}
          />

          <div>
            <p className="text-green-400">Online</p>
            <h1 className="text-4xl font-black">Captain Hakimi AI</h1>
          </div>
        </div>

        <div className="mt-8 rounded-3xl border border-green-400/20 bg-white/5 p-6">
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`rounded-2xl border p-4 ${
                  message.role === "assistant"
                    ? "border-green-400/20 bg-black/40 text-gray-200"
                    : "border-white/10 bg-green-400/10 text-white"
                }`}
              >
                {message.content}
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {quickQuestions.map((question) => (
              <button
                key={question}
                onClick={() =>
                  setMessages((prev) => [
                    ...prev,
                    { role: "user", content: question },
                    {
                      role: "assistant",
                      content: getAnswer(question),
                    },
                  ])
                }
                className="rounded-xl border border-green-400/30 bg-black/40 px-4 py-3 text-left transition hover:bg-green-400 hover:text-black"
              >
                {question}
              </button>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}