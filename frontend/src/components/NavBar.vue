<template>
    <div class="nav_container tw-w-full tw-h-20 tw-fixed tw-top-0 tw-bg-primary tw-flex tw-justify-between" id="navbar">
        <div class="tw-inline-block lg:tw-h-12">
            <a href="/">
                <img src="/img/cupboard_logo.png" alt="Cupboard Ltd." class="tw-h-full tw-inline-block tw-my-4 tw-ml-8 tw-mr-5">
                <span class="tw-text-white logo_font tw-inline-block tw-align-middle xl:tw-text-3xl lg:tw-text-2xl tw-mr-3">Cupboard Limited</span>
            </a>
        </div>
        <div class="tw-text-white tw-inline-block tw-my-auto">
            <nav>
                <ul>
                    <li class="tw-inline-block nav_font tw-px-2 xl:tw-text-lg lg:tw-text-md"> <router-link to="/">Home</router-link> </li>
                    <li class="tw-inline-block nav_font tw-px-2 xl:tw-text-lg lg:tw-text-md"> <router-link to="/products">{{ t("NavBar.products") }}</router-link> </li>
                    <li class="tw-inline-block nav_font tw-px-2 xl:tw-text-lg lg:tw-text-md">  <router-link to="/configurator">{{ t("NavBar.configurator") }}</router-link> </li>
                    <li class="tw-inline-block nav_font tw-px-2 xl:tw-text-lg lg:tw-text-md"> <router-link to="/goal">{{ t("NavBar.goal") }}</router-link> </li>
                    <li class="tw-inline-block nav_font tw-px-2 xl:tw-text-lg lg:tw-text-md"> <router-link to="/about">{{ t("NavBar.about_us") }}</router-link> </li>
                    <li class="tw-inline-block nav_font tw-px-2 xl:tw-text-lg lg:tw-text-md"> <router-link to="/imprint">{{ t("NavBar.imprint") }}</router-link> </li>
                    <li class="tw-inline-block nav_font tw-px-2 xl:tw-text-lg lg:tw-text-md"> | </li>
                    <li class="tw-inline-block nav_font tw-px-2 xl:tw-text-lg lg:tw-text-md">
                        <router-link to="/cart" class="btn btn-primary">
                            <img src="/img/icons/shopping-cart.png" alt="Einkaufswagen" id="shopping_cart_icon">
                        </router-link>
                    </li>
                    <li class="tw-inline-block nav_font tw-px-2 xl:tw-text-lg lg:tw-text-md">
                        <div class="dropdown">
                            <button 
                                class="btn btn-secondary dropdown-toggle" 
                                type="button" 
                                id="dropdownMenuButtonLamguage" 
                                data-bs-toggle="dropdown" 
                                aria-expanded="false">
                                <img src="/img/icons/translate.png" alt="Sprache" id="translation_icon">
                            </button>
                            <ul class="dropdown-menu w-100" aria-labelledby="dropdownMenuButtonLanguage">
                                <li><a class="dropdown-item tw-pl-8" :class="{highlight:locale == 'de'}" @click="locale = 'de'">Deutsch</a></li>
                                <li><a class="dropdown-item tw-pl-8" :class="{highlight:locale == 'en'}" @click="locale = 'en'">English</a></li>
                                <li><a class="dropdown-item tw-pl-8" :class="{highlight:locale == 'fr'}" @click="locale = 'fr'">Français</a></li>
                                <li><a class="dropdown-item tw-pl-8" :class="{highlight:locale == 'it'}" @click="locale = 'it'">Italiano</a></li>
                            </ul>
                        </div>
                    </li>
                    <li class="tw-inline-block nav_font tw-px-2 tw-pr-4 xl:tw-text-lg lg:tw-text-md">
                        <div class="dropdown">
                            <button 
                                class="btn btn-secondary dropdown-toggle" 
                                type="button" 
                                id="dropdownMenuButtonCurrency" 
                                data-bs-toggle="dropdown" 
                                aria-expanded="false">
                                <img src="/img/icons/exchange.png" alt="Währung" id="exchange_icon">
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButtonCurrency" style="width: 20px !important">
                                <li><a class="dropdown-item tw-pl-8" :class="{highlight:currency == 'de'}" @click="changeC('de')">€ &nbsp;| Euro</a></li>
                                <li><a class="dropdown-item tw-pl-8" :class="{highlight:currency == 'ch'}" @click="changeC('ch')">Fr. | Franken</a></li>
                                <li><a class="dropdown-item tw-pl-8" :class="{highlight:currency == 'en'}" @click="changeC('en')">$ &nbsp;| Dollar</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
import { useI18n } from "vue-i18n";

export default{
    name: "NavBar",
    setup() {
    const { t, locale } = useI18n({
      inheritLocale: true,
      useScope: "global",
    });
    return { t, locale};
    },
    computed: {
        currency() {
            return this.$store.state.currency
        }
    },
    methods: {
        changeC(newC) {
            this.$store.commit('setCurrency', newC)
        }
    },
    mounted() {
        //Scroll behavior
        var prevScrollPos = window.pageYOffset;
        window.onscroll = function() {
            var currentScrollPos = window.pageYOffset;
            if (prevScrollPos > currentScrollPos) {
                document.getElementById("navbar").style.top = "0";
            } else {
                document.getElementById("navbar").style.top = "-90px";
            }
            prevScrollPos = currentScrollPos;
        }
    }
}
</script>

<style lang="scss" scoped>
.nav_container {
    transition: top 0.8s;
    z-index: 999;
}
.highlight::before {
    position: absolute;
    left: .4rem;
    content: '✓';
    font-weight: 600;
}
#shopping_cart_icon {
    height: 25px;
    width: 25px;
    margin: 0 10px;
}
#translation_icon {
    height: 25px;
    width: 25px;
    display: inline;
    margin: 0 5px;
}
#exchange_icon {
    height: 25px;
    width: 25px;
    display: inline;
    margin: 0 5px;
}
.dropdown-item {
    display: inline-block !important;
}
</style>