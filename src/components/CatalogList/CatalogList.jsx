import React, { useEffect, useState} from "react";

import { AddressInfo, BriefMainInfo, ButtonLearnMore, CarModel, CardConteiner, CardHeartBtn, CardImg, CardMainInfo, CardsBlock } from "./CatalogList.styled";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "redax/cars/operation";
import ModalWindow from "components/ModalWindow/ModalWindow";
import icons from '../../img/icons.svg';

export default function CatalogList({ filteredCars }) {
  const [selectedCarId, setSelectedCarId] = useState(null);
  const [isHeartClicked, setIsHeartClicked] = useState(false);

  const dispatch = useDispatch();
  const carList = useSelector((state) => state.cars.cars);
  
  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const carsOnRender = filteredCars && filteredCars.length === 0 ? carList : filteredCars;
 
  const handleLearnMoreClick = (id) => {
    setSelectedCarId(id);
  };

  const handleCloseModal = () => {
    setSelectedCarId(null);
  };

  // const handleOnChange = () => {
  //   setSelectedCarId(null);
  // };
  const handleHeartClick = () => {
    setIsHeartClicked(!isHeartClicked); 
  };
  return (   
      <CardsBlock>    

           {Array.isArray(carsOnRender) && carsOnRender.map((car) => (
           <CardConteiner key={car.id}>

              <CardHeartBtn onClick={handleHeartClick}>
                <svg width={12} height={12} >
                <use href={`${icons}#icon-${isHeartClicked ? 'active-heart' : 'normal-heart'}`} />
                </svg>
              </CardHeartBtn>    

              <div>
                  <CardImg src={car.img}
                      alt={car.make}   
                  />
                    <CardMainInfo>
                        <p >{car.make} <CarModel>{car.model}</CarModel>, {car.year}</p>
                        <p>{car.rentalPrice}</p>
                    </CardMainInfo>
                    <BriefMainInfo>
                      <AddressInfo>{car.address}| {car.rentalCompany}</AddressInfo>
                      <p> { car.type} |{car.make} |{car.id} | {car.accessories[0]}</p>
                    </BriefMainInfo>
              </div>
              <ButtonLearnMore type="button" onClick={() => handleLearnMoreClick(car.id)}>Learn more</ButtonLearnMore>
            
          </ CardConteiner>
        ))}     
             
         {selectedCarId  && <ModalWindow carId={selectedCarId} onClose={handleCloseModal}/>}  
      </CardsBlock>    
  );
}

// import React, { useEffect, useState} from "react";

// import { AddressInfo, BriefMainInfo, ButtonLearnMore, CarModel, CardHeartBtn, CardImg, CardMainInfo, CardsBlock } from "./CatalogList.styled";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchCars } from "redax/cars/operation";
// import ModalWindow from "components/ModalWindow/ModalWindow";
// import icons from '../../img/icons.svg';
// import CardConteiner from "components/CardConteiner/CardConteiner";

// export default function CatalogList({ filteredCars }) {
//   // const [selectedCarId, setSelectedCarId] = useState(null);
//   // const [isHeartClicked, setIsHeartClicked] = useState(false);

//   const dispatch = useDispatch();
//   const carList = useSelector((state) => state.cars.cars);
  
//   useEffect(() => {
//     dispatch(fetchCars());
//   }, [dispatch]);

//   const carsOnRender = filteredCars && filteredCars.length === 0 ? carList : filteredCars;
//  console.log(carsOnRender)
 
//   return (   
//       <CardsBlock> 
//         {Array.isArray(carsOnRender) && carsOnRender.map((car) => (
//             <CardConteiner key={car.id} car={car} />
//         ))}              
        
//       </CardsBlock>    
//   );
// }
