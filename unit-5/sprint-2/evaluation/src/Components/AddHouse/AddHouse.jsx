import axios from "axios";
import { useState, useEffect } from "react";

export const AddHouse = (props) => {
  const [formdata, setFormdata] = useState({
    name: "",
    ownerName: "",
    address: "",
    areaCode: "",
    rent: "",
    bachelor: "",
    married: "",
    image: "",
  });

  function handleChange(e) {
    const { className, value } = e.target;
    setFormdata({ ...formdata, [className]: value });
  }

  const getData = props.getData;

  function handleSubmit(e) {
    e.preventDefault();
    axios.post("http://localhost:8080/houses", formdata).then(() => {
      getData();
      setFormdata({
        name: "",
        ownerName: "",
        address: "",
        areaCode: "",
        rent: "",
        bachelor: "",
        married: "",
        image: "",
      });
    });
  }

  return (
    <div className="addHouseContainer">
      <form onSubmit={handleSubmit}>
        <label>name</label>
        <input
          type="text"
          className="name"
          value={formdata.name}
          onChange={handleChange}
          required
        />
        <br />
        <label>ownerName</label>
        <input
          type="text"
          value={formdata.ownerName}
          className="ownerName"
          onChange={handleChange}
          required
        />
        <br />
        <label>address</label>
        <input
          value={formdata.address}
          type="text"
          className="address"
          onChange={handleChange}
          required
        />
        <br />
        <label>areaCode</label>
        <input
          value={formdata.areaCode}
          type="text"
          className="areaCode"
          onChange={handleChange}
          required
        />
        <br />
        <label>rent</label>
        <input
          value={formdata.rent}
          type="text"
          className="rent"
          onChange={handleChange}
          required
        />
        <br />
        <label>preferredTenant</label>
        <br />
        <label>bachelor</label>
        <input
          checked={formdata.bachelor}
          type="checkbox"
          className="bachelor"
          onChange={handleChange}
        />
        <br />
        <label>married</label>
        <input
          checked={formdata.married}
          type="checkbox"
          className="married"
          onChange={handleChange}
        />
        <br />
        <label>image</label>
        <input
          value={formdata.image}
          type="text"
          className="image"
          onChange={handleChange}
          required
        />
        <br />
        <input className="submitBtn" type="submit" />
      </form>
    </div>
  );
};
