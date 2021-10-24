<template>
<div>
    <h1>TailwindCSS Footer</h1>
    <div class="bg-linear-pink-invert pb-12">
        <div class="mx-auto container pt-20 lg:pt-72 flex flex-col items-center justify-center">
            <div class="test tw-shadow-12x4 hauptfarbe tw-center tw-bottom" width="79" height="92" viewBox="0 0 79 92" fill="#012840"><img src="/img/cupboard_logo.png" alt="Error"> </div>

            <div class="text-black flex flex-col md:items-center f-f-l pt-3">
                <p class="text-2xl font-black logo_font">Motto von Cupboard Inc.</p>
                <div class="my-6 text-base text-color f-f-l">
                    <ul class="md:flex items-center">
                        <li class="md:mr-6 cursor-pointer pt-4 lg:py-0"><router-link class="nav_link" to="/">Home</router-link> </li>
                        <li class="md:mr-6 cursor-pointer pt-4 lg:py-0"><router-link class="nav_link" to="/about">Products</router-link> </li>
                        <li class="md:mr-6 cursor-pointer pt-4 lg:py-0"><router-link class="nav_link" to="/anim">Configurator</router-link></li>
                        <li class="md:mr-6 cursor-pointer pt-4 lg:py-0"><router-link class="nav_link" to="/anim">Our Goal</router-link></li>
                        <li class="md:mr-6 cursor-pointer pt-4 lg:py-0"><router-link class="nav_link" to="/i18n">About Us</router-link></li>
                        <li class="md:mr-6 cursor-pointer pt-4 lg:py-0"><router-link class="nav_link" to="/bootstrap">Imprint</router-link></li>
                    </ul>
                </div>
                <div class="text-sm text-color mb-10 f-f-l">
                    <p>© 2021 Cupboard Inc. All rights reserved</p>
                </div>
            </div>
            <div class="w-9/12 h-0.5 bg-gray-100 rounded-full"></div>
            <div class="flex justify-between items-center pt-12">
                <div class="test tw-shadow-12x4 hauptfarbe tw-center tw-bottom" width="79" height="92" viewBox="0 0 79 92" fill="#012840"><img src="/img/PEFC_Logo_ohne_Text.jpeg" alt="Error"> </div>
                <div class="test tw-shadow-12x4 hauptfarbe tw-center tw-bottom" width="79" height="92" viewBox="0 0 79 92" fill="#012840"><img src="/img/Logo_Blauer-Engel-300x300.png" alt="Error"> </div>
                <div class="test tw-shadow-12x4 hauptfarbe tw-center tw-bottom" width="79" height="92" viewBox="0 0 79 92" fill="#012840"><img src="/img/FSC_Logo.jpeg" alt="Error"> </div>
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

// https://tailwindcss.com/docs
// https://bootstrap-vue.org/docs/components/button-group
