'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';

export function LettersPullUp({ words, className = '' }) {
  const pullupVariant = {
    initial: { y: 10, opacity: 0 },
    animate: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.05,
      },
    }),
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  

  let letterIndex = 0;

  return (
    <div className="flex flex-wrap justify-center" ref={ref}>
      {words.map((word, wordIdx) => (
        <div key={wordIdx} className="flex">
          {word.text.split('').map((char, i) => {
            const currentIndex = letterIndex++;
            return (
              <motion.span
                key={currentIndex}
                variants={pullupVariant}
                initial="initial"
                animate={isInView ? 'animate' : ''}
                custom={currentIndex}
                className={cn(
                  `bg-clip-text text-transparent bg-gradient-to-r ${word.gradient}`,
                  'text-xl sm:text-4xl md:text-6xl font-bold tracking-tighter md:leading-[4rem]',
                  className
                )}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            );
          })}
          <span className="w-2" />
        </div>
      ))}
    </div>
  );
}
