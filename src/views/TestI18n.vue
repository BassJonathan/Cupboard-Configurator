<template>
<div>
    <h1>Test für Internationalisierung</h1>
    <p>Dieser Test ist ein Proof-Of-Concept oder kurz POC!</p>
    <p>Die auf dieser Seite dargestellten Features dienen der Demonstration von Features und stellen eine korrekte Entwicklung sicher.</p>
    <hr>
    <p>Im Folgenden Abschnitt befindet sich ein Text sowie Preise. Diese können global verändert werden.</p>
    <br>
    <p>Wähle eine Sprache: 
    <select v-model="locale">
        <option value="en">Englisch</option>
        <option value="de">Deutsch</option>
        <option value="fr">Französich</option>
    </select></p>
    <p class=" tw-font-bold tw-m-6 tw-text-green-500 ">{{ t('TestI18n.test_language') }}</p>
    <p>Die Währung ändert sich "passend" zu der eingestellten Sprache</p>
    <p class=" tw-font-bold tw-m-6 tw-text-red-500">{{ n(10000, 'currency') }}</p>
    <br>
    <!--
     <p>Wähle eine Währung: 
    <select v-model="setCurrency">
        <option value="de">€</option>
        <option value="en-US">$</option>
        <option value="en-GB">£</option>
    </select></p>
    <p>{{ n(10000, 'currency', setCurrency) }}</p>
    -->

</div>  
</template>

<script>
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
    name:"TestI18n",
    setup() {
    const { t, n,  locale } = useI18n({
      inheritLocale: true,
      useScope: "global",
    });
    return { t, n, locale };
    },
    data: function () {
        return {
            setCurrency: "de"
        }
    }
});
</script>

<style>
h1 {
    font-size: 5vw;
}
hr {
    margin: 2vw;
}
</style>