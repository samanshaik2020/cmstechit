"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
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
import Intro from "@/components/intro/Intro";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  // Optional: Check if we've already shown the intro this session to avoid annoyance
  useEffect(() => {
    // You could use sessionStorage here to only show once per session
    // const hasShown = sessionStorage.getItem("introShown");
    // if (hasShown) setShowIntro(false);
  }, []);

  const handleIntroComplete = () => {
    setShowIntro(false);
    // sessionStorage.setItem("introShown", "true");
  };

  return (
    <main className="min-h-screen bg-background text-text selection:bg-accent selection:text-white">
      <AnimatePresence mode="wait">
        {showIntro ? (
          <Intro key="intro" onComplete={handleIntroComplete} />
        ) : (
          <>
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
          </>
        )}
      </AnimatePresence>
    </main>
  );
}

