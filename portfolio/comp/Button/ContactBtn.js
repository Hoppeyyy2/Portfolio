import Button from "./index";
import styled from "styled-components";
import * as React from 'react';
import { useTheme } from "@/utils/provider";
import {para,navletter} from "@/utils/variables";
import { BiLogoLinkedin } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";
import { BsFillSendFill } from "react-icons/bs";

const Cont = styled.div`
display:flex;
flex-direction:row;

@media only screen and (min-width: 1081px) {
  width:50%;
  margin-top:-3rem;
  padding-left:13rem;
  justify-content:space-between;
}
@media (min-width: 768px) and (max-width: 1080px) {
  width:50%;
  margin-top:-3rem;
  padding-left:8rem;
  justify-content:space-between;
}
@media screen and (min-width: 651px) and (max-width:767px){
  width:50%;
  padding-left:4rem;
  justify-content:space-between;
}
@media screen and (min-width: 601px) and (max-width:650px){
  width:60%;
  padding-left:8rem;
  justify-content:space-between;
  align-items:left;
}
@media only screen and (max-width: 600px) {
  width:60%;
  padding:0 2.5rem;
  margin-top:-1rem;
  justify-content:space-between;
  align-items:center;
}
@media screen and (min-height: 380px) and (max-height: 430px) {
  width:50%;
  margin-top:-4.6rem;
  justify-content:space-between;
}
@media only screen and (max-height: 380px) {
  width:50%;
  margin-top:-2rem;
  padding:0 2rem;
  justify-content:space-evenly;
  align-items:center;
}
`;

const ContactBtn = ({
fm
}) =>{
  const { theme } = useTheme();
  return<Cont>
    <Button
    width="30px"
    height="30px"
    br="50%"
    bg="#3B526E"
    Hwidth="120px"
    Hbr="5%"
    Hbg="#3B526E"
    icon={
      <a href="https://www.linkedin.com/in/chisaki-nakamura-951b55229/" target="_blank" >
      <BiLogoLinkedin style={{color:"#FFFFFF", width:"20px", height:"20px"}}/>
      </a>
    }
    text_content="LinkedIn"
    text_color="#FFFFFF"
    fontSize="14px"
    fm={fm}
    onClick={() =>window.open("https://www.linkedin.com/in/chisaki-nakamura-951b55229/",'_blank')}
    />
    <Button
    width="30px"
    height="30px"
    br="50%"
    bg="#3B526E"
    Hwidth="120px"
    Hbr="5%"
    Hbg="#3B526E"
    icon={
      <a href="https://github.com/Hoppeyyy2" target="_blank">
      <AiFillGithub style={{color:"#FFFFFF",width:"20px", height:"20px"}}/>
      </a>
    }
    text_content="GitHub"
    text_color="#FFFFFF"
    fontSize="14px"
    fm={fm}
    onClick={() =>window.open("https://github.com/Hoppeyyy2",'_blank')}
    />
    <Button
    width="30px"
    height="30px"
    br="50%"
    bg="#3B526E"
    Hwidth="120px"
    Hbr="5%"
    Hbg="#3B526E"
    icon={
      <a href="mailto:chisaki.business@gmail.com" target="_blank" >
      <BsFillSendFill style={{color:"#FFFFFF",width:"15px", height:"15px"}}/>
      </a>
    }
    text_content="Message"
    text_color="#FFFFFF"
    fontSize="14px"
    fm={fm}
    onClick={() =>window.open("mailto:chisaki.business@gmail.com",'_blank')}
    />
  </Cont>
}
export default ContactBtn