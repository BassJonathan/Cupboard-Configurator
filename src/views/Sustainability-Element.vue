<template>
    <h1>Nachhaltigkeitselement</h1>

	<div class="tw-border-t tw-border-b tw-pt-16 tw-grid tw-grid-cols-2 tw-gap-8 tw-bg-green-dark">
		<div class="tw-flex tw-flex-col tw-justify-start">
			<div class="tw-flex tw-flex-col tw-w-full tw-object-cover tw-h-4/6 tw-justify-items-start tw-border tw-rounded-lg tw-overflow-hidden"
				style="min-heigth:320px">
				<img src=/img/nachhaltigkeit-schwerpunkt-bild.jpg alt='Error' >
            </div>
		</div>
        <div class="tw-flex tw-flex-col">
            <div class="tw-flex tw-flex-col tw-gap-4">
                <p class="tw-text-2xl logo_font">Nachhaltigkeit und Umweltschutz liegen uns am Herzen</p>
                <h2 class="tw-text-3xl tw-logo_font">deswegen setzen wir zu 100% auf nachhaltige Rohstoffe und faire Arbeitsbedingungen</h2>
                <p class="tw-text-lg tw-text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatibus voluptatum nisi maxime obcaecati impedit? Ratione error eum qui quidem? Veniam
                    accusamus ea repudiandae itaque, explicabo quidem perspiciatis. Culpa, asperiores deserunt.</p>
                <div class="tw-flex tw-items-center tw-gap-4 tw-my-6 tw-cursor-pointer ">
                    <div class="tw-bg-green-600 tw-px-5 tw-py-3 tw-text-white tw-rounded-lg tw-w-2/4 tw-text-center">Erfahre mehr</div>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-400" viewBox="0 0 20 20"
                        fill="currentColor">
                        <path fill-rule="evenodd"
                            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                            clip-rule="evenodd" />
                    </svg>
                </div>
            </div>
        </div>
	</div>



</template>

<script>
export default {
    name: "index",
    data() {
        return {
            auto: true,
            light: false,
            dark: false,
        };
    },
    mounted() {},
    methods: {
        toggle(event) {
            if (event.target.value === "auto") {
                this.auto = true;
                this.light = false;
                this.dark = false;
            }
            if (event.target.value === "light") {
                this.auto = false;
                this.light = true;
                this.dark = false;
            }
            if (event.target.value === "dark") {
                this.auto = false;
                this.light = false;
                this.dark = true;
            }
        },
    },
};
</script>

<style scoped>
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
.bg-sustainability{
    background-color: #a5d8a5;
}
.tx-yellow{
    color:  #8C8A0A
}
@import url("https://cdn.tuk.dev/dist/css/tailwind-v2.2.11.min.css");

</style>
