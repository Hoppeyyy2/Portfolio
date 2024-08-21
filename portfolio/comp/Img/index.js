import styled from "styled-components";
import * as React from 'react';
import { useTheme } from "@/utils/provider";
import working_girl from "../../public/working_girl.json";
import coffee_anim from "../../public/coffee.json";
import {bg} from "@/utils/variables";
import dynamic from "next/dynamic";
const DynamicLottie = dynamic(() => import("lottie-react"), { ssr: false });

const Cont = styled.div`
display:flex;
flex-direction:column;
width:100vw;
height:100%;
`;
const Top = styled.div`
display:flex;
width:100%;
height:70%;
justify-content:${(props)=>props.jc};
align-items:flex-end;
`;
const Bot = styled.div`
height:30%;
background:${(props)=>props.bg};
`;
const Girl = styled.div`
margin-bottom:-6px;
position:relative;
@media only screen and (min-width:1025px){
  max-width:50%;
}  
@media (min-width: 768px) and (max-width: 1024px) {
  max-width:50%;
}
@media screen and (min-width: 601px) and (max-width:767px){
  max-width:50%;
}
@media only screen and (max-width: 600px) {
max-width:70%;
}
@media only screen and (max-width: 370px) {
max-width:80%;
}
@media only screen and (min-height: 940px) {
  max-width:80%;
}
@media only screen and (max-height: 370px) {
  max-width:35%;
}
`;

const ImgCont = styled.div`
display:flex;
justify-content:${(props)=>props.jc};
margin-bottom:-30px;
position:absolute;
right:${(props)=>props.right};
padding-left:${(props)=>props.pl};
@media only screen and (max-height: 370px) {
  margin-bottom:-25px;
}
`;
const Coffee = styled.div`
display:flex;
align-items:flex-end;
@media only screen and (min-width:1025px){
  max-width:38%;
}  
@media (min-width: 768px) and (max-width: 1024px) {
  max-width:32%;
}
@media screen and (min-width: 601px) and (max-width:767px){
  max-width:25%;
}
@media only screen and (max-width: 600px) {
max-width:20%;
}
@media only screen and (max-width: 370px) {
max-width:20%;
}
@media only screen and (min-height: 940px) {
  max-width:38%;
}
@media only screen and (max-height: 370px) {
  max-width:20%;
}
`;
const Plant = styled.img`
@media only screen and (min-width:1025px){
  max-width:40%;
}  
@media (min-width: 768px) and (max-width: 1024px) {
  max-width:30%;
}
@media screen and (min-width: 601px) and (max-width:767px){
  max-width:20%;
}
@media only screen and (max-width: 600px) {
max-width:18%;
}
@media only screen and (max-width: 370px) {
max-width:18%;
}
@media only screen and (min-height: 940px) {
  max-width:38%;
}
@media only screen and (max-height: 370px) {
  max-width:15%;
}
`;
const Img = ({
  jc="right",
  jc2="right",
  right="10px",
  pl=""
}) =>{
  const { theme } = useTheme();
return<Cont>
  <Top jc={jc}>
      <Girl>
        <DynamicLottie
          animationData={working_girl}
          loop={true}
        />
      </Girl>

      <ImgCont jc={jc2} right={right} pl={pl}>
      <Coffee>
      <DynamicLottie
          animationData={coffee_anim}
          loop={true}
        />
      </Coffee>
      <Plant src="/plant.svg"/>
    </ImgCont>
  </Top>
  <Bot bg={bg[theme]}>
  </Bot>
</Cont>
}

export default Img