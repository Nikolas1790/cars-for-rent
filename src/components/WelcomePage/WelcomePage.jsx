import { StyledBtnCarPark, WelcomePageContainer, WelcomePageTitle, WraperBox } from "./WelcomePage.styled";
  
  export default function WelcomePage() {
    return (     
      <WraperBox>
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
      </WraperBox>     
    );
  }
  