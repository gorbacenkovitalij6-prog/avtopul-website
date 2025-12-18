"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { YandexMap } from "@/components/YandexMap";
import { Loader2, Send, Phone, Mail, MessageSquare, MapPin } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/send-telegram", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", phone: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Свяжитесь <span className="gradient-text">с нами</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Оставьте заявку, и мы свяжемся с вами в течение 15 минут
          </p>
        </div>

        {/* Yandex Map Section */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <MapPin className="w-6 h-6 text-emerald-400" />
              <h3 className="text-2xl font-bold">Как нас найти</h3>
            </div>
            <a
              href="https://yandex.ru/maps/?rtext=~51.518463,46.047321"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-emerald-400 hover:text-emerald-300 transition-colors hidden md:flex items-center gap-1"
            >
              Построить маршрут
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
          <Card className="glass border-white/20 overflow-hidden h-[400px] md:h-[500px]">
            <YandexMap className="w-full h-full" />
          </Card>
          <div className="mt-4 text-center md:hidden">
            <a
              href="https://yandex.ru/maps/?rtext=~51.518463,46.047321"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-emerald-400 hover:text-emerald-300 transition-colors inline-flex items-center gap-1"
            >
              Построить маршрут
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact info */}
          <div className="space-y-6">
            <Card className="glass p-8 border-white/20">
              <h3 className="text-2xl font-bold mb-6">Контактная информация</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Телефон</div>
                    <a href="tel:+78452000000" className="text-lg font-semibold hover:text-emerald-400 transition-colors">
                      +7 (845) 200-00-00
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Email</div>
                    <a href="mailto:info@avtopul.ru" className="text-lg font-semibold hover:text-orange-400 transition-colors">
                      info@avtopul.ru
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-teal-500/20 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-6 h-6 text-teal-400" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Telegram</div>
                    <a href="https://t.me/avtopul_saratov" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold hover:text-teal-400 transition-colors">
                      @avtopul_saratov
                    </a>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="glass p-8 border-white/20">
              <h3 className="text-xl font-bold mb-4">Часы работы</h3>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex justify-between">
                  <span>Пн - Пт:</span>
                  <span className="font-semibold">09:00 - 20:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Сб - Вс:</span>
                  <span className="font-semibold">10:00 - 18:00</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Form */}
          <Card className="glass p-8 border-white/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-3">
                <Label htmlFor="name">Ваше имя</Label>
                <Input
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Иван Иванов"
                  className="glass border-white/20 h-12"
                />
              </div>

              <div className="space-y-3">
                <Label htmlFor="phone">Телефон</Label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+7 (900) 123-45-67"
                  className="glass border-white/20 h-12"
                />
              </div>

              <div className="space-y-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="example@mail.com"
                  className="glass border-white/20 h-12"
                />
              </div>

              <div className="space-y-3">
                <Label htmlFor="message">Сообщение</Label>
                <textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Расскажите, какой автомобиль вас интересует..."
                  className="w-full min-h-32 glass border-white/20 rounded-lg px-4 py-3 bg-transparent resize-none focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              {submitStatus === "success" && (
                <div className="p-4 rounded-lg bg-emerald-500/20 border border-emerald-500/50 text-emerald-400 text-sm">
                  Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="p-4 rounded-lg bg-red-500/20 border border-red-500/50 text-red-400 text-sm">
                  Произошла ошибка. Попробуйте позже или свяжитесь с нами по телефону.
                </div>
              )}

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full gradient-primary h-12 text-base hover:shadow-xl hover:shadow-emerald-500/50 transition-all"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Отправка...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    Отправить заявку
                  </>
                )}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
