<template>
  <h1 class="text-2xl uppercase pb-2">Checkout</h1>
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
  const response = await fetch("/api/shopping-cart").then((r) => r.json());
  cart.value = response.cart;
});

// Click handler for button
const redirectToStripe = async () => {
  isLoading.value = true;

  const response = await fetch("/api/create-checkout-session", {
    method: "POST",
  });
  const { url } = await response.json();

  window.location.href = url;
};
</script>
