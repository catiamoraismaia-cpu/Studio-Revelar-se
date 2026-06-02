import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Sobre from "@/components/Sobre";
import Modalidades from "@/components/Modalidades";
import Professores from "@/components/Professores";
import Horarios from "@/components/Horarios";
import Galeria from "@/components/Galeria";
import Depoimentos from "@/components/Depoimentos";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <Hero />
        <Sobre />
        <Modalidades />
        <Horarios />
        <Professores />
        <Galeria />
        <Depoimentos />
        <CTA />
      </main>
      <Footer />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/5511997755082?text=Ol%C3%A1%21+Gostaria+de+saber+mais+informa%C3%A7%C3%B5es+sobre+as+aulas+do+Studio+Revelar-se."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 w-14 h-14 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full flex items-center justify-center shadow-2xl z-40 transition-all duration-300 hover:scale-110 hover:rotate-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
        aria-label="Fale conosco no WhatsApp"
      >
        <i className="fab fa-whatsapp text-2xl" />
      </a>
    </>
  );
}
