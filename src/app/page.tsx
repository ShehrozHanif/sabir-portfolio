import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Stats from "@/components/Stats";
import YouTube from "@/components/YouTube";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="noise-overlay relative">
        <Hero />
        <Stats />
        <Portfolio />
        <About />
        <Services />
        <YouTube />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
