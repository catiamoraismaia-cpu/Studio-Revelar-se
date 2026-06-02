"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Check which section is in view
      const sections = ["inicio", "manifesto", "publico", "modalidades", "studio", "professores", "depoimentos", "agendar"];
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.clientHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#manifesto", label: "Manifesto", id: "manifesto" },
    { href: "#publico", label: "Para Quem", id: "publico" },
    { href: "#modalidades", label: "Modalidades", id: "modalidades" },
    { href: "#studio", label: "O Studio", id: "studio" },
    { href: "#professores", label: "Professores", id: "professores" },
    { href: "#depoimentos", label: "Depoimentos", id: "depoimentos" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg-dark/85 backdrop-blur-md py-4 border-b border-border-light shadow-lg"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#inicio" className="font-heading text-xl md:text-2xl font-semibold tracking-wider text-white">
          Estúdio de Dança <span className="text-primary font-bold">REVELAR-SE</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium tracking-wide transition-colors relative py-1 hover:text-white ${
                activeSection === link.id ? "text-white" : "text-text-muted"
              }`}
            >
              {link.label}
              {activeSection === link.id && (
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-primary" />
              )}
            </a>
          ))}
          <a
            href="#agendar"
            className="bg-primary hover:bg-primary-hover text-bg-dark text-xs font-semibold tracking-widest uppercase py-3 px-6 rounded-full transition-all duration-300 shadow-md hover:shadow-primary/25 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg-dark"
          >
            Aula Cortesia
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md p-1"
          aria-label={isOpen ? "Fechar Menu" : "Abrir Menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Drawer */}
      <div
        className={`lg:hidden fixed top-[73px] left-0 w-full h-[calc(100vh-73px)] bg-bg-dark border-t border-border-light px-6 py-10 flex flex-col gap-6 transition-all duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className={`text-lg font-medium tracking-wide transition-colors ${
              activeSection === link.id ? "text-primary font-semibold" : "text-text-muted hover:text-white"
            }`}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#agendar"
          onClick={() => setIsOpen(false)}
          className="bg-primary hover:bg-primary-hover text-bg-dark text-center text-sm font-semibold tracking-widest uppercase py-4 px-6 rounded-full transition-all duration-300 mt-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          Agendar Aula Cortesia
        </a>
      </div>
    </header>
  );
}
