import color from 'common/GlobalColers'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom';
import backgroundImage from '../../img/home-page.jpg';

export const WraperBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction:column;
  background: url(${backgroundImage}) no-repeat center center fixed;
  background-size: cover;
  min-height: 640px;
`

export const WelcomePageContainer = styled.div`
  display: flex;
  align-items: center;
  flex-Direction: column;
  padding:60px 20px;
  max-width: 1440px;
  padding: 50px 128px 128px;
`

export const WelcomePageTitle = styled.h1`
  font-Weight: 500;
  font-Size: 48px;
  text-Align: center;
  margin-Bottom: 40px; 
  line-height: 1.33;
  max-width: 900px;
`

export const StyledBtnCarPark = styled(NavLink)` 
  display: inline-block;
  padding: 12px 50px;
  font-weight: 700;
  font-size: 18px;
  color: ${color.whitePrimary};  
  background: ${color.lightBlue};
  border-radius: 12px;
  margin-bottom: 80px;

  transition: transform 0.25s linear, background 0.25s linear;
  &:hover,
  &:focus {    
    background: ${color.darkBlue};
    transform: scale(1.05);    
  }
  
  &.active {
    color:  ${color.darkBlue};
    font-weight: bold;    
  }
`

export const AdvantageBlock = styled.div`
  display:flex;
  flex-direction: column;
  margin-left: auto;
`;


export const AdvantageBlockMassage = styled.div`
  background: ${color.greyRgba};
  padding:  8px ;
  border-radius: 0px 36px 36px 36px;
  box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);
`;

export const AdvantageTitle = styled.h3`
  margin-bottom: 8px;
  font-size: 30px;
  font-weight: 700;
  color: ${color.lightBlue};
`;

export const AdvantageItem = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: ${color.whitePrimary};
`;

export const ContacrUs = styled.a`
  font-size: 16px;
  font-weight: 500;
  padding: 8px;
  color: ${color.secondaryGray};

  transition: color 0.3s linear;
  &:hover,
  &:focus {
    color:  ${color.lightBlue};    
  }
`;