import styled from "styled-components";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

const Cont = styled.div`
display:flex;
flex-direction:column;
`;

const Top = styled.div`
display:flex;
flex-direction:row;
font-size:16px;
font-family:'Gilroy-Regular', sans-serief;
color:#92B2CD;
@media only screen and (max-width: 600px){
  font-size:14px;
}
`;
const Letter = styled.p`
padding: 0 0.5em;
`;

export default function LoadingBar({


}) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, 100, { duration: 4 });

    return animation.stop;
  }, []);
  const container = {
    hidden:{
      color:"#92B2CD",
    },
    anim:{
      color:"#496A7F",
      transition: {
        ease: [0.42,0,0.58,1],
        duration: 4,
      },
    }
  }
  return <Cont>
    <Top>
      <div>
        <Letter>Loading ...</Letter>
      </div>
      <motion.div 
      variants={container}
      initial='hidden'
      animate='anim'
      >
       {rounded}
      </motion.div>
      <Letter> %</Letter>
    </Top>
    </Cont>;
}