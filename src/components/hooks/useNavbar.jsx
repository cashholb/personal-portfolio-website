import { useState, useEffect } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import useMediaQuery from "./useMediaQuery";


const useNavbar = () => {

  const isMobile = useMediaQuery('(max-width: 768px)');
  const [open, setOpen] = useState(true);

  const {scrollY} = useScroll({});
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 2) {
      setOpen(false);
    } else {
      if(!isMobile){
        setOpen(true);
      }
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
  }, [open]);

  return [open, setOpen, isMobile];

}

export default useNavbar;