<template>
    <div class="tw-w-full tw-flex tw-justify-between">
        This is a test
			<div class="tw-w-2/3">
				<div v-for="exterior in selectables.exteriors" :key="exterior.id">
					<Exterior :exterior="exterior" :product=selectables :configId="configId"/>
				</div>
                <!--
				<div v-for="interior in selectables.interiors" :key="interior.id">
					<Interior :interior="interior" :product=selectables />
				</div>
				<div>
					<Material :materials=selectables.materials />
				</div>
				<div v-for="accessory in selectables.accessories" :key="accessory.id">
					<Accessory :accessory="accessory" />
				</div>
			</div>
			<div class="tw-h-auto tw-w-1/3">
				<div class="tw-w-full tw-sticky tw-top-40 tw-bg-gray-400 tw-rounded-lg tw-mt-6">
					<div class="tw-text-sm">
						<ConfigSummary :parts="parts" :product=selectables />
					</div>
				</div>
                -->
			</div>
		</div>
</template>

<script>
import Exterior from "@/components/Configurator/Exterior.vue"
//import Interior from "@/components/Configurator/Interior.vue"
//import Material from "@/components/Configurator/Material.vue"
//import Accessory from "@/components/Configurator/Accessory.vue"
//import ConfigSummary from "@/components/Configurator/ConfigSummary.vue"

export default {
    name: "ConfigurationTool",
    components: {
        Exterior,
	    //Interior,
	    //Material,
	    //Accessory,
        //ConfigSummary,
    },
    props: ["product", "configId"],
    data() {
        return {
            selectables: [],
        }
    },
    async mounted() {
        console.log(this.configId)
        const { data } = await this.axios.get("catalogue/products/2"); //Add here automaitc id
        this.selectables = data;
    },
    computed: {
        parts() {
            return this.$store.getters.itemConfiguration(this.selectables);
        },
    }

}
</script>

<style>

</style>