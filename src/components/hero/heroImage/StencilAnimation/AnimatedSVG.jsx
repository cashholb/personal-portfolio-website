import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import useMediaQuery from '../../../hooks/useMediaQuery';

const AnimatedSVG = ({ duration = 12, svgPathParam = "", width = 444, height = 600 }) => {
  const isAnimatedSVGTooBig = useMediaQuery('(max-width: 1140px)');
  const controls = useAnimation();

  const wrapperVariants = {
    hidden: {
      clipPath: 'circle(1200px at 50px 50px)',
      pathLength: 0,
    },
    visible: {
      clipPath: 'circle(1200px at 50px 50px)',
      pathLength: 1,
      transition: { duration: duration, ease: 'easeInOut' },
    },
    exit: {
      pathLength: 0,
    },
  };

  // Trigger animation on mount
  useEffect(() => {
    controls.start('visible');
  }, []);

  return (
    <>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width={isAnimatedSVGTooBig ? `${width * 0.75}` : `${width}`}
        height={isAnimatedSVGTooBig ? `${height * 0.75}` : `${height}`}
      >
        <motion.path
          transform={isAnimatedSVGTooBig ? 'scale(0.75)' : 'scale(1)'}
          d={svgPathParam}
          fill="none"
          stroke="white"
          strokeWidth="2"
          variants={wrapperVariants}
          initial="hidden"
          animate={controls}
          exit="exit"
        />
      </motion.svg>
    </>
  );
};

AnimatedSVG.propTypes = {
  duration: PropTypes.number,
  svgPathParam: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default AnimatedSVG;
