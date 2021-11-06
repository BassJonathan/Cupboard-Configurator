<template>
<div class="container tw-mx-auto tw-w-full tw-h-full">
  <div class="tw-relative tw-wrap tw-overflow-hidden tw-p-10 tw-h-full">
    <div class="tw-border-2-2 tw-absolute tw-border-opacity-20 tw-border-gray-700 tw-h-full tw-border" style="left: 50%"></div>

    <div class="tw-mb-8 flex tw-justify-between tw-items-center tw-w-full tw-right-timeline">
      <div class="tw-order-1 tw-w-5/12"></div>
      <div class="tw-z-20 tw-flex tw-items-center tw-order-1 tw-bg-gray-800 tw-shadow-xl tw-w-8 tw-h-8 tw-rounded-full">
        <p class="tw-mx-auto tw-font-semibold text-white tw-text-2xl">1</p>
      </div>
      <div class="tw-order-1 bg-cb-brown tw-rounded-lg tw-shadow-xl tw-w-5/12 tw-px-6 tw-py-4">
        <p class="tw-mb-3 tw-font-bold tw-text-white tw-text-xl">Bisher physischer Retail</p>
        <p class="tw-text-sm tw-leading-snug tw-tracking-wide tw-text-white tw-text-opacity-100">Unsere Produkte werden ausschließlich in unseren eigenen Filialen verkauft</p>
      </div>
    </div>

    <div class="tw-mb-8 flex tw-justify-between tw-flex-row-reverse tw-items-center tw-w-full tw-left-timeline">
      <div class="tw-order-1 tw-w-5/12"></div>
      <div class="tw-z-20 tw-flex tw-items-center tw-order-1 bg-gray-800 tw-shadow-xl tw-w-8 tw-h-8 tw-rounded-full">
        <p class="tw-mx-auto text-white tw-font-semibold tw-text-2xl">2</p>
      </div>
      <div class="tw-order-1 bg-cb-red tw-rounded-lg tw-shadow-xl tw-w-5/12 tw-px-6 tw-py-4">
        <p class="tw-mb-3 tw-font-bold text-white tw-text-xl">Seit 2019 Digitale Transformation</p>
        <p class="tw-text-sm tw-font-medium tw-leading-snug tw-tracking-wide tw-text-white tw-text-opacity-100">Erarbeitung von Konzepten für die
digitale Transformation unseres
Verkaufsprozesses.<br />
Erstes Ergebnis: Build your own
Cupboard<br />
Umsetzung digitaler Lösungen im
Backend</p>
      </div>
    </div>
    
    <div class="tw-mb-8 tw-flex tw-justify-between tw-items-center tw-w-full tw-right-timeline">
      <div class="tw-order-1 tw-w-5/12"></div>
      <div class="tw-z-20 tw-flex tw-items-center tw-order-1 bg-gray-800 tw-shadow-xl tw-w-8 tw-h-8 tw-rounded-full">
        <p class="tw-mx-auto text-white tw-font-semibold tw-text-2xl">3</p>
      </div>
      <div class="tw-order-1 bg-cb-brown tw-rounded-lg tw-shadow-xl tw-w-5/12 tw-px-6 tw-py-4">
        <p class="tw-mb-3 tw-font-bold tw-text-white tw-text-xl">2020 Corona Pandemie</p>
        <p class="text-sm leading-snug tracking-wide text-white text-opacity-100">Schließung alle Filialen während
des Lockdowns in den einzelnen Ländern.<br />
Kein Bestellungseingang während
dieser Zeit.</p>
      </div>
    </div>

    <div class="tw-mb-8 tw-flex tw-justify-between tw-flex-row-reverse tw-items-center tw-w-full tw-left-timeline">
      <div class="tw-order-1 tw-w-5/12"></div>
      <div class="tw-z-20 tw-flex tw-items-center tw-order-1 bg-gray-800 tw-shadow-xl tw-w-8 tw-h-8 tw-rounded-full">
        <p class="tw-mx-auto text-white tw-font-semibold tw-text-2xl">4</p>
      </div>
      <div class="tw-order-1 bg-cb-red tw-rounded-lg tw-shadow-xl tw-w-5/12 tw-px-6 py-4">
        <p class="tw-mb-3 tw-font-bold text-white tw-text-xl">Heute</p>
        <p class="tw-text-sm tw-font-medium tw-leading-snug tw-tracking-wide tw-text-white tw-text-opacity-100">Beschlossener Sparkurs in allen
Bereichen <br />
Backend befindet sich in der
Entwicklung<br />
Entscheidung für die
Entwicklung: Build your own
Cupboard</p>
      </div>
    </div>
  </div>
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

