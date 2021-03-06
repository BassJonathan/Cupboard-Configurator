<template>
  <tr class="tw-divide-x-2 tw-divide-gray-500 tw-divide-opacity-20">
    <td>
      <div class="tw-w-full tw-h-52 tw-flex">
        <div class="tw-h-full tw-w-1/2">
          <img
            class="
              tw-object-contain
              tw-h-full
              tw-content-center
              tw-justify-center
              tw-flex-col
              tw-rounded-xl
              tw-ml-5
            "
            :src="item.imageUrl"
            :alt="item.name"
          />
        </div>
        <div
          class="
            tw-h-full
            tw-w-1/2
            tw-flex
            tw-justify-center
            tw-flex-col
            tw-text-2xl
            tw-font-semibold
          "
        >
          {{ item.name }}
        </div>
      </div>
    </td>
    <td>
      <div
        v-if="!item.customizable"
        class="tw-w-full tw-h-12 tw-flex tw-justify-center"
      >
        <button
          type="button"
          class="
            btn
            tw-w-1/6 tw-bg-yellow-600 tw-rounded-l-lg tw-rounded-r-none
          "
          @click="removeFromCart()"
        >
          -
        </button>
        <div
          class="
            tw-h-full
            tw-w-1/4
            tw-flex
            tw-justify-center
            tw-flex-col
            tw-text-center
            tw-box-border
            tw-border-t-2
            tw-border-b-2
          "
        >
          {{ item.quantity }}
        </div>
        <button
          type="button"
          class="btn tw-w-1/6 tw-bg-green-600 tw-rounded-r-lg tw-rounded-l-none"
          @click="addToCart()"
        >
          +
        </button>
      </div>
      <div v-else class="tw-w-full">
        <div
          class="tw-w-full tw-text-lg tw-text-gray-500 tw-text-center tw-pt-2"
        >
          {{ t("CartItem.measure") }} {{ item.width }} x {{ item.height }} x
          {{ item.depth }}
        </div>
        <div class="tw-w-full tw-flex tw-justify-center">
          <div
            class="tw-h-0.5 tw-bg-gray-100 tw-rounded-full tw-w-10/12 tw-my-1"
          ></div>
        </div>
        <div v-for="part in parts" :key="part.id" class="tw-pl-10">
          <div>{{ part.quantity }} x {{ part.name }}</div>
        </div>
        <div class="tw-w-full tw-flex tw-justify-center">
          <div
            class="tw-h-0.5 tw-bg-gray-100 tw-rounded-full tw-w-10/12 tw-my-2"
          ></div>
        </div>
        <div class="tw-w-full tw-flex tw-justify-center tw-pb-3">
          <button
            type="button"
            class="btn btn-danger tw-w-5/12 tw-px-2"
            @click="deleteConfiguration()"
          >
            {{ t("CartItem.delete") }}
          </button>
        </div>
      </div>
    </td>
    <td>
      <div v-if="!item.customizable" class="tw-pl-10">
        {{ n(getBrutto(item.price, taxes), "currency", currency) }}
      </div>
      <div v-else class="tw-pl-10">
        {{
          n(
            getBrutto(configuration_total + item.price, taxes),
            "currency",
            currency
          )
        }}
      </div>
    </td>
    <td>
      <div v-if="!item.customizable" class="tw-font-bold tw-pl-10">
        {{ n(getBrutto(item_cost, taxes), "currency", currency) }}
      </div>
      <div v-else class="tw-font-bold tw-pl-10">
        {{
          n(
            getBrutto(configuration_total + item.price, taxes),
            "currency",
            currency
          )
        }}
      </div>
    </td>
  </tr>
</template>

<script>
import { useI18n } from "vue-i18n";

export default {
  name: "CartItem",
  props: ["item"],
  setup() {
    const { t, n } = useI18n({
      inheritLocale: true,
      useScope: "global",
    });
    return { t, n };
  },
  computed: {
    item_cost() {
      return this.item.price * this.item.quantity;
    },
    product_total() {
      return this.$store.getters.productQuantity(this.product);
    },
    configuration_total() {
      return this.$store.getters.configurationTotal(this.item.configurationID);
    },
    parts() {
      return this.$store.getters.itemConfiguration(this.item.configurationID);
    },
    currency() {
      return this.$store.state.currency;
    },
    taxes() {
      return this.$store.state.taxRate;
    },
  },
  methods: {
    addToCart() {
      this.$store.commit("addToCart", { product: this.item });
    },
    removeFromCart() {
      this.$store.commit("removeFromCart", { product: this.item });
    },
    deleteConfiguration() {
      this.$store.commit("removeFromCart", {
        product: this.item,
        configId: this.item.configurationID,
      });
    },
    getBrutto(price, tax) {
      return price + price * tax;
    },
  },
};
</script>

<style lang="scss">
.cart-item-card {
  width: 90%;
  margin: 5%;
  background-color: white;
  box-shadow: 0 0 5px gray;
  border-radius: 5px;
  padding: 10px;
  text-align: left;

  .header {
    display: flex;
    justify-content: space-around;
  }
}
</style>
