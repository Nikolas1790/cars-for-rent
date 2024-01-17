import CatalogList from "components/CatalogList/CatalogList";
import { useState } from "react";

const carBrands = [
    "Buick", "Volvo", "HUMMER", "Subaru", "Mitsubishi", "Nissan", "Lincoln",
    "GMC", "Hyundai", "MINI", "Bentley", "Mercedes-Benz", "Aston Martin",
    "Pontiac", "Lamborghini", "Audi", "BMW", "Chevrolet", "Chrysler", "Kia", "Land"
  ];

  const rentalPrices = Array.from({ length: 50 }, (_, index) => (index+1) * 10);

export default function Catalog() {

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
        <div>
        <label htmlFor="carBrand">Car brand</label>
        <div>
        <select
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
      </select>
      </div>
       
      <div>
        <label htmlFor="price">Price/1 hour</label>
        <div>
        <select
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
        </select>
      </div>
      </div>

      <div>
        <label htmlFor="fromMileage">Car mileage / km</label>
        <div>
        <input
          type="text"
          id="fromMileage"
          value={`From ${fromMileage}`}
          onChange={handleFromMileageChange}
        />
        <input
          type="text"
          id="toMileage"
          value={`To ${toMileage}`}
          onChange={handleToMileageChange}
        />
      </div>
      </div>
      
      <div>
        <button onClick={handleSearch}>Search</button>
      </div>


        <CatalogList />
      </div>
    );
  }
  