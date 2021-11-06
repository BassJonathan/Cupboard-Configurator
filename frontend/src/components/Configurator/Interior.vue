<template>
    <div class="tw-w-full">
        <div class="tw-full tw-bg-gray-200 tw-rounded-lg tw-my-6 tw-mr-6 tw-px-10 tw-py-6 tw-shadow-inner">
            <div class="tw-text-4xl tw-font-bold tw-pb-4">
                {{ interior.name}}
            </div>
            <div class="tw-w-full tw-flex tw-justify-between tw-items-center">
                <div class="tw-w-1/4">
                    <img :src="interior.imageUrl" :alt="interior.name" class="tw-object-contain tw-rounded-xl">
                </div>
                <div class="tw-w-2/3">
                    <div class="tw-text-2xl tw-mb-10">
                        Preis: {{ n(getBrutto(interior.price, taxes), "currency", currency) }}
                    </div>
                    <div class="tw-flex tw-w-1/2 tw-h-10">
                        <button type="button" class="btn btn-primary tw-w-1/6 tw-rounded-l-lg tw-rounded-r-none" @click="removeFromConfiguration()">-</button>
                        <div class="tw-h-full tw-w-1/4 tw-flex tw-justify-center tw-flex-col tw-text-center tw-box-border tw-border-t-2 tw-border-b-2 tw-border-gray-400">{{ item_total }}</div>
                        <button type="button" class="btn btn-primary tw-w-1/6 tw-rounded-r-lg tw-rounded-l-none" @click="addToConfiguration()">+</button>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
import { useI18n } from "vue-i18n";

export default {
    name: "Interior",
    props: ["interior", "product", "configId"],
    setup() {
        const { t, n } = useI18n({
            inheritLocale: true,
            useScope: "global",
        });
    return { t, n };
    },
    methods: {
        addToConfiguration() {
            console.log(this.interior)
            this.$store.commit("addToConfiguration", {interior: this.interior, configId: this.configId, product: this.product})
        },
        removeFromConfiguration() {
            this.$store.commit("removeFromConfiguration", {interior: this.interior, configId: this.configId, product: this.product})
        },
        getBrutto(price, tax) {
            console.log(tax)
            return (price + (price * tax));
        },
    },
    computed: {
        item_total() {
            return this.$store.getters.itemQuantity({interior: this.interior, configId: this.configId, product: this.product})
        },
        currency() {
            return this.$store.state.currency;
        },
        taxes() {
            return this.$store.state.taxRate;
        },
    }
}
</script>

<style>

</style>