import { motion, useInView } from "motion/react";
import { useRef } from "react";

interface WordsPullUpProps {
  text: string;
  className?: string;
  showAsterisk?: boolean;
}

export function WordsPullUp({ text, className = "", showAsterisk = false }: WordsPullUpProps) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  const words = text.split(" ");

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const wordVariants = {
    hidden: { y: "20%", opacity: 0 },
    show: {
      y: "0%",
      opacity: 1,
      transition: {
        ease: [0.16, 1, 0.3, 1],
        duration: 0.8,
      },
    },
  };

  return (
    <motion.div
      ref={containerRef}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      className={`inline-flex flex-wrap ${className}`}
    >
      {words.map((word, i) => {
        const isLastWord = i === words.length - 1;
        return (
          <span key={i} className="inline-block mr-[0.25em] last:mr-0">
            <motion.span variants={wordVariants} className="inline-block relative">
              {word}
              {showAsterisk && isLastWord && (
                <span className="absolute top-[0.65em] -right-[0.3em] text-[0.31em]">
                  *
                </span>
              )}
            </motion.span>
          </span>
        );
      })}
    </motion.div>
  );
}
