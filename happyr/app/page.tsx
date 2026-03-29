import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Gallery from "@/components/Gallery";
import Moats from "@/components/Moats";
import Financials from "@/components/Financials";
import Timeline from "@/components/Timeline";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Problem />
      <Solution />
      <Gallery />
      <Moats />
      <Financials />
      <Timeline />
      <CTA />
      <Footer />
    </main>
  );
}
