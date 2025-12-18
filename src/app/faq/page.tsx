"use client";

import { Navbar } from "@/components/Navbar";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Часто задаваемые <span className="gradient-text">вопросы</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ответы на популярные вопросы о пригоне автомобилей из Европы
            </p>
          </div>
        </div>
        <FAQ />
        <Footer />
      </main>
    </>
  );
}
