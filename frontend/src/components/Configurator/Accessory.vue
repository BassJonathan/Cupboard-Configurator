<template>
    <div class="tw-w-full">
        <div class="tw-text-3xl tw-font-bold">
            Accessories
        </div>
        <div>
            Kosten: {{ accessory.price }}
        </div>
        <div class="tw-flex tw-justify-around">
            <div class="tw-w-1/2">
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" @change="toggleAccessory(accessory)">
                    <label class="form-check-label" for="flexSwitchCheckDefault">{{ accessory.name }}</label>
                </div>
            </div>
            <div class="tw-w-96">
                <img :src="accessory.imageUrl" :alt="accessory.name">
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    name: "Accessory",
    props: ["accessory", "configId"],
    methods: {
        toggleAccessory(e) {
            console.log(e)
            this.$store.commit("addToConfiguration", {interior: e, configId: this.configId, product: this.product})
        }
    }

}
</script>

<style>

</style>