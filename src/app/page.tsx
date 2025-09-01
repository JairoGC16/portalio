import Hero from "../components/Hero";
import Projects from "../components/Projects";
import About from "../components/About";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="font-sans bg-slate-50 min-h-screen flex flex-col items-center select-none justify-center px-2 sm:px-4 md:px-8 lg:px-24 xl:px-40 pt-16">
        <div className="w-full max-w-6xl flex flex-col gap-8 md:gap-12 text-slate-900">
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Skills />
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}
