//Update local storage with changes
function updateLocalStorage(cart) {
    localStorage.setItem('cart', JSON.stringify(cart))
}

const state = {
    cart: []
}

const getters = {
    //Get quantitiy of a product
    productQuantity: state => product => {
        const item = state.cart.find(i => i.id === product.id)
  
        if (item) return item.quantity
        else return null
    },

    //Return ttems in cart
    cartItems: state => {
        return state.cart
    },

    //Return total of cart
    cartTotal: state => {
        return state.cart.reduce((a, b) => a + (b.price * b.quantity), 0)
    },

    //Return number of items
    cartNumberItems: state => {
        return state.cart.reduce((a, b) => a + (b.quantity), 0)
    }
}

const mutations = {
    //Add product to cart
    addToCart (state, product) {
        let item = state.cart.find( i => i.id === product.id)
  
        if (item) {
          item.quantity++
        } else {
          state.cart.push({...product, quantity: 1})
        }
  
        updateLocalStorage(state.cart)
    },

    //Remove item from cart
    removeFromCart ( state, product) {
        let item = state.cart.find( i => i.id === product.id)
  
        if (item) {
            if (item.quantity > 1) {
                item.quantity--
            } else {
                state.cart = state.cart.filter( i => i.id !== product.id)
            }
        }
  
        updateLocalStorage(state.cart)
    },

    //Manually use local storage. If Vue-Persistentstate is implemented this can be deleted
    updateCartFromLocalStorage(state) {
        const cart = localStorage.getItem('cart')
        if (cart) {
            state.cart = JSON.parse(cart)
        }
    }
}

const actions = {}

export default { state, getters, mutations, actions }