import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Petal {
  id: number;
  x: number;
  delay: number;
  duration: number;
  size: number;
  rotation: number;
}

const SakuraTree = () => {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const generated: Petal[] = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 4,
      duration: 4 + Math.random() * 4,
      size: 10 + Math.random() * 14,
      rotation: Math.random() * 360,
    }));
    setPetals(generated);
  }, []);

  return (
    <div className="relative flex flex-col items-center">
      {/* Tree trunk and branches */}
      <svg viewBox="0 0 200 300" className="w-48 sm:w-64 h-auto" aria-label="Sakura tree">
        {/* Trunk */}
        <motion.path
          d="M95 300 Q90 250 85 200 Q80 160 90 130 Q95 110 100 100"
          stroke="hsl(20, 30%, 35%)"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        {/* Right branch */}
        <motion.path
          d="M92 170 Q120 140 150 120"
          stroke="hsl(20, 30%, 35%)"
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 1 }}
        />
        {/* Left branch */}
        <motion.path
          d="M88 150 Q60 120 40 90"
          stroke="hsl(20, 30%, 35%)"
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        />
        {/* Top branch */}
        <motion.path
          d="M100 100 Q105 70 115 50"
          stroke="hsl(20, 30%, 35%)"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        />

        {/* Flower clusters */}
        {[
          { cx: 150, cy: 115, r: 28, delay: 1.8 },
          { cx: 40, cy: 85, r: 25, delay: 2 },
          { cx: 115, cy: 45, r: 22, delay: 2.2 },
          { cx: 100, cy: 95, r: 20, delay: 2.1 },
          { cx: 130, cy: 80, r: 18, delay: 2.3 },
          { cx: 60, cy: 110, r: 16, delay: 2.4 },
          { cx: 80, cy: 70, r: 20, delay: 2.0 },
        ].map((c, i) => (
          <motion.circle
            key={i}
            cx={c.cx}
            cy={c.cy}
            r={c.r}
            fill="hsl(340, 70%, 80%)"
            opacity={0.85}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.85 }}
            transition={{ duration: 0.6, delay: c.delay, type: "spring" }}
          />
        ))}
        {/* Inner highlight circles */}
        {[
          { cx: 148, cy: 112, r: 14 },
          { cx: 42, cy: 82, r: 12 },
          { cx: 113, cy: 42, r: 10 },
          { cx: 82, cy: 68, r: 10 },
        ].map((c, i) => (
          <motion.circle
            key={`inner-${i}`}
            cx={c.cx}
            cy={c.cy}
            r={c.r}
            fill="hsl(350, 80%, 88%)"
            opacity={0.6}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 2.5 + i * 0.1 }}
          />
        ))}
      </svg>

      {/* Falling petals */}
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute pointer-events-none"
          style={{
            left: `${petal.x}%`,
            top: -20,
            width: petal.size,
            height: petal.size,
          }}
          initial={{ y: -20, opacity: 0, rotate: petal.rotation }}
          animate={{
            y: [0, 300, 500],
            x: [0, Math.sin(petal.id) * 40, Math.cos(petal.id) * 60],
            opacity: [0, 1, 0],
            rotate: petal.rotation + 360,
          }}
          transition={{
            duration: petal.duration,
            delay: 2 + petal.delay,
            repeat: Infinity,
            ease: "easeIn",
          }}
        >
          <svg viewBox="0 0 20 20" width={petal.size} height={petal.size}>
            <ellipse
              cx="10"
              cy="10"
              rx="8"
              ry="5"
              fill="hsl(340, 70%, 82%)"
              opacity="0.8"
              transform="rotate(30, 10, 10)"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};

export default SakuraTree;
