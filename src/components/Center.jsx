import React from 'react'
import CountUp from 'react-countup'
import {motion} from "framer-motion"
const Center = () => {
  return (
    <>
    <div id="main">
        <div className="left">
            < motion.h1
            initial={{y:"3vw",opacity:0}}
            animate={{y:0,opacity:1}}
            transition={{
                duration:3,
                type:'spring'
            }}
            
            >
                Discover<br></br>
Most Suitable<br></br>
Property</motion.h1>
<motion.p
initial={{y:'5vw',opacity:0}}
animate={{y:0,opacity:1}}
transition={{
    duration:2,
    type:"spring"
}}
>Find a variety of properties that suit you very easilty<br></br>
Forget all difficulties in finding a residence for you
</motion.p>
<div className="input"></div>
<div className="tag">
    <div className="point">
        <h3>
            <CountUp start={8000} end={9000} duration={5} />
            <p>+</p>
        </h3>
        <h4>Premium Product</h4>
    </div>
    <div className="point">
        <h3>
            <CountUp start={1800} end={2000} duration={5} />
            <p>+</p>
        </h3>
        <h4>Happy Customer</h4>
    </div>
    <div className="point">
        <h3>
            <CountUp start={0} end={28} duration={5} />
            <p>+</p>
        </h3>
        <h4>Awards Winning</h4>
    </div>
    
</div>
        </div>
        <motion.div className="right"
         initial={{x:"20vw",opacity:0}}
         animate={{x:0,opacity:1}}
         transition={{
            duration:4,
            type:"spring"
         }}
        >
            <img src="https://real-estate-web.pages.dev/hero-image.png" alt="" />
    </motion.div>
    </div>
    <div className="random"></div>
    
  </>
  )
}

export default Center