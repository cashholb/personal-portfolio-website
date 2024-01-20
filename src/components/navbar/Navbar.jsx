import './navbar.scss';
import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

import ToggleMenuButton from './toggleMenuButton/ToggleMenuButton';
import MenuLinks from './menuLinks/MenuLinks';

function Navbar() {
  
  const [open, setOpen] = useState(true);

  const {scrollY} = useScroll({});
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 2) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  });

  useEffect(()=> {
    if(open){
      document.querySelectorAll('.menu-link').forEach((link) => {
        link.classList.remove('inactive-link')
      })
    }else{
      document.querySelectorAll('.menu-link').forEach((link) => {
        link.classList.add('inactive-link')
      })
    }
  }, [open])
  
  return (
      <motion.div className='navbar' animate={ open ? 'open' : 'closed' }>
        <MenuLinks></MenuLinks>
        <ToggleMenuButton setOpen={setOpen}></ToggleMenuButton>
      </motion.div>
  )
}


export default Navbar;