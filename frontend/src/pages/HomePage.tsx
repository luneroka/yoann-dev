import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main id="top">
        <Hero />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
