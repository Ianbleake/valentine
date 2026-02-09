import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { motion } from "framer-motion";
import sadKitten1 from "@/assets/sad-kitten-1.png";
import sadKitten2 from "@/assets/sad-kitten-2.png";
import sadKitten3 from "@/assets/sad-kitten-3.png";

const kittens = [sadKitten1, sadKitten2, sadKitten3];

const sadMessages = [
  "¡No me hagas esto! 😿",
  "¿Estás segura? Mira esta carita... 🥺",
  "¡Segura de que estas segura?! 💔",
];

interface SadKittenModalProps {
  open: boolean;
  onClose: () => void;
  noCount: number;
}

const SadKittenModal = ({ open, onClose, noCount }: SadKittenModalProps) => {
  const index = Math.min(noCount - 1, kittens.length - 1);

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-sm border-primary/30 bg-background/95 backdrop-blur-sm">
        <DialogHeader>
          <DialogTitle
            className="text-center text-2xl text-primary"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {sadMessages[index] || sadMessages[sadMessages.length - 1]}
          </DialogTitle>
          <DialogDescription className="text-center text-muted-foreground">
            Este gatito se pone triste cuando dices que no...
          </DialogDescription>
        </DialogHeader>
        <motion.div
          className="flex justify-center"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", duration: 0.6 }}
        >
          <img
            src={kittens[index] || kittens[kittens.length - 1]}
            alt="Gatito triste"
            className="w-56 rounded-2xl shadow-lg"
          />
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};

export default SadKittenModal;
