
const router = require("express").Router()
const Cart = require("../models/cartModel");
const stripe = require('stripe')('sk_test_51KymyFSFIYZMWCqFPxW8a41EzeWKiBnQzj1CD6Mn2fRfFQW85DUdXIofFebrJzou9ZMFSVRSvYLnmOMD63y5s5Iq00otuOk0bw')

router.get("/checkout/:user_id",async (req,res)=>{
    const user_id = req.params.user_id;
    const cart  =await Cart.findOne({user_id}).exec()
    if(cart.products){
       
        const session = await stripe.checkout.sessions.create({
            line_items: cart.products.map((item,i)=>({
                price_data: {
                  currency: 'inr',
                  product_data: {
                    name:  `Game ${i+1}`,
                  },
                  unit_amount:  item.price * 100,
                },
                quantity: item.quantity ,
              })),
            mode: 'payment',
            success_url: `http://localhost:3000/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: 'http://localhost:3000/checkout/failed?session_id={CHECKOUT_SESSION_ID}',
            billing_address_collection: "required"
          });
        res.send({url:session.url})
    } else {
        res.send({err: "No item in cart"},404)
    }
})


router.get('/success', async (req, res) => {
    try {

        const session = await stripe.checkout.sessions.retrieve(req.query.session_id);
       
        res.send({session});
    } catch(e) {
        console.log(e)
        res.send("Something went wrong try again").status(500)
    }
  });
  


module.exports = router