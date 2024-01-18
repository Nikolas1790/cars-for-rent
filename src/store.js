import { configureStore } from "@reduxjs/toolkit";
import carReducer from "./redax/cars/carsSlice";
import persistStore from "redux-persist/es/persistStore";
import {
    FLUSH,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    REHYDRATE,
  } from "redux-persist";

export const store = configureStore({
  reducer: {
    cars: carReducer,
  },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === "development",
});

export default store;


export const persistor = persistStore(store);