import { createStore } from "vuex";

import cart from "./modules/cart";

export default createStore({
  state: {
    currency: "de", //TO-DO: Change start-state to i18n global loacal
    taxRate: 0.19,
  },
  getters: {
    getCurrency(state) {
      return state.currency;
    },
    getTaxRate(state) {
      return state.taxRate;
    },
  },
  mutations: {
    //synchronous
    setCurrency(state, value) {
      state.currency = value;
    },
    setTax(state, value) {
      if (value == "de") {
        state.taxRate = 0.19;
      } else if (value == "a") {
        state.taxRate = 0.2;
      } else if (value == "ch") {
        state.taxRate = 0.77;
      } else if (value == "en") {
        state.taxRate = 0;
      } else if (value == "fr") {
        state.taxRate = 0.2;
      } else if (value == "it") {
        state.taxRate = 0.22;
      } else {
        state.taxRate = 0;
      }
    },
  },
  actions: {
    //async for api etc.
  },
  modules: {
    //child stores
    cart,
  },
});
