
import color from 'common/GlobalColers';
import styled from 'styled-components'


export const ModalWindowBackdrop = styled.div`
  z-index: 1;
  background: rgba(18, 20, 23, 0.50); 
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalWindowContainer = styled.div`
  background: ${color.whitePrimary};
  width: 541px; 
  height: 752px;
  /* display: flex;
  align-items: center;
  justify-content: center; */
  border-radius: 24px;
  padding: 40px;
`;





export const ModalWindowImg = styled.img`
  width: 461px; 
  height: 248px;
  margin-bottom: 14px;
  border-radius: 14px;
  background: ${color.lightGray};
`;

export const ModelAndYearTitle = styled.p`
color:${color.blackPrimary};
font-size: 18px;
font-weight: 500;
margin-bottom: 8px;
line-height: 1.5;
`;