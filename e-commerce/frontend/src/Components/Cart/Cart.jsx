import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import Navbar from "../Navbar/Navbar";
import { deleteCart, GetActionData, GetDataFromCart, GetRpgData } from "../../Redux/Products/action";
import styledcomp from "styled-components";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';


const ParentContainer = styledcomp.div`
  display: flex;
  width: 60%;
  height: 800px;
  margin: auto;
  margin-top: 50px;
  background-color: aliceblue;
`;
const Right = styledcomp.div`
  overflow: scroll;
  flex: 1;
  border: 1px solid lightgrey;
`;
const Left = styledcomp.div`
  flex: 1.2;
  border: 1px solid lightgrey;
`;

const Summary = styledcomp.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styledcomp.h1`
  font-weight: 200;
`;

const SummaryItem = styledcomp.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const SummaryItemText = styledcomp.span``;

const SummaryItemPrice = styledcomp.span``;

const CheckOutButton = styledcomp.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Cart = () => {
  const { cart, Action,RPG } = useSelector((state) => state.productData);
  const { user,accsessToken } = useSelector((state) => state.auth);
  console.log(accsessToken)

  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data,setData] = useState([])



  const deleteItem = (id) => {
    dispatch(deleteCart(id));
    console.log("clicked");
  };

  useEffect(() => {
    dispatch(GetDataFromCart(user._id));
    if(Action.length == 0 || RPG.length == 0){
      dispatch(GetActionData())
      dispatch(GetRpgData())
    }
  }, []);

  useEffect(()=> {
    if(cart.products){
    const action_filter = Action.filter(p=> cart.products.findIndex((cp)=>cp.product_id === p._id) > -1 )
    const rpg_filter = RPG.filter(p=> cart.products.findIndex((cp)=>cp.product_id === p._id) > -1 )
    setData([...action_filter,...rpg_filter])
    }
},[Action,RPG])

  return (
    <>
      <Navbar />
      <ParentContainer>
        <Right>
          <CssBaseline />
          <Container>
            {data.filter(p=> cart.products.findIndex((cp)=>cp.product_id === p._id) > -1 ).map((e) => (
              <Paper
                key={e._id}
                sx={{
                  p: 2,
                  margin: "5px",
                  maxWidth: 500,
                  flexGrow: 1,
                  backgroundColor: (theme) =>
                    theme.palette.mode === "dark" ? "#1A2027" : "#fff",
                }}
              >
                <Grid container spacing={2}>
                  <Grid item>
                    <ButtonBase sx={{ width: 128, height: 128 }}>
                      <Img alt="complex" src={e.image} />
                    </ButtonBase>
                  </Grid>
                  <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                      <Grid item xs>
                        <Typography
                          gutterBottom
                          variant="subtitle1"
                          component="div"
                        >
                          Title : {e.title}
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                          Price : ${e.price}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          ID: {e._id}
                        </Typography>
                        <Typography onClick={() => deleteItem(e.id)} variant="body2" color="text.secondary">
                          Quantity : {cart.products.find((cp)=>cp.product_id === e._id).quantity}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Button onClick={() => deleteItem(e.id)} variant="outlined">Remove Item</Button>
                      </Grid>
                    </Grid>
                    {/* <Grid item>
                    <Typography
                      variant="subtitle1"
                      component="div"
                    >fasdfsd</Typography>
                  </Grid> */}
                  </Grid>
                </Grid>
              </Paper>
            ))}
          </Container>
        </Right>
        <Left>
          <CssBaseline />
          <Container maxWidth="sm">
            <SummaryTitle>CART SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>
                {cart.products && cart.products.reduce((a, b) => a + (b.quantity * b.price), 0).toFixed(2)}
              </SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 15</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>
                {cart.products && cart.products.reduce((a, b) => a + 5 + (b.quantity * b.price), 0)
                  .toFixed(2)}
              </SummaryItemPrice>
            </SummaryItem>
            <CheckOutButton
              onClick={() => {
                navigate(`/checkout`);
              }}
            >
              CHECKOUT NOW
            </CheckOutButton>
          </Container>

        </Left>
      </ParentContainer>
    </>
  );
};

export default Cart;
