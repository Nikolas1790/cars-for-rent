import { fetchCarById, fetchCars, filterCars } from "./operation";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cars: [],
    selectedCar: null,
    loading: false,
    error: null,
  };

const carSlice = createSlice({
    name: "cars",
    initialState,
    reducers: {},
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
          state.selectedCar = action.payload;
        })
        .addCase(fetchCarById.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        })

        // .addCase(filterCars.pending, (state) => {
        //   state.loading = true;
        //   state.error = null;
        // })
        // .addCase(filterCars.fulfilled, (state, action) => {
        //   state.loading = false;
        //   state.selectedCar = action.payload;
        // })
        // .addCase(filterCars.rejected, (state, action) => {
        //   state.loading = false;
        //   state.error = action.error.message;
        // });
    },
  });
  
  export default carSlice.reducer;