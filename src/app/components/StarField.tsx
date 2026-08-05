import React, { useMemo } from "react";

type Star = {
  left: string;
  top: string;
  size: number;
  duration: number;
  delay: number;
};

function generateStars(count = 30): Star[] {
  return Array.from({ length: count }).map(() => {
    const size = 1.5 + Math.random() * 3;
    return {
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size,
      duration: 3 + Math.random() * 4,
      delay: Math.random() * 5,
    };
  });
}

function StarFieldInner({ color, stars }: { color: string; stars: Star[] }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((s, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            left: s.left,
            top: s.top,
            width: s.size,
            height: s.size,
            backgroundColor: color,
            animation: `twinkle ${s.duration}s ease-in-out infinite`,
            animationDelay: `${s.delay}s`,
            opacity: 0,
          }}
        />
      ))}
    </div>
  );
}

const StarField = ({ color }: { color: string }) => {
  const stars = useMemo(() => generateStars(30), []);
  return <StarFieldInner color={color} stars={stars} />;
};

export default React.memo(StarField);
