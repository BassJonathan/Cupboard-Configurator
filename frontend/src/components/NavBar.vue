<template>
    <div class="nav_container bg_main" id="navbar">
        <a href="/">
            <img src="/img/cupboard_logo.png" alt="Cupboard Ltd." id="logo">
            <span id="company_name" class="tw-text-white">Cupboard Limited</span>
        </a>
        <div class="nav_links tw-text-white">
            <nav>
                <ul>
                    <li> <router-link class="nav_link" to="/">Home</router-link> </li>
                    <li> <router-link class="nav_link" to="/products">{{ t("NavBar.products") }}</router-link> </li>
                    <li> <router-link class="nav_link" to="/configurator">{{ t("NavBar.configurator") }}</router-link> </li>
                    <li> <router-link class="nav_link" to="/goal">{{ t("NavBar.goal") }}</router-link> </li>
                    <li> <router-link class="nav_link" to="/about">{{ t("NavBar.about_us") }}</router-link> </li>
                    <li> <router-link class="nav_link" to="/imprint">{{ t("NavBar.imprint") }}</router-link> </li>
                    <li class="nav_link"> | </li>
                    <li>
                        <router-link to="/cart" class="btn btn-primary">
                            <img src="/img/icons/shopping-cart.png" alt="Einkaufswagen" id="shopping_cart_icon">
                        </router-link>
                    </li>
                    <li>
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
                                <li><a class="dropdown-item" :class="{highlight:locale == 'de'}" @click="locale = 'de'">Deutsch</a></li>
                                <li><a class="dropdown-item" :class="{highlight:locale == 'en'}" @click="locale = 'en'">English</a></li>
                                <li><a class="dropdown-item" :class="{highlight:locale == 'fr'}" @click="locale = 'fr'">Français</a></li>
                                <li><a class="dropdown-item" :class="{highlight:locale == 'it'}" @click="locale = 'it'">Italiano</a></li>
                            </ul>
                        </div>
                    </li>
                    <li>
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
                                <li><a class="dropdown-item" :class="{highlight:currency == 'de'}" @click="changeC('de')">€ &nbsp;| Euro</a></li>
                                <li><a class="dropdown-item" :class="{highlight:currency == 'ch'}" @click="changeC('ch')">Fr. | Franken</a></li>
                                <li><a class="dropdown-item" :class="{highlight:currency == 'en'}" @click="changeC('en')">$ &nbsp;| Dollar</a></li>
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
    width: 100%;
    height: 80px;
    position: fixed;
    top: 0;
    transition: top 0.8s;
    z-index: 999;
}
#logo {
    height: 50px;
    width: 50px;
    margin: 15px 20px 15px 30px;
    display: inline-block;
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
#company_name {
    font-size: 20pt;
    display: inline-block;
    vertical-align: middle;
    line-height: normal;
    font-family: logoFont;
}
.nav_links {
    display: inline-block;
    width: 80vw;
    text-align: right;
}
li {
    display: inline-block;
    font-family: navFont;
    padding: 0 10px;
}
.dropdown-item {
    display: inline-block !important;
}


</style>