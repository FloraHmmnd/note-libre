import { defineStore } from "pinia";
import { ref } from "vue";

export default defineStore("scoreStore", () => {
  const numberOfNotesSelected = ref(25);
  const minOctaveSelected = ref(1);
  const maxOctaveSelected = ref(8);
  const selectedTempo = ref("largo");
  const note = ref(null);
  const octave = ref(null);
  const isPlaying = ref(false);

  const setMinOctave = (minOctave) => {
    minOctaveSelected.value = minOctave;
  };

  const setMaxOctave = (maxOctave) => {
    maxOctaveSelected.value = maxOctave;
  };

  const setNote = (newNote) => {
    note.value = newNote;
  };

  const setOctave = (newOctave) => {
    octave.value = newOctave;
  };

  const setIsPlaying = (state) => {
    isPlaying.value = state;
  };
  return {
    numberOfNotesSelected,
    minOctaveSelected,
    maxOctaveSelected,
    selectedTempo,
    note,
    octave,
    setMinOctave,
    setMaxOctave,
    setNote,
    setOctave,
    isPlaying,
    setIsPlaying,
  };
});
