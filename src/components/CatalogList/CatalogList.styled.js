import color from 'common/GlobalColers';
import styled from 'styled-components'

export const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px; // Когда исчезнет кнопка, мардж пропадёт
`;

export const CarBtnLoadMore = styled.button`
  width: 79px;
  height: 24px;
  font-size: 16px;
  font-weight: 500;
  text-decoration-line: underline;

  color: ${color.lightBlue};
  background: transparent;
`;