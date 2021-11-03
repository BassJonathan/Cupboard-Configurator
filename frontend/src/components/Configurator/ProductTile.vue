<template>

  <div
    class="tw-grid tw-grid-cols-3 lg:tw-grid-cols-8 tw-gap-4 tw-overflow-hidden"
    style="background-color: light-grey"
  >
    <div class="tw-col-span-3 lg:tw-col-span-2 lg:tw-pl-5">
      <img
        class="tw-object-contain tw-object-center lg:tw-max-h-80"
        :src="product.imageUrl"
      />
    </div>
    <div class="tw-col-span-3 tw-p-10">
      <h3 class="tw-text-3xl tw-text-center lg:tw-text-left">
        {{ product.name }}
      </h3>
      <br />
      <p class="tw-text-lg tw-font-bold tw-text-center lg:tw-text-left">
        
      </p>
      <p class="tw-text-center lg:tw-text-left">
        
      </p>
    </div>
    <div class="tw-col-span-3 tw-h-52 lg:tw-h-full tw-p-10">
      <h3
        class="tw-text-3xl tw-text-center lg:tw-text-right tw-font-bold"
      >
        ab {{ product.price }}
      </h3>
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