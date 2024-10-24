import {useState} from 'react';
import * as React from 'react';
import Link from 'next/link';
import styled, { keyframes } from 'styled-components';
import Header from '../Header';
import LanguageSwitcher from '../LanguageSwitcher';
import { Spin as Hamburger } from 'hamburger-react';
import {accentbg, para,navletter} from "@/utils/variables";
import { useTheme } from "@/utils/provider";
import ThemeSwitcher from "../ThemeSwitcher";
import { BiLogoLinkedin } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";
import { BsFillSendFill } from "react-icons/bs";
const Outside = styled.div`
width:100vw;
position:fixed;
top:0;
z-index:1;
background:${(props)=> props.bg};
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
@media only screen and (max-height: 380px) {
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
@media only screen and (max-height: 380px) {
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
@media only screen and (max-height: 380px) {
  display:${props=>props.display};
  padding-top:0;
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

const Logo = styled(Link)`
padding:1.5rem;
padding-left:0;
@media only screen and (max-height: 380px) {
  padding-top:1rem;
}
`;
const Nav = ({
handleColor=()=>{},
fm, 
AboutActive,
WorkActive,
ContactActive
})=>{
  const [isOpen, setOpen] = useState(false);
  const [aboutColor, setAboutColor] = useState(false);
  const [workColor, setWorkColor] = useState(false);
  const [contactColor, setContactColor] = useState(false);
  const { theme } = useTheme();
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
const AboutColorChange = ()=>{
  if(aboutColor === false){
    setAboutColor(true);
    setWorkColor(false);
    setContactColor(false);
  }
}
const WorkColorChange = ()=>{
  if(workColor === false){
    setWorkColor(true);
    setAboutColor(false);
    setContactColor(false);
  }
}
const ContactColorChange = ()=>{
  if(contactColor === false){
    setContactColor(true);
    setAboutColor(false);
    setWorkColor(false);
  }
}
const LogoClick = ()=>{
  setContactColor(false);
  setAboutColor(false);
  setWorkColor(false);
}
  //console.log(isOpen);


return<Outside bg={accentbg[theme]}>
<Cont>
  <Logo href="/#home" onClick={LogoClick}><Img src="/logo.svg"/></Logo>
  <MainNav>
  <Header  name="ABOUT" href="/#about" fm={fm} paddingLeft="0px" onClick={AboutColorChange} color={ AboutActive === "about"? para[theme]:navletter[theme] || aboutColor === false ? navletter[theme]:para[theme]} fontWeight={AboutActive ==="about"?"400":"300" || aboutColor === false ? "300":"400"}/>
  <Header  name="WORKS" href="/#work" fm={fm}  onClick={WorkColorChange} color={ WorkActive === "work"? para[theme]:navletter[theme] || workColor === false ? navletter[theme]:para[theme]} fontWeight={WorkActive ==="work"?"400":"300" || workColor ===false ?"300":"400"}/>
  <Header  name="CONTACT" href="/#contact" paddingRight="20px" fm={fm} onClick={ContactColorChange} color={ ContactActive === "contact"? para[theme]:navletter[theme] || contactColor === false ? navletter[theme]:para[theme]} fontWeight={ContactActive ==="contact"?"400":"300" || contactColor === false ?"300":"400"}/>
  <LanguageSwitcher fm={fm}/>
  <ThemeSwitcher  handleColor={handleColor} checked={theme === "light"? false:true} size={20} sunColor={para[theme]} moonColor={para[theme]}/>
  </MainNav>
  <PhoneNav>
    <ThemeSwitcher  handleColor={handleColor} checked={theme === "light"? false:true} size={30} sunColor={para[theme]} moonColor={para[theme]}/>
    <Hamburger toggled={isOpen} toggle={setOpen} color={para[theme]} size={25} duration={0.8} rounded label="Show menu"/>
  </PhoneNav>
</Cont>
  <MobCont bg={accentbg[theme]} height={height} width={width} display={display}>
  <Header  name="ABOUT" href="/#about" onClick={onLinkClick} fm={fm} color={navletter[theme]}/>
  <Header  name="WORKS" href="/#work" onClick={onLinkClick} fm={fm} color={navletter[theme]}/>
  <Header  name="CONTACT" href="/#contact" onClick={onLinkClick} fm={fm} color={navletter[theme]}/>
  <LanguageSwitcher fm={fm}/>
  <LinksCont>
    <Links >
    <a href="https://www.linkedin.com/in/chisaki-nakamura-951b55229/" target="_blank" >
      <BiLogoLinkedin style={{color:"#3B526E", width:"25px", height:"25px"}}/>
      </a>
    </Links>
    <Links>
      <a href="https://github.com/Hoppeyyy2" target="_blank">
      <AiFillGithub style={{color:"#3B526E",width:"25px", height:"25px"}}/>
      </a>
    </Links>
    <Links>
      {/* Notionのページ作る　*/}
      <a href="mailto:chisaki.business@gmail.com" target="_blank" >
      <BsFillSendFill style={{color:"#3B526E",width:"24px", height:"24px"}}/>
      </a>
    </Links>
  </LinksCont>
  </MobCont>
</Outside>
}

export default Nav