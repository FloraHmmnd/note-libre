<template>
  <h1><button @click="handleAction()">Play</button></h1>
</template>

<script setup>
import useScoreGenerator from "../composables/useScoreGenerator.composables";

const { player } = useScoreGenerator();

const handleAction = () => {
  player();
};
</script>
<style scoped>
h1 {
  text-shadow: 1px 1px 2px rgb(0, 221, 255), 0 0 1em rgb(6, 6, 6),
    0 0 0.2em rgb(85, 103, 98);
  color: rgb(237, 240, 243);
  font-family: "CirrusCumulus";
  font-size: 7em;
  text-align: center;
  margin-top: 1.5em;
}

/* TODO: fix margin-left button */

button {
  margin-left: -30%;
  font-family: "CirrusCumulus";
  text-shadow: 1px 1px 2px rgb(0, 221, 255), 0 0 1em rgb(6, 6, 6),
    0 0 0.2em rgb(85, 103, 98);
  color: rgb(237, 240, 243);
  font-size: 1.5em;
  cursor: pointer;
  border: transparent;
  background-color: transparent;
}

button:hover {
  color: #64ff86;
}
</style>
