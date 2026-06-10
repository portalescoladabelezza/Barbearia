import { motion } from "motion/react";
import { Clock, MapPin, Navigation, Phone, Instagram, Facebook } from "lucide-react";
import { BARBER_CONFIG } from "../types";

export default function ContactLocation() {
  return (
    <section id="contato" className="bg-[#050505] py-24 relative overflow-hidden border-t border-white/5">
      
      {/* Luz ambiente de fundo */}
      <div className="absolute right-0 bottom-0 w-[400px] h-[300px] bg-gold-400/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho de Seção */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold-500 text-xs font-bold uppercase tracking-[0.25em] block mb-3 font-display">
            CONTATO & LOCALIZAÇÃO
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-serif mb-4 tracking-tight">
            Horário e localização
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto my-4 rounded-full" />
          <p className="text-white/60 font-sans text-sm sm:text-base md:text-lg leading-relaxed">
            Consulte nossos períodos de funcionamento ou clique para traçar a rota mais rápida até nossa barbearia.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Lado Esquerdo - Detalhes Horário e Redes Sociais */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            
            {/* Bloco de Funcionamento - sharp outline */}
            <div className="bg-[#0c0c0c] border border-white/5 p-8 rounded-sm relative overflow-hidden flex-1 shadow-lg">
              
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gold-500/10 text-gold-500 border border-gold-500/30 rounded-sm">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold font-serif text-white">Horários de Atendimento</h3>
              </div>

              <div className="space-y-4 mb-6">
                
                {/* Linha 1 */}
                <div className="flex justify-between items-center py-2.5 border-b border-white/5">
                  <span className="text-sm font-semibold text-white/70 font-sans">Terça a sexta:</span>
                  <span className="text-sm font-semibold text-white font-sans bg-white/5 py-1 px-3 rounded-sm">
                    9h às 19h
                  </span>
                </div>

                {/* Linha 2 */}
                <div className="flex justify-between items-center py-2.5 border-b border-white/5">
                  <span className="text-sm font-semibold text-white/70 font-sans">Sábado:</span>
                  <span className="text-sm font-semibold text-white font-sans bg-white/5 py-1 px-3 rounded-sm">
                    8h às 18h
                  </span>
                </div>

                {/* Linha 3 */}
                <div className="flex justify-between items-center py-2.5">
                  <span className="text-sm font-semibold text-white/40 font-sans">Domingo e segunda:</span>
                  <span className="text-sm font-bold text-red-400 font-sans bg-red-400/5 py-1 px-3 rounded-sm border border-red-500/10">
                    Fechado
                  </span>
                </div>

              </div>

              {/* Informação sobre agendamento prévio - sharp shape */}
              <div className="bg-gold-500/5 border border-gold-500/20 p-4 rounded-sm text-center">
                <p className="text-xs font-semibold text-gold-500 uppercase tracking-widest font-display">
                  Atendimento: Com agendamento prévio pelo WhatsApp
                </p>
              </div>

            </div>

            {/* Bloco de Endereço e Rede Social - sharp shape */}
            <div className="bg-[#0c0c0c] border border-white/5 p-8 rounded-sm shadow-lg">
              
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-gold-500/10 text-gold-500 border border-gold-500/30 rounded-sm shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-wider text-white/40 font-bold font-display">Nosso Endereço</h4>
                  <p className="text-white text-base font-semibold font-serif mt-0.5">
                    {BARBER_CONFIG.address}
                  </p>
                </div>
              </div>

              {/* Redes Sociais */}
              <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                <span className="text-xs uppercase text-white/40 tracking-wider font-semibold font-display">
                  Siga-nos nas redes:
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={`https://instagram.com/${BARBER_CONFIG.instagramHandle}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-[#121212] hover:bg-gold-500 text-white/60 hover:text-black border border-white/5 hover:border-gold-500 rounded-sm transition-colors"
                    title="Instagram"
                    id="contact-instagram-social"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href={`https://facebook.com/${BARBER_CONFIG.facebookHandle}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-[#121212] hover:bg-gold-500 text-white/60 hover:text-black border border-white/5 hover:border-gold-500 rounded-sm transition-colors"
                    title="Facebook"
                    id="contact-facebook-social"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Lado Direito - Mapa Interativo Google Maps & Como Chegar */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="relative bg-[#0c0c0c] border border-white/5 rounded-sm overflow-hidden flex-1 flex flex-col justify-between shadow-lg h-full min-h-[350px]">
              
              {/* Iframe Real do Google Maps - sharp contours */}
              <div className="w-full flex-1 h-full min-h-[250px] relative">
                <iframe
                  title="Mapa Barbearia Dom Corte"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14742.637213257088!2d-43.45604106579301!3d-22.759530477815185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9c5d012dbca5e9%3A0xc3fec3f58540be!2sNova%20Igua%C3%A7u%20-%20RJ!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(120%) grayscale(60%)" }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                  id="google-maps-embed-frame"
                ></iframe>
              </div>

              {/* Botão Inferior de Navegação */}
              <div className="p-6 bg-[#0c0c0c] border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-left">
                  <p className="text-xs text-white/40 uppercase tracking-widest font-display font-semibold">Nova Iguaçu — RJ</p>
                  <p className="text-sm font-semibold text-white/70 font-sans mt-0.5">Clique do celular para abrir o GPS</p>
                </div>

                <a
                  href={BARBER_CONFIG.gmapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-black font-extrabold uppercase text-xs py-3.5 px-6 rounded-sm tracking-wider font-display transition-all shadow-[0_0_15px_rgba(212,175,55,0.25)] active:scale-95"
                  id="contact-gmaps-direction-btn"
                >
                  <Navigation className="w-4 h-4 fill-black" />
                  Como Chegar
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
