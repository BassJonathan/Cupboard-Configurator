<template>
  <div class="tw-w-full tw-mt-20 tw-px-20">
    <div class="tw-w-full tw-py-6 tw-px-8">
      <div
        class="
          tw-w-full
          tw-text-6xl
          tw-pb-1
          tw-font-bold
          tw-text-transparent
          tw-bg-gradient-to-br
          tw-from-primary-gradient2
          tw-to-primary-gradient4
          tw-bg-clip-text
        "
      >
        {{ t("Configurator.con") }}
      </div>
      <div class="tw-w-full tw-text-3xl tw-text-gray-500 tw-px-8 tw-py-2">
        {{ t("Configurator.ind") }}
      </div>
      <div class="tw-h-0.5 tw-bg-gray-100 tw-rounded-full tw-w-full"></div>
      <div class="tw-w-full tw-px-8 tw-py-2 tw-text-lg">
        {{ t("Configurator.fur") }}
      </div>
    </div>
    <div class="tw-w-full tw-px-10">
      <div class="tw-w-full tw-text-4xl tw-font-semibold tw-pb-4">
        {{ t("Configurator.conf") }}
      </div>
      <div
        v-for="product in products"
        :key="product.id"
        class="tw-w-full tw-bg-gray-200 tw-rounded-xl tw-shadow-inner"
      >
        <ProductTile
          :product="product"
          v-on:config-product="configProduct($event)"
        />
      </div>
    </div>
    <div class="tw-w-full tw-px-10">
      <div class="tw-w-full tw-text-4xl tw-font-semibold tw-py-4">
        {{ t("Configurator.you") }}
      </div>
      <div
        v-if="customs.length"
        class="
          tw-w-full
          tw-bg-gray-200
          tw-rounded-xl
          tw-shadow-inner
          tw-p-6
          tw-overflow-x-scroll
          tw-overflow-y-hidden
          tw-whitespace-nowrap
        "
      >
        <div
          v-for="custom in customs"
          :key="custom.id"
          class="tw-inline-block tw-mr-5 tw-w-1/5"
        >
          <ConfigurationSelect
            :product="custom"
            :configId="configId"
            v-on:edit-configuration="editConfiguration($event)"
            v-on:delete-configuration="deleteConfiguration($event)"
          />
        </div>
      </div>
      <div
        v-else
        class="tw-p-4 tw-rounded-md tw-border-dashed tw-border-red tw-border-2"
      >
        {{ t("Configurator.choose") }}
      </div>
    </div>
    <div v-if="configId != null" class="tw-w-full tw-px-10">
      <div class="tw-w-full tw-text-4xl tw-font-semibold tw-py-4">
        {{ t("Configurator.confi") }}
      </div>
      <div>
        <ConfigurationTool :product="product" :configId="configId" />
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
import ProductTile from "@/components/Configurator/ProductTile.vue";
import ConfigurationTool from "@/components/Configurator/ConfigurationTool.vue";
import ConfigurationSelect from "@/components/Configurator/ConfigurationSelect.vue";

import { useI18n } from "vue-i18n";

export default {
  name: "Configurator",
  components: {
    ProductTile,
    ConfigurationTool,
    ConfigurationSelect,
  },
  setup() {
    const { t, locale } = useI18n({
      inheritLocale: true,
      useScope: "global",
    });
    return { t, locale };
  },
  data() {
    return {
      /*--API-connection removed--*/
      //categories: [],
      //products: [],
      product: null,
      configId: null,
    };
  },
  /* //API-connection removed
  async mounted() {
    const { data } = await this.axios.get("catalogue/categories");
    this.categories = data;
    for (const categorie of this.categories) {
      const { data } = await this.axios.get(
        "catalogue/categories/" + categorie.id + "/products"
      );
      this.products.push(data[0]);
    }
    this.products = this.products.filter((i) => i.customizable);
  },
  */
  computed: {
    customs() {
      return this.$store.getters.getCustomProducts;
    },
    customId() {
      return this.$store.getters.getCustomIndex;
    },
    products() {
      return this.$store.getters.getProducts.filter((i) => i.customizable);
    },
  },
  methods: {
    addToCart() {
      this.$store.commit("addToCart", {
        product: this.product,
        configId: this.configId,
      });
      this.$store.commit("bumpCustomIndex");
    },
    deleteConfiguration(configId) {
      this.$store.commit("removeFromCart", {
        product: this.product,
        configId: configId,
      });
      this.configId = null;
    },
    configProduct(product) {
      this.product = product;
      this.configId = this.customId;
      this.addToCart();
    },
    editConfiguration(configId) {
      this.configId = configId;
    },
  },
};
</script>

<style scoped>
h1 {
  font-size: 5vw;
}

.tx-hauptfarbe {
  color: #012840;
}
.bg-hauptfarbe {
  background-color: #012840;
}
.tx-yellow {
  color: #8c8a0a;
}
.tx-lightblue {
  color: #115d8c;
}
.bg-lightblue {
  background-color: #115d8c;
}

.talk-bubble {
  margin: 40px;
  display: inline-block;
  position: relative;
  width: 200px;
  height: auto;
  background-color: #012840;
}
.round {
  border-radius: 30px;
  -webkit-border-radius: 30px;
  -moz-border-radius: 30px;
}
.tri-right.right-in:after {
  content: " ";
  position: absolute;
  width: 10;
  height: 10;
  left: auto;
  right: -20px;
  top: 35px;
  bottom: auto;
  border: 12px solid;
  border-color: transparent transparent #012840 #012840;
}
.talktext {
  padding: 1em;
  text-align: left;
  line-height: 1.5em;
}
.dropdown:hover .dropdown-menu {
  display: block;
}
</style>
