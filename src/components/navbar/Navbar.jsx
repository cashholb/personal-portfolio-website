import './navbar.scss';
import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

import ToggleMenuButton from './toggleMenuButton/ToggleMenuButton';
import MenuLinks from './menuLinks/MenuLinks';

function Navbar() {
  
  const [open, setOpen] = useState(true);

  const {scrollY} = useScroll({});
  useMotionValueEvent(scrollY, "change", (latest) => {
    if(latest > 2) {
      setOpen(false);
    }else{
      setOpen(true);
    }
  });
  
  return (
      <motion.div className='navbar' animate={ open ? 'open' : 'closed' }>
        <MenuLinks></MenuLinks>
        <ToggleMenuButton setOpen={setOpen}></ToggleMenuButton>
      </motion.div>
  )

}


export default Navbar;