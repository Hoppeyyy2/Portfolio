import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import Link from 'next/link';
import {detail,para} from "@/utils/variables";
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
font-family:${(props)=>props.fm};
font-weight:400;
font-size:14px;
color:${(props)=>props.color};
:active{
color:${(props)=>props.active};
}
:hover{
color:${(props)=>props.active};
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
  fm,
  onClick=()=>{},
})=>{
const { theme } = useTheme();
const cursorHandlers = useCursorHandlers();

return<BtnCont paddingRight={paddingRight}>
<Link href={href} onClick={onClick} {...cursorHandlers} className="show-cursor">
  <Btn
  color={detail[theme]}
  active={para[theme]}
  fm={fm}
  >
    {name}
  </Btn>
  </Link>
</BtnCont>
}

export default Header