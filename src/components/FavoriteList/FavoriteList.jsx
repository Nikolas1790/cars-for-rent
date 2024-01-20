import { MainConteinerCarsBlock } from "components/CatalogMarking/CatalogMarking.styled";
import ModalWindow from "components/ModalWindow/ModalWindow";
import UniversalCardBlock from "components/UniversalCardBlock/UniversalCardBlock";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "redax/cars/carsSlice";
import { fetchCarById } from "redax/cars/operation";

export default function FavoriteList() {
  const dispatch = useDispatch();
  const [selectedCarId, setSelectedCarId] = useState(null);
  const favorites = useSelector((state) => state.cars.favorites);
  
  // const carsOnRender = favorites && favorites === 0 ? carList : filteredCars;
console.log(favorites)


// const dispatch = useDispatch();
const carList = useSelector((state) => state.cars.cars);

const listFavorits = carList.filter(item => favorites.includes(item.id))

console.log(listFavorits)

// useEffect(() => {
//   dispatch(fetchCars({ page: currentPage }));
// }, [dispatch, currentPage]);


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
      <MainConteinerCarsBlock >

        <UniversalCardBlock
          data={listFavorits}
          onHeartClick={handleHeartClick}
          onLearnMoreClick={handleLearnMoreClick}
        /> 
         {selectedCarId  && <ModalWindow car={selectedCarId} onClose={handleCloseModal}/>} 
      </MainConteinerCarsBlock>
    );
  }
  