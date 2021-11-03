<template>
    <div class="tw-w-full">
        <div class="tw-full tw-bg-gray-200 tw-rounded-lg tw-m-6 tw-px-10 tw-py-6">
            <div class="tw-text-4xl tw-font-bold">
                {{ interior.name}}
            </div>
            <div>
                Kosten: {{ interior.price }}
            </div>
            <div class="tw-w-full tw-flex tw-justify-between">
                <div class="tw-w-1/2">
                    <form action="">
                        <input type="number" value="0">
                    </form>
                </div>
                <div class="tw-w-96">
                    <img :src="interior.imageUrl" :alt="interior.name">
                </div>
            </div>
            
            
        </div>
    </div>
</template>

<script>
export default {
    name: "Interior",
    props: ["interior"],

}
</script>

<style>

</style>