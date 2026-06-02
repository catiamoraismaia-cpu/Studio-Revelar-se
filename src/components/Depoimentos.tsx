"use client";

import { motion } from "framer-motion";

interface Testimonial {
  text: string;
  initials: string;
  name: string;
  details: string;
}

export default function Depoimentos() {
  const testimonials: Testimonial[] = [
    {
      text: "Eu achava que tinha 'dois pés esquerdos' e que a dança não era para mim. No Revelar-se, encontrei um ambiente acolhedor, sem julgamentos, onde pude aprender no meu próprio ritmo. Hoje, as aulas são o meu momento sagrado de descompressão da semana.",
      initials: "RF",
      name: "Rodrigo F.",
      details: "Aluno de Dança de Salão (31 anos)",
    },
    {
      text: "A dança no Revelar-se foi um divisor de águas. O estúdio é um refúgio premium que me devolveu a conexão com o meu corpo e a minha autoestima. A didática sensível dos professores e a infraestrutura impecável fazem cada aula ser única.",
      initials: "JM",
      name: "Juliana M.",
      details: "Aluna de Dança do Ventre (42 anos)",
    },
  ];

  return (
    <section id="depoimentos" className="py-24 bg-bg-dark border-t border-border-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-primary font-semibold uppercase text-xs tracking-widest mb-4 block">
            Histórias de Sucesso
          </span>
          <h2 className="font-heading text-3xl md:text-5xl text-white font-medium mb-4">
            Depoimentos que nos <span className="text-accent italic font-light">emocionam</span>
          </h2>
          <p className="text-text-muted text-sm md:text-base leading-relaxed">
            A dança transforma vidas de formas profundas. Veja a experiência de quem já vive a rotina do Studio Revelar-se.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="glass-card rounded-2xl p-8 md:p-10 relative overflow-hidden group shadow-lg"
            >
              {/* Quote Mark Decor */}
              <div className="absolute top-2 left-6 text-7xl font-heading text-primary/10 select-none pointer-events-none transition-all duration-300 group-hover:text-primary/15 group-hover:scale-105">
                “
              </div>

              {/* Text */}
              <p className="font-heading text-lg md:text-xl italic leading-relaxed text-white relative z-10 mb-8 mt-2">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 relative z-10 border-t border-border-light/40 pt-6">
                <div className="w-12 h-12 rounded-full bg-[#1F1C26] border border-border-light text-primary flex items-center justify-center font-bold text-sm">
                  {t.initials}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">{t.name}</h4>
                  <p className="text-xs text-text-muted">{t.details}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
