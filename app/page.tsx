import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import Intro from "@/components/sections/Intro";
import About from "@/components/sections/About";
import Office from "@/components/sections/Office";
import Services from "@/components/sections/Services";
import CTA from "@/components/sections/CTA";
import FAQ from "@/components/sections/FAQ";

export default function Home() {
  return (
    <>
      <Header />

      <main id="main-content">
        <Hero />
        <Intro />
        <About />
        <Office />
        <Services />
        <CTA />
        <FAQ />
      </main>

      <Footer />
    </>
  );
}
