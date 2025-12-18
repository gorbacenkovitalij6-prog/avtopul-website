"use client";

import { Search, FileText, Truck, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Поиск автомобиля",
    description: "Подбираем автомобиль по вашим критериям из проверенных аукционов Европы",
  },
  {
    icon: FileText,
    title: "Оформление документов",
    description: "Проверяем историю, юридическую чистоту и оформляем все необходимые документы",
  },
  {
    icon: Truck,
    title: "Доставка в РФ",
    description: "Организуем логистику, растаможку и доставку автомобиля до границы России",
  },
  {
    icon: CheckCircle,
    title: "Постановка на учет",
    description: "Помогаем с регистрацией в ГИБДД и передаем вам ключи от автомобиля",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Как это <span className="gradient-text">работает</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Простой и прозрачный процесс в 4 шага
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500/50 via-orange-500/50 to-teal-500/50" style={{ top: "4rem" }} />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="relative">
                <div className="glass glass-hover p-6 rounded-2xl text-center h-full flex flex-col">
                  {/* Step number */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-xl font-bold shadow-lg shadow-emerald-500/50 z-10">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="mt-8 mb-6 flex justify-center">
                    <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-emerald-400" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
