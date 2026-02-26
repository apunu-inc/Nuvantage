import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Approach from "../components/Approach";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features /> <Approach />
      <CTA />
      <Footer />
    </>
  );
}
