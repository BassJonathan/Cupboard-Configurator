<template>
  <tr class="tw-h-24">
    <td>
      <div class="tw-w-full"></div>
    </td>
    <td>
      <div class="tw-w-full"></div>
    </td>
    <td class="tw-pt-6">
      <div class="tw-w-full tw-text-right">
        <div class="tw-text-3xl">
          {{ t("CartSummary.sum") }} ({{ cart_number_items }}
          {{ t("CartSummary.article") }}):
        </div>
        <div class="tw-text-gray-600 tw-text-lg">
          {{ t("CartSummary.netto") }}
        </div>
        <div class="tw-text-gray-600 tw-text-lg">
          {{ t("CartSummary.mwst") }}
        </div>
      </div>
    </td>
    <td class="tw-pt-6">
      <div class="tw-w-full tw-pl-10">
        <div class="tw-font-bold tw-border-b-2 tw-border-gray-400 tw-text-3xl">
          {{ n(getBrutto(cart_total, taxes), "currency", currency) }}
        </div>
        <div class="tw-text-gray-600 tw-text-lg">
          {{ n(cart_total, "currency", currency) }}
        </div>
        <div class="tw-text-gray-600 tw-text-lg">
          {{
            n(getBrutto(cart_total, taxes) - cart_total, "currency", currency)
          }}
        </div>
      </div>
    </td>
  </tr>
</template>

<script>
import { useI18n } from "vue-i18n";

export default {
  name: "CartSummary",
  setup() {
    const { t, n } = useI18n({
      inheritLocale: true,
      useScope: "global",
    });
    return { t, n };
  },
  computed: {
    cart_total() {
      return this.$store.getters.cartTotal;
    },
    cart_number_items() {
      return this.$store.getters.cartNumberItems;
    },
    currency() {
      return this.$store.state.currency;
    },
    taxes() {
      return this.$store.state.taxRate;
    },
  },
  methods: {
    getBrutto(price, tax) {
      return price + price * tax;
    },
  },
};
</script>

<style></style>
