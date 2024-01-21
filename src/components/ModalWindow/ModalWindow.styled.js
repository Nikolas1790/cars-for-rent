import color from 'common/GlobalColers';
import styled from 'styled-components'


export const ModalWindowBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  
  background: rgba(18, 20, 23, 0.50);   
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  
`;

export const ModalWindowContainer = styled.div`
  position: relative;

  background: ${color.whitePrimary};
  width: 541px; 
  height: 752px;
  border-radius: 24px;
  padding: 40px;
`;

export const ModalBtnClose = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  background: transparent;

`;



export const ModalWindowImg = styled.img`
  width: 461px; 
  height: 248px;
  margin-bottom: 14px;
  border-radius: 14px;
  object-fit: cover;
`;

export const ModelAndYearTitle = styled.h2`

font-size: 18px;
font-weight: 500;
margin-bottom: 8px;
line-height: 1.5;
`;


//////////////////////////////////////////////////
export const ContentInputData = styled.div`
margin-bottom: 14px;
`;

export const ModelInputData = styled.p`
font-size: 12px;
/* margin-bottom: 4px; */
line-height: 1.5;
color: ${color.greyRgba};

&:not(:last-child) {
    margin-bottom: 4px;
  }
`;


export const ModalDescriptionText = styled.p`

line-height: 1.43;
  margin-bottom: 24px;
`;

export const ModalAccessoriesTitle = styled.h3`
font-size: 14px;
font-weight: 500;
line-height: 1.43;
  margin-bottom: 8px;
`;

export const ModalAccessoriesBloc = styled.div`
display:flex;
flex-direction: column;
gap: 4px;
  margin-bottom: 24px;


`;

export const ModalAccessoriesData = styled.ul`
display: flex;
color: ${color.greyRgba};
font-size: 12px;

line-height: 1.5;
`;

export const ModalRentalConditionsTitle = styled.h4`
font-weight: 500;
line-height: 1.43;
margin-bottom:8px;
`;

export const ModalRentalConteiner = styled.div`
display: flex;
flex-direction:column;
gap: 8px;
margin-bottom:24px;
`;

export const ModalRentalKidsConteiner = styled.ul`
display: flex;
gap: 8px;

`;

export const ModalRentalConditionsKids = styled.li`

padding: 7px 14px;
border-radius: 35px;
background: #F9F9F9;

font-size: 12px;
`;

export const ModalRentalConditionsSpanBlue = styled.span`
font-weight: 600;
margin-bottom:8px;
color: ${color.lightBlue}
`;


export const ModalRentalCarBtn = styled.button`
padding: 12px 50px;

border-radius: 12px;
color: ${color.whitePrimary};
background: ${color.lightBlue};
`;

export const ModalRentalCarLink = styled.a`
  display: inline-block;
  padding: 12px 50px;
  border-radius: 12px;
  color: ${color.whitePrimary};
  background: ${color.lightBlue};
  text-decoration: none; /* Убираем подчеркивание, так как это теперь ссылка */
`;


export const CarModel = styled.span`
color: ${color.lightBlue}
`;