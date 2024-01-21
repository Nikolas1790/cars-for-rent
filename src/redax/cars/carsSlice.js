import { fetchCarById, fetchCars } from "./operation";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cars: [],
    selectedCar: null,
    loading: false,
    error: null,
    favorites: [],
  };

const carSlice = createSlice({
    name: "cars",
    initialState,
    reducers: {
      toggleFavorite: (state, action) => {
        const carId = action.payload;
        const ind = state.favorites.indexOf(carId);  
        if (ind !== -1) {
          state.favorites.splice(ind, 1);
        } else {
          state.favorites.push(carId);
        }
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchCars.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchCars.fulfilled, (state, action) => {
          state.loading = false;
          state.cars = action.payload;
        })
        .addCase(fetchCars.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        })
        
        .addCase(fetchCarById.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchCarById.fulfilled, (state, action) => {
          state.loading = false;
          console.log(action.payload)
          state.selectedCar = action.payload;
        })
        .addCase(fetchCarById.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        })

    },
  });
  
  export const { toggleFavorite } = carSlice.actions;
  export default carSlice.reducer;