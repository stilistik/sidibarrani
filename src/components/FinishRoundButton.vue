<template>
  <IconButton v-if="shouldRender" @click="handleFinishRound">
    <Icon icon="forward" />
  </IconButton>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useCurrentGame, useFinishRoundMutation } from "../api";
import IconButton from "./IconButton.vue";

export default defineComponent({
  components: {
    IconButton,
  },
  setup(props) {
    const game = useCurrentGame();
    const finishRoundMutation = useFinishRoundMutation();

    async function handleFinishRound() {
      finishRoundMutation.mutate({
        gameID: game.value.id,
      });
    }

    const shouldRender = import.meta.env.DEV;

    return { handleFinishRound, shouldRender };
  },
});
</script>
