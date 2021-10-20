<template>
<div>
    <h1>Test für TailwindCSS</h1>
    <div class="test tw-shadow-2xl bg-hauptfarbe tw-absolute tw-text-center tw-rounded-full tw-left-5 tw-top-5 tx-yellow">{{string}}</div>
    <div class="test tw-shadow-12x4 hauptfarbe tw-absolute tw-right-5 tw-top-5"><img src="/img/icons/cupboard_logo.png" alt="Error"> </div>
</div>  


</template>

<script>
export default {
data: function () {
        return {
            string: "Closing</Tag>"
        }
    }
}
</script>

<style>
h1 {
    font-size: 5vw;
}

.test {
    height: 10vw;
    width: 10vw;
    margin: 0 auto;
}
.tx-hauptfarbe{
    color: #012840
}
.bg-hauptfarbe{
    background-color: #012840;
}
.tx-yellow{
    color:  #8C8A0A
}
</style>

// https://tailwindcss.com/docs
// https://bootstrap-vue.org/docs/components/button-group
