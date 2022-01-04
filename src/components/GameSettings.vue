<template>
  <div class="flex gap-5">
    <Checkbox
      :modelValue="game?.public"
      @change="handleChangePublic"
      name="public"
      label="Public"
    />
    <Select
      :options="['DUO', 'QUATTRO']"
      :value="game?.mode"
      @onSelect="handleSelectMode"
      :placeholder="'Select Mode'"
      :disabled="true"
    >
      <Icon icon="dice" />
    </Select>
    <NumberInput
      :value="game?.winCondition"
      @onChange="handleWinConditionChange"
      :step="100"
      :min="0"
    >
      <Icon icon="trophy" class="mx-2" />
    </NumberInput>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { useCurrentGame, useUpdateGameMutation } from "../api";
import Checkbox from "./Checkbox.vue";
import Select from "./Select.vue";
import ColorPicker from "./ColorPicker.vue";
import NumberInput from "./NumberInput.vue";

export default defineComponent({
  components: {
    Checkbox,
    Select,
    ColorPicker,
    NumberInput,
  },
  setup(props) {
    const updateGameMutation = useUpdateGameMutation();
    const gameRef = useCurrentGame();

    function handleChangePublic(e: any) {
      const isPublic = e.target.checked;
      updateGameMutation.mutate({
        input: {
          id: gameRef.value?.id,
          public: isPublic,
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

    function handleWinConditionChange(value: number) {
      updateGameMutation.mutate({
        input: {
          id: gameRef.value?.id,
          winCondition: value,
        },
      });
    }

    return reactive({
      game: gameRef,
      handleChangePublic,
      handleSelectMode,
      handleWinConditionChange,
    });
  },
});
</script>
