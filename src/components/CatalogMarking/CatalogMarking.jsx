import CarFilter from "components/CarFilter/CarFilter";
import CatalogList from "components/CatalogList/CatalogList";
import { MainConteinerCarsBlock, WrapperOfMainConteinerCarsBlock } from "components/CatalogMarking/CatalogMarking.styled";

import { useState } from "react";

export default function CatalogMarking() {
  const [filteredCars, setFilteredCars] = useState([]);

  const updateFilteredCars = (newFilteredCars) => {
    setFilteredCars(newFilteredCars);      
  };
  return (      
    <WrapperOfMainConteinerCarsBlock>
      <MainConteinerCarsBlock>
        <CarFilter updateFilteredCars={updateFilteredCars}/>
        <CatalogList filteredCars={filteredCars}/>
      </MainConteinerCarsBlock>
    </WrapperOfMainConteinerCarsBlock>
  );
}
  