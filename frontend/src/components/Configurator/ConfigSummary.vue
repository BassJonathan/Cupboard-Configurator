<template>
  <div class="tw-w-full">
    <div class="tw-w-full tw-p-5">
      <div class="tw-text-3xl tw-font-semibold tw-pb-3">
        {{ t("ConfigSummary.zu") }}
      </div>
      <div
        class="tw-h-0.5 tw-bg-gray-100 tw-rounded-full tw-w-full tw-my-1"
      ></div>
      <div class="tw-w-full tw-text-lg tw-text-gray-500 tw-text-left tw-py-2">
        {{ t("ConfigSummary.bht") }} {{ dimensions.width }} x
        {{ dimensions.height }} x {{ dimensions.depth }}
      </div>
      <div
        class="
          tw-h-0.5 tw-bg-gray-100 tw-rounded-full tw-w-full tw-my-1 tw-mb-4
        "
      ></div>
      <table
        class="
          tw-table-fixed tw-border-collapse tw-text-center tw-w-full tw-text-xl
        "
      >
        <thead class="tw-bg-gray-300 tw-border-b-2 tw-border-gray-400">
          <tr class="tw-divide-x-2 tw-divide-gray-500 tw-divide-opacity-60">
            <th class="tw-w-1/3">{{ t("ConfigSummary.art") }}</th>
            <th class="tw-w-1/6">{{ t("ConfigSummary.meng") }}</th>
            <th class="tw-w-1/6">{{ t("ConfigSummary.pric") }}</th>
            <th class="tw-w-1/6">{{ t("ConfigSummary.pricG") }}</th>
          </tr>
        </thead>
        <tbody class="tw-divide-y-2">
          <SummaryItem :item="product" />
          <SummaryItem v-for="part in parts" :key="part.id" :item="part" />
          <tr class="tw-font-semibold">
            <th></th>
            <th></th>
            <th>{{ t("ConfigSummary.sum") }}</th>
            <th>
              {{
                n(
                  getBrutto(configuration_total + product.price, taxes),
                  "currency",
                  currency
                )
              }}
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { useI18n } from "vue-i18n";
import SummaryItem from "@/components/Configurator/SummaryItem.vue";

export default {
  name: "ConfigSummary",
  components: {
    SummaryItem,
  },
  props: ["parts", "product", "configId"],
  setup() {
    const { t, n } = useI18n({
      inheritLocale: true,
      useScope: "global",
    });
    return { t, n };
  },
  computed: {
    configuration_total() {
      return this.$store.getters.configurationTotal(this.configId);
    },
    dimensions() {
      return this.$store.getters.getDimensions(this.configId);
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
