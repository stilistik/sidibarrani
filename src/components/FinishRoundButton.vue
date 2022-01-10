<template>
  <Tooltip text="Finish this round immediately">
    <IconButton v-if="shouldRender" @click="handleFinishRound">
      <Icon icon="forward" />
    </IconButton>
  </Tooltip>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useCurrentGame, useFinishRoundMutation } from "../api";
import IconButton from "./IconButton.vue";
import Tooltip from "./Tooltip.vue";

export default defineComponent({
  components: {
    IconButton,
    Tooltip,
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
