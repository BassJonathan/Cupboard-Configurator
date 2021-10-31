<template>
    <div class="cart-item-card">
        <h3>Cart Total: {{ cart_total }}</h3>
        <button class="btn btn-success">Checkout</button>
    </div>
</template>

<script>
export default {
    name:"CartSummary",
    computed: {
        cart_total() {
            return this.$store.getters.cartTotal
        }
    }
}
</script>

<style>

</style>