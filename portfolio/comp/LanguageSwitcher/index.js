import styled, { keyframes } from 'styled-components';
import { useRouter } from 'next/router';
import {bg,letter} from "@/utils/variables";
import { useTheme } from "@/utils/provider";
import useCursorHandlers from "../../hooks/useCursorHandlers";
import { useState, useEffect } from 'react';
import { MotionProps, Variants } from "framer-motion";

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
width:100%;
padding:1.3rem;

@media only screen and (max-width: 600px) {
  padding:2.3rem;
  }
`;
const Select = styled.select`
border:none;
color:${(props)=>props.color};
background:${(props)=>props.bg};
padding:0.2em;
padding-right:2rem;
font-family:'Actor',sans-serif;
font-weight:200;
font-size:14px;
opacity:0.55;
outline: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  &::-ms-expand { display: none };
background-image:${(props)=>props.arrowImg};
background-repeat: no-repeat;
background-position-y: center;
background-position-x: 100%;
background-size: 0.8rem auto;
@media only screen and (max-width: 600px) {
  font-size:18px;
  position: relative;
  animation:${appear} 1.5s ease-in;
}

:hover{
  opacity:1;
  }
`;

const Option = styled.option`
font-family:'Actor',sans-serif;
font-weight:200;
font-size:14px;
opacity:0.55;
`;

const LanguageSwitcher = () =>{
  const { theme } = useTheme();
  const router = useRouter();
  const cursorHandlers = useCursorHandlers();
  const data = [{value:"en", label:"EN"},{value:"zh-Hant", label:"CH"},{value:"ja", label:"JP"}]
  
  const handleChange = (e) =>{
  
    router.push(
      {
        pathname: router.pathname,
        query: router.query,

      },
      null,
      { locale: e.target.value },
    )
  }

  return (
    <Cont {...cursorHandlers} className="show-cursor">
      <Select
      onChange={handleChange}
      color={letter[theme]}
      bg={bg[theme]}
      arrowImg={theme === "light" ?"url(/lang_dark.svg)":"url(/lang_light.svg)"}
      >
        {data.map((item)=><Option value={item.value} label={item.label}></Option>)}
      </Select>
    </Cont>
  );
}

export default LanguageSwitcher;