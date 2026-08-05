import React from "react";

export default function ProgressBar({ current, total }: { current: number; total: number }) {
  return (
    <div className="w-full px-8 pt-6">
      <div className="flex items-center gap-2 mb-2">
        {Array.from({ length: total }).map((_, i) => (
          <div
            key={i}
            className="h-1.5 flex-1 rounded-full transition-all duration-500"
            style={{ backgroundColor: i < current ? "#c084fc" : "rgba(255,255,255,0.12)" }}
          />
        ))}
      </div>
      <p className="text-center text-xs font-nunito" style={{ color: "rgba(255,255,255,0.35)" }}>
        {current} de {total} perguntas
      </p>
    </div>
  );
}
