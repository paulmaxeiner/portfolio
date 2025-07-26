"use client";

import React, { useState } from "react";
import { motion, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils"; // optional

export const Button = ({ className, children, ...props }) => {
  const [scope, animate] = useAnimate();
  const [status, setStatus] = useState("idle"); // 'idle' | 'loading' | 'success'

  const handleClick = async (event) => {
    setStatus("loading");

    // Immediately go blue
    await animate(scope.current, { backgroundColor: "#3b82f6" }, { duration: 0.2 });
    await animate(".loader", { width: 20, scale: 1, display: "block" }, { duration: 0.2 });

    const result = props.onClick?.(event);
    await Promise.all([
      result instanceof Promise ? result : Promise.resolve(),
      new Promise((res) => setTimeout(res, 400)),
    ]);

    // Transition to green
    await animate(".loader", { width: 0, scale: 0, display: "none" }, { duration: 0.2 });
    await animate(".check", { width: 20, scale: 1, display: "block" }, { duration: 0.2 });
    await animate(scope.current, { backgroundColor: "#22c55e" }, { duration: 0.2 });

    await new Promise((res) => setTimeout(res, 2000));

    // Reset to gray
    await animate(".check", { width: 0, scale: 0, display: "none" }, { duration: 0.2 });
    await animate(scope.current, { backgroundColor: "#6b7280" }, { duration: 0.2 });

    setStatus("idle");
  };

  return (
    <motion.button
      ref={scope}
      layout
      onClick={handleClick}
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={cn(
        "flex min-w-[120px] items-center justify-center gap-2 rounded-full bg-gray-500 px-4 py-2 font-medium text-white transition duration-300 ease-in-out focus:outline-none",
        "hover:brightness-110 active:scale-95",
        className
      )}
      {...props}
    >
      <motion.div layout className="flex items-center gap-2">
        <Loader />
        <CheckIcon />
        <motion.span layout>{children}</motion.span>
      </motion.div>
    </motion.button>
  );
};

const Loader = () => (
  <motion.svg
    animate={{ rotate: [0, 360] }}
    initial={{ scale: 0, width: 0, display: "none" }}
    style={{ scale: 0.5, display: "none" }}
    transition={{ duration: 0.3, repeat: Infinity, ease: "linear" }}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="loader text-white"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12 3a9 9 0 1 0 9 9" />
  </motion.svg>
);

const CheckIcon = () => (
  <motion.svg
    initial={{ scale: 0, width: 0, display: "none" }}
    style={{ scale: 0.5, display: "none" }}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="check text-white"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M9 12l2 2l4-4" />
  </motion.svg>
);
