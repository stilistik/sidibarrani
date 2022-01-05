<template>
  <div class="w-full h-full text-white overflow-auto pt-40">
    <div
      v-if="game.status === 'ENDED'"
      class="mb-20 flex flex-col items-center"
    >
      <h1 class="text-8xl font-black text-primary">Victory!</h1>
      <h2 class="text-4xl font-black text-white">
        {{ game.winner?.name }} has won the game
      </h2>
    </div>

    <div class="flex justify-center gap-20">
      <div>
        <Button
          v-if="game.status !== 'ENDED'"
          @click="newRound"
          class="w-full mb-5"
          >New Round</Button
        >
        <table class="font-black">
          <thead>
            <tr>
              <td class="px-8 py-3 border-b-2 border-primary"></td>
              <td class="px-8 py-3 border-b-2 border-primary">
                {{ game.TeamA.name }}
              </td>
              <td class="px-8 py-3 border-b-2 border-primary">
                {{ game.TeamB.name }}
              </td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, index) in gameResults" :key="index">
              <td
                class="px-8 py-3"
                :class="{
                  'border-t-2 border-primary': index === gameResults.length - 1,
                }"
              >
                {{ row.name }}
              </td>
              <td
                class="px-8 py-3"
                :class="{
                  'border-t-2 border-primary': index === gameResults.length - 1,
                }"
              >
                {{ row.a }}
              </td>
              <td
                class="px-8 py-3"
                :class="{
                  'border-t-2 border-primary': index === gameResults.length - 1,
                }"
              >
                {{ row.b }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div>
        <h1 class="text-5xl font-black mb-10">Last Round Turns</h1>
        <div class="flex flex-col gap-3 pb-20">
          <div
            v-for="(turn, index) in activeRoundTurns"
            :key="index"
            class="flex gap-3 p-3 rounded-2xl"
            :class="turn.class"
          >
            <StaticCard
              v-for="card in turn?.cards"
              :key="card"
              :card="card"
              :style="{ width: 65, height: 100 }"
            />
            <div class="font-black">
              <p class="text-4xl">
                {{ turn.points }} Points {{ turn.isLastStack ? " (+5)" : "" }}
              </p>
              <p class="text-2xl">Winner: {{ turn.winner?.team?.name }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from "vue";
import { useActiveRound, useCurrentGame, useNewRoundMutation } from "../../api";
import Button from "../../components/Button.vue";
import { colorClasses } from "../../utils/ColorUtils";
import { getTeamColorById } from "../../utils/GameUtils";
import StaticCard from "./StaticCard.vue";

export default defineComponent({
  name: "ResultStage",
  components: {
    Button,
    StaticCard,
  },
  setup() {
    const game = useCurrentGame();
    const activeRound = useActiveRound();
    const newRoundMutation = useNewRoundMutation();

    function newRound() {
      newRoundMutation.mutate({
        gameID: game.value.id,
      });
    }

    const activeRoundTurns = computed(() => {
      const stacks = activeRound.value?.stacks?.items;
      return stacks
        .filter((stack) => stack.winner && stack.points)
        .map((stack) => ({
          cards: stack.actions.items
            .filter((action) => action.type === "PLAY")
            .map((action) => action.value),
          points: stack.points,
          winner: stack.winner,
          isLastStack: stack.isLastStack,
          class:
            colorClasses[getTeamColorById(game.value, stack.winner?.team?.id)]
              .bg,
        }));
    });

    const gameResults = computed(() => {
      const rows: { name: string; a: number; b: number }[] = [];

      const idTeamA = game.value.TeamA.id;
      const idTeamB = game.value.TeamB.id;

      game.value.Rounds.items.forEach((round, index) => {
        const result = JSON.parse(round.result);
        rows.push({
          name: `Round ${index + 1}`,
          a: result[idTeamA],
          b: result[idTeamB],
        });
      });

      const result = JSON.parse(game.value.result);
      rows.push({ name: "Total", a: result[idTeamA], b: result[idTeamB] });
      return rows;
    });

    return reactive({
      newRound,
      activeRoundTurns,
      game,
      gameResults,
    });
  },
});
</script>
