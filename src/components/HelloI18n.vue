<template>
  <p>
    Wähle eine Sprache:
    <select v-model="locale">
      <option value="en">Englisch</option>
      <option value="de">Deutsch</option>
      <option value="fr">Französich</option>
    </select>
  </p>

  <p>{{ t("HelloI18n.hello") }}</p>
</template>

<script>
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "HelloI18n",
  setup() {
    const { t, locale } = useI18n({
      inheritLocale: true,
      useScope: "global",
    });

    // Something todo ..

    return { t, locale };
  },
});
</script>

<!--
<i18n>
{
  "en": {
    "hello": "Hello i18n in SFC! This Text is in English!"
  },
  "de": {
    "hello": "Hallo i18n in SFC! Dieser Text ist in Deutsch!"
  },
  "fr": {
    "hello": "Bonjur i18 à SFC! Ce texte est en français."
  }
}
</i18n>
//Change locales
//https://kazupon.github.io/vue-i18n/guide/locale.html

-->
