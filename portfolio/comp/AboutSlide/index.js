import styled,{keyframes} from "styled-components";
import * as React from 'react';
import { useState, useEffect, useRef } from "react";
import { useTheme } from "@/utils/provider";
import {accentpara, title} from "@/utils/variables";
import { motion } from "framer-motion";

const SridesArea = styled.article`
width:100%;
max-height:40%;
overflow-y:hidden;
position:relative;
::-webkit-scrollbar {
  display: none;
}
@media only screen and (min-width: 1024px) {
  max-height:55%;
}
@media screen and (min-width:601px) and (max-width:767px){
  max-height:60%;
}
@media only screen and (min-height: 431px) {
  min-height:55%;
}
@media only screen and (max-height: 430px) {
  max-height:70%;
}

`;

const Sride = styled.div`
height:100%;
scroll-snap-align:start;
display:inline-block;
justify-content:center;
transition: ease 1000ms;
transform:${(props)=>props.transform};
opacity:${(props)=>props.opacity};
`;

const SubTitle = styled.p`
font-family:${(props)=>props.parafm};
color:#111A36;
font-size:16px;
font-weight:300;
line-height:36px;
padding-left:0.3rem;
opacity:0.7;
`;

const Paragraph = styled.p`
font-family:${(props)=>props.parafm};
color:${(props)=>props.color};
font-weight:300;
font-size:14px;
line-height:26px;
opacity:0.7;
padding-left:0.3rem;
padding-top:0.5rem;
@media screen and (min-width: 376px) and (max-width:600px){
  max-width:80%;
}
`;

const DotCont = styled.div`
width:50%;
display:flex;
flex-direction:row;
justify-content:right;
align-items:center;
position:absolute;
top:0.8rem;
right:0rem;
`;

const Dot = styled.div`
width:10px;
height:10px;
border-radius:5px;
margin-right:5px;
background:${(props)=>props.color};
opacity:${(props)=>props.opacity};
`;
const AboutSlide = ({
parafm,
subtitle,
subtitle2,
subtitle3,
para,
para2,
para3
}) =>{
  const { theme } = useTheme();
  const contents=[{id:1,heading:subtitle, content:para}, {id:2,heading:subtitle2,content:para2}, {id:3,heading:subtitle3,content:para3}];
  const delay = 10000;
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

    function resetTimeout() {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    }

  useEffect(() => {
      resetTimeout();
      const lastIndex = contents.length - 1; // index (2)
      timeoutRef.current = setTimeout(
        () =>
          setIndex((prevIndex) =>
            prevIndex === lastIndex ? 0 : prevIndex + 1
          )
       , delay
      );
      return () => {
        resetTimeout();
      };
    }, [index]);

  const ContentMapping = contents.map((content,i)=>{
    // ideation slide = translateY(0) can see 
    // design slide = translateY(-100) can see
    // development slide = translateY(-200) can see


    //let position = "nextSlide";
    let position = `translateY(${ - index * 100}%)`;
    let opacity = 1;

    if(index === 0){ // ideation slide 
      if(contents[i].id === 2){
        opacity= 0;
      }else if(contents[i].id === 3){
        position = `translateY(${ - index * 100 - 300}%)`;
        opacity= 0;
      }else if(contents[i].id === 1){
        position = `translateY(${ - index * 100}%)`;
        opacity= 1;
      }
    }else if(index === contents.length - 2){ // design slide
      if(contents[i].id === 1){ 
       position = `translateY(${ - index * 100}%)`;
       opacity= 0;
      }else if(contents[i].id === 3){
      opacity=0;
      }

    } else if(index === contents.length - 1){ // development slide
      if(contents[i].id === 1){
        position = `translateY(${ - index * 100 + 300}%)`;
        opacity= 0;
      }else if(contents[i].id === 2){
        position = `translateY(${ - index * 100}%)`;
        opacity= 0;
      }
    }
    

    return(
    <Sride 
    key={contents[i].id}
    transform={position}
    opacity={opacity}
    >
      <SubTitle parafm={parafm}>{content.heading}</SubTitle>
      <Paragraph parafm={parafm} color={accentpara[theme]}>{content.content}</Paragraph>
    </Sride>
  )})

return<SridesArea>
  <motion.span
   initial={{opacity:0}}
   whileInView={{opacity:1,transition:{duration:1.8, delay:0.5}}}
  >
  {ContentMapping}
  <DotCont>
      {contents.map((content,i)=>
        <Dot
        key={contents[i].id}
        opacity={index === i ? "100%":"30%" }
        color={title[theme]}
        />
      )}
  </DotCont>
  </motion.span>
  </SridesArea>
}

export default AboutSlide