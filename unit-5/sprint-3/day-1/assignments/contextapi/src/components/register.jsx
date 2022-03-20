import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

export const CreateAccount = () => {
  const { toggle } = useContext(AuthContext);
  const [cred, setCred] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setCred({ ...cred, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://reqres.in/api/register", cred).then((res) => {
      console.log(res.data);
      setCred({ email: "", password: "" });
      toggle();
    });
  };

  return (
    <div>
      <h1>register</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={cred.email}
          type="text"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />

        <input
          type="text"
          value={cred.password}
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <input type="submit" name="" id="" />
      </form>
    </div>
  );
};
