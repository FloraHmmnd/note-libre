<template>
  <div class="input-notes">
    <label for="numberOfNotes">Enter a number to display some notes</label>
    <input
      type="number"
      id="numberOfNotes"
      min="1"
      max="100"
      v-model="numberOfNotesSelected"
    />
  </div>
  <div>
    <label for="min octave">Select minimum octave</label>
    <input
      type="number"
      id="minOctave"
      min="1"
      max="8"
      v-model="minOctaveSelected"
    />
  </div>
  <div>
    <label for="max octave">Select maximum octave</label>
    <input
      type="number"
      id="maxOctave"
      :min="minOctaveSelected"
      max="8"
      v-model="maxOctaveSelected"
    />
  </div>

  <div>
    <label for="choiceTempo">Select a tempo</label>
    <select id="choiceTempo" v-model="selectedTempo">
      <option v-for="tempo in TEMPOS" :key="tempo.id" :value="tempo.name">
        {{ tempo.name }}
      </option>
    </select>
  </div>
  <button @click="handleAction()">GO</button>
</template>

<script setup>
import { watch } from "vue";
import { storeToRefs } from "pinia";

import useScoreStore from "../store/score.store";
import { TEMPOS } from "../constants/tempos.constants";
import useScoreGenerator from "../composables/useScoreGenerator.composables";

const {
  numberOfNotesSelected,
  minOctaveSelected,
  maxOctaveSelected,
  selectedTempo,
} = storeToRefs(useScoreStore());

const { player } = useScoreGenerator();
const handleAction = () => {
  player();
};
watch(
  () => minOctaveSelected.value,
  (newValue) => {
    if (newValue >= maxOctaveSelected.value) {
      maxOctaveSelected.value = minOctaveSelected.value;
    }
  }
);
</script>
