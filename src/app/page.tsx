"use client";

import { Navbar } from "@/components/Navbar";
import { CostCalculator } from "@/components/CostCalculator";
import { ContactForm } from "@/components/ContactForm";
import { CarExamples } from "@/components/CarExamples";
import { FAQ } from "@/components/FAQ";
import { Advantages } from "@/components/Advantages";
import { HowItWorks } from "@/components/HowItWorks";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <CostCalculator />
        <Advantages />
        <HowItWorks />
        <CarExamples />
        <FAQ />
        <ContactForm />
        <Footer />
      </main>
    </>
  );
}
