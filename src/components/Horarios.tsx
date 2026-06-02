"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, User, Award } from "lucide-react";

interface ClassSession {
  time: string;
  name: string;
  teacher: string;
  level: string;
  category: "Adulto" | "Juvenil";
}

export default function Horarios() {
  const [activeDay, setActiveDay] = useState<string>("Segunda");
  const [activeCategory, setActiveCategory] = useState<"Todos" | "Adulto" | "Juvenil">("Todos");

  const days = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

  const schedules: Record<string, ClassSession[]> = {
    Segunda: [
      { time: "19:00 - 20:00", name: "Fit Dance", teacher: "Amanda", level: "Iniciante/Geral", category: "Adulto" },
      { time: "20:00 - 21:00", name: "Forró", teacher: "Ronny", level: "Iniciante/Geral", category: "Adulto" },
      { time: "21:00 - 22:00", name: "Samba Rock", teacher: "Ronny", level: "Iniciante/Geral", category: "Adulto" }
    ],
    Terça: [
      { time: "15:00 - 16:30", name: "Ballet Infantil", teacher: "Gabriela Santos", level: "3 a 6 anos", category: "Juvenil" },
      { time: "18:00 - 19:30", name: "Danças Urbanas (Urban Teens)", teacher: "Mariana Costa", level: "11 a 17 anos", category: "Juvenil" },
      { time: "19:30 - 21:00", name: "Samba Rock", teacher: "Mariana Costa", level: "Iniciante", category: "Adulto" }
    ],
    Quarta: [
      { time: "18:00 - 19:00", name: "Fit Dance", teacher: "Gabriela Santos", level: "Iniciante/Geral", category: "Adulto" },
      { time: "19:00 - 20:30", name: "Forró", teacher: "Lucas Oliveira", level: "Iniciante", category: "Adulto" },
      { time: "20:30 - 22:00", name: "Sertanejo", teacher: "Lucas Oliveira", level: "Intermediário", category: "Adulto" }
    ],
    Quinta: [
      { time: "15:00 - 16:30", name: "Ballet Infantil", teacher: "Gabriela Santos", level: "7 a 10 anos", category: "Juvenil" },
      { time: "18:00 - 19:30", name: "Danças Urbanas (Urban Teens)", teacher: "Mariana Costa", level: "11 a 17 anos", category: "Juvenil" },
      { time: "19:30 - 21:00", name: "Samba Rock", teacher: "Mariana Costa", level: "Intermediário", category: "Adulto" }
    ],
    Sexta: [
      { time: "18:00 - 19:30", name: "Dança do Ventre", teacher: "Gabriela Santos", level: "Intermediário", category: "Adulto" },
      { time: "19:30 - 21:00", name: "Forró", teacher: "Lucas Oliveira", level: "Intermediário", category: "Adulto" }
    ],
    Sábado: [
      { time: "09:30 - 11:00", name: "Ballet Infantil", teacher: "Gabriela Santos", level: "Geral", category: "Juvenil" },
      { time: "11:00 - 12:30", name: "Prática de Ritmos de Salão", teacher: "Lucas & Mariana", level: "Livre", category: "Adulto" }
    ]
  };

  const filteredSessions = schedules[activeDay].filter(
    (session) => activeCategory === "Todos" || session.category === activeCategory
  );

  return (
    <section id="studio" className="py-24 bg-bg-dark/95 relative border-t border-border-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold uppercase text-xs tracking-widest mb-4 block">
            Nossa Programação
          </span>
          <h2 className="font-heading text-3xl md:text-5xl text-white font-medium mb-4">
            Horários das <span className="text-accent italic font-light">Aulas</span>
          </h2>
          <p className="text-text-muted text-sm md:text-base leading-relaxed">
            Encontre o momento perfeito na sua semana para se reconectar através da dança. Temos turmas flexíveis e acolhedoras.
          </p>

          {/* Category Filter */}
          <div className="inline-flex bg-bg-card border border-border-light rounded-full p-1 mt-8">
            {(["Todos", "Adulto", "Juvenil"] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`py-2 px-6 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-primary text-bg-dark"
                    : "text-text-muted hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Days Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 border-b border-border-light/50 pb-6 max-w-4xl mx-auto">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={`py-3 px-6 rounded-xl font-medium text-sm transition-all duration-300 relative ${
                activeDay === day
                  ? "text-primary bg-primary/5"
                  : "text-text-muted hover:text-white hover:bg-bg-card"
              }`}
            >
              {day}
              {activeDay === day && (
                <motion.div
                  layoutId="activeDayBar"
                  className="absolute bottom-0 left-0 w-full h-[2px] bg-primary"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Classes Grid */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDay + activeCategory}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[220px]"
            >
              {filteredSessions.length > 0 ? (
                filteredSessions.map((session, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    className="glass-card rounded-2xl p-6 flex flex-col justify-between shadow-md relative overflow-hidden group hover:border-primary/50 transition-all duration-300"
                  >
                    {/* Badge Category */}
                    <span
                      className={`absolute top-4 right-4 text-[9px] font-bold uppercase tracking-widest py-1 px-3 rounded-full ${
                        session.category === "Adulto"
                          ? "bg-accent/15 text-accent border border-accent/20"
                          : "bg-primary/15 text-primary border border-primary/20"
                      }`}
                    >
                      {session.category}
                    </span>

                    <div>
                      <h3 className="font-heading text-2xl text-white font-medium mb-4 group-hover:text-primary transition-colors">
                        {session.name}
                      </h3>

                      <div className="space-y-2 mb-6">
                        <div className="flex items-center gap-3 text-text-muted text-sm">
                          <Clock size={16} className="text-primary flex-shrink-0" />
                          <span>{session.time}</span>
                        </div>
                        <div className="flex items-center gap-3 text-text-muted text-sm">
                          <User size={16} className="text-primary flex-shrink-0" />
                          <span>Professor: {session.teacher}</span>
                        </div>
                        <div className="flex items-center gap-3 text-text-muted text-sm">
                          <Award size={16} className="text-primary flex-shrink-0" />
                          <span>Nível: {session.level}</span>
                        </div>
                      </div>
                    </div>

                    <a
                      href="#agendar"
                      className="inline-flex items-center gap-2 text-primary hover:text-primary-hover text-xs font-semibold uppercase tracking-widest transition-colors"
                    >
                      Agendar Aula Experimental <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                  </motion.div>
                ))
              ) : (
                <div className="col-span-2 text-center py-12 text-text-muted font-heading italic text-lg">
                  Nenhuma aula cadastrada para esta categoria neste dia.
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
