"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface Professor {
  name: string;
  image: string;
  alt: string;
  styles: string;
  bio: string;
}

export default function Professores() {
  const teachers: Professor[] = [
    {
      name: "Gabriela Santos",
      image: "/assets/teacher_gabriela.webp",
      alt: "Professora Gabriela Santos",
      styles: "Dança do Ventre & Fit Dance",
      bio: "Graduada em Dança pela UNICAMP com aperfeiçoamento no Cairo. Dedica sua trajetória a guiar mulheres no resgate de sua autoconfiança, sensualidade e poder pessoal através da fluidez da dança oriental.",
    },
    {
      name: "Lucas Oliveira",
      image: "/assets/teacher_lucas.webp",
      alt: "Professor Lucas Oliveira",
      styles: "Sertanejo & Forró",
      bio: "Campeão Paulista de Dança de Salão. Especialista em didática humanizada para iniciantes absolutos, focando em fazer você perder o medo de dançar e descobrir a beleza de se mover a dois.",
    },
    {
      name: "Mariana Costa",
      image: "/assets/teacher_mariana.webp",
      alt: "Professora Mariana Costa",
      styles: "Samba Rock & Ritmos Sociais",
      bio: "Coreógrafa premiada nacionalmente. Acredita que o gingado é uma expressão de identidade única. Ensina com paixão, estimulando a agilidade, a leveza técnica e a autodescoberta na pista.",
    },
  ];

  return (
    <section id="professores" className="py-24 bg-bg-dark border-t border-border-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-primary font-semibold uppercase text-xs tracking-widest mb-4 block">
            Corpo Docente
          </span>
          <h2 className="font-heading text-3xl md:text-5xl text-white font-medium mb-4">
            Mestres do <span className="text-accent italic font-light">Movimento</span>
          </h2>
          <p className="text-text-muted text-sm md:text-base leading-relaxed">
            Profissionais altamente qualificados e dedicados a guiar sua jornada com sensibilidade, técnica e acolhimento.
          </p>
        </div>

        {/* Teachers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teachers.map((teacher, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="glass-card rounded-2xl p-8 flex flex-col items-center text-center shadow-lg hover:-translate-y-2 transition-transform duration-300"
            >
              {/* Profile Photo */}
              <div className="w-40 h-40 rounded-full overflow-hidden mb-6 border-2 border-primary shadow-xl relative">
                <Image
                  src={teacher.image}
                  alt={teacher.alt}
                  fill
                  sizes="160px"
                  className="object-cover transition-transform duration-500 hover:scale-108"
                />
              </div>

              {/* Info */}
              <h3 className="font-heading text-2xl text-white font-medium mb-2">
                {teacher.name}
              </h3>
              <span className="text-primary text-xs font-semibold tracking-wider uppercase mb-5">
                {teacher.styles}
              </span>
              <p className="text-text-muted text-sm leading-relaxed">
                {teacher.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
