"use client";
/**Code from MagicUI */
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { memo } from "react";

const staggerTimings = {
  text: 0.06,
  word: 0.05,
  character: 0.03,
  line: 0.06,
};

const defaultContainerVariants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0,
      staggerChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const defaultItemVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

const animationPresets = {
  fadeIn: {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  },
  slideUp: {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.3 } },
    exit: { y: -20, opacity: 0, transition: { duration: 0.3 } },
  },
};

const TextAnimate = ({
  children,
  delay = 0,
  duration = 0.3,
  className,
  segmentClassName,
  as = "p",
  startOnView = true,
  once = false,
  by = "word",
  animation = "fadeIn",
  variants,
  ...props
}) => {
  const MotionComponent = motion[as] || motion.p;

  let segments = [];
  switch (by) {
    case "word":
      segments = children.split(/(\s+)/);
      break;
    case "character":
      segments = children.split("");
      break;
    case "line":
      segments = children.split("\n");
      break;
    case "text":
    default:
      segments = [children];
      break;
  }

  const finalVariants = variants
    ? {
        container: {
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              delayChildren: delay,
              staggerChildren: duration / segments.length,
            },
          },
          exit: {
            opacity: 0,
            transition: {
              staggerChildren: duration / segments.length,
              staggerDirection: -1,
            },
          },
        },
        item: variants,
      }
    : {
        container: defaultContainerVariants,
        item: animationPresets[animation] || defaultItemVariants,
      };

  return (
    <AnimatePresence mode="popLayout">
      <MotionComponent
        variants={finalVariants.container}
        initial="hidden"
        whileInView={startOnView ? "show" : undefined}
        animate={startOnView ? undefined : "show"}
        exit="exit"
        className={cn("whitespace-pre-wrap", className)}
        viewport={{ once }}
        {...props}
      >
        {segments.map((segment, i) => (
          <motion.span
            key={`${by}-${segment}-${i}`}
            variants={finalVariants.item}
            custom={i * staggerTimings[by]}
            className={cn(
              by === "line" ? "block" : "inline-block whitespace-pre",
              segmentClassName,
            )}
          >
            {segment}
          </motion.span>
        ))}
      </MotionComponent>
    </AnimatePresence>
  );
};

export default memo(TextAnimate);