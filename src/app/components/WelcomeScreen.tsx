import React from "react";
import { motion } from "motion/react";
import StarField from "./StarField";
import { princesses } from "../data/princesses";

export default function WelcomeScreen({ onStart }: { onStart: () => void }) {
  return (
    <motion.div
      className="flex flex-col items-center justify-center h-full relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6 }}
    >
      <StarField color="#c084fc" />

      <motion.div className="flex gap-3 mb-8 flex-wrap justify-center px-8" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
        {princesses.map((p, i) => (
          <motion.div key={p.name} className="text-3xl" animate={{ y: [0, -8, 0] }} transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.2, ease: "easeInOut" }}>
            {p.emoji}
          </motion.div>
        ))}
      </motion.div>

      <motion.div className="text-center px-10 mb-10" initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }}>
        <h1 className="font-playfair text-5xl font-bold leading-tight mb-3" style={{ color: "#f5e6ff" }}>
          Você conhece as princesas.
          <br />
          <span style={{ color: "#c084fc" }}>Agora elas conhecerão você.</span>
        </h1>
        <p className="font-nunito text-lg" style={{ color: "rgba(245,230,255,0.6)" }}>
          Cada uma preparou uma pequena pergunta para descobrir seus gostos, sonhos e as pequenas coisas que fazem você sorrir.
          <br />
          Afinal, toda princesa merece ter uma história para contar.
        </p>
      </motion.div>

      <motion.div className="grid grid-cols-4 gap-3 px-8 mb-10 w-full max-w-lg" initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6 }}>
        {princesses.map((p) => (
          <div key={p.name} className="rounded-2xl p-3 flex flex-col items-center gap-1" style={{ backgroundColor: `${p.color}18`, border: `1px solid ${p.color}30` }}>
            <span className="text-2xl">{p.emoji}</span>
            <span className="font-nunito text-xs font-semibold text-center leading-tight" style={{ color: p.color }}>{p.name}</span>
          </div>
        ))}
      </motion.div>

      <motion.button
        onClick={onStart}
        className="font-nunito font-bold text-lg px-12 py-4 rounded-full"
        style={{ background: "linear-gradient(135deg, #c084fc, #818cf8)", color: "#0d0a1e", boxShadow: "0 0 40px rgba(192,132,252,0.4)" }}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
        whileHover={{ scale: 1.05, boxShadow: "0 0 60px rgba(192,132,252,0.6)" }}
        whileTap={{ scale: 0.97 }}
      >
        ✨ Abrir meu livro
      </motion.button>
    </motion.div>
  );
}
