import { HeaderContainer, InnerHeaderContainer, PhoneLink, StyledLink } from "./Header.styled";


export default function Header() {
  return (
    <HeaderContainer>
        <InnerHeaderContainer>
          <nav>
           <StyledLink to="/">Home page</StyledLink>
           <StyledLink to="/catalog">Car park</StyledLink>
           <StyledLink to="/favorites">Favorites</StyledLink>      
          </nav>          
          <PhoneLink href="tel:+380730000000">
            +380730000000
          </PhoneLink>            
         </InnerHeaderContainer>  
    </HeaderContainer>
  );
};
