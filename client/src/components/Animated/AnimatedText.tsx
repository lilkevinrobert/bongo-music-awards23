import React from 'react';
import { motion } from 'framer-motion';

type AnimatedTextProps = {
    text: string;
    Wrapper?: keyof JSX.IntrinsicElements; // Use Wrapper? to make it optional
    className?: string;
    animationProps?: {
        initial?: Record<string, any>;
        animate?: Record<string, any>;
        transition?: Record<string, any>;
    };
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, Wrapper = "p", className, animationProps }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -1000 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      {...animationProps} // Spread animationProps to override default animation
    >
      <Wrapper className={className}>{text}</Wrapper>
    </motion.div>
  );
};

export default AnimatedText;