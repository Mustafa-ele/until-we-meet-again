import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';
import Button from '../Button';

const letterText = `My Dearest Mariya,

Itnu miss kru chu jaan ghanu hard che yar tamara bina rehvu babu and gaya time nu yad aya kre che sunheri baug best moments best memories.

mai pachi sochi rhyo chu jaan jaldi pacha male hands hold kre hug kre tmri new style wali smooch kare and tmra sthe masti rke bhar nu khaye and swimming nu plan kare jaan.

Tamari smile miss kru chu tamari msb ni story tmra career ni vato tamar dreams ni vato tamaro pyaro so gusso mari care karvu mara si sglu share karvu yaad ave che.

Thank you for being the best part of my life. I promise the wait will be worth it when I finally get to see you again.

Forever Yours,
Musta :)`;

export default function LetterScreen({ onNext }) {

  return (
    <div className="flex flex-col items-center justify-center h-full w-full relative">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 mt-2 md:mt-4 shrink-0"
      >
        <span className="text-rose-400 font-bold tracking-widest uppercase text-xs mb-1 block opacity-90">
          A Message For You
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-slate-700 mb-1">
          From My Heart
        </h2>
      </motion.div>

      <div className="relative w-full max-w-md my-10 flex items-center justify-center z-10 min-h-100 md:min-h-110">
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: "spring", damping: 20, stiffness: 120 }}
          className="relative w-full h-100 md:h-110 bg-[#FFFBF5] rounded-2xl shadow-[0_12px_35px_rgba(0,0,0,0.08)] flex flex-col"
        >

          {/* Letter Header Bar */}
          <div className="pt-6 pb-2 px-6 flex items-center justify-between border-b border-black/5 bg-[#FFFDF9]/40 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex items-center gap-2">
              <Heart size={18} className="text-pink-400 fill-pink-300" />
              <span className="font-bold text-slate-600 text-sm md:text-base">For My Favorite Person</span>
            </motion.div>
          </div>

          {/* Scrollable Letter Body */}
          <div className="overflow-y-auto h-80 md:h-90 p-6 md:p-8 pb-10 relative">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="font-hand text-slate-700 text-xl md:text-2xl leading-relaxed whitespace-pre-wrap">
              {letterText}
            </motion.div>
          </div>

        </motion.div>

      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <Button onClick={onNext} text="One Last Thing" icon={<Sparkles size={18} />} animateIcon={false} />
      </motion.div>
    </div>
  );
}