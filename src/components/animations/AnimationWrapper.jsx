import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimationWrapper = ({ children, direction = "left", delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: false, // Allow repeated triggers
    threshold: 0.2, // Trigger when 20% of the element is visible
  });

  const [hasAnimated, setHasAnimated] = useState(false);

  // Update animation state
  useEffect(() => {
    if (inView) {
      setHasAnimated(true); // Component enters view
    } else if (!inView && hasAnimated) {
      setHasAnimated(false); // Reset if component exits view
    }
  }, [inView, hasAnimated]);

  const variants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "top" ? -100 : direction === "bottom" ? 100 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 1.2, // Smooth, slow animation
        delay,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"} // Always animate based on visibility
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default AnimationWrapper;
