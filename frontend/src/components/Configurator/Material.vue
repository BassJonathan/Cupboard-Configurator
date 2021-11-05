<template>
    <div class="tw-w-full">
        <div class="tw-full tw-bg-gray-200 tw-rounded-lg tw-my-6 tw-mr-6 tw-px-10 tw-py-6 tw-shadow-inner">
            <div class="tw-text-4xl tw-font-bold tw-pb-4">
                Material
            </div>
            <form>
                <div class="tw-flex tw-justify-around tw-items-end">
                    <div v-for="material in materials" :key="material.id">
                        <div class="tw-w-full tw-px-5">
                            <img :src="material.imageUrl" :alt="material.name" class="tw-bg-transparent tw-rounded-xl">
                        </div>
                        <div class="form-check tw-flex tw-justify-center tw-pt-5">
                            <input class="form-check-input tw-mr-3" type="radio" name="flexRadioDefault" :id="flexRadio + material.name" :value="material" @change="changeMaterial(material)">
                            <label class="form-check-label" :for="flexRadio + material.name">
                                {{ material.name}} - {{material.price}}
                            </label>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "Material",
    props: ["materials", "product", "configId"],
    methods: {
        changeMaterial(e) {
            console.log(e)
            this.$store.commit("addToConfiguration", {interior: e, configId: this.configId, product: this.product})
        }
    }

}
</script>

<style>

</style>