import styled from "styled-components";
import * as React from 'react';
import Intro from "comp/Intro/index2";

const Cont = styled.div`
display:flex;
flex-direction:column;
width:100vw;
justify-content:center;
`;
const Responsive = styled.div`
display:flex;
flex-direction:row;
width:100%;
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
@media screen and (min-height: 380px) and (max-height: 430px) {
  padding:2rem;
}
@media only screen and (max-height: 380px) {
padding:2rem;
padding-bottom:0;
flex-direction:column;
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
max-width:100%;
}
@media only screen and (max-width: 370px) {
  padding:0rem;
  max-width:100%;
  }
`;

const Hero = ({
  fm,
  pb,
  parafm,
  name="",
  role="",
  copy=""
}) =>{
return<Cont>
  <Responsive>
    <HeroCont>
    <Intro 
    fm={fm} 
    parafm={parafm} 
    padding="0 0 2rem 0" 
    name={name} 
    role={role} 
    copy={copy}
    pb={pb}
    />
    </HeroCont>
  </Responsive>
</Cont>
}

export default Hero