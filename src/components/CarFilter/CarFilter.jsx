
import { useState } from "react";
import { CarsBrendBlock, CarsFilterBlock, CarsFilterLabelBlock, CarsMileageBlock, CarsMileageBlockFromTo, CarsPriceBlock, CarsSarchBtn, InputStyledMileageFrom, InputStyledMileageTo, SelectStyledBrendBlock, SelectStyledPriceBlock } from "./CarFilter.styled";

const carBrands = [
    "Buick", "Volvo", "HUMMER", "Subaru", "Mitsubishi", "Nissan", "Lincoln",
    "GMC", "Hyundai", "MINI", "Bentley", "Mercedes-Benz", "Aston Martin",
    "Pontiac", "Lamborghini", "Audi", "BMW", "Chevrolet", "Chrysler", "Kia", "Land"
  ];

  const rentalPrices = Array.from({ length: 50 }, (_, index) => (index+1) * 10);

export default function CarFilter() {

    const [selectedBrand, setSelectedBrand] = useState('');
    const [selectedPrice, setSelectedPrice] = useState('');
    const [fromMileage, setFromMileage] = useState('');
    const [toMileage, setToMileage] = useState('');

    const handleBrandChange = (event) => {
        setSelectedBrand(event.target.value);
      };
      const handlePriceChange = (event) => {
        setSelectedPrice(event.target.value);
      };

      const handleFromMileageChange = (event) => {
        setFromMileage(event.target.value.replace('From ', ''));
      };
    
      const handleToMileageChange = (event) => {
        setToMileage(event.target.value.replace('To ', ''));
      };

      const handleSearch = () => {
        console.log("Search clicked!");
        console.log("Selected Brand:", selectedBrand);
        console.log("Selected Price:", selectedPrice);
        console.log("From Mileage:", fromMileage);
        console.log("To Mileage:", toMileage);
      };




    return (
        <CarsFilterBlock>

            <CarsBrendBlock>
                <CarsFilterLabelBlock htmlFor="carBrand">Car brand</CarsFilterLabelBlock>
                <div>
                    <SelectStyledBrendBlock
                        id="carBrand"
                        value={selectedBrand}
                        onChange={handleBrandChange}
                    >
                        <option value="">Enter the text</option>
                            {carBrands.map(brand => (
                                <option key={brand} value={brand}>
                                   {brand}
                                </option>
                            ))}
                    </SelectStyledBrendBlock>
                </div>
            </CarsBrendBlock>
       
            <CarsPriceBlock>
                <CarsFilterLabelBlock htmlFor="price">Price/1 hour</CarsFilterLabelBlock>
                <div>
                    <SelectStyledPriceBlock
                        id="price"
                        value={selectedPrice}
                        onChange={handlePriceChange}
                    >
                        <option value="">To $</option>
                           {rentalPrices.map(price => (
                                <option key={price} value={price}>
                                    {price}
                                </option>
                            ))}
                    </SelectStyledPriceBlock>
                </div>
            </CarsPriceBlock>

            <CarsMileageBlock>
                <CarsFilterLabelBlock htmlFor="fromMileage">Car mileage / km</CarsFilterLabelBlock>
                <CarsMileageBlockFromTo>
                    <InputStyledMileageFrom
                      type="text"
                      id="fromMileage"
                      value={`From ${fromMileage}`}
                      onChange={handleFromMileageChange}
                    />
                    <InputStyledMileageTo
                      type="text"
                      id="toMileage"
                      value={`To ${toMileage}`}
                      onChange={handleToMileageChange}
                    />
                </CarsMileageBlockFromTo>
            </CarsMileageBlock>
      
            <div>
                <CarsSarchBtn onClick={handleSearch}>Search</CarsSarchBtn>
            </div>


        
        </CarsFilterBlock>
    );
  }
  