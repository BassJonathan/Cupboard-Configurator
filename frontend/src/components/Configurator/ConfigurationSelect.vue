<template>
    <div>
        {{product.name}}
        {{product.configurationID}}
        <br>
        <button type="button" class="btn btn-primary" @click="$emit('edit-product', product.configurationID)">Bearbeiten</button>
    </div>
</template>

<script>
export default {
    name: "ConfigurationSelect",
    props: ["product"],

}
</script>

<style>

</style>