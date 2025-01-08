import React, { useRef, useState, useEffect } from "react";

const SlideInWrapper = ({ children, direction = "left" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the component is visible
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const baseClasses = "transition-transform duration-1000 opacity-0";
  const directionClasses =
    direction === "left"
      ? "-translate-x-full"
      : direction === "right"
      ? "translate-x-full"
      : "";

  const visibleClasses = isVisible
    ? "translate-x-0 opacity-100"
    : directionClasses;

  return (
    <div
      ref={ref}
      className={`${baseClasses} ${visibleClasses}`}
    >
      {children}
    </div>
  );
};

export default SlideInWrapper;
