import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Petal {
  id: number;
  x: number;
  delay: number;
  duration: number;
  size: number;
  rotation: number;
  sway: number;
}

const SakuraTree = () => {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const generated: Petal[] = Array.from({ length: 45 }, (_, i) => ({
      id: i,
      x: Math.random() * 120 - 10,
      delay: Math.random() * 5,
      duration: 5 + Math.random() * 5,
      size: 8 + Math.random() * 12,
      rotation: Math.random() * 360,
      sway: (Math.random() - 0.5) * 80,
    }));
    setPetals(generated);
  }, []);

  const branches = [
    // Main trunk
    { d: "M100 310 Q97 260 93 220 Q88 180 90 150 Q93 120 97 100 Q100 85 100 75", w: 10, delay: 0 },
    // Secondary trunk texture
    { d: "M102 310 Q100 265 96 225 Q92 185 93 155 Q96 125 99 105", w: 6, delay: 0.1, color: "hsl(20, 25%, 30%)" },
    // Right main branch
    { d: "M93 180 Q115 155 140 135 Q160 120 175 110", w: 6, delay: 0.8 },
    // Right sub-branch
    { d: "M140 135 Q150 115 155 100", w: 3.5, delay: 1.1 },
    // Right lower branch
    { d: "M93 200 Q110 190 130 175 Q145 165 160 160", w: 4.5, delay: 0.9 },
    // Left main branch
    { d: "M90 160 Q70 135 50 110 Q35 95 25 80", w: 6, delay: 1.0 },
    // Left sub-branch
    { d: "M50 110 Q40 95 35 75", w: 3.5, delay: 1.3 },
    // Left lower branch
    { d: "M92 190 Q75 175 60 160 Q48 150 38 140", w: 4, delay: 1.1 },
    // Top branch
    { d: "M100 100 Q103 80 108 60 Q112 45 118 35", w: 4, delay: 1.2 },
    // Top left twig
    { d: "M97 90 Q85 70 75 55", w: 3, delay: 1.4 },
    // Top right twig
    { d: "M103 85 Q115 70 125 60", w: 3, delay: 1.5 },
    // Small twigs
    { d: "M175 110 Q185 105 190 95", w: 2, delay: 1.6 },
    { d: "M25 80 Q18 70 15 58", w: 2, delay: 1.6 },
    { d: "M160 160 Q170 155 178 148", w: 2.5, delay: 1.5 },
    { d: "M38 140 Q28 135 22 128", w: 2.5, delay: 1.5 },
  ];

  // Five-petal sakura flower positions
  const flowerClusters = [
    // Right side dense
    { cx: 175, cy: 108, r: 18, delay: 1.8 },
    { cx: 190, cy: 93, r: 12, delay: 2.0 },
    { cx: 155, cy: 98, r: 14, delay: 1.9 },
    { cx: 160, cy: 158, r: 15, delay: 2.0 },
    { cx: 178, cy: 146, r: 11, delay: 2.1 },
    { cx: 140, cy: 128, r: 13, delay: 2.05 },
    { cx: 168, cy: 120, r: 10, delay: 2.15 },
    { cx: 185, cy: 100, r: 9, delay: 2.2 },
    { cx: 148, cy: 140, r: 12, delay: 2.1 },
    { cx: 170, cy: 135, r: 10, delay: 2.25 },
    { cx: 195, cy: 88, r: 10, delay: 2.3 },
    { cx: 145, cy: 115, r: 11, delay: 2.0 },
    { cx: 165, cy: 100, r: 9, delay: 2.15 },
    // Left side dense
    { cx: 25, cy: 78, r: 17, delay: 2.0 },
    { cx: 15, cy: 56, r: 12, delay: 2.2 },
    { cx: 35, cy: 73, r: 13, delay: 2.1 },
    { cx: 38, cy: 138, r: 14, delay: 2.15 },
    { cx: 22, cy: 126, r: 11, delay: 2.2 },
    { cx: 55, cy: 105, r: 12, delay: 2.1 },
    { cx: 30, cy: 88, r: 10, delay: 2.25 },
    { cx: 10, cy: 65, r: 9, delay: 2.3 },
    { cx: 45, cy: 95, r: 11, delay: 2.15 },
    { cx: 28, cy: 130, r: 10, delay: 2.2 },
    { cx: 48, cy: 115, r: 9, delay: 2.25 },
    { cx: 18, cy: 70, r: 10, delay: 2.1 },
    { cx: 42, cy: 82, r: 8, delay: 2.3 },
    // Top dense
    { cx: 118, cy: 33, r: 14, delay: 2.1 },
    { cx: 125, cy: 58, r: 12, delay: 2.2 },
    { cx: 75, cy: 53, r: 14, delay: 2.3 },
    { cx: 108, cy: 55, r: 11, delay: 2.15 },
    { cx: 112, cy: 40, r: 10, delay: 2.25 },
    { cx: 130, cy: 50, r: 9, delay: 2.3 },
    { cx: 80, cy: 45, r: 10, delay: 2.35 },
    { cx: 68, cy: 58, r: 9, delay: 2.2 },
    { cx: 122, cy: 28, r: 8, delay: 2.4 },
    { cx: 90, cy: 42, r: 10, delay: 2.25 },
    // Center canopy dense
    { cx: 100, cy: 72, r: 16, delay: 2.0 },
    { cx: 85, cy: 85, r: 14, delay: 2.05 },
    { cx: 115, cy: 80, r: 13, delay: 2.1 },
    { cx: 95, cy: 60, r: 12, delay: 2.15 },
    { cx: 105, cy: 48, r: 11, delay: 2.2 },
    { cx: 92, cy: 75, r: 10, delay: 2.1 },
    { cx: 110, cy: 65, r: 11, delay: 2.15 },
    { cx: 78, cy: 70, r: 10, delay: 2.2 },
    { cx: 120, cy: 72, r: 9, delay: 2.25 },
    { cx: 88, cy: 50, r: 10, delay: 2.3 },
    { cx: 100, cy: 55, r: 9, delay: 2.2 },
    { cx: 108, cy: 42, r: 8, delay: 2.35 },
    { cx: 95, cy: 80, r: 10, delay: 2.1 },
    { cx: 105, cy: 90, r: 9, delay: 2.15 },
    { cx: 72, cy: 62, r: 9, delay: 2.25 },
    { cx: 128, cy: 68, r: 8, delay: 2.3 },
  ];

  const renderFlower = (cx: number, cy: number, r: number, delay: number, idx: number) => {
    const petalCount = 5;
    const petalRx = r * 0.55;
    const petalRy = r * 0.3;
    const dist = r * 0.35;
    return (
      <motion.g
        key={`flower-${idx}`}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7, delay, type: "spring", stiffness: 120 }}
        style={{ transformOrigin: `${cx}px ${cy}px` }}
      >
        {Array.from({ length: petalCount }).map((_, i) => {
          const angle = (i * 360) / petalCount - 90;
          const rad = (angle * Math.PI) / 180;
          const px = cx + Math.cos(rad) * dist;
          const py = cy + Math.sin(rad) * dist;
          return (
            <ellipse
              key={i}
              cx={px}
              cy={py}
              rx={petalRx}
              ry={petalRy}
              transform={`rotate(${angle}, ${px}, ${py})`}
              fill="hsl(340, 75%, 82%)"
              opacity={0.85}
            />
          );
        })}
        {/* Darker petal layer for depth */}
        {Array.from({ length: petalCount }).map((_, i) => {
          const angle = (i * 360) / petalCount - 90 + 36;
          const rad = (angle * Math.PI) / 180;
          const px = cx + Math.cos(rad) * dist * 0.6;
          const py = cy + Math.sin(rad) * dist * 0.6;
          return (
            <ellipse
              key={`inner-${i}`}
              cx={px}
              cy={py}
              rx={petalRx * 0.6}
              ry={petalRy * 0.6}
              transform={`rotate(${angle}, ${px}, ${py})`}
              fill="hsl(350, 80%, 88%)"
              opacity={0.7}
            />
          );
        })}
        {/* Center pistil */}
        <circle cx={cx} cy={cy} r={r * 0.15} fill="hsl(45, 90%, 65%)" opacity={0.9} />
        <circle cx={cx} cy={cy} r={r * 0.08} fill="hsl(30, 80%, 55%)" opacity={0.7} />
      </motion.g>
    );
  };

  return (
    <div className="relative flex flex-col items-center">
      <svg viewBox="0 0 210 320" className="w-56 sm:w-72 md:w-80 h-auto" aria-label="Sakura tree">
        {/* Soft glow behind canopy */}
        <defs>
          <radialGradient id="canopyGlow" cx="50%" cy="30%" r="45%">
            <stop offset="0%" stopColor="hsl(340, 70%, 85%)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="hsl(340, 70%, 85%)" stopOpacity="0" />
          </radialGradient>
          <filter id="softBlur">
            <feGaussianBlur stdDeviation="3" />
          </filter>
        </defs>
        <ellipse cx="105" cy="90" rx="100" ry="75" fill="url(#canopyGlow)" filter="url(#softBlur)" />

        {/* Branches */}
        {branches.map((b, i) => (
          <motion.path
            key={i}
            d={b.d}
            stroke={b.color || "hsl(20, 30%, 32%)"}
            strokeWidth={b.w}
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.2, delay: b.delay, ease: "easeOut" }}
          />
        ))}

        {/* Bark texture lines */}
        {[
          "M98 280 Q97 270 96 260",
          "M96 240 Q95 230 95 220",
          "M94 200 Q93 195 93 188",
        ].map((d, i) => (
          <motion.path
            key={`bark-${i}`}
            d={d}
            stroke="hsl(20, 20%, 25%)"
            strokeWidth={1}
            fill="none"
            opacity={0.3}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5, delay: 0.5 + i * 0.2 }}
          />
        ))}

        {/* Flowers */}
        {flowerClusters.map((f, i) => renderFlower(f.cx, f.cy, f.r, f.delay, i))}
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
            y: [0, 200, 450],
            x: [0, petal.sway, petal.sway * -0.5],
            opacity: [0, 0.9, 0],
            rotate: [petal.rotation, petal.rotation + 180, petal.rotation + 360],
          }}
          transition={{
            duration: petal.duration,
            delay: 2.5 + petal.delay,
            repeat: Infinity,
            ease: "easeIn",
          }}
        >
          <svg viewBox="0 0 20 20" width={petal.size} height={petal.size}>
            <ellipse cx="10" cy="8" rx="7" ry="4.5" fill="hsl(340, 75%, 84%)" opacity="0.85" transform="rotate(25, 10, 8)" />
            <ellipse cx="10" cy="12" rx="5" ry="3" fill="hsl(350, 80%, 88%)" opacity="0.6" transform="rotate(-15, 10, 12)" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};

export default SakuraTree;
