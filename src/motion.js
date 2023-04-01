export const containerVariant = {
  hidden: {
    opacity: 0,
    x: '100vw',
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 200,
      mass: 0.4,
      damping: 8,
      when: 'beforeChildren',
      staggerChildren: 0.4,
    }
  },
  exit: {
    x: '-100vw',
    transition: {
      ease: 'easeInOut',
    }
  }
}

export const homeContainerVariant = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 3
    }
  },
  exit: {
    x: '-100vw',
    transition: {
      ease: 'easeInOut',
    }
  }

}

export const buttonVariant = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      duration: 0.3,
      yoyo: Infinity,
    }
  }
}

export const nextVariant = {
  hidden: {
    opacity: 0,
    x: '300vw',
  },
  show: {
    opacity: 1,
    x: 0,
  }
}

export const topOrderVariant = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    scale: 1.1,
  }
}

export const backdropVariant = {
  hidden:{
    opacity:0,
  },
  show:{
    opacity: 1,
  }
}

export const modalVariant = {
  hidden:{
    y: '-100vh',
    opacity: 0,
  },
  show:{
    y: '200px',
    opacity: 1,
    transition:{
      delay: 0.5,
    }
  },
}

export const svgVariant = {
  hidden:{
    rotate: -180,
  },
  show:{
    rotate: 0,
    transition:{
      duration: 1,
    }
  },
}
export const pathVariant = (duration) => ({
  hidden:{
    opacity:0,
    pathLength: 0,
  },
  show:{
    opacity:1,
    pathLength: 1,
    transition:{
      duration: duration,
      ease: 'easeInOut',
    }
  },
})

export const loaderVariant ={
animationOne:{
  x:[-20,20],
  y:[0,-30],
  transition:{
    x:{
      yoyo: Infinity,
      duration: 0.5,
    },
    y:{
      yoyo: Infinity,
      duration: 0.25,
      ease:'easeOut'
    }
  }
},
animationTwo:{
  y:[0, -40],
  x: 0,
  transition:{
    y:{
      yoyo: Infinity,
      duration: 0.25,
      ease:'easeOut'
    }
  }
}
}