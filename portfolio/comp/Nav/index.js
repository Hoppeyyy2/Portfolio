import react, {useState} from 'react';
import * as React from 'react';
import Link from 'next/link';
import styled, { keyframes } from 'styled-components';
import Header from '../Header';
import LanguageSwitcher from '../LanguageSwitcher';
import { Spin as Hamburger } from 'hamburger-react';
import {bg} from "@/utils/variables";
import { useTheme } from "@/utils/provider";
import useCursorHandlers from "../../hooks/useCursorHandlers";

const Outside = styled.div`
background:${(props)=> props.bg};
padding-top:1rem;
position:fixed;
top:0;
left:50px;
right:50px;
z-index:1;
@media only screen and (max-width: 600px) {
padding-top:0.5rem;
left:20px;
right:20px;

}
`;
const Cont = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
@media only screen and (max-width: 600px) {
  padding:0;
  padding-top:10px;
}
`;
const Img = styled.img`
display:flex;
flex-direction:row;
width:30px;
height:30px;
@media only screen and (max-width: 600px) {
width:35px;
height:35px;
}
:hover{
  opacity:0.8;
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
justify-content:center;
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

})=>{
  const [isOpen, setOpen] = useState(false);
  const { theme } = useTheme();
  const cursorHandlers = useCursorHandlers();

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
return<Outside bg={bg[theme]}>
<Cont>
  <Link href="/#home" {...cursorHandlers} className="show-cursor"><Img src="/logo_pink.svg"/></Link>
  <MainNav>
  <Header  name="ABOUT" href="/#about"/>
  <Header  name="WORKS" href="/#works"/>
  <Header  name="CONTACT" href="/#contact" paddingRight="60px"/>
  <LanguageSwitcher/>
  </MainNav>
  <PhoneNav>
    <Hamburger toggled={isOpen} toggle={setOpen} color={theme === "light"? "#030B19":"#FFF4E3"} size={25} duration={0.8} rounded label="Show menu"/>
  </PhoneNav>
</Cont>
  <MobCont bg={bg[theme]} height={height} width={width} display={display}>
  <Header  name="ABOUT" href="/#about" onClick={onLinkClick}/>
  <Header  name="WORKS" href="/#works" onClick={onLinkClick}/>
  <Header  name="CONTACT" href="/#contact" onClick={onLinkClick}/>
  <LanguageSwitcher/>
  <LinksCont>
    <Links>
      <a href="https://github.com/Hoppeyyy2" target="_blank"><Img src={theme === "light" ? "/sns/github.svg":"/sns/Dgithub.svg"} style={{height:39}}/></a>
    </Links>
    <Links>
      <a href="https://www.linkedin.com/in/chisaki-nakamura-951b55229/" target="_blank"><Img src={theme === "light" ? "/sns/linkedin.svg":"/sns/Dlinkedin.svg"} style={{height:33}}/></a>
    </Links>
    <Links>
      <a href="https://www.behance.net/chisakinakamura1" target="_blank"><Img src={theme === "light" ? "/sns/behance.svg":"/sns/Dbehance.svg"} style={{height:43}}/></a>
    </Links>
  </LinksCont>
  </MobCont>
</Outside>
}

export default Nav