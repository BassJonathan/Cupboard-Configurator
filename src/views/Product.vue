<template>
Hiii
  <div class="tw-grid tw-grid-cols-1 tw-divide-y tw-divide-blue">
  <ProductInformation />
  <ProductInformation />
  <ProductInformation />
  </div>
</template>

<script>
import ProductInformation from "@/components/ProductInformation.vue";
export default {
    name: "Products",
    components: {
        ProductInformation,
    },
        
};
</script>

<style>

</style>