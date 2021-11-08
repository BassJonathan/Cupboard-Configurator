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
    <div
      class="tw-w-full tw-h-full tw-flex tw-flex-col tw-justify-center tw-pr-5"
    >
      <div class="tw-flex tw-flex-col tw-gap-4">
        <div
          class="
            tw-text-5xl
            tw-font-bold
            tw-text-transparent
            tw-bg-gradient-to-br
            tw-from-green-gradient3
            tw-to-white
            tw-bg-clip-text
            tw-pb-1
          "
        >
          {{ t("Sustainability.sustainable") }}
        </div>
        <div class="tw-font-semibold tw-text-2xl">
          {{ t("Sustainability.sustainabletxt") }}
        </div>
        <p class="tw-text-xl">
          {{ t("Sustainability.sustainabletxt2") }}
        </p>
        <div class="tw-mt-8"></div>
      </div>
      <div class="tw-w-full tw-flex tw-justify-center">
        <router-link
          class="
            btn btn-primary
            tw-w-48
            tw-ml-4
            tw-text-xl
            tw-transition
            tw-duration-700
            tw-border-green
            tw-shadow-lg
            tw-ease-in-out
            tw-bg-gradient-to-tl
            tw-from-green-gradient2
            tw-to-green-gradient1
            hover:tw-from-green-gradient4
            hover:tw-to-green-gradient2
            hover:tw-shadow-xl
          "
          to="/goal"
          >{{ t("Sustainability.button") }}</router-link
        >
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
