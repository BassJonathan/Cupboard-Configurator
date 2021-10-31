<template>
  <div>
    <div class="tw-w-full tw-mt-24">
      <Anim
        playerSrc="https://assets1.lottiefiles.com/packages/lf20_GIyuXJ.json"
        :playerAutoplay="true"
        playerClass="tw-h-80"
      />
    </div>
    <p class="tw-text-6xl tw-text-center tw-w-100 logo_font">
      Page not found! Sorry :(
    </p>
    <div class="tw-w-full tw-mx-10">
      <div class="tw-w-full tw-grid tw-grid-cols-4 tw-grid-rows-1 tw-gap-6">
        <div class="tw-w-full tw-text-center">
          <iframe
            src="https://giphy.com/embed/7WEZdnxcnjN0A"
            class="tw-w-full tw-h-80 tw-inline-block"
          ></iframe>
        </div>
        <div class="tw-col-span-2 tw-text-center">
          <iframe
            src="https://giphy.com/embed/VwoJkTfZAUBSU"
            class="tw-w-full tw-h-80 tw-inline-block"
          ></iframe>
        </div>
        <div class="tw-w-full tw-text-center">
          <iframe
            src="https://giphy.com/embed/l49JNDd5GFXjmHFeg"
            class="tw-w-full tw-h-80 tw-inline-block"
          ></iframe>
        </div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
import Anim from "@/components/Anim.vue";
export default {
  name: "404",
  components: {
    Anim,
  },
};
</script>

<style></style>
