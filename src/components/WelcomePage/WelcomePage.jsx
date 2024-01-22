import { AdvantageBlock, AdvantageBlockMassage, AdvantageItem, AdvantageTitle, ContacrUs, StyledBtnCarPark, WelcomePageContainer, WelcomePageTitle, WraperBox } from "./WelcomePage.styled";
  
  export default function WelcomePage() {
    return (     
      <WraperBox>
        <WelcomePageContainer >
          <WelcomePageTitle>
            Cars for the most demanding customers at reasonable prices
          </WelcomePageTitle>
          <div>
            <StyledBtnCarPark to="/catalog" title="Do it !">
                 Car park
            </StyledBtnCarPark>
          </div>
          <AdvantageBlock>
            <AdvantageBlockMassage>
              <AdvantageTitle>Our advantages :</AdvantageTitle>
              <AdvantageItem>1. High Quality</AdvantageItem>
              <AdvantageItem>2. Affordable Prices</AdvantageItem>
              <AdvantageItem>3. Wide Selection</AdvantageItem>
              <AdvantageItem>4. Exceptional Service</AdvantageItem>
              <AdvantageItem>5. Fast Delivery</AdvantageItem>
            
              <ContacrUs href="tel:+380730000000">
                Contact us +380730000000
              </ContacrUs> 
            </AdvantageBlockMassage>
          </AdvantageBlock>
        </WelcomePageContainer>
      </WraperBox>     
    );
  }
  