import React, { useEffect } from "react";
import { motion } from "framer-motion"
import Img from '../Img/index';
import LoadingBar from '../LoadingBar';
import styled from "styled-components";

const Cont = styled.div`
height:100vh;
display:flex;
flex-direction:column;
justify-content:center;
align-items:flex-end;
`;

const BarCont = styled.div`
width:100%;
height:100%;
display:flex;
justify-content:center;
align-items:center;
position:absolute;
z-index:1;
top:-40px;
left:-130px;
@media only screen and (max-width: 600px){
top:50px;
left:-60px;
}
`;
const container = {
 
  show:{
    scale:1.4,
    jc2:"center",
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 4,
    },
  },
  exit:{
    scale:1,
    jc2:"right",
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 2.5,
    },
  }
}
const Loader = ({ setLoading, jc2, layoutId }) =>{

return (
  <div className='loader' style={{overflow:"hidden"}}>
    <motion.div
    className='loader-inner'
    variants={container}
    animate='show'
    exit='exit'
    onAnimationComplete={() => setLoading(false)}
    >
    <Cont>
      <BarCont>
        <LoadingBar/>
      </BarCont>
      <Img 
      jc="center" 
      jc2={jc2} 
      right="" 
      pl="30%"
      layoutId={layoutId}
      />
    </Cont>
    </motion.div>
  </div>
);
};

export default Loader;