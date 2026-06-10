export interface BarberConfig {
  name: string;
  subdomain: string;
  whatsappNumber: string;
  instagramHandle: string;
  facebookHandle: string;
  address: string;
  gmapsLink: string;
  operatingHours: {
    weekdays: string;
    saturday: string;
    sundayMonday: string;
  };
}

export interface BarberService {
  id: number;
  name: string;
  description: string;
  price: number;
  tag: string;
  image: string;
}

export interface BarberCombo {
  id: number;
  name: string;
  items: string;
  price: number;
}

// Configurações Globais Fáceis de Alterar
export const BARBER_CONFIG: BarberConfig = {
  name: "Barbearia Dom Corte",
  subdomain: "barbearia.topbiolink.com.br",
  whatsappNumber: "5521969060505",
  instagramHandle: "barbeariadomcorte",
  facebookHandle: "barbeariadomcorte",
  address: "Rua Exemplo, 123 — Centro, Nova Iguaçu — RJ",
  gmapsLink: "https://maps.google.com/?q=Rua+Exemplo,+123+Centro+Nova+Iguaçu",
  operatingHours: {
    weekdays: "Terça a sexta: 9h às 19h",
    saturday: "Sábado: 8h às 18h",
    sundayMonday: "Domingo e segunda: fechado"
  }
};

// 6 Serviços Estipulados
export const BARBER_SERVICES: BarberService[] = [
  {
    id: 1,
    name: "Corte Masculino",
    description: "Corte moderno, clássico ou social com acabamento profissional e lavagem inclusa.",
    price: 35.00,
    tag: "Mais pedido",
    image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 2,
    name: "Corte Degradê",
    description: "Degradê baixo, médio ou alto feito com perfeição e acabamento detalhado na navalha.",
    price: 40.00,
    tag: "Destaque",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 3,
    name: "Barba Completa",
    description: "Modelagem de barba com toalha quente, óleos essenciais, massagem facial e corte na navalha.",
    price: 30.00,
    tag: "Premium",
    image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 4,
    name: "Corte + Barba",
    description: "Combo completo com corte masculino (ou degradê) e serviço de barba com toalha quente.",
    price: 60.00,
    tag: "Combo",
    image: "https://images.unsplash.com/photo-1512864084360-7c0c4d0a0845?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 5,
    name: "Sobrancelha",
    description: "Limpeza, design e alinhamento preciso para harmonizar e valorizar o rosto do homem.",
    price: 15.00,
    tag: "Rápido",
    image: "https://images.unsplash.com/photo-1605497746444-ac9db453f4a6?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 6,
    name: "Pezinho",
    description: "Acabamento rápido do contorno do cabelo para manter o corte alinhado entre as visitas.",
    price: 15.00,
    tag: "Manutenção",
    image: "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&fit=crop&q=80&w=600"
  }
];

// 3 Combos Especiais Estipulados
export const BARBER_COMBOS: BarberCombo[] = [
  {
    id: 1,
    name: "Combo Clássico",
    items: "Corte masculino + pezinho",
    price: 45.00
  },
  {
    id: 2,
    name: "Combo Dom Corte",
    items: "Corte degradê + barba completa",
    price: 65.00
  },
  {
    id: 3,
    name: "Combo Premium",
    items: "Corte + barba + sobrancelha",
    price: 75.00
  }
];

// Galeria de estilos (6 imagens imponentes e de alto contraste)
export const BARBER_GALLERY = [
  {
    id: 1,
    title: "Corte Degradê",
    url: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800",
    desc: "Degradê com transição perfeita e linhas limpas."
  },
  {
    id: 2,
    title: "Corte Social & Clássico",
    url: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=80&w=800",
    desc: "Estilo sofisticado para o homem moderno."
  },
  {
    id: 3,
    title: "Barba Alinhada",
    url: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=800",
    desc: "Design de barba com alta precisão na navalha."
  },
  {
    id: 4,
    title: "Cabelo com Risco",
    url: "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&fit=crop&q=80&w=800",
    desc: "Frisos e listras modernas para dar atitude ao penteado."
  },
  {
    id: 5,
    title: "Acabamento na Navalha",
    url: "https://images.unsplash.com/photo-1605497746444-ac9db453f4a6?auto=format&fit=crop&q=80&w=800",
    desc: "Navegação suave com toalha quente e espuma premium."
  },
  {
    id: 6,
    title: "Ambiente Dom Corte",
    url: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=800",
    desc: "Nosso espaço exclusivo com todo o conforto para você jogar conversa fora."
  }
];

// Função auxiliar para gerar link de WhatsApp com mensagem personalizada
export function getWhatsAppLink(phone: string, message: string): string {
  const encodedText = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encodedText}`;
}
