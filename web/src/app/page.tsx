import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Partners from "@/components/sections/Partners";
import Services from "@/components/sections/Services";
import Values from "@/components/sections/Values";
import Portfolio from "@/components/sections/Portfolio";
import Testimonials from "@/components/sections/Testimonials";
import FadeIn from "@/components/animations/FadeIn";
import DashboardPreview from "@/components/sections/DashboardPreview";


export default function Home() {
  return (
    <main className="min-h-screen bg-background text-text selection:bg-accent selection:text-white">
      <Header />

      <FadeIn>
        <Hero />
      </FadeIn>

      <DashboardPreview />

      <FadeIn delay={0.2}>
        <Partners />
      </FadeIn>

      <FadeIn>
        <Services />
      </FadeIn>

      <FadeIn>
        <Values />
      </FadeIn>

      <FadeIn>
        <Portfolio />
      </FadeIn>

      <FadeIn>
        <Testimonials />
      </FadeIn>

      <FadeIn>
        <Footer />
      </FadeIn>
    </main>
  );
}
