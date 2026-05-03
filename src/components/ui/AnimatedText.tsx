import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export function AnimatedText({ text, className = "" }: AnimatedTextProps) {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.2"],
  });

  const words = text.split(" ");
  const totalChars = text.replace(/\s/g, "").length;

  return (
    <p ref={containerRef} className={`inline-block ${className}`}>
      {words.map((word, wordIndex) => {
        const wordStartOffset = words.slice(0, wordIndex).join("").length;
        
        return (
          <span key={wordIndex} className="inline-block mr-[0.25em] last:mr-0">
            {word.split("").map((char, charIndex) => {
              const globalCharIndex = wordStartOffset + charIndex;
              const charProgress = globalCharIndex / totalChars;
              
              const start = Math.max(0, charProgress - 0.1);
              const end = Math.min(1, charProgress + 0.05);

              const opacity = useTransform(
                scrollYProgress,
                [start, end],
                [0.2, 1]
              );

              return (
                <motion.span key={charIndex} style={{ opacity }}>
                  {char}
                </motion.span>
              );
            })}
          </span>
        );
      })}
    </p>
  );
}
