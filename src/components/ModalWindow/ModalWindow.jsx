import {  CarModel, ContentInputData, ModalAccessoriesBloc, ModalAccessoriesData, ModalAccessoriesTitle, ModalBtnClose, ModalDescriptionText,  ModalRentalCarLink, ModalRentalConditionsKids, ModalRentalConditionsSpanBlue, ModalRentalConditionsTitle, ModalRentalConteiner, ModalRentalKidsConteiner, ModalWindowBackdrop, ModalWindowContainer, ModalWindowImg,  ModelAndYearTitle, ModelInputData } from "./ModalWindow.styled";
import React, { useCallback, useEffect } from "react";
import icons from '../../img/icons.svg';

export default function ModalWindow({ car, onClose }) {
  const handleClose = useCallback(() => {    
    onClose();
  }, [onClose]);

  const handleKeyDown = useCallback((event) => {
    if (event.key === "Escape") {
      handleClose();
    }
  }, [handleClose]);

  const handleBodyScroll = (disableScroll) => {
    if (disableScroll) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    handleBodyScroll(true);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      handleBodyScroll(false);
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
          
            <ModalWindowImg alt={car.model} src={car.img}></ModalWindowImg>
        
            <ModelAndYearTitle >{car.make} <CarModel>{car.model}</CarModel>, {car.year}</ModelAndYearTitle>

            <ContentInputData>  
            <ModelInputData>{car.address} | id:{car.id} | Year: {car.year} | Type: {car.type}</ModelInputData>
            <ModelInputData>Fuel Consumption: {car.fuelConsumption} | Engine Size: {car.engineSize}</ModelInputData>
            </ContentInputData>

            <ModalDescriptionText>{car.description}</ModalDescriptionText>

            <ModalAccessoriesTitle>Accessories and functionalities:</ModalAccessoriesTitle>

            <ModalAccessoriesBloc>  
           <ModalAccessoriesData>
            {car.accessories.map((data, index) => (
              <React.Fragment key={index}>
                <li>{data}</li>
                {index !== car.accessories.length - 1 && <span>&nbsp; | &nbsp;</span>}
              </React.Fragment>
            ))}
           </ModalAccessoriesData>
           <ModalAccessoriesData>
            {car.functionalities.map((data, index) => (
              <React.Fragment key={index}>
                <li>{data}</li>
                {index !== car.accessories.length - 1 && <span>&nbsp; | &nbsp;</span>}
              </React.Fragment>
            ))}
           </ModalAccessoriesData>
           </ModalAccessoriesBloc>

            <ModalRentalConditionsTitle>Rental Conditions:</ModalRentalConditionsTitle>
            <ModalRentalConteiner>
              <ModalRentalKidsConteiner>
              {car.rentalConditions.split('\n').map((condition, index) => {
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
              <ModalRentalConditionsKids>mileage: <ModalRentalConditionsSpanBlue>{car.mileage}</ModalRentalConditionsSpanBlue></ModalRentalConditionsKids>
              <ModalRentalConditionsKids>Price: <ModalRentalConditionsSpanBlue>{car.rentalPrice}</ModalRentalConditionsSpanBlue></ModalRentalConditionsKids>
            </ModalRentalKidsConteiner>
            </ModalRentalConteiner>

             <ModalRentalCarLink href="tel:+380730000000">Rental car</ModalRentalCarLink>
        </ModalWindowContainer>
    </ModalWindowBackdrop>
    );
  }
  
