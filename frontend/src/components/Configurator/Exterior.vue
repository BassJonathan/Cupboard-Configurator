<template>
    <div class="tw-w-full">
        <div class="tw-full tw-bg-gray-200 tw-rounded-lg tw-m-6 tw-px-10 tw-py-6">
            <div class="tw-text-4xl tw-font-bold">
                {{ exterior.name}}
            </div>
            <div class="tw-w-full tw-flex tw-justify-between">
                
                <div class="tw-w-1/2 tw-align-middle">
                    <form>
                        <div class="form-floating tw-mb-3">
                            <input type="height" class="form-control" id="floatingHeight" :value="100" @change="updateHeight">
                            <label for="floatingHeight">Höhe in cm</label>
                        </div>
                        <div class="form-floating">
                            <input type="width" class="form-control" id="floatingWidth" :value="100" @change="updateWidth">
                            <label for="floatingWidth">Breite in cm</label>
                        </div>
                        <div class="form-floating">
                            <input type="depth" class="form-control" id="floatingDepth" :value="100" @change="updateDepth">
                            <label for="floatingWidth">Tiefe in cm</label>
                        </div>
                    </form>
                </div>
                <div class="tw-w-96">
                    <img :src="exterior.imageUrl" :alt="exterior.name">
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    name: "Exterior",
    props: ["exterior", "product", "configId"],
    methods: {
        updateHeight(e) {
            this.$store.commit("updateHeight", {product: this.product, configId: this.configId, height: e.target.value})
        },
        updateWidth(e) {
            this.$store.commit("updateWidth", {product: this.product, configId: this.configId, width: e.target.value})
        },
        updateDepth(e) {
            this.$store.commit("updateDepth", {product: this.product, configId: this.configId, depth: e.target.value})
        }
    },
    /*
    created() {
        console.log(this.configId)
        this.$store.commit("updateHeight", {product: this.product, configId: this.configId, height: 100})
        this.$store.commit("updateWidth", {product: this.product, width: 100})
        this.$store.commit("updateDepth", {product: this.product, depth: 100})
    }
    */
}
</script>

<style>

</style>