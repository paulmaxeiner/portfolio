'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const SkillScroll = ({ direction = 'left', speed = 40 }) => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch('public/work.json')
      .then((res) => res.json())
      .then((data) => {
        const flatSkills = data.flatMap((job) => job.skills || []);
        setSkills(flatSkills);
      })
      .catch((err) => console.error('Failed to load work.json:', err));
  }, []);

  const repeatedSkills = [...skills, ...skills]; // duplicate for seamless loop

  const animateFrom = direction === 'left' ? '0%' : '-50%';
  const animateTo = direction === 'left' ? '-50%' : '0%';

  return (
    <div className="relative w-full overflow-hidden">
      <motion.div
        className="flex gap-3 py-2"
        style={{
          width: 'max-content',
          flexDirection: direction === 'right' ? 'row-reverse' : 'row',
        }}
        animate={{ x: [animateFrom, animateTo] }}
        transition={{
          repeat: Infinity,
          repeatType: 'loop',
          duration: speed,
          ease: 'linear',
        }}
      >
        {repeatedSkills.map((skill, i) => (
          <span
            key={i}
            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-200 dark:bg-zinc-700 text-gray-800 dark:text-gray-100 whitespace-nowrap"
          >
            {skill}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default SkillScroll;
