import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import i18n from "./i18n";
import axios from "axios";
import VueAxios from "vue-axios";
import 'bootstrap'

import LoadScript from "vue-plugin-load-script";

import "@/assets/css/tailwind.css";
import "@/assets/css/main.css";

/*
if (process.env.NODE_ENV === 'production') {
    axios.defaults.baseURL = '//cablecard-cct-backend.eu-de.mybluemix.net'
  } else {
    axios.defaults.baseURL = '//localhost:4000/'
  }
*/
axios.defaults.baseURL = '//localhost:4000/'

createApp(App).use(i18n).use(store).use(router).use(LoadScript).use(VueAxios, axios).mount("#app");

LoadScript(
    "https://unpkg.com/@lottiefiles/lottie-player@0.4.0/dist/lottie-player.js"
);
LoadScript(
    "https://unpkg.com/@lottiefiles/lottie-interactivity@latest/dist/lottie-interactivity.min.js"
);