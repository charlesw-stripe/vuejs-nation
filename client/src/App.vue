<template>
  <div class="container md:py-4 mx-auto md:w-1/2">
    <div class="flex flex-col h-screen md:grid md:grid-rows-5">
      <header class="flex-2 text-center md:row-span-1">
        <router-link to="/">
          <span class="text-xs"> Restart demo </span>
        </router-link>
      </header>
      <main class="w-full flex-1 md:row-span-3">
        <div class="self-center">
          <router-view></router-view>
        </div>
      </main>
      <footer class="flex-2 md:row-span-1 md:self-end md:my-8">
        <div class="flex flex-row gap-4 items-baseline justify-center">
          <logo-link
            alt="Demo's GitHub repository"
            href="https://github.com/cwatkins/vuejs-stripe"
            src="src/assets/github-mark.svg"
          />
          <logo-link
            alt="Stripe Checkout docs"
            href="https://stripe.com/docs/payments/accept-a-payment"
            src="src/assets/stripe-logo.svg"
          />
          <logo-link
            alt="Charles' Twitter"
            href="https://twitter.com/charlesw_dev"
            src="src/assets/twitter-logo.svg"
          />
          <logo-link
            alt="Charles' LinkedIn"
            href="https://www.linkedin.com/in/wcharlesw/"
            src="src/assets/linkedin-logo.svg"
          />
        </div>
      </footer>
    </div>
  </div>
</template>
<script setup>
import LogoLink from "./components/LogoLink.vue";
</script>
