
import React, { useEffect } from "react";
import { Route, Routes, } from "react-router-dom";
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

const AllRoutes = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/actioncategories" element={<ActionCategories />} />
        <Route path="/rpgcategories" element={<RpgCategories />} />
        {/* <Route path="/menproductdetails/:id" element={<MenProductDetails/>} />
        <Route path="/womenproductdetails/:id" element={<WomenProductDetails/>} /> */}
        <Route path="/productdetails/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orderplaced" element={<Orderplaced />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
