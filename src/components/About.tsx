import { motion } from "motion/react";
import { Award, Flame, MapPin, Sparkles, MessageSquare, ShieldCheck } from "lucide-react";
import { BARBER_CONFIG } from "../types";

export default function About() {
  const differentials = [
    {
      icon: <Award className="w-5 h-5 text-gold-500" />,
      title: "Atendimento profissional",
      desc: "Barbeiros especialistas com anos de experiência no mercado masculino."
    },
    {
      icon: <Sparkles className="w-5 h-5 text-gold-500" />,
      title: "Ambiente confortável",
      desc: "Excelente climatização, café quente e espaço projetado para o seu descanso."
    },
    {
      icon: <Flame className="w-5 h-5 text-gold-500" />,
      title: "Acabamento na navalha",
      desc: "Uso tradicional de navalha, espuma aquecida e toalhas quentes aromáticas."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-gold-500" />,
      title: "Cortes modernos e clássicos",
      desc: "Dominamos do pompadour clássico ao degradê moderno com alta precisão."
    },
    {
      icon: <MessageSquare className="w-5 h-5 text-gold-500" />,
      title: "Agendamento pelo WhatsApp",
      desc: "Escolha rapidamente o serviço, dia e horário que cabem no seu calendário."
    },
    {
      icon: <MapPin className="w-5 h-5 text-gold-500" />,
      title: "Localização fácil",
      desc: "Situada na área central de Nova Iguaçu, com fácil acesso e estacionamento por perto."
    }
  ];

  return (
    <section id="sobre" className="bg-[#050505] py-24 relative overflow-hidden border-t border-white/5">
      {/* Auroras de iluminação no fundo */}
      <div className="absolute left-0 bottom-0 w-[400px] h-[400px] bg-gold-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute right-0 top-0 w-[300px] h-[300px] bg-white/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Lado Esquerdo - Detalhes da Narrativa */}
          <div className="lg:col-span-7">
            <span className="text-gold-500 text-xs font-bold uppercase tracking-[0.25em] block mb-3 font-display">
              EXCLUSIVIDADE & TRADICÃO
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-serif mb-6 tracking-tight">
              Sobre a {BARBER_CONFIG.name}
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mb-8 rounded-full" />
            
            <p className="text-white/70 font-sans text-base sm:text-lg leading-relaxed mb-8">
              A <strong className="text-gold-500 hover:text-gold-400 transition-colors">Barbearia Dom Corte</strong> é um espaço inteiramente criado para o homem moderno que verdadeiramente valoriza estilo, autocuidado e atendimento de excelência. Trabalhamos meticulosamente com cortes masculinos, degradê, barba com toalha quente, sobrancelha e combos completos para manter o seu visual sempre no mais alto padrão de alinhamento.
            </p>

            <h3 className="text-sm font-bold text-white/50 uppercase tracking-[0.2em] mb-6 font-display">
              Por que escolher a Dom Corte?
            </h3>

            {/* Diferenciais em Grid Compacto e Elegante */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {differentials.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.08 }}
                  className="flex gap-4 p-4 bg-[#0c0c0c] border border-white/5 rounded-sm hover:border-gold-500/20 group transition-all"
                >
                  <div className="w-10 h-10 rounded-sm bg-[#121212] border border-white/5 flex items-center justify-center shrink-0 group-hover:bg-gold-500/10 group-hover:border-gold-400/30 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold font-serif text-white group-hover:text-gold-500 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-white/50 font-sans mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Lado Direito - Imagem Estética com Detalhe Premium */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            {/* Elemento de background dourado vazado */}
            <div className="absolute -inset-4 border-2 border-gold-500/20 rounded-sm pointer-events-none transform translate-x-2 translate-y-2 z-0" />

            <div className="relative z-10 overflow-hidden rounded-sm shadow-2xl aspect-[3/4] border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=800"
                alt="Ambiente Dom Corte"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover filter brightness-90 hover:brightness-100 hover:scale-102 transition-all duration-700"
              />
              
              {/* Overlay gradiente */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent pointer-events-none" />

              {/* Box de Informação Por Cima da Imagem */}
              <div className="absolute bottom-6 left-6 right-6 bg-black/90 backdrop-blur-md border border-white/5 p-5 rounded-sm text-left">
                <span className="text-[10px] uppercase font-bold tracking-widest text-gold-500 font-display">Estilo de Vida</span>
                <p className="text-white font-serif text-sm font-bold mt-1 leading-snug">
                  "Mais que cortar o cabelo, é renovar a sua autoconfiança no dia a dia."
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
