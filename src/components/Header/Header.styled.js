import styled from 'styled-components'
import { NavLink } from 'react-router-dom';
import color from 'common/GlobalColers';


export const HeaderContainer = styled.div`
  background-color: ${color.lightGray}; 
  padding: 16px; 
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); 
margin-bottom: 16px;
border-radius:0 0 20px  20px;
width: 100%;
`
export const InnerHeaderContainer = styled.header`
  max-width: 1184px;
  display:flex;
  justify-content: space-between;
  margin: 0 auto; // Центрирование по горизонтали
`;

export const StyledLink = styled(NavLink)` 
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  line-height: 1.33;
  color: ${color.blackPrimary};  
  transition: transform 0.3s linear;
  &:hover,
  &:focus {
    color:  ${color.lightBlue};
    transform: scale(1.1);
    
  }
  &.active {
    color:  ${color.darkBlue};
    font-weight: bold;    
  }
`

export const PhoneNumber = styled.div`
display: flex;
align-items: center;
justify-content: center;

padding: 12px;

`;

export const PhoneLink = styled.div`
  
  font-weight: 700;

`;

export const P = styled.svg`
  
  fill: black;
  stroke: black;
  background: black;
color: red;
`;