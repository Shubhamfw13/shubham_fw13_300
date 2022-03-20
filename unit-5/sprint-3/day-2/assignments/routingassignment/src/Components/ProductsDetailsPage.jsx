import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ProductsDetailsPage = () => {
  const [product, setProduct] = useState({});
  let { id } = useParams();
  id = +id;

  useEffect(() => {
    getData();
  }, []);
  function getData() {
    axios.get(`http://localhost:3002/Products/${id}`).then((res) => {
      setProduct(res.data);
    });
  }
  console.log(product);

  return (
    <>
      <h1>Products Details Page</h1>
      {product ? (
        <div
          style={{
            display: "flex",
            paddingTop: "50px",
            justifyContent: "center",
            textAlign: "left",
          }}
        >
          <img src={""} alt="" />
          <div className="productDetails" style={{ padding: "20px" }}>
            <div>
              <h2 className="productName">{product.name}</h2>
              <h5 className="productPrice">Price : {product.price}</h5>
            </div>
            <h5>Specifications : </h5>
            <div style={{ width: "700px", paddingLeft: "30px" }}>
              {/* Show Product specification here */}
            </div>
          </div>
        </div>
      ) : (
        "Product Does Not Exist"
      )}
    </>
  );
};
