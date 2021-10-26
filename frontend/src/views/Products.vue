<template>
  <div class="tw-mt-20">
    <div class="tw-grid tw-grid-cols-1 tw-divide-y tw-divide-blue">
      <ProductInformation />
      <ProductInformation />
      <ProductInformation />
    </div>
  </div>
  <div class="tw-w-full tw-min-h-40 tw-bg-green-100">
    <ul>
      <li>Die folgenden Kategorien werden aus dem Backend geholt: (Dafür muss das Backend auch ausgeführt werden!)</li>
      <li v-for="categorie in categories" :key="categorie.id">{{ categorie.name }}</li>
    </ul>
  </div>
</template>

<script>
import ProductInformation from "@/components/Products/ProductInformation.vue";

export default {
    name: "Products",
    components: {
        ProductInformation,
    },
    data() {
      return {
        categories: []
      }
    },
    async mounted() {
        const { data } = await this.axios.get('catalogue/categories');
        this.categories = data;
        console.log(this.categories)
    },
        
};
</script>

<style>

</style>
