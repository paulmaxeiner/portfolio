'use client';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import React, { useRef, useState, useEffect } from 'react';

/**
 * words: Array<string | { text: string; color?: string }>
 * - If a string, it uses defaultColor
 * - If an object, it uses the provided color for that word
 *
 * defaultColor: fallback color (CSS value) when a word doesn't specify one
 * className: extra classes for the line wrapper
 * intervalMs: how long each word stays before flipping
 * letterDelay: per-letter stagger
 */
export function LettersPullUp({
  words = [],
  className = 'align-baseline',
  intervalMs = 3000,
  letterDelay = 0.05,
  defaultColor = 'inherit',
}) {
  const [index, setIndex] = useState(0);
  const wrapperRef = useRef(null);
  const isInView = useInView(wrapperRef, { once: false });

  useEffect(() => {
    if (!isInView || words.length === 0) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [isInView, words.length, intervalMs]);

  // Normalize current word to { text, color? }
  const currentObj =
    typeof words[index] === 'string'
      ? { text: words[index] ?? '', color: undefined }
      : (words[index] ?? { text: '', color: undefined });

  const currentText = currentObj.text ?? '';
  const currentColor = currentObj.color ?? defaultColor;

  const chars = currentText.split('');

  const letterVariants = {
    initial: { y: 10, opacity: 0 },
    animate: (i) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * letterDelay, duration: 0.3, type: 'tween' },
    }),
  };

  return (
    <span ref={wrapperRef} className="inline-flex items-baseline">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.4 } }}
          exit={{ opacity: 0, transition: { duration: 0.4 } }}
          className={cn('inline-flex items-baseline leading-[1em]', className)}
          style={{ color: currentColor }}
        >
          {chars.map((ch, i) => (
            <motion.span
              key={`${index}-${i}`}
              variants={letterVariants}
              initial="initial"
              animate="animate"
              custom={i}
              className="inline-block"
              style={{ display: 'inline-block' }}
            >
              {ch === ' ' ? '\u00A0' : ch}
            </motion.span>
          ))}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
