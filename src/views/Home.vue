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
  <Sustainability />
  <div>
    <p>Konfiguriere deinen Schrank in drei einfachen Schritten</p>
  </div>
  <div class="flex flex-wrap -mx-1 overflow-hidden sm:-mx-1 md:-mx-1 lg:-mx-1 xl:-mx-1">
    <div class="my-1 px-1 w-full overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-1 md:px-1 md:w-1/2 lg:my-1 lg:px-1 lg:w-1/2 xl:my-1 xl:px-1 xl:w-1/2">
      <Step />
    </div>
    <div id="anim1" class="my-1 px-1 w-full overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-1 md:px-1 md:w-1/2 lg:my-1 lg:px-1 lg:w-1/2 xl:my-1 xl:px-1 xl:w-1/2">
      <InterAnim
        playerID="anim_size"
        playerSrc="01_Choose_Size.json"
        playerClass="full"
        playerContainer="anim1"
        playerSpeed=0.5
        :interactivityActions="[{visibility:[0,0.2],type:'stop',frames:[0]}, {visibility:[0.2,0.6],type:'seek',frames:[0,280]},{visibilty:[0.6,1],type:'stop',frames:[280]}]"
      />
    </div>
    <div id="amim2" class="my-1 px-1 w-full overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-1 md:px-1 md:w-1/2 lg:my-1 lg:px-1 lg:w-1/2 xl:my-1 xl:px-1 xl:w-1/2">
      <InterAnim
        playerID="anim_fittings"
        playerSrc="02_Choose_Fittings.json"
        playerClass="full"
        playerContainer="anim2"
        playerSpeed=0.5
        :interactivityActions="[{visibility:[0,0.2],type:'stop',frames:[0]}, {visibility:[0.2,0.6],type:'seek',frames:[0,320]},{visibilty:[0.6,1],type:'stop',frames:[320]}]"
      />
    </div>
    <div class="my-1 px-1 w-full overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-1 md:px-1 md:w-1/2 lg:my-1 lg:px-1 lg:w-1/2 xl:my-1 xl:px-1 xl:w-1/2">
      <Step />
    </div>
    <div class="my-1 px-1 w-full overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-1 md:px-1 md:w-1/2 lg:my-1 lg:px-1 lg:w-1/2 xl:my-1 xl:px-1 xl:w-1/2">
      <Step />
    </div>
    <div id="anim3" class="my-1 px-1 w-full overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-1 md:px-1 md:w-1/2 lg:my-1 lg:px-1 lg:w-1/2 xl:my-1 xl:px-1 xl:w-1/2">
      <InterAnim
        playerID="anim_material"
        playerSrc="03_Choose_Material.json"
        playerClass="full"
        playerContainer="anim3"
        playerSpeed=0.5
        :interactivityActions="[{visibility:[0,0.2],type:'stop',frames:[0]}, {visibility:[0.2,0.8],type:'seek',frames:[0,200]},{visibilty:[0.8,1],type:'stop',frames:[200]}]"
      />
    </div>
  </div>
  <div style="height: 1000px"></div>
</div>
</template>

<script>
// @ is an alias to /src
import { useI18n } from "vue-i18n";

import Sustainability from '@/components/Home/Sustainability.vue'
import Step from '@/components/Home/Step.vue'
import InterAnim from '@/components/InterAnim.vue'

export default {
  name: "Home",
  components: {
    Sustainability,
    Step,
    InterAnim,
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
