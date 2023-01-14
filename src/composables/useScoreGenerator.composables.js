import { computed, ref } from "vue";
import { storeToRefs } from "pinia";

import useScoreStore from "../store/score.store";

import { NOTES } from "../constants/notes.constants";
import { TEMPOS } from "../constants/tempos.constants";

const useScoreGenerator = () => {
  const {
    numberOfNotesSelected,
    minOctaveSelected,
    maxOctaveSelected,
    selectedTempo,
    note,
    octave,
  } = storeToRefs(useScoreStore());

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
    return Math.floor(Math.random() * (maxTime - minTime) + minTime);
  };

  const getTempo = computed(() => {
    return TEMPOS.find((tempo) => tempo.name === selectedTempo.value);
  });

  const setNote = () => {
    note.value = randomNote();
    octave.value = randomOctave();
  };

  const timePlayer = () =>
    new Promise((resolve) =>
      setTimeout(
        resolve,
        randomizeTime(
          1000 / getTempo.value.timeDivider,
          5000 / getTempo.value.timeDivider
        )
      )
    );

  const player = async () => {
    let count = 0;
    while (count < numberOfNotesSelected.value) {
      await timePlayer();
      setNote();
      count++;
    }
  };

  return {
    player,
  };
};

export default useScoreGenerator;
