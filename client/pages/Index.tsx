import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Services from "@/components/home/Services";
import Work from "@/components/home/Work";
import Clients from "@/components/home/Clients";
import Cta from "@/components/home/Cta";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Work />
        <Clients />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
