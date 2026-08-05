import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import StarField from "./StarField";
import { loadPrincessData, savePrincessData } from "../data/dados_da_princesa";

export default function PrincessSetup() {
  const [name, setName] = useState("");
  const [shake, setShake] = useState(false);
  useEffect(() => {
    const data = loadPrincessData();
    if (data.name) setName(data.name);
  }, []);

  function handleSave() {
    if (!name.trim()) {
      // trigger shake animation
      setShake(true);
      window.requestAnimationFrame(() => {
        setTimeout(() => setShake(false), 500);
      });
      return;
    }
    savePrincessData({ name: name.trim() });
    window.location.hash = '/presentation';
  }

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen relative overflow-hidden px-4 py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.4 }}
    >
      <StarField color="#f5e6ff" />

      <motion.div
        className="relative z-10 w-full max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl p-6 rounded-2xl mx-auto"
        style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
        animate={shake ? { x: [0, -8, 8, -6, 0] } : { x: 0 }}
        transition={{ duration: 0.45 }}
      >
        <h1
          className="font-playfair font-bold mb-4"
          style={{
            color: '#f5e6ff',
            fontSize: 'clamp(1rem, 4vw, 2rem)',
            lineHeight: 1.05,
            whiteSpace: 'normal',
            wordBreak: 'break-word',
            maxWidth: '100%'
          }}
        >
          Uma nova princesa chega ao reino.
        </h1>

        <label className="font-nunito text-sm text-gray-200 block mb-2" style={{ color: 'rgba(245,230,255,0.8)' }}>
          Qual seu nome?
        </label>

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="seu nome"
          required
          aria-required
          className={`w-full px-4 py-3 rounded-md mb-4 bg-transparent placeholder-gray-400 text-base border ${shake ? 'border-2 border-red-400' : 'border border-gray-700'}`}
          style={{ color: '#fff' }}
        />

        <div className="h-px my-4" style={{ background: 'rgba(255,255,255,0.04)' }} />

        <button
          onClick={handleSave}
          className="w-full font-nunito font-bold text-base px-4 py-3 rounded-full"
          style={{ background: 'linear-gradient(135deg, #c084fc, #818cf8)', color: '#0d0a1e' }}
        >
          Salvar
        </button>
      </motion.div>
    </motion.div>
  );
}
