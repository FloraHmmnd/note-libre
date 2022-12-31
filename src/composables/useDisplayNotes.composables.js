import { computed } from "vue";
import { TEMPOS } from "../constants/tempos.constants";

const useDisplayNotes = (selectedTempo) => {
  const getTempo = computed(() =>
    TEMPOS.find((tempo) => tempo.name === selectedTempo.value)
  );

  return {
    getTempo,
  };
};

export default useDisplayNotes;
