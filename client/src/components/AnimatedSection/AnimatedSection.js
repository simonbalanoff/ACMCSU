import { useState, useEffect } from 'react';
import { useInView } from "../../hooks/useInView";

import "./AnimatedSection.css"

export default function AnimatedSection({ children }) {
  const [ref, inView] = useInView({ rootMargin: "-10% 0px" });
  const [hasBeenInView, setHasBeenInView] = useState(false);

  useEffect(() => {
    if (inView) {
      setHasBeenInView(true);
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      className={`animated-section ${
        hasBeenInView ? "fadeIn" : "fadeOut"
      }`}
    >
      {children}
    </div>
  );
}
