import React from 'react';
import {motion, useCycle} from 'framer-motion';
import { loaderVariant} from '../motion';
const Loader = () => {
    const [animation, cycleAnimation] = useCycle("animationOne", "animationTwo");
  
    return (
      <>
        <motion.div className="loader"
          variants={loaderVariant}
          animate={animation}
        ></motion.div>
        <div onClick={() => cycleAnimation() }>Change Loader</div>
      </>
    )
  }

export default Loader
