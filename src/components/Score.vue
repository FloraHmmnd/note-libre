<template>
  <div class="score-container">
    <span v-if="note?.name"> {{ note.name }}</span>
    <span v-if="note?.type">{{ note.type }}</span>
    <span class="octave" v-if="octave && note.name !== 'soupir'">
      {{ octave }}
    </span>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { storeToRefs } from "pinia";
import useScoreStore from "../store/score.store";

const { note, octave } = storeToRefs(useScoreStore());

const color = computed(() => note?.value?.color);
</script>

<style>
.score-container {
  font-size: 8em;
  text-align: center;
  margin-top: 2.5em;
  margin-left: -20%;
  -webkit-text-stroke: 1px black;
}

span {
  color: v-bind(color);
  margin-right: 5%;
}
</style>
