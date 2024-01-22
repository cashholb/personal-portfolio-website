import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import useMediaQuery from '../../../hooks/useMediaQuery';

const AnimatedSVG = ({ duration = 6, svgPathParam = '/heroImage/svgPath.txt', width=444, height=600}) => {

  const isAnimatedSVGTooBig = useMediaQuery('(max-width: 1140px)');
  const [svgPath, setSvgPath] = useState('');
  const controls = useAnimation();

  const wrapperVariants = {
    hidden: {
      clipPath: "circle(1200px at 50px 50px)",
      pathLength: 0,
    },
    visible: {
      clipPath: "circle(1200px at 50px 50px)",
      pathLength: 1,
      transition: { duration: duration, ease: 'easeInOut' },
    },
    exit: {
      pathLength: 0,
    }
  }

  // Fetch SVG path from the text file
  useEffect(() => {
    const fetchSvgPath = async () => {
      try {
        const response = await fetch(svgPathParam);
        console.log(response);
        const pathData = await response.text();
        setSvgPath(pathData);
      } catch (error) {
        console.error('Error fetching SVG path:', error);
      }
    };
    fetchSvgPath();
  }, []);

  // Trigger animation on mount
  useEffect(() => {
    controls.start('visible');
  }, [controls]);

  return (
    <>
      <motion.svg xmlns="http://www.w3.org/2000/svg"  width={isAnimatedSVGTooBig ? `${width * 0.75}` : `${width}`} height={isAnimatedSVGTooBig ? `${height * 0.75}` : `${height}`}>
        <motion.path
          transform={isAnimatedSVGTooBig ? "scale(0.75)" : "scale(1)"}
          d={`${svgPath}`}
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
}


export default AnimatedSVG;
