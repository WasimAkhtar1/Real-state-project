import React from 'react'
import CountUp from 'countup'
import {motion} from "framer-motion"
const Header = () => {
  return (
    <div className='nav'>

    
    
        <motion.div className="part2"

initial={{y:"-20vw",opacity:0}}
animate={{y:0,opacity:1}}
transition={{
    duration:3,
    type:"spring"
}}
        >
      <img src="https://real-estate-web.pages.dev/logo.png" alt="" />
      </motion.div>
      <motion.div className="part"
        initial={{y:"-20vw",opacity:0}}
        animate={{y:0,opacity:1}}
        transition={{
            duration:3,
            type:"spring"
        }}
                >
      
      
        <li>Residencies
          </li>
          <li>Our Value
</li>
<li>Contact Us</li>
<li>Get Started</li>
<button>Contact</button>
      </motion.div>
    </div>
  )
}

export default Header
