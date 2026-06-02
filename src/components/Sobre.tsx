"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

type TabId = "juvenil" | "adulto";

export default function Sobre() {
  const [activeTab, setActiveTab] = useState<TabId>("juvenil");

  const tabsData = {
    juvenil: {
      image: "/assets/teens_urban.webp",
      alt: "Grupo de jovens dançando hip-hop e street dance",
      title: "Sua Voz Através do Ritmo",
      highlight: "Autoconfiança, atitude e pertencimento social através da dança.",
      description: "O espaço ideal para adolescentes canalizarem sua energia, expressarem sua personalidade e construírem amizades verdadeiras fora do ambiente escolar. Através das coreografias urbanas e ritmos modernos, estimulamos a expressão da criatividade e o fortalecimento da autoestima livre de cobranças.",
      features: [
        "Danças Urbanas & Hip-Hop",
        "Coreografias Atuais",
        "Comunidade Acolhedora",
        "Autoestima & Expressão",
      ],
      btnText: "Agendar Aula Juvenil",
    },
    adulto: {
      image: "/assets/adult_dance.webp",
      alt: "Mulher adulta praticando dança em estúdio premium",
      title: "O Seu Encontro com o Autocuidado",
      highlight: "Elegância, alívio do estresse e consciência corporal profunda.",
      description: "Projetado especificamente para quem busca uma alternativa prazerosa à academia e deseja desacelerar da rotina exaustiva do dia a dia. Nossas turmas acolhem iniciantes absolutos com didática paciente e respeitosa, provando que nunca é tarde para aprender a dançar e resgatar a própria vitalidade.",
      features: [
        "Iniciantes Absolutos",
        "Sem Julgamentos",
        "Saúde Mental e Corporal",
        "Horários Flexíveis",
      ],
      btnText: "Agendar Aula Adulta",
    },
  };

  return (
    <div id="sobre" className="w-full bg-bg-dark">
      {/* --- SEÇÃO MANIFESTO (NOSSA ESSÊNCIA) --- */}
      <section id="manifesto" className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Visual with Corner Borders */}
          <div className="lg:col-span-5 relative w-full aspect-[4/5] max-w-[420px] mx-auto lg:max-w-none">
            {/* Top-left border decor */}
            <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-primary z-0" />
            {/* Bottom-right border decor */}
            <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-2 border-r-2 border-accent z-0" />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl z-10"
            >
              <Image
                src="/assets/dance_steps.webp"
                alt="Passos de dança expressivos em movimento"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-bg-dark/60 via-transparent to-transparent" />
            </motion.div>
          </div>

          {/* Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-primary font-semibold uppercase text-xs tracking-widest mb-4"
            >
              Nossa Essência
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-heading text-3xl md:text-5xl text-white leading-tight font-medium mb-8"
            >
              Aqui, o seu corpo conta a sua história.
            </motion.h2>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="space-y-6 text-base md:text-lg leading-relaxed text-text-muted font-heading italic"
            >
              <p>
                &ldquo;Acreditamos que a dança vai muito além de passos coordenados e coreografias perfeitas. Ela é um ato de coragem, uma conversa silenciosa com a própria alma e um convite para habitar o próprio corpo com orgulho e liberdade.
              </p>
              <p className="text-primary">
                No Studio Revelar-se, a técnica anda de mãos dadas com o acolhimento. Criamos um refúgio onde o julgamento não entra, permitindo que você se expresse com elegância, libere o estresse da rotina e encontre uma comunidade que vibra na mesma energia. Permita-se ser visto. Permita-se revelar-se.&rdquo;
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- SEÇÃO SEGMENTAÇÃO (PARA QUEM) --- */}
      <section id="publico" className="py-24 bg-gradient-to-b from-bg-dark via-[#15131A] to-bg-dark border-y border-border-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-heading text-3xl md:text-5xl text-white font-medium mb-4">
              Para quem é o <span className="text-accent italic font-light">Studio?</span>
            </h2>
            <p className="text-text-muted text-sm md:text-base leading-relaxed">
              Acolhemos todas as idades e objetivos através de metodologias e ambientes focados nas necessidades de cada fase de vida.
            </p>

            {/* Tab buttons */}
            <div className="flex flex-row items-center justify-center gap-4 mt-8">
              {(["juvenil", "adulto"] as TabId[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-3.5 px-8 rounded-full font-medium text-sm transition-all duration-300 ${
                    activeTab === tab
                      ? "bg-primary text-bg-dark font-bold shadow-lg shadow-primary/20 scale-105"
                      : "bg-bg-card hover:bg-bg-card-hover border border-border-light hover:border-border-glow text-text-muted hover:text-white"
                  }`}
                >
                  {tab === "juvenil" ? "Adolescentes (11 a 17 anos)" : "Adultos (A partir de 18 anos)"}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content Display */}
          <div className="min-h-[500px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
              >
                {/* Tab Image */}
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={tabsData[activeTab].image}
                    alt={tabsData[activeTab].alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/40 to-transparent" />
                </div>

                {/* Tab Info */}
                <div className="flex flex-col">
                  <h3 className="font-heading text-2xl md:text-4xl text-white font-medium mb-3">
                    {tabsData[activeTab].title}
                  </h3>
                  <p className="font-heading text-accent italic text-base md:text-lg mb-6">
                    {tabsData[activeTab].highlight}
                  </p>
                  <p className="text-text-muted text-sm md:text-base leading-relaxed mb-8">
                    {tabsData[activeTab].description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                    {tabsData[activeTab].features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle2 className="text-primary flex-shrink-0" size={18} />
                        <span className="text-sm text-white font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href="#agendar"
                    className="self-start bg-primary hover:bg-primary-hover text-bg-dark text-xs font-bold tracking-widest uppercase py-4 px-8 rounded-full transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary shadow-md hover:shadow-primary/25"
                  >
                    {tabsData[activeTab].btnText}
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
}
