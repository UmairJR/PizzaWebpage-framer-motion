import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {buttonVariant, homeContainerVariant} from '../motion';
import Loader from './Loader';

const Home = () => {
  return (
    <motion.div className="home container"
    variants={homeContainerVariant}
    initial='hidden'
    animate='show'
    exit='exit'
    >
      <motion.h2
      animate={{}}
      >
        Welcome to Perfecto Pizza
      </motion.h2>
      <Link to="/base">
        <motion.button 
        variants={buttonVariant}
        whileHover='hover'
        >
          Create Your Pizza
        </motion.button>
      </Link>
      <Loader />
    </motion.div>
  )
}

export default Home;