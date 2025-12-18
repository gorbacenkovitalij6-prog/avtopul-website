"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Car, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Главная", href: "/" },
    { label: "О компании", href: "/about" },
    { label: "Калькулятор", href: "/calculator" },
    { label: "Преимущества", href: "/advantages" },
    { label: "Процесс", href: "/process" },
    { label: "Работы", href: "/examples" },
    { label: "FAQ", href: "/faq" },
    { label: "Контакты", href: "/contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "glass border-b border-white/10 py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                <Car className="w-6 h-6" />
              </div>
              <span className="text-2xl font-bold gradient-text">АВТОПУЛ</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-6">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors ${
                    pathname === item.href
                      ? "text-emerald-400"
                      : "text-foreground/80 hover:text-emerald-400"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <Link href="/contact">
                <Button className="gradient-primary hover:shadow-lg hover:shadow-emerald-500/50 transition-all">
                  Получить консультацию
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-10 h-10 rounded-lg glass glass-hover flex items-center justify-center"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Content */}
        <div
          className={`absolute top-20 right-4 left-4 glass rounded-2xl border border-white/20 p-6 transform transition-all duration-300 ${
            isMobileMenuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-4 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-4">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-left px-4 py-3 rounded-lg glass-hover font-medium transition-colors ${
                  pathname === item.href
                    ? "text-emerald-400"
                    : "text-foreground/90 hover:text-emerald-400"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="h-px bg-white/10 my-2" />
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
              <Button className="w-full gradient-primary hover:shadow-lg hover:shadow-emerald-500/50">
                Получить консультацию
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
