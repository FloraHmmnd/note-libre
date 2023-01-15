<template>
  <div class="player-container">
    <PlayButton v-if="!isPlaying"></PlayButton>
    <Score v-if="isPlaying"></Score>
  </div>
</template>

<script setup>
import useScoreStore from "../store/score.store";
import { storeToRefs } from "pinia";
import PlayButton from "./PlayButton.vue";
import Score from "./Score.vue";

const { isPlaying } = storeToRefs(useScoreStore());
</script>

<style scoped>
.player-container {
  width: 80%;
  height: 100%;
}
</style>
