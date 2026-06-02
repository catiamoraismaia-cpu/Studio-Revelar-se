"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Modalidade {
  image: string;
  alt: string;
  title: string;
  description: string;
}

export default function Modalidades() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const list: Modalidade[] = [
    {
      image: "/assets/couple_sertanejo.webp",
      alt: "Casal dançando Sertanejo",
      title: "Sertanejo",
      description: "Descubra a arte da conexão a dois. Desenvolva cumplicidade, técnica e a confiança necessária para deslizar pelo salão com naturalidade e leveza.",
    },
    {
      image: "/assets/couple_samba_rock.webp",
      alt: "Casal dançando Samba Rock",
      title: "Samba Rock",
      description: "Sinta a pulsação do ritmo paulistano. Uma fusão irresistível de giros elegantes, descontração e a energia que liberta a sua espontaneidade na pista.",
    },
    {
      image: "/assets/couple_forro.webp",
      alt: "Casal dançando Forró",
      title: "Forró",
      description: "A beleza do abraço e da musicalidade nordestina. Aprenda a dançar com proximidade, fluidez e uma conexão profunda que transforma cada passo em poesia.",
    },
    {
      image: "/assets/teens_urban.webp",
      alt: "Fit Dance",
      title: "Fit Dance",
      description: "Celebre o movimento e recarregue suas energias. Uma experiência vibrante que fortalece o corpo, libera endorfina e transforma o esforço em pura diversão.",
    },
    {
      image: "/assets/belly_dance.webp",
      alt: "Dança do Ventre",
      title: "Dança do Ventre",
      description: "Um mergulho na sua força e autoconhecimento. Resgate a sua autoestima e consciência corporal através de movimentos sinuosos e expressividade feminina.",
    },
  ];


  const slideLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -340, behavior: "smooth" });
    }
  };

  const slideRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 340, behavior: "smooth" });
    }
  };

  return (
    <section id="modalidades" className="py-24 bg-bg-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-xl">
            <span className="text-primary font-semibold uppercase text-xs tracking-widest mb-4 block">
              A Arte em Movimento
            </span>
            <h2 className="font-heading text-3xl md:text-5xl text-white font-medium">
              Escolha a sua <span className="text-accent italic font-light">expressão.</span>
            </h2>
          </div>
          <div className="flex gap-4 mt-6 md:mt-0">
            <button
              onClick={slideLeft}
              className="w-12 h-12 rounded-full border border-border-light bg-bg-card text-white flex items-center justify-center hover:bg-primary hover:border-primary hover:text-bg-dark transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Voltar modalidades"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={slideRight}
              className="w-12 h-12 rounded-full border border-border-light bg-bg-card text-white flex items-center justify-center hover:bg-primary hover:border-primary hover:text-bg-dark transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Avançar modalidades"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Carousel Slider */}
        <div
          ref={carouselRef}
          className="flex gap-8 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory pb-8 cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: "none" }}
        >
          {list.map((item, idx) => (
            <motion.div
              key={idx}
              className="min-w-[280px] sm:min-w-[320px] w-[280px] sm:w-[320px] h-[420px] relative rounded-2xl overflow-hidden snap-start group shadow-lg flex-shrink-0"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 280px, 320px"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay with details */}
              <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/95 via-bg-dark/40 to-transparent p-6 flex flex-col justify-end transition-all duration-500 group-hover:via-bg-dark/60">
                <h3 className="font-heading text-2xl text-white font-medium mb-2 transition-colors duration-300 group-hover:text-primary">
                  {item.title}
                </h3>
                <p className="text-xs text-text-muted leading-relaxed opacity-90 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 duration-300">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
