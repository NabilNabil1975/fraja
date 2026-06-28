import BackgroundEffects from "@/components/BackgroundEffects";
import CaptainHakimiAI from "@/components/CaptainHakimiAI";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LiveMatches from "@/components/LiveMatches";
import Navbar from "@/components/Navbar";
import NewsTicker from "@/components/NewsTicker";
import TopLeagues from "@/components/TopLeagues";
import TrendingPlayers from "@/components/TrendingPlayers";

export default function Home() {
  return (
    <main className="bg-[#050505] text-white">
      <BackgroundEffects />
      <Navbar />
      <Hero />
      <NewsTicker />
      <LiveMatches />
      <TopLeagues />
      <TrendingPlayers />
      <CaptainHakimiAI />
      <Footer />
    </main>
  );
}