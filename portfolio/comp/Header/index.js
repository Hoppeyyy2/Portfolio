import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import Link from 'next/link';
import {letter} from "@/utils/variables";
import { useTheme } from "@/utils/provider";
import useCursorHandlers from "../../hooks/useCursorHandlers";

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
padding-right:${(props)=>props.paddingRight};
list-style-type:none;
@media only screen and (max-width: 600px) {
padding:2.5rem;
}
`;

const Btn = styled.h3`
font-family:'Actor',sans-serif;
font-weight:200;
font-size:14px;
color:${(props)=>props.color};
opacity:0.55;
:link{
  opacity:0.55;
}
:visited{
  opacity:1;
}
:active{
  opacity:1;
}
:hover{
opacity:1;
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
  onClick=()=>{},
})=>{
const { theme } = useTheme();
const cursorHandlers = useCursorHandlers();

return<BtnCont paddingRight={paddingRight} {...cursorHandlers} className="show-cursor">
<Link href={href} onClick={onClick}>
  <Btn
  color={letter[theme]}
  >
    {name}
  </Btn>
  </Link>
</BtnCont>
}

export default Header