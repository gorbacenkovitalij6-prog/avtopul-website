"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Building2, Award, Users, Target, CheckCircle, Calendar, MapPin, TrendingUp } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24">
        {/* Hero Section */}
        <section className="py-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
          </div>

          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
                <Building2 className="w-4 h-4 text-emerald-400" />
                <span className="text-sm text-emerald-400 font-medium">О компании</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                ООО <span className="gradient-text">"Автопул"</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Профессиональная компания по торговле легковыми и грузовыми автомобилями
                с пригоном из Европы. Мы делаем процесс покупки авто прозрачным и комфортным.
              </p>
            </div>

            {/* Company Stats */}
            <div className="grid md:grid-cols-4 gap-6 mb-16">
              <Card className="glass p-6 text-center border-white/20">
                <Calendar className="w-10 h-10 text-emerald-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-emerald-400 mb-2">2023</div>
                <div className="text-sm text-muted-foreground">Год основания</div>
              </Card>
              <Card className="glass p-6 text-center border-white/20">
                <Users className="w-10 h-10 text-orange-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-orange-400 mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Довольных клиентов</div>
              </Card>
              <Card className="glass p-6 text-center border-white/20">
                <TrendingUp className="w-10 h-10 text-teal-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-teal-400 mb-2">14 дней</div>
                <div className="text-sm text-muted-foreground">Средний срок доставки</div>
              </Card>
              <Card className="glass p-6 text-center border-white/20">
                <Award className="w-10 h-10 text-cyan-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-cyan-400 mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Юридическая чистота</div>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Наша <span className="gradient-text">история</span>
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    ООО "Автопул" была основана в 2023 году в городе Саратов с четкой миссией —
                    сделать покупку автомобилей из Европы доступной, прозрачной и безопасной для каждого клиента.
                  </p>
                  <p>
                    За короткое время работы мы зарекомендовали себя как надежный партнер в сфере
                    автомобильного импорта. Наша команда профессионалов имеет глубокие знания рынка
                    европейских автомобилей и многолетний опыт в логистике и таможенном оформлении.
                  </p>
                  <p>
                    Мы работаем напрямую с проверенными аукционами Германии, Польши, Бельгии и Нидерландов,
                    что позволяет нам предлагать клиентам лучшие цены и гарантировать качество каждого автомобиля.
                  </p>
                </div>
              </div>
              <Card className="glass p-8 border-white/20">
                <h3 className="text-2xl font-bold mb-6">Ключевые вехи</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Апрель 2023</div>
                      <div className="text-sm text-muted-foreground">
                        Регистрация ООО "Автопул" и начало деятельности
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-orange-400" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Лето 2023</div>
                      <div className="text-sm text-muted-foreground">
                        Первые 50 успешно доставленных автомобилей
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-teal-500/20 flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-teal-400" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">2024</div>
                      <div className="text-sm text-muted-foreground">
                        Расширение географии работы и партнерской сети
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">2025</div>
                      <div className="text-sm text-muted-foreground">
                        Более 500 довольных клиентов и новые направления
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Mission and Values */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Наши <span className="gradient-text">ценности</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="glass p-8 border-white/20">
                <Target className="w-12 h-12 text-emerald-400 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Наша миссия</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Сделать покупку автомобиля из Европы простой, безопасной и доступной для каждого.
                  Мы стремимся предоставить полный спектр услуг на каждом этапе — от выбора до
                  постановки на учет, обеспечивая максимальную прозрачность и контроль.
                </p>
              </Card>

              <Card className="glass p-8 border-white/20">
                <Award className="w-12 h-12 text-orange-400 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Наше видение</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Стать ведущей компанией по пригону автомобилей в Саратовской области и за ее пределами.
                  Мы хотим, чтобы каждый клиент рекомендовал нас своим друзьям и знакомым,
                  а наше имя ассоциировалось с качеством и надежностью.
                </p>
              </Card>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="glass p-6 border-white/20 glass-hover">
                <div className="w-14 h-14 rounded-xl bg-emerald-500/20 flex items-center justify-center mb-4">
                  <CheckCircle className="w-7 h-7 text-emerald-400" />
                </div>
                <h4 className="text-xl font-semibold mb-3">Прозрачность</h4>
                <p className="text-sm text-muted-foreground">
                  Фиксированные цены в договоре, никаких скрытых платежей. Полная отчетность на каждом этапе.
                </p>
              </Card>

              <Card className="glass p-6 border-white/20 glass-hover">
                <div className="w-14 h-14 rounded-xl bg-orange-500/20 flex items-center justify-center mb-4">
                  <Award className="w-7 h-7 text-orange-400" />
                </div>
                <h4 className="text-xl font-semibold mb-3">Качество</h4>
                <p className="text-sm text-muted-foreground">
                  Тщательная проверка каждого автомобиля перед покупкой. Работа только с надежными поставщиками.
                </p>
              </Card>

              <Card className="glass p-6 border-white/20 glass-hover">
                <div className="w-14 h-14 rounded-xl bg-teal-500/20 flex items-center justify-center mb-4">
                  <Users className="w-7 h-7 text-teal-400" />
                </div>
                <h4 className="text-xl font-semibold mb-3">Клиентоориентированность</h4>
                <p className="text-sm text-muted-foreground">
                  Индивидуальный подход к каждому клиенту. Поддержка 24/7 и помощь на всех этапах.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Company Info */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <Card className="glass p-8 md:p-12 border-white/20">
              <h2 className="text-3xl font-bold mb-8 text-center">Юридическая информация</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Полное наименование</div>
                  <div className="font-semibold">ООО "Автопул"</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">ИНН</div>
                  <div className="font-semibold">6453173404</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">ОГРН</div>
                  <div className="font-semibold">1236400004950</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Дата регистрации</div>
                  <div className="font-semibold">21 апреля 2023 года</div>
                </div>
                <div className="md:col-span-2">
                  <div className="text-sm text-muted-foreground mb-1 flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Юридический адрес
                  </div>
                  <div className="font-semibold">
                    410033, Саратовская область, г. Саратов, Международная ул., д. 26, помещ. 1
                  </div>
                </div>
                <div className="md:col-span-2">
                  <div className="text-sm text-muted-foreground mb-1">Виды деятельности</div>
                  <div className="font-semibold">
                    Торговля легковыми автомобилями и легкими автотранспортными средствами
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
