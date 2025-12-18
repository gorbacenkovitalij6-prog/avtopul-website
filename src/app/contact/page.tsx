"use client";

import { Navbar } from "@/components/Navbar";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Свяжитесь <span className="gradient-text">с нами</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Оставьте заявку, и мы свяжемся с вами в течение 15 минут
            </p>
          </div>
        </div>
        <ContactForm />
        <Footer />
      </main>
    </>
  );
}
