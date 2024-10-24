import styled from "styled-components";
import * as React from 'react';

const Cont = styled.div`
width:${(props)=>props.width};
display:flex;
flex-direction:column;
padding-top:1.5rem;
@media only screen and (max-width: 600px) {
width:100%;
}
@media screen and (max-height: 580px) {
width:100%; 
}
`;
const Line = styled.hr`
width:60px;
border:1px solid ${(props)=>props.color};
border-radius: 100px;
display:${(props)=>props.display};
`;
const Para = styled.p`
font-family:${(props)=>props.fm};
font-weight:300;
font-size:16px;
color:${(props)=>props.color};
padding: 0.5rem 0;
`;

const ParaBox = styled.div`
padding:0.5rem 1rem;
padding-left:0;
display:${(props)=>props.display};
`;
const Ul = styled.ul`
padding:0.5rem 2rem;
display:${(props)=>props.display};
font-family:${(props)=>props.fm};
color:${(props)=>props.color};
`;
const Li = styled.li`
padding:1rem 0;
`;
const WorkExplain = ({
width="100%",  
fm,
color,
title,
contents,
contents2,
line_display="block",
ParaBox_display="flex",
Ul_display="none",
item1,
item1_explain,
item2,
item2_explain,
item3,
item3_explain
}) =>{

return<Cont width={width}>
<Line display={line_display} color={color}/>
<Para fm={fm} color={color}>{title}</Para>
<ParaBox>
<Para fm={fm} color={color}>{contents}</Para>
</ParaBox>
<ParaBox display={ParaBox_display}>
<Para fm={fm} color={color}>{contents2}</Para>
</ParaBox>
<Ul display={Ul_display} fm={fm} color={color}>
  <Li>
    <strong>{item1}</strong>
    <Para>{item1_explain}</Para>
  </Li>
  <Li>
    <strong>{item2}</strong>
    <Para>{item2_explain}</Para>
  </Li>
  <Li>
    <strong>{item3}</strong>
    <Para>{item3_explain}</Para>
  </Li>
</Ul>
</Cont>
}
export default WorkExplain