
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const HoverSlideText = () => {
    const [isHovered, setIsHovered] = useState(false);
  return (
    <div style={{ width: "100%",
        height: "100%",
        display: "grid",
        placeItems: "center",
        background: "#4DA6FF",
        color: "white",}}>
    <div 
      className="container"
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}  
    >
      {'hover'.split('').map((letter, i) => (
        <div className="letter-container" key={i}>
          <div>{letter}</div>
          <motion.div
            initial={{ left: '-100%' }}
            animate={{ left: isHovered ? '0%' : '-100%' }}
            transition={{ 
              duration: isHovered ? .7 : .5, 
              ease: [.7, 0, .3, 1] 
            }}
          >
            {letter.toUpperCase()}
          </motion.div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default HoverSlideText