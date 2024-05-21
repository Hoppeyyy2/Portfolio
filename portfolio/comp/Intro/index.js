import styled from "styled-components";
import * as React from 'react';
import { useTheme } from "@/utils/provider";
import {title, para} from "@/utils/variables";
const Cont = styled.div`
display:flex;
flex-direction:column;
padding:${(props)=>props.padding};

`;
const Title = styled.h1`
margin:0;
padding:0;
padding-bottom:0.5rem;
font-family:${(props)=>props.fm};
color:${(props)=>props.color};
font-weight:200;
opacity:0.7;
@media only screen and (min-width: 600px) {
  font-size:56px;
}
@media only screen and (max-width: 600px) {
  font-size:42px;
}
@media only screen and (max-width: 370px) {
  font-size:34px;
}
`;

const Para = styled.p`
font-family:${(props)=>props.parafm};
color:${(props)=>props.color};
opacity:0.7;
line-height:36px;
font-weight:300;
margin-left:10px;
@media only screen and (min-width: 600px) {
  font-size:20px;
}

@media only screen and (max-width: 600px) {
  font-size:16px;
  line-height:28px;
}

`;
const Intro = ({
  fm,
  parafm,
  heading="",
  content="",
  padding
}) =>{
  const { theme } = useTheme();
return<Cont padding={padding}>
  <Title color={title[theme]} fm={fm}>{heading}</Title>
  <Para parafm={parafm} color={para[theme]}>{content}</Para>
</Cont>
}

export default Intro