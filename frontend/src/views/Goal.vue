<template>
    <div class="bg-gray-100">
      <div class="container mx-auto">
        <div role="article" class="bg-gray-100 py-12 md:px-8">
          <div class="px-4 xl:px-0 py-10">
            <div class="flex flex-col lg:flex-row flex-wrap">
              <div class="mt-4 lg:mt-0 lg:w-3/5">
                <div>

                  <!-- Headline -->

                  <h1
                    class="
                      text-3xl
                      ml-2
                      lg:ml-0 lg:text-4xl
                      font-bold
                      text-gray-900
                      tracking-normal
                      lg:w-11/12
                    "
                  >
                    {{ t("Goal.headline") }}  <!-- Headlinetext aus seperater Datei -->
                  </h1>
                </div>
              </div>
            </div>
          </div>


          <div class="px-6 xl:px-0">
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

                      <h4 class="text-md text-gray-900 dark:text-gray-100">
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

                      <h4 class="text-md text-gray-900 dark:text-gray-100">
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

                      <h4 class="text-md text-gray-900 dark:text-gray-100">
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

                      <h4 class="text-md text-gray-900 dark:text-gray-100">
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

                      <h4 class="text-md text-gray-900 dark:text-gray-100">
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

                      <h4 class="text-md text-gray-900 dark:text-gray-100">
                        {{ t("Goal.sub2_3") }}
                      </h4>
                    </div>

                  

                  <h1 class="pb-4 tw-text-center text-2xl font-semibold">
                    {{ t("Goal.arrowheader") }}
                  </h1>

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

                  <span
                    ><img
                      src="/img/arrow.png"
                      height="35"
                      width="30"
                      alt="Error"
                  /></span>
                  
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

                      <h4 class="text-md text-gray-900 dark:text-gray-100">
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

                      <h4 class="text-md text-gray-900 dark:text-gray-100">
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

                      <h4 class="text-md text-gray-900 dark:text-gray-100">
                        {{ t("Goal.sub3_3") }}
                      </h4>
                    </div>

                  </div>
                </div>
              </div>

              <span
                    ><img
                      class="tw-object-cover tw-w-full tw-h-screen tw-absolute"
                      src="/img/production.png"
                      alt="Error"
                  /></span>

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
