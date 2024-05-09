import useCursorPosition from "../../hooks/useCursorPosition";
import React, {useContext, useState,useEffect } from "react";
import { CursorContext } from "../../utils/cursor_context";
import styled, {keyframes} from 'styled-components';
import {letter} from "@/utils/variables";
import { useTheme } from "@/utils/provider";

const Cont = styled.div`
display:flex;
width:100px;
height:100px;
justify-content:center;
align-items:center;
pointer-events: none;
`;
const Outline = styled.div`
border: 1.5px solid ${(props)=>props.letter};
background:${(props)=>props.letter};
mix-blend-mode: ${(props)=>props.blend};
border-radius:50%;
width:50px;
height:50px;
position:fixed;
pointer-events: none;
transform:translate(-50%,-50%);
transition:.15s ease-in-out;
z-index:1000;

:hover{
  background-color:${(props)=>props.letter};
  transform:scale(1.5);
}
`;

const Dot = styled.div`
position:fixed;
width:8px;
height:8px;
background-color:${(props)=>props.letter};
mix-blend-mode: ${(props)=>props.blend};
border-radius:50%;
transform:translate(-50%,-50%);
pointer-events: none;
transition:.1s;

z-index:1000;

:hover{
  background:transparent;
}
`

const Cursor = (
  
) =>{
  const { x, y } = useCursorPosition();
  var CursorFunc = function(){
    let lastCursorPos = {x: -999, y: -999};
    let currentCursorPos = {x: -999, y: -999};
    let cursor, cursor2;
  
    function setCurrentCursorProps (){
      cursor.style.transform = `translate(${currentCursorPos.x}px, ${currentCursorPos.y}px)`;
      cursor2.style.transform = `translate(${currentCursorPos.x}px, ${currentCursorPos.y}px)`;
  
    }
    function updateCursor(){
      window.addEventListener("mousemove", event=>{
        currentCursorPos = {x: event.clientX, y: event.clientY};
      });
     
      setInterval(setCurrentCursorProps);
  
      setInterval(()=>{
        const delt = {
          x: lastCursorPos.x - currentCursorPos.x,
          y: lastCursorPos.y - currentCursorPos.y
        }
        setCurrentCursorProps();
        lastCursorPos = currentCursorPos;
        console.log(currentCursorPos);
      });
  
    }

    cursor = document.querySelector(".cursor");
    cursor2 = document.querySelector(".cursor2");
    updateCursor();
  }
 
  useEffect(()=>{
    CursorFunc()

    return()=>{};
  },[]);

  const { theme, setTheme } = useTheme();
  return<Cont>
    <Dot letter={letter[theme]} className="cursor2" blend={theme === "light"?"color-dodge":"difference"}/> 
    <Outline letter={letter[theme]} className="cursor" blend={theme === "light"?"color-burn":"difference"}/>
  </Cont>
}

export default Cursor

