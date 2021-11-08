<template>
  <div class="tw-grid tw-grid-cols-8 tw-gap-4 tw-overflow-hidden">
    <div class="tw-col-span-2 tw-p-5 tw-align-middle tw-flex tw-justify-center">
      <img
        class="tw-object-contain tw-object-center tw-rounded-xl tw-h-40"
        :src="product.imageUrl"
      />
    </div>
    <div
      class="
        tw-col-span-2
        tw-flex
        tw-items-center
        tw-text-4xl
        tw-text-left
        tw-font-semibold
      "
    >
      {{ product.name }}
    </div>
    <div class="tw-col-span-2 tw-flex tw-text-3xl tw-text-left tw-items-center">
      {{ t("ProductTile.ab") }}
      {{ n(getBrutto(product.price, taxes), "currency", currency) }}
    </div>
    <div class="tw-col-span-2 tw-flex tw-justify-center tw-items-center">
      <button class="btn btn-primary" @click="$emit('config-product', product)">
        {{ t("ProductTile.conf") }}
      </button>
    </div>
  </div>
</template>

<script>
import { useI18n } from "vue-i18n";

export default {
  name: "ProductTile",
  props: ["product"],
  setup() {
    const { t, n } = useI18n({
      inheritLocale: true,
      useScope: "global",
    });
    return { t, n };
  },
  methods: {
    getBrutto(price, tax) {
      if (price > 0) {
        return price + price * tax;
      } else {
        return 0;
      }
    },
  },
  computed: {
    currency() {
      return this.$store.state.currency;
    },
    taxes() {
      return this.$store.state.taxRate;
    },
  },
};
</script>

<style></style>
