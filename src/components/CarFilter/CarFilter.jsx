import { useState } from "react";
import { CarsBrendBlock, CarsFilterBlock, CarsFilterLabelBlock, CarsMileageBlock, CarsMileageBlockFromTo, CarsPriceBlock, CarsSarchBtn, CustomDropdown, CustomRentalPrices, DropdownButton, DropdownItem,  DropdownList, DropdownListPrice, InputStyledMileageFrom, InputStyledMileageTo } from "./CarFilter.styled";
import {  useSelector } from "react-redux";
import { selectCarsCatalog } from "redax/cars/selector";
import { toast } from 'react-toastify';

const carBrands = [
    "Buick", "Volvo", "HUMMER", "Subaru", "Mitsubishi", "Nissan", "Lincoln",
    "GMC", "Hyundai", "MINI", "Bentley", "Mercedes-Benz", "Aston Martin",
    "Pontiac", "Lamborghini", "Audi", "BMW", "Chevrolet", "Chrysler", "Kia", "Land"
  ];

  const rentalPrices = Array.from({ length: 50 }, (_, index) => (index+1) * 10);

export default function CarFilter({updateFilteredCars}) {
    const carList = useSelector(selectCarsCatalog);

    const [selectedBrand, setSelectedBrand] = useState('');
    const [selectedPrice, setSelectedPrice] = useState('');
    const [fromMileage, setFromMileage] = useState('');
    const [toMileage, setToMileage] = useState('');

    const [isOpen, setIsOpen] = useState(false);
    const [isOpenPrice, setIsOpenPrice] = useState(false);

    const handleBrandChange = (brand) => {
        setSelectedBrand(brand);
        setIsOpen(false);
    };

    const handleBrandChangePrice = (brand) => {
      setSelectedPrice(brand);
      setIsOpenPrice(false);
  };

    const handleFromMileageChange = (event) => {
        setFromMileage(event.target.value.replace('From ', ''));
    };
    
    const handleToMileageChange = (event) => {
        setToMileage(event.target.value.replace('To ', ''));
    };

    const handleSearch = () => {
        const findCars = carList.filter(item => item.make === selectedBrand)  
        if (findCars.length === 0) {
            toast.warning('Oops, the cats are coming.');            
        } 
        updateFilteredCars(findCars);          
    };
    
    return (
        <CarsFilterBlock>
            <CustomDropdown>
              <CarsBrendBlock>
                <CarsFilterLabelBlock htmlFor="carBrand">Car brand</CarsFilterLabelBlock>
                <DropdownButton onClick={() => setIsOpen(!isOpen)}>

                  {selectedBrand || 'Enter the text'}
                </DropdownButton>
                <DropdownList className={isOpen ? 'isOpen' : ''}>
                  {carBrands.map((brand) => (
                    <DropdownItem key={brand} onClick={() => handleBrandChange(brand)}>
                      {brand}
                    </DropdownItem>
                  ))}
                </DropdownList>
              </CarsBrendBlock>
            </CustomDropdown>

            <CustomRentalPrices>
              <CarsPriceBlock>
                <CarsFilterLabelBlock htmlFor="price">Price/1 hou</CarsFilterLabelBlock>
                <DropdownButton onClick={() => setIsOpenPrice(!isOpenPrice)}>
                  {selectedPrice || 'To\u00A0$'}
                </DropdownButton>
                <DropdownListPrice className={isOpenPrice ? 'isOpenPrice' : ''}>
                  {rentalPrices.map((brand) => (
                    <DropdownItem key={brand} onClick={() => handleBrandChangePrice(brand)}>
                      {brand}
                    </DropdownItem>
                  ))}
                </DropdownListPrice>
              </CarsPriceBlock>
            </CustomRentalPrices>

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
  