import Comparison from "@/components/Comparison";
import FAQ from "@/components/FAQ";
import FeatureGrid from "@/components/FeatureGrid";
import FinalCTA, { MidCTA } from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductShowcase from "@/components/ProductShowcase";
import ScrollDemo from "@/components/ScrollDemo";
import StorySection from "@/components/StorySection";
import Testimonials from "@/components/Testimonials";
import TrustBar from "@/components/TrustBar";

export default function Home() {
  return (
    <main className="relative isolate overflow-hidden bg-ink text-fog">
      <div className="noise" />
      <Header />
      <Hero />
      <TrustBar />
      <StorySection />
      <ProductShowcase />
      <FeatureGrid />
      <ScrollDemo />
      <Testimonials />
      <Comparison />
      <MidCTA />
      <FAQ />
      <FinalCTA />
      <Footer />
      <a
        href="#descarga"
        className="fixed bottom-4 left-4 right-4 z-40 rounded-full bg-volt px-5 py-4 text-center text-sm font-black uppercase text-ink shadow-neon md:hidden"
      >
        Empieza gratis
      </a>
    </main>
  );
}
