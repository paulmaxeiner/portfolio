import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SkillScroll = () => {
  const [skills, setSkills] = useState([]);
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  // Load and flatten all skills
  useEffect(() => {
    fetch('/work.json')
      .then((res) => res.json())
      .then((data) => {
        const flatSkills = data.flatMap((job) => job.skills || []);
        setSkills(flatSkills);
      })
      .catch((err) => console.error('Failed to load work.json:', err));
  }, []);

  // Smooth transition from fast to slow
useEffect(() => {
  if (!inView || skills.length === 0) return;

  const fastPhaseDistance = '-30%'; // initial bump
  const fastDuration = 1; // shorter duration
  const slowDuration = Math.max(skills.length * 2, 30);

  const easingOutSine = [0.39, 0.575, 0.565, 1];

  // Phase 1: Small fast scroll
  controls.set({ x: '0%' }); // reset on view
  controls.start({
    x: fastPhaseDistance,
    transition: {
      duration: fastDuration,
      ease: easingOutSine,
    },
  });

  // Phase 2: Slow infinite scroll starting from -30%
  const timer = setTimeout(() => {
    controls.start({
      x: ['-30%', '-100%'],
      transition: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: slowDuration,
        ease: 'linear',
      },
    });
  }, fastDuration * 1000);

  return () => clearTimeout(timer);
}, [inView, controls, skills.length]);

  const repeatedSkills = [...skills, ...skills];

  return (
    <div ref={ref} className="relative w-full overflow-hidden">
      <motion.div
        className="flex gap-3 py-2"
        initial={{ x: '0%' }}
        animate={controls}
        style={{ width: 'max-content' }}
      >
        {repeatedSkills.map((skill, i) => (
          <span
            key={i}
            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-200 dark:bg-zinc-700 text-gray-800 dark:text-gray-100"
          >
            {skill}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default SkillScroll;