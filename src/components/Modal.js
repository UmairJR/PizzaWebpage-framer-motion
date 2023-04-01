import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { backdropVariant, modalVariant} from '../motion';

const Modal = ({showModal, setShowModal}) => {
  return (
    <AnimatePresence>
        { showModal && (
        <motion.div className='backdrop'
        variants={backdropVariant}
        initial='hidden'
        animate='show'
        exit='hidden'
        >
        <motion.div className='modal'
        variants={modalVariant}
        initial='hidden'
        animate='show'
        
        >
        <p>Want to make another Pizza?</p>
            <Link to="/">
              <button>Start Again</button>
            </Link>
        </motion.div>

        </motion.div>
        )}
    </AnimatePresence>
  )
}

export default Modal
