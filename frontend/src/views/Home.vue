<template>
  <div id="content_wrapper">
    <div class="welcome_image_container">
      <img
        src="/img/cupboard_welcome.jpg"
        alt="Cupboard Limited Showroom"
        class="tw-object-cover tw-w-full tw-h-screen tw-absolute"
      />
    </div>
    <div
      class="
        tw-absolute tw-w-auto
        xl:tw-h-40
        lg:tw-h-32
        tw-right-0
        tw-bottom-1/4
        tw-bg-gradient-to-br
        tw-from-primary
        tw-to-primary-gradient1
      "
    >
      <img
        src="/img/cupboard_logo.png"
        alt="Cupboard Limited Logo"
        class="tw-h-full tw-p-3 tw-inline-block"
      />
      <p
        class="
          logo_font
          tw-align-middle
          xl:tw-text-6xl
          lg:tw-text-4xl
          tw-inline-block tw-text-white tw-px-6
        "
      >
        Cupboard Limited
      </p>
    </div>
    <div class="tw-w-full tw-h-1/6 tw-absolute tw-bottom-0">
      <div class="tw-w-full tw-h-2 tw-bg-gradient-to-t tw-from-white"></div>
      <div class="tw-w-full tw-h-full tw-bg-white"></div>
      <div class="tw-absolute tw-top-2">
        <p class="heading_font tw-text-5xl tw-pl-10 tw-pt-5 tw-text-primary">
          {{ t("Home.welcome") }}
        </p>
        <p
          class="
            text_font
            tw-text-2xl tw-pl-20 tw-pt-6 tw-text-primary-gradient1
          "
        >
          {{ t("Home.offer") }}
        </p>
      </div>
    </div>
    <div class="tw-relative tw-h-10"></div>
    <Sustainability />
    <div class="tw-w-full">
      <p class="tw-text-3xl tw-p-8 heading_font">
        {{ t("Home.text") }}
      </p>
    </div>
    <div class="tw-w-full">
      <div
        class="
          tw-w-full tw-grid
          md:tw-grid-rows-3 md:tw-grid-cols-2
          tw-gap-6 tw-grid-rows-6 tw-grid-cols-1
        "
      >
        <div class="md:tw-order-1 tw-order-2">Step1</div>
        <div class="md:tw-order-2 tw-order-1">
          <InterAnim
            playerID="anim_size"
            playerSrc="01_Choose_Size.json"
            playerClass="full"
            playerContainer="anim1"
            playerSpeed="0.5"
            :interactivityActions="[
              { visibility: [0, 0.2], type: 'stop', frames: [0] },
              { visibility: [0.2, 0.6], type: 'seek', frames: [0, 111] },
              { visibilty: [0.6, 1], type: 'stop', frames: [112] },
            ]"
          />
        </div>
        <div class="tw-order-3">
          <InterAnim
            playerID="anim_fittings"
            playerSrc="02_Choose_Fittings.json"
            playerClass="full"
            playerContainer="anim2"
            playerSpeed="0.5"
            :interactivityActions="[
              { visibility: [0, 0.2], type: 'stop', frames: [0] },
              { visibility: [0.2, 0.6], type: 'seek', frames: [0, 111] },
              { visibilty: [0.6, 1], type: 'stop', frames: [112] },
            ]"
          />
        </div>
        <div class="tw-order-4">Step2</div>
        <div class="md:tw-order-5 tw-order-6">Step3</div>
        <div class="md:tw-order-6 tw-order-5">
          <InterAnim
            playerID="anim_material"
            playerSrc="03_Choose_Material.json"
            playerClass="full"
            playerContainer="anim3"
            playerSpeed="0.5"
            :interactivityActions="[
              { visibility: [0, 0.2], type: 'stop', frames: [0] },
              { visibility: [0.2, 0.8], type: 'seek', frames: [0, 6] },
              { visibilty: [0.8, 1], type: 'stop', frames: [6] },
            ]"
          />
        </div>
      </div>
    </div>
    <div class="tw-w-full">
      <p class="tw-text-3xl tw-p-8 heading_font">
        Hier direkt zum Konfigurator: (BUTTON)
      </p>
    </div>
    <div style="height: 1000px"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import { useI18n } from "vue-i18n";

import Sustainability from "@/components/Home/Sustainability.vue";
import InterAnim from "@/components/InterAnim.vue";

export default {
  name: "Home",
  components: {
    Sustainability,
    InterAnim,
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
