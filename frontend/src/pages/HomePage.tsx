import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Contact from "@/components/sections/Contact";
import Explorer from "@/components/sections/explorer/Explorer";
import Hero from "@/components/sections/hero/Hero";
import Journey from "@/components/sections/Journey";
import SkillsExpertise from "@/components/sections/SkillsExpertise";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main id="top">
        <div className="bg-primary/5">
          <Hero />
          <Journey />
        </div>
        <Explorer />
        <SkillsExpertise />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
