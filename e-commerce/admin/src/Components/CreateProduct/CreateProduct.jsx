import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button"
import { useDispatch } from "react-redux";
import { SendData } from "../../Redux/Products/action";

const CreateProduct = () => {
  const [data, setData] = useState({
    title: "",
    description: "",
    categories: [],
    rating: "",
    price: "",
    image: "",
    strip: "",
    pos1: "",
    pos2: "",
    pos3: "",
    pos4: "",
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  console.log(data)

  const handleSubmit = ()=>{
      dispatch(SendData(data))
  }

  return (
    <>
      <div>
        <Navbar />
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField onChange={handleChange} name="title" value={data.title} label="Title" type="text" />
            <TextField onChange={handleChange} name="description" value={data.description} label="Description" type="text" />
            <TextField onChange={handleChange} name="categories" value={data.categories} label="Categories" type="text" />
            <TextField onChange={handleChange} name="rating" value={data.rating} label="Rating" type="text" />
            <TextField onChange={handleChange} name="price" value={data.price} label="Price" type="text" />
            <TextField onChange={handleChange} name="image" value={data.image} label="Image" type="text" />
            <TextField onChange={handleChange} name="strip" value={data.strip} label="Stripe" type="text" />
            <TextField onChange={handleChange} name="pos1" value={data.pos1} label="Poster1" type="text" />
            <TextField onChange={handleChange} name="pos2" value={data.pos2} label="Poster2" type="text" />
            <TextField onChange={handleChange} name="pos3" value={data.pos3} label="Poster3" type="text" />
            <TextField onChange={handleChange} name="pos4" value={data.pos4} label="Poster4" type="text" /><br />
            <Button onClick={handleSubmit} variant="outlined" >Add Product</Button>
          </div>
        </Box>
      </div>
    </>
  );
};

export default CreateProduct;
