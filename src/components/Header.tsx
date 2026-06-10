import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { BARBER_CONFIG, getWhatsAppLink } from "../types";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const waMessage = "Olá! Vi o site da Barbearia Dom Corte e gostaria de agendar um horário.";
  const waUrl = getWhatsAppLink(BARBER_CONFIG.whatsappNumber, waMessage);

  return (
    <header
      id="header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0b0b0b]/95 backdrop-blur-md border-b border-white/5 py-4 shadow-xl shadow-black/30"
          : "bg-gradient-to-b from-black/80 to-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand Area */}
          <a href="#inicio" className="flex flex-col group">
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-gold-500 group-hover:text-gold-400 transition-colors uppercase">
              Barbearia Dom Corte
            </span>
            <span className="text-[9px] uppercase tracking-[0.25em] text-white/50 mt-1 font-sans">
              Corte • Barba • Estilo
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#inicio"
              className="text-sm font-medium text-gray-300 hover:text-gold-500 transition-colors uppercase tracking-wider"
            >
              Início
            </a>
            <a
              href="#servicos"
              className="text-sm font-medium text-gray-300 hover:text-gold-500 transition-colors uppercase tracking-wider"
            >
              Serviços
            </a>
            <a
              href="#combos"
              className="text-sm font-medium text-gray-300 hover:text-gold-500 transition-colors uppercase tracking-wider"
            >
              Combos
            </a>
            <a
              href="#galeria"
              className="text-sm font-medium text-gray-300 hover:text-gold-500 transition-colors uppercase tracking-wider"
            >
              Galeria
            </a>
            <a
              href="#contato"
              className="text-sm font-medium text-gray-300 hover:text-gold-500 transition-colors uppercase tracking-wider"
            >
              Contato
            </a>
          </nav>

          {/* Action Button (Desktop Only) */}
          <div className="hidden md:block">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-black font-bold text-xs sm:text-sm px-6 py-2.5 rounded-sm transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:scale-105 active:scale-95 uppercase tracking-wider font-display"
              id="desktop-header-booking-btn"
            >
              <Phone className="w-4 h-4 fill-black" />
              Agendar no WhatsApp
            </a>
          </div>

          {/* Mobile Right Controls: WhatsApp Quick + Hamburger */}
          <div className="flex items-center gap-3 md:hidden">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gradient-to-r from-gold-500 to-gold-600 text-black rounded-sm flex items-center justify-center shadow shadow-gold-500/20 active:scale-95"
              title="Agendar pelo WhatsApp"
              id="mobile-quick-whatsapp-btn"
            >
              <Phone className="w-4 h-4 fill-black" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-400 hover:text-white transition-colors"
              aria-label="Toggle menu"
              id="mobile-menu-toggle"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isOpen && (
        <div className="md:hidden py-4 px-4 bg-[#0e0e0e] border-b border-white/5 shadow-2xl animate-fade-in absolute left-0 right-0 top-full">
          <nav className="flex flex-col space-y-4">
            <a
              href="#inicio"
              onClick={() => setIsOpen(false)}
              className="text-base font-semibold text-gray-200 hover:text-gold-500 transition-colors uppercase tracking-wider"
            >
              Início
            </a>
            <a
              href="#servicos"
              onClick={() => setIsOpen(false)}
              className="text-base font-semibold text-gray-200 hover:text-gold-500 transition-colors uppercase tracking-wider"
            >
              Serviços
            </a>
            <a
              href="#combos"
              onClick={() => setIsOpen(false)}
              className="text-base font-semibold text-gray-200 hover:text-gold-500 transition-colors uppercase tracking-wider"
            >
              Combos
            </a>
            <a
              href="#galeria"
              onClick={() => setIsOpen(false)}
              className="text-base font-semibold text-gray-200 hover:text-gold-500 transition-colors uppercase tracking-wider"
            >
              Galeria
            </a>
            <a
              href="#contato"
              onClick={() => setIsOpen(false)}
              className="text-base font-semibold text-gray-200 hover:text-gold-500 transition-colors uppercase tracking-wider"
            >
              Contato
            </a>
            
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="w-full text-center inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gold-500 to-gold-600 text-black font-bold p-3 rounded-sm uppercase tracking-wider font-display text-sm mt-2 shadow-[0_0_15px_rgba(212,175,55,0.2)]"
              id="mobile-header-booking-drawer-btn"
            >
              <Phone className="w-4 h-4 fill-black" />
              Agendar no WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
