import './navbar.scss';
import { motion } from "framer-motion";

import useNavbar from '../hooks/useNavbar';

import ToggleMenuButton from './toggleMenuButton/ToggleMenuButton';
import MenuLinks from './menuLinks/MenuLinks';

function Navbar() {

  const [open, setOpen, isMobile] = useNavbar();
  
  return (
      <motion.div className='navbar' animate={ open ? 'open' : 'closed' }>
        <MenuLinks isMobile={isMobile}></MenuLinks>
        <ToggleMenuButton setOpen={setOpen}></ToggleMenuButton>
      </motion.div>
  )
}


export default Navbar;