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
  <div>
    <span>{{ note.name }}</span>
    <span v-if="note.type">{{ note.type }}</span>
    <span>{{ octave }}</span>
  </div>
</template>

<script setup>
import { ref, watch, computed, toRefs } from "vue";
import { TEMPOS } from "../constants/tempos.constants";
import useRandomize from "../composables/useRandomize.composables";

const handleAction = () => {
  display();
};

const numberOfNotesSelected = ref(25);
const minOctaveSelected = ref(1);
const maxOctaveSelected = ref(1);
const selectedTempo = ref("largo");
const { randomNote, randomOctave, getTempo, randomizeTime } = useRandomize(
  maxOctaveSelected,
  minOctaveSelected,
  numberOfNotesSelected,
  selectedTempo
);
const note = ref("");
const octave = ref("");
const display = async () => {
  for (let i = 0; i < numberOfNotesSelected.value; i++) {
    await new Promise((response) => {
      setTimeout(
        response,
        randomizeTime(
          1000 / getTempo.value.timeDivider,
          5000 / getTempo.value.timeDivider
        )
      );
      note.value = randomNote();
      octave.value = randomOctave();
    });
  }
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
