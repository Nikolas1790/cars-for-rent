import React, { useEffect, useState} from "react";

import { CarBtnLoadMore, CenteredContainer } from "./CatalogList.styled";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "redax/cars/operation";
import ModalWindow from "components/ModalWindow/ModalWindow";
import { toggleFavorite } from "redax/cars/carsSlice";
import UniversalCardBlock from "components/UniversalCardBlock/UniversalCardBlock";

export default function CatalogList({ filteredCars }) {
  const [selectedCarId, setSelectedCarId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
 

  const dispatch = useDispatch();
  const carList = useSelector((state) => state.cars.cars);
  useEffect(() => {
    dispatch(fetchCars({ page: currentPage }));
  }, [dispatch, currentPage]);

  const carsOnRender = filteredCars && filteredCars.length === 0 ? carList : filteredCars;
 
  const handleLearnMoreClick = (id) => {
    setSelectedCarId(id);
  };

  const handleCloseModal = () => {
    setSelectedCarId(null);
  };


  const handleHeartClick = (id) => {
    dispatch(toggleFavorite(id));
  };

  const handleLoadMoreClick = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };
  
  return (  
    <div>
      <UniversalCardBlock
        data={carsOnRender}
        onHeartClick={handleHeartClick}
        onLearnMoreClick={handleLearnMoreClick}
      />   
        <CenteredContainer>
          <CarBtnLoadMore type="button" onClick={handleLoadMoreClick}>Load more</CarBtnLoadMore>
        </CenteredContainer>
      {selectedCarId  && <ModalWindow carId={selectedCarId} onClose={handleCloseModal}/>}  
     </div>     
  );
}



