"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

interface GalleryItem {
  src: string;
  alt: string;
  title: string;
  category: string;
}

export default function Galeria() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const images: GalleryItem[] = [
    { src: "/assets/hero_dance.webp", alt: "Dançarina contemporânea em movimento sob luzes dramáticas", title: "Liberdade Contemporânea", category: "Arte" },
    { src: "/assets/dance_steps.webp", alt: "Passos de dança expressivos em movimento", title: "A Expressão nos Passos", category: "Técnica" },
    { src: "/assets/kids_ballet.webp", alt: "Crianças praticando ballet clássico", title: "Ballet Infantil", category: "Juvenil" },
    { src: "/assets/adult_dance.webp", alt: "Mulher adulta praticando dança em estúdio premium", title: "Conexão e Autocuidado", category: "Adulto" },
    { src: "/assets/teens_urban.webp", alt: "Grupo de jovens dançando hip-hop e street dance", title: "Danças Urbanas", category: "Juvenil" },
    { src: "/assets/belly_dance.webp", alt: "Dançarina praticando Dança do Ventre", title: "Dança do Ventre", category: "Adulto" },
  ];

  const handlePrev = useCallback(() => {
    setActiveIdx((prev) => (prev === null || prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const handleNext = useCallback(() => {
    setActiveIdx((prev) => (prev === null || prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  // Close lightbox on Escape key, navigate with arrows
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeIdx === null) return;
      if (e.key === "Escape") setActiveIdx(null);
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIdx, handlePrev, handleNext]);

  return (
    <section id="galeria" className="py-24 bg-bg-dark border-t border-border-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold uppercase text-xs tracking-widest mb-4 block">
            Nossos Registros
          </span>
          <h2 className="font-heading text-3xl md:text-5xl text-white font-medium mb-4">
            Galeria de <span className="text-accent italic font-light">Movimentos</span>
          </h2>
          <p className="text-text-muted text-sm md:text-base leading-relaxed">
            Vislumbre a atmosfera e a emoção capturadas no dia a dia do nosso estúdio. A beleza do movimento traduzida em imagens.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              onClick={() => setActiveIdx(idx)}
              className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-lg group"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-108"
              />
              {/* Blur/overlay effect on hover */}
              <div className="absolute inset-0 bg-bg-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                <span className="text-primary text-[10px] font-bold uppercase tracking-widest mb-2 border border-primary/20 py-1 px-3 rounded-full">
                  {img.category}
                </span>
                <h3 className="font-heading text-xl text-white font-medium mb-4">
                  {img.title}
                </h3>
                <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                  <Maximize2 size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={() => setActiveIdx(null)}
          >
            {/* Modal Controls */}
            <button
              onClick={(e) => { e.stopPropagation(); setActiveIdx(null); }}
              className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Fechar galeria"
            >
              <X size={20} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); handlePrev(); }}
              className="absolute left-6 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Imagem anterior"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
              className="absolute right-6 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Próxima imagem"
            >
              <ChevronRight size={24} />
            </button>

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-4xl aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[activeIdx].src}
                alt={images[activeIdx].alt}
                fill
                sizes="80vw"
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8">
                <span className="text-primary text-[10px] font-bold uppercase tracking-widest mb-1 block">
                  {images[activeIdx].category}
                </span>
                <h3 className="font-heading text-xl md:text-2xl text-white font-medium">
                  {images[activeIdx].title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
