import { createStore } from "vuex";

export default createStore({
  state: {
    currency: 'de' //TO-DO: Change start-state to i18n global loacal
  },
  getters: {
    getCurrency(state) {
      return state.currency;
    }
  },
  mutations: { //synchronous
    setCurrency(state, value) {
      state.currency = value
    }
  },
  actions: { //async for api etc.

  },
  modules: {}, //child stores
});
