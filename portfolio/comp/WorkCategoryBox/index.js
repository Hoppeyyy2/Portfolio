import styled from "styled-components";
import * as React from 'react';

const Cont = styled.div`
width:100%;
display:flex;
flex-direction:column;
`;
const Top = styled.div`
display:flex;
flex-direction:row;
align-items:center;
padding-bottom:0.5rem;
`;
const Para = styled.p`
font-family:${(props)=>props.fm};
font-weight:300;
font-size:16px;
opacity:0.7;
color:${(props)=>props.color};
padding-left:0.3rem;
`;

const Box = styled.div`
width:${(props)=>props.width};
height:45px;
display:flex;
justify-content:center;
align-items:center;
background:${(props)=>props.color};
border-radius:5%;
margin-bottom:1rem;

`;
const WorkCategoryBox = ({
icon,
fm,
color,
color2="#8F9CAC",
text,
width,
BxColor,
BxColor2,
box_text,
box_text2,
display,
}) =>{
return<Cont>
<Top>
  {icon}
  <Para fm={fm} color={color}>{text}</Para>
</Top>
  <Box width={width} color={BxColor}>
  <Para fm={fm} color={color2}>{box_text}</Para>
  </Box>
{
  <Box width={width} color={BxColor2} style={{display:display}}>
  <Para fm={fm} color={color2}>{box_text2}</Para>
  </Box>
}
</Cont>
}

export default WorkCategoryBox