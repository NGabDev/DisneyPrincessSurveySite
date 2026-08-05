import React from "react";
import { motion } from "motion/react";
import StarField from "./StarField";
import { princesses, traitProfiles } from "../data/princesses";

export default function ResultScreen({ traits, onRestart }: { traits: string[]; onRestart: () => void }) {
  const traitCounts: Record<string, number> = {};
  traits.forEach((t) => { traitCounts[t] = (traitCounts[t] || 0) + 1; });
  const topTrait = Object.entries(traitCounts).sort((a, b) => b[1] - a[1])[0]?.[0] || "";
  const profile = traitProfiles[topTrait] || { title: "A Única", description: "Você é verdadeiramente especial.", emoji: "💫" };
  const allTraits = traits.map((t) => traitProfiles[t]).filter(Boolean) as any[];

  return (
    <motion.div className="flex flex-col h-full relative overflow-hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.6 }} style={{ background: "linear-gradient(135deg, #0d0a1e 0%, #1a0a30 50%, #0a1a20 100%)" }}>
      <StarField color="#c084fc" />
      <StarField color="#f9d276" />

      <div className="relative z-10 flex flex-col items-center justify-start h-full pt-10 pb-8 px-8 overflow-y-auto">
        <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.2, type: "spring" }} className="text-7xl mb-4">{profile.emoji}</motion.div>

        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }} className="text-center mb-2">
          <p className="font-nunito text-sm uppercase tracking-widest mb-2" style={{ color: "#c084fc" }}>Seu resultado</p>
          <h1 className="font-playfair text-4xl font-bold leading-tight mb-3" style={{ color: "#f5e6ff" }}>{profile.title}</h1>
          <p className="font-nunito text-base leading-relaxed" style={{ color: "rgba(245,230,255,0.7)" }}>{profile.description}</p>
        </motion.div>

        <motion.div className="w-full h-px my-6" style={{ backgroundColor: "rgba(192,132,252,0.2)" }} initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.6 }} />

        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.7 }} className="w-full mb-6">
          <p className="font-nunito text-xs uppercase tracking-widest text-center mb-4" style={{ color: "rgba(245,230,255,0.4)" }}>Suas facetas</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {allTraits.map((t, i) => (
              <motion.span key={i} className="font-nunito text-sm px-3 py-1.5 rounded-full" style={{ backgroundColor: "rgba(192,132,252,0.12)", border: "1px solid rgba(192,132,252,0.25)", color: "#c084fc" }} initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.75 + i * 0.06 }}>{t.emoji} {t.title}</motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div className="w-full mb-6" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.9 }}>
          <p className="font-nunito text-xs uppercase tracking-widest text-center mb-4" style={{ color: "rgba(245,230,255,0.4)" }}>Suas princesas inspiração</p>
          <div className="grid grid-cols-4 gap-2">
            {princesses.map((p) => (
              <div key={p.name} className="flex flex-col items-center gap-1 p-3 rounded-2xl" style={{ backgroundColor: `${p.color}10`, border: `1px solid ${p.color}20` }}>
                <span className="text-2xl">{p.emoji}</span>
                <span className="font-nunito text-xs text-center leading-tight" style={{ color: p.color }}>{p.name}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.button onClick={onRestart} className="font-nunito font-bold text-base px-10 py-3.5 rounded-full" style={{ background: "linear-gradient(135deg, #c084fc, #818cf8)", color: "#0d0a1e", boxShadow: "0 0 30px rgba(192,132,252,0.35)" }} initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1.1 }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>✨ Refazer o Quiz</motion.button>
      </div>
    </motion.div>
  );
}
