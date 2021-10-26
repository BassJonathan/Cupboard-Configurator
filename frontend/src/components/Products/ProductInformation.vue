<template>
  <div class="tw-grid tw-grid-cols-3 lg:tw-grid-cols-8 tw-gap-4 tw-overflow-hidden" style="background-color: light-grey">
    <div class="tw-col-span-3 lg:tw-col-span-2 lg:tw-pl-5">
        <img class="tw-object-contain tw-object-center lg:tw-max-h-80" :src="imageUrl">
    </div>
    <div class="tw-col-span-3 tw-p-10">
        <h3 class="tw-text-3xl tw-text-center lg:tw-text-left">{{categorieName}}</h3>
        <br>
        <p class="tw-text-lg tw-font-bold tw-text-center lg:tw-text-left">Produktbeschreibung:</p>
        <p class="tw-text-center lg:tw-text-left">Schönes {{categorieName}}<br>
        aus nachahltigem Holz gefertigt<br>
        mit hochwertigen Schubladen
        </p>
    </div>
    <div class="tw-col-span-3 tw-h-52 lg:tw-h-full tw-p-10">
        <h3 class="tw-text-3xl tw-text-center lg:tw-text-right tw-font-bold">{{price}}</h3>
        <div class="tw-h-full tw-w-full tw-relative">
          <button v-if="customizable" class="tw-bg-blue hover:tw-bg-primary tw-text-white tw-font-bold tw-py-2 tw-px-4 tw-rounded tw-absolute tw-bottom-10 tw-right-1/2 tw-transform tw-translate-x-1/2 lg:tw-translate-x-0 lg:tw-right-0">Konfigurieren</button>
          <button v-else class="tw-bg-blue hover:tw-bg-primary tw-text-white tw-font-bold tw-py-2 tw-px-4 tw-rounded tw-absolute tw-bottom-10 tw-right-1/2 tw-transform tw-translate-x-1/2 lg:tw-translate-x-0 lg:tw-right-0">Zum Warenkorb hinzufügen</button>
          
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductInfotmation',
  props: {
      //Props for Lottie Web Player
      categorieName: {
        type: String,
        required: true
      },
      imageUrl: {
        type: String,
        required: true
      },
      price:{
        type: String,
        required: true
      },
      customizable: {
        type: Boolean,
        required: true
      },
      priceStarting:{
        type: Boolean,
        required: true
      }
  }

}
</script>

<style>

</style>