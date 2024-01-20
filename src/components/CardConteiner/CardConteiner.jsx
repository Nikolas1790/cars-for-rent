

import React, { useState } from "react";
import { AddressInfo, BriefMainInfo, ButtonLearnMore, CarModel, CardHeartBtn, CardImg, CardMainInfo } from "../CatalogList/CatalogList.styled";
import ModalWindow from "components/ModalWindow/ModalWindow";
import icons from '../../img/icons.svg';

export default function CardConteiner({ car }) {
  const [selectedCarId, setSelectedCarId] = useState(null);
  const [isHeartClicked, setIsHeartClicked] = useState(false);
console.log(car)
  const handleLearnMoreClick = () => {
    setSelectedCarId(car.id);
  };

  const handleCloseModal = () => {
    setSelectedCarId(null);
  };

  const handleHeartClick = () => {
    setIsHeartClicked(!isHeartClicked);
  };

  return (
    <><CardConteiner>
      <CardHeartBtn onClick={handleHeartClick}>
        <svg width={12} height={12}>
          <use href={`${icons}#icon-${isHeartClicked ? 'active-heart' : 'normal-heart'}`} />
        </svg>
      </CardHeartBtn>

      <div>
        <CardImg src={car.img} alt={car.make} />
        <CardMainInfo>
          <p>{car.make} <CarModel>{car.model}</CarModel>, {car.year}</p>
          <p>{car.rentalPrice}</p>
        </CardMainInfo>
        <BriefMainInfo>
          <AddressInfo>{car.address}| {car.rentalCompany}</AddressInfo>
          <p>{car.type} |{car.make} |{car.id} | {car.accessories[0]}</p>
        </BriefMainInfo>
      </div>
      <ButtonLearnMore type="button" onClick={handleLearnMoreClick}>
        Learn more
      </ButtonLearnMore>

      {selectedCarId && <ModalWindow carId={selectedCarId} onClose={handleCloseModal} />}
      </CardConteiner>
    </>
  );
}
// {/* <CardConteiner key={car.id}>

//               <CardHeartBtn onClick={handleHeartClick}>
//                 <svg width={12} height={12} >
//                 <use href={`${icons}#icon-${isHeartClicked ? 'active-heart' : 'normal-heart'}`} />
//                 </svg>
//               </CardHeartBtn>    

//               <div>
//                   <CardImg src={car.img}
//                       alt={car.make}   
//                   />
//                     <CardMainInfo>
//                         <p >{car.make} <CarModel>{car.model}</CarModel>, {car.year}</p>
//                         <p>{car.rentalPrice}</p>
//                     </CardMainInfo>
//                     <BriefMainInfo>
//                       <AddressInfo>{car.address}| {car.rentalCompany}</AddressInfo>
//                       <p> { car.type} |{car.make} |{car.id} | {car.accessories[0]}</p>
//                     </BriefMainInfo>
//               </div>
//               <ButtonLearnMore type="button" onClick={() => handleLearnMoreClick(car.id)}>Learn more</ButtonLearnMore>
            
//           </ CardConteiner>

// {selectedCarId  && <ModalWindow carId={selectedCarId} onClose={handleCloseModal}/>}   */}
