import { motion } from "motion/react";
import { Scissors } from "lucide-react";

export default function FeatureTicker() {
  const items = [
    "Corte masculino",
    "Barba alinhada",
    "Degradê na navalha",
    "Sobrancelha design",
    "Agendamento prático pelo WhatsApp"
  ];

  return (
    <div id="ticker" className="bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 py-3.5 overflow-hidden flex items-center shadow-lg relative z-20">
      {/* Subtle blend shadow overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-gold-500/30 to-transparent pointer-events-none z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-gold-500/30 to-transparent pointer-events-none z-10" />
      
      <div className="flex whitespace-nowrap gap-8">
        <motion.div
          animate={{ x: [0, -1030] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 25,
          }}
          className="flex items-center gap-8 text-black uppercase text-xs sm:text-sm font-extrabold tracking-[0.25em] font-display"
        >
          {/* Replica items 3 times for seamless looping */}
          {Array.from({ length: 3 }).map((_, loopIdx) => (
            <div key={loopIdx} className="flex items-center gap-8">
              {items.map((item, itemIdx) => (
                <div key={itemIdx} className="flex items-center gap-8">
                  <span className="font-black">{item}</span>
                  <Scissors className="w-4 h-4 text-black/60 rotate-90" />
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
