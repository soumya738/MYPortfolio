import { useEffect, useState } from "react";
import { Check } from "lucide-react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";

export default function CustomCursor() {
  const reduceMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 550, damping: 38, mass: 0.35 });
  const springY = useSpring(y, { stiffness: 550, damping: 38, mass: 0.35 });

  useEffect(() => {
    const pointerQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    const updateEnabled = () => {
      const shouldEnable = pointerQuery.matches && !reduceMotion;
      setEnabled(shouldEnable);
      document.documentElement.toggleAttribute("data-custom-cursor", shouldEnable);
    };

    updateEnabled();
    pointerQuery.addEventListener("change", updateEnabled);

    return () => {
      pointerQuery.removeEventListener("change", updateEnabled);
      document.documentElement.removeAttribute("data-custom-cursor");
    };
  }, [reduceMotion]);

  useEffect(() => {
    if (!enabled) return undefined;

    const handlePointerMove = (event) => {
      x.set(event.clientX);
      y.set(event.clientY);
      setVisible(true);
    };
    const handlePointerOver = (event) => {
      setHovering(Boolean(event.target.closest("a, button, summary, [data-cursor='check']")));
    };
    const handlePointerOut = (event) => {
      if (!event.relatedTarget) {
        setVisible(false);
        setHovering(false);
      }
    };
    const handlePointerDown = () => setHovering(true);
    const handlePointerUp = (event) => {
      setHovering(Boolean(event.target.closest("a, button, summary, [data-cursor='check']")));
    };

    window.addEventListener("pointermove", handlePointerMove);
    document.addEventListener("pointerover", handlePointerOver);
    window.addEventListener("pointerout", handlePointerOut);
    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointerup", handlePointerUp);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerover", handlePointerOver);
      window.removeEventListener("pointerout", handlePointerOut);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      className={`custom-cursor${hovering ? " is-hovering" : ""}`}
      aria-hidden="true"
      initial={false}
      animate={{ opacity: visible ? 1 : 0, scale: hovering ? 1 : 0.42 }}
      transition={{ opacity: { duration: 0.12 }, scale: { type: "spring", stiffness: 420, damping: 22 } }}
      style={{ x: springX, y: springY }}
    >
      <motion.span
        className="custom-cursor-dot"
        animate={{ scale: hovering ? 0 : 1 }}
        transition={{ duration: 0.12 }}
      />
      <motion.span
        className="custom-cursor-check"
        initial={false}
        animate={{ scale: hovering ? 1 : 0, rotate: hovering ? 0 : -35 }}
        transition={{ type: "spring", stiffness: 460, damping: 17, delay: hovering ? 0.035 : 0 }}
      >
        <Check size={23} strokeWidth={2.8} />
      </motion.span>
    </motion.div>
  );
}
