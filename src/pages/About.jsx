import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutHero from "../components/AboutHero";
import AboutServices from "../components/AboutServices";
import AboutCTA from "../components/AboutCTA";

export default function About() {
  return (
    <>
      <Navbar />
      <AboutHero />
      <AboutServices />
      <AboutCTA />
      <Footer />
    </>
  );
}
