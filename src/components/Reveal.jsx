"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function RevealList({ children, stagger = 0.1 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref}>
      {Array.isArray(children) &&
        children.map((child, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 1, y: 20 }}
            animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{
              duration: 0.4,
              ease: "easeOut",
              delay: i * stagger,
            }}
          >
            {child}
          </motion.div>
        ))}
    </div>
  );
}
