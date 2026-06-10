import { motion } from "motion/react";
import { ArrowRight, Calendar } from "lucide-react";
import { BARBER_CONFIG, getWhatsAppLink } from "../types";

export default function Hero() {
  const waMessage = "Olá! Vi o site da Barbearia Dom Corte e gostaria de agendar um horário.";
  const waUrl = getWhatsAppLink(BARBER_CONFIG.whatsappNumber, waMessage);

  return (
    <section
      id="inicio"
      className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Imagem de Fundo Premium com Efeitos de Recobrimento */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 scale-105 transition-all duration-1000"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=1920')`
        }}
      />
      
      {/* Vinhetas e Gradientes de Contraste para o Tema Escuro Premium */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/75 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent" />
      
      {/* Efeito Aurora de Luz de Ouro */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold-400/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Conteúdo Principal */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-left">
        <div className="max-w-3xl">
          
          {/* Tag de Saudação */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse" />
            <span className="text-[11px] font-sans text-gray-300 uppercase tracking-widest font-semibold">
              Atendimento Premium em Nova Iguaçu
            </span>
          </motion.div>

          {/* Título Principal */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight mb-6"
            id="hero-main-title"
          >
            Corte, barba e estilo <br className="hidden sm:inline" />
            no padrão que <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-500 to-gold-700">você merece.</span>
          </motion.h1>

          {/* Subtítulo */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-sans text-base sm:text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl mb-10"
            id="hero-subtitle"
          >
            Agende seu horário e venha renovar o visual com atendimento profissional, ambiente confortável e acabamento premium de altíssima qualidade.
          </motion.p>

          {/* Botões de Chamada para Ação */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-start"
          >
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-black font-bold uppercase tracking-wider text-xs sm:text-sm px-8 py-4 rounded-sm transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.35)] hover:scale-105 active:scale-95 font-display"
              id="hero-cta-whatsapp"
            >
              <Calendar className="w-5 h-5 text-black" />
              Agendar Agora
              <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/20 hover:border-gold-500 hover:text-gold-500 text-white font-bold uppercase tracking-wider text-xs sm:text-sm px-8 py-4 rounded-sm transition-all duration-300 active:scale-95 font-display bg-white/5 backdrop-blur-sm"
              id="hero-cta-services"
            >
              Ver Serviços
            </a>
          </motion.div>
          
        </div>
      </div>

      {/* Indicador de Deslizamento para Baixo */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center">
        <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-2 font-display">Deslizar para explorar</span>
        <div className="w-[1.5px] h-10 bg-white/10 rounded-full overflow-hidden">
          <motion.div 
            animate={{ 
              y: [0, 40, 0] 
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="w-full h-1/3 bg-gold-500 rounded-full" 
          />
        </div>
      </div>
    </section>
  );
}
