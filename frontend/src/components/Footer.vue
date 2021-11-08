<template>
  <div>
    <div
      class="
        tw-w-full tw-h-0.5 tw-bg-gray-100 tw-rounded-full tw-mb-10 tw-mt-14
      "
    ></div>
    <div class="tw-w-100">
      <div
        class="
          tw-grid tw-grid-rows-2 tw-grid-cols-4 tw-gap-6
          sm:tw-mx-3
          md:tw-mx-3
          lg:tw-mx-3
          xl:tw-mx-3
        "
      >
        <div class="tw-col-span-2 tw-w-full tw-overflow-hidden">
          <div
            class="
              tw-p-3
              tw-my-3
              tw-bg-gradient-to-br
              tw-from-primary
              tw-to-primary-gradient1
            "
          >
            <img
              src="/img/cupboard_logo.png"
              alt="Logo"
              class="tw-inline-block tw-h-24 tw-w-24"
            />
            <p
              class="
                tw-text-white tw-inline-block
                logo_font
                tw-text-4xl tw-pl-5 tw-align-middle
              "
            >
              Cupboard Limited
            </p>
          </div>
        </div>
        <div class="flex tw-justify-end tw-align-right tw-col-span-2 tw-h-12">
          <img
            src="/img/Footer/tuev-siegel.png"
            alt="tuev"
            class="tw-h-28 tw-inline-block"
          />
          <img
            src="/img/Footer/gia-siegel.png"
            alt="GIA"
            class="tw-h-28 tw-inline-block tw-pl-12"
          />
        </div>
        <div>
          <div
            class="tw-w-full tw-py-3 tw-px-5 tw-bg-white tw-rounded tw-border-2"
          >
            <p class="heading_font">
              <router-link to="/about">{{ t("Footer.contact") }}</router-link>
            </p>
            <p><router-link to="/about">Michael Canadi</router-link></p>
            <p><router-link to="/about">Jochen Herrmann</router-link></p>
          </div>
        </div>
        <div>
          <div
            class="tw-w-full tw-py-3 tw-px-5 tw-bg-white tw-rounded tw-border-2"
          >
            <p class="heading_font">
              <router-link to="/imprint">{{
                t("Footer.information")
              }}</router-link>
            </p>
            <p>
              <router-link to="/imprint">{{ t("Footer.imprint") }}</router-link>
            </p>
            <p>
              <router-link to="/imprint">{{ t("Footer.data") }}</router-link>
            </p>
          </div>
        </div>
        <div class="flex tw-justify-end tw-align-right tw-col-span-2 tw-h-12">
          <img
            src="/img/Footer/stwa-siegel.png"
            alt="stwa"
            class="tw-h-28 tw-inline-block"
          />
          <img
            src="/img/Footer/Logo_Blauer-Engel.png"
            alt="Blauer Engel"
            class="tw-h-28 tw-inline-block tw-pl-4"
          />
          <img
            src="/img/Footer/PEFC_Logo.jpeg"
            alt="PEFC"
            class="tw-h-28 tw-inline-block tw-pl-4"
          />
          <img
            src="/img/Footer/FSC_Logo.jpeg"
            alt="FSC"
            class="tw-h-28 tw-inline-block tw-pl-4"
          />
        </div>
      </div>
      <div class="tw-h-0.5 tw-bg-gray-100 tw-rounded-full tw-w-full"></div>
      <div
        class="
          tw-text-sm tw-text-color tw-mb-10 tw-w-full tw-text-center tw-pt-6
        "
      >
        <p>© 2021 Cupboard Inc. All rights reserved</p>
      </div>
    </div>
  </div>
</template>

<script>
import { useI18n } from "vue-i18n";

export default {
  name: "Footer",
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
h1 {
  font-size: 5vw;
}

.test {
  height: 10vw;
  width: 10vw;
  margin: 0 auto;
}
.tx-hauptfarbe {
  color: #012840;
}
.bg-hauptfarbe {
  background-color: #012840;
}
.tx-yellow {
  color: #8c8a0a;
}
@import url("https://cdn.tuk.dev/dist/css/tailwind-v2.2.11.min.css");
</style>
