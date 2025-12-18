"use client";

import { ArrowRight, Car, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Hero() {
  const scrollToCalculator = () => {
    document.getElementById("calculator")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-32 pb-20">
      {/* Background car image - fixed */}
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background z-10" />
        <Image
          src="/hero-car.jpg"
          alt="Premium car"
          fill
          className="object-cover object-center opacity-20"
          priority
        />
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden z-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }} />
      </div>

      <div className="container mx-auto relative z-30">
        <div className="max-w-6xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
            </span>
            <span className="text-sm text-emerald-400 font-medium">Работаем с 2023 года</span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Пригон автомобилей <br />
            <span className="gradient-text">из Европы под ключ</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Профессиональная доставка авто из Германии, Польши, Бельгии и Нидерландов.
            Полное сопровождение и юридическая чистота.
          </p>

          {/* Quick stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto pt-8">
            <div className="glass glass-hover p-6 rounded-2xl">
              <Car className="w-10 h-10 text-emerald-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-emerald-400">500+</div>
              <div className="text-sm text-muted-foreground mt-2">Доставленных авто</div>
            </div>
            <div className="glass glass-hover p-6 rounded-2xl">
              <Zap className="w-10 h-10 text-orange-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-orange-400">14 дней</div>
              <div className="text-sm text-muted-foreground mt-2">Средний срок доставки</div>
            </div>
            <div className="glass glass-hover p-6 rounded-2xl">
              <Shield className="w-10 h-10 text-teal-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-teal-400">100%</div>
              <div className="text-sm text-muted-foreground mt-2">Юридическая чистота</div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              onClick={scrollToCalculator}
              className="gradient-primary text-lg h-14 px-8 hover:shadow-xl hover:shadow-emerald-500/50 transition-all"
            >
              Рассчитать стоимость
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="text-lg h-14 px-8 glass glass-hover"
            >
              Получить консультацию
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-30">
        <div className="w-6 h-10 border-2 border-emerald-400/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-emerald-400 rounded-full" />
        </div>
      </div>
    </section>
  );
}
