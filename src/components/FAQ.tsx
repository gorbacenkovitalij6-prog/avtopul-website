"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Сколько времени занимает доставка автомобиля?",
    answer: "Средний срок доставки составляет 14 дней с момента покупки автомобиля до границы РФ. Это включает оформление документов, логистику и таможенную очистку. Точный срок зависит от страны покупки и сложности оформления.",
  },
  {
    question: "Какие документы я получу после доставки?",
    answer: "Вы получите полный пакет документов: договор купли-продажи, таможенную декларацию, ПТС, сертификат соответствия ЭПТС, акт приема-передачи. Все документы легальные и позволяют беспрепятственно поставить автомобиль на учет в ГИБДД.",
  },
  {
    question: "Можно ли выбрать конкретный автомобиль?",
    answer: "Да, конечно! Мы работаем с крупнейшими европейскими аукционами и площадками. Вы можете прислать нам ссылку на понравившийся автомобиль, или мы подберем варианты по вашим критериям: марка, модель, год, бюджет, комплектация.",
  },
  {
    question: "Какие гарантии вы предоставляете?",
    answer: "Мы гарантируем юридическую чистоту автомобиля, отсутствие скрытых повреждений и соответствие описанию. Перед покупкой проводим детальную проверку истории авто. Все условия фиксируются в договоре, цена не меняется после подписания.",
  },
  {
    question: "Сколько стоят ваши услуги?",
    answer: "Стоимость зависит от страны покупки, стоимости автомобиля и объема двигателя. В среднем: доставка €600-900, таможенные пошлины около 54% от стоимости авто, утилизационный сбор от 3400₽. Используйте калькулятор на сайте для точного расчета.",
  },
  {
    question: "Помогаете ли вы с постановкой на учет в ГИБДД?",
    answer: "Да, мы предоставляем полное сопровождение вплоть до получения номеров. Помогаем собрать документы, записаться в ГИБДД, при необходимости можем представлять ваши интересы по доверенности.",
  },
];

export function FAQ() {
  return (
    <section className="py-12 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        <div className="glass p-8 rounded-2xl border-white/20">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-hover rounded-xl px-6 border-white/10"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-emerald-400 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
