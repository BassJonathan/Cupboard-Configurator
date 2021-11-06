<template>
  <div
    class="
      tw-mt-16
      tw-mb-16
      tw-py-8
      tw-grid
      tw-grid-cols-2
      tw-gap-8
    "
  >
    <div class="tw-flex tw-flex-col tw-justify-start">
      <div
        class="
          tw-flex
          tw-flex-col
          tw-w-full
          tw-px-8
          tw-object-cover
          tw-overflow-hidden
          tw-justify-center
        "
      >
        <img
          src="/img/Customer_is_king.jpeg"
          alt="Error"
          class="tw-ml-16 tw-rounded-xl tw-w-3/6"
        />
      </div>
    </div>
    <div class="tw-flex tw-flex-col">
      <div class="tw-flex tw-flex-col tw-gap-4">
        <p class="tw-text-3xl tw-font-extrabold heading_font">
          {{ t("Individuality.king") }}
        </p>
        <p class="tw-text-xl text_font">
          {{ t("Individuality.closset") }}
        </p>
        <p class="tw-text-lg">
          Schon ab 250€, nur für Sie.
        </p>
        <div class="tw-mt-8"></div>
        <button
          type="button"
          class="btn btn-primary tw-w-48 tw-h-12 tw-mx-auto tw-text-xl"
        >
          Direkt gönnen
        </button>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style>

</style>
