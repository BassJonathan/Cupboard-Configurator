<template>
    <div class="nav_container bg_main" id="navbar">
        <a href="/">
            <img src="/img/cupboard_logo.png" alt="Cupboard Ltd." id="logo">
            <span id="company_name" class="tw-text-white">Cupboard Limited</span>
        </a>
        <div class="nav_links tw-text-white">
            <nav>
                <ul>
                    <li> <router-link to="/">Home</router-link> </li>
                    <li> <router-link to="/about">About</router-link> </li>
                    <li> <router-link to="/anim">Animation</router-link> </li>
                    <li> <router-link to="/i18n">Internationalisierung</router-link> </li>
                    <li> <router-link to="/tailwind">TailwindCSS</router-link> </li>
                    <li> <router-link to="/bootstrap">Bootstrap</router-link> </li>
                    <li>
                        <div class="v-model-select">
                            <select v-model="locale" class="test tw-bg-transparent tw-text-white">
                                <option value="en">Englisch</option>
                                <option value="de">Deutsch</option>
                                <option value="fr">Französich</option>
                            </select>
                        </div>
                    </li>
                    <li>
                        <div class="v-model-select">
                            <select v-model="s" class="test tw-bg-transparent tw-text-white">
                                <option value="de">€</option>
                                <option value="ch">SFr</option>
                            </select>
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
    return { t, locale };
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
#company_name {
    font-size: 20pt;
    display: inline-block;
    vertical-align: middle;
    line-height: normal;
    font-family: mainFont;
}
.nav_links {
    display: inline-block;
    width: 80vw;
    text-align: right;
}
li {
    display: inline-block;
    padding: 0 20px;    
}
</style>