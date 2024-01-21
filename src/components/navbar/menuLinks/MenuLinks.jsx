import { motion } from "framer-motion";
import PropTypes from 'prop-types';

function MenuLinks({isMobile}) {

  const items = [
    "Cashton",
    "About",
    "Portfolio",
    "Contact"
  ];

  const variants = {
    open: {
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1,

      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: 1,
      },
    },
  };

  const mobileVariants = {
    open: {
      transition: {
        staggerChildren: 0.1,
        staggerDirection: 1,

      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    open: {
      x: 0,
      opacity: 1,
    },
    closed: {
      x: 50,
      opacity: 0,
    },
  };

  return (
    <>
    <motion.div className='menu-links' variants={isMobile ? mobileVariants : variants}>
      {items.map((item)=>( 
        <motion.a
          className={`menu-link ${item}-link`}
          href={`#${item}`}
          key={item}
          variants={itemVariants}
          whileTap={{scale:0.95}}
          whileHover={{scale:1.1}}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
    </>
  )
}

MenuLinks.propTypes = {
  isMobile: PropTypes.bool,
}

export default MenuLinks;