<template>
<div id="content_wrapper">
  <div class="welcome_image_container">
    <img src="/img/cupboard_welcome.jpg" alt="Cupboard Limited Showroom" class="tw-object-cover tw-w-full tw-h-screen tw-absolute">
  </div>
  <div class="tw-absolute tw-w-5/12  tw-h-1/6 tw-right-0 tw-bottom-1/4 tw-bg-gradient-to-br tw-from-primary tw-to-primary-gradient1">
    <img src="/img/cupboard_logo.png" alt="Cupboard Limited Logo" class="tw-h-full tw-p-3 tw-inline-block">
    <p class="logo_font tw-align-middle tw-text-6xl tw-inline-block tw-text-white tw-pl-6">Cupboard Limited</p>
  </div>
  <div class="tw-w-full tw-h-1/6 tw-absolute tw-bottom-0">
    <div class="tw-w-full tw-h-2 tw-bg-gradient-to-t tw-from-white"></div>
    <div class="tw-w-full tw-h-full tw-bg-white"></div>
    <div class="tw-absolute tw-top-2">
      <p class="heading_font tw-text-5xl tw-pl-10 tw-pt-5 tw-text-primary">{{ t("Home.welcome") }}</p>
      <p class="text_font tw-text-2xl tw-pl-20 tw-pt-6 tw-text-primary-gradient1">{{ t("Home.offer") }}</p>
    </div>
  </div>
  <div style="height: 1000px"></div>
</div>
</template>

<script>
// @ is an alias to /src
import { useI18n } from "vue-i18n";
import ProductInformation from "@/components/ProductInformation.vue";

export default {
  name: "Home",
  components: {
    ProductInformation,

  },
  setup() {
    const { t, locale } = useI18n({
      inheritLocale: true,
      useScope: "global",
    });
    return { t, locale};
    },
};
</script>

<style scoped>
#content_wrapper {
  width: 100%;
  height: auto;
}
.welcome_image_container {
  width: 100%;
  height: 100vh;
}
.logo_font {
  font-family: logoFont;
}

</style>
