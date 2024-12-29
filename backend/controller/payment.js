const express = require("express");
const router = express.Router();
const dotenv = require("dotenv");
 
dotenv.config();
 
const stripe = require("stripe")(process.env.SECRET_KEY);
 
router.post("/", async (req, res) => {
  const { products, totalPrice, user, cargoFee } = req.body;
 
  const lineItems = products.map((product) => ({
    price_data: {
      currency: "usd",
      product_data: {
        name: product.name,
      },
      unit_amount: Math.round(product.price * 100),
    },
    quantity: product.quantity,
  }));
 
  try {
    const session = await stripe.checkout.sessions.create({
      customer_email: user.email,
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `http://localhost:3000/`,
      cancel_url: "http://localhost:3000/",
    });
 
    res.status(200).json({ id: session.id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Sunucu hatası..." });
  }
});
 
module.exports = router;