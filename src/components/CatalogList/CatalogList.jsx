import React, { useEffect, useState } from "react";
import axios from "axios";
import { CardConteiner, CardImg, CardMainInfo } from "./CatalogList.styled";

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
    <CardConteiner>
      <ul>
        {carList.map((car) => (
          <li key={car.id}>
            <div>
                <CardImg src={car.img}
                    alt={car.make}
                    width="274"
                    height="268"
                />
                  <CardMainInfo>
                      <p >{car.make} <span>{car.model}</span>, {car.year}</p>
                      <p>{car.rentalPrice}</p>
                  </CardMainInfo>
                  <div>
                    <p>{car.address}| {car.rentalCompany}</p>
                    <p> { car.type} |{car.make} |{car.id}</p>
                  </div>
            </div>
          </li>
        ))}
      </ul>
    </CardConteiner>
  );
}
