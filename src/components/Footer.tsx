import { Instagram, Youtube, Facebook, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-bg-dark border-t border-border-light pt-20 pb-10 text-sm text-text-muted">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 mb-16">
        
        {/* Brand Block */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <h3 className="font-heading text-2xl text-white font-medium mb-6">
              Estúdio de Dança <span className="text-primary font-semibold">REVELAR-SE</span>
            </h3>
            <p className="leading-relaxed max-w-sm">
              Um refúgio de arte, movimento e acolhimento. Criado para ser o espaço onde você se desliga do mundo exterior e se reconecta com a sua versão mais autêntica e vibrante.
            </p>
          </div>
          <div className="flex gap-4 mt-8">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-bg-card border border-border-light hover:border-primary text-white hover:text-primary flex items-center justify-center transition-all duration-300 focus-visible:outline-none"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-bg-card border border-border-light hover:border-primary text-white hover:text-primary flex items-center justify-center transition-all duration-300 focus-visible:outline-none"
              aria-label="YouTube"
            >
              <Youtube size={18} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-bg-card border border-border-light hover:border-primary text-white hover:text-primary flex items-center justify-center transition-all duration-300 focus-visible:outline-none"
              aria-label="Facebook"
            >
              <Facebook size={18} />
            </a>
          </div>
        </div>

        {/* Navigation Block */}
        <div className="lg:col-span-3">
          <h4 className="text-white font-body text-xs font-bold uppercase tracking-wider mb-6">
            Navegação
          </h4>
          <div className="flex flex-col gap-4">
            <a href="#inicio" className="hover:text-primary transition-all duration-200 hover:translate-x-1 self-start">Início</a>
            <a href="#manifesto" className="hover:text-primary transition-all duration-200 hover:translate-x-1 self-start">Manifesto</a>
            <a href="#publico" className="hover:text-primary transition-all duration-200 hover:translate-x-1 self-start">Para Quem</a>
            <a href="#modalidades" className="hover:text-primary transition-all duration-200 hover:translate-x-1 self-start">Modalidades</a>
            <a href="#studio" className="hover:text-primary transition-all duration-200 hover:translate-x-1 self-start">O Studio</a>
          </div>
        </div>

        {/* Contact Block */}
        <div className="lg:col-span-4">
          <h4 className="text-white font-body text-xs font-bold uppercase tracking-wider mb-6">
            Contato & Endereço
          </h4>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <MapPin size={18} className="text-primary flex-shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                Rua Tertulina de Souza, 147 - Parque Jandaia - Carapicuíba - SP
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Phone size={18} className="text-green-400 flex-shrink-0" />
              <p>(11) 99775-5082</p>
            </div>
            <div className="flex items-center gap-4">
              <Mail size={18} className="text-primary flex-shrink-0" />
              <p>contato@studiorevelarse.com.br</p>
            </div>
          </div>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="max-w-7xl mx-auto px-6 border-t border-border-light/30 pt-10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
        <p>&copy; {new Date().getFullYear()} Studio Revelar-se. Todos os direitos reservados.</p>
        <p>Criado com sofisticação, movimento e performance.</p>
      </div>
    </footer>
  );
}
