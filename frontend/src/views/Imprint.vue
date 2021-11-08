<template>
  <div class="tw-mt-20 tw-px-28">
    <div class="tw-w-full tw-py-6 ">
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
        {{ t("Imprint.imd") }}
      </div>
      <div class="tw-w-full tw-text-3xl tw-text-gray-500 tw-px-8 tw-py-2">
        {{ t("Imprint.data") }}
      </div>
      <div class="tw-h-0.5 tw-bg-gray-300 tw-rounded-full tw-w-full"></div>
    </div>
    <div>
      <div class="tw-bg-primary tw-text-white">
        <div
          class="
            tw-border-t tw-border-b tw-py-8 tw-grid tw-grid-cols-2 tw-gap-8
            bg-hauptfarbe
            tw-shadow-inner
          "
        >
          <div class="ml-8 tw-flex tw-flex-col tw-justify-start">
            <div class="ml-8 tw-flex tw-flex-col tw-gap-4">
              <p class="tw-text-3xl tw-font-bold tx-weiss">{{ t("Imprint.editor") }}</p>
              <p class="tw-text-lg tx-weiss">
                <!--{{ t("Imprint.editortext") }}-->
                {{ t("Imprint.web") }}
                <br />
                Cupboard Inc.<br />
                {{ t("Imprint.street") }}
                <br />
                42069 Berlin<br />
                {{ t("Imprint.con") }}
                <br />
                <br />
                {{ t("Imprint.gf") }}
                <br />
                {{ t("Imprint.mail") }}
                : Michael.Canadi@lehre.dhbw-stuttgart.de<br />
                {{ t("Imprint.tel") }}
                : 0711 / 6159115<br />
                <br />
                {{ t("Imprint.stut") }}
                , HRB 722469<br />
                {{ t("Imprint.id") }}
                : DE 302263985<br />
                <br />
                {{ t("Imprint.concept") }}
                : Closing Tag GmbH<br />
                {{ t("Imprint.prog") }}
                : Closing Tag GmbH<br />
                <br /><br />
              </p>
            </div>
            <div class="ml-8 tw-flex tw-flex-col tw-gap-4">
              <p class="tw-text-3xl tw-font-bold tx-weiss">
                {{ t("Imprint.disclaimer") }}
              </p>
              <p class="tw-text-lg tx-weiss">
                {{ t("Imprint.disclaimertext") }}
                <br />
              </p>
            </div>
          </div>
          <div class="mr-8 tw-flex tw-flex-col">
            <div class="tw-flex tw-flex-col tw-gap-4">
              <p class="tw-text-3xl tw-font-extrabold heading_font tx-weiss">
                {{ t("Imprint.liability") }}
              </p>
              <p class="tw-text-lg tx-weiss">
                {{ t("Imprint.liabilitytext") }}
                <br /><br />
              </p>
            </div>
            <div class="mr-8 tw-flex tw-flex-col tw-gap-4">
              <p class="tw-text-3xl tw-font-extrabold heading_font tx-weiss">
                {{ t("Imprint.copyright") }}
              </p>
              <p class="tw-text-lg tx-weiss">
                {{ t("Imprint.copyrighttext") }}
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useI18n } from "vue-i18n";

export default {
  name: "Imprint",

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
