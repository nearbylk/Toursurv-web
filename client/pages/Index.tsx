import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Services from "@/components/home/Services";
import Work from "@/components/home/Work";
import Clients from "@/components/home/Clients";
import Cta from "@/components/home/Cta";
import Techstack from "@/components/home/Techstack";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Index() {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Header />
      <main className="overflow-hidden pt-20 md:pt-24">
        {/* Hero: lighter reveal — it's already in view on load */}
        <ScrollReveal distance={24} duration={0.6} threshold={0.05}>
          <Hero />
        </ScrollReveal>

        {/* About */}
        <ScrollReveal delay={0.05} threshold={0.1}>
          <About />
        </ScrollReveal>

        {/* Services */}
        <ScrollReveal delay={0.05} threshold={0}>
          <Services />
        </ScrollReveal>

        {/* Tech Stack */}
        <ScrollReveal delay={0.05} threshold={0.1}>
          <Techstack />
        </ScrollReveal>

        {/* Work / Portfolio */}
        <ScrollReveal delay={0.05} threshold={0.1}>
          <Work />
        </ScrollReveal>

        {/* Clients */}
        <ScrollReveal delay={0.05} threshold={0.1}>
          <Clients />
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal delay={0.05} threshold={0.1}>
          <Cta />
        </ScrollReveal>
      </main>
      <Footer />
    </div>
  );
}
