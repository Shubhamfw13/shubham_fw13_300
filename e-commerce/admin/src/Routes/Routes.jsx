
import React, { useEffect } from "react";
import { Route, Routes, } from "react-router-dom";
import CreateProduct from "../Components/CreateProduct/CreateProduct";
import Login from "../Components/Login/Login";


const AllRoutes = () => {
  
  return (
    <>
      <Routes>
        <Route path="login" element = {<Login/>}/>
        <Route path="/" element={<CreateProduct/>} />
      </Routes>
    </>
  );
};

export default AllRoutes;
