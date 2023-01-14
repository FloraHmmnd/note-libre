import { defineStore } from "pinia";
import { ref } from "vue";

export default defineStore("scoreStore", {
  state: () => {
    return {
      numberOfNotesSelected: ref(25),
      minOctaveSelected: ref(1),
      maxOctaveSelected: ref(1),
      selectedTempo: ref("largo"),
      note: ref(null),
      octave: ref(null),
    };
  },
});
