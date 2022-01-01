<template>
  <div class="flex gap-5">
    <Checkbox
      :modelValue="game?.private"
      @change="handleChangePrivate"
      name="private"
      label="Private"
    />
    <Select
      :options="['DUO', 'QUATTRO']"
      :value="game?.mode"
      @onSelect="handleSelectMode"
      :placeholder="'Select Mode'"
    >
      <Icon icon="dice" />
    </Select>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { useCurrentGame, useUpdateGameMutation } from "../api";
import Checkbox from "./Checkbox.vue";
import Select from "./Select.vue";
import ColorPicker from "./ColorPicker.vue";

export default defineComponent({
  components: {
    Checkbox,
    Select,
    ColorPicker,
  },
  setup(props) {
    const updateGameMutation = useUpdateGameMutation();
    const gameRef = useCurrentGame();

    function handleChangePrivate(e: any) {
      const isPrivate = e.target.checked;
      updateGameMutation.mutate({
        input: {
          id: gameRef.value?.id,
          private: isPrivate,
        },
      });
    }

    function handleSelectMode(option: any) {
      const mode = option.value;
      updateGameMutation.mutate({
        input: {
          id: gameRef.value?.id,
          mode,
        },
      });
    }

    return reactive({
      game: gameRef,
      handleChangePrivate,
      handleSelectMode,
    });
  },
});
</script>
