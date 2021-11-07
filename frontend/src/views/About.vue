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
        Über uns - Cupboard Limited
      </div>
      <div class="tw-w-full tw-text-3xl tw-text-gray-500 tw-px-8 tw-py-2">
        Dein Cupboard-Team und alles was du über uns wissen musst!
      </div>
      <div class="tw-h-0.5 tw-bg-gray-100 tw-rounded-full tw-w-full"></div>
    </div>
    <div class="tw-w-full tw-text-3xl tw-text-gray-500 tw-py-2">
      Unser Team
    </div>
    <div class="tw-h-0.5 tw-bg-gray-100 tw-rounded-full tw-w-full"></div>
    <Members />
    <div class="tw-w-full tw-text-3xl tw-text-gray-500 tw-py-2">
      Unsere Geschichte
    </div>
    <div class="tw-h-0.5 tw-bg-gray-100 tw-rounded-full tw-w-full"></div>
    <Timeline />
    <div class="tw-w-full tw-text-3xl tw-text-gray-500 tw-py-2 tw-pt-8">
      Facts
    </div>
    <div class="tw-h-0.5 tw-bg-gray-100 tw-rounded-full tw-w-full"></div>
    <Infoslide />
  </div>
</template>

<script>
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
};
</script>

<style></style>
