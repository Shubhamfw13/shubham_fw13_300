import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { LoginData } from "../../Redux/Auth/AuthAction";
import { mobile } from "../../Responsive/responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(1, 0, 0, 0.822), rgba(255, 255, 255, 0.244)),
    url("https://images.hdqwalls.com/wallpapers/video-games-collage-wide.jpg")
      center;
  background-size: cover;
  display: flex;
  color: white;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  background: linear-gradient(rgba(1, 0, 0, 0.822), rgba(255, 255, 255, 0.244)),
    url("https://images.hdqwalls.com/wallpapers/video-games-collage-wide.jpg")
      center;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  const navigate = useNavigate();
  const { loading, error, accessToken } = useSelector((state) => state.auth);
  const [value, setValue] = useState({ email: "", password: "" });
  const { email, password } = value;

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(LoginData(email, password));
  };
  // useEffect(()=>{

  // })

  return (
    <>
      <Container>
        <Wrapper>
          <Title>SIGN IN</Title>
          <Form>
            <input
              style={{ padding: 10, marginBottom: 20 }}
              type="text"
              placeholder="E-Mail"
              value={email}
              onChange={(e) => setValue({ ...value, email: e.target.value })}
            />
            <input
              style={{ padding: 10, marginBottom: 20 }}
              type="text"
              placeholder="Password"
              value={password}
              onChange={(e) => setValue({ ...value, password: e.target.value })}
            />
            <Button onClick={handleSubmit}>LOGIN</Button>
            <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
            <Link>CREATE A NEW ACCOUNT</Link>
          </Form>
        </Wrapper>
      </Container>
    </>
  );
};

export default Login;
