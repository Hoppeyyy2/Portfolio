import * as React from 'react';
import styled, { keyframes } from 'styled-components';
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
const Cont = styled.div`
display:flex;
flex-direction:column;
align-items:center;
@media only screen and (max-width: 600px) {
display:none;
}
`;

const Line = styled.div`
border-left: 1.5px solid ${(props)=>props.letter};
height: 200px;
opacity:0.55;
@media only screen and (max-width: 992px) {
border:none;
}
`;
const LinksCont = styled.ul`
display:flex;
flex-direction:column;
`;

const Link = styled.li`
padding:0.8rem;
align-items:center;
list-style-type:none;
position: relative;
animation:${appear} 1.5s ease-in;
`;

const Img = styled.img`
display:flex;
flex-direction:row;
width:30px;
height:30px;
opacity:0.65;
@media only screen and (max-width: 600px) {
width:35px;
height:35px;
}
:hover{
  opacity:1;
}
`;
const Sidebar = ({
github_src="/sns/github.svg",
linkedin_src="/sns/linkedin.svg",
behance_src="/sns/behance.svg",
})=>{
const { theme } = useTheme();
const cursorHandlers = useCursorHandlers();

return<Cont>
<Line letter={letter[theme]}/>
<LinksCont>
  <Link {...cursorHandlers} className="show-cursor">
    <a href="https://github.com/Hoppeyyy2" target="_blank"><Img src={github_src} style={{height:39}}/></a>
  </Link>
  <Link {...cursorHandlers} className="show-cursor">
    <a href="https://www.linkedin.com/in/chisaki-nakamura-951b55229/" target="_blank"><Img src={linkedin_src} style={{height:33}}/></a>
  </Link>
  <Link {...cursorHandlers} className="show-cursor">
    <a href="https://www.behance.net/chisakinakamura1" target="_blank"><Img src={behance_src} style={{height:43}}/></a>
  </Link>
</LinksCont>
</Cont>
}

export default Sidebar