/**
 * Shared animation variants and constants for Framer Motion.
 */

export const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

/**
 * Standard entrance animation for decorative elements (badges, stars, etc.)
 */
export const decorationEntrance = {
  hidden: { opacity: 0, scale: 0.6, rotate: -10 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.8, delay: 0.4 + i * 0.15, ease: EASE },
  }),
};

/**
 * Floating animation loop.
 * 
 * @param delay Animation start delay
 * @param duration Cycle duration
 * @param y Vertical movement distance
 * @param isStudio Whether we are in Sanity Studio (disables animation)
 */
export const float = (delay: number, duration: number, y: number, isStudio: boolean = false) => ({
  initial: { y: 0 },
  animate: {
    y: isStudio ? 0 : [0, -y, 0],
    transition: isStudio ? {} : {
      duration,
      delay,
      repeat: Infinity,
      repeatType: "loop" as const,
      ease: "easeInOut" as const,
    },
  },
});
