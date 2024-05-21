import styled from "styled-components";
import * as React from 'react';

const Cont = styled.div`
width:${(props)=>props.width};
height:${(props)=>props.height};
padding:${(props)=>props.padding};
background:${(props)=>props.bg};
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
border-radius:5px;
`;

const Text = styled.p`
color:${(props)=>props.color};
font-family:${(props)=>props.fm};
font-size:${(props)=>props.fontSize};
font-weight:300;
`;
const Icon= styled.div`
padding-left:0.7rem;
`;


const Button = ({
  width,
  height,
  padding,
  bg,
  text_color,
  fm,
  fontSize,
  text_content,
  icon,
  onClick=()=>{},
})=>{
return<Cont width={width} height={height} padding={padding} bg={bg} onClick={onClick}>
<Icon>{icon}</Icon>
<Text color={text_color} fm={fm} fontSize={fontSize}>{text_content}</Text>
</Cont>
}
export default Button