import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, X, MessageSquare } from "lucide-react";
import { BARBER_GALLERY, BARBER_CONFIG, getWhatsAppLink } from "../types";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<null | {
    id: number;
    title: string;
    url: string;
    desc: string;
  }>(null);

  const getStyleMessage = (styleName: string) => {
    return `Olá! Vi a foto do estilo [${styleName}] no site da Barbearia Dom Corte e gostaria de agendar um corte nesse padrão! Tem horário disponível?`;
  };

  return (
    <section id="galeria" className="bg-[#050505] py-24 relative overflow-hidden border-t border-white/5">
      
      {/* Luz focal interna */}
      <div className="absolute right-0 bottom-1/3 w-[300px] h-[300px] bg-gold-500/5 blur-[90px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho de Seção */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold-500 text-xs font-bold uppercase tracking-[0.25em] block mb-3 font-display">
            PORTFÓLIO & INSPIRAÇÃO
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-serif mb-4 tracking-tight">
            Cortes e estilos
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto my-4 rounded-full" />
          <p className="text-white/60 font-sans text-sm sm:text-base md:text-lg leading-relaxed">
            Nossos profissionais dominam desde as técnicas mais tradicionais da velha escola às maiores tendências contemporâneas de visuais urbanos.
          </p>
        </div>

        {/* Grade de Imagens da Galeria */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BARBER_GALLERY.map((item) => (
            <motion.div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4 }}
              className="relative aspect-[4/5] rounded-sm overflow-hidden cursor-pointer group shadow-lg border border-white/5 hover:border-gold-500/30 dark-overlay"
              id={`gallery-item-${item.id}`}
            >
              {/* Imagem do Rosto/Corte */}
              <img
                src={item.url}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Recobrimento em Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-65 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Ícone de zoom flutuante - sharp */}
              <div className="absolute top-4 right-4 bg-black/80 p-2.5 rounded-sm border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-90 group-hover:scale-100">
                <Search className="w-4 h-4 text-gold-500" />
              </div>

              {/* Informações no fundo */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-[10px] uppercase text-gold-500 tracking-widest font-black font-display">
                  Portfólio Dom Corte
                </span>
                <h3 className="text-lg font-bold text-white font-serif mt-0.5">
                  {item.title}
                </h3>
                <p className="text-xs text-white/60 font-sans mt-1 line-clamp-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox / Modal de Ampliação Imersiva */}
      <AnimatePresence>
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Backdrop escuro com desfoque */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="absolute inset-0 bg-black/95 backdrop-blur-md"
            />

            {/* Container do Slide Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative bg-[#0c0c0c] max-w-lg w-full rounded-sm overflow-hidden border border-white/10 shadow-2xl z-10"
            >
              {/* Botão de Fechar */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-20 p-2 bg-black/80 text-gray-400 hover:text-white rounded-sm border border-white/10 hover:border-white/20 transition-all active:scale-90"
                id="gallery-modal-close"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Imagem Ampliada */}
              <div className="relative aspect-[3/4] max-h-[60vh] w-full overflow-hidden">
                <img
                  src={selectedImage.url}
                  alt={selectedImage.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover animate-fade-in"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-transparent to-transparent animate-fade-in" />
              </div>

              {/* Detalhes do Estilo */}
              <div className="p-6 text-left">
                <span className="text-[10px] uppercase text-gold-500 tracking-widest font-black font-display">Estilo Selecionado</span>
                <h3 className="text-2xl font-bold text-white font-serif mt-0.5 leading-tight">
                  {selectedImage.title}
                </h3>
                <p className="text-white/60 text-sm font-sans mt-2 mb-6">
                  {selectedImage.desc}
                </p>

                {/* Botão de WhatsApp contextual do estilo */}
                <a
                  href={getWhatsAppLink(BARBER_CONFIG.whatsappNumber, getStyleMessage(selectedImage.title))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-black font-bold uppercase text-xs sm:text-sm py-4 px-6 rounded-sm tracking-widest font-display transition-all shadow-[0_0_15px_rgba(212,175,55,0.3)] active:scale-95"
                  id="gallery-modal-book-style"
                >
                  <MessageSquare className="w-4 h-4" />
                  Quero este Estilo
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
