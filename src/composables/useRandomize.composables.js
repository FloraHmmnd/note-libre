import { computed } from "vue";
import { NOTES } from "../constants/notes.constants";
import { TEMPOS } from "../constants/tempos.constants";

const useRandomize = (
  maxOctaveSelected,
  minOctaveSelected,
  count,
  selectedTempo
) => {
  const randomNote = () => {
    return NOTES[Math.floor(Math.random() * NOTES.length)];
  };

  const randomOctave = () => {
    return Math.floor(
      Math.random() * (maxOctaveSelected.value - minOctaveSelected.value) +
        minOctaveSelected.value
    );
  };

  const randomizeTime = (minTime, maxTime) => {
    console.log("min= " + minTime + "max=" + maxTime);
    console.log(Math.floor(Math.random() * (maxTime - minTime) + minTime));
    return Math.floor(Math.random() * (maxTime - minTime) + minTime);
  };

  const getTempo = computed(() =>
    TEMPOS.find((tempo) => tempo.name === selectedTempo.value)
  );

  return {
    randomNote,
    randomOctave,
    randomizeTime,
    getTempo,
  };
};

export default useRandomize;
