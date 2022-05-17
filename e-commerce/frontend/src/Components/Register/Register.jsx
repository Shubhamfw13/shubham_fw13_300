import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { RegisterData } from "../../Redux/Auth/AuthAction";
import { mobile } from "../../Responsive/responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(1, 0, 0, 0.822), rgba(255, 255, 255, 0.244)),
    url("https://images.hdqwalls.com/wallpapers/video-games-collage-wide.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  background: linear-gradient(rgba(1, 0, 0, 0.822), rgba(255, 255, 255, 0.244)),
    url("https://images.hdqwalls.com/wallpapers/video-games-collage-wide.jpg")
      center;
  width: 40%;
  padding: 20px;
  color: white;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  const { loading, error, register } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [value, setValue] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { username, email, password } = value;

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(RegisterData(value.username, value.email, value.password));
  };

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input
            value={username}
            onChange={(e) => setValue({ ...value, username: e.target.value })}
            placeholder="username"
          />
          <Input
            value={email}
            onChange={(e) => setValue({ ...value, email: e.target.value })}
            placeholder="email"
          />
          <Input
            value={password}
            onChange={(e) => setValue({ ...value, password: e.target.value })}
            placeholder="password"
          />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button onClick={handleSubmit}>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
