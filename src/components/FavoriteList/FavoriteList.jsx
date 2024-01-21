
import ModalWindow from "components/ModalWindow/ModalWindow";
import UniversalCardBlock from "components/UniversalCardBlock/UniversalCardBlock";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "redax/cars/carsSlice";
import { fetchCarById } from "redax/cars/operation";
import { MainConteinerCarsBlock, WrapperOfMainConteinerCarsBlock } from "./FavoriteList.style";
import { selectCarsCatalog, selectCarsFavorites } from "redax/cars/selector";

export default function FavoriteList() {
  const dispatch = useDispatch();
  const [selectedCarId, setSelectedCarId] = useState(null);
  
  const favorites = useSelector(selectCarsFavorites);  
  const carList = useSelector(selectCarsCatalog);

  const listFavorits = carList.filter(item => favorites.includes(item.id))

  const handleCloseModal = () => {
    setSelectedCarId(null);
  };

  const handleLearnMoreClick = (id) => {
    const findCar = carList.find(car => car.id === id)
    console.log(findCar)
    dispatch(fetchCarById(id))
    setSelectedCarId(findCar);
  };

  const handleHeartClick = (id) => {
    dispatch(toggleFavorite(id));
  };  
    return (
      <WrapperOfMainConteinerCarsBlock>
      <MainConteinerCarsBlock >
        <UniversalCardBlock
          data={listFavorits}
          onHeartClick={handleHeartClick}
          onLearnMoreClick={handleLearnMoreClick}
        /> 
         {selectedCarId  && <ModalWindow car={selectedCarId} onClose={handleCloseModal}/>} 
      </MainConteinerCarsBlock>
     </WrapperOfMainConteinerCarsBlock>
    );
  }
  