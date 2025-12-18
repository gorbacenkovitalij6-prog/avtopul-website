"use client";

import { Car, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-16 px-4 border-t border-white/10">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                <Car className="w-6 h-6" />
              </div>
              <span className="text-2xl font-bold gradient-text">АВТОПУЛ</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Профессиональный пригон автомобилей из Европы. Работаем с 2023 года.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Услуги</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="#calculator" className="hover:text-emerald-400 transition-colors">
                  Калькулятор стоимости
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  Подбор автомобиля
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  Доставка из Европы
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  Таможенное оформление
                </a>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="font-semibold mb-4">Информация</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="/about" className="hover:text-emerald-400 transition-colors">
                  О компании
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  Отзывы клиентов
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  Блог
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  Политика конфиденциальности
                </a>
              </li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="font-semibold mb-4">Контакты</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-muted-foreground">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0 text-emerald-400" />
                <a href="tel:+78452000000" className="hover:text-emerald-400 transition-colors">
                  +7 (845) 200-00-00
                </a>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <Mail className="w-4 h-4 mt-1 flex-shrink-0 text-orange-400" />
                <a href="mailto:info@avtopul.ru" className="hover:text-orange-400 transition-colors">
                  info@avtopul.ru
                </a>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-teal-400" />
                <span>г. Саратов, ул. Международная, д. 26</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div>© {currentYear} ООО "Автопул". ИНН 6453173404. Все права защищены.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-emerald-400 transition-colors">
              Пользовательское соглашение
            </a>
            <a href="#" className="hover:text-emerald-400 transition-colors">
              Политика конфиденциальности
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
