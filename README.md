## To use this demo

### Setup steps for server/

1. Register for a free [Stripe account](https://dashboard.stripe.com/register) if you don't have one.
2. Create a .env file using the .env.example template
	1. Add your Stripe secret key, which you can get from the [Stripe dashboard](https://dashboard.stripe.com)
4. Create products using the product information in `USER_SHOPPING_CART` using the [Stripe dashboard](https://dashboard.stripe.com) or Products and Prices API
	1. Replace the {{PRODUCT_ID}} with test Stripe Price IDs in server.js
5. Optional: Update the URL for the `success_url` and `cancel_url` parameters in server.js, if you've changed the default port for Vite (3000)

## Setup steps for client/

1. Optional: update vite.config.js to another use a different address/port if you're using a backend server other than express or have changed the port.
