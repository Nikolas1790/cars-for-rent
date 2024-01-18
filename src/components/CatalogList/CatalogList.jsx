import React, { useEffect} from "react";

import { AddressInfo, BriefMainInfo, ButtonLearnMore, CarModel, CardConteiner, CardImg, CardMainInfo, CardsBlock } from "./CatalogList.styled";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "redax/cars/operation";

export default function CatalogList() {
  const dispatch = useDispatch();
  const carList = useSelector((state) => state.cars.cars);
  
  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return (   
      <CardsBlock>        
           {carList.map((car) => (
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
            <ButtonLearnMore type="button">Learn more</ButtonLearnMore>
            
          </ CardConteiner>
        ))}            
      </CardsBlock>    
  );
}
