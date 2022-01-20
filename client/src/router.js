import { nextTick } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import Checkout from "./views/VsCheckout.vue";
import Success from "./views/VsSuccess.vue";

const history = createWebHistory();
const routes = [
  {
    path: "/success",
    name: "Success",
    component: Success,
    meta: { title: "Thank you" },
  },
  {
    path: "/:pathMatch(.*)",
    name: "Checkout",
    component: Checkout,
    meta: { title: "Checkout Demo" },
  },
];

const router = createRouter({ history, routes });
router.afterEach((to, from, failure) => {
  nextTick(() => {
    document.title = to.meta.title || "🚀 Payments Demo";
  });
});

export default router;
