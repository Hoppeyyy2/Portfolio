import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import Link from 'next/link';
import {detail,para} from "@/utils/variables";
import { useTheme } from "@/utils/provider";
import { BiLeftArrow } from 'react-icons/bi';

const appear = keyframes`
from{
  opacity:0;
  top:50px;
}
to{
  opacity:1;
  top:0px;
}
`;
const BtnCont = styled.li`
padding:1.5rem;
list-style-type:none;
@media only screen and (max-width: 700px) {
padding-left:${(props)=>props.paddingLeft};
padding-right:${(props)=>props.paddingRight};
}
@media only screen and (max-width: 600px) {
padding:2.5rem;
}
@media only screen and (max-height: 380px) {
  padding:1rem 2.5rem;
}
`;

const Btn = styled.h3`
font-family:${(props)=>props.fm};
font-weight:${(props)=>props.fontWeight};
font-size:14px;
color:${(props)=>props.color};


:hover{
color:${(props)=>props.hover};
font-weight:400;
}

@media only screen and (max-width: 600px) {
  font-size:18px;
  position: relative;
  animation:${appear} 1.5s ease-in;
}
`;

const Header = ({
  href="/",
  name="WORKS",
  paddingRight="0",
  paddingLeft,
  fm,
  color,
  fontWeight="300",
  onClick=()=>{},
})=>{
const { theme } = useTheme();

return<BtnCont paddingRight={paddingRight} paddingLeft={paddingLeft}>
<Link href={href} onClick={onClick}>
  <Btn
  color={color}
  hover={para[theme]}
  active={para[theme]}
  fm={fm}
  fontWeight={fontWeight}
  >
    {name}
  </Btn>
  </Link>
</BtnCont>
}

export default Header