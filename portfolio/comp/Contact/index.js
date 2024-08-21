import styled from "styled-components";
import * as React from 'react';
import { useTheme } from "@/utils/provider";
import {accentbg} from "@/utils/variables";
import Intro from "comp/Intro";
const Cont = styled.div`
width:100vw;
background:${(props)=>props.bg};
`;

const Padding = styled.div`
display:flex;
flex-direction:column;
padding:6rem;
@media screen and (min-width:1440px){
padding-bottom:0;
}
@media (min-width: 768px) and (max-width: 1024px) {
  max-width:80%;
}
@media screen and (min-width: 601px) and (max-width:767px){
  max-width:100%;
  padding:3rem;
  padding-top:2.5rem;
}

@media only screen and (max-width: 600px) {
padding:1.5rem;
padding-top:2.5rem;
max-width:100%;
}
`;
const Contact = ({
  fm,
  parafm,
  heading="",
  content="",
})=>{
  const { theme } = useTheme();
return<Cont id="contact" bg={accentbg[theme]}>
  <Padding>
    <Intro fm={fm} parafm={parafm} heading={heading} content={content}  padding="0 0 2rem 0"/>
  </Padding>
</Cont>
}
export default Contact