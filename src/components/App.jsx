import {  Route, Routes } from 'react-router-dom';
import  Layout  from './Layout/Layout';
import { lazy } from 'react';

const Home = lazy(() => import("../pages/Home/Home"));
const Catalog = lazy(() => import("../pages/Catalog/Catalog"));
const Favorite = lazy(() => import("../pages/Favorites/Favorites"));

export const App = () => {
  return (
    <>
<Routes>
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />}/>
    <Route path="/catalog" element={<Catalog />}/>
    <Route path="/favorites" element={<Favorite />}/>
  </Route>
</Routes>
</>
  );
};
