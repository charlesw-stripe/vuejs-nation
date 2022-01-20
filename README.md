# Accept payments using Vue 3, Express.js and Stripe Checkout

This sample shows you how to integrate with Stripe [Checkout](https://stripe.com/docs/checkout) using Vue 3 and Express.js.

Building a payment form UI from scratch is difficult -- input field validation, error message handing, and localization are just a few things to think about when designing a simple checkout flow.

[Checkout](https://stripe.com/docs/payments/checkout) is a Stripe-hsosted payment form that does the hard work for you so that you can focus on building the best storefront experience for your customers.

Once your customer is ready to pay, use the Stripe Checkout API to redirect them to the URL of your Stripe hosted payment page.

## Demo
The demo is running in test mode -- use `4242424242424242` as a test card number with any CVC + future expiration date.

Use the `4000002500003155` test card number to trigger a 3D Secure challenge flow.

## How to use this demo

### Setup steps in `server/`

1. Register for a free [Stripe account](https://dashboard.stripe.com/register) if you don't have one.
2. Create a .env file using the .env.example template
1. Add your Stripe secret key, which you can get from the [Stripe dashboard](https://dashboard.stripe.com)
4. Create products using the product information in `USER_SHOPPING_CART` using the [Stripe dashboard](https://dashboard.stripe.com) or Products and Prices API
1. Replace the {{PRODUCT_ID}} with test Stripe Price IDs in server.js
5. Optional: Update the URL for the `success_url` and `cancel_url` parameters in server.js, if you've changed the default port for Vite (3000)

### Setup steps in `client/`

1. Optional: Update vite.config.js to another use a different address/port if you're using a backend server other than express or have changed the port.
