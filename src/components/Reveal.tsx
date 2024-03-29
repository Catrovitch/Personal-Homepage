// framer-motion
import { motion } from "framer-motion";

// utils
import { transition } from "../utils/transition";

// react
import { FC, ReactNode } from "react";


interface RevealProps {
  children: ReactNode;
}

const Reveal: FC<RevealProps> = ({ children }) => {
  return (
    <div className="relative">
      <motion.div 
        variants={{
          hidden: {
            opacity:0,
          },
          visible: {
            opacity: 1,
          },
        }}
        initial = "hidden"
        whileInView="visible"
        viewport={{once: false}}
        transition={transition()}
      >
        {children}
      </motion.div>


    </div>
  )
};

export default Reveal;
