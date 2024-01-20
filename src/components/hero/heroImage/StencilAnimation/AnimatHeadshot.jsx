import PropTypes from 'prop-types';
import { useEffect } from 'react';
import {motion, useAnimation} from 'framer-motion';

function AnimateHeadShot({ delay = 7 }) {

   
  const controls = useAnimation();

  useEffect(() => {
    controls.start('visible');
  }, [controls]);

  const wrapperVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {delay: 3}
    },
    exit: {
      opacity: 0,
    }
  }

  return (
    <motion.img 
      className='hero-image imageB'
      src="/linkedin_photo.JPG" alt="" 
      variants={wrapperVariants}
      initial="hidden"
      animate={controls}
      exit="exit"
    />
  )
}

AnimateHeadShot.propTypes = {
  delay: PropTypes.number,
}

export default AnimateHeadShot;