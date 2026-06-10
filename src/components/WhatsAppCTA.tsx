import { motion } from "motion/react";
import { MessageSquare, Calendar } from "lucide-react";
import { BARBER_CONFIG, getWhatsAppLink } from "../types";

export default function WhatsAppCTA() {
  const waMessage = "Olá! Vi o site da Barbearia Dom Corte e gostaria de agendar um horário.";
  const waUrl = getWhatsAppLink(BARBER_CONFIG.whatsappNumber, waMessage);

  return (
    <section className="bg-[#050505] py-20 relative overflow-hidden border-t border-white/5">
      
      {/* Luz ambiente de fundo verde/dourado */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[500px] h-[300px] bg-gold-400/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Container principal estruturado tipo Banner com borda dourada - sharp borders */}
        <div className="relative bg-[#0c0c0c] rounded-sm p-8 sm:p-12 md:p-16 border border-gold-500/20 text-center shadow-2xl overflow-hidden">
          
          {/* Luz focal interna */}
          <div className="absolute -right-20 -top-20 w-60 h-60 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -bottom-20 w-60 h-60 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-2xl mx-auto relative z-10 flex flex-col items-center">
            
            {/* Ícone flutuante ou badge - sharp */}
            <div className="w-12 h-12 bg-gold-500/10 border border-gold-500/20 text-gold-500 rounded-sm flex items-center justify-center mb-6 animate-pulse">
              <Calendar className="w-5 h-5 text-gold-500" />
            </div>

            {/* Título de Conversão */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-serif mb-4 tracking-tight leading-tight">
              Seu próximo corte <br className="xs:hidden" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-500 to-gold-700">começa aqui.</span>
            </h2>

            {/* Subtítulo descritivo */}
            <p className="text-white/60 font-sans text-sm sm:text-base md:text-lg mb-8 leading-relaxed max-w-xl">
              Fale agora mesmo conosco pelo WhatsApp, consulte os horários livres e mude seu estilo com quem realmente entende de excelência e sofisticação masculina.
            </p>

            {/* Super Botão Principal - sharp corners */}
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-black font-extrabold uppercase tracking-widest text-xs sm:text-sm py-4.5 px-10 rounded-sm transition-all font-display shadow-[0_0_20px_rgba(212,175,55,0.3)]"
              id="cta-whatsapp-block"
            >
              <MessageSquare className="w-5 h-5 fill-black shrink-0" />
              Agendar pelo WhatsApp
            </motion.a>

            {/* Informações adicionais sob o botão */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mt-6 text-xs text-white/40 font-sans">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                Agendamento rápido em 1 minuto
              </span>
              <span className="hidden sm:inline text-white/20">•</span>
              <span>Resposta imediata e profissional</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
