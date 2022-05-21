
import React, { useEffect } from "react";
import { Route, Routes, useLocation, } from "react-router-dom";
import Cart from "../Components/Cart/Cart";
import ActionCategories from "../Components/Categories/ActionCategories";
import MenCategories from "../Components/Categories/ActionCategories";
import RpgCategories from "../Components/Categories/RpgCategories";
import WomenCategories from "../Components/Categories/RpgCategories";
import Checkout from "../Components/Checkout/Checkout";
import { Home } from "../Components/Homepage/home";
import Login from "../Components/Login/Login";
import Orderplaced from "../Components/OrderPlaced/Orderplaced";
import MenProductDetails from "../Components/ProductDetails/MenProductDetails";
import ProductDetails from "../Components/ProductDetails/ProductDetails";
import WomenProductDetails from "../Components/ProductDetails/WomenProducrDetails";
import Register from "../Components/Register/Register";


const Success = () => {
  const location = useLocation()
  console.log(location)
  return <div>Success</div>
}

const AllRoutes = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/actioncategories" element={<ActionCategories />} />
        <Route path="/rpgcategories" element={<RpgCategories />} />
        <Route path="/productdetails/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/checkout/success" element={<Orderplaced />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/checkout/failed" element={<Success />} />

      </Routes>
    </>
  );
};

export default AllRoutes;
