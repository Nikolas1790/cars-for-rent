import styled from 'styled-components'
import { NavLink } from 'react-router-dom';
import color from 'common/GlobalColers';


export const HeaderContainer = styled.div`
  background-color: ${color.lightGray}; 
  padding: 8px; 
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); 
  /* margin-bottom: 16px; */
  border-radius:0 0 20px  20px;
  width: 100%;
`
export const InnerHeaderContainer = styled.header`
  max-width: 1184px;
  display:flex;
  justify-content: space-between;
  margin: 0 auto; 
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
    padding: 8px;
  font-size: 16px;
  font-weight: 500;
  transition: transform 0.3s linear;

  &:hover,
  &:focus {
    color:  ${color.lightBlue};
    transform: scale(1.1);
    
  }
`;
