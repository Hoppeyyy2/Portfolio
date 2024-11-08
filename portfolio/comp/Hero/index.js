import styled from "styled-components";
import * as React from 'react';
import { useTheme } from "@/utils/provider";
import {accentbg} from "@/utils/variables";
import Intro from "comp/Intro/index2";
import Button from "comp/Button";
import working_girl from "../../public/working_girl.json";
import dynamic from "next/dynamic";
const DynamicLottie = dynamic(() => import("lottie-react"), { ssr: false });

const Cont = styled.div`
display:flex;
flex-direction:column;
width:100vw;
background:${(props)=>props.bg};
`;
const Responsive = styled.div`
display:flex;
flex-direction:row;
width:100%;
@media only screen and (min-width: 1081px) {
  padding:5rem 10rem 0 10rem;
}
@media (min-width: 768px) and (max-width: 1080px) {
  padding:5rem 7rem 0 7rem;
}
@media screen and (min-width: 651px) and (max-width:767px){
  padding:2rem 3rem 0 3rem;
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
`;

const HeroCont = styled.div`
display:flex;
flex-direction:column;
max-width:60%;
padding:3rem;
@media screen and (min-width:1440px){
  width:50%;
  padding:1rem;
  flex-direction:row;
}
@media (min-width: 768px) and (max-width: 1024px) {
  width:70%;
  padding:1rem;
  flex-direction:row;
  padding-bottom:3rem;
}
@media screen and (min-width: 601px) and (max-width:767px){
  width:70%;
  padding:1rem;
  flex-direction:row;
}
@media only screen and (max-width: 600px) {
padding:1.5rem;
padding-top:2.5rem;
max-width:100%;
}
@media only screen and (max-width: 370px) {
  padding:0rem;
  padding-top:2.5rem;
  max-width:100%;
  }
`;
const ImgCont = styled.div`
display:flex;
align-items:flex-end;
justify-content:center;
@media screen and (min-width:1440px){
  width:50%;
}
@media (min-width: 768px) and (max-width: 1024px) {
  width:50%;
}
@media screen and (min-width: 601px) and (max-width:767px){
  width:50%;
}

@media only screen and (max-width: 600px) {
  margin-top:0rem;
  justify-content:right;
}
`;

const Girl = styled.div`
margin-bottom:-6px;
@media only screen and (min-width:1025px){
max-width:80%;
}
@media (min-width: 768px) and (max-width: 1024px) {
max-width:80%;
}
@media only screen and (max-width: 600px) {
max-width:60%;
}
`;




const Hero = ({
  fm,
  parafm,
  name="",
  role="",
  copy=""
}) =>{
  const { theme } = useTheme();
return<Cont id="home" bg={accentbg[theme]}>
  <Responsive>
    <HeroCont>
    <Intro 
    fm={fm} 
    parafm={parafm} 
    padding="0 0 2rem 0" 
    name={name} 
    role={role} 
    copy={copy}/>
    </HeroCont>
    <ImgCont>
      <Girl>
        <DynamicLottie
          animationData={working_girl}
          loop={true}
        />
      </Girl>
    </ImgCont>
  </Responsive>
</Cont>
}

export default Hero