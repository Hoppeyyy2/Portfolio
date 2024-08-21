import React from 'react';
import * as ReactDOM from 'react-dom';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import styled from 'styled-components';


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

    return (
      <Cont>
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