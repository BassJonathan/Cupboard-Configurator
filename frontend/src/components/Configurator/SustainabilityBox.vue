<template>
    <div class="tw-w-full">
        <div class="tw-w-full tw-bg-green tw-rounded-xl tw-p-5">
            <div>
                 <div class="tw-w-full tw-text-2xl tw-font-semibold tw-text-white">
                     {{ t("SustainabilityBox.tog") }}
                </div>
                <div class="tw-w-full tw-text-xl tw-text-gray-200 tw-pl-5">
                    {{ t("SustainabilityBox.um") }}
                </div>
            </div>
            <div class="tw-h-44 tw-overflow-y-scroll">
                <div class="tw-w-full tw-pt-4">
                    <div class="tw-w-full tw-text-xl tw-font-semibold tw-text-white">
                        {{ t("SustainabilityBox.neu") }}
                    </div>
                    <div class="tw-w-full tw-text-lg tw-text-gray-100">
                        {{ t("SustainabilityBox.product") }}
                    </div>
                </div>
                <div class="tw-w-full tw-pt-4">
                    <div class="tw-w-full tw-text-xl tw-font-semibold tw-text-white">
                        {{ t("SustainabilityBox.loc") }}
                    </div>
                    <div class="tw-w-full tw-text-lg tw-text-gray-100">
                        {{ t("SustainabilityBox.ueb") }}
                    </div>
                </div>
                <div class="tw-w-full tw-pt-4">
                    <div class="tw-w-full tw-text-xl tw-font-semibold tw-text-white">
                        {{ t("SustainabilityBox.zert") }}
                    </div>
                    <div class="tw-w-full tw-text-lg tw-text-gray-100">
                        {{ t("SustainabilityBox.fsc") }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useI18n } from "vue-i18n";

export default {
    setup() {
    const { t, locale } = useI18n({
      inheritLocale: true,
      useScope: "global",
    });
    return { t, locale };
  }
}
</script>

<style>

</style>