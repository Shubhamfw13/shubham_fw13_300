import { useState, useEffect } from "react";
import axios from "axios";

export const Employees = () => {
  const [formdata, setFormdata] = useState({
    name: "",
    age: "",
    address: "",
    salary: "",
    marital_state: "",
    department: "",
  });

  function handleChange(e) {
    let { className, value, checked, type } = e.target;
    value = type === "checked" ? checked : value;
    setFormdata({ ...formdata, [className]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios.post("http://localhost:3002/employees", formdata).then((res) => {
      alert("user inserted");
      setFormdata({
        name: "",
        age: "",
        address: "",
        salary: "",
        marital_state: "",
        department: "",
      });
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="name"
          onChange={handleChange}
          value={formdata.name}
          type="text"
          placeholder="Name"
        />
        <br />
        <input
          className="age"
          value={formdata.age}
          onChange={handleChange}
          type="text"
          placeholder="Age"
        />
        <br />
        <input
          className="address"
          value={formdata.address}
          onChange={handleChange}
          type="text"
          placeholder="Address"
        />
        <br />
        <input
          className="salary"
          value={formdata.salary}
          onChange={handleChange}
          type="text"
          placeholder="Salary"
        />
        <br />
        <h4>Marital State</h4>
        <label>Bachelor</label>
        <input
          className="marital_state"
          value="Bachelor"
          checked={formdata.Bachelor}
          onChange={handleChange}
          type="checkbox"
        />
        <br />
        <label>Married</label>
        <input
          className="marital_state"
          value="Married"
          checked={formdata.Married}
          onChange={handleChange}
          type="checkbox"
        />
        <br />
        <label>Department</label>
        <select
          className="department"
          value={formdata.department}
          onChange={handleChange}
        >
          <option value="HR">HR</option>

          <option value="Engineering">Engineering</option>

          <option value="Marketing">Marketing</option>

          <option value="Sales">Sales</option>
        </select>
        <br />

        <input type="submit" />
      </form>
    </div>
  );
};
