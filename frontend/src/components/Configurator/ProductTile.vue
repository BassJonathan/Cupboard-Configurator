<template>

  <div
    class="tw-grid tw-grid-cols-8 tw-gap-4 tw-overflow-hidden tw-h-1/4"
    style="background-color: light-grey"
  >
    <div class="tw-col-span-2 tw-pl-5">
      <img
        class="tw-object-contain tw-object-center tw-max-h-80"
        :src="product.imageUrl"
      />
    </div>
    <div class="tw-col-span-3 tw-p-10">
      <h3 class="tw-text-3xl tw-text-center ">
        {{ product.name }}
      </h3>
      <br />
      <p class="tw-text-lg tw-font-bold tw-text-center">
        
      </p>
      <p class="tw-text-center">
        
      </p>
    </div>
    <div class="tw-col-span-3 tw-h-52">
      <h3
        class="tw-text-3xl tw-text-center"
      >
        ab {{ product.price }}
      </h3>
      <button
          class="btn btn-primary" @click="$emit('config-product', product)">Konfigurieren
      </button>
      <div class="tw-h-full tw-w-full tw-relative">
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "ProductTile",
  props: ["product"],
};
</script>

<style></style>