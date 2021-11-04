<template>
    <tr>
        <td>
            <div class="tw-w-full tw-text-left">
                {{ item.name }}
            </div>
        </td>
        <td>
            <div class="tw-w-full tw-text-left">
                {{ item.quantity }}
            </div>
        </td>
        <td>
            <div class="tw-w-full tw-text-left">
                {{ item.price }}
            </div>
        </td>
        <td>
            <div class="tw-w-full tw-text-left">
                {{ item_cost }}
            </div>
        </td>
    </tr>
</template>

<script>
export default {
    name: "SummaryItem",
    props: ["item"],
    computed: {
        item_cost() {
            return this.item.price * this.item.quantity
        }
    }
}
</script>

<style>

</style>