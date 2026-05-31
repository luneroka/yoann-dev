import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Contact from "@/components/sections/Contact";
import Explorer from "@/components/sections/explorer/Explorer";
import Hero from "@/components/sections/hero/Hero";
import SkillsExpertise from "@/components/sections/SkillsExpertise";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main id="top">
        <Hero />
        <Explorer />
        <SkillsExpertise />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
