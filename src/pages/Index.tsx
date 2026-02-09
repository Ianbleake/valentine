import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FloatingHearts from "@/components/FloatingHearts";
import SadKittenModal from "@/components/SadKittenModal";
import SakuraTree from "@/components/SakuraTree";
import rosesImg from "@/assets/roses.png";

const Index = () => {
  const [answered, setAnswered] = useState(false);
  const [noScale, setNoScale] = useState(1);
  const [showKittenModal, setShowKittenModal] = useState(false);
  const [noCount, setNoCount] = useState(0);

  const handleNo = () => {
    setNoScale((prev) => Math.max(prev * 0.7, 0.3));
    setNoCount((prev) => prev + 1);
    setShowKittenModal(true);
  };

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4">
      <FloatingHearts />

      <AnimatePresence mode="wait">
        {!answered ? (
          <motion.div
            key="question"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 flex flex-col items-center text-center"
          >
            <motion.img
              src={rosesImg}
              alt="Rosas"
              className="mb-6 w-48 drop-shadow-lg sm:w-64 rounded-full"
              initial={{ scale: 0 }}
              animate={{ scale: 1, rotate: [0, 5, -5, 0] }}
              transition={{ duration: 1, delay: 0.3 }}
            />

            <motion.h1
              className="mb-3 text-4xl font-bold italic text-primary sm:text-5xl md:text-6xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              style={{ fontFamily: "var(--font-display)" }}
            >
              ¿Quieres ser mi Valentine?
            </motion.h1>

            <motion.p
              className="mb-10 max-w-md text-lg text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Cada momento contigo es especial, y vivir nuestro primer San Valentín juntos es algo que voy a guardar siempre. 💕
            </motion.p>

            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setAnswered(true)}
                className="rounded-full bg-primary px-10 py-4 text-xl font-bold text-primary-foreground shadow-lg transition-shadow hover:shadow-xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                ¡Sí! 💖
              </motion.button>

              <motion.button
                
                whileTap={{ scale: 0.95 }}
                onClick={handleNo}
                animate={{ scale: noScale }}
                className="rounded-full border-2 border-primary/30 px-6 py-3 text-base text-muted-foreground transition-colors hover:border-primary/50"
                style={{ fontFamily: "var(--font-display)" }}
              >
                No 😢
              </motion.button>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="celebration"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="relative z-10 flex flex-col items-center text-center"
          >
            <SakuraTree />

            <motion.h1
              className="mt-6 mb-4 text-5xl font-bold text-primary sm:text-6xl md:text-7xl"
              style={{ fontFamily: "var(--font-display)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.8 }}
            >
              ¡Sabía que dirías que sí!
            </motion.h1>

            <motion.p
              className="max-w-lg text-xl text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.2 }}
            >
             Este San Valentín, juntos en casa, será el primero de muchos momentos que quiero vivir contigo. Te quiero muchísimo. 💕🌸✨
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      <SadKittenModal
        open={showKittenModal}
        onClose={() => setShowKittenModal(false)}
        noCount={noCount}
      />
    </div>
  );
};

export default Index;
