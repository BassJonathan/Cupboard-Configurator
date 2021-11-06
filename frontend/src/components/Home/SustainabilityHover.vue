<template>
    <div>
        <div class="tw-absolute tw-bottom-40 tw-z-10 tw-flex" id="SustainabilityTab">
            <div class="tw-w-10/12 tw-bg-gradient-to-br tw-from-green-gradient3 tw-to-green tw-rounded-r-xl tw-p-10 tw-shadow-2xl">
                <div class="tw-text-white">
                    <div class="tw-text-3xl tw-font-bold tw-text-left">
                        <span class="tw-text-4xl tw-font-bold tw-bg-clip-text tw-bg-gradient-to-tl tw-from-green-600 tw-to-green-400 tw-text-transparent">
                            Grün
                        </span>
                         ist nicht nur eine Farbe,
                    </div>
                    <div class="tw-text-3xl tw-font-bold tw-text-right">
                        sondern auch unsere 
                        <span class="tw-text-4xl tw-font-bold tw-bg-clip-text tw-bg-gradient-to-tl tw-from-primary-gradient4 tw-to-primary-gradient6 tw-text-transparent">
                            Leitlinie!
                        </span> 
                    </div>
                </div>
                <div class="tw-h-0.5 tw-bg-primary-gradient4 tw-rounded-full tw-w-full tw-my-4"></div>
                <div class="tw-text-white tw-text-xl">
                    Wir bei Cupboard Ltd. sind davon überzeugt, dass eine grüne und klimaneutrale Produktion von Möbeln möglich und machbar ist. Daher arbeiten wir seit über 10 Jahren an einer möglichst umweltschonenden Produktion, welche die Rohstoffe, die Fertigung und die Lieferung umfasst.
                </div>
                <div class="tw-w-full tw-flex tw-justify-center tw-items-center tw-pt-4">
                    <router-link class="btn btn-primary tw-ml-4 tw-text-xl tw-transition tw-duration-700 tw-ease-in-out tw-bg-gradient-to-tr tw-from-primary-gradient3 tw-to-primary-gradient5 hover:tw-from-primary-gradient4 hover:tw-to-primary-gradient6" to="/goal">Erfahre mehr</router-link>
                </div>
            </div>
            <div class="tw-bottom-4 tw-absolute" id="SustainabilityLogo">
                <img src="/img/Footer/FSC_Logo.jpeg" alt="FSC" class="tw-w-full tw-object-contain tw-rounded-r-xl"/>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
#SustainabilityTab {
    left: -585px;
    width: 700px;
    transition: left ease-in-out 0.8s;
}

#SustainabilityTab:hover {
    left: 0;
}

#SustainabilityLogo {
    width: 100px;
    right: 16px;
    animation: blink 6s linear infinite alternate;
    -webkit-animation: blink 6s linear infinite alternate;
}


@-webkit-keyframes blink { 
   50% { box-shadow: 10px 0 30px 12px #84af0e; } 
}
@keyframes blink { 
   50% { box-shadow: 10px 0 30px 12px #84af0e; } 
}
</style>