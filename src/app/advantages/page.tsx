"use client";

import { Navbar } from "@/components/Navbar";
import { Advantages } from "@/components/Advantages";
import { Footer } from "@/components/Footer";

export default function AdvantagesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Наши <span className="gradient-text">преимущества</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Что делает нас лучшими в сфере пригона автомобилей из Европы
            </p>
          </div>
        </div>
        <Advantages />
        <Footer />
      </main>
    </>
  );
}
