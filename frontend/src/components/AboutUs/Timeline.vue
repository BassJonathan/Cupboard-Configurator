<template>
  <div class="tw-container tw-mx-auto tw-w-full tw-h-full">
    <div class="tw-relative tw-wrap tw-overflow-hidden tw-p-10 tw-h-full">
      <div
        class="
          tw-border-2-2
          tw-absolute
          tw-border-opacity-20
          tw-border-gray-700
          tw-h-full
          tw-border
        "
        style="left: 50%"
      ></div>

      <div
        class="
          tw-mb-8
          flex
          tw-justify-between tw-items-center tw-w-full tw-right-timeline
        "
      >
        <div class="tw-order-1 tw-w-5/12"></div>
        <div
          class="
            tw-z-20
            tw-flex
            tw-items-center
            tw-order-1
            tw-bg-gray-800
            tw-shadow-xl
            tw-w-8
            tw-h-8
            tw-rounded-full
          "
        >
          <p class="tw-mx-auto tw-font-semibold text-white tw-text-2xl">1</p>
        </div>
        <div
          class="
            tw-order-1
            tw-rounded-lg
            tw-shadow-xl
            tw-w-5/12
            tw-px-6
            tw-py-4
            tw-bg-gradient-to-br
            tw-from-primary-gradient2
            tw-to-primary-gradient3
          "
        >
          <p class="tw-mb-3 tw-font-bold tw-text-white tw-text-xl">
            {{ t("Timeline.retail") }}
          </p>
          <p
            class="
              tw-text-sm
              tw-leading-snug
              tw-tracking-wide
              tw-text-white
              tw-text-opacity-100
            "
          >
            {{ t("Timeline.un") }}
          </p>
        </div>
      </div>

      <div
        class="
          tw-mb-8
          flex
          tw-justify-between
          tw-flex-row-reverse
          tw-items-center
          tw-w-full
          tw-left-timeline
        "
      >
        <div class="tw-order-1 tw-w-5/12"></div>
        <div
          class="
            tw-z-20 tw-flex tw-items-center tw-order-1
            bg-gray-800
            tw-shadow-xl tw-w-8 tw-h-8 tw-rounded-full
          "
        >
          <p class="tw-mx-auto text-white tw-font-semibold tw-text-2xl">2</p>
        </div>
        <div
          class="
            tw-order-1
            bg-cb-red
            tw-rounded-lg
            tw-shadow-xl
            tw-w-5/12
            tw-px-6
            tw-py-4
            tw-bg-gradient-to-br
            tw-from-primary-gradient2
            tw-to-primary-gradient3
          "
        >
          <p class="tw-mb-3 tw-font-bold text-white tw-text-xl">
            {{ t("Timeline.tran") }}
          </p>
          <p
            class="
              tw-text-sm
              tw-font-medium
              tw-leading-snug
              tw-tracking-wide
              tw-text-white
              tw-text-opacity-100
            "
          >
            {{ t("Timeline.conc") }}
          </p>
        </div>
      </div>

      <div
        class="
          tw-mb-8
          tw-flex
          tw-justify-between
          tw-items-center
          tw-w-full
          tw-right-timeline
        "
      >
        <div class="tw-order-1 tw-w-5/12"></div>
        <div
          class="
            tw-z-20 tw-flex tw-items-center tw-order-1
            bg-gray-800
            tw-shadow-xl tw-w-8 tw-h-8 tw-rounded-full
          "
        >
          <p class="tw-mx-auto text-white tw-font-semibold tw-text-2xl">3</p>
        </div>
        <div
          class="
            tw-order-1
            bg-cb-brown
            tw-rounded-lg
            tw-shadow-xl
            tw-w-5/12
            tw-px-6
            tw-py-4
            tw-bg-gradient-to-br
            tw-from-primary-gradient2
            tw-to-primary-gradient3
          "
        >
          <p class="tw-mb-3 tw-font-bold tw-text-white tw-text-xl">
            {{ t("Timeline.cor") }}
          </p>
          <p
            class="
              text-sm
              leading-snug
              tracking-wide
              text-white text-opacity-100
            "
          >
            {{ t("Timeline.pand") }}
          </p>
        </div>
      </div>

      <div
        class="
          tw-mb-8
          tw-flex
          tw-justify-between
          tw-flex-row-reverse
          tw-items-center
          tw-w-full
          tw-left-timeline
        "
      >
        <div class="tw-order-1 tw-w-5/12"></div>
        <div
          class="
            tw-z-20 tw-flex tw-items-center tw-order-1
            bg-gray-800
            tw-shadow-xl tw-w-8 tw-h-8 tw-rounded-full
          "
        >
          <p class="tw-mx-auto text-white tw-font-semibold tw-text-2xl">4</p>
        </div>
        <div
          class="
            tw-order-1
            bg-cb-red
            tw-rounded-lg tw-shadow-xl tw-w-5/12 tw-px-6
            py-4
            tw-bg-gradient-to-br
            tw-from-primary-gradient2
            tw-to-primary-gradient3
          "
        >
          <p class="tw-mb-3 tw-font-bold text-white tw-text-xl">
            {{ t("Timeline.today") }}
          </p>
          <p
            class="
              tw-text-sm
              tw-font-medium
              tw-leading-snug
              tw-tracking-wide
              tw-text-white
              tw-text-opacity-100
            "
          >
            {{ t("Timeline.save") }} Build your own Cupboard
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useI18n } from "vue-i18n";

export default {
  name: "index",
  setup() {
    const { t } = useI18n({
      inheritLocale: true,
      useScope: "global",
    });
    return { t };
  },
};
</script>

<style></style>
