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
    <label for="choiceTempo">Select a tempo</label>
    <select id="choiceTempo" v-model="selectedTempo">
      <option v-for="tempo in TEMPOS" :key="tempo.id" :value="tempo.name">
        {{ tempo.name }}
      </option>
    </select>
  </div>
  <div class="select-cotaves">
    <label>Select octaves min and max</label>
    <VueSlider
      v-model="octaveValue"
      :min="1"
      :max="8"
      :interval="1"
      @drag-end="setOctavesValues()"
    ></VueSlider>
  </div>
  <button @click="handleAction()">GO</button>
</template>

<script setup>
import { ref } from "vue";
import { storeToRefs } from "pinia";

import useScoreStore from "../store/score.store";
import { TEMPOS } from "../constants/tempos.constants";
import useScoreGenerator from "../composables/useScoreGenerator.composables";

import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/default.css";

const { numberOfNotesSelected, selectedTempo } = storeToRefs(useScoreStore());

const { setMinOctave, setMaxOctave } = useScoreStore();
const octaveValue = ref([1, 8]);

const setOctavesValues = () => {
  setMinOctave(octaveValue.value[0]);
  setMaxOctave(octaveValue.value[1]);
};
const { player } = useScoreGenerator();
const handleAction = () => {
  player();
};
</script>
