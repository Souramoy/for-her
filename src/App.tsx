/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Flower2, Heart, Sparkles } from 'lucide-react';

const pages = [
  {
    id: 0,
    title: "Hello !!",
    message: "Hello, this is Souramoy 😊",
    bg: "bg-pink-100",
    text: "text-pink-800",
  },
  {
    id: 1,
    title: "Your birthday ?",
    message: "Your birthday is 14th November 🎂",
    bg: "bg-purple-100",
    text: "text-purple-800",
  },
  {
    id: 2,
    title: "What word You say most?",
    message: (
      <>
        I think the words you say most are <strong>Acha, um,</strong> and <strong>Mane</strong> 😄
      </>
    ),
    bg: "bg-rose-100",
    text: "text-rose-800",
  },
  {
    id: 3,
    title: "You love?",
    message: "I think you love your cat the most 🐱",
    bg: "bg-fuchsia-100",
    text: "text-fuchsia-800",
  },
  {
    id: 4,
    title: "Your bad habit according to me –",
    message: "I think your bad habit is that sometimes you feel like your life is an absolute mess and you say things like 'life e ar kichu bhalo lagche na' But honestly, you have only one life, and instead of blaming it or feeling lost, you should try to enjoy it and do the things you love. Life may not always be perfect, but it still has many beautiful moments.And one more thing, I want you to know that I am always with you to support you and help you enjoy life whenever you need me 🙂",
    bg: "bg-pink-200",
    text: "text-pink-900",
  },
  {
    id: 5,
    title: "Who are You for me –",
    message: "I think it’s too soon to give a name to this type of relationship, but for now you are my partner of short bike rides. You are the person whose company I really enjoy while riding and spending time with. Simple moments like rides and talks feel peaceful and special with you 🙂",
    bg: "bg-purple-200",
    text: "text-purple-900",
  },
  {
    id: 6,
    title: "Yeah !! again it's me ",
    message: "There is one more thing I want to say,I still remember those days when you used to call me pagol 😊,I still remember the days when we were walking in the station holding hands,I also remember that day when you were angry at me because Joy put cake on your face and I was too scared to even touch you, so I didn’t put cake on your face 😅................But I am not that kid anymore.",
    bg: "bg-gradient-to-br from-pink-300 to-purple-300",
    text: "text-white",
  }
];

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9
    };
  }
};

const cardVariants = {
  enter: { scale: 0.8, opacity: 0, y: 40 },
  center: { 
    scale: 1, 
    opacity: 1, 
    y: 0,
    transition: { delay: 0.15, type: "spring", stiffness: 300, damping: 25 }
  },
  exit: { scale: 0.8, opacity: 0, y: -40, transition: { duration: 0.2 } }
};

const titleVariants = {
  enter: { opacity: 0, y: 20 },
  center: { opacity: 1, y: 0, transition: { delay: 0.25, type: "spring", stiffness: 300, damping: 25 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.2 } }
};

const messageVariants = {
  enter: { opacity: 0, y: 20 },
  center: { opacity: 1, y: 0, transition: { delay: 0.35, type: "spring", stiffness: 300, damping: 25 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.2 } }
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const BackgroundDecorations = () => (
  <motion.div 
    variants={{
      enter: { opacity: 0, scale: 0.95 },
      center: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.1 } },
      exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } }
    }}
    className="absolute inset-0 overflow-hidden pointer-events-none"
  >
    {/* Large blurred circles for soft lighting */}
    <motion.div
      animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      className="absolute -top-20 -right-20 w-64 h-64 bg-white/30 rounded-full blur-3xl"
    />
    <motion.div
      animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      className="absolute -bottom-32 -left-32 w-80 h-80 bg-white/30 rounded-full blur-3xl"
    />
    
    {/* Floating shapes */}
    <motion.div
      animate={{ y: [0, -20, 0], rotate: [0, 15, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-24 left-12 text-white/50"
    >
      <Flower2 size={48} strokeWidth={1.5} />
    </motion.div>
    
    <motion.div
      animate={{ y: [0, 25, 0], rotate: [0, -20, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      className="absolute bottom-48 right-12 text-white/50"
    >
      <Heart size={40} fill="currentColor" strokeWidth={1} />
    </motion.div>
    
    <motion.div
      animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.8, 0.3] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      className="absolute top-40 right-16 text-white/60"
    >
      <Sparkles size={32} strokeWidth={1.5} />
    </motion.div>
    
    <motion.div
      animate={{ y: [0, -15, 0], rotate: [0, 45, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      className="absolute bottom-64 left-16 text-white/40"
    >
      <Flower2 size={36} strokeWidth={1.5} />
    </motion.div>

    {/* Small decorative circles */}
    <motion.div
      animate={{ y: [0, -30, 0] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-1/3 left-1/4 w-4 h-4 bg-white/50 rounded-full"
    />
    <motion.div
      animate={{ y: [0, 40, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      className="absolute bottom-1/3 right-1/4 w-6 h-6 bg-white/40 rounded-full"
    />
  </motion.div>
);

export default function App() {
  const [[page, direction], setPage] = useState([0, 0]);

  const activeIndex = Math.abs(page % pages.length);

  const paginate = (newDirection: number) => {
    const newIndex = page + newDirection;
    if (newIndex >= 0 && newIndex < pages.length) {
      setPage([newIndex, newDirection]);
    }
  };

  return (
    <div className="relative w-full h-[100dvh] overflow-hidden bg-pink-50 flex items-center justify-center">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
            scale: { duration: 0.3 }
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
          className={`absolute w-full h-full flex flex-col items-center justify-center p-8 text-center shadow-xl ${pages[activeIndex].bg}`}
        >
          <BackgroundDecorations />
          <motion.div 
            variants={cardVariants}
            className="relative z-10 max-w-md w-full bg-white/40 backdrop-blur-md rounded-3xl p-8 shadow-sm border border-white/50"
          >
            <motion.h1 variants={titleVariants} className={`text-3xl font-bold mb-4 ${pages[activeIndex].text} drop-shadow-sm`}>
              {pages[activeIndex].title}
            </motion.h1>
            <motion.p variants={messageVariants} className={`text-lg font-medium leading-relaxed ${pages[activeIndex].text} opacity-90`}>
              {pages[activeIndex].message}
            </motion.p>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      <div className="absolute bottom-12 left-0 right-0 flex justify-center items-center gap-6 z-10">
        <button
          className={`p-4 rounded-full bg-white/60 backdrop-blur-md shadow-md text-pink-500 transition-transform active:scale-95 ${activeIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white/80'}`}
          onClick={() => paginate(-1)}
          disabled={activeIndex === 0}
          aria-label="Previous page"
        >
          <ChevronLeft size={28} />
        </button>
        
        {/* Page Indicators */}
        <div className="flex gap-2">
          {pages.map((_, idx) => (
            <div
              key={idx}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                idx === activeIndex ? 'bg-pink-500 w-6' : 'bg-pink-300/50'
              }`}
            />
          ))}
        </div>

        <button
          className={`p-4 rounded-full bg-white/60 backdrop-blur-md shadow-md text-pink-500 transition-transform active:scale-95 ${activeIndex === pages.length - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white/80'}`}
          onClick={() => paginate(1)}
          disabled={activeIndex === pages.length - 1}
          aria-label="Next page"
        >
          <ChevronRight size={28} />
        </button>
      </div>
    </div>
  );
}
