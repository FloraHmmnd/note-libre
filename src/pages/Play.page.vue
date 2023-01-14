<template>
  <button>
    <router-link to="/home">Note Libre</router-link>
  </button>
  <h1>Play</h1>
  <UserControls></UserControls>
  <Score></Score>
</template>

<script setup>
import UserControls from "../components/UserControls.vue";
import Score from "../components/Score.vue";
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

/* TODO: fix margin-left button */

button {
  margin-left: -200px;
  font-family: "CirrusCumulus";
  text-shadow: 1px 1px 2px rgb(0, 221, 255), 0 0 1em rgb(6, 6, 6),
    0 0 0.2em rgb(85, 103, 98);
  color: rgb(237, 240, 243);
  font-size: 1.5em;
  cursor: pointer;
  border: transparent;
  background-color: transparent;
}
</style>
