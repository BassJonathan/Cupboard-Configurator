<template>
    <div class="tw-w-full">
        <div class="tw-full tw-bg-gray-200 tw-rounded-lg tw-m-6 tw-px-10 tw-py-6">
            <div class="tw-text-4xl tw-font-bold">
                {{ exterior.name}}
            </div>
            <div class="tw-w-full tw-flex tw-justify-between">
                
                <div class="tw-w-1/2 tw-align-middle">
                    <form action="">
                        <div class="form-floating tw-mb-3">
                            <input type="height" class="form-control" id="floatingHeight" placeholder="100cm">
                            <label for="floatingHeight">Höhe in cm</label>
                        </div>
                        <div class="form-floating">
                            <input type="width" class="form-control" id="floatingWidth" placeholder="Password">
                            <label for="floatingWidth">Breite in cm</label>
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
    props: ["exterior"],

}
</script>

<style>

</style>