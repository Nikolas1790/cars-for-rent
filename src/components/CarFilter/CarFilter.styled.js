import color from 'common/GlobalColers';
import styled from 'styled-components'



export const CarsFilterBlock = styled.div`
display: flex;
align-items: flex-end;
gap: 18px;

width: 859px;
height: 74px;
font-weight: 500;
line-height: 1.28;

margin-bottom: 50px;
`;

export const CarsBrendBlock = styled.div`
width: 224px;
height: 74px;

`;

export const CarsFilterLabelBlock = styled.label`
display: block;
margin-bottom: 8px;
`;

export const SelectStyledBrendBlock = styled.select`
height: 48px;
  display: flex;
  padding: 14px 89px 14px 18px;

  border-radius: 14px;
  background: ${color.lightGray};
  border: none;
  width: 100%; 

`;

export const CarsPriceBlock = styled.div`
width: 125px;
height: 74px;

`;

export const SelectStyledPriceBlock = styled.select`
  height: 48px;
  display: flex;
  padding: 14px  18px;

  border-radius: 14px;
  background: ${color.lightGray};
  border: none;
  width: 100%; 
`;

export const CarsMileageBlock = styled.div`
width: 320px;
height: 74px;

`;

export const CarsMileageBlockFromTo = styled.div`
display: flex;
`;

export const InputStyledMileageFrom = styled.input`
width: 160px;
height: 48px;
padding: 14px 93px 14px 24px;

border-radius: 14px 0px 0px 14px;
border: none;
border-right: 1px solid rgba(138, 138, 137, 0.20);
background: ${color.lightGray};
outline: none;

`;

export const InputStyledMileageTo = styled.input`
width: 160px;
height: 48px;
padding: 14px 115px 14px 24px;

border-radius: 0px 14px 14px 0px;
border: none;
background: ${color.lightGray};
outline: none;
`;
//////////////////////////////////////////////

export const CarsSarchBtn = styled.button`
width: 136px;
height: 48px;
font-weight: 600;
padding: 14px 44px;
align-items: center;

border-radius: 12px;
color: ${color.whitePrimary};
background: ${color.lightBlue};
`;

