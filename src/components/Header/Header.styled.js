import styled from 'styled-components'
import { NavLink } from 'react-router-dom';
import color from 'common/GlobalColers';

export const HeaderContainer = styled.div`
  width: 100%;
  background-color: ${color.lightGray}; 
  padding: 8px; 
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); 
  border-radius:0 0 20px  20px;  
`
export const InnerHeaderContainer = styled.header`
  display:flex;
  justify-content: space-between;
  margin: 0 auto; 
  max-width: 1184px;
`;

export const StyledLink = styled(NavLink)` 
  display: inline-block;
  padding: 8px;
  font-size: 20px;
  font-weight: 500;
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

  &:not(:last-child) {
    margin-right: 40px;
  }
`

export const PhoneLink = styled.a`  
  font-size: 16px;
  font-weight: 500;
  padding: 8px;

  transition: transform 0.3s linear;

  &:hover,
  &:focus {
    color:  ${color.lightBlue};
    transform: scale(1.1);
    
  }
`;

