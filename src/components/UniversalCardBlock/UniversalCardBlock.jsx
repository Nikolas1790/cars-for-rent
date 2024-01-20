import React from "react";
import { CardConteiner, CardHeartBtn, CardImg, CardMainInfo, BriefMainInfo, ButtonLearnMore, CardsBlock, CarModel, AddressInfo } from "./UniversalCardBlock.styled";
import icons from '../../img/icons.svg';
import { useSelector } from "react-redux";

const UniversalCardBlock = ({ data, onHeartClick, onLearnMoreClick }) => {
  // console.log(data)
    const favorites = useSelector((state) => state.cars.favorites);
    return (
    <CardsBlock>
      {Array.isArray(data) && data.map((item) => (
        <CardConteiner key={item.id}>
          <CardHeartBtn onClick={() => onHeartClick(item.id)}>
            <svg width={12} height={12} >
              <use href={`${icons}#icon-${favorites.includes(item.id) ? 'active-heart' : 'normal-heart'}`} />
            </svg>
          </CardHeartBtn>

          <div>
                  <CardImg src={item.img}
                      alt={item.make}   
                  />
                    <CardMainInfo>
                        <p >{item.make} <CarModel>{item.model}</CarModel>, {item.year}</p>
                        <p>{item.rentalPrice}</p>
                    </CardMainInfo>
                    <BriefMainInfo>
                      <AddressInfo>{item.address}| {item.rentalCompany}</AddressInfo>
                      <p> { item.type} |{item.make} |{item.id} | {item.accessories[0]}</p>
                    </BriefMainInfo>
              </div>
          <ButtonLearnMore type="button" onClick={() => onLearnMoreClick(item.id)}>
            Learn more
          </ButtonLearnMore>
        </CardConteiner>
      ))}
    </CardsBlock>
  );
};

export default UniversalCardBlock;
