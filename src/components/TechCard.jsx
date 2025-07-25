import { useEffect, useState } from 'react';
import { motion, useAnimation, useScroll, useMotionValueEvent, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TechSection = () => {
  const [techMeta, setTechMeta] = useState({});
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    fetch('/techMeta.json')
      .then((res) => res.json())
      .then((data) => setTechMeta(data))
      .catch((err) => console.error('Failed to load techMeta:', err));
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [inView, controls]);

  const itemVariants = {
    hidden: { opacity: 0, y: -40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: (Object.keys(techMeta).length - i) * 0.05,
        type: 'spring',
        stiffness: 400,
        damping: 60,
      },
    }),
  };

  return (
    <div
      ref={ref}
      className=""
    >
      {Object.keys(techMeta).length > 0 && (
        <div className="flex flex-wrap gap-2 pt-2 mb-8">
          {Object.entries(techMeta).map(([tech, meta], i) => (
            <motion.span
              key={tech}
              custom={i}
              initial="hidden"
              animate={controls}
              variants={itemVariants}
              className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${meta.bg || 'bg-gray-200 dark:bg-zinc-800'} ${meta.text || 'text-gray-800 dark:text-gray-100'}`}
            >
              {meta.icon && <i className={`${meta.icon} text-xs`} />}
              {tech}
            </motion.span>
          ))}
        </div>
      )}


    </div>
  );
};

export default TechSection;
