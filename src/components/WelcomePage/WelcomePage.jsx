import { AdvantageBlock, AdvantageItem, AdvantageTitle, StyledBtnCarPark, WelcomePageContainer, WelcomePageTitle, WraperBox } from "./WelcomePage.styled";
  
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
        <AdvantageBlock>
          <AdvantageTitle>Our advantages</AdvantageTitle>
          <AdvantageItem>1. High Quality</AdvantageItem>
          <AdvantageItem>2. Affordable Prices</AdvantageItem>
          <AdvantageItem>3. Wide Selection</AdvantageItem>
          <AdvantageItem>4. Exceptional Service</AdvantageItem>
          <AdvantageItem>5. Fast Delivery</AdvantageItem>
        </AdvantageBlock>

        </WelcomePageContainer>

      </WraperBox>     
    );
  }
  