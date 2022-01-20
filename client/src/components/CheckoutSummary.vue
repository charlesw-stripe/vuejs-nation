<template>
  <section class="border">
    <h2 class="text-base uppercase bg-zinc-100 px-12">In Your Bag</h2>
    <div class="px-12 pt-2 pb-4">
      <h3 class="font-semibold uppercase text-left">Arrives Feb 1, 2022</h3>
      <hr />
      <checkout-product
        v-for="item in props.cart"
        :key="item.id"
        :image="item.image"
        :title="item.title"
        :description="item.description"
        :color="item.color"
        :quantity="item.quantity"
        :price="item.price"
      />
      <hr />
      <checkout-totals
        :subtotal="total"
        :estimatedShipping="0"
        :estimatedTax="0"
        :total="total"
      />
    </div>
  </section>
</template>

<script setup>
import { toRefs, computed } from "vue";
import CheckoutProduct from "./CheckoutProduct.vue";
import CheckoutTotals from "./CheckoutTotals.vue";

const props = defineProps({
  cart: Array,
});

// Make the cart prop reactive
const cart = toRefs(props).cart;

// Sum cart items
const total = computed(() => {
  return cart.value.map((x) => x.quantity * x.price).reduce((a, b) => a + b, 0);
});
</script>
