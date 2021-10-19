<template>
<div>
    <h1>Test für Animation</h1>
    <p>Dieser Test ist ein Proof-Of-Concept oder kurz POC!</p>
    <p>Die auf dieser Seite dargestellten Features dienen der Demonstration von Features und stellen eine korrekte Entwicklung sicher.</p>
    <hr>
    <h3>Looping Animations</h3>
    <Anim
        playerSrc="https://assets9.lottiefiles.com/private_files/lf30_zipzttsv.json"
        :playerAutoplay=true
        playerClass="small"
    />
    <div style="height: 200px"></div>
    <InterAnim
        playerID="anim10"
        playerSrc="01_Choose_Size.json"
        playerClass="full"
        playerSpeed=0.5
        :interactivityActions="[{visibility:[0.3,0.7],type:'seek',frames:[0,280]}]"
    />
    <div style="height: 200px"></div>
    <InterAnim
        playerID="anim11"
        playerSrc="02_Choose_Fittings.json"
        playerClass="full"
        :interactivityActions="[{visibility:[0.3,0.7],type:'seek',frames:[0,280]}]"
    />
    <div style="height: 200px"></div>
    <InterAnim
        playerID="anim12"
        playerSrc="03_Choose_Material.json"
        playerClass="full"
        :interactivityActions="[{visibility:[0.3,0.7],type:'seek',frames:[0,180]}]"
    />
    <div style="height: 200px"></div>
    <InterAnim
        playerID="anim13"
        playerSrc="04_Dark.json"
        playerClass="full"
        :interactivityActions="[{visibility:[0.3,0.7],type:'seek',frames:[0,280]}]"
    />
    <div style="height: 200px"></div>
</div>  
</template>

<script>
import Anim from "@/components/Anim.vue"
import InterAnim from "@/components/InterAnim.vue";

export default {
    name: 'TestAnimation',
    components: {
        Anim,
        InterAnim,
    }

}
</script>

<style>
h1 {
    font-size: 5vw;
}
hr {
    margin: 2vw;
}
.full {
    width: 80%;
    height: 50%;
    margin: 0 auto 0 auto;
}

.small {
    width: 30vw;
    height: 30vw;
    margin: 0 auto;
}
</style>