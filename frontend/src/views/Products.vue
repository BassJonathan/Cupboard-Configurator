<template>
  <div class="tw-mt-20">
    <div class="tw-grid tw-grid-cols-1 tw-divide-y tw-divide-blue">
      <ProductInformation 
       v-for="product in products" :key="product.id"
      :categorieName='product.name'
      :imageUrl='product.imageUrl'
      :price='product.price'
      :customizable='product.customizable'
      :priceStarting='product.priceStarting'
      />
    </div>
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
        categories: [],
        products: []
      }
    },
    async mounted() {
        const {data} = await this.axios.get('catalogue/categories');
        this.categories = data;
        console.log(this.categories)
        for(const categorie of this.categories) {
          const {data} = await this.axios.get('catalogue/categories/' + categorie.id + '/products')
          this.products.push(data[0]);
          console.log(this.products)
        }
    },
        
};
</script>

<style>

</style>
