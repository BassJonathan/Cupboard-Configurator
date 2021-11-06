<template>
    <div class="tw-rounded-xl tw-p-5 tw-shadow-lg tw-bg-white">
        <div class="tw-w-full tw-text-2xl tw-font-semibold">
            {{product.name}}
        </div>
        <div class="tw-h-0.5 tw-bg-gray-100 tw-rounded-full tw-w-full tw-my-1"></div>
        <div>
            BxHxT: {{product.width}} x {{product.height}} x {{product.depth}}
        </div>
        <div class="tw-h-0.5 tw-bg-gray-100 tw-rounded-full tw-w-full tw-my-1"></div>
        <div class="tw-w-full tw-text-xl">
            <div v-for="part in product.configuration" :key="part.id">
                {{part.quantity}} x {{part.name}}
            </div>
        </div>
        <div class="tw-h-0.5 tw-bg-gray-100 tw-rounded-full tw-w-full tw-my-1"></div>
        <div class="tw-w-full tw-pt-2 tw-flex tw-justify-around">
            <button type="button" class="btn btn-danger tw-w-5/12 tw-px-2" @click="$emit('delete-configuration', product.configurationID)">Löschen</button>
            <button type="button" class="btn btn-primary tw-w-5/12" @click="$emit('edit-configuration', product.configurationID)">Bearbeiten</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "ConfigurationSelect",
    props: ["product", "configId"],
}
</script>

<style>

</style>