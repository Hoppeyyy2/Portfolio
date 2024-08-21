import styled from "styled-components";
import * as React from 'react';
import { useTheme } from "@/utils/provider";
import {accentpara} from "@/utils/variables";
const Cont = styled.div`
display:flex;
flex-direction:column;
padding:${(props)=>props.padding};

`;
const Title = styled.h1`
margin:0;
padding:0;
font-family:${(props)=>props.fm};
color:#111A36;
font-weight:200;
opacity:0.7;
font-size:34px;
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
const Para = styled.p`
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
const Intro = ({
  fm,
  parafm,
  padding,
  name,
  role,
  copy,
}) =>{
  const { theme } = useTheme();
return<Cont padding={padding}>
  <Title fm={fm}>{name}</Title>
  <SubTitle parafm={parafm}>{role}</SubTitle>
  <Para parafm={parafm} color={accentpara[theme]}>{copy}</Para>
</Cont>
}

export default Intro