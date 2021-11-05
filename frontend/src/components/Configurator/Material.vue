<template>
    <div class="tw-w-full">
        <div>This are the Materials</div>
        <form action="">
            <div class="tw-flex tw-justify-around">
                <div v-for="material in materials" :key="material.id">
                    <div class="tw-w-52">
                        <img :src="material.imageUrl" :alt="material.name">
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" :id="flexRadio + material.name" :value="material" @change="changeMaterial(material)">
                        <label class="form-check-label" :for="flexRadio + material.name">
                            {{ material.name}}
                        </label>
                    </div>
                </div>
            </div>
        </form>
        
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