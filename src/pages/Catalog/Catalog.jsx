import CarFilter from "components/CarFilter/CarFilter";
import { MainConteinerCarsFilterBlock } from "components/CarFilter/CarFilter.styled";
import CatalogList from "components/CatalogList/CatalogList";

export default function Catalog() {

    return (
    <MainConteinerCarsFilterBlock>
        <CarFilter />
        <CatalogList />
    </MainConteinerCarsFilterBlock>
    );
  }
  