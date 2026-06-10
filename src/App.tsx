import Header from "./components/Header";
import Hero from "./components/Hero";
import FeatureTicker from "./components/FeatureTicker";
import Services from "./components/Services";
import Combos from "./components/Combos";
import Gallery from "./components/Gallery";
import BookingSteps from "./components/BookingSteps";
import About from "./components/About";
import WhatsAppCTA from "./components/WhatsAppCTA";
import ContactLocation from "./components/ContactLocation";
import WhatsAppFloatingButton from "./components/WhatsAppFloatingButton";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col selection:bg-gold-500 selection:text-black antialiased">
      {/* 1. Header Fixo com Desfoque */}
      <Header />

      {/* 2. Hero Section Principal */}
      <Hero />

      {/* 3. Faixa de Destaque Promocional */}
      <FeatureTicker />

      {/* 4. Seção Completa de Serviços */}
      <Services />

      {/* 5. Seção de Combos Especiais */}
      <Combos />

      {/* 6. Galeria de Estilos & Portfólio */}
      <Gallery />

      {/* 7. Seção Informativa de Agendamento */}
      <BookingSteps />

      {/* 8. História & Benefícios */}
      <About />

      {/* 9. Chamada Forte de Conversão para WhatsApp */}
      <WhatsAppCTA />

      {/* 10. Localização GPS & Timetables */}
      <ContactLocation />

      {/* 11. Rodapé Comercial do Modelo */}
      <Footer />

      {/* 12. Botão Flutuante de WhatsApp Geral */}
      <WhatsAppFloatingButton />
    </div>
  );
}
