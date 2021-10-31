<template>
    <tr class="tw-h-24">
        <td>
            <div class="tw-w-full"></div>
        </td>
        <td>
            <div class="tw-w-full"></div>
        </td>
        <td>
            <div class="tw-w-full tw-text-right">
                Summe ({{ cart_number_items }} Artikel):
            </div>
        </td>
        <td>
            <div class="tw-font-bold tw-pl-10">
                {{ cart_total }}
            </div>
        </td>
    </tr>
</template>

<script>
export default {
    name:"CartSummary",
    computed: {
        cart_total() {
            return this.$store.getters.cartTotal
        },
        cart_number_items() {
            return this.$store.getters.cartNumberItems
        }
    }
}
</script>

<style>

</style>