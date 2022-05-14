import React, { useEffect } from "react";
import { Route, Routes, } from "react-router-dom";
import Cart from "../Components/Cart/Cart";
import MenCategories from "../Components/Categories/MenCategories";
import WomenCategories from "../Components/Categories/WomenCategories";
import Checkout from "../Components/Checkout/Checkout";
import { Home } from "../Components/Homepage/home";
import Orderplaced from "../Components/OrderPlaced/Orderplaced";
import MenProductDetails from "../Components/ProductDetails/MenProductDetails";
import WomenProductDetails from "../Components/ProductDetails/WomenProducrDetails";

const AllRoutes = () => {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mencategories" element={<MenCategories />} />
        <Route path="/womencategories" element={<WomenCategories />} />
        <Route path="/menproductdetails/:id" element={<MenProductDetails/>} />
        <Route path="/womenproductdetails/:id" element={<WomenProductDetails/>} />
        <Route path="/cart" element= {<Cart/>}/>
        <Route path="/checkout" element = {<Checkout/>}/>
        <Route path="orderplaced" element = {<Orderplaced/>}/>
      </Routes>
    </>
  );
};

export default AllRoutes;
