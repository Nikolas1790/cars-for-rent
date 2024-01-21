import React, { useEffect, useState} from "react";

import { CarBtnLoadMore, CenteredContainer } from "./CatalogList.styled";
import { useDispatch, useSelector } from "react-redux";
import { fetchCarById, fetchCars } from "redax/cars/operation";
import ModalWindow from "components/ModalWindow/ModalWindow";
import { toggleFavorite } from "redax/cars/carsSlice";
import UniversalCardBlock from "components/UniversalCardBlock/UniversalCardBlock";
import { selectCarsCatalog } from "redax/cars/selector";

export default function CatalogList({ filteredCars }) {
  const [selectedCarId, setSelectedCarId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useDispatch();
  const carList = useSelector(selectCarsCatalog);
  
  useEffect(() => {
    dispatch(fetchCars({ limit: currentPage*12}));
  }, [dispatch, currentPage]);


  useEffect(() => {
    if (selectedCarId && !carList.find((car) => car.id === selectedCarId.id)) {
      setSelectedCarId(null);
    }
  }, [selectedCarId, carList]);

  const carsOnRender = filteredCars && filteredCars.length === 0 ? carList : filteredCars;
 
  const handleLearnMoreClick = (id) => {
    const findCar = carList.find(car => car.id === id)
    dispatch(fetchCarById(id))
    setSelectedCarId(findCar);
  };

  const handleCloseModal = () => {
    setSelectedCarId(null);
  };

  const handleHeartClick = (id) => {
    dispatch(toggleFavorite(id));
  };

  const handleLoadMoreClick = () => { 
    setCurrentPage(prevPage => prevPage + 1);  
  };

  return (  
    <div>
      <UniversalCardBlock
        data={carsOnRender}
        onHeartClick={handleHeartClick}
        onLearnMoreClick={handleLearnMoreClick}
      /> 
        {carList.length >= currentPage * 12 && carsOnRender.length > 1 && (
          <CenteredContainer>
            <CarBtnLoadMore type="button" onClick={handleLoadMoreClick}>Load more</CarBtnLoadMore>
          </CenteredContainer>
        )}
      {selectedCarId  && <ModalWindow car={selectedCarId} onClose={handleCloseModal}/>}  
     </div>     
  );
}



