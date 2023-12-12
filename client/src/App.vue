<template>
  <div
    class="container mt-2 mx-auto w-1/2 text-center flex flex-col h-screen justify-between py-6"
  >
    <router-link to="/">
      <span class="text-xs"> Restart demo </span>
    </router-link>
    <div class="mt-2">
      <router-view></router-view>
    </div>
    <div class="self-center flex flex-row gap-4 items-baseline">
      <a href="https://github.com/cwatkins/vuejs-stripe">
        <img
          alt="Github logo"
          src="src/assets/github-mark.svg"
          width="30"
          height="30"
        />
      </a>
      <a href="https://twitter.com/charlesw_dev">
        <img
          alt="Twitter logo"
          src="src/assets/twitter-logo.svg"
          width="30"
          height="30"
        />
      </a>
      <a href="https://www.linkedin.com/in/wcharlesw/">
        <img
          alt="Twitter logo"
          src="src/assets/linkedin-logo.svg"
          width="30"
          height="30"
        />
      </a>
    </div>
  </div>
</template>
