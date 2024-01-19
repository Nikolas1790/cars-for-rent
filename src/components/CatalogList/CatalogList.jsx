import React, { useEffect, useState} from "react";

import { AddressInfo, BriefMainInfo, ButtonLearnMore, CarModel, CardConteiner, CardImg, CardMainInfo, CardsBlock } from "./CatalogList.styled";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "redax/cars/operation";
import ModalWindow from "components/ModalWindow/ModalWindow";

export default function CatalogList({ filteredCars }) {

  // console.log('hhhhhhhhhhhhhhhhhhhhhhhhhhhhh',filteredCars)
  const dispatch = useDispatch();
  const carList = useSelector((state) => state.cars.cars);
  
  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const carsOnRender = filteredCars && filteredCars.length === 0 ? carList : filteredCars;

  const [selectedCarId, setSelectedCarId] = useState(null);
  const handleLearnMoreClick = (id) => {
    console.log("hhhhhhhhhhhh", id)
    setSelectedCarId(id);
  };

  return (   
      <CardsBlock>        
           {Array.isArray(carsOnRender) && carsOnRender.map((car) => (
           <CardConteiner key={car.id}>
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
             
         {selectedCarId && <ModalWindow carId={selectedCarId} />}  
      </CardsBlock>    
  );
}
