<template>

<div>
    <div>
    <div class="tw-bg-linear-pink-invert pb-12">
        <div class="mx-auto tw-container tw-pt-4 tw-flex tw-flex-col tw-items-center tw-justify-center">
            <div class="test tw-shadow-12x4 hauptfarbe tw-center tw-bottom" width="79" height="92" viewBox="0 0 79 92" fill="#012840"><img src="/img/cupboard_logo.png" alt="Error"> </div>

            <div class="tw-text-black tw-flex tw-flex-col md:items-center f-f-l pt-3">
                <p class="tw-text-2xl tw-font-black logo_font">Motto von Cupboard Inc.</p>
                <div class="my-6 tw-text-base tw-text-color f-f-l">
                    <ul class="md:flex tw-items-center">
                        <li class="md:mr-6 cursor-pointer pt-4 lg:py-0"><router-link class="nav_link" to="/">Home</router-link> </li>
                        <li class="md:mr-6 cursor-pointer pt-4 lg:py-0"><router-link class="nav_link" to="/products">Products</router-link> </li>
                        <li class="md:mr-6 cursor-pointer pt-4 lg:py-0"><router-link class="nav_link" to="/configurator">Configurator</router-link></li>
                        <li class="md:mr-6 cursor-pointer pt-4 lg:py-0"><router-link class="nav_link" to="/goal">Our Goal</router-link></li>
                        <li class="md:mr-6 cursor-pointer pt-4 lg:py-0"><router-link class="nav_link" to="/about">About Us</router-link></li>
                        <li class="md:mr-6 cursor-pointer pt-4 lg:py-0"><router-link class="nav_link" to="/imprint">Imprint</router-link></li>
                    </ul>
                </div>
                <div class="tw-text-sm tw-text-color mb-10 f-f-l">
                    <p>© 2021 Cupboard Inc. All rights reserved</p>
                </div>
            </div>
            <div class="w-9/12 h-0.5 bg-gray-100 rounded-full"></div>
        </div>
    </div>
</div>
<div class="tw-w-100 tw-bg-primary">
    <div class="tw-grid tw-grid-rows-2 tw-grid-cols-4 tw-gap-6 sm:tw-mx-3 md:tw-mx-3 lg:tw-mx-3 xl:tw-mx-3">
        <div class="tw-col-span-2 tw-w-full tw-overflow-hidden tw-bg-gray-500">
            <div class="t tw-m-6">
                <img src="/img/cupboard_logo.png" alt="Logo" class="tw-inline-block tw-h-24 tw-w-24">
                <p class="tw-text-white tw-inline-block logo_font tw-text-4xl tw-pl-5 tw-align-middle">Cupboard Limited</p>
            </div>
        </div>
        <div class="flex tw-justify-end tw-align-right tw-col-span-2 tw-h-12">
            <img src="/img/Footer/tuev-siegel.png" alt="tuev" class="tw-h-28 tw-inline-block ">
            <img src="/img/Footer/gia-siegel.png" alt="GIA" class="tw-h-28 tw-inline-block tw-pl-12">
        </div>
        <div>
            <div class="tw-w-full tw-py-3 tw-px-5 tw-bg-white tw-rounded">
                <p class="heading_font"><router-link to="/about">Kontakt:</router-link></p>
                <p><router-link to="/about">Michael Canadi</router-link></p>
                <p><router-link to="/about">Jochen Herrmann</router-link></p>
            </div>
        </div>
        <div>
             <div class="tw-w-full tw-py-3 tw-px-5 tw-bg-white tw-rounded">
                <p class="heading_font"><router-link to="/imprint">Weitere Informationen:</router-link></p>
                <p><router-link to="/imprint">Impressum</router-link></p>
                <p><router-link to="/imprint">Datenschutz</router-link></p>
            </div>
        </div>
        <div class="flex tw-justify-end tw-align-right tw-col-span-2 tw-h-12">
            <img src="/img/Footer/stwa-siegel.png" alt="stwa" class="tw-h-28 tw-inline-block">
            <img src="/img/Footer/Logo_Blauer-Engel.png" alt="Blauer Engel" class="tw-h-28 tw-inline-block tw-pl-4">
            <img src="/img/Footer/PEFC_Logo.jpeg" alt="PEFC" class="tw-h-28 tw-inline-block tw-pl-4">
            <img src="/img/Footer/FSC_Logo.jpeg" alt="FSC" class="tw-h-28 tw-inline-block tw-pl-4">
         </div>
    </div>
    <div class="w-9/12 h-0.5 bg-gray-100 rounded-full"></div>
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
.tx-hauptfarbe{
    color: #012840
}
.bg-hauptfarbe{
    background-color: #012840;
}
.tx-yellow{
    color:  #8C8A0A
}
@import url("https://cdn.tuk.dev/dist/css/tailwind-v2.2.11.min.css");

</style>