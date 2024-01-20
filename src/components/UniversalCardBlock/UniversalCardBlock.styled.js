import color from 'common/GlobalColers';
import styled from 'styled-components'

export const CardsBlock = styled.ul`
max-width: 1184px;
display:flex;
/* flex-direction: row; */
flex-wrap: wrap;
justify-content: start;
gap: 50px 29px;
margin-bottom: 100px;
`;

export const CardConteiner = styled.li`
position: relative;

width: 274px;
height: 426px;

`;

export const CardHeartBtn = styled.button`
position: absolute;
top: 14px;
  right: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 18px;
  height: 18px;
background: transparent;
`;

export const CardImg = styled.img`
width: 274px;
height: 268px;
border-radius: 14px;
background: ${color.lightGray};
margin-bottom: 14px;
object-fit: cover;

`;

export const CardMainInfo = styled.div`
display: flex;
justify-content: space-between;

color:${color.blackPrimary};
font-size: 16px;
font-weight: 500;
margin-bottom: 8px;
line-height: 1.5;

`;

export const CarModel = styled.span`
color: ${color.lightBlue}
`;

export const BriefMainInfo = styled.div`
font-size: 12px;
margin-bottom: 28px;
color: ${color.greyRgba};
`;

export const AddressInfo = styled.p`
margin-bottom: 4px;
`;

export const ButtonLearnMore = styled.button`
display: flex;
justify-content: center;
align-items: center;

width: 274px;
height: 44px;
padding: 12px 99px;
border-radius: 12px;
color: ${color.whitePrimary};
background: ${color.lightBlue};
`;
