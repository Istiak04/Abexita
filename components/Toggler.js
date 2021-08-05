import React from 'react'
import { func, string } from 'prop-types';
import 'D:/shobuj/src/components/toggler.css';
import styled from "styled-components";
const Button = styled.button`
  background: ${({ theme }) => theme.background};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  color: ${({ theme }) => theme.text};
  border-radius: 30px;  
  cursor: pointer;
  font-size:0.6rem;
  padding: 0.6rem;
  position: fixed;
  right: 0px; 
  top: 5rem;
  z-index: 1000;
}\
  `;
const Toggle = ({ theme, toggleTheme }) => {
  return (
    <Button type='toggler' onClick={toggleTheme} >
      {theme}
    </Button>
  );
};
Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}
export default Toggle;