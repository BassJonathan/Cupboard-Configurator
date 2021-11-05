<template>
  <div
    class="
      tw-border-t
      tw-border-b
      tw-py-8
      tw-grid
      tw-grid-cols-2
      tw-gap-8
      tw-bg-green
      tw-shadow-inner
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
          tw-justify-items-start
          tw-overflow-hidden
        "
      >
        <img
          src="/img/sustainability.jpg"
          alt="Nachhaltigkeit"
          class="tw-rounded-xl"
        />
      </div>
    </div>
    <div class="tw-flex tw-flex-col">
      <div class="tw-flex tw-flex-col tw-gap-4">
        <p class="tw-text-3xl tw-font-extrabold heading_font">
          {{ t("Sustainability.sustainable") }}
        </p>
        <p class="tw-text-xl text_font">
          {{ t("Sustainability.sustainabletxt") }}
        </p>
        <p class="tw-text-lg">
          {{ t("Sustainability.sustainabletxt2") }}
        </p>
        <div class="tw-mt-8"></div>
        <button
          type="button"
          class="btn btn-success tw-w-48 tw-h-12 tw-mx-auto tw-text-xl"
        >
          {{ t("Sustainability.button") }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { useI18n } from "vue-i18n";

export default {
  name: "Sustainability",
  setup() {
    const { t, locale } = useI18n({
      inheritLocale: true,
      useScope: "global",
    });
    return { t, locale };
  },
};
</script>

<style scoped></style>
