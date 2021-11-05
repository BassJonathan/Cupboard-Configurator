<template>
    <div class="tw-w-full">
        <div>Zusammenfassung:</div>
        <table>
            <thead>
                <tr>
                    <th>Artikel</th>
                    <th>Menge</th>
                    <th>Preis</th>
                    <th>Preis gesamt</th>
                </tr>
            </thead>
            <tbody>
                <SummaryItem v-for="part in parts" :key="part.id" :item="part" />
                <tr>
                    <th></th>
                    <th></th>
                    <th>Hallo</th>
                    <th> {{ configuration_total }} </th>
                </tr>
            </tbody>
        </table>

    </div>
</template>

<script>
import SummaryItem from "@/components/Configurator/SummaryItem.vue"

export default {
    name: "ConfigSummary",
    components: {
        SummaryItem,
    },
    props: ["parts", "product", "configId"],
    computed: {
        configuration_total() {
            return this.$store.getters.configurationTotal(this.configId);
        }
    }
}
</script>

<style>

</style>