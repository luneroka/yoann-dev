import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <main id="top" className="min-h-screen px-4 pt-28">
        <div className="mx-auto max-w-6xl">HomePage</div>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
