import axios from "axios";
import { useState } from "react";
import { ShowStatus } from "./show";

export const Login = () => {
  const [cred, setCred] = useState({ email: "", password: "" });
  const [content, setContent] = useState();

  const handleChange = (e) => {
    setCred({ ...cred, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://reqres.in/api/login", cred).then((res) => {
      setContent(res.data.token);
      setCred({ email: "", password: "" });
    });
    setContent(null);
  };

  return (
    <div>
      <h1>Login</h1>
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
      <ShowStatus content={content} />
    </div>
  );
};