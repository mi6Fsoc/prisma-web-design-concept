import { motion, useInView } from "motion/react";
import { useRef } from "react";

interface TextSegment {
  text: string;
  className?: string;
}

interface WordsPullUpMultiStyleProps {
  segments: TextSegment[];
  className?: string;
}

export function WordsPullUpMultiStyle({ segments, className = "" }: WordsPullUpMultiStyleProps) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  // Flatten segments into individual words while preserving the styled class for each word
  const wordsWithStyles = segments.flatMap((segment) =>
    segment.text.split(" ").map((word) => ({
      word,
      className: segment.className || "",
    }))
  );

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
      className={`inline-flex flex-wrap justify-center ${className}`}
    >
      {wordsWithStyles.map((item, i) => (
        <span key={i} className="inline-block mr-[0.25em] last:mr-0">
          <motion.span variants={wordVariants} className={`inline-block ${item.className}`}>
            {item.word}
          </motion.span>
        </span>
      ))}
    </motion.div>
  );
}
