<template>
  <checkout-summary :cart="cart" />
  <checkout-button :isLoading="isLoading" @click="" />
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
  const response = await fetch("/api/create-checkout-session", {
    method: "POST",
  });
  const { url } = await response.json();

  window.location.href = url;
  isLoading.value = false;
};
</script>
