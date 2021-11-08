<template>
  <tr class="tw-divide-x-2 tw-divide-gray-500 tw-divide-opacity-20">
    <td>
      <div class="tw-w-full tw-text-left">
        {{ item.name }}
      </div>
    </td>
    <td>
      <div
        v-if="item.selectableCategory === 'interior'"
        class="tw-w-full tw-text-center"
      >
        {{ item.quantity }}
      </div>
    </td>
    <td>
      <div class="tw-w-full tw-text-center">
        {{ n(getBrutto(item.price, taxes), "currency", currency) }}
      </div>
    </td>
    <td>
      <div v-if="item_cost" class="tw-w-full tw-text-center">
        {{ n(getBrutto(item_cost, taxes), "currency", currency) }}
      </div>
      <div v-else class="tw-w-full tw-text-center">
        {{ n(getBrutto(item.price, taxes), "currency", currency) }}
      </div>
    </td>
  </tr>
</template>

<script>
import { useI18n } from "vue-i18n";

export default {
  name: "SummaryItem",
  props: ["item"],
  computed: {
    item_cost() {
      return this.item.price * this.item.quantity;
    },
    currency() {
      return this.$store.state.currency;
    },
    taxes() {
      return this.$store.state.taxRate;
    },
  },
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
};
</script>

<style></style>
