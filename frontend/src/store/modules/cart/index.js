//Update local storage with changes
function updateLocalStorage(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

const state = {
  cart: [],
  customIndex: 0,
};

const getters = {
  //Get quantitiy of a product
  productQuantity: (state) => (product) => {
    const item = state.cart.find((i) => i.id === product.id);

    if (item) return item.quantity;
    else return null;
  },

  //Get quantity of a configuration item
  itemQuantity: (state) => (payload) => {
    const item = state.cart.find((i) => i.configurationID === payload.configId);
    const part = item.configuration.find((a) => a.id === payload.interior.id);

    if (part) return part.quantity;
    else return null;
  },

  //Return items in cart
  cartItems: (state) => {
    return state.cart;
  },

  //Return configuration of item
  itemConfiguration: (state) => (configId) => {
    const item = state.cart.find((i) => i.configurationID === configId);
    if (item) return item.configuration;
    else return null;
  },

  //Return total of cart
  cartTotal: (state) => {
    return state.cart.reduce((a, b) => a + b.price * b.quantity, 0);
  },

  //Retur toal of configuration
  configurationTotal: (state) => (configId) => {
    const item = state.cart.find((i) => i.configurationID === configId);
    if (item) return item.configuration.reduce((a, b) => a + b.price * b.quantity, 0);
    else return null;
    
  },

  //Return number of items
  cartNumberItems: (state) => {
    return state.cart.reduce((a, b) => a + b.quantity, 0);
  },

  getCustomProducts: (state) => {
    return state.cart.filter((i) => i.customizable);
  },

  getCustomIndex: (state) => {
    return state.customIndex;
  },
};

const mutations = {
  //Add product to cart
  addToCart(state, payload) {
    if (payload.product.customizable) {
      state.cart.push({ ...payload.product, configurationID: payload.configId, configuration: [] });
    } else {
      let item = state.cart.find((i) => i.id === payload.product.id);
      if (item) {
        item.quantity++;
      } else {
        state.cart.push({ ...payload.product, configurationID: "none", quantity: 1 });
      }
    }

    updateLocalStorage(state.cart);
  },

  //Bump index for custom products
  bumpCustomIndex(state) {
    state.customIndex = state.customIndex + 1;
  },

  //Add configuration to product
  addToConfiguration(state, payload) {
    let item = state.cart.find((i) => i.configurationID === payload.configId);
    if (payload.interior.selectableCategory === 'interior') {
      console.log(item)
      let part = item.configuration.find((a) => a.id === payload.interior.id);
    
      if (part) {
        part.quantity++;
      } else {
        item.configuration.push({ ...payload.interior, quantity: 1});
      }
    } else if (payload.interior.selectableCategory === 'material') {
      console.log(item)
      item.configuration = item.configuration.filter((i) => i.selectableCategory !== 'material');
      item.configuration.push({ ...payload.interior, quantity: 1})
    } else if (payload.interior.selectableCategory === 'accessories') {
      let accessory = item.configuration.find((a) => a.id === payload.interior.id);
      if (accessory) {
        item.configuration = item.configuration.filter((i)=> i.selectableCategory !== 'accessories');
      } else {
        item.configuration.push({ ...payload.interior, quantity: 1})
      }
    } else {
      console.log("ERROR Adding item")
    }

    updateLocalStorage(state.cart);
  },

  //Remove item from cart
  removeFromCart(state, payload) {
    if (payload.product.customizable) {
      state.cart = state.cart.filter((i) => i.configurationID !== payload.configId)
    } else {
      let item = state.cart.find((i) => i.id === payload.product.id);
      if (item) {
        if (item.quantity > 1) {
          item.quantity--;
        } else {
          state.cart = state.cart.filter((i) => i.id !== payload.product.id);
        }
      }
    }

    updateLocalStorage(state.cart);
  },

  //Remove configuration to product
  removeFromConfiguration(state, payload) {
    let item = state.cart.find((i) => i.configurationID === payload.configId);
    let part = item.configuration.find((a) => a.id === payload.interior.id);
      
    if (part) {
      if (part.quantity > 1) {
        part.quantity--;
      } else {
        item.configuration = item.configuration.filter((i) => i.id !== part.id);
      }
    }
      updateLocalStorage(state.cart);
  },

  //Update height of product
  updateHeight(state, payload) {
    //let items = state.cart.filter((i) => i.id === payload.product.id)
    let item = state.cart.find((i) => i.configurationID === payload.configId);
    item.height = payload.height;

      updateLocalStorage(state.cart);
  },

  //Update width of product
  updateWidth(state, payload) {
    //let items = state.cart.filter((i) => i.id === payload.product.id)
    let item = state.cart.find((i) => i.configurationID === payload.configId);
    item.width = payload.width;

      updateLocalStorage(state.cart);
  },

  //Update depth of product
  updateDepth(state, payload) {
    //let items = state.cart.filter((i) => i.id === payload.product.id)
    let item = state.cart.find((i) => i.configurationID === payload.configId);
    item.depth = payload.depth;

      updateLocalStorage(state.cart);
  },

  //Manually use local storage. If Vue-Persistentstate is implemented this can be deleted
  updateCartFromLocalStorage(state) {
    const cart = localStorage.getItem("cart");
    if (cart) {
      state.cart = JSON.parse(cart);
    }
  },
};

const actions = {};

export default { state, getters, mutations, actions };
