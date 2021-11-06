<template>
  <div class = "tw-grid tw-grid-cols-2">
    <div class ="tw-ml-8 tw-mt-16">
    <p class ="tw-text-3xl">• Premium Schrankhersteller aus Berlin</p>
    <p class ="tw-text-2xl tw-ml-8">• Aufbauschränke</p>
    <p class ="tw-text-2xl tw-ml-8">• Sideboards</p>
    <p class ="tw-text-2xl tw-ml-8">• Highboards</p>
    <p class ="tw-text-2xl tw-ml-8">• Lowboards</p><br />

    <p class ="tw-text-3xl">• 20 Filialen in D/A/CH/IT/FR</p>
    <p class ="tw-text-3xl">• Umsatz: 3 Millionen Euro</p>
    <p class ="tw-text-3xl">• Mitarbeiter: 430</p>
    </div>
    <div class =" tw-mr-8">
      <p class ="tw-text-3xl tw-text-center">Unsere Lokationen:</p>
      <img
              class="object-center object-cover w-full h-full"
              src="/img/Locations.png"
              alt="Error"
            />
    </div>>
  </div>

</template>

<script>
export default {
  name: "index",
  data() {
    return {
      auto: true,
      light: false,
      dark: false,
    };
  },
  mounted() {},
  methods: {
    toggle(event) {
      if (event.target.value === "auto") {
        this.auto = true;
        this.light = false;
        this.dark = false;
      }
      if (event.target.value === "light") {
        this.auto = false;
        this.light = true;
        this.dark = false;
      }
      if (event.target.value === "dark") {
        this.auto = false;
        this.light = false;
        this.dark = true;
      }
    },
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
.bg-cb-brown{
  background-color:  #403F08;
}
.bg-cb-red{
  background-color:  #400808;
}

.tx-yellow {
  color: #8c8a0a;
}
@import url("https://cdn.tuk.dev/dist/css/tailwind-v2.2.11.min.css");
</style>

