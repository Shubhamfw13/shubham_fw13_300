import axios from "axios";
import { useState, useEffect } from "react";
import { Rentals } from "../Rentals/Rentals";

export const AddHouse = () => {
  const [formdata, setFormdata] = useState({
    Name: "",
    Owners_name: "",
    Address: "",
    Area_code: "",
    rent: "",
    preferred_tenants: "",
  });

  useEffect(() => {
    getData();
  });

  const [datas, setDatas] = useState([]);

  function handleChange(e) {
    const { id, value } = e.target;
    setFormdata({ ...formdata, [id]: value });
  }

  function getData() {
    axios
      .get("http://localhost:8080/houses")
      .then((res) => [setDatas(res.data)]);
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios.post("http://localhost:8080/houses", formdata).then(() => {
      alert("house reg");
      getData();
      setFormdata({
        Name: "",
        Owners_name: "",
        Address: "",
        Area_code: "",
        rent: "",
        preferred_tenants: "",
      });
    });
  }

  return (
    <div className="addHouseContainer">
      <form onSubmit={handleSubmit}>
        <label>name</label>
        <input
          onChange={handleChange}
          type="text"
          className="name"
          id="Name"
          required
        />
        <br />
        <label>ownerName</label>
        <input
          onChange={handleChange}
          type="text"
          id="Owners_name"
          className="ownerName"
          required
        />
        <br />
        <label>address</label>
        <input
          onChange={handleChange}
          type="text"
          id="Address"
          className="address"
          required
        />
        <br />
        <label>areaCode</label>
        <input
          onChange={handleChange}
          type="text"
          id="Area_code"
          className="areaCode"
          required
        />
        <br />
        <label>rent</label>
        <input
          onChange={handleChange}
          id="rent"
          type="text"
          className="rent"
          required
        />
        <br />
        <label>preferredTenant</label>
        <br />
        <label>bachelor</label>
        <input
          onChange={handleChange}
          id="preferred_tenants"
          type="checkbox"
          className="bachelor"
        />
        <br />
        <label>married</label>
        <input checked={""} type="checkbox" className="married" />
        <br />
        <label>image</label>
        <input type="text" className="image" required />
        <br />
        <input className="submitBtn" type="submit" />
      </form>
    </div>
  );
};
