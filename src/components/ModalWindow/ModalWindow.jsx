// import { useDispatch, useSelector } from "react-redux";
import {  CarModel, ContentInputData, ModalAccessoriesBloc, ModalAccessoriesData, ModalAccessoriesTitle, ModalBtnClose, ModalDescriptionText,  ModalRentalCarLink, ModalRentalConditionsKids, ModalRentalConditionsSpanBlue, ModalRentalConditionsTitle, ModalRentalConteiner, ModalRentalKidsConteiner, ModalWindowBackdrop, ModalWindowContainer, ModalWindowImg,  ModelAndYearTitle, ModelInputData } from "./ModalWindow.styled";
import React, { useCallback, useEffect } from "react";
// import { fetchCarById } from "redax/cars/operation";
// import { CarModel } from "components/CatalogList/CatalogList.styled";
import icons from '../../img/icons.svg';

export default function ModalWindow({ car, onClose }) {
  console.log(car)
  // const dispatch = useDispatch();
  // const selectedCar = useSelector((state) => state.cars.selectedCar);
  // useEffect(() => {
  //   if (!selectedCar || selectedCar.id !== carId) {
  //     // Если selectedCar отсутствует, отправьте запрос на загрузку данных
  //     dispatch(fetchCarById(carId));
  //   }
  // }, [dispatch, carId, selectedCar])
  



  

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

            {/* <ModalRentalCarBtn>Rental car</ModalRentalCarBtn> */}
            <ModalRentalCarLink href="tel:+380730000000">Rental car</ModalRentalCarLink>
        </ModalWindowContainer>
    </ModalWindowBackdrop>
    );
  }
  








//   import { useDispatch, useSelector } from "react-redux";
// import {  CarModel, ContentInputData, ModalAccessoriesBloc, ModalAccessoriesData, ModalAccessoriesTitle, ModalBtnClose, ModalDescriptionText,  ModalRentalCarLink, ModalRentalConditionsKids, ModalRentalConditionsSpanBlue, ModalRentalConditionsTitle, ModalRentalConteiner, ModalRentalKidsConteiner, ModalWindowBackdrop, ModalWindowContainer, ModalWindowImg,  ModelAndYearTitle, ModelInputData } from "./ModalWindow.styled";
// import React, { useCallback, useEffect } from "react";
// import { fetchCarById } from "redax/cars/operation";
// // import { CarModel } from "components/CatalogList/CatalogList.styled";
// import icons from '../../img/icons.svg';

// const s =     {
//   "id": 9584,
//   "year": 2019,
//   "make": "Volvo",
//   "model": "XC90",
//   "type": "SUV",
//   "img": "https://s1.1zoom.me/b5050/11/Volvo_XC90_2015_Metallic_513742_3840x2400.jpg",
//   "description": "The Volvo XC90 is a premium SUV that offers exceptional safety, advanced technology, and elegant design.",
//   "fuelConsumption": "8.3",
//   "engineSize": "2.0L 4-cylinder",
//   "accessories": [
//       "Nappa leather seats",
//       "Bowers & Wilkins premium sound system",
//       "Head-up display"
//   ],
//   "functionalities": [
//       "IntelliSafe advanced safety features",
//       "Pilot Assist semi-autonomous driving",
//       "Four-zone automatic climate control"
//   ],
//   "rentalPrice": "$50",
//   "rentalCompany": "Premium Auto Rentals",
//   "address": " Lviv | Ukraine",
//   "rentalConditions": "Minimum age: 21\nValid driver's license\nProof of insurance required",
//   "mileage": 5352
// }

// export default function ModalWindow({ carId, onClose }) {
//   const dispatch = useDispatch();
//   const selectedCar = useSelector((state) => state.cars.selectedCar);
//   useEffect(() => {
//     if (!selectedCar) {
//       // Если selectedCar отсутствует, отправьте запрос на загрузку данных
//       dispatch(fetchCarById(carId));
//     }
//   }, [dispatch, carId, selectedCar])
  



  

//   const handleClose = useCallback(() => {
//     onClose();
//   }, [onClose]);

//   const handleKeyDown = useCallback((event) => {
//     if (event.key === "Escape") {
//       handleClose();
//     }
//   }, [handleClose]);

//   useEffect(() => {
//     window.addEventListener("keydown", handleKeyDown);
//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//     };
//   }, [handleKeyDown]);
//     return (
//       <ModalWindowBackdrop onClick={handleClose}>
//         <ModalWindowContainer onClick={(e) => e.stopPropagation()}>
          
//           <ModalBtnClose onClick={handleClose}>
//             <svg width={12} height={12} >
//               <use href={`${icons}#icon-cross`} />
//             </svg>
//           </ModalBtnClose>

          
//             <ModalWindowImg alt={s.model} src={s.img}></ModalWindowImg>
        
//             <ModelAndYearTitle >{s.make} <CarModel>{s.model}</CarModel>, {s.year}</ModelAndYearTitle>

//             <ContentInputData>  
//             <ModelInputData>{s.address} | id:{s.id} | Year: {s.year} | Type: {s.type}</ModelInputData>
//             <ModelInputData>Fuel Consumption: {s.fuelConsumption} | Engine Size: {s.engineSize}</ModelInputData>
//             </ContentInputData>

//             <ModalDescriptionText>{s.description}</ModalDescriptionText>

//             <ModalAccessoriesTitle>Accessories and functionalities:</ModalAccessoriesTitle>

//             <ModalAccessoriesBloc>  
//            <ModalAccessoriesData>
//             {s.accessories.map((data, index) => (
//               <React.Fragment key={index}>
//                 <li>{data}</li>
//                 {index !== s.accessories.length - 1 && <span>&nbsp; | &nbsp;</span>}
//               </React.Fragment>
//             ))}
//            </ModalAccessoriesData>
//            <ModalAccessoriesData>
//             {s.functionalities.map((data, index) => (
//               <React.Fragment key={index}>
//                 <li>{data}</li>
//                 {index !== s.accessories.length - 1 && <span>&nbsp; | &nbsp;</span>}
//               </React.Fragment>
//             ))}
//            </ModalAccessoriesData>
//            </ModalAccessoriesBloc>

//             <ModalRentalConditionsTitle>Rental Conditions:</ModalRentalConditionsTitle>
//             <ModalRentalConteiner>
//               <ModalRentalKidsConteiner>
//               {s.rentalConditions.split('\n').map((condition, index) => {
//                 if (condition.startsWith("Minimum age:")) {
//                   const [, ageStr] = condition.split(":");
//                   const age = ageStr.trim();
//                   const parts = condition.split(age);
//                   return (
//                     <ModalRentalConditionsKids key={index}>
//                       {parts}
//                       <ModalRentalConditionsSpanBlue >{age}</ModalRentalConditionsSpanBlue>                    
//                     </ModalRentalConditionsKids>
//                   );
//                 } else {  
//                 return <ModalRentalConditionsKids key={index}>{condition}</ModalRentalConditionsKids>;
//                 }
//               })}
//             </ModalRentalKidsConteiner>      

//             <ModalRentalKidsConteiner>  
//               <ModalRentalConditionsKids>Security deposite required</ModalRentalConditionsKids>
//               <ModalRentalConditionsKids>mileage: <ModalRentalConditionsSpanBlue>{s.mileage}</ModalRentalConditionsSpanBlue></ModalRentalConditionsKids>
//               <ModalRentalConditionsKids>Price: <ModalRentalConditionsSpanBlue>{s.rentalPrice}</ModalRentalConditionsSpanBlue></ModalRentalConditionsKids>
//             </ModalRentalKidsConteiner>
//             </ModalRentalConteiner>

//             {/* <ModalRentalCarBtn>Rental car</ModalRentalCarBtn> */}
//             <ModalRentalCarLink href="tel:+380730000000">Rental car</ModalRentalCarLink>
//         </ModalWindowContainer>
//     </ModalWindowBackdrop>
//     );
//   }
  