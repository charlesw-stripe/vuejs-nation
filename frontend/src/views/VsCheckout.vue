<template>
  <checkout-summary :cart="cart" />
  <checkout-button :isLoading="isLoading" @click="redirectToStripe" />
  <div v-if="errorMessage" class="text-lg text-rose-700 font-semibold">
    Error: {{ errorMessage }}
  </div>
</template>
<script setup>
import { ref, onBeforeMount } from "vue";
import CheckoutSummary from "../components/CheckoutSummary.vue";
import CheckoutButton from "../components/CheckoutButton.vue";
// Reactive data
const isLoading = ref(false);
const cart = ref([]);
const errorMessage = ref(null);

// Get the cart data
onBeforeMount(async () => {
  const response = await fetch("/api/shopping-cart");
  const body = await response.json();
  cart.value = body.cart;
});

// Click handler for button
const redirectToStripe = async () => {
  errorMessage.value = null;
  isLoading.value = true;
  try {
    const response = await fetch("/api/create-checkout-session", {
      method: "POST",
    });
    const { url, error } = await response.json();

    if (error) {
      isLoading.value = false;
      errorMessage.value = error;
      console.log("Checkout error: ", error);
      return;
    }

    window.location.href = url;
    isLoading.value = false;
  } catch (e) {
    isLoading.value = false;
    errorMessage.value = "An unexpected error occured.";
    console.log("Error: ", e);
  }
};
</script>
