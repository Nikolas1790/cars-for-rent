import styled from 'styled-components'
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)` 
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: #2a363b;  
  &:hover,
  &:focus {
    color:  rgb(95, 230, 243);
    transform: scale(1.1);
    
  }
  &.active {
    color:  rgb(95, 230, 243);
    font-weight: bold;    
  }
`