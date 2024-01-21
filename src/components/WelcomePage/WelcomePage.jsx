import { StyledBtnCarPark, W, WelcomePageContainer, WelcomePageTitle } from "./WelcomePage.styled";
  
  export default function WelcomePage() {
    return (
      <W>
      <WelcomePageContainer >
        <WelcomePageTitle>
          Cars for the most demanding customers at reasonable prices
        </WelcomePageTitle>
        <div>
          <StyledBtnCarPark to="/catalog" title="Try !">
               Car park
          </StyledBtnCarPark>
        </div>
      </WelcomePageContainer>
      </W>
    );
  }
  