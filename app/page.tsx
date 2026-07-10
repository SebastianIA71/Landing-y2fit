import Bench from "@/components/Bench";
import CoachChat from "@/components/CoachChat";
import CtaBand from "@/components/CtaBand";
import DemoPinned from "@/components/DemoPinned";
import FanShowcase from "@/components/FanShowcase";
import Finale from "@/components/Finale";
import Footer from "@/components/Footer";
import GrainOverlay from "@/components/GrainOverlay";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import MonumentalType from "@/components/MonumentalType";
import Nav from "@/components/Nav";
import PlanSection from "@/components/PlanSection";
import PreviouslyOn from "@/components/PreviouslyOn";
import StickyCta from "@/components/StickyCta";
import Stories from "@/components/Stories";
import StreakSection from "@/components/StreakSection";
import TheTwist from "@/components/TheTwist";

const MARQUEE_1 = ["Temporada 1", "Episodio 12", "Racha 23 días", "Press banca +12 kg", "Coach Y en línea"];
const MARQUEE_2 = ["Fichajes de esta temporada", "Álvaro · Extremo", "Marta · Base", "Iker · Portero"];

export default function Home() {
  return (
    <main className="relative isolate overflow-hidden bg-ink text-fog">
      <GrainOverlay />
      <Nav />
      <StickyCta />

      <Hero />
      <PreviouslyOn />
      <TheTwist />
      <Marquee items={MARQUEE_1} />
      <PlanSection />
      <DemoPinned />
      <CtaBand text="Así, cada día de entrenamiento." />
      <FanShowcase />
      <MonumentalType />
      <CoachChat />
      <StreakSection />
      <Marquee items={MARQUEE_2} reverse />
      <Stories />
      <Bench />
      <Finale />
      <Footer />
    </main>
  );
}
