import { Navbar } from "./Navbar";
import { HomePage } from "./HomePage";

import { ProductsDetailsPage } from "./ProductsDetailsPage";
import { ProductsPage } from "./ProductsPage";
import { Routes as S, Route } from "react-router-dom";

export const Routes = () => {
  return (
    <>
      <Navbar />
      <S>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/:id" element={<ProductsDetailsPage />} />
        <Route path="/products" element={<ProductsPage />} />
      </S>
      {/* Add Routes here */}
    </>
  );
};
