<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" id="logo" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <Animation
      playerID="lottie1"
      playerScr="https://assets10.lottiefiles.com/packages/lf20_yzsagzwo.json"
      :interactivityVisibility=[0,0.85]
      :interactivityFrames=[0,100]
    />
    <div style="height: 500px"></div>
    <HelloI18n />
    <div style="height: 500px"></div>
    <TailwindTest />
    <div style="height: 500px"></div>
    <Axios />
    <div style="height: 500px"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Animation from "@/components/Animation.vue";
import HelloI18n from "@/components/HelloI18n.vue";
import TailwindTest from "@/components/TailwindTest.vue";
import Axios from "@/components/Axios.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    Animation,
    HelloI18n,
    TailwindTest,
    Axios,
  },
};
</script>

<style scoped>
#logo {
  display: block;
  margin: 0 auto 0 auto;
}
</style>
