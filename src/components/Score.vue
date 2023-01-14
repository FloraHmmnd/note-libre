<template>
  <div>
    <span v-if="note?.name"> {{ note.name }}</span>
    <span v-if="note?.type">{{ note.type }}</span>
    <span v-if="octave">{{ octave }}</span>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import useScoreStore from "../store/score.store";

const { note, octave } = storeToRefs(useScoreStore());
</script>
