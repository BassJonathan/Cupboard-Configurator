<template>
  <div>
    <div
      class="drawer_background tw-fixed tw-w-full tw-h-full tw-left-0 tw-top-0"
      :class="{ show: active }"
      @click="$emit('close-product-drawer')"
    ></div>

    <div
      :class="{ show: active }"
      class="
        drawer
        tw-w-1/2
        tw-mx-auto
        tw-bg-white
        tw-fixed
        tw-p-4
        tw-left-1/4
        tw-rounded-2xl
      "
    >
      <div v-if="product" class="product-details">
        <p class="tw-text-2xl tw-font-bold tw-text-center tw-pt-5">
          {{ product.name }} wurde zu Ihrem Einkaufswagen hinzugefügt!
        </p>
        <div class="tw-w-full tw-p-7">
          <table
            class="
              tw-table-fixed
              tw-border-collapse
              tw-border-2
              tw-border-gray-400
              tw-text-left
            "
            v-if="product_total"
          >
            <thead class="tw-bg-gray-200">
              <tr>
                <th class="tw-w-1/2 tw-border-2 tw-border-gray-400 tw-pl-3">
                  Artikel
                </th>
                <th class="tw-w-1/4 tw-border-2 tw-border-gray-400 tw-pl-3">
                  Preis
                </th>
                <th class="tw-w-1/4 tw-border-2 tw-border-gray-400 tw-pl-3">
                  Anzahl in Einkaufswagen
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="tw-border-2 tw-border-gray-400 tw-pl-3">
                  {{ product.name }}
                </td>
                <td class="tw-border-2 tw-border-gray-400 tw-pl-3">
                  {{ n(product.price, "currency", currency) }}
                </td>
                <td class="tw-border-2 tw-border-gray-400 tw-h-full">
                  <button
                    type="button"
                    class="
                      btn
                      tw-w-1/4
                      tw-bg-yellow-600
                      tw-inline-block
                      tw-rounded-l-lg
                      tw-rounded-r-none
                    "
                    @click="removeFromCart()"
                  >
                    -
                  </button>
                  <div class="tw-w-1/2 tw-text-center tw-inline-block">
                    <p>{{ product_total }}</p>
                  </div>
                  <button
                    type="button"
                    class="
                      btn
                      tw-w-1/4
                      tw-bg-green-600
                      tw-inline-block
                      tw-rounded-r-lg
                      tw-rounded-l-none
                    "
                    @click="addToCart()"
                  >
                    +
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <div v-else class="tw-w-full">
            <p class="tw-text-center tw-text-xl">
              Dieses Produkt befindet sich momentan nicht mehr im Wahrenkorb!
              Drücken Sie auf "Artikel hinzufügen" um den Artikel in den
              Wahrenkorb zu legen.
            </p>
            <div class="tw-w-full tw-flex tw-items-center tw-content-center">
              <button
                type="button"
                class="
                  btn
                  tw-mx-auto tw-my-5 tw-w-52 tw-bg-green-dark tw-text-white
                  hover:tw-text-white hover:tw-bg-green-200 hover:tw-shadow-xl
                "
                @click="addToCart()"
              >
                Artikel hinzufügen
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="tw-h-0.5 tw-bg-gray-100 tw-rounded-full tw-w-full"></div>
      <div class="tw-float-right tw-pt-5 tw-px-5">
        <button
          type="button"
          class="btn btn-secondary"
          @click="$emit('close-product-drawer')"
        >
          Weiter einkaufen
        </button>
        <router-link class="btn btn-primary tw-ml-4" to="/cart"
          >Zum Einkaufswagen</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import { useI18n } from "vue-i18n";

export default {
  name: "ProductDrawer",
  props: ["product", "active"],
  setup() {
    const { t, n, locale } = useI18n({
      inheritLocale: true,
      useScope: "global",
    });
    return { t, n, locale };
  },
  computed: {
    product_total() {
      return this.$store.getters.productQuantity(this.product);
    },
    currency() {
      return this.$store.state.currency;
    },
  },
  methods: {
    addToCart() {
      this.$store.commit("addToCart", this.product);
    },
    removeFromCart() {
      this.$store.commit("removeFromCart", this.product);
    },
  },
};
</script>

<style lang="scss">
.drawer_background {
  background-color: rgba(124, 124, 124, 0.55);
  z-index: 1000;
  display: none;
  transition: display 0.5s;

  &.show {
    display: block;
  }
}

.drawer {
  top: -80vh;
  transition: top 0.5s;
  z-index: 1001;

  &.show {
    top: 80px;
  }
}

.product-details {
  display: flex;
  justify-content: center;
  flex-direction: column;

  .button-container {
    button {
      width: 150px;
      border: none;
      padding: 10px;
      border-radius: 5px;
      margin: 0 5px 50px 5px;
      cursor: pointer;
    }
  }
}
</style>
