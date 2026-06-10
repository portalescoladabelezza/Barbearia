import { motion } from "motion/react";
import { MessageSquare, Check } from "lucide-react";
import { BARBER_SERVICES, BARBER_CONFIG, getWhatsAppLink } from "../types";

export default function Services() {
  const formatPrice = (price: number) => {
    return price.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  const getCustomServiceMessage = (serviceName: string) => {
    return `Olá! Gostaria de agendar ${serviceName} na Barbearia Dom Corte. Tem horário disponível?`;
  };

  return (
    <section id="servicos" className="bg-[#050505] py-24 relative overflow-hidden border-t border-white/5">
      
      {/* Detalhes de Background para Elegância */}
      <div className="absolute right-0 top-1/3 w-[300px] h-[300px] bg-gold-500/5 blur-[90px] rounded-full pointer-events-none" />
      <div className="absolute left-0 bottom-1/4 w-[350px] h-[350px] bg-gold-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho de Seção */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold-500 text-xs font-bold uppercase tracking-[0.25em] block mb-3 font-display">
            CARDÁPIO DE BELEZA MASCULINA
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-serif mb-4 tracking-tight">
            Serviços da barbearia
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto my-4 rounded-full" />
          <p className="text-white/60 font-sans text-sm sm:text-base md:text-lg leading-relaxed">
            Escolha o serviço desejado e agende seu horário em menos de um minuto pelo WhatsApp.
          </p>
        </div>

        {/* Grade de 6 Cards de Serviços */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BARBER_SERVICES.map((service, index) => {
            const waUrl = getWhatsAppLink(
              BARBER_CONFIG.whatsappNumber, 
              getCustomServiceMessage(service.name)
            );

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-col justify-between bg-[#0c0c0c] border border-white/5 hover:border-gold-500/40 rounded-sm overflow-hidden transition-all duration-300 shadow-[0_4px_25px_rgba(0,0,0,0.6)] hover:shadow-gold-500/5 hover:-translate-y-1 relative"
              >
                <div>
                  {/* Container da Imagem do Card */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90 group-hover:brightness-100"
                    />
                    {/* Tarjeta da Etiqueta Flutuante - sharp contours */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-black/90 backdrop-blur-md text-gold-500 text-[10px] font-bold px-3 py-1.5 rounded-sm border border-gold-500/30 uppercase tracking-widest font-display">
                        {service.tag}
                      </span>
                    </div>
                  </div>

                  {/* Detalhes do Serviço */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold font-serif text-white mb-2 group-hover:text-gold-500 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-sm text-white/50 leading-relaxed font-sans line-clamp-3 h-[60px] mb-4">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Preço e CTA */}
                <div className="p-6 pt-0 mt-auto">
                  <div className="flex items-baseline justify-between mb-5 border-t border-white/5 pt-4">
                    <span className="text-xs text-white/40 uppercase tracking-wider font-display">Valor do Investimento</span>
                    <span className="text-2xl font-bold font-serif text-gold-500">
                      {formatPrice(service.price)}
                    </span>
                  </div>

                  {/* Agendar Button - Full width, sharp shape */}
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-[#121212] hover:bg-gold-500 text-white hover:text-black font-bold uppercase tracking-wider text-xs py-3.5 px-4 rounded-sm transition-all duration-300 border border-white/5 hover:border-gold-500 shadow-sm font-display text-center whitespace-nowrap overflow-hidden"
                    id={`service-book-btn-${service.id}`}
                  >
                    <MessageSquare className="w-4 h-4 shrink-0" />
                    Agendar pelo WhatsApp
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
