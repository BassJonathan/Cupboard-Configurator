<template>
  <div class="tw-mt-20 tw-px-28">
    <div class="tw-w-full tw-py-6">
      <div
        class="
          tw-w-full
          tw-text-6xl
          tw-py-1
          tw-font-bold
          tw-text-transparent
          tw-bg-gradient-to-br
          tw-from-primary-gradient2
          tw-to-primary-gradient4
          tw-bg-clip-text
        "
      >
        {{ t("Products.our") }}
      </div>
      <div class="tw-w-full tw-text-3xl tw-text-gray-500 tw-px-8 tw-py-2">
        {{ t("Products.qual") }}
      </div>
      <div class="tw-h-0.5 tw-bg-gray-100 tw-rounded-full tw-w-full"></div>
    </div>
    <div class="tw-grid tw-grid-cols-1">
      <ProductModal
        :product="product"
        :active="active.product_drawer"
        v-on:close-product-drawer="closeProductDrawer()"
      />
      <div v-for="product in products" :key="product.id">
        <ProductInformation
          :product="product"
          v-on:view-product="viewProduct($event)"
        />
        <div class="tw-h-0.5 tw-bg-gray-100 tw-rounded-full tw-w-full"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { useI18n } from "vue-i18n";

import ProductInformation from "@/components/Products/ProductInformation.vue";
import ProductModal from "@/components/Products/ProductModal.vue";

export default {
  name: "Products",
  components: {
    ProductInformation,
    ProductModal,
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
      categories: [],
      products: [],
      product: null,
      active: {
        product_drawer: false,
      },
    };
  },
  async mounted() {
    const { data } = await this.axios.get("catalogue/categories");
    this.categories = data;
    console.log(this.categories);
    for (const categorie of this.categories) {
      const { data } = await this.axios.get(
        "catalogue/categories/" + categorie.id + "/products"
      );
      this.products.push(data[0]);
      console.log(this.products);
    }
  },
  methods: {
    viewProduct(product) {
      this.product = product;
      this.active.product_drawer = true;
      console.log(this.product);
    },
    closeProductDrawer() {
      this.active.product_drawer = false;
    },
  },
};
</script>

<style></style>
