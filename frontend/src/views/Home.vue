<template>
  <div id="content_wrapper">
    <SustainabilityHover />
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
    <Individuality />
    <Sustainability />
    <div class="tw-w-full">
      <p class="tw-text-4xl tw-font-extrabold tw-p-8 heading_font">
        {{ t("Home.text") }}
      </p>
    </div>
    <div class="tw-w-full tw-h-auto tw-flex tw-justify-center">
      <div class="tw-w-1/2" id="sticky-container">
        <div class="tw-sticky tw-top-16">
          <InterAnim
            playerID="anim_size"
            playerSrc="animation.json"
            interactivityContainer="sticky-container"
            :interactivityActions="[
              { visibility: [0, 0.25], type: 'stop', frames: [0] },
              { visibility: [0.25, 0.7], type: 'seek', frames: [0, 333] },
              { visibilty: [0.7, 1], type: 'stop', frames: [333] },
            ]"
          />
        </div>
      </div>
      <div class="tw-w-1/2 tw-pl-20">
        <div style="height: 200px"></div>
        <div class="tw-w-full tw-p-5">
            <div class="tw-w-full tw-pb-1 tw-text-5xl tw-font-extrabold tw-text-transparent tw-bg-gradient-to-br tw-from-primary-gradient2 tw-to-primary-gradient4 tw-bg-clip-text">
                {{ t("Home.step1u") }}
            </div>
            <div class="tw-w-full tw-text-3xl tw-text-gray-500 tw-pl-4">
                {{ t("Home.step1u1") }}
            </div>
            <div class="tw-w-full ">
              <div class="tw-text-xl tw-pl-2 tw-pr-14 tw-py-4">
                {{ t("Home.step1txt") }}
              </div>
              <div class="tw-w-full tw-flex tw-justify-right">
                <div class="tw-flex w-justify-start tw-items-center tw-pr-8 tw-w-1/3">
                  <div class="tw-rounded-full tw-bg-gradient-to-b tw-from-green-gradient2 tw-to-green-gradient3 tw-w-14 tw-h-14">
                    <img src="/img/home/quality.png" alt="Height" class="tw-object-cover tw-p-3 tw-filter tw-invert">
                  </div>
                  <div class="tw-text-lg tw-pl-3">
                    {{ t("Home.max") }}
                  </div>
                </div>
                <div class="tw-flex w-justify-start tw-items-center tw-pr-8 tw-w-1/3">
                  <div class="tw-rounded-full tw-bg-gradient-to-b tw-from-green-gradient2 tw-to-green-gradient3 tw-w-14 tw-h-14">
                    <img src="/img/home/height.png" alt="Height" class="tw-object-cover tw-p-3 tw-filter tw-invert tw-transform tw-rotate-90">
                  </div>
                  <div class="tw-text-lg tw-pl-3">
                    {{ t("Home.max1") }}
                  </div>
                </div>
                <div class="tw-flex w-justify-start tw-items-center tw-w-1/3">
                  <div class="tw-rounded-full tw-bg-gradient-to-b tw-from-green-gradient2 tw-to-green-gradient3 tw-w-14 tw-h-14">
                    <img src="/img/home/laser.png" alt="Height" class="tw-object-cover tw-p-3 tw-filter tw-invert">
                  </div>
                  <div class="tw-text-lg tw-pl-3">
                    {{ t("Home.laser") }}
                  </div>
                </div>
              </div>
            </div>
        </div>
        <div style="height:300px"></div>
        <div class="tw-w-full tw-p-5">
            <div class="tw-w-full tw-pb-1 tw-text-5xl tw-font-extrabold tw-text-transparent tw-bg-gradient-to-br tw-from-primary-gradient2 tw-to-primary-gradient4 tw-bg-clip-text">
                {{ t("Home.step2u") }}
            </div>
            <div class="tw-w-full tw-text-3xl tw-text-gray-500 tw-pl-4">
                {{ t("Home.step2u1") }}
            </div>
            <div class="tw-w-full ">
              <div class="tw-text-xl tw-pl-2 tw-pr-14 tw-py-4">
                {{ t("Home.step2txt") }}
              </div>
              <div class="tw-w-full tw-flex tw-justify-right">
                <div class="tw-flex w-justify-start tw-items-center tw-pr-8 tw-w-1/3">
                  <div class="tw-rounded-full tw-bg-gradient-to-b tw-from-green-gradient2 tw-to-green-gradient3 tw-w-14 tw-h-14">
                    <img src="/img/home/quality.png" alt="Quality" class="tw-object-cover tw-p-2 tw-filter tw-invert">
                  </div>
                  <div class="tw-text-lg tw-pl-3">
                    {{ t("Home.qual") }}
                  </div>
                </div>
                <div class="tw-flex w-justify-start tw-items-center tw-pr-8 tw-w-1/3">
                  <div class="tw-rounded-full tw-bg-gradient-to-b tw-from-green-gradient2 tw-to-green-gradient3 tw-w-14 tw-h-14">
                    <img src="/img/home/customization.png" alt="Customization" class="tw-object-cover tw-p-2 tw-filter tw-invert">
                  </div>
                  <div class="tw-text-lg tw-pl-3">
                    {{ t("Home.ind") }}
                  </div>
                </div>
                <div class="tw-flex tw-justify-start tw-items-center tw-w-1/3">
                  <div class="tw-rounded-full tw-bg-gradient-to-b tw-from-green-gradient2 tw-to-green-gradient3 tw-w-14 tw-h-14">
                    <img src="/img/home/fair.png" alt="Height" class="tw-object-cover tw-p-3 tw-filter tw-invert">
                  </div>
                  <div class="tw-text-lg tw-pl-3">
                    {{ t("Home.fair") }}
                  </div>
                </div>
              </div>
            </div>
        </div>
        <div style="height:300px"></div>
        <div class="tw-w-full tw-p-5">
            <div class="tw-w-full tw-pb-1 tw-text-5xl tw-font-extrabold tw-text-transparent tw-bg-gradient-to-br tw-from-primary-gradient2 tw-to-primary-gradient4 tw-bg-clip-text">
                {{ t("Home.step3u") }}
            </div>
            <div class="tw-w-full tw-text-3xl tw-text-gray-500 tw-pl-4">
                {{ t("Home.step3u1") }}
            </div>
            <div class="tw-w-full ">
              <div class="tw-text-xl tw-pl-2 tw-pr-14 tw-py-4">
                {{ t("Home.step3txt") }}
              </div>
              <div class="tw-w-full tw-flex tw-justify-right">
                <div class="tw-flex w-justify-start tw-items-center tw-pr-8 tw-w-1/3">
                  <div class="tw-rounded-full tw-bg-gradient-to-b tw-from-green-gradient2 tw-to-green-gradient3 tw-w-14 tw-h-14">
                    <img src="/img/home/environment.png" alt="Quality" class="tw-object-cover tw-p-2 tw-filter tw-invert">
                  </div>
                  <div class="tw-text-lg tw-pl-3">
                    {{ t("Home.umwelt") }}
                  </div>
                </div>
                <div class="tw-flex w-justify-start tw-items-center tw-pr-8 tw-w-1/3">
                  <div class="tw-rounded-full tw-bg-gradient-to-b tw-from-green-gradient2 tw-to-green-gradient3 tw-w-14 tw-h-14">
                    <img src="/img/home/forest.png" alt="Customization" class="tw-object-cover tw-p-3 tw-filter tw-invert">
                  </div>
                  <div class="tw-text-lg tw-pl-3">
                    {{ t("Home.forst") }}
                  </div>
                </div>
                <div class="tw-flex tw-justify-start tw-items-center tw-w-1/3">
                  <div class="tw-rounded-full tw-bg-gradient-to-b tw-from-green-gradient2 tw-to-green-gradient3 tw-w-14 tw-h-14">
                    <img src="/img/home/co2.png" alt="Height" class="tw-object-cover tw-p-3 tw-filter tw-invert">
                  </div>
                  <div class="tw-text-lg tw-pl-3">
                    {{ t("Home.klima") }}
                  </div>
                </div>
              </div>
            </div>
        </div>
        <div style="height: 200px"></div>
      </div>
    </div>
    <div class="tw-w-full tw-flex tw-align-middle tw-justify-center tw-py-16 tw-bg-gray-200 tw-shadow-inner">
      <div class="tw-text-3xl">{{ t("Home.configbutton") }}</div>
        <router-link class="btn btn-primary tw-ml-4 tw-text-xl tw-transition tw-duration-700 tw-ease-in-out tw-bg-gradient-to-tr tw-from-primary-gradient3 tw-to-primary-gradient5 hover:tw-from-primary-gradient4 hover:tw-to-primary-gradient6" to="/configurator">{{ t("Home.con") }}</router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { useI18n } from "vue-i18n";

import Sustainability from "@/components/Home/Sustainability.vue";
import InterAnim from "@/components/InterAnim.vue";
import Individuality from "@/components/Home/Individuality.vue";
import SustainabilityHover from "@/components/Home/SustainabilityHover.vue"

export default {
  name: "Home",
  components: {
    Sustainability,
    InterAnim,
    Individuality,
    SustainabilityHover
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
