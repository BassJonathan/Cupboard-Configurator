<template>
  <div class = "tw-grid tw-grid-cols-2 tw-px-20">
    <div class ="tw-ml-8 tw-mt-16">
    <p class ="tw-text-3xl">{{ t("Infoslide.berlin") }}</p>
    <p class ="tw-text-2xl tw-ml-8">{{ t("Infoslide.schrank") }}</p>
    <p class ="tw-text-2xl tw-ml-8">• Sideboards</p>
    <p class ="tw-text-2xl tw-ml-8">• Highboards</p>
    <p class ="tw-text-2xl tw-ml-8">• Lowboards</p><br />

    <p class ="tw-text-3xl">{{ t("Infoslide.20") }}</p>
    <p class ="tw-text-3xl">{{ t("Infoslide.ums") }}</p>
    <p class ="tw-text-3xl">{{ t("Infoslide.mit") }}</p>
    </div>
    <div class =" tw-mr-8">
      <p class ="tw-text-3xl tw-text-center">{{ t("Infoslide.loca") }}</p>
      <img
              class="object-center object-cover w-full h-full"
              src="/img/Locations.png"
              alt="Error"
            />
    </div>>
  </div>

</template>

<script>
import { useI18n } from "vue-i18n";

export default {
  name: "index",
  setup() {
    const { t, locale } = useI18n({
      inheritLocale: true,
      useScope: "global",
    });
    return { t, locale };
  }
};
</script>

<style>

</style>

