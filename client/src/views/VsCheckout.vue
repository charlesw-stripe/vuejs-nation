<template>
  <checkout-summary :cart="cart" />
  <checkout-button :isLoading="isLoading" @click="redirectToStripe" />
</template>
<script setup>
import { ref, onBeforeMount } from "vue";
import CheckoutSummary from "../components/CheckoutSummary.vue";
import CheckoutButton from "../components/CheckoutButton.vue";

// Reactive data
const isLoading = ref(false);
const cart = ref([]);

// Get the cart data
onBeforeMount(async () => {
  const response = await fetch("/api/shopping-cart");
  const body = await response.json();
  cart.value = body.cart;
});

// Click handler for button
const redirectToStripe = async () => {
  isLoading.value = true;
  try {
    const response = await fetch("/api/create-checkout-session", {
      method: "POST",
    });
    const { url, error } = await response.json();

    if (error) {
      isLoading.value = false;
      console.log("Checkout error: ", error);
      return;
    }

    window.location.href = url;
  } catch (e) {
    isLoading.value = false;
    console.log("Error: ", e);
  }
};
</script>
