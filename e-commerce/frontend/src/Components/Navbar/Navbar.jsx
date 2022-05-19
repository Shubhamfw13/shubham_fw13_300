import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Badge } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Logout } from "../../Redux/Auth/AuthAction";
import {  GetDataFromCart} from "../../Redux/Products/action";
import { mobile } from "../../Responsive/responsive";

const Container = styled.div`
  background: linear-gradient(rgba(12, 1, 1, 0.5), rgba(9, 0, 0, 0)),
    url("https://c4.wallpaperflare.com/wallpaper/175/985/284/abstract-3d-digital-art-dark-wallpaper-thumb.jpg")
      center;
  height: 110px;
  font-family: "Aldrich", sans-serif;
  color: white;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Lang = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const InputBox = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  cursor: pointer;
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const Menu = styled.div`
  font-size: 25px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;
const Navbar = () => {
  const navigate = useNavigate();
  const { cart, Action,RPG,items } = useSelector((state) => state.productData);
  console.log("cart",cart.products)
  const {user,accessToken} = useSelector((state)=> state.auth)
  const dispatch = useDispatch()


  const handleLogout = () =>{
    dispatch(Logout())
    dispatch(GetDataFromCart(user.user_id))
  }
 console.log(items)
 

  return (
    <>
      <Container>
        <Wrapper>
          <Left>
            <Lang>EN</Lang>
            <SearchContainer>
              <InputBox />
              <SearchIcon style={{ color: "blue", fontSize: 15 }} />
            </SearchContainer>
          </Left>
          <Center>
            <Logo
              onClick={() => {
                navigate("/");
              }}
            >
              E-Commerce
            </Logo>
          </Center>
          <Right>
            <Menu
              onClick={() => {
                navigate("/register");
              }}
            >
              Register
            </Menu>
            <Menu
              onClick={() => {
                navigate("/login");
              }}
            >
              Sign-In
            </Menu>
            <Menu
              onClick={handleLogout}
            >
              Logout
            </Menu>

            <Menu
              onClick={() => {
                navigate("/cart");
              }}
            >
              <Badge badgeContent={items?items.length:0} color="primary">
                <ShoppingCartIcon />
              </Badge>
            </Menu>
          </Right>
        </Wrapper>
      </Container>
    </>
  );
};

export default Navbar;
