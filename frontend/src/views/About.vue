<template>
    <div>
        <Members />
        <Timeline />
        <Infoslide />
    </div>
  
</template>

<script>
import Members from "@/components/AboutUs/Members.vue";
import Timeline from "@/components/AboutUs/Timeline.vue";
import Infoslide from "@/components/AboutUs/Infoslide.vue";

export default {
  name: "About Us",
  components: {
    Members,
    Timeline,
    Infoslide,
  },
};
</script>

<style></style>
