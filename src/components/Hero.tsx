"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="inicio" className="h-screen w-full relative flex items-center justify-center overflow-hidden">
      {/* Background Image with Zoom & Dark Gradient overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/hero_dance.webp"
          alt="Dançarina contemporânea em movimento sob luzes dramáticas"
          fill
          priority
          sizes="100vw"
          className="object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-bg-dark/60 to-bg-dark z-10" />
      </div>

      {/* Hero Content */}
      <div className="max-w-4xl mx-auto px-6 text-center relative z-20 mt-16">
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block bg-primary/10 border border-primary text-primary text-[10px] md:text-xs font-semibold tracking-[0.25em] uppercase py-2 px-5 rounded-full mb-8"
        >
          O seu refúgio de arte e bem-estar
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-heading text-4xl sm:text-5xl md:text-7xl text-white leading-tight font-medium mb-6"
        >
          Desperte sua essência. <br />
          <span className="text-accent italic font-light">Revele seu movimento.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="text-text-muted text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Um estúdio de dança premium criado para você se desconectar do caos diário, expressar seus sentimentos e resgatar a elegância e a vitalidade que já existem em você.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#agendar"
            className="w-full sm:w-auto bg-primary hover:bg-primary-hover text-bg-dark text-xs font-bold tracking-widest uppercase py-4.5 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg-dark"
          >
            Agendar Minha Aula Cortesia
          </a>
          <a
            href="#manifesto"
            className="w-full sm:w-auto bg-transparent hover:bg-white/5 text-white border border-white/30 hover:border-primary text-xs font-bold tracking-widest uppercase py-4.5 px-8 rounded-full transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            Conhecer o Manifesto
          </a>
        </motion.div>
      </div>
    </section>
  );
}
