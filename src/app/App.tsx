import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

import WelcomeScreen from "./components/WelcomeScreen";
import PresentationScreen from "./components/PresentationScreen";
import QuestionScreen from "./components/QuestionScreen";
import ResultScreen from "./components/ResultScreen";
import { princesses } from "./data/princesses";
import PrincessSetup from "./components/PrincessSetup";


export default function App() {
  const [phase, setPhase] = useState<"setup" | "presentation" | "welcome" | "question" | "result">("setup");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  // Simple hash-based routing so URL reflects current phase/index
  useEffect(() => {
    function parseHash() {
      const hash = window.location.hash.replace(/^#/, "");
      if (!hash || hash === "/") return { phase: "setup" as const, index: 0 };
      const parts = hash.split('/').filter(Boolean);
      if (parts[0] === 'setup') return { phase: 'setup' as const, index: 0 };
      if (parts[0] === 'presentation') return { phase: 'presentation' as const, index: 0 };
      if (parts[0] === 'question') {
        const idx = parseInt(parts[1] || '0', 10) || 0;
        return { phase: 'question' as const, index: Math.max(0, Math.min(princesses.length - 1, idx)) };
      }
      if (parts[0] === 'result') return { phase: 'result' as const, index: 0 };
      if (parts[0] === 'welcome') return { phase: 'welcome' as const, index: 0 };
      return { phase: 'welcome' as const, index: 0 };
    }

    function handleHashChange() {
      const { phase: p, index } = parseHash();
      console.debug('[router] hashchange ->', window.location.hash, p, index);
      setPhase(p);
      setCurrentIndex(index);
      if (p === 'welcome') setAnswers([]);
    }

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [setPhase, setCurrentIndex]);

  function handleStart() {
    // navigate to question 0
    console.debug('[action] start -> navigate to /question/0');
    window.location.hash = '/question/0';
    setAnswers([]);
  }

  function handleAdvance() {
    console.debug('[action] advance -> navigate to /welcome');
    window.location.hash = '/welcome';
  }

  function handleAnswer(trait: string) {
    console.debug('[action] answer', trait, 'currentIndex', currentIndex);
    const newAnswers = [...answers, trait];
    setAnswers(newAnswers);
    if (currentIndex + 1 < princesses.length) {
      const next = currentIndex + 1;
      window.location.hash = `/question/${next}`;
    } else {
      window.location.hash = '/result';
    }
  }

  function handleBack() {
    console.debug('[action] back', 'currentIndex', currentIndex);
    if (currentIndex === 0) {
      window.location.hash = '/welcome';
      setAnswers([]);
    } else {
      const prev = currentIndex - 1;
      window.location.hash = `/question/${prev}`;
      setAnswers(answers.slice(0, -1));
    }
  }

  function handleRestart() {
    console.debug('[action] restart');
    window.location.hash = '/welcome';
    setAnswers([]);
  }

  return (
    <div className="w-full h-full relative overflow-hidden" style={{ fontFamily: "'Nunito', sans-serif", background: "#0d0a1e", maxWidth: "820px", margin: "0 auto" }}>
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0; transform: scale(0.5); }
          50% { opacity: 0.7; transform: scale(1); }
        }
        .font-playfair { font-family: 'Playfair Display', serif; }
        .font-nunito { font-family: 'Nunito', sans-serif; }
      `}</style>

      <AnimatePresence mode="wait">
        {phase === "setup" && (
          <motion.div key="setup" className="absolute inset-0">
            <PrincessSetup />
          </motion.div>
        )}

        {phase === "welcome" && (
          <motion.div key="welcome" className="absolute inset-0">
            <WelcomeScreen onStart={handleStart} />
          </motion.div>
        )}

        {phase === "presentation" && (
          <motion.div key="presentation" className="absolute inset-0">
            <PresentationScreen onAdvance={handleAdvance} />
          </motion.div>
        )}

        {phase === "question" && (
          <motion.div key={`question-${currentIndex}`} className="absolute inset-0">
            <QuestionScreen princess={princesses[currentIndex]} questionIndex={currentIndex} total={princesses.length} onAnswer={handleAnswer} onBack={handleBack} />
          </motion.div>
        )}

        {phase === "result" && (
          <motion.div key="result" className="absolute inset-0">
            <ResultScreen traits={answers} onRestart={handleRestart} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
