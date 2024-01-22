import color from 'common/GlobalColers';
import styled from 'styled-components'

export const CarsFilterBlock = styled.div`
display: flex;
align-items: flex-end;
gap: 18px;

max-width: 859px;
height: 74px;
font-weight: 500;
line-height: 1.28;

margin-bottom: 50px;
`;

export const CarsBrendBlock = styled.div`
width: 224px;
height: 74px;
`;

export const CarsFilterLabelBlock = styled.p`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  line-height: 1.29;
  color: ${color.secondaryGray};
`;

// export const SelectStyledBrendBlock = styled.div`
//   display: flex;
//   padding: 14px 89px 14px 18px;

//   width: 100%; 
//   height: 48px;
//   outline: none;  
  
//   border-radius: 14px;
//   background: ${color.lightGray};
//   border: none;   
// `;

export const CarsPriceBlock = styled.div`
  width: 125px;
  height: 74px;
`;

// export const SelectStyledPriceBlock = styled.div`  
//   display: flex;  
//   width: 100%; 
//   height: 48px;
//   padding: 14px  18px;
//   border: none;  
//   outline: none; 
//   border-radius: 14px;
//   background: ${color.lightGray};
// `;

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

export const CarsSarchBtn = styled.button`
align-items: center;
width: 136px;
height: 48px;
font-size: 14px;
font-weight: 600;
line-height: 1.43;
padding: 14px 44px;

border-radius: 12px;
color: ${color.whitePrimary};
background: ${color.lightBlue};
`;

export const CustomDropdown = styled.div`
  position: relative;
  width: 224px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  color: ${color.gryeTextColorBrands};
`;

export const DropdownButton = styled.button`
  width: 100%;
  height: 48px;
  padding: 14px 89px 14px 18px;
  border-radius: 14px;
  background: ${color.lightGray};
  border: none;
  outline: none;
  cursor: pointer;
  position: relative;

  &::after {
    content: '\25BC';
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    color: red;
  }
`;


export const DropdownList = styled.ul`
  position: absolute; 
  top: 100%;
  left: 0;
  width: 100%;
  height: 272px;
  padding: 14px 8px 14px 18px;
  
  overflow-y: auto; 
  border-radius: 14px;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  z-index: 5;
  background: ${color.whitePrimary};

  border: 1px solid rgba(18, 20, 23, 0.05);
  box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);

  &.isOpen {
    display: block;
  }  
  
  scrollbar-width: 8px;
  scrollbar-color: ${color.greyRgba} ${color.lightGray};
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 8px;
    height: 130px;
  }

  &::-webkit-scrollbar-thumb {

    background-color: ${color.greyRgba};
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${color.lightGray};
    border-radius: 10px;
  }
`;

export const DropdownItem = styled.li`
  cursor: pointer;
  
  transition: color 0.25s linear;
  &:not(:last-child) {
    margin-bottom: 8px; 
  }

  &:hover {
    color: ${color.blackPrimary} ; 
  }
`;


export const CustomRentalPrices = styled.div`
  position: relative;
  width: 125px;
  font-size: 16px;
  font-weight: 188px;
  line-height: 1.25;
  color: ${color.gryeTextColorBrands};
`;

export const DropdownListPrice = styled.ul`
  position: absolute; 
  top: 100%;
  left: 0;
  width: 100%;
  height: 188px;
  padding: 14px 8px 14px 18px;
  
  overflow-y: auto; 
  border-radius: 14px;
  display: ${({ isOpenPrice }) => (isOpenPrice ? 'block' : 'none')};
  z-index: 5;
  background: ${color.whitePrimary};

  border: 1px solid rgba(18, 20, 23, 0.05);
  box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);

  &.isOpenPrice {
    display: block;
  }  
  
  scrollbar-width: 8px;
  scrollbar-color: ${color.greyRgba} ${color.lightGray};
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 8px;
    height: 130px;
  }

  &::-webkit-scrollbar-thumb {

    background-color: ${color.greyRgba};
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${color.lightGray};
    border-radius: 10px;
  }
`;
