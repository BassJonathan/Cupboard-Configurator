<template>
  <div class="tw-w-full tw-mt-20 tw-px-28">
    <div class="tw-w-full tw-py-6">
      <div
        class="
          tw-w-full
          tw-text-6xl
          tw-py-1
          tw-font-bold
          tw-text-transparent
          tw-bg-gradient-to-br
          tw-from-primary-gradient2
          tw-to-primary-gradient4
          tw-bg-clip-text
        "
      >
        {{ t("About.us") }}
      </div>
      <div class="tw-w-full tw-text-3xl tw-text-gray-500 tw-px-8 tw-py-2">
        {{ t("About.team") }}
      </div>
      <div class="tw-h-0.5 tw-bg-gray-100 tw-rounded-full tw-w-full"></div>
    </div>
    <div class="tw-w-full tw-text-3xl tw-text-gray-500 tw-py-2">
      {{ t("About.ot") }}
    </div>
    <div class="tw-h-0.5 tw-bg-gray-100 tw-rounded-full tw-w-full"></div>
    <Members />
    <div class="tw-w-full tw-text-3xl tw-text-gray-500 tw-py-2">
      {{ t("About.hist") }}
    </div>
    <div class="tw-h-0.5 tw-bg-gray-100 tw-rounded-full tw-w-full"></div>
    <Timeline />
    <div class="tw-w-full tw-text-3xl tw-text-gray-500 tw-py-2 tw-pt-8">
      {{ t("About.fact") }}
    </div>
    <div class="tw-h-0.5 tw-bg-gray-100 tw-rounded-full tw-w-full"></div>
    <Infoslide />
  </div>
</template>

<script>
import { useI18n } from "vue-i18n";
import Members from "@/components/AboutUs/Members.vue";
import Timeline from "@/components/AboutUs/Timeline.vue";
import Infoslide from "@/components/AboutUs/Infoslide.vue";

export default {
  name: "About Us",
  components: {
    Members,
    Timeline,
    Infoslide,
  },
  setup() {
    const { t, locale } = useI18n({
      inheritLocale: true,
      useScope: "global",
    });
    return { t, locale };
  },
};
</script>

<style></style>
