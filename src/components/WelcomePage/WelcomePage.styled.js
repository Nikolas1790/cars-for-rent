import color from 'common/GlobalColers'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom';


export const WelcomePageContainer = styled.div`
       display: flex;
       align-items: center;
      justify-Content: center;
      flex-Direction: column;
      padding:60px 20px;
`

export const WelcomePageTitle = styled.h1`
/* color: ${color.blackPrimary}; */
      font-Weight: 500;
      font-Size: 48px;
      text-Align: center;
      margin-Bottom: 40px; 
      line-height: 1.33;
      max-width: 900px;
`


export const StyledBtnCarPark = styled(NavLink)` 
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  font-size: 18px;
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