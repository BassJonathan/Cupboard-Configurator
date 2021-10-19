<template>
<div>
    <h1>Test für i18n</h1>
    <p>Dieser Test ist ein Proof-Of-Concept oder kurz POC!</p>
    <p>Die auf dieser Seite dargestellten Features dienen der Demonstration von Features und stellen eine korrekte Entwicklung sicher.</p>
    <hr>
    <p>Im Folgenden Abschnitt befindet sich ein Text sowie Preise. Diese können getrennt voneinander verändert werden.</p>
    <p>Wähle eine Sprache: 
    <select v-model="locale">
        <option value="en">Englisch</option>
        <option value="de">Deutsch</option>
        <option value="fr">Französich</option>
    </select></p>
    <p>{{ t('TestI18n.test_language') }}</p>
    <p>{{ n(100, 'currency') }}</p>

</div>  
</template>

<script>
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
    name:"TestI18n",
    setup() {
    const { t, n,  locale, currency } = useI18n({
      inheritLocale: true,
      useScope: "global",
    });
    console.log(currency)
    return { t, n, locale, currency };
    }
});
</script>

<style>
h1 {
    font-size: 5vw;
}
</style>