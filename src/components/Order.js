import React, { useEffect } from 'react';
import {motion} from 'framer-motion';
import { containerVariant, topOrderVariant} from '../motion';


const Order = ({ pizza, setShowModal}) => {
  useEffect(() => {
    setTimeout(() => setShowModal(true), 3000);
  }, []);
  return (
    <motion.div className="container order"
    variants={containerVariant}
    initial='hidden'
    animate='show'
    exit='exit'
    >
      <h2>Thank you for your order :)</h2>
      <motion.p variants={topOrderVariant}>You ordered a {pizza.base} pizza with:</motion.p>
      <motion.div variants={topOrderVariant}>
      {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
      </motion.div>
      
    </motion.div>
  )
}

export default Order;