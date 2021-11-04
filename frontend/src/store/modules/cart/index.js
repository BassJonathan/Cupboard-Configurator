//Update local storage with changes
function updateLocalStorage(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

const state = {
  cart: [],
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
    const item = state.cart.find((i) => i.id === payload.product.id);
    const part = item.configuration.find((a) => a.id === payload.interior.id);

    if (part) return part.quantity;
    else return null;
  },

  //Return items in cart
  cartItems: (state) => {
    return state.cart;
  },

  //Return configuration of item
  itemConfiguration: (state) => (product) => {
    const item = state.cart.find((i) => i.id === product.id);
    if (item) return item.configuration;
    else return null;
  },

  //Return total of cart
  cartTotal: (state) => {
    return state.cart.reduce((a, b) => a + b.price * b.quantity, 0);
  },

  //Retur toal of configuration
  configurationTotal: (state) => (product) => {
    const item = state.cart.find((i) => i.id === product.id);
    console.log(item)
    return item.configuration.reduce((a, b) => a + b.price * b.quantity, 0);
  },

  //Return number of items
  cartNumberItems: (state) => {
    return state.cart.reduce((a, b) => a + b.quantity, 0);
  },
};

const mutations = {
  //Add product to cart
  addToCart(state, product) {
    let item = state.cart.find((i) => i.id === product.id);
    console.log (this.item)
    if (item) {
      item.quantity++;
    } else {
      if (product.customizable) {
        state.cart.push({ ...product, quantity: 1, configuration: [] });
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }
    }

    updateLocalStorage(state.cart);
  },

  //Add configuration to product
  addToConfiguration(state, payload) {
    let item = state.cart.find((i) => i.id === payload.product.id);
    let part = item.configuration.find((a) => a.id === payload.interior.id);
    
    if (part) {
      part.quantity++;
    } else {
      item.configuration.push({ ...payload.interior, quantity: 1});
    }

    updateLocalStorage(state.cart);
  },

  //Remove item from cart
  removeFromCart(state, product) {
    let item = state.cart.find((i) => i.id === product.id);

    if (item) {
      if (item.quantity > 1) {
        item.quantity--;
      } else {
        state.cart = state.cart.filter((i) => i.id !== product.id);
      }
    }

    updateLocalStorage(state.cart);
  },

  //Remove configuration to product
  removeFromConfiguration(state, payload) {
    let item = state.cart.find((i) => i.id === payload.product.id);
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
    let item = state.cart.find((i) => i.id === payload.product.id);
    item.height = payload.height;

      updateLocalStorage(state.cart);
  },

  //Update width of product
  updateWidth(state, payload) {
    let item = state.cart.find((i) => i.id === payload.product.id);
    item.width = payload.width;

      updateLocalStorage(state.cart);
  },

  //Update depth of product
  updateDepth(state, payload) {
    let item = state.cart.find((i) => i.id === payload.product.id);
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
