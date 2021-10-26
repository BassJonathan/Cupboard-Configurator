<template>

<div>
    <div class="tw-bg-linear-pink-invert pb-12">
        <div class="mx-auto tw-container pt-20 lg:pt-72 tw-flex tw-flex-col tw-items-center tw-justify-center">
            <div class="test tw-shadow-12x4 hauptfarbe tw-center tw-bottom" width="79" height="92" viewBox="0 0 79 92" fill="#012840"><img src="/img/cupboard_logo.png" alt="Error"> </div>

            <div class="tw-text-black tw-flex tw-flex-col md:items-center f-f-l pt-3">
                <p class="tw-text-2xl tw-font-black logo_font">Motto von Cupboard Inc.</p>
                <div class="my-6 tw-text-base tw-text-color f-f-l">
                    <ul class="md:flex tw-items-center">
                        <li class="md:mr-6 cursor-pointer pt-4 lg:py-0"><router-link class="nav_link" to="/">Home</router-link> </li>
                        <li class="md:mr-6 cursor-pointer pt-4 lg:py-0"><router-link class="nav_link" to="/about">Products</router-link> </li>
                        <li class="md:mr-6 cursor-pointer pt-4 lg:py-0"><router-link class="nav_link" to="/anim">Configurator</router-link></li>
                        <li class="md:mr-6 cursor-pointer pt-4 lg:py-0"><router-link class="nav_link" to="/anim">Our Goal</router-link></li>
                        <li class="md:mr-6 cursor-pointer pt-4 lg:py-0"><router-link class="nav_link" to="/i18n">About Us</router-link></li>
                        <li class="md:mr-6 cursor-pointer pt-4 lg:py-0"><router-link class="nav_link" to="/bootstrap">Imprint</router-link></li>
                    </ul>
                </div>
                <div class="tw-text-sm tw-text-color mb-10 f-f-l">
                    <p>© 2021 Cupboard Inc. All rights reserved</p>
                </div>
            </div>
            <div class="w-9/12 h-0.5 bg-gray-100 rounded-full"></div>
            <div class="tw-flex tw-justify-between tw-items-center pt-12">
                <div class="test tw-shadow-12x4 hauptfarbe tw-center tw-bottom" width="79" height="92" viewBox="0 0 79 92" fill="#012840"><img src="/img/Footer/PEFC_Logo.jpeg" alt="Error"> </div>
                <div class="test tw-shadow-12x4 hauptfarbe tw-center tw-bottom" width="79" height="92" viewBox="0 0 79 92" fill="#012840"><img src="/img/Footer/Logo_Blauer-Engel.png" alt="Error"> </div>
                <div class="test tw-shadow-12x4 hauptfarbe tw-center tw-bottom" width="79" height="92" viewBox="0 0 79 92" fill="#012840"><img src="/img/Footer/FSC_Logo.jpeg" alt="Error"> </div>
            </div>
        </div>
    </div>     
</div>  


<div class="tw-w-100 tw-bg-primary">
    <div class="tw-grid tw-grid-rows-2 tw-grid-cols-4 tw-gap-6 sm:tw-mx-3 md:tw-mx-3 lg:tw-mx-3 xl:tw-mx-3">
        <div class="tw-col-span-2 tw-w-full tw-overflow-hidden tw-bg-gray-500">
            <div class="t tw-m-3">
                <img src="/img/cupboard_logo.png" alt="Logo" class="tw-inline-block tw-h-20 tw-w-20">
                <p class="tw-text-white tw-inline-block logo_font tw-text-4xl tw-pl-5 tw-align-middle">Cupboard Limited</p>
            </div>
        </div>
        <div class="tw-col-span-2 tw-h-12">    
            <img src="/img/Footer/tuev-siegel.png" alt="tuev" class="tw-h-28 tw-inline-block tw-pl-4">
            <img src="/img/Footer/gia-siegel.png" alt="GIA" class="tw-h-28 tw-inline-block tw-p-4">
        </div>
        <div>
            <div class="tw-w-full tw-py-3 tw-px-5 tw-bg-white tw-rounded">
                <p class="heading_font">Kontakt:</p>
                <p>Michael Canadi</p>
                <p>Jochen Herrmann</p>
            </div>
        </div>
        <div>
             <div class="tw-w-full tw-py-3 tw-px-5 tw-bg-white tw-rounded">
                <p class="heading_font">Weitere Informationen:</p>
                <p><router-link to="/">Impressum</router-link></p>
                <p><router-link to="/">Datenschutz</router-link></p>
            </div>
        </div>
        <div>
            <div class="tw-w-full tw-py-2 tw-px-5">
                <img src="/img/Footer/stwa-siegel.png" alt="stwa" class="tw-h-20 tw-inline-block">
                <img src="/img/Footer/FSC_Logo.jpeg" alt="FSC" class="tw-h-20 tw-inline-block">
            </div>
        </div>
        <div>
            <img src="/img/Footer/Logo_Blauer-Engel.png" alt="Blauer Engel" class="tw-h-28 tw-inline-block">
            <img src="/img/Footer/PEFC_Logo.jpeg" alt="PEFC" class="tw-h-28 tw-inline-block">
        </div>
    </div>
    <div class="w-9/12 h-0.5 bg-gray-100 rounded-full"></div>
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