'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Typewriter = ({
  words = [],
  typeSpeed = 80,
  pause = 1200,
}) => {
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const current = words[index] || {};
  const text = typeof current === 'string' ? current : current.text;
  const gradient = typeof current === 'string' ? null : current.gradient;

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < text.length) {
          setCharIndex((prev) => prev + 1);
        } else {
          setTimeout(() => setIsDeleting(true), pause);
        }
      } else {
        if (charIndex > 0) {
          setCharIndex((prev) => prev - 1);
        } else {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? typeSpeed / 2 : typeSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, text, pause, typeSpeed, words.length]);

  const visibleChars = text.slice(0, charIndex).split('');

  return (
    <span className="inline-flex items-baseline whitespace-nowrap">
      <span
        className={`inline-flex bg-clip-text text-transparent ${
          gradient ? `bg-gradient-to-r ${gradient}` : ''
        }`}
      >
        {visibleChars.map((char, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.2,
              ease: 'easeOut',
              delay: i * 0.02,
            }}
            className="inline-block"
          >
            {char}
          </motion.span>
        ))}
      </span>
      <motion.span
  className="ml-1 inline-block w-[2px] h-[1em] bg-gray-600 dark:bg-white animate-blink"
  animate={{ opacity: [1, 0, 1] }}
  transition={{ repeat: Infinity, duration: 1 }}
/>

    </span>
  );
};

export default Typewriter;
