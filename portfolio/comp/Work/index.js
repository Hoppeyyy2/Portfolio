import styled from "styled-components";
import * as React from 'react';
import { useTheme } from "@/utils/provider";
import { title, detail } from "@/utils/variables";
import TabCont from "comp/TabCont";

const Cont = styled.div`
width:100vw;
display:flex;
flex-direction:column;
padding:3rem 6rem;
@media screen and (min-width:1440px){
  width:80%;
  align-items:center;
  }
@media only screen and (max-width: 600px) {
  padding:3rem;
}
`;

const Work = ({
fm,
All,
Design,
Development
})=>{
  const { theme } = useTheme();
  return<Cont id="work">
    <TabCont 
    fm={fm}
    All={All}
    Design={Design}
    Development={Development}
    />
  </Cont>
}

export default Work