<script setup>
import { computed } from "vue";
import { formatter } from "../helpers.js";

const props = defineProps({
  image: String,
  title: String,
  description: String,
  color: String,
  quantity: Number,
  price: Number,
});

const formattedPrice = computed(() => {
  return formatter.format(props.price / 100);
});
</script>

<template>
  <div class="py-2">
    <div class="flex flex-row space-x-4">
      <img :src="image" :alt="title" class="w-24 h-32" />
      <div class="flex flex-col text-left text-neutral-400">
        <h4 class="text-neutral-900 font-medium text-base">{{ title }}</h4>
        <p class="text-sm">{{ description }}</p>
        <div class="pt-2 text-sm">
          <p>Color: {{ color }}</p>
          <p>Quantity: {{ quantity }}</p>
          <p>Price: {{ formattedPrice }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
