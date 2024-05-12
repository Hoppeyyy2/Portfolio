import useCursorPosition from "../../hooks/useCursorPosition";
import React, {useContext, useState,useEffect } from "react";
import { CursorContext } from "../../utils/cursor_context";
import styled, {keyframes} from 'styled-components';
import {letter} from "@/utils/variables";
import { useTheme } from "@/utils/provider";

const Cont = styled.div`
width:100px;
height:100px;
justify-content:center;
align-items:center;
pointer-events: none;
`;
const Outline = styled.div`
border: 1.5px solid ${(props)=>props.letter};
background:${(props)=>props.Outline};
mix-blend-mode: ${(props)=>props.blend};
border-radius:50%;
width:${(props)=>props.width};
height:${(props)=>props.height};
position:fixed;
left:${(props)=>props.left};
top:${(props)=>props.top};
pointer-events: none;
transition:.25s linear;
transform:translate(-50%,-50%);
z-index:1000;
`;

const Dot = styled.div`
position:fixed;
width:${(props)=>props.width};
height:${(props)=>props.height};
background-color:${(props)=>props.letter};
mix-blend-mode: ${(props)=>props.blend};
border-radius:50%;
transform:translate(-50%,-50%);
pointer-events: none;
transition:.1s;
z-index:1000;

`

const Cursor = () =>{

  const { x, y } = useCursorPosition();
  const [Cursor] = useContext(CursorContext);
  const [isVisible, setIsVisible] = useState(false);

  var CursorFunc = function(){
    let currentCursorPos = {x: -999, y: -999};
    let cursor, cursor2;
    const INTERVAL_POSITION = 5;

    function setCurrentCursorProps (){
      cursor.style.transform = `translate(${currentCursorPos.x}px, ${currentCursorPos.y}px)`;
      cursor2.style.transform = `translate(${currentCursorPos.x}px, ${currentCursorPos.y}px)`;
  
    }
    function updateCursor(){
      window.addEventListener("mousemove", event=>{
        currentCursorPos = {x: event.clientX, y: event.clientY};

      });
     
      setInterval(setCurrentCursorProps, INTERVAL_POSITION);
  
    }

    cursor = document.querySelector(".cursor");
    cursor2 = document.querySelector(".cursor2");
    updateCursor();
  }
 
  useEffect(()=>{
    CursorFunc()

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);
    document.body.addEventListener("mouseenter", handleMouseEnter);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      document.body.removeEventListener("mouseenter",   handleMouseEnter);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  },[]);
  const { theme } = useTheme();
  return<Cont>
    <Dot 
    letter={letter[theme]} 
    className="cursor2" 
    blend={theme === "light"?"":"difference"}
    width={Cursor.active === true?"0px":"8px"}
    height={Cursor.active === true?"0px":"8px"}
    style={{
      opacity: isVisible && x > 1 ? 1 : 0
    }}
    /> 
    <Outline 
    Outline={theme === "light"?"transparent":"#FFF4E3"} 
    className="cursor" 
    blend={theme === "light"?"":"difference"}
    width={Cursor.active === true?"50px":"30px"}
    height={Cursor.active === true?"50px":"30px"}
    left={Cursor.active === true?"-25px":"-11px"}
    top={Cursor.active === true?"-25px":"-11px"}
    style={{
      opacity: isVisible && x > 1 ? 1 : 0,
    }}
    />
  </Cont>
}

export default Cursor

