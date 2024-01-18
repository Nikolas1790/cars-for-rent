import { HeaderContainer, InnerHeaderContainer, StyledLink } from "./Header.styled";

export default function Header() {
  return (
    <HeaderContainer>
        <InnerHeaderContainer>
         <nav>
           <StyledLink to="/">Home page</StyledLink>
           <StyledLink to="/catalog">Car park</StyledLink>
           <StyledLink to="/favorites">Favorites</StyledLink>      
          </nav>
         </InnerHeaderContainer>
    </HeaderContainer>


  );
};
