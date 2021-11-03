<template>
  <div>
    <!--<p class="test tw-text-4xl tw-text-center tw-w-100 tw-m-40">This is the Imprint Page! <br> WIP</p>-->
    <div>
      <div class="tw-bg-primary tw-text-white">
        <div
          class="
            w-screen
            tw-text-4xl tw-text-center tw-font-extrabold
            heading_font
            bg-hauptfarbe
            tx-weiss
          "
        >
          <br /><br />
        </div>
        <div
          class="
            w-screen
            tw-text-4xl tw-text-center tw-font-extrabold
            heading_font
            bg-hauptfarbe
            tx-weiss
          "
        >
          <br /><br />{{ t("Imprint.start") }}
        </div>
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
                dieser Website und verantwortlich für den Inhalt gemäß §5 TMG
                und § 55 RStV ist:<br />
                Cupboard Inc.<br />
                Musterstraße 69<br />
                42069 Musterstadt<br />
                Deutschland<br />
                <br />
                Vertreten durch Michael Canadi (Geschäftsführer)<br />
                E-Mail: Michael.Canadi@lehre.dhbw-stuttgart.de<br />
                Telefon: 0711 / 6159115<br />
                <br />
                Eingetragen am Amtsgericht Stuttgart, HRB 722469<br />
                Umsatzsteuer-ID: DE 302263985<br />
                <br />
                Konzept + Design: Closing Tag GmbH<br />
                Programmierung: Closing Tag GmbH<br />
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
