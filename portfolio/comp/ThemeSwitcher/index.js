import React from 'react';
import * as ReactDOM from 'react-dom';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import styled from 'styled-components';
import useCursorHandlers from "../../hooks/useCursorHandlers";

const Cont = styled.div`
display:flex;
align-items:center;
justify-content:center;
padding-right:1rem;

`;

const MobThemeSwitcher = ({
  handleColor=()=>{},
  checked,
  size,
  sunColor,
  moonColor,
}) => {  
  const cursorHandlers = useCursorHandlers();
    return (
      <Cont {...cursorHandlers} className="show-cursor">
      <DarkModeSwitch
      onChange={handleColor}
      checked={checked}
      size={size}
      sunColor={sunColor}
      moonColor={moonColor}
    /></Cont>
    );
};

export default MobThemeSwitcher;