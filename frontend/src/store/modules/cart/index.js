//Update local storage with changes
function updateLocalStorage(cart, customIndex) {
  localStorage.setItem("cart", JSON.stringify(cart));
  if (cart.length) {
    localStorage.setItem("customIndex", JSON.stringify(customIndex));
  } else {
    localStorage.setItem("customIndex", JSON.stringify(0));
  }
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
    else return 0;
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
    const products = state.cart.filter((i) => !i.customizable);
    const configs = state.cart.filter((i) => i.customizable);
    let total = 0;
    for (const product of products) {
      console.log(product);
      total = total + product.price * product.quantity;
    }
    for (const config of configs) {
      var configTotal = config.configuration.reduce(
        (a, b) => a + b.price * b.quantity,
        0
      );
      total = total + configTotal + config.price;
    }
    return total;
  },

  //Retur toal of configuration
  configurationTotal: (state) => (configId) => {
    const item = state.cart.find((i) => i.configurationID === configId);
    if (item)
      return item.configuration.reduce((a, b) => a + b.price * b.quantity, 0);
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

  getDimensions: (state) => (configId) => {
    const item = state.cart.find((i) => i.configurationID === configId);
    var response = {};
    if (item.height) {
      response.height = item.height;
    } else {
      response.height = null;
    }
    if (item.width) {
      response.width = item.width;
    } else {
      response.width = null;
    }
    if (item.depth) {
      response.depth = item.depth;
    } else {
      response.depth = null;
    }
    return response;
  },

  getMaterial: (state) => (configId) => {
    const item = state.cart.find((i) => i.configurationID === configId);
    var material = item.configuration.filter(
      (i) => i.selectableCategory === "material"
    );
    return material[0];
  },

  getAccessories: (state) => (configId) => {
    const item = state.cart.find((i) => i.configurationID === configId);
    var accessories = item.configuration.filter(
      (i) => i.selectableCategory === "accessories"
    );
    return accessories;
  },
};

const mutations = {
  //Add product to cart
  addToCart(state, payload) {
    if (payload.product.customizable) {
      state.cart.push({
        ...payload.product,
        configurationID: payload.configId,
        configuration: [],
        quantity: 1,
      });
    } else {
      let item = state.cart.find((i) => i.id === payload.product.id);
      if (item) {
        item.quantity++;
      } else {
        state.cart.push({
          ...payload.product,
          configurationID: "none",
          quantity: 1,
          height: 0,
          width: 0,
          depth: 0,
        });
      }
    }

    updateLocalStorage(state.cart, state.customIndex);
  },

  //Bump index for custom products
  bumpCustomIndex(state) {
    state.customIndex = state.customIndex + 1;

    updateLocalStorage(state.cart, state.customIndex);
  },

  //Add configuration to product
  addToConfiguration(state, payload) {
    let item = state.cart.find((i) => i.configurationID === payload.configId);
    if (payload.interior.selectableCategory === "interior") {
      let part = item.configuration.find((a) => a.id === payload.interior.id);
      if (part) {
        part.quantity++;
      } else {
        item.configuration.push({ ...payload.interior, quantity: 1 });
      }
    } else if (payload.interior.selectableCategory === "material") {
      item.configuration = item.configuration.filter(
        (i) => i.selectableCategory !== "material"
      );
      item.configuration.push({ ...payload.interior, quantity: 1 });
    } else if (payload.interior.selectableCategory === "accessories") {
      let accessory = item.configuration.find(
        (a) => a.id === payload.interior.id
      );
      if (accessory) {
        item.configuration = item.configuration.filter(
          (i) => i.selectableCategory !== "accessories"
        );
      } else {
        item.configuration.push({ ...payload.interior, quantity: 1 });
      }
    } else {
      console.log("ERROR Adding item");
    }

    updateLocalStorage(state.cart, state.customIndex);
  },

  //Remove item from cart
  removeFromCart(state, payload) {
    if (payload.product.customizable) {
      state.cart = state.cart.filter(
        (i) => i.configurationID !== payload.configId
      );
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

    updateLocalStorage(state.cart, state.customIndex);
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
    updateLocalStorage(state.cart, state.customIndex);
  },

  //Delete Shopping Cart after checkout
  cleanCart(state) {
    state.cart = [];
    state.customIndex = 0;

    updateLocalStorage(state.cart, state.customIndex);
  },

  //Update height of product
  updateHeight(state, payload) {
    //let items = state.cart.filter((i) => i.id === payload.product.id)
    let item = state.cart.find((i) => i.configurationID === payload.configId);
    item.height = payload.height;

    updateLocalStorage(state.cart, state.customIndex);
  },

  //Update width of product
  updateWidth(state, payload) {
    //let items = state.cart.filter((i) => i.id === payload.product.id)
    let item = state.cart.find((i) => i.configurationID === payload.configId);
    item.width = payload.width;

    updateLocalStorage(state.cart, state.customIndex);
  },

  //Update depth of product
  updateDepth(state, payload) {
    //let items = state.cart.filter((i) => i.id === payload.product.id)
    let item = state.cart.find((i) => i.configurationID === payload.configId);
    item.depth = payload.depth;

    updateLocalStorage(state.cart, state.customIndex);
  },

  //Manually use local storage. If Vue-Persistentstate is implemented this can be deleted
  updateCartFromLocalStorage(state) {
    const cart = localStorage.getItem("cart");
    if (cart) {
      state.cart = JSON.parse(cart);
    }
    const customIndex = localStorage.getItem("customIndex");
    if (customIndex) {
      state.customIndex = JSON.parse(customIndex);
    }
  },
};

const actions = {};

export default { state, getters, mutations, actions };
