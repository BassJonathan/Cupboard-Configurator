<template>
  <div class="tw-mt-20 tw-mx-10">
    <div class="tw-w-full tw-py-8 tw-px-10">
      <p class="tw-text-5xl tw-text-black">Einkaufswagen</p>
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
              <th class="tw-w-1/2 tw-pl-3">Artikel</th>
              <th class="tw-w-1/6 tw-pl-3">Menge</th>
              <th class="tw-w-1/6 tw-pl-3">Preis</th>
              <th class="tw-w-1/6 tw-pl-3">Preis gesamt</th>
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
            >Zur Kasse gehen</router-link
          >
        </div>
      </div>
    </div>
    <div v-else class="tw-p-10">
      <p class="tw-text-4xl">Keine Artikel im Warenkorb!</p>
      <p class="tw-text-2xl tw-pt-3 tw-center">
        Entdecke hier unser großes Sortiment:
        <router-link class="btn btn-primary tw-ml-4" to="/products"
          >Alle Produkte</router-link
        >
      </p>
    </div>
  </div>
</template>

<script>
import CartItem from "@/components/ShoppingCart/CartItem.vue";
import CartSummary from "@/components/ShoppingCart/CartSummary.vue";

export default {
  name: "ShoppingCart",
  components: {
    CartItem,
    CartSummary,
  },
  computed: {
    items() {
      return this.$store.getters.cartItems;
    },
  },
};
</script>

<style></style>
