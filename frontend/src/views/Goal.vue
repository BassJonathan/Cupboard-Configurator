<template>
  <div class="bg-gray-100 tw-mt-20 tw-px-28 tw-pb-20">
    <div class="tw-w-full tw-py-6">
      <div
        class="
          tw-w-full
          tw-text-6xl
          tw-py-1
          tw-font-bold
          tw-text-transparent
          tw-bg-gradient-to-br
          tw-from-green-gradient1
          tw-to-green-gradient3
          tw-bg-clip-text
        "
      >
        {{ t("Goal.goal") }}
      </div>
      <div class="tw-w-full tw-text-3xl tw-text-gray-500 tw-px-8 tw-py-2">
        {{ t("Goal.fut") }}
      </div>
      <div class="tw-h-0.5 tw-bg-gray-300 tw-rounded-full tw-w-full"></div>
    </div>
    <div class="tw-container tw-mx-auto">
      <div role="article" class="tw-bg-gray-100">
        <div class="tw-pb-10">
          <div class="tw-flex tw-flex-col lg:tw-flex-row tw-flex-wrap">
            <div class="tw-mt-4 tw-w-full">
              <div>
                <!-- Headline -->

                <h1
                  class="
                    tw-text-3xl tw-ml-2
                    lg:tw-ml-0 lg:tw-text-4xl
                    tw-font-bold tw-text-gray-900 tw-tracking-normal
                    lg:tw-w-11/12
                  "
                >
                  {{ t("Goal.headline") }}
                  <!-- Headlinetext aus seperater Datei -->
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div class="tw-px-6 xl:tw-px-0">
          <div
            class="
              grid
              sm:grid-cols-1
              md:grid-cols-2
              lg:grid-cols-3
              xl:grid-cols-3
              pb-6
              gap-8
            "
          >
            <!-- Kachel 1 -->

            <!-- 1. Bild einfügen -->

            <div role="cell" class="bg-gray-100">
              <div class="bg-white p-5 rounded-md relative h-full w-full">
                <span
                  ><img
                    class="bg-gray-200 p-2 mb-5 rounded-full"
                    src="/img/Customer_is_King.jpeg"
                    alt="Error"
                /></span>

                <!-- Erste Überschrift zu Bild einfügen-->

                <h1 class="pb-4 tw-text-center text-2xl font-semibold">
                  {{ t("Goal.head1") }}
                </h1>

                <!-- Text 1 -->

                <div class="my-5">
                  <div
                    class="
                      flex
                      items-center
                      pb-4
                      dark:border-gray-700
                      cursor-pointer
                      w-full
                      space-x-3
                    "
                  >
                    <!-- Pfeil einfügen -->

                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12.5"
                        height="16"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>

                    <!-- Text zu Pfeil hinzufügen -->

                    <h4 class="text-xl text-gray-900 dark:text-gray-100">
                      {{ t("Goal.sub1_1") }}
                    </h4>
                  </div>

                  <!-- Text 2 -->

                  <div
                    class="
                      flex
                      items-center
                      pb-4
                      dark:border-gray-700
                      cursor-pointer
                      w-full
                      space-x-3
                    "
                  >
                    <!-- Pfeil einfügen -->

                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12.5"
                        height="16"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>

                    <!-- Text zu Pfeil hinzufügen -->

                    <h4 class="text-xl text-gray-900 dark:text-gray-100">
                      {{ t("Goal.sub1_2") }}
                    </h4>
                  </div>

                  <!-- Text 3 -->

                  <div
                    class="
                      flex
                      items-center
                      pb-4
                      dark:border-gray-700
                      cursor-pointer
                      w-full
                      space-x-3
                    "
                  >
                    <!-- Pfeil einfügen -->

                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12.5"
                        height="16"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>

                    <!-- Text zu Pfeil hinzufügen -->

                    <h4 class="text-xl text-gray-900 dark:text-gray-100">
                      {{ t("Goal.sub1_3") }}
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            <!-- Kachel 2 -->

            <!-- 2. Bild einfügen -->

            <div role="cell" class="bg-gray-100">
              <div class="bg-white p-5 rounded-md relative h-full w-full">
                <span
                  ><img
                    class="bg-gray-200 p-2 mb-5 rounded-full"
                    src="/img/Icon_Nachhaltigkeit_01.jpg"
                    alt="Error"
                /></span>

                <!-- Zweite Überschrift zu 2. Bild einfügen-->

                <h1 class="pb-4 tw-text-center text-2xl font-semibold">
                  {{ t("Goal.head2") }}
                </h1>

                <!-- Text 1 -->

                <div class="my-5">
                  <div
                    class="
                      flex
                      items-center
                      pb-4
                      dark:border-gray-700
                      cursor-pointer
                      w-full
                      space-x-3
                    "
                  >
                    <!-- Pfeil einfügen -->

                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12.5"
                        height="16"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>

                    <!-- Text zu Pfeil hinzufügen -->

                    <h4 class="text-xl text-gray-900 dark:text-gray-100">
                      {{ t("Goal.sub2_1") }}
                    </h4>
                  </div>

                  <!-- Text 2 -->

                  <div
                    class="
                      flex
                      items-center
                      pb-4
                      dark:border-gray-700
                      cursor-pointer
                      w-full
                      space-x-3
                    "
                  >
                    <!-- Pfeil einfügen -->

                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12.5"
                        height="16"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>

                    <!-- Text zu Pfeil hinzufügen -->

                    <h4 class="text-xl text-gray-900 dark:text-gray-100">
                      {{ t("Goal.sub2_2") }}
                    </h4>
                  </div>

                  <!-- Text 3 -->

                  <div
                    class="
                      flex
                      items-center
                      pb-4
                      dark:border-gray-700
                      cursor-pointer
                      w-full
                      space-x-3
                    "
                  >
                    <!-- Pfeil einfügen -->

                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12.5"
                        height="16"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>

                    <!-- Text zu Pfeil hinzufügen -->

                    <h4 class="text-xl text-gray-900 dark:text-gray-100">
                      {{ t("Goal.sub2_3") }}
                    </h4>
                  </div>

                  <h1 class="pb-4 tw-text-center text-2xl font-semibold">
                    {{ t("Goal.arrowheader") }}
                  </h1>
                  <div class="tw-flex tw-justify-center tw-w-full">
                    <img
                      class="tw-h-16 tw-w-16"
                      src="/img/arrow.png"
                      alt="Error"
                    />
                  </div>
                </div>
              </div>
            </div>

            <!-- Kachel 3 -->

            <!-- 3. Bild einfügen -->

            <div role="cell" class="bg-gray-100">
              <div class="bg-white p-5 rounded-md relative h-full w-full">
                <span
                  ><img
                    class="bg-gray-200 p-2 mb-5 rounded-full"
                    src="/img/Individual_Cupboards.jpeg"
                    alt="Error"
                /></span>

                <!-- Dritte Überschrift zu 3. Bild einfügen-->

                <h1 class="pb-4 tw-text-center text-2xl font-semibold">
                  {{ t("Goal.head3") }}
                </h1>

                <!-- Text 1 -->

                <div class="my-5">
                  <div
                    class="
                      flex
                      items-center
                      pb-4
                      dark:border-gray-700
                      cursor-pointer
                      w-full
                      space-x-3
                    "
                  >
                    <!-- Pfeil einfügen -->

                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12.5"
                        height="16"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>

                    <!-- Text zu Pfeil hinzufügen -->

                    <h4 class="text-xl text-gray-900 dark:text-gray-100">
                      {{ t("Goal.sub3_1") }}
                    </h4>
                  </div>

                  <!-- Text 2 -->

                  <div
                    class="
                      flex
                      items-center
                      pb-4
                      dark:border-gray-700
                      cursor-pointer
                      w-full
                      space-x-3
                    "
                  >
                    <!-- Pfeil einfügen -->

                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12.5"
                        height="16"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>

                    <!-- Text zu Pfeil hinzufügen -->

                    <h4 class="text-xl text-gray-900 dark:text-gray-100">
                      {{ t("Goal.sub3_2") }}
                    </h4>
                  </div>

                  <!-- Text 3 -->

                  <div
                    class="
                      flex
                      items-center
                      pb-4
                      dark:border-gray-700
                      cursor-pointer
                      w-full
                      space-x-3
                    "
                  >
                    <!-- Pfeil einfügen -->

                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12.5"
                        height="16"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>

                    <!-- Text zu Pfeil hinzufügen -->

                    <h4 class="text-xl text-gray-900 dark:text-gray-100">
                      {{ t("Goal.sub3_3") }}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Bild  -->
          <div>
            <img class="tw-w-full" src="/img/production.png" alt="Error" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// Import für Übersetzung
import { useI18n } from "vue-i18n";

export default {
  name: "Goal", // Name des Orderns wo die Übersetzungen sind

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
