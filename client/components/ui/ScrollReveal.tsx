import { useRef, ReactNode } from "react";
import { motion, useInView, Variants } from "framer-motion";

interface ScrollRevealProps {
  children: ReactNode;
  /** Delay in seconds before the animation starts (for staggering siblings) */
  delay?: number;
  /** How much of the element must be visible before triggering (0–1) */
  threshold?: number;
  /** Only animate once (default: true) */
  once?: boolean;
  /** Distance in px to slide up from */
  distance?: number;
  /** Custom class names applied to the wrapper div */
  className?: string;
  /** Duration of the animation in seconds */
  duration?: number;
}

/**
 * ScrollReveal — Anti-gravity fade-in + slide-up wrapper.
 *
 * Wrap any section or element with this component to get a smooth
 * "fade-in and slide-up" reveal as it enters the viewport.
 *
 * @example
 * <ScrollReveal delay={0.1}>
 *   <MySection />
 * </ScrollReveal>
 */
export default function ScrollReveal({
  children,
  delay = 0,
  threshold = 0.15,
  once = true,
  distance = 70,
  className,
  duration = 2.5,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once,
    amount: threshold,
  });

  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: distance,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1], // expo ease-out — highly fluid, elegant deceleration
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}
