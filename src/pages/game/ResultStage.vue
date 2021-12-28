<template>
  <div class="w-full h-full flex justify-center text-white overflow-auto">
    <div class="flex flex-col gap-3 pt-40">
      <Button @click="newRound" class="mb-10">New Round</Button>
      <div class="flex gap-3 pb-20">
        <div
          v-for="result in results"
          :key="result.team.id"
          class="flex flex-col gap-3"
        >
          <div
            class="
              flex
              items-center
              font-black
              text-2xl
              gap-2
              bg-gray-800
              rounded-full
              px-5
              py-2
              mb-5
            "
          >
            <span>{{ result?.team?.name }}:</span>
            <span class="text-primary">{{ result?.score }} Points</span>
          </div>

          <div
            v-for="(stack, index) in result.stacks"
            :key="index"
            class="text-white flex gap-2 pl-3"
          >
            <StaticCard
              v-for="card in stack?.cards"
              :key="card"
              :card="card"
              :style="{ width: 65, height: 100 }"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from "vue";
import { useActiveRound, useNewRoundMutation } from "../../api";
import Button from "../../components/Button.vue";
import StaticCard from "./StaticCard.vue";
import router from "../../router";
import { useGameQuery } from "../../api";

export default defineComponent({
  name: "ResultStage",
  components: {
    Button,
    StaticCard,
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

    function getStack(teamId: string) {
      const stacks = activeRound.value?.stacks?.items.filter(
        (stack: any) => stack.winner.teamID === teamId
      );
      return stacks
        .map((stack: any) => ({
          cards: stack.actions.items
            .filter((action: any) => action.type === "PLAY")
            .map((action: any) => action.value),
        }))
        .filter((stack: any) => stack.cards.length > 0);
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
          stacks: getStack(teamId),
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
