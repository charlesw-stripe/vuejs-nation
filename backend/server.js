// Initialize Express framework
const express = require("express");
const app = express();

require("dotenv").config({ path: "./.env" });
// Initialize Stripe Node library
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

/**
 * Our cart data with the Stripe ID.
 * This would generally be saved in a database.
 */
const USER_SHOPPING_CART = [
  {
    id: 1,
    stripePriceId: "price_1KIjrrIxbMEkLtTy9YjmxjhC", // Replace with a Price ID from your Stripe Dashboard
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    title: "Fjallraven - Foldsack No. 1 Backpack",
    description: "Your perfect pack for everyday use and walks in the forest.",
    color: "Navy",
    quantity: 1,
    price: 10995,
  },
  {
    id: 2,
    stripePriceId: "price_1KJU3vIxbMEkLtTy7MeENvG5", // Replace with a Price ID from your Stripe Dashboard
    image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
    title: "MBJ Women's Solid Short Sleeve Boat Neck V",
    description:
      "Made in USA. Lightweight fabric with great stretch for comfort.",
    color: "White",
    quantity: 2,
    price: 985,
  },
];

// Data for the cart
app.get("/shopping-cart", (req, res) => {
  res.send({ cart: USER_SHOPPING_CART });
});

// Create a Checkout Session
app.post("/create-checkout-session", async (req, res) => {
  // Make an array of just our Stripe Price ID and quantities
  const lineItems = USER_SHOPPING_CART.map((item) => {
    return {
      price: item.stripePriceId,
      quantity: item.quantity,
    };
  });

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: lineItems,
    success_url: `http://localhost:3000/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `http://localhost:3000/`,
  });
  res.send({ url: session.url });
});

app.listen(4242, () => console.log(`Node server listening on port ${4242}!`));