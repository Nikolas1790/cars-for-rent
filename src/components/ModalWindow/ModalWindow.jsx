import { useDispatch, useSelector } from "react-redux";
import { ModalWindowBackdrop, ModalWindowContainer, ModalWindowImg, ModelAndYearTitle } from "./ModalWindow.styled";
import { useEffect } from "react";
import { fetchCarById } from "redax/cars/operation";
import { CarModel } from "components/CatalogList/CatalogList.styled";

export default function ModalWindow({ carId }) {
  const dispatch = useDispatch();
  const selectedCar = useSelector((state) => state.cars.selectedCar);
console.log('kkkkkkkkkkkkkkkkk',selectedCar)

  useEffect(() => {
    dispatch(fetchCarById(carId))
  }, [dispatch, carId ])
  
  // console.log(carId)
    return (
      <ModalWindowBackdrop>
      <ModalWindowContainer>
        <ModalWindowImg alt={selectedCar.img} src={selectedCar.img}></ModalWindowImg>
        <ModelAndYearTitle >{selectedCar.make} <CarModel>{selectedCar.model}</CarModel>, {selectedCar.year}</ModelAndYearTitle>
      </ModalWindowContainer>
    </ModalWindowBackdrop>
    );
  }
  