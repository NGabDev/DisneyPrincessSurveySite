import React, { useState } from "react";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import StarField from "./StarField";
import type { Princess } from "../data/princesses";

export default function QuestionScreen({
  princess,
  questionIndex,
  total,
  onAnswer,
  onBack,
}: {
  princess: Princess;
  questionIndex: number;
  total: number;
  onAnswer: (trait: string) => void;
  onBack: () => void;
}) {
  const [selected, setSelected] = useState<string | null>(null);

  function handleSelect(trait: string) {
    if (selected) return;
    setSelected(trait);
    setTimeout(() => onAnswer(trait), 600);
  }

  return (
    <motion.div className={`flex flex-col h-full relative overflow-hidden bg-gradient-to-br ${princess.bgGradient}`} initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -60 }} transition={{ duration: 0.45, ease: "easeInOut" }}>
      <StarField color={princess.sparkle} />

      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-start gap-4 px-8 pt-6">
          <button
            onClick={onBack}
            className="flex items-center justify-center w-9 h-9 rounded-full flex-shrink-0 mt-0.5 transition-all duration-200"
            style={{ backgroundColor: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(245,230,255,0.7)" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "rgba(255,255,255,0.14)"; (e.currentTarget as HTMLButtonElement).style.color = "#f5e6ff"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "rgba(255,255,255,0.08)"; (e.currentTarget as HTMLButtonElement).style.color = "rgba(245,230,255,0.7)"; }}
          >
            <ArrowLeft size={16} />
          </button>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              {Array.from({ length: total }).map((_, i) => (
                <div key={i} className="h-1.5 flex-1 rounded-full transition-all duration-500" style={{ backgroundColor: i < questionIndex + 1 ? princess.color : "rgba(255,255,255,0.12)" }} />
              ))}
            </div>
            <p className="text-xs font-nunito" style={{ color: "rgba(255,255,255,0.35)" }}>{questionIndex + 1} de {total} perguntas</p>
          </div>
        </div>

        <div className="flex flex-col items-center pt-6 pb-4 px-8">
          <motion.div className="text-7xl mb-3" initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.15, type: "spring", stiffness: 200 }}>{princess.emoji}</motion.div>
          <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.25 }} className="text-center">
            <p className="font-nunito text-sm font-semibold uppercase tracking-widest mb-1" style={{ color: princess.color }}>{princess.name} — {princess.movie}</p>
            <p className="font-nunito text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>{princess.description}</p>
          </motion.div>
        </div>

        <div className="mx-8 h-px mb-6" style={{ backgroundColor: `${princess.color}30` }} />

        <motion.div className="px-8 mb-8" initial={{ y: 15, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }}>
          <h2 className="font-playfair text-2xl font-semibold text-center leading-snug" style={{ color: "#f5e6ff" }}>{princess.question}</h2>
        </motion.div>

        <div className="flex flex-col gap-3 px-8 pb-8 flex-1">
          {princess.options.map((option, i) => {
            const isSelected = selected === option.trait;
            const isDisabled = selected !== null && !isSelected;
            return (
              <motion.button key={option.trait} onClick={() => handleSelect(option.trait)} className="w-full text-left px-5 py-4 rounded-2xl font-nunito font-medium text-base transition-all duration-300" style={{ backgroundColor: isSelected ? `${princess.color}28` : "rgba(255,255,255,0.05)", border: `1.5px solid ${isSelected ? princess.color : "rgba(255,255,255,0.1)"}`, color: isSelected ? princess.color : "rgba(245,230,255,0.85)", opacity: isDisabled ? 0.35 : 1, boxShadow: isSelected ? `0 0 24px ${princess.color}30` : "none", transform: isSelected ? "scale(1.01)" : "scale(1)" }} initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.35 + i * 0.08 }} whileHover={!selected ? { backgroundColor: `${princess.color}14`, borderColor: `${princess.color}60`, color: "#f5e6ff" } : {}} whileTap={!selected ? { scale: 0.98 } : {}}>
                {option.text}
              </motion.button>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
