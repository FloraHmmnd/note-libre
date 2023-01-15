import { computed } from "vue";
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
  } = storeToRefs(useScoreStore());

  const { setNote, setOctave, setIsPlaying } = useScoreStore();

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
      setIsPlaying(true);

      await timePlayer();
      setNote(randomNote());
      setOctave(randomOctave());
      count++;
    }
    if (count === numberOfNotesSelected.value) {
      setIsPlaying(false);
    }
  };

  return {
    player,
  };
};

export default useScoreGenerator;
