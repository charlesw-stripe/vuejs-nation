<template>
  <a :href="href">
    <img
      :alt="alt"
      :src="src"
      width="30"
      height="30"
      class="hover:scale-110 transition-transform duration-300"
    />
  </a>
</template>
<script setup>
defineProps({
  alt: String,
  src: String,
  href: String,
});
</script>
