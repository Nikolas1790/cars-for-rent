import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://65a8255794c2c5762da85eab.mockapi.io/api/";

export const fetchCars = createAsyncThunk("cars/fetchCars", async ({ page = 1, limit = 12 } = {}) => {
    try {
      const response = await axios.get(`/car-list?page=${page}&limit=${limit}`);      
      return response.data;
    } catch (error) {
      throw error;
    }
  });  
  
  export const fetchCarById = createAsyncThunk("cars/fetchCarById", async (id) => {
    try {
      const response = await axios.get(`/car-list/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  });

