<template>
    <div class="tw-w-full">
        <div class="tw-full tw-bg-gray-200 tw-rounded-lg tw-m-6 tw-px-10 tw-py-6">
            <div class="tw-text-4xl tw-font-bold">
                {{ interior.name}}
            </div>
            <div>
                Kosten: {{ interior.price }}
            </div>
            <div class="tw-w-full tw-flex tw-justify-between">
                <div class="tw-w-1/2">
                    <form action="">
                        <input type="number" value="0">
                    </form>
                </div>
                <div class="tw-w-96">
                    <img :src="interior.imageUrl" :alt="interior.name">
                </div>
            </div>
            <button type="button" class="btn btn-primary" @click="addToConfiguration()">Add</button>
            <button type="button" class="btn btn-primary" @click="removeFromConfiguration()">Remove</button>
            <div> Anzahl: {{ item_total }}</div>
            
        </div>
    </div>
</template>

<script>
export default {
    name: "Interior",
    props: ["interior", "product"],
    methods: {
        addToConfiguration() {
            this.$store.commit("addToConfiguration", {interior: this.interior, product: this.product})
        },
        removeFromConfiguration() {
            this.$store.commit("removeFromConfiguration", {interior: this.interior, product: this.product})
        }
    },
    computed: {
        item_total() {
            return this.$store.getters.itemQuantity({interior: this.interior, product: this.product})
        }
    }
}
</script>

<style>

</style>