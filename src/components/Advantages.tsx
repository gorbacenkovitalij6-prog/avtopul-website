"use client";

import { Shield, Clock, Wallet, FileCheck, Headphones, Trophy } from "lucide-react";

const advantages = [
  {
    icon: Shield,
    title: "Юридическая чистота",
    description: "Полная проверка истории автомобиля, гарантия отсутствия ограничений",
    color: "emerald",
  },
  {
    icon: Clock,
    title: "Быстрая доставка",
    description: "Средний срок доставки 14 дней от момента покупки до границы РФ",
    color: "orange",
  },
  {
    icon: Wallet,
    title: "Прозрачные цены",
    description: "Никаких скрытых платежей, фиксируем цену в договоре",
    color: "teal",
  },
  {
    icon: FileCheck,
    title: "Полное сопровождение",
    description: "Помощь на всех этапах: от поиска до постановки на учет в ГИБДД",
    color: "cyan",
  },
  {
    icon: Headphones,
    title: "24/7 поддержка",
    description: "Всегда на связи, отвечаем на вопросы в любое время",
    color: "amber",
  },
  {
    icon: Trophy,
    title: "Опыт работы",
    description: "Более 500 успешно доставленных автомобилей с 2023 года",
    color: "lime",
  },
];

export function Advantages() {
  return (
    <section className="py-24 px-4 relative">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Почему выбирают <span className="gradient-text">нас</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Мы обеспечиваем высокое качество услуг на каждом этапе
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <div
                key={advantage.title}
                className="glass glass-hover p-8 rounded-2xl group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-14 h-14 rounded-xl bg-${advantage.color}-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-7 h-7 text-${advantage.color}-400`} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{advantage.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{advantage.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
