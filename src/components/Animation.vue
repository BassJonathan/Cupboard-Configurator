<template>
  <lottie-player ref="myRef" :id="playerID"  :src="playerScr" :style="playerStyle" :class="playerClass" :background="playerBackground" :mode="playerMode" :renderer="playerRenderer"></lottie-player>
</template>

<script>
import "@lottiefiles/lottie-player"
import { create } from "@lottiefiles/lottie-interactivity"

export default {
    name: 'Lottie',
    props: {
      //Props for Lottie Web Player
      playerID: {
        type: String,
        required: true,
      },
      playerScr: {
        type: String,
        required: true
      },
      playerStyle: {
        type: String,
      },
      playerClass: {
        type: String,
        default: "lottie-default"
      },
      playerBackground: {
        type: String,
        default: "transparent"
      },
      playerMode: {
        type: String,
        default: "normal",
        validator(value) {
          return ["normal", "bounce"].includes(value)
        }
      },
      playerRenderer: {
        type: String,
        default: "svg",
        validator(value) {
          return ["svg", "canvas", "html"].includes(value)
        }
      },
      //Props for Lottie Interactive
      interactivityMode: {
        type: String,
        default: "scroll",
        validator(value) {
          return ["scroll", "cursor"].includes(value)
        }
      },
      interactivityContainer: {
        type: String,
      },
      interactivityVisibility: {
        type: Array,
        //default: () => [{visibility: [0,1], type: "seek", frames: [0,100]}],
        default: () => [0,1],
      },
      interactivityType: {
        type: String,
        //default: () => [{visibility: [0,1], type: "seek", frames: [0,100]}],
        default: "seek",
      },
      interactivityFrames: {
        type: Array,
        //default: () => [{visibility: [0,1], type: "seek", frames: [0,100]}],
        default: () => [0,100],
      }
    },
    mounted() {
    var self = this; //As seen here: https://stackoverflow.com/questions/47549346/communicating-with-data-or-methods-in-vue-and-addeventlistener
    this.$refs.myRef.addEventListener("load", function () {
      create({
        mode: self.interactivityMode,
        player: "#" + self.playerID,
        container: self.interactivityContainer,
        actions: [{
          visibility: self.interactivityVisibility,
          type: self.interactivityType,
          frames: self.interactivityFrames
        }]
        //actions: self.interactivityActions,
      });
    });
  },
}
</script>

<style scoped>
#lottie-default {
  width: 500px;
  height: 500px;
  margin: 0 auto;
}
</style>
//Important Docs for Vue Lifecycle of Components (see mounted etc.)
//https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram