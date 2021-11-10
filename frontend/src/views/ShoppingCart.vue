<template>
  <div class="tw-mt-20 tw-mx-10">
    <div class="tw-w-full tw-py-8 tw-px-10">
      <p class="tw-text-5xl tw-text-black">{{ t("ShoppingCard.cart") }}</p>
    </div>
    <div class="tw-h-0.5 tw-bg-gray-100 tw-rounded-full tw-w-full"></div>
    <div v-if="items.length">
      <div class="tw-w-full">
        <table
          class="
            tw-table-fixed tw-border-collapse tw-text-left tw-w-full tw-text-xl
          "
        >
          <thead class="tw-bg-gray-200 tw-border-b-2 tw-border-gray-400">
            <tr class="tw-divide-x-2 tw-divide-gray-500 tw-divide-opacity-60">
              <th class="tw-w-1/2 tw-pl-3">{{ t("ShoppingCard.article") }}</th>
              <th class="tw-w-1/6 tw-pl-3">
                {{ t("ShoppingCard.amount") }} / {{ t("ShoppingCard.con") }}
              </th>
              <th class="tw-w-1/6 tw-pl-3">{{ t("ShoppingCard.price") }}</th>
              <th class="tw-w-1/6 tw-pl-3">{{ t("ShoppingCard.priceg") }}</th>
            </tr>
          </thead>
          <tbody class="tw-divide-y-2">
            <CartItem v-for="item in items" :key="item.id" :item="item" />
            <CartSummary />
          </tbody>
        </table>
        <div class="tw-w-full tw-px-10 tw-flex tw-justify-end">
          <router-link
            class="btn btn-primary tw-ml-4 tw-float-right"
            to="/checkout"
            >{{ t("ShoppingCard.checkout") }}</router-link
          >
        </div>
      </div>
    </div>
    <div v-else class="tw-p-10">
      <p class="tw-text-4xl">{{ t("ShoppingCard.noarticle") }}</p>
      <p class="tw-text-2xl tw-pt-3 tw-center">
        {{ t("ShoppingCard.sortiment") }}
        <router-link class="btn btn-primary tw-ml-4" to="/products">{{
          t("ShoppingCard.allproducts")
        }}</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import { useI18n } from "vue-i18n";
import CartItem from "@/components/ShoppingCart/CartItem.vue";
import CartSummary from "@/components/ShoppingCart/CartSummary.vue";

export default {
  name: "ShoppingCart",
  components: {
    CartItem,
    CartSummary,
  },
  setup() {
    const { t, locale } = useI18n({
      inheritLocale: true,
      useScope: "global",
    });
    return { t, locale };
  },
  computed: {
    items() {
      return this.$store.getters.cartItems;
    },
  },
};
</script>

<style></style>
