import React from 'react';
import { motion } from 'framer-motion';

type AnimatedImageProps = {
    src: string;
    className?: string;
}

const AnimatedImage: React.FC<AnimatedImageProps> = ({ src, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", damping: 12, stiffness: 100, duration: 0.5 }}
    >
      <img
        src={src}
        alt="bongo music awards logo"
        className={ className }
      />
    </motion.div>
  );
};

export default AnimatedImage;