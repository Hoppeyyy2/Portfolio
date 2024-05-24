import styled from "styled-components";
import * as React from 'react';
import { useTheme } from "@/utils/provider";
import {accentbg} from "@/utils/variables";
import Intro from "comp/Intro";
import Button from "comp/Button";

const Cont = styled.div`
position:relative;
top:89px;
display:flex;
flex-direction:column;
width:100vw;
background:${(props)=>props.bg};
`;
const Top = styled.div`
display:flex;
flex-direction:column;
width:100%;
background:${(props)=>props.bg};
padding:3rem;
padding-bottom:0;
@media screen and (min-width: 601px) and (max-width:767px){
  padding-top:1rem;
}
@media only screen and (max-width: 600px) {
  padding:1rem;
  padding-bottom:0;
}
`;

const HeroCont = styled.div`
display:flex;
flex-direction:column;
max-width:60%;
padding:3rem;
@media (min-width: 768px) and (max-width: 1024px) {
  max-width:80%;
}
@media screen and (min-width: 601px) and (max-width:767px){
  padding-top:1rem;
  max-width:100%;
  padding:3rem;
}

@media only screen and (max-width: 600px) {
padding:1.5rem;
padding-top:2.5rem;
max-width:100%;
}
`;
const ImgCont = styled.div`
display:flex;
justify-content:right;
margin-top:-10rem;
@media (min-width: 768px) and (max-width: 1024px) {
  margin-top:-10rem;
}
@media screen and (min-width: 601px) and (max-width:767px){
  margin-top:1rem;
}

@media only screen and (max-width: 600px) {
  margin-top:1rem;
}
`;

const Girl = styled.img`
max-width:50%;
@media (min-width: 768px) and (max-width: 1024px) {
  max-width:45%;
}
@media screen and (min-width: 601px) and (max-width:767px){
  max-width:100%;
}

@media only screen and (max-width: 600px) {
max-width:100%;
}
`;




const Hero = ({
  fm,
  Btnfm,
  parafm,
  heading="",
  content="",
  content2="",
  text_content,
}) =>{
  const { theme } = useTheme();

return<Cont id="home">
  <Top bg={accentbg[theme]} >
    <HeroCont>
    <Intro fm={fm} parafm={parafm} heading={heading} content={content} content2={content2} padding="0 0 2rem 0"/>
    <Button
      width="260px"
      height="56px"
      bg="#3B526E"
      text_color="#FFFFFF"
      fm={Btnfm}
      //fontSize
      text_content={text_content}
      //icon
      //onClick={onClick}
    />
    </HeroCont>
    <ImgCont>
      <Girl src="/working_girl.svg"/>
    </ImgCont>
  </Top>
</Cont>
}

export default Hero