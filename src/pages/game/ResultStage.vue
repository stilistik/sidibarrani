<template>
  <div class="relative w-screen h-screen overflow-visible text-white">
    <div class="absolute top-20">
      <h3>Results</h3>
      <Button @click="newRound">New Round</Button>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from "vue";
import { useNewRoundMutation } from "../../api";
import Button from "../../components/Button.vue";
import router from "../../router";

export default defineComponent({
  name: "ResultStage",
  components: {
    Button,
  },
  setup(props) {
    const gameId = computed(
      () => router.currentRoute.value.query.gameId as string
    );
    const newRoundMutation = useNewRoundMutation();

    function newRound() {
      newRoundMutation.mutate({
        gameID: gameId.value,
      });
    }

    return reactive({
      newRound,
    });
  },
});
</script>
