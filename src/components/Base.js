import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { containerVariant, nextVariant, buttonVariant} from '../motion';

const Base = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

  return (
    <motion.div className="base container"
      variants={containerVariant}
      initial='hidden'
      animate='show'
      exit='exit'
    >

      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map(base => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <motion.li key={base} onClick={() => addBase(base)}
            whileHover={{
              originX: 0,
              scale: 1.3,
              color: 'yellow'
            }}
            transition={{type:'spring', stiffness:300}}
            >
              <span className={spanClass}>{base}</span>
            </motion.li>
          )
        })}
      </ul>

      {pizza.base && (
        <motion.div className="next"
        variants={nextVariant}
        initial='hidden'
        animate='show'
        >
          <Link to="/toppings">
            <motion.button
              variants={buttonVariant}
              whileHover='hover'
            >Next</motion.button>
          </Link>
        </motion.div>
      )}

    </motion.div>
  )
}

export default Base;