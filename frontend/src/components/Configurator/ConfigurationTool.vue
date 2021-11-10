<template>
  <div class="tw-w-full tw-flex tw-justify-between">
    <div class="tw-w-2/3">
      <div v-for="exterior in selectables.exteriors" :key="exterior.id">
        <Exterior
          :exterior="exterior"
          :product="selectables"
          :configId="configId"
        />
      </div>
      <div v-for="interior in selectables.interiors" :key="interior.id">
        <Interior
          :interior="interior"
          :product="selectables"
          :configId="configId"
        />
      </div>
      <div>
        <Material :materials="selectables.materials" :configId="configId" />
      </div>
      <div v-for="accessory in selectables.accessories" :key="accessory.id">
        <Accessory :accessory="accessory" :configId="configId" />
      </div>
    </div>
    <div class="tw-h-auto tw-w-1/3">
      <div
        class="
          tw-w-full
          tw-sticky
          tw-top-40
          tw-bg-gray-200
          tw-rounded-lg
          tw-mt-6
          tw-shadow-xl
          tw-border
          tw-border-solid
          tw-border-gray-300
        "
      >
        <div class="tw-text-sm">
          <ConfigSummary
            :parts="parts"
            :product="selectables"
            :configId="configId"
          />
        </div>
        <div class="tw-p-4">
          <SustainabilityBox />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Exterior from "@/components/Configurator/Exterior.vue";
import Interior from "@/components/Configurator/Interior.vue";
import Material from "@/components/Configurator/Material.vue";
import Accessory from "@/components/Configurator/Accessory.vue";
import ConfigSummary from "@/components/Configurator/ConfigSummary.vue";
import SustainabilityBox from "@/components/Configurator/SustainabilityBox.vue";

export default {
  name: "ConfigurationTool",
  components: {
    Exterior,
    Interior,
    Material,
    Accessory,
    ConfigSummary,
    SustainabilityBox,
  },
  props: ["product", "configId"],
  /*--API-connection removed--*/
  /*
  data() {
    return {
      selectables: [],
    };
  },
  //API-connection removed
  async mounted() {
    const { data } = await this.axios.get("catalogue/products/2"); //Add here automaitc id
    this.selectables = data;
    console.log(JSON.stringify(this.selectables))
  },
  */
  computed: {
    parts() {
      return this.$store.getters.itemConfiguration(this.configId);
    },
    selectables() {
      return this.$store.getters.getSelectables2;
    },
  },
};
</script>

<style></style>
