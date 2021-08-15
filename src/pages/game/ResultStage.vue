<template>
  <div class="relative w-screen h-screen overflow-visible text-white">
    <div class="absolute top-20 w-full flex justify-center">
      <div class="pt-20 flex flex-col gap-3">
        <div
          v-for="result in results"
          :key="result.team.id"
          class="
            flex
            items-center
            font-black
            text-2xl
            gap-2
            bg-gray-800
            rounded-full
            text-white
            px-5
            py-2
          "
        >
          <span>{{ result?.team?.name }}:</span>
          <span class="text-primary">{{ result?.score }} Points</span>
        </div>
        <Button @click="newRound">New Round</Button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from "vue";
import { useActiveRound, useNewRoundMutation } from "../../api";
import Button from "../../components/Button.vue";
import router from "../../router";
import { useGameQuery } from "../../api";

export default defineComponent({
  name: "ResultStage",
  components: {
    Button,
  },
  setup() {
    const gameId = computed(
      () => router.currentRoute.value.query.gameId as string
    );
    const { data } = useGameQuery(gameId);

    const activeRound = useActiveRound();
    const newRoundMutation = useNewRoundMutation();

    function newRound() {
      newRoundMutation.mutate({
        gameID: gameId.value,
      });
    }

    const results = computed(() => {
      const result = JSON.parse(activeRound.value?.result);

      return Object.keys(result).map((teamId) => {
        const team = data.value.Teams.items.find(
          (team: any) => team.id === teamId
        );
        return {
          team,
          score: result[teamId],
        };
      });
    });

    console.log(results);

    return reactive({
      newRound,
      results,
    });
  },
});
</script>
