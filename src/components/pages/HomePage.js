import HeroSection from "../sections/HeroSection";
import Specials from "../sections/Special";
import Testimonials from "../sections/Testimonail";
import About from "./About";

export default function Homepage() {
  return (
    <>
      <HeroSection />
      <main>
        <Specials />
        <Testimonials />
        <About />
      </main>
    </>
  );
}
