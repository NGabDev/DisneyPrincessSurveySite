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
  const [colorInput, setColorInput] = useState("");
  const [showColorInput, setShowColorInput] = useState(false);
  const [otherInput, setOtherInput] = useState("");
  const [showOtherInput, setShowOtherInput] = useState(false);
  const [inputError, setInputError] = useState("");
  const [otherError, setOtherError] = useState("");
  const [shake, setShake] = useState(false);
  const isBelleQuestion = princess.name === "Bela";
  const otherOptionTrait = isBelleQuestion ? "Prefiro outra" : "outros";

  function handleSelect(trait: string) {
    if (selected === trait) {
      setSelected(null);
      setShowColorInput(false);
      setShowOtherInput(false);
      setColorInput("");
      setOtherInput("");
      setInputError("");
      setOtherError("");
      return;
    }

    setSelected(trait);

    if (trait === otherOptionTrait) {
      setShowColorInput(false);
      setShowOtherInput(true);
      setColorInput("");
      setOtherInput("");
      setInputError("");
      setOtherError("");
      return;
    }

    if (!isBelleQuestion) {
      setShowColorInput(false);
      setShowOtherInput(false);
      setColorInput("");
      setOtherInput("");
      setInputError("");
      setOtherError("");
      setTimeout(() => onAnswer(trait), 600);
      return;
    }

    setShowColorInput(true);
    setShowOtherInput(false);
    setColorInput("");
    setOtherInput("");
    setInputError("");
    setOtherError("");
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!selected) return;

    const trimmedValue = colorInput.trim();
    if (!trimmedValue) {
      setInputError("A Bela ficou curiosa...");
      setShake(true);
      window.requestAnimationFrame(() => {
        setTimeout(() => setShake(false), 500);
      });
      return;
    }

    setInputError("");
    setShake(false);
    onAnswer(selected);
  }

  function handleOtherSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!selected) return;

    const trimmedValue = otherInput.trim();
    if (!trimmedValue) {
      setOtherError("Digite sua resposta para continuar.");
      setShake(true);
      window.requestAnimationFrame(() => {
        setTimeout(() => setShake(false), 500);
      });
      return;
    }

    setOtherError("");
    setShake(false);
    setShowOtherInput(true);
    setShowColorInput(isBelleQuestion);
    setColorInput("");
    setInputError("");

    if (!isBelleQuestion) {
      onAnswer(selected);
    }
  }

  const visibleOptions = princess.options.filter(
    (option, index, array) => array.findIndex((item) => item.text === option.text) === index
  );

  return (
    <motion.div className={`flex flex-col h-full relative overflow-hidden rounded-[2rem] bg-gradient-to-br ${princess.bgGradient}`} initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -60 }} transition={{ duration: 0.45, ease: "easeInOut" }}>
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

        <div className="flex flex-col items-center pt-3 pb-2 px-8">
          <motion.div className="text-7xl mb-2" initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.15, type: "spring", stiffness: 200 }}>{princess.emoji}</motion.div>
          <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.25 }} className="text-center">
            <p className="font-nunito text-sm font-semibold uppercase tracking-widest mb-1" style={{ color: princess.color }}>{princess.name} — {princess.movie}</p>
            <p className="font-nunito text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>{princess.description}</p>
          </motion.div>
        </div>

        <div className="mx-8 h-px mb-4" style={{ backgroundColor: `${princess.color}30` }} />

        <motion.div className="px-8 mb-2" initial={{ y: 15, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }}>
          <p className="font-nunito text-sm leading-snug text-center whitespace-pre-line" style={{ color: "rgba(245,230,255,0.78)" }}>{princess.scene}</p>
        </motion.div>

        <motion.div className="px-8 mb-6" initial={{ y: 15, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.34 }}>
          <h2 className="font-playfair text-2xl font-semibold text-center leading-tight" style={{ color: "#f5e6ff" }}>{princess.question}</h2>
        </motion.div>

        <div className="flex flex-col gap-3 px-8 pb-8 flex-1">
          {visibleOptions.map((option, i) => {
            const isSelected = selected === option.trait;
            const isDisabled = selected !== null && !isSelected && isBelleQuestion;
            return (
              <motion.button key={`${option.trait}-${i}`} onClick={() => handleSelect(option.trait)} className="w-full text-left px-5 py-4 rounded-2xl font-nunito font-medium text-base transition-all duration-300" style={{ backgroundColor: isSelected ? `${princess.color}28` : "rgba(255,255,255,0.05)", border: `1.5px solid ${isSelected ? princess.color : "rgba(255,255,255,0.1)"}`, color: isSelected ? princess.color : "rgba(245,230,255,0.85)", opacity: isDisabled ? 0.35 : 1, boxShadow: isSelected ? `0 0 24px ${princess.color}30` : "none", transform: isSelected ? "scale(1.01)" : "scale(1)" }} initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.35 + i * 0.08 }} whileHover={!selected || isSelected ? { backgroundColor: `${princess.color}14`, borderColor: `${princess.color}60`, color: "#f5e6ff" } : {}} whileTap={!selected || isSelected ? { scale: 0.98 } : {}}>
                {option.text}
              </motion.button>
            );
          })}

          {isBelleQuestion ? (
            <motion.button
              onClick={() => handleSelect("Prefiro outra")}
              className="w-full text-left px-5 py-4 rounded-2xl font-nunito font-medium text-base transition-all duration-300"
              style={{
                backgroundColor: selected === "Prefiro outra" ? `${princess.color}28` : "rgba(255,255,255,0.05)",
                border: `1.5px solid ${selected === "Prefiro outra" ? princess.color : "rgba(255,255,255,0.1)"}`,
                color: selected === "Prefiro outra" ? princess.color : "rgba(245,230,255,0.85)",
                opacity: selected !== null && selected !== "Prefiro outra" && isBelleQuestion ? 0.35 : 1,
                boxShadow: selected === "Prefiro outra" ? `0 0 24px ${princess.color}30` : "none",
                transform: selected === "Prefiro outra" ? "scale(1.01)" : "scale(1)"
              }}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.35 + princess.options.length * 0.08 }}
              whileHover={selected === null || selected === "Prefiro outra" ? { backgroundColor: `${princess.color}14`, borderColor: `${princess.color}60`, color: "#f5e6ff" } : {}}
              whileTap={selected === null || selected === "Prefiro outra" ? { scale: 0.98 } : {}}
            >
              💬Prefiro outra
            </motion.button>
          ) : null}

          {showOtherInput && selected === otherOptionTrait ? (
            <motion.form className="mt-1 flex gap-2" onSubmit={handleOtherSubmit} initial={{ y: 15, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.36 }}>
              <motion.input
                type="text"
                value={otherInput}
                onChange={(e) => {
                  setOtherInput(e.target.value);
                  if (otherError) setOtherError("");
                }}
                placeholder="Digite aqui"
                title="Digite aqui"
                className="w-1/2 rounded-2xl border px-4 py-3 text-sm outline-none"
                style={{ backgroundColor: "rgba(255,255,255,0.08)", borderColor: otherError ? "#f87171" : "rgba(255,255,255,0.14)", color: "#f5e6ff" }}
                animate={shake ? { x: [0, -6, 6, -4, 0] } : { x: 0 }}
                transition={{ duration: 0.45 }}
              />
              <button
                type="submit"
                className="w-1/2 rounded-2xl px-4 py-3 font-semibold transition-all duration-200"
                style={{ backgroundColor: "rgba(245,197,66,0.2)", border: "1px solid rgba(245,197,66,0.45)", color: "#f5e6ff" }}
              >
                {isBelleQuestion ? "Dizer" : "Enviar"}
              </button>
            </motion.form>
          ) : null}

          {isBelleQuestion && showColorInput && selected ? (
            <motion.form className="mt-1" onSubmit={handleSubmit} initial={{ y: 15, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.36 }}>
              <label htmlFor="bela-color" className="block text-left text-sm font-semibold mb-2" style={{ color: "#f5e6ff" }}>
                E de que cor elas seriam?
              </label>
              <motion.input
                id="bela-color"
                type="text"
                value={colorInput}
                onChange={(e) => {
                  setColorInput(e.target.value);
                  if (inputError) setInputError("");
                }}
                placeholder="Digite a cor"
                title="E de que cor elas seriam?"
                noValidate
                className="w-full rounded-2xl border px-4 py-3 text-sm outline-none"
                style={{ backgroundColor: "rgba(255,255,255,0.08)", borderColor: inputError ? "#f87171" : "rgba(255,255,255,0.14)", color: "#f5e6ff" }}
                animate={shake ? { x: [0, -6, 6, -4, 0] } : { x: 0 }}
                transition={{ duration: 0.45 }}
              />
              {inputError ? <p className="mt-2 text-xs" style={{ color: "#fda4af" }}>{inputError}</p> : null}
              <button
                type="submit"
                className="mt-3 w-full rounded-2xl px-4 py-3 font-semibold transition-all duration-200"
                style={{ backgroundColor: "rgba(245,197,66,0.2)", border: "1px solid rgba(245,197,66,0.45)", color: "#f5e6ff" }}
              >
                Contar para a Bela
              </button>
            </motion.form>
          ) : null}
        </div>
      </div>
    </motion.div>
  );
}
