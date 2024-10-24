import styled from "styled-components";
import * as React from 'react';
import {useState} from "react";
const Cont = styled.div`
width:${(props)=>props.width};
height:${(props)=>props.height};
padding:${(props)=>props.padding};
background:${(props)=>props.bg};
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
border-radius:${(props)=>props.br};

:hover{
  @media only screen and (min-width: 601px) {
    width:${(props)=>props.Hwidth};
    border-radius:${(props)=>props.Hbr};
    background:${(props)=>props.Hbg};
    padding:0 1.5rem;
  }
}
`;

const Text = styled.p`
color:${(props)=>props.color};
font-family:${(props)=>props.fm};
font-size:${(props)=>props.fontSize};
font-weight:300;
margin-left:5px;
@media only screen and (max-width: 600px) {
 display:none;
}
`;
const Icon= styled.div`
width:100%;
height:100%;
display:flex;
align-items:center;
justify-content:center;
margin-top:4px;

:hover{
  @media only screen and (min-width: 601px) {
  justify-content:left;
}
}
`;


const Button = ({
  width,
  height,
  padding,
  bg,
  br,
  text_color,
  fm,
  fontSize,
  text_content,
  icon,
  Hwidth,
  Hbr,
  Hbg,
  onClick=()=>{},
})=>{
  const [hover, setHover] = useState(false);
  const onMouseEnter = () =>{
    if(hover === false){
      setHover(true);
    }
  }
  const onMouseLeave = () =>{
    if(hover === true){
      setHover(false);
    }
  }
return<Cont 
width={width} 
height={height} 
padding={padding} 
bg={bg} 
br={br} 
Hwidth={Hwidth}
Hbr={Hbr}
Hbg={Hbg}
onClick={onClick}
onMouseEnter={onMouseEnter}
onMouseLeave={onMouseLeave}
>
<Icon>{icon}</Icon>
{hover === true ?
  <Text color={text_color} fm={fm} fontSize={fontSize}>{text_content}</Text>
  :null
}
</Cont>
}
export default Button