import axios from "axios";
import { useEffect, useState } from "react";
import "./Rentals.css";

export const Rentals = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    getData();
  });

  function getData() {
    axios
      .get("http://localhost:8080/houses")
      .then((res) => [setDatas(res.data)]);
  }

  return (
    <div className="rentalContainer">
      <div className="sortingButtons">
        <button className="sortById">Sort by ID</button>
        <button className="sortByRentAsc">Rent Low to high</button>
        <button className="sortByRentDesc">Rent High to low</button>
        <button className="sortByAreaAsc">Area Low to high</button>
        <button className="sortByAreaDesc">Area High to Low</button>
      </div>
      <input
        className="searchAddress"
        type="text"
        placeholder="Search Address"
      />
      <table className="table" border="1">
        <thead>
          <tr>
            <th>Sl.no.</th>
            <th>Name</th>
            <th>Owner Name</th>
            <th>Address</th>
            <th>Area Code</th>
            <th>Rent</th>
            <th>Available For</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {[datas].map((elem, index) => {
            return (
              <tr key={elem.id} className="houseDetails">
                <td className="houseId">{elem.id}</td>
                <td className="houseName">{elem.name} </td>
                <td className="ownersName">{elem.ownerName}</td>
                <td className="address">{elem.address}</td>
                <td className="areaCode">{elem.areaCode}</td>
                <td className="rent">{elem.rent}</td>
                <td className="preferredTenants">
                  {/* Show text Both or Bachelors or Married based on values */}
                </td>
                <td className="houseImage">
                  <img src={elem.image} alt="house" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
