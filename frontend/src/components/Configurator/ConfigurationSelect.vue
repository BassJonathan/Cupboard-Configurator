<template>
    <div>
        {{product.name}}
        {{product.configurationID}}
        <br>
        <button type="button" class="btn btn-primary" @click="$emit('edit-configuration', product.configurationID)">Bearbeiten</button>
        <button type="button" class="btn btn-danger" @click="$emit('delete-configuration', product.configurationID)">Löschen</button>
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