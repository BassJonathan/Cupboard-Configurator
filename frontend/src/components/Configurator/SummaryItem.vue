<template>
    <tr class="tw-divide-x-2 tw-divide-gray-500 tw-divide-opacity-20">
        <td>
            <div class="tw-w-full tw-text-left">
                {{ item.name }}
            </div>
        </td>
        <td>
            <div v-if="item.selectableCategory === 'interior'" class="tw-w-full tw-text-center">
                {{ item.quantity }}
            </div>
        </td>
        <td>
            <div class="tw-w-full tw-text-center">
                {{ item.price }}
            </div>
        </td>
        <td>
            <div class="tw-w-full tw-text-center">
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