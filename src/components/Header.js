import React from 'react';
import {motion} from 'framer-motion';
import { svgVariant, pathVariant} from '../motion';

const Header = () => {
  return (
    <header>
      <motion.div className="logo"
      drag
      dragConstraints={{left:0,right:0,top:0,bottom:0}}
      dragElastic={0.6}
      >
        <motion.svg className="pizza-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"
        variants={svgVariant}
        initial='hidden'
        animate='show'
        >
          <motion.path
            variants={pathVariant(2)}
            fill="none"
            d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
          />
          <motion.path
          variants={pathVariant(2.5)}
            fill="none"
            d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
          />
        </motion.svg>
      </motion.div>
      <motion.div className="title"
      initial={{y: -200}}
      animate={{y: -10}}
      transition={{delay:0.3, type: 'spring', stiffness: 200}}
      // viewport={{once:false, amount:1.5}}
      >
        <h1>Perfecto Pizza</h1>
      </motion.div>
    </header>
  )
}

export default Header;