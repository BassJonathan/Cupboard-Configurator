<template>
Hiii
Hey :)
  <div class="tw-mt-20">
    <div class="tw-grid tw-grid-cols-1 tw-divide-y tw-divide-blue">
      <ProductInformation />
      <ProductInformation />
      <ProductInformation />
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
        
};
</script>

<style>

</style>