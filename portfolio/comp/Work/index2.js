import styled from "styled-components";
import * as React from 'react';
import { useTheme } from "@/utils/provider";
import { title, detail } from "@/utils/variables";
import WorkCard from "../WorkCard";

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
  padding:1rem 7rem 0 7rem;
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
  
}
@media screen and (min-height: 380px) and (max-height: 430px) {
  padding:2rem;
  padding-top:0rem;
  padding-bottom:0;
}
@media only screen and (max-height: 380px) {
padding:2rem;
padding-top:0rem;
padding-bottom:0;
flex-direction:column;
}
`;

const HeroCont = styled.div`
height:100%;
justify-content:center;
display:flex;
flex-direction:column;
overflow-x:hidden;
padding:0rem;
@media screen and (min-width:1440px){
  padding:1rem;
}
@media (min-width: 768px) and (max-width: 1024px) {
  padding:1rem;
}
@media screen and (min-width: 601px) and (max-width:767px){
  padding:1rem;
}
@media only screen and (max-width: 600px) {
padding:1.5rem;
}
@media only screen and (max-width: 370px) {
  padding:0rem;
  }

@media screen and (min-height: 380px) and (max-height: 430px) {
    padding-bottom:0;
}
@media only screen and (max-height: 380px) {
  justify-content:flex-start;
  padding-bottom:0;
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
@media screen and (min-width: 601px) and (max-width:767px){
  padding:1rem;
}
@media only screen and (max-height: 380px) {
  padding:0rem 1rem;
}
`;


const Work = ({
fm,
parafm,
title,
})=>{
  const { theme } = useTheme();
  return<Cont>
    <Responsive>
      <HeroCont>
        <Title fm={fm}>{title}</Title>
        <WorkCard
        parafm={parafm}
        />
      </HeroCont>
    </Responsive>
  </Cont>
}

export default Work