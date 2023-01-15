<template>
  <div class="controls-container">
    <div class="input-notes">
      <label class="number-notes" for="numberOfNotes">number of notes</label>
      <input
        type="number"
        id="numberOfNotes"
        min="1"
        max="100"
        v-model="numberOfNotesSelected"
      />
    </div>
    <div>
      <label class="tempo" for="choiceTempo">tempo</label>
      <select id="choiceTempo" v-model="selectedTempo">
        <option v-for="tempo in TEMPOS" :key="tempo.id" :value="tempo.name">
          {{ tempo.name }}
        </option>
      </select>
    </div>
    <div class="select-octaves">
      <label>octaves min / max</label>
      <VueSlider
        v-model="octaveValue"
        :min="1"
        :max="8"
        :interval="1"
        @drag-end="setOctavesValues()"
      ></VueSlider>
    </div>
    <button v-if="isPlaying" @click="setIsPlaying(false)">STOP</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { storeToRefs } from "pinia";

import useScoreStore from "../store/score.store";
import { TEMPOS } from "../constants/tempos.constants";

import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/default.css";

const { numberOfNotesSelected, selectedTempo, isPlaying } = storeToRefs(
  useScoreStore()
);

const { setMinOctave, setMaxOctave, setIsPlaying } = useScoreStore();
const octaveValue = ref([1, 8]);

const setOctavesValues = () => {
  setMinOctave(octaveValue.value[0]);
  setMaxOctave(octaveValue.value[1]);
};
</script>
<style scoped>
* {
  margin-bottom: 3%;
}
.controls-container {
  width: 20%;
  height: 100%;
}

label {
  margin-right: 5%;
}

input,
select {
  border-radius: 10%;
  border-style: none;
}

button {
  background-color: white;
  border-radius: 10%;
  border-style: none;
}

button:hover {
  color: #64ff86;
  cursor: pointer;
}
</style>
