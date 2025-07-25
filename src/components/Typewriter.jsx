'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Typewriter = ({ words = [], typeSpeed = 100, pause = 1200 }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const currentWord = words[currentWordIndex] || '';

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentWord.length) {
          setCharIndex((prev) => prev + 1);
        } else {
          setTimeout(() => setIsDeleting(true), pause);
        }
      } else {
        if (charIndex > 0) {
          setCharIndex((prev) => prev - 1);
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? typeSpeed / 2 : typeSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentWord, typeSpeed, pause, words]);

  const visibleChars = currentWord.slice(0, charIndex).split('');

  return (
    <span className="whitespace-nowrap align-baseline">
      <AnimatePresence mode="popLayout">
        {visibleChars.map((char, i) => (
          <motion.span
            key={`${char}-${i}`}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{
              duration: 0.15,
              ease: 'easeInOut',
              delay: i * 0.01,
            }}
            className="inline-block"
          >
            {char}
          </motion.span>
        ))}
      </AnimatePresence>
      <motion.span
        className="ml-[1px] inline-block w-[1px] align-baseline bg-current animate-blink"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ repeat: Infinity, duration: 1 }}
      />
    </span>
  );
};

export default Typewriter;
