<template>
    <lottie-player
        :id="playerID" 
        :src="resolve_anim_src(playerSrc)"
        :style="playerStyle"
        :class="playerClass"
        :background="playerBackground"
        :mode="playerMode"
        :renderer="playerRenderer"
        :autoplay="playerAutoplay"
        :controls="playerControls"
        :loop="playerLoop"
        :count="playerCount"
        :direction="playerDirection"
        :hover="playerHover"
        :speed="playerSpeed"
        >
    </lottie-player>
</template>

<script>
import "@lottiefiles/lottie-player"

export default {
    name: 'Anim',
    props: {
      //Props for Lottie Web Player
      playerID: {
        type: String,
      },
      playerSrc: {
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
      playerAutoplay: {
          type: Boolean,
          default: false
      },
      playerControls: {
          type: Boolean,
          default: false
      },
      playerLoop: {
          type: Boolean,
          default: true
      },
      playerCount: {
          type: Number,
          default: undefined
      },
      playerDirection: {
          type: Number,
          default: 1
      },
      playerHover: {
          type: Boolean,
          default: false
      },
      playerSpeed: {
          type: Number,
          default: 1
      }
    },
    methods: {
        resolve_anim_src: function (source) {
            if (source.includes("http")) {
                return source
            } else {
                let anims = '/assets/animations/' + source
                return anims
            }
        }
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