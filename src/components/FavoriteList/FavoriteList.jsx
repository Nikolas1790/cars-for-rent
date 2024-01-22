import ModalWindow from "components/ModalWindow/ModalWindow";
import UniversalCardBlock from "components/UniversalCardBlock/UniversalCardBlock";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "redax/cars/carsSlice";
import { fetchCarById } from "redax/cars/operation";
import { CapitalDates, MainConteinerCarsBlock, PromoCode, TitleThereNothing, WrapperOfMainConteinerCarsBlock } from "./FavoriteList.style";
import { selectCarsCatalog, selectCarsFavorites } from "redax/cars/selector";
import screensaver from '../../img/photo-there-is-nithing.jpg';
import Loader from "components/Loader/Loader";

export default function FavoriteList() {
  const dispatch = useDispatch();
  const [selectedCarId, setSelectedCarId] = useState(null);
  
  const favorites = useSelector(selectCarsFavorites);  
  const carList = useSelector(selectCarsCatalog);
  const loading = useSelector((state) => state.cars.loading);

  const listFavorits = carList.filter(item => favorites.includes(item.id))

  const handleCloseModal = () => {
    setSelectedCarId(null);
  };

  const handleLearnMoreClick = (id) => {
    const findCar = carList.find(car => car.id === id)
    dispatch(fetchCarById(id))
    setSelectedCarId(findCar);
  };

  const handleHeartClick = (id) => {
    dispatch(toggleFavorite(id));
  };  

  if (loading) {
    return <Loader />;
  }
    return (
      <WrapperOfMainConteinerCarsBlock>
        <MainConteinerCarsBlock >
          <h2>From <CapitalDates>1.02</CapitalDates> to <CapitalDates>29.02</CapitalDates>- <CapitalDates>30%</CapitalDates> discount using promotional code_    
            <PromoCode href="tel:+380730000000" title="Press !">
              2024
            </PromoCode>
          </h2>
          {listFavorits.length === 0 ? (
            <div>
              <img src={screensaver} alt="car" width={700} />
              <TitleThereNothing>There's nothing here yet ...</TitleThereNothing>
            </div>
          ) : (
            <UniversalCardBlock
              data={listFavorits}
              onHeartClick={handleHeartClick}
              onLearnMoreClick={handleLearnMoreClick}
            /> 
          )}
           {selectedCarId  && <ModalWindow car={selectedCarId} onClose={handleCloseModal}/>} 
        </MainConteinerCarsBlock>
      </WrapperOfMainConteinerCarsBlock>
    );
  }
  