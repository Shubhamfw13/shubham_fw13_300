
const router = require("express").Router()
const Cart = require("../models/cartModel");
const stripe = require('stripe')(process.env.STRIPE)

router.get("/checkout/:user_id",async (req,res)=>{
    const user_id = req.params.user_id;
    const cart  =await Cart.findOne({user_id}).exec()
    try{
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
            success_url: `https://gamersparadise.vercel.app/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: 'https://gamersparadise.vercel.app/checkout/failed?session_id={CHECKOUT_SESSION_ID}',
            billing_address_collection: "required"
          });
        res.send({url:session.url})
    } else {
        res.send({err: "No item in cart"},404)
    }
    }catch(err){
      res.status(500).send({Error:err.messsage})
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