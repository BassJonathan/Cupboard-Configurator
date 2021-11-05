<template>

  <div
    class="tw-grid tw-grid-cols-8 tw-gap-4 tw-overflow-hidden"
  >
    <div class="tw-col-span-2 tw-p-5 tw-align-middle tw-flex tw-justify-center">
      <img
        class="tw-object-contain tw-object-center tw-rounded-xl tw-h-40"
        :src="product.imageUrl"
      />
    </div>
    <div class="tw-col-span-2 tw-flex tw-items-center tw-text-4xl tw-text-left tw-font-semibold">
      {{ product.name }}
    </div>
    <div class="tw-col-span-2 tw-flex tw-text-3xl tw-text-left tw-items-center">
      ab {{ product.price }}
    </div>
    <div class="tw-col-span-2 tw-flex tw-justify-center tw-items-center">
      <button class="btn btn-primary" @click="$emit('config-product', product)">Konfigurieren</button>
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