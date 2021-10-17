import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import i18n from "./i18n";

import LoadScript from "vue-plugin-load-script";

import "@/assets/css/tailwind.css";

createApp(App).use(i18n).use(store).use(router).use(LoadScript).mount("#app");

LoadScript(
  "https://unpkg.com/@lottiefiles/lottie-player@0.4.0/dist/lottie-player.js"
);
LoadScript(
  "https://unpkg.com/@lottiefiles/lottie-interactivity@latest/dist/lottie-interactivity.min.js"
);
