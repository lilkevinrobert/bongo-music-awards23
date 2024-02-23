import React from "react";
import { motion } from "framer-motion";

type AnimatedTextCharacterProps = {
  text: string;
  Wrapper?: keyof JSX.IntrinsicElements; // Use Wrapper? to make it optional
  className?: string;
};

const AnimatedTextCharacter: React.FC<AnimatedTextCharacterProps> = ({
  text,
  Wrapper = "div",
  className
}) => {
  const letters = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transiiton: { staggerChildren: 0.03, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", damping: 12, stiffness: 100 },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: { type: "spring", damping: 12, stiffness: 100 },
    },
  };
  return (
    <Wrapper className={className}>
        <motion.div variants={container} initial="hidden" animate="visible">
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={child}
        >
          {letter === "" ? "\u00A0" : letter}
        </motion.span>
      ))}
      </motion.div>
    </Wrapper>
  );
};

export default AnimatedTextCharacter;
