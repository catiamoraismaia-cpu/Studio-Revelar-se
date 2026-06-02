"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight, ArrowLeft, Calendar, User, Phone, BookOpen, AlertCircle } from "lucide-react";

export default function CTA() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [category, setCategory] = useState<"Adulto" | "Juvenil" | "">("");
  const [modalidade, setModalidade] = useState("");
  const [preferredSchedule, setPreferredSchedule] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const modalitiesByCategory = {
    Adulto: ["Sertanejo", "Samba Rock", "Forró", "Fit Dance", "Dança do Ventre"],
    Juvenil: ["Danças Urbanas (Urban Teens)", "Ballet Infantil"],
  };

  const scheduleOptions: Record<string, string[]> = {
    "Sertanejo": ["Quarta às 20:30 (Intermediário)"],
    "Samba Rock": ["Segunda às 21:00", "Terça às 19:30", "Quinta às 19:30 (Intermediário)"],
    "Forró": ["Segunda às 20:00", "Quarta às 19:00", "Sexta às 19:30 (Intermediário)"],
    "Fit Dance": ["Segunda às 19:00", "Quarta às 18:00"],
    "Dança do Ventre": ["Sexta às 18:00 (Intermediário)"],
    "Danças Urbanas (Urban Teens)": ["Terça às 18:00", "Quinta às 18:00"],
    "Ballet Infantil": ["Terça às 15:00 (3 a 6 anos)", "Quinta às 15:00 (7 a 10 anos)", "Sábado às 09:30 (Geral)"],
  };

  const handleNext = () => {
    setError("");
    if (step === 1) {
      if (!name.trim()) return setError("Por favor, digite seu nome completo.");
      if (!whatsapp.trim()) return setError("Por favor, digite seu WhatsApp.");
    }
    if (step === 2 && !category) {
      return setError("Por favor, selecione seu perfil de interesse.");
    }
    if (step === 3 && !modalidade) {
      return setError("Por favor, selecione uma modalidade.");
    }
    setStep(step + 1);
  };

  const handleBack = () => {
    setError("");
    setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!preferredSchedule) {
      return setError("Por favor, escolha uma opção de horário.");
    }

    setLoading(true);
    // Simulate server request
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);

      const message = `Olá Studio Revelar-se! Me chamo ${name}. Gostaria de confirmar meu agendamento da Aula Experimental Cortesia para a modalidade ${modalidade} (${category}) no horário: ${preferredSchedule}. Meu contato é ${whatsapp}.`;
      const encodedMessage = encodeURIComponent(message);
      const phone = "5511997755082";
      const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;

      // Open whatsapp link
      window.open(whatsappUrl, "_blank");
    }, 1800);
  };

  return (
    <section id="agendar" className="py-24 bg-bg-dark relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="glass-card rounded-3xl p-8 md:p-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center shadow-2xl relative overflow-hidden">
          {/* Background light glow */}
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          
          {/* Left Column: Copy */}
          <div className="lg:col-span-6 relative z-10">
            <h2 className="font-heading text-3xl md:text-5xl text-white font-medium mb-6">
              O seu momento de <span className="text-accent italic font-light">revelar-se</span> começa hoje.
            </h2>
            <p className="text-text-muted text-sm md:text-base leading-relaxed mb-8">
              Não adie mais o seu bem-estar e a sua felicidade. Nossas turmas são reduzidas para garantir que você receba toda a atenção que merece. Preencha os campos ao lado e garanta seu convite exclusivo para uma aula experimental cortesia.
            </p>

            <ul className="space-y-4 mb-10">
              <li className="flex items-center gap-4 text-sm text-white font-medium">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Check size={16} />
                </div>
                <span>Acompanhamento individualizado e respeitoso para iniciantes absolutos.</span>
              </li>
              <li className="flex items-center gap-4 text-sm text-white font-medium">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Check size={16} />
                </div>
                <span>Confirmação rápida e sem burocracias pelo WhatsApp.</span>
              </li>
              <li className="flex items-center gap-4 text-sm text-white font-medium">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Check size={16} />
                </div>
                <span>Sem taxas, contratos ou compromissos na sua aula cortesia.</span>
              </li>
            </ul>
          </div>

          {/* Right Column: Multi-step Form */}
          <div className="lg:col-span-6 w-full relative z-10">
            <div className="bg-[#131118]/80 border border-border-light rounded-2xl p-6 md:p-10 shadow-xl relative min-h-[420px] flex flex-col justify-between">
              
              {/* Progress Steps Indicators */}
              {!success && (
                <div className="flex justify-between items-center mb-8 border-b border-border-light/40 pb-4">
                  {[1, 2, 3, 4].map((s) => (
                    <div key={s} className="flex items-center gap-2">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                          step >= s
                            ? "bg-primary text-bg-dark font-extrabold"
                            : "bg-bg-card border border-border-light text-text-muted"
                        }`}
                      >
                        {s}
                      </div>
                      {s < 4 && (
                        <div
                          className={`w-6 sm:w-10 h-[2px] transition-colors duration-300 ${
                            step > s ? "bg-primary" : "bg-border-light/50"
                          }`}
                        />
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Form Content steps */}
              <AnimatePresence mode="wait">
                {success ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center text-center py-10"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500 text-green-500 flex items-center justify-center mb-6">
                      <Check size={32} />
                    </div>
                    <h3 className="font-heading text-2xl text-white font-medium mb-3">
                      Agendamento Iniciado!
                    </h3>
                    <p className="text-sm text-text-muted leading-relaxed max-w-sm mb-6">
                      Você está sendo redirecionado para o WhatsApp da recepção para confirmar seu dia e horário em instantes...
                    </p>
                    <button
                      onClick={() => {
                        setStep(1);
                        setName("");
                        setWhatsapp("");
                        setCategory("");
                        setModalidade("");
                        setPreferredSchedule("");
                        setSuccess(false);
                      }}
                      className="text-xs text-primary font-semibold uppercase tracking-wider hover:underline"
                    >
                      Agendar outra pessoa
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                    className="flex-grow flex flex-col justify-center"
                  >
                    {error && (
                      <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-xs py-3 px-4 rounded-xl flex items-center gap-3 mb-6">
                        <AlertCircle size={16} />
                        <span>{error}</span>
                      </div>
                    )}

                    {/* STEP 1: Basic Info */}
                    {step === 1 && (
                      <div className="space-y-5">
                        <h3 className="font-heading text-xl text-white font-medium">
                          Quem está dando o primeiro passo?
                        </h3>
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-text-muted">
                            Nome Completo
                          </label>
                          <div className="relative">
                            <input
                              type="text"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              placeholder="Ex: Ana Maria Silva"
                              className="w-full bg-bg-card border border-border-light focus:border-primary focus:outline-none rounded-xl py-3.5 pl-12 pr-4 text-sm text-white transition-colors"
                            />
                            <User className="absolute left-4 top-3.5 text-text-muted" size={18} />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-text-muted">
                            WhatsApp / Telefone
                          </label>
                          <div className="relative">
                            <input
                              type="tel"
                              value={whatsapp}
                              onChange={(e) => setWhatsapp(e.target.value)}
                              placeholder="Ex: (11) 99999-9999"
                              className="w-full bg-bg-card border border-border-light focus:border-primary focus:outline-none rounded-xl py-3.5 pl-12 pr-4 text-sm text-white transition-colors"
                            />
                            <Phone className="absolute left-4 top-3.5 text-text-muted" size={18} />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* STEP 2: Category */}
                    {step === 2 && (
                      <div className="space-y-6">
                        <h3 className="font-heading text-xl text-white font-medium">
                          Qual é o seu perfil de interesse?
                        </h3>
                        <div className="grid grid-cols-1 gap-4">
                          {(["Adulto", "Juvenil"] as const).map((cat) => (
                            <button
                              key={cat}
                              type="button"
                              onClick={() => {
                                setCategory(cat);
                                setModalidade("");
                                setPreferredSchedule("");
                              }}
                              className={`p-5 rounded-2xl border text-left transition-all duration-300 ${
                                category === cat
                                  ? "bg-primary/5 border-primary shadow-md"
                                  : "bg-bg-card border-border-light hover:border-border-glow"
                              }`}
                            >
                              <h4 className="font-heading text-lg font-semibold text-white mb-1">
                                {cat === "Adulto" ? "Adulto (A partir de 18 anos)" : "Juvenil (Adolescentes - 11 a 17 anos)"}
                              </h4>
                              <p className="text-xs text-text-muted leading-relaxed">
                                {cat === "Adulto"
                                  ? "Aulas focadas em desacelerar, resgatar autoestima e condicionamento corporal."
                                  : "Expressão através das danças urbanas ou ballet clássico para jovens."}
                              </p>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* STEP 3: Modality */}
                    {step === 3 && (
                      <div className="space-y-6">
                        <h3 className="font-heading text-xl text-white font-medium">
                          Escolha a modalidade desejada:
                        </h3>
                        <div className="relative">
                          <select
                            value={modalidade}
                            onChange={(e) => {
                              setModalidade(e.target.value);
                              setPreferredSchedule("");
                            }}
                            className="w-full bg-bg-card border border-border-light focus:border-primary focus:outline-none rounded-xl py-3.5 pl-12 pr-4 text-sm text-white appearance-none transition-colors"
                          >
                            <option value="" disabled>Selecione um estilo</option>
                            {category &&
                              modalitiesByCategory[category].map((mod) => (
                                <option key={mod} value={mod} className="bg-bg-dark text-white">
                                  {mod}
                                </option>
                              ))}
                          </select>
                          <BookOpen className="absolute left-4 top-3.5 text-text-muted" size={18} />
                          <div className="absolute right-4 top-4.5 pointer-events-none w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[5px] border-t-text-muted" />
                        </div>
                      </div>
                    )}

                    {/* STEP 4: Scheduler Options */}
                    {step === 4 && (
                      <div className="space-y-6">
                        <h3 className="font-heading text-xl text-white font-medium">
                          Selecione o melhor dia e horário:
                        </h3>
                        <div className="grid grid-cols-1 gap-3">
                          {modalidade &&
                            scheduleOptions[modalidade]?.map((option) => (
                              <button
                                key={option}
                                type="button"
                                onClick={() => setPreferredSchedule(option)}
                                className={`p-4 rounded-xl border text-left text-sm font-semibold transition-all duration-300 flex items-center gap-4 ${
                                  preferredSchedule === option
                                    ? "bg-primary/5 border-primary text-primary"
                                    : "bg-bg-card border-border-light text-text-muted hover:border-border-glow hover:text-white"
                                }`}
                              >
                                <Calendar size={16} className="flex-shrink-0" />
                                <span>{option}</span>
                              </button>
                            ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Form Navigation Controls */}
              {!success && (
                <div className="flex items-center justify-between gap-4 mt-10 border-t border-border-light/40 pt-6">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={handleBack}
                      className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-white hover:text-primary transition-colors py-3 px-6 rounded-full border border-white/20 hover:border-primary focus-visible:outline-none"
                    >
                      <ArrowLeft size={16} /> Voltar
                    </button>
                  ) : (
                    <div />
                  )}

                  {step < 4 ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-bg-dark text-xs font-bold tracking-widest uppercase py-3.5 px-7 rounded-full transition-all duration-300 shadow-md hover:shadow-primary/20 focus-visible:outline-none"
                    >
                      Continuar <ArrowRight size={16} />
                    </button>
                  ) : (
                    <button
                      type="button"
                      disabled={loading}
                      onClick={handleSubmit}
                      className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover disabled:bg-primary/50 disabled:cursor-not-allowed text-bg-dark text-xs font-bold tracking-widest uppercase py-4 px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-primary/25 focus-visible:outline-none w-full sm:w-auto"
                    >
                      {loading ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-4.5 w-4.5 text-bg-dark" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Processando...
                        </>
                      ) : (
                        <>
                          Quero Minha Aula Cortesia <ArrowRight size={16} />
                        </>
                      )}
                    </button>
                  )}
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
