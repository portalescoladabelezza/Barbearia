import { motion } from "motion/react";
import { Scissors, ClipboardList, MessageSquare, CalendarRange, Sparkles } from "lucide-react";

export default function BookingSteps() {
  const steps = [
    {
      id: "01",
      icon: <ClipboardList className="w-6 h-6 text-gold-500" />,
      title: "Escolha o serviço",
      desc: "Veja os cortes, barba, sobrancelha e combos especiais disponíveis.",
    },
    {
      id: "02",
      icon: <MessageSquare className="w-6 h-6 text-gold-500" />,
      title: "Clique no WhatsApp",
      desc: "Envie sua mensagem rápida e personalizada direto para a barbearia.",
    },
    {
      id: "03",
      icon: <CalendarRange className="w-6 h-6 text-gold-500" />,
      title: "Combine o horário",
      desc: "Consulte os horários disponíveis em tempo real e escolha a melhor hora.",
    },
    {
      id: "04",
      icon: <Sparkles className="w-6 h-6 text-gold-500" />,
      title: "Venha para o corte",
      desc: "Chegue no horário combinado, relaxe em nosso espaço e saia renovado.",
    },
  ];

  return (
    <section className="bg-[#050505] py-24 relative overflow-hidden border-t border-white/5">
      {/* Elementos geométricos sutis */}
      <div className="absolute left-10 top-10 w-48 h-48 bg-gold-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho de Seção */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-gold-500 text-xs font-bold uppercase tracking-[0.25em] block mb-3 font-display">
            PRÁTICO E DESCOMPLICADO
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-serif mb-4 tracking-tight">
            Como agendar seu horário
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto my-4 rounded-full" />
          <p className="text-white/60 font-sans text-sm sm:text-base md:text-lg leading-relaxed">
            Sem cadastros burocráticos ou complicação. Agendar seu atendimento na Dom Corte é simples e muito rápido.
          </p>
        </div>

        {/* Linha do Tempo de Etapas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {/* Linha indicativa conectando as de desktop nas telas grandes */}
          <div className="hidden lg:block absolute top-[54px] left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-gold-500/0 via-gold-500/20 to-gold-500/0 z-0 pointer-events-none" />

          {steps.map((step, idx) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              className="relative flex flex-col items-center text-center p-6 bg-[#0c0c0c] border border-white/5 rounded-sm hover:border-gold-500/30 hover:bg-[#0e0e0e] transition-colors group z-10 shadow-lg"
              id={`booking-step-card-${step.id}`}
            >
              {/* Círculo do Ícone - sharp */}
              <div className="relative mb-6">
                <div className="w-14 h-14 rounded-sm bg-[#121212] flex items-center justify-center border border-white/5 group-hover:border-gold-500/40 group-hover:bg-[#1c1810] transition-all duration-300">
                  {step.icon}
                </div>
                
                {/* ID da Etapa flutuante - sharp outline */}
                <span className="absolute -top-2.5 -right-2.5 bg-gradient-to-br from-gold-500 to-gold-600 text-black text-xs font-black w-6 h-6 rounded-sm flex items-center justify-center font-display shadow-md shadow-gold-500/10 animate-pulse">
                  {step.id}
                </span>
              </div>

              {/* Título e Texto */}
              <h3 className="text-lg font-bold text-white font-serif mb-3 group-hover:text-gold-500 transition-colors">
                {step.title}
              </h3>
              <p className="text-sm text-white/50 font-sans leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
