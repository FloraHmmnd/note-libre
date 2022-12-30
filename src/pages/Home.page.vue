<template>
  <h1 @mouseover="title = 'Play now'" @mouseleave="title = 'Note Libre'">
    <router-link to="/play">{{ title }}</router-link>
  </h1>
</template>
<script setup>
import { ref } from "vue";

const title = ref("Note Libre");
</script>
<style scoped>
h1 {
  text-shadow: 1px 1px 2px rgb(0, 221, 255), 0 0 1em rgb(6, 6, 6),
    0 0 0.2em rgb(85, 103, 98);
  color: rgb(237, 240, 243);
  font-family: "CirrusCumulus";
  font-size: 7em;
  text-align: center;
  margin-top: 2.5em;
}
</style>
