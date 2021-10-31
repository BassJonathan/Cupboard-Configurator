<template>
  <div class="tw-mt-20">
    <div class="tw-grid tw-grid-cols-1 tw-divide-y tw-divide-blue">
      <ProductDrawer :product="product" :active="active.product_drawer" v-on:close-product-drawer="closeProductDrawer()" />
      <div v-for="product in products" :key="product.id">
        <ProductInformation :product="product" v-on:view-product="viewProduct($event)"/>
      </div>
      <!-- //Objekt übergeben und nicht einzelne Variablen
      <ProductInformation 
       v-for="product in products" :key="product.id"
      :categorieName='product.name'
      :imageUrl='product.imageUrl'
      :price='product.price'
      :customizable='product.customizable'
      :priceStarting='product.priceStarting'
      />
      -->
    </div>
  </div>
</template>

<script>
import ProductInformation from "@/components/Products/ProductInformation.vue";
import ProductDrawer from "@/components/Products/ProductDrawer.vue";

export default {
    name: "Products",
    components: {
        ProductInformation,
        ProductDrawer,
    },
    data() {
      return {
        categories: [],
        products: [],
        product: null,
        active: {
          product_drawer: false
        },
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
    methods: {
      viewProduct(product) {
        this.product = product
        this.active.product_drawer = true
        console.log(this.product)
      },
      closeProductDrawer() {
        this.active.product_drawer = false
      }
    }
        
};
</script>

<style>

</style>
