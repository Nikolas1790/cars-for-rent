import { HeaderContainer, InnerHeaderContainer, P, PhoneLink, PhoneNumber, PhoneSvg, StyledLink } from "./Header.styled";
import icons from '../../img/icons.svg';

export default function Header() {
  return (
    <HeaderContainer>
        <InnerHeaderContainer>
          <nav>
           <StyledLink to="/">Home page</StyledLink>
           <StyledLink to="/catalog">Car park</StyledLink>
           <StyledLink to="/favorites">Favorites</StyledLink>      
          </nav>
          <PhoneNumber>
          <PhoneLink href="tel:+380730000000">
            
              <P width={20} height={20} style={{ fill: 'green' }}>
                <use href={`${icons}#icon-phones`} />
              </P>
            
            +380730000000
            </PhoneLink>
            </PhoneNumber>
         </InnerHeaderContainer>
         

    </HeaderContainer>


  );
};
