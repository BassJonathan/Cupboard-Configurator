<template>
    <div class="tw-w-full">
        <div class="tw-w-full tw-p-5">
            <div class="tw-text-3xl tw-font-semibold tw-pb-3">
                Zusammenfassung:
            </div>
            <div class="tw-h-0.5 tw-bg-gray-100 tw-rounded-full tw-w-full tw-my-1 tw-mb-4"></div>
            <table class="tw-table-fixed tw-border-collapse tw-text-center tw-w-full tw-text-xl">
                <thead class="tw-bg-gray-300 tw-border-b-2 tw-border-gray-400">
                    <tr class="tw-divide-x-2 tw-divide-gray-500 tw-divide-opacity-60">
                        <th class="tw-w-1/3">Artikel</th>
                        <th class="tw-w-1/6">Menge</th>
                        <th class="tw-w-1/6">Preis</th>
                        <th class="tw-w-1/6">Preis gesamt</th>
                    </tr>
                </thead>
                <tbody class="tw-divide-y-2">
                    <SummaryItem v-for="part in parts" :key="part.id" :item="part" />
                    <tr class="tw-font-semibold">
                        <th></th>
                        <th></th>
                        <th>Summe:</th>
                        <th> {{ configuration_total }} </th>
                    </tr>
                </tbody>
            </table>
        </div>
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