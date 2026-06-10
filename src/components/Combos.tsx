import { motion } from "motion/react";
import { Star, Flame, Zap, CheckCircle2 } from "lucide-react";
import { BARBER_COMBOS, BARBER_CONFIG, getWhatsAppLink } from "../types";

export default function Combos() {
  const getCustomComboMessage = (comboName: string) => {
    return `Olá! Gostaria de agendar o ${comboName} na Barbearia Dom Corte. Tem horário disponível?`;
  };

  const getComboIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Zap className="w-8 h-8 text-gold-500" />;
      case 1:
        return <Flame className="w-8 h-8 text-amber-500 animate-pulse" />;
      default:
        return <Star className="w-8 h-8 text-yellow-400" />;
    }
  };

  return (
    <section id="combos" className="bg-[#050505] py-24 relative overflow-hidden border-t border-white/5">
      {/* Luz ambiente de fundo */}
      <div className="absolute left-1/2 -translate-x-1/2 top-1/4 w-[400px] h-[400px] bg-gold-400/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho de Seção */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-gold-500 text-xs font-bold uppercase tracking-[0.25em] block mb-3 font-display">
            ECONOMIZE COM INTELIGÊNCIA
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-serif mb-4 tracking-tight">
            Combos especiais
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto my-4 rounded-full" />
          <p className="text-white/60 font-sans text-sm sm:text-base md:text-lg leading-relaxed">
            Pacotes de serviços combinados pensados exclusivamente para quem deseja sair com o estilo inteiramente alinhado e economizar com sofisticação.
          </p>
        </div>

        {/* Grade de Combos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {BARBER_COMBOS.map((combo, index) => {
            const isFeatured = combo.name === "Combo Dom Corte"; // Signature Highlight
            const waUrl = getWhatsAppLink(
              BARBER_CONFIG.whatsappNumber,
              getCustomComboMessage(combo.name)
            );

            return (
              <motion.div
                key={combo.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`relative flex flex-col justify-between rounded-sm p-8 transition-all duration-300 ${
                  isFeatured
                    ? "bg-[#0e0e0e] border-2 border-gold-500 shadow-[0_0_25px_rgba(212,175,55,0.15)] scale-105 md:-translate-y-2 z-10"
                    : "bg-[#0c0c0c] border border-white/5 hover:border-gold-500/20 shadow-lg"
                }`}
              >
                {/* Destaque Tag */}
                {isFeatured && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-gold-500 to-gold-600 text-black text-[10px] font-extrabold uppercase px-4 py-1.5 rounded-sm tracking-widest font-display shadow-lg shadow-gold-500/20">
                    O Mais Vendido 🔥
                  </div>
                )}

                <div>
                  {/* Cabeçalho do Combo Card */}
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white font-serif tracking-wide uppercase">
                        {combo.name}
                      </h3>
                      <p className="text-[10px] uppercase text-gold-500 font-bold font-display tracking-widest mt-1">
                        Estilo Completo
                      </p>
                    </div>
                    <div className="p-2.5 bg-white/5 rounded-sm border border-white/10">
                      {getComboIcon(index)}
                    </div>
                  </div>

                  {/* Serviços Inclusos */}
                  <div className="space-y-4 mb-8">
                    <span className="text-[11px] uppercase tracking-wider text-white/40 font-display block">Serviços Inclusos</span>
                    <div className="flex gap-2.5 items-center bg-white/5 p-3.5 rounded-sm border border-white/5">
                      <CheckCircle2 className="w-5 h-5 text-gold-500 shrink-0" />
                      <span className="text-sm font-semibold text-white/90 font-sans leading-snug">
                        {combo.items}
                      </span>
                    </div>
                    
                    <div className="space-y-2 pt-2">
                      <div className="flex items-center gap-2 text-xs text-white/60">
                        <span className="w-1 h-1 rounded-full bg-gold-500" />
                        <span>Acabamento impecável navalhado</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-white/60">
                        <span className="w-1 h-1 rounded-full bg-gold-500" />
                        <span>Produtos premium para barba/penteado</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Preço e Botão */}
                <div className="mt-8 pt-6 border-t border-white/5">
                  <div className="flex items-baseline justify-between mb-6">
                    <span className="text-xs text-white/40 uppercase tracking-wider font-display">Preço Especial</span>
                    <div className="text-right">
                      <span className="text-3xl font-bold font-serif text-gold-500">
                        {combo.price.toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </span>
                    </div>
                  </div>

                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full flex items-center justify-center gap-2 py-4 px-6 text-xs uppercase font-extrabold tracking-widest rounded-sm font-display transition-all duration-300 text-center ${
                      isFeatured
                        ? "bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-black shadow-lg shadow-gold-500/15"
                        : "bg-[#121212] hover:bg-gold-500 text-white hover:text-black border border-white/5 hover:border-gold-500"
                    }`}
                    id={`combo-book-btn-${combo.id}`}
                  >
                    Agendar Combo
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
