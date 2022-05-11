import React from "react";
import { Route, Routes } from "react-router-dom";
import MenCategories from "../Components/Categories/MenCategories";
import WomenCategories from "../Components/Categories/WomenCategories";
import { Home } from "../Components/Homepage/home";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="mencategories" element={<MenCategories />} />
        <Route path="womencategories" element={<WomenCategories />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
