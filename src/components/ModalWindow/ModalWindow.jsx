import { useDispatch, useSelector } from "react-redux";
import {  ContentInputData, ModalAccessoriesBloc, ModalAccessoriesData, ModalAccessoriesTitle, ModalBtnClose, ModalDescriptionText, ModalRentalCarBtn, ModalRentalConditionsKids, ModalRentalConditionsSpanBlue, ModalRentalConditionsTitle, ModalRentalConteiner, ModalRentalKidsConteiner, ModalWindowBackdrop, ModalWindowContainer, ModalWindowImg, ModalWindowImgContainer, ModelAndYearTitle, ModelInputData, Paragraph } from "./ModalWindow.styled";
import React, { useCallback, useEffect } from "react";
import { fetchCarById } from "redax/cars/operation";
import { CarModel } from "components/CatalogList/CatalogList.styled";
import icons from '../../img/icons.svg';


export default function ModalWindow({ carId, onClose }) {
  const dispatch = useDispatch();
  const selectedCar = useSelector((state) => state.cars.selectedCar);

  useEffect(() => {
    dispatch(fetchCarById(carId))
  }, [dispatch, carId ])
  

  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  const handleKeyDown = useCallback((event) => {
    if (event.key === "Escape") {
      handleClose();
    }
  }, [handleClose]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);
    return (
      <ModalWindowBackdrop onClick={handleClose}>
        <ModalWindowContainer onClick={(e) => e.stopPropagation()}>
          
        <ModalBtnClose onClick={handleClose}>
            <svg width={12} height={12} >
              <use href={`${icons}#icon-cross`} />
            </svg>
          </ModalBtnClose>

          
            <ModalWindowImg alt={selectedCar.mdel}src={selectedCar.img}></ModalWindowImg>
        
            <ModelAndYearTitle >{selectedCar.make} <CarModel>{selectedCar.model}</CarModel>, {selectedCar.year}</ModelAndYearTitle>

            <ContentInputData>  
            <ModelInputData>{selectedCar.address} | id:{selectedCar.id} | Year: {selectedCar.year} | Type: {selectedCar.type}</ModelInputData>
            <ModelInputData>Fuel Consumption: {selectedCar.fuelConsumption} | Engine Size: {selectedCar.engineSize}</ModelInputData>
            </ContentInputData>

            <ModalDescriptionText>{selectedCar.description}</ModalDescriptionText>

            <ModalAccessoriesTitle>Accessories and functionalities:</ModalAccessoriesTitle>

            <ModalAccessoriesBloc>  
           <ModalAccessoriesData>
            {selectedCar.accessories.map((data, index) => (
              <React.Fragment key={index}>
                <li>{data}</li>
                {index !== selectedCar.accessories.length - 1 && <span>&nbsp; | &nbsp;</span>}
              </React.Fragment>
            ))}
           </ModalAccessoriesData>
           <ModalAccessoriesData>
            {selectedCar.functionalities.map((data, index) => (
              <React.Fragment key={index}>
                <li>{data}</li>
                {index !== selectedCar.accessories.length - 1 && <span>&nbsp; | &nbsp;</span>}
              </React.Fragment>
            ))}
           </ModalAccessoriesData>
           </ModalAccessoriesBloc>

            <ModalRentalConditionsTitle>Rental Conditions:</ModalRentalConditionsTitle>
            <ModalRentalConteiner>
              <ModalRentalKidsConteiner>
              {selectedCar.rentalConditions.split('\n').map((condition, index) => {
                if (condition.startsWith("Minimum age:")) {
                  const [, ageStr] = condition.split(":");
                  const age = ageStr.trim();
                  const parts = condition.split(age);
                  return (
                    <ModalRentalConditionsKids key={index}>
                      {parts}
                      <ModalRentalConditionsSpanBlue >{age}</ModalRentalConditionsSpanBlue>                    
                    </ModalRentalConditionsKids>
                  );
                } else {  
                return <ModalRentalConditionsKids key={index}>{condition}</ModalRentalConditionsKids>;
                }
              })}
            </ModalRentalKidsConteiner>      

            <ModalRentalKidsConteiner>  
          <ModalRentalConditionsKids>Security deposite required</ModalRentalConditionsKids>
          <ModalRentalConditionsKids>mileage: <ModalRentalConditionsSpanBlue>{selectedCar.mileage}</ModalRentalConditionsSpanBlue></ModalRentalConditionsKids>
          <ModalRentalConditionsKids>Price: <ModalRentalConditionsSpanBlue>{selectedCar.rentalPrice}</ModalRentalConditionsSpanBlue></ModalRentalConditionsKids>
            </ModalRentalKidsConteiner>
            </ModalRentalConteiner>

            <ModalRentalCarBtn>Rental car</ModalRentalCarBtn>
            
        </ModalWindowContainer>
    </ModalWindowBackdrop>
    );
  }
  