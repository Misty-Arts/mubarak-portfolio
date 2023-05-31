import About from "@/components/LandingPage/About";
import Contact from "@/components/LandingPage/Contact";
import Home from "@/components/LandingPage/Home";
import Portfolio from "@/components/LandingPage/Portfolio";
import Testimonial from "@/components/LandingPage/Testimonial";

export default function HomePage() {
  return (
    <>
      <Home />
      <Portfolio />
      <About />
      <Testimonial />
      <Contact />
    </>
  );
}
