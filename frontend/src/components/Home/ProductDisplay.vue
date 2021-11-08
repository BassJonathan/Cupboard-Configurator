<template>
  <div>
    <div class="tw-w-full tw-flex tw-justify-center tw-items-center">
      <div class="tw-w-3/5 all_container tw-h-96 tw-p-10">
        <div class="tw-w-full tw-h-full tw-flex tw-flex-col tw-justify-center">
          <div
            class="
              tw-text-5xl
              tw-font-bold
              tw-text-transparent
              tw-bg-gradient-to-br
              tw-from-primary-gradient2
              tw-to-primary-gradient4
              tw-bg-clip-text
            "
          >
            {{ t("ProductDisplay.heading") }}
          </div>
          <div
            class="
              tw-text-2xl tw-font-semibold tw-text-gray-500 tw-px-4 tw-pt-5
            "
          >
            {{ t("ProductDisplay.subheading") }}
          </div>
          <div class="tw-text-xl tw-pt-8">
            {{ t("ProductDisplay.text") }}
          </div>
          <div class="tw-text-2xl tw-pt-8 tw-text-center">
            {{ t("ProductDisplay.question") }}
          </div>
          <div class="tw-w-full tw-flex tw-justify-center tw-pt-2">
            <router-link
              class="
                btn btn-primary
                tw-ml-4
                tw-text-xl
                tw-transition
                tw-duration-700
                tw-ease-in-out
                tw-bg-gradient-to-tr
                tw-from-primary-gradient3
                tw-to-primary-gradient5
                hover:tw-from-primary-gradient4 hover:tw-to-primary-gradient6
              "
              to="/products"
              >{{ t("ProductDisplay.button") }}</router-link
            >
          </div>
        </div>
      </div>
      <div class="tw-w-2/5 tw-flex tw-items-center">
        <div
          id="carouselProducts"
          class="carousel carousel-dark slide tw-h-full tw-w-full"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselProducts"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselProducts"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselProducts"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner all_container tw-flex tw-items-center">
            <div
              v-for="product in products"
              :key="product.id"
              class="carousel-item tw-h-full"
              :class="{ active: isFirst(product) }"
              data-bs-interval="5000"
            >
              <img
                :src="product.imageUrl"
                class="tw-object-contain tw-w-full tw-h-full"
                :alt="product.name"
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselProducts"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselProducts"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useI18n } from "vue-i18n";

export default {
  name: "Individuality",
  setup() {
    const { t, locale } = useI18n({
      inheritLocale: true,
      useScope: "global",
    });
    return { t, locale };
  },
  data() {
    return {
      categories: [],
      products: [],
    };
  },
  async mounted() {
    const { data } = await this.axios.get("catalogue/categories");
    this.categories = data;
    console.log(this.categories);
    for (const categorie of this.categories) {
      const { data } = await this.axios.get(
        "catalogue/categories/" + categorie.id + "/products"
      );
      this.products.push(data[0]);
    }
    console.log(this.products);
  },
  methods: {
    isFirst(product) {
      console.log(product);
      if (product === this.products[0]) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style>
.all_container {
  height: 600px;
}
</style>
