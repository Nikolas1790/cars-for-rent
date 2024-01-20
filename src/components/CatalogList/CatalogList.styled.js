import color from 'common/GlobalColers';
import styled from 'styled-components'


export const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CarBtnLoadMore = styled.button`
font-size: 16px;
font-weight: 500;
text-decoration-line: underline;

width: 79px;
height: 24px;
/* padding: 10px; */
color: ${color.lightBlue};
background: transparent;
`;