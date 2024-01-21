import color from 'common/GlobalColers';
import styled from 'styled-components'

export const WrapperOfMainConteinerCarsBlock = styled.div`
display: flex;
align-items: center;
flex-direction:column;
`;

export const MainConteinerCarsBlock = styled.div`
display: flex;
align-items: center;
flex-direction:column;
max-width: 1440px;
height: auto;

padding: 50px 128px 128px;
`;

export const CapitalDates = styled.span`
 font-size: 24px;
 font-weight: 700px;
 margin: 0 auto;
 color: ${color.lightBlue};
`;

export const PromoCode = styled.a`
 display: inline-block;
 font-size: 24px;
 font-weight: 700px;
 margin: 0 auto;
 color: ${color.lightBlue};
 background: ${color.whiteShade};
 padding: 8px;
 border-radius: 16px;
 margin-bottom: 16px;
`;

export const TitleThereNothing = styled.p`
 font-size: 20px;
 font-weight: 700px;
 text-align: center;
`;



