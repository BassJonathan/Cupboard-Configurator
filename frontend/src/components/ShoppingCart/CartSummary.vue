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
        {{ t("CartSummary.sum") }} ({{ cart_number_items }} {{ t("CartSummary.article") }}):
      </div>
    </td>
    <td>
      <div class="tw-font-bold tw-pl-10">
        {{ n(cart_total, "currency", currency) }}
      </div>
    </td>
  </tr>
</template>

<script>
import { useI18n } from "vue-i18n";

export default {
  name: "CartSummary",
  setup() {
    const { t, n, locale } = useI18n({
      inheritLocale: true,
      useScope: "global",
    });
    return { t, n, locale };
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
  },
};
</script>

<style></style>
