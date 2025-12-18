"use client";

import { Navbar } from "@/components/Navbar";
import { HowItWorks } from "@/components/HowItWorks";
import { Footer } from "@/components/Footer";

export default function ProcessPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Процесс <span className="gradient-text">работы</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Простой и прозрачный путь к вашему автомобилю в 4 шага
            </p>
          </div>
        </div>
        <HowItWorks />
        <Footer />
      </main>
    </>
  );
}
