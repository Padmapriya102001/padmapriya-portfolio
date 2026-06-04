import { useMemo } from "react";

export function Particles() {
  const dots = useMemo(
    () => Array.from({ length: 40 }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      d: 6 + Math.random() * 10,
      delay: Math.random() * 6,
      size: 1 + Math.random() * 2,
    })),
    []
  );
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {dots.map((p, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-primary/40"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            animation: `float-y ${p.d}s ease-in-out ${p.delay}s infinite`,
            boxShadow: "0 0 8px oklch(0.82 0.16 210 / 0.6)",
          }}
        />
      ))}
    </div>
  );
}
