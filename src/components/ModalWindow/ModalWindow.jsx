import { useDispatch, useSelector } from "react-redux";
import { ModalWindowBackdrop, ModalWindowContainer, ModalWindowImg, ModelAndYearTitle } from "./ModalWindow.styled";
import { useEffect } from "react";
import { fetchCarById } from "redax/cars/operation";
import { CarModel } from "components/CatalogList/CatalogList.styled";
const a = 
  {
      "id": 9582,
      "year": 2008,
      "make": "Buick",
      "model": "Enclave",
      "type": "SUV",
      "img": "https://s1.1zoom.me/big0/64/Buick_Enclave_Avenir_2021_Crossover_Black_Metallic_599554_1280x693.jpg",
      "description": "The Buick Enclave is a stylish and spacious SUV known for its comfortable ride and luxurious features.",
      "fuelConsumption": "10.5",
      "engineSize": "3.6L V6",
      "accessories": [
          "Leather seats",
          "Panoramic sunroof",
          "Premium audio system"
      ],
      "functionalities": [
          "Power liftgate",
          "Remote start",
          "Blind-spot monitoring"
      ],
      "rentalPrice": "$40",
      "rentalCompany": "Luxury Car Rentals",
      "address": " Kiev | Ukraine",
      "rentalConditions": "Minimum age: 25\nValid driver's license\nSecurity deposit required",
      "mileage": 5858
  }
export default function ModalWindow({ carId }) {
  const dispatch = useDispatch();
  // const selectedCar = useSelector((state) => state.cars.selectedCar);
console.log('kkkkkkkkkkkkkkkkk',a.year)

  useEffect(() => {
    dispatch(fetchCarById(carId))
  }, [dispatch, carId ])
  
  // console.log(carId)
    return (
      <ModalWindowBackdrop>
      <ModalWindowContainer>
        <ModalWindowImg alt={a.img} src={a.img}></ModalWindowImg>
        <ModelAndYearTitle >{a.make} <CarModel>{a.model}</CarModel>, {a.year}</ModelAndYearTitle>
      </ModalWindowContainer>
    </ModalWindowBackdrop>
    );
  }
  