import react, {useState} from 'react';
import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import Header from '../Header';
import { Spin as Hamburger } from 'hamburger-react';
import { motion } from "framer-motion"
import {bg} from "@/utils/variables";
import { useTheme } from "@/utils/provider";

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
height:90vh;
width:100%;
display:flex;
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

const Link = styled.li`
padding:0.8rem;
align-items:center;
list-style-type:none;
position: relative;
animation:${appear} 1.5s ease-in;
`;

const Nav = ({

})=>{
  const [isOpen, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();
return<Outside bg={bg[theme]}>
<Cont>
  <a href="#home"><Img src="/logo_pink.svg"/></a>
  <MainNav>
  <Header  name="ABOUT" src="#about"/>
  <Header  name="WORKS" src="#works"/>
  <Header  name="CONTACT" src="#contact" paddingRight="60px"/>
  <Header  name="ENG"/>
  </MainNav>
  <PhoneNav>
    <Hamburger toggled={isOpen} toggle={setOpen} color={theme === "light"? "#030B19":"#FFF4E3"} size={25} duration={0.8} rounded label="Show menu"/>
  </PhoneNav>
</Cont>
{isOpen?
  <MobCont bg={bg[theme]}>
  <Header  name="ABOUT" src="#about" />
  <Header  name="WORKS" src="#works"/>
  <Header  name="CONTACT" src="#contact" />
  <Header  name="ENG" />
  <LinksCont>
    <Link>
      <a href="https://github.com/Hoppeyyy2" target="_blank"><Img src="/sns/github.svg" style={{height:39}}/></a>
    </Link>
    <Link>
      <a href="https://www.linkedin.com/in/chisaki-nakamura-951b55229/" target="_blank"><Img src="/sns/linkedin.svg" href="" style={{height:33}}/></a>
    </Link>
    <Link>
      <a href="https://www.behance.net/chisakinakamura1" target="_blank"><Img src="/sns/behance.svg" href="" style={{height:43}}/></a>
    </Link>
  </LinksCont>
  </MobCont>
:<div></div>}
</Outside>
}

export default Nav