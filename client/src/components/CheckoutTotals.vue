<script setup>
import CheckoutTotalsLine from "./CheckoutTotalsLine.vue";

defineProps({
  subtotal: Number,
  estimatedShipping: Number,
  estimatedTax: Number,
  total: Number,
});
</script>
<template>
  <div class="py-2">
    <checkout-totals-line description="Subtotal" :price="subtotal" />
    <checkout-totals-line description="Estimated Shipping" />
    <checkout-totals-line description="Estimated Tax" />
  </div>
  <checkout-totals-line
    class="font-semibold text-emerald-500 text-lg"
    description="TOTAL"
    :price="subtotal"
  />
</template>
