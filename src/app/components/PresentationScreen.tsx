import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import StarField from "./StarField";
import { loadPrincessData } from "../data/dados_da_princesa";

export default function PresentationScreen({ onAdvance }: { onAdvance: () => void }) {
  const [name, setName] = useState("");

  useEffect(() => {
    const data = loadPrincessData();
    if (data.name) setName(data.name);
  }, []);

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen relative overflow-hidden px-6 py-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.6 }}
    >
      <StarField color="#c084fc" />

      <motion.div className="relative z-10 w-full max-w-3xl rounded-3xl p-8 sm:p-10" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
        <p className="font-nunito text-sm uppercase tracking-[0.3em] mb-4" style={{ color: 'rgba(245,230,255,0.7)' }}>
          História em construção
        </p>

        {name ? (
          <p className="font-nunito text-base mb-6" style={{ color: 'rgba(245,230,255,0.95)' }}>
            Seja Bem-vinda, {name}!
          </p>
        ) : null}

        <div className="space-y-4 text-left">
          <p className="font-nunito text-lg leading-relaxed" style={{ color: 'rgba(245,230,255,0.82)' }}>
            Há muito tempo, os reinos encantados descobriram que cada princesa possui uma história única.
          </p>
          <p className="font-nunito text-lg leading-relaxed" style={{ color: 'rgba(245,230,255,0.82)' }}>
            Algumas gostam de aventuras. Outras encontram felicidade nas pequenas coisas. Todas, porém, carregam sonhos, medos e lembranças que as tornam especiais.
          </p>
          <p className="font-nunito text-lg leading-relaxed" style={{ color: 'rgba(245,230,255,0.82)' }}>
            Mas nenhuma história nasce pronta. Ela é construída por pequenos momentos, escolhas inesperadas e lembranças que ficam guardadas no coração.
          </p>
          <p className="font-nunito text-lg leading-relaxed" style={{ color: 'rgba(245,230,255,0.82)' }}>
            Talvez seja exatamente isso que torna cada princesa tão especial.
          </p>
        </div>

        <motion.button
          onClick={onAdvance}
          className="mt-10 font-nunito font-bold text-lg px-8 py-3 rounded-full"
          style={{ background: 'linear-gradient(135deg, #c084fc, #818cf8)', color: '#0d0a1e' }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          Avançar
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
