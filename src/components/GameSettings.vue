<template>
  <div class="flex">
    <Checkbox
      :modelValue="game?.private"
      @change="handleChangePrivate"
      name="private"
      label="Private"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, watch } from "vue";
import { useCurrentGame, useUpdateGameMutation } from "../api";
import Checkbox from "./Checkbox.vue";
import ColorPicker from "./ColorPicker.vue";

export default defineComponent({
  components: {
    Checkbox,
    ColorPicker,
  },
  setup(props) {
    const updateGameMutation = useUpdateGameMutation();
    const game = useCurrentGame();

    console.log(game);

    function handleChangePrivate(e: any) {
      const isPrivate = e.target.checked;
      updateGameMutation.mutate({
        input: {
          id: game.value?.id,
          private: isPrivate,
        },
      });
    }

    return reactive({ game, handleChangePrivate });
  },
});
</script>
