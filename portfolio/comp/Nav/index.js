import react, {useState} from 'react';
import * as React from 'react';
import Link from 'next/link';
import styled, { keyframes } from 'styled-components';
import Header from '../Header';
import LanguageSwitcher from '../LanguageSwitcher/index2';
import { Spin as Hamburger } from 'hamburger-react';
import {navbg,para,detail,progress} from "@/utils/variables";
import { useTheme } from "@/utils/provider";
import useCursorHandlers from "../../hooks/useCursorHandlers";
import MobThemeSwitcher from "../MobThemeSwitcher";
import { BiLogoLinkedin } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";
import { PiNotionLogoFill } from "react-icons/pi";
import { motion, useScroll } from "framer-motion";
const Outside = styled.div`
background:${(props)=> props.bg};
width:100vw;
position:fixed;
top:0;
z-index:1;
`;
const Cont = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:flex-start;
padding:0.7em 2em;
padding-left:0.5em;
@media only screen and (max-width: 600px) {
padding:1em;
padding-bottom:0.4em;
padding-left:0em;
align-items:center;
}
`;

const Img = styled.img`
display:flex;
flex-direction:row;
transform:scale(0.7);
@media only screen and (max-width: 600px) {
}

`;
const MainNav = styled.div`
display:flex;
flex-direction:row;
@media only screen and (max-width: 600px) {
  display:none;
}
`;
const PhoneNav = styled.div`
display:none;
@media only screen and (max-width: 600px) {
  display:flex;
  align-items:center;
  justify-content:center;
}
`;
const MobCont = styled.ul`
width:${props=>props.width};
min-height:${props=>props.height};
display:${props=>props.display};
position:absolute;
left:0;
z-index:1;
flex-direction:column;
padding-top:2rem;
justify-content:flex-start;
background:${(props)=> props.bg};
@media only screen and (min-width: 600px) {
  display:none;
}
`;

const LinksCont = styled.ul`
display:flex;
flex-direction:row;
justify-content:center;
margin-top:1.5rem;
`;

const appear = keyframes`
from{
  opacity:0;
  top:40px;
}
to{
  opacity:1;
  top:0px;
}
`;

const Links = styled.li`
padding:0.8rem;
align-items:center;
list-style-type:none;
position: relative;
animation:${appear} 1.5s ease-in;
`;

const Nav = ({
handleColor=()=>{},
fm
})=>{
  const [isOpen, setOpen] = useState(false);
  const { theme } = useTheme();
  const cursorHandlers = useCursorHandlers();
  const { scrollYProgress } = useScroll();
  var height = 0, width = 0, display = "none";
  if(isOpen === true){
    height="100vh";
    width="100%";
    display="flex";
  }else if(isOpen === false){
    height=0;
    width=0;
    display="none";
  }
const onLinkClick = () =>{
  setOpen(false);
}
  //console.log(isOpen);
return<Outside bg={navbg[theme]}>
<Cont>
  <Link href="/#home" {...cursorHandlers} className="show-cursor" style={{padding:"1.5rem"}}><Img src={theme === "light"? "/logo.svg":"/logo_dark.svg"}/></Link>
  <MainNav>
  <Header  name="ABOUT" href="/#about" fm={fm}/>
  <Header  name="WORKS" href="/#works" fm={fm}/>
  <Header  name="CONTACT" href="/#contact" paddingRight="60px" fm={fm}/>
  <LanguageSwitcher fm={fm}/>
  </MainNav>
  <PhoneNav  {...cursorHandlers} >
    <MobThemeSwitcher  handleColor={handleColor} checked={theme === "light"? false:true} sunColor={para[theme]} moonColor={para[theme]}/>
    <Hamburger toggled={isOpen} toggle={setOpen} color={para[theme]} size={25} duration={0.8} rounded label="Show menu"/>
  </PhoneNav>
  <motion.div style={{scaleX:scrollYProgress, position:"fixed", top:87,left:0, right:0, height:"2px",transformOrigin:"0%", background:progress[theme],}}/>
</Cont>
  <MobCont bg={navbg[theme]} height={height} width={width} display={display}>
  <Header  name="ABOUT" href="/#about" onClick={onLinkClick} fm={fm}/>
  <Header  name="WORKS" href="/#works" onClick={onLinkClick} fm={fm}/>
  <Header  name="CONTACT" href="/#contact" onClick={onLinkClick} fm={fm}/>
  <LanguageSwitcher fm={fm}/>
  <LinksCont>
    <Links >
    <a href="https://www.linkedin.com/in/chisaki-nakamura-951b55229/" target="_blank"  {...cursorHandlers} >
      <BiLogoLinkedin style={{color:para[theme], width:"25px", height:"25px"}}/>
      </a>
    </Links>
    <Links>
      <a href="https://github.com/Hoppeyyy2" target="_blank"  {...cursorHandlers} >
      <AiFillGithub style={{color:para[theme],width:"25px", height:"25px"}}/>
      </a>
    </Links>
    <Links>
      {/* Notionのページ作る　*/}
      <a href="" target="_blank"  {...cursorHandlers} >
      <PiNotionLogoFill style={{color:para[theme],width:"25px", height:"25px"}}/>
      </a>
    </Links>
  </LinksCont>
  </MobCont>
</Outside>
}

export default Nav