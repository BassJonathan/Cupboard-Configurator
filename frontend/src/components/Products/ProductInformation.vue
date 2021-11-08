<template>
  <div
    class="tw-grid tw-grid-cols-3 lg:tw-grid-cols-8 tw-gap-4 tw-overflow-hidden"
    style="background-color: light-grey"
  >
    <div class="tw-col-span-3 lg:tw-col-span-2 lg:tw-pl-5">
      <img
        class="tw-object-contain tw-object-center lg:tw-max-h-80"
        :src="product.imageUrl"
      />
    </div>
    <div class="tw-col-span-3 tw-p-10">
      <h3 class="tw-text-3xl tw-text-center lg:tw-text-left">
        {{ product.name }}
      </h3>
      <br />
      <p class="tw-text-lg tw-font-bold tw-text-center lg:tw-text-left">
        {{ t("ProductInformation.heading") }}
      </p>
      <p class="tw-text-center lg:tw-text-left">
        {{ t("ProductInformation.description", { pName: product.name }) }}
      </p>
    </div>
    <div class="tw-col-span-3 tw-h-52 lg:tw-h-full tw-p-10">
      <h3
        v-if="product.priceStarting"
        class="tw-text-3xl tw-text-center lg:tw-text-right tw-font-bold"
      >
        {{ t("ProductInformation.ab") }} {{ n(getBrutto(product.price, taxes), "currency", currency) }}
      </h3>
      <h3
        v-else
        class="tw-text-3xl tw-text-center lg:tw-text-right tw-font-bold"
      >
        {{ n(getBrutto(product.price, taxes), "currency", currency) }}
      </h3>
      <div class="tw-h-full tw-w-full tw-relative">
        <router-link
          v-if="product.customizable"
          class="
            tw-bg-blue
            hover:tw-bg-primary
            tw-text-white
            tw-font-bold
            tw-py-2
            tw-px-4
            tw-rounded
            tw-absolute
            tw-bottom-10
            tw-right-1/2
            tw-transform
            tw-translate-x-1/2
            lg:tw-translate-x-0 lg:tw-right-0
          "
          to="/configurator"
          >{{ t("ProductInformation.config") }}</router-link
        >
        <button
          v-else
          class="
            tw-bg-blue
            hover:tw-bg-primary
            tw-text-white
            tw-font-bold
            tw-py-2
            tw-px-4
            tw-rounded
            tw-absolute
            tw-bottom-10
            tw-right-1/2
            tw-transform
            tw-translate-x-1/2
            lg:tw-translate-x-0 lg:tw-right-0
          "
          @click="
            $emit('view-product', product);
            addToCart();
          "
        >
          {{ t("ProductInformation.cart") }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { useI18n } from "vue-i18n";

export default {
  name: "ProductInfotmation",
  props: ["product"],
  setup() {
    const { t, n, locale } = useI18n({
      inheritLocale: true,
      useScope: "global",
    });
    return { t, n, locale };
  },
  computed: {
    currency() {
      return this.$store.state.currency;
    },
    taxes() {
      return this.$store.state.taxRate;
    },
  },
  methods: {
    addToCart() {
      this.$store.commit("addToCart", {product: this.product});
    },
    getBrutto(price, tax) {
      return (price + (price * tax));
    },
  },
};
</script>

<style></style>
