<script setup>
import { ref, computed } from "vue";
import { formatter } from "../helpers.js";

const props = defineProps({
  description: String,
  price: Number,
});

const formattedPrice = computed(() => {
  if (props.price) {
    return formatter.format(props.price / 100);
  } else {
    return "Calculated at next step";
  }
});
</script>

<template>
  <div class="flex flex-row justify-between text-sm">
    <div>{{ props.description }}</div>
    <div>{{ formattedPrice }}</div>
  </div>
</template>
