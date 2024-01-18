import React, { useEffect, useState } from "react";
import axios from "axios";
import { AddressInfo, BriefMainInfo, ButtonLearnMore, CarModel, CardConteiner, CardImg, CardMainInfo, CardsBlock } from "./CatalogList.styled";
// import ButtonLearnMore from "components/ButtonLearnMore/ButtonLearnMore";

export default function CatalogList() {
  const [carList, setCarList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
           const response = await axios.get("https://65a8255794c2c5762da85eab.mockapi.io/api/car-list");

        const data = response.data;

        setCarList(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); 

  return (   
      <ul>
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
            {/* <ButtonLearnMore /> */}
            <ButtonLearnMore type="button">Learn more</ButtonLearnMore>
          </ CardConteiner>
        ))}
        </CardsBlock>
      </ul>    
  );
}
