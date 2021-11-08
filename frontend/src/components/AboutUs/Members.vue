<template>
  <div>
    <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div
          class="
            w-full
            bg-white
            rounded-lg
            sahdow-lg
            overflow-hidden
            flex flex-col
            md:flex-row
          "
        >
          <div class="w-full md:w-2/5 h-80">
            <img
              class="object-center object-cover w-full h-full"
              src="/img/Team-Member_1.png"
              alt="Error"
            />
          </div>
          <div class="w-full md:w-3/5 text-left p-6 md:p-4 space-y-2">
            <p class="text-2xl text-gray-700 font-bold">Michael Canadi</p>
            <p class="text-xl text-gray-400 font-normal">
              Executive Consultant, Data Strategy and Services
            </p>
            <div class="flex justify-start space-x-2">
              <a href="#" class="text-gray-500 hover:text-gray-600">
                <svg
                  class="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    fill-rule="evenodd"
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div
          class="
            w-full
            bg-white
            rounded-lg
            sahdow-lg
            overflow-hidden
            flex flex-col
            md:flex-row
          "
        >
          <div class="w-full md:w-2/5 h-80">
            <img
              class="object-center object-cover w-full h-full"
              src="/img/Team-Member_2.png"
              alt="Error"
            />
          </div>
          <div class="w-full md:w-3/5 text-left p-4 md:p-4 space-y-2">
            <p class="text-2xl text-gray-700 font-bold">Jochen Herrmann</p>
            <p class="text-xl text-gray-400 font-normal">
              Solution Architect , {{ t("Members.fut") }}
            </p>
            <div class="flex justify-start space-x-2">
              <a href="#" class="text-gray-500 hover:text-gray-600">
                <svg
                  class="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    fill-rule="evenodd"
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div
          class="
            w-full
            bg-white
            rounded-lg
            sahdow-lg
            overflow-hidden
            flex
            items-center
            flex-wrap
            object-center
            flex-col
            md:flex-row
          "
        >
          <div class="w-full md:w-2/5 tw-object-center h-80">
            <img
              class="
                flex-wrap
                items-center
                object-center object-cover
                w-full
                h-full
              "
              src="/img/Team-Member_3.jpeg"
              alt="Error"
            />
          </div>
          <div
            class="
              w-full
              md:w-3/5
              text-left
              p-4
              flex-wrap
              object-center
              items-center
              md:p-4
              space-y-2
            "
          >
            <p class="text-2xl text-gray-700 font-bold">Lucy</p>
            <p class="text-xl text-gray-400 font-normal">
              {{ t("Members.moral") }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { useI18n } from "vue-i18n";

export default {
  name: "Members",
  setup() {
    const { t, locale } = useI18n({
      inheritLocale: true,
      useScope: "global",
    });
    return { t, locale };
  },
};
</script>

<style scoped></style>
