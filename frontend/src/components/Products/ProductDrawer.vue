<template>
    <div>
        <div class="drawer_background" :class="{show: active}" @click="$emit('close-product-drawer')"></div>

        <div :class="{show: active}" class="drawer">
            <div class="drawer-close text-center1" @click="$emit('close-product-drawer')">X</div>

            <div v-if="product" class="product-details">
                <h3 class="text-center1">{{ product.name }}</h3>
                <p class="text-center1">{{ product.price }}</p>

                <div class="cart-total" v-if="product_total">
                    <h3>In Cart</h3>
                    <h4>{{ product_total }}</h4>
                </div>
                <div class="button-container">
                    <button type="button" class="btn btn-danger" @click="removeFromCart()">Remove</button>
                    <button type="button" class="btn btn-success" @click="addToCart()">Add</button>
                </div>
            </div>
        </div>

      
    </div>
</template>

<script>
export default {
    name: "ProductDrawer",
    props: ["product", "active"],
    computed: {
        product_total() {
            return this.$store.getters.productQuantity(this.product)
        }
    },
    methods: {
        addToCart() {
            this.$store.commit('addToCart', this.product)
        },
        removeFromCart() {
            this.$store.commit('removeFromCart', this.product)
        }
    }
}
</script>

<style lang="scss">
.drawer_background {
    position: fixed;
    height: 100vh;
    width: 100%;
    left: 0;
    top: 0;
    background-color: rgba(124, 124, 124, 0.55);
    z-index: 1000;
    display: none;
    transition: display .5s;
    
    &.show {
        display: block;
    }
}

.text-center1 {
    text-align: center;
    color: black !important;
}

.drawer {
    width: 95vw;
    height: 100vh;
    background-color: white;
    position: fixed;
    top: 0;
    left: -150vw;
    padding: 15px;
    transition: left .5s;
    z-index: 1001;
    overflow-y: scroll;

    &.show {
        left: 0;
    }
}

.drawer-close {
    font-size: 1.5rem;
    padding: 5px;
    border-radius: 5px;
    right: 10px;
    border: 2px solid gray;
    color: gray;
    width: 150px;
    float: right;
    cursor: pointer;

    &:hover {
        background-color: lightgray;
    }
}

.product-details {
display: flex;
justify-content: center;
flex-direction: column;

    .button-container {
        button {
            width: 150px;
            border: none;
            padding: 10px;
            border-radius: 5px;
            margin: 0 5px 50px 5px;
            cursor: pointer;
        }
    }
}

@media (min-width: 500px) {
    .drawer {
        width: 450px;
    }
}
</style>