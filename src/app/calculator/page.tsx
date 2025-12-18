"use client";

import { Navbar } from "@/components/Navbar";
import { CostCalculator } from "@/components/CostCalculator";
import { Footer } from "@/components/Footer";

export default function CalculatorPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Калькулятор <span className="gradient-text">стоимости</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Рассчитайте примерную стоимость пригона вашего автомобиля из Европы
            </p>
          </div>
        </div>
        <CostCalculator />
        <Footer />
      </main>
    </>
  );
}
