<template>
    <div class="tw-w-full">
        <div class="tw-full tw-bg-gray-200 tw-rounded-lg tw-mt-6 tw-mr-6 tw-px-10 tw-py-6 tw-shadow-inner">
            <div class="tw-text-4xl tw-font-bold tw-pb-4">
            {{accessory.name}}
            </div>
            <div class="tw-w-full tw-flex tw-justify-between tw-items-center">
                <div class="tw-w-1/4">
                    <img :src="accessory.imageUrl" :alt="accessory.name" class="tw-object-contain tw-rounded-xl">
                </div>
                <div class="tw-w-2/3">
                    <div class="tw-text-2xl tw-mb-10">
                        {{ t("Accessory.p") }} {{ n(getBrutto(accessory.price, taxes), "currency", currency) }}
                    </div>
                    <div class="tw-flex tw-w-1/2 tw-h-10">
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" @change="toggleAccessory(accessory)" :checked="activeAccessory(accessory, inputAccessories)">
                            <label class="form-check-label" for="flexSwitchCheckDefault">{{ accessory.name }}</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useI18n } from "vue-i18n";

export default {
    name: "Accessory",
    props: ["accessory", "configId"],
    setup() {
        const { t, n } = useI18n({
            inheritLocale: true,
            useScope: "global",
        });
    return { t, n };
    },
    methods: {
        toggleAccessory(e) {
            this.$store.commit("addToConfiguration", {interior: e, configId: this.configId, product: this.product})
        },
        activeAccessory(accessory, inputs) {
            for (const input of inputs) {
                if (input.name === accessory.name) {
                    return true
                }
            }
        },
        getBrutto(price, tax) {
            return (price + (price * tax));
        },
    },
    computed: {
        inputAccessories() {
            return this.$store.getters.getAccessories(this.configId);
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