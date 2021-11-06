<template>
    <div class="tw-w-full">
        <div class="tw-full tw-bg-gray-200 tw-rounded-lg tw-my-6 tw-mr-6 tw-px-10 tw-py-6 tw-shadow-inner">
            <div class="tw-text-4xl tw-font-bold tw-pb-4">
                {{ exterior.name}}
            </div>
            <div class="tw-w-full tw-h-auto tw-flex tw-justify-between tw-items-center">
                <div class="tw-w-1/4">
                    <img :src="exterior.imageUrl" :alt="exterior.name" class="tw-object-contain tw-rounded-xl">
                </div>
                <div class="tw-w-2/3 tw-align-middle">
                    <form>
                        <div class="form-floating tw-mb-3">
                            <input type="height" class="form-control" id="floatingHeight" :value="inputDimensions.height" @change="updateHeight">
                            <label for="floatingHeight">{{ t("Exterior.high") }}</label>
                        </div>
                        <div class="form-floating tw-mb-3">
                            <input type="width" class="form-control" id="floatingWidth" :value="inputDimensions.width" @change="updateWidth">
                            <label for="floatingWidth">{{ t("Exterior.brei") }}</label>
                        </div>
                        <div class="form-floating">
                            <input type="depth" class="form-control" id="floatingDepth" :value="inputDimensions.depth" @change="updateDepth">
                            <label for="floatingWidth">{{ t("Exterior.tie") }}</label>
                        </div>
                    </form>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
import { useI18n } from "vue-i18n";

export default {
    name: "Exterior",
    props: ["exterior", "product", "configId"],
    methods: {
        updateHeight(e) {
            this.$store.commit("updateHeight", {product: this.product, configId: this.configId, height: e.target.value})
        },
        updateWidth(e) {
            this.$store.commit("updateWidth", {product: this.product, configId: this.configId, width: e.target.value})
        },
        updateDepth(e) {
            this.$store.commit("updateDepth", {product: this.product, configId: this.configId, depth: e.target.value})
        }
    },
    setup() {
    const { t, locale } = useI18n({
      inheritLocale: true,
      useScope: "global",
    });
    return { t, locale };
    },
    computed: {
        inputDimensions() {
            return this.$store.getters.getDimensions(this.configId);
        }
    }
}
</script>

<style>

</style>