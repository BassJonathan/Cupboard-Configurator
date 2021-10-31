<template>
    <div class="tw-mt-20">
        <h1>Your Cart</h1>
        <CartItem v-for="item in items" :key="item.id" :item="item" />
        <CartSummary />
    </div>
</template>

<script>
import CartItem from "@/components/ShoppingCart/CartItem.vue";
import CartSummary from "@/components/ShoppingCart/CartSummary.vue";

export default {
    name: "ShoppingCart",
    components: {
        CartItem,
        CartSummary,
    },
    computed: {
        items() {
            return this.$store.getters.cartItems
        }
    }
}
</script>

<style>

</style>