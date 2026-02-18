import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Inevitability from "@/components/sections/Inevitability";
import System from "@/components/sections/System";
import HowItWorks from "@/components/sections/HowItWorks";
import Filter from "@/components/sections/Filter";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <div className="section-divider" />
        <Problem />
        <div className="section-divider" />
        <Inevitability />
        <div className="section-divider" />
        <System />
        <div className="section-divider" />
        <HowItWorks />
        <div className="section-divider" />
        <Filter />
        <div className="section-divider" />
        <FAQ />
        <div className="section-divider" />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
