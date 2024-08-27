import styled from "styled-components";
import * as React from 'react';
import { useState, useEffect } from "react";
import { motion, useInView, useScroll } from "framer-motion";
import { useTheme } from "@/utils/provider";
import {accentpara} from "@/utils/variables";
import AboutSlide from 'comp/AboutSlide';
const Cont = styled.div`
display:flex;
flex-direction:column;
width:100vw;
height:100%;
justify-content:center;

`;
const Responsive = styled.div`
display:flex;
flex-direction:row;
width:100%;
height:100%;
@media only screen and (min-width: 1081px) {
  padding:5rem 10rem 0 10rem;
}
@media (min-width: 768px) and (max-width: 1080px) {
  padding:7rem 7rem 0 7rem;
}
@media screen and (min-width: 651px) and (max-width:767px){
  padding:7rem 3rem 0 3rem;
}
@media screen and (min-width: 601px) and (max-width:650px){
  padding:1rem;
  padding-bottom:0;
  flex-direction:column;
  align-items:center;
}
@media only screen and (max-width: 600px) {
  padding:1rem;
  padding-bottom:0;
  flex-direction:column;
  align-items:center;
}

@media only screen and (max-height: 380px) {
padding:2rem;
padding-bottom:0;
flex-direction:column;
}
`;

const HeroCont = styled.div`
height:100%;
justify-content:center;
display:flex;
flex-direction:column;
max-width:60%;
padding:3rem;
@media screen and (min-width:1440px){
  width:50%;
  padding:1rem;
}
@media (min-width: 768px) and (max-width: 1024px) {
  width:70%;
  padding:1rem;
  padding-bottom:3rem;
}
@media screen and (min-width: 601px) and (max-width:767px){
  width:70%;
  padding:1rem;
}
@media only screen and (max-width: 600px) {
padding:1.5rem;
max-width:100%;
}
@media only screen and (max-width: 370px) {
  padding:0rem;
  max-width:100%;
  }
@media only screen and (max-height: 380px) {
  justify-content:flex-start;
}
`;

const Title = styled.h1`
margin:0;
padding:0;
font-family:${(props)=>props.fm};
color:#111A36;
font-weight:200;
opacity:0.7;
font-size:34px;
padding-bottom:${(props)=>props.pb};
`;


const About = ({
fm,
parafm,
pb,
title,
subtitle,
subtitle2,
subtitle3,
para,
para2,
para3
}) =>{
  const name = title.split(" ");
return<Cont>
  <Responsive>
    <HeroCont>
      <Title  fm={fm} pb={pb}>
        {name.map((el,i)=>(
          <motion.span
            initial={{opacity:0}}
            whileInView={{opacity:1, transition:{duration:1.8, delay:i /30}}}
            key={i}
            >
          {el}{" "}
          </motion.span>
        ))}
        </Title>
        <AboutSlide
        parafm={parafm}
        subtitle={subtitle}
        subtitle2={subtitle2}
        subtitle3={subtitle3}
        para={para}
        para2={para2}
        para3={para3}
        />
    </HeroCont>
  </Responsive>
</Cont>
}

export default About