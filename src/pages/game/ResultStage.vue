<template>
  <div class="w-full h-full text-white overflow-auto pt-40">
    <div
      v-if="game.status === 'ENDED'"
      class="mb-20 flex flex-col items-center"
    >
      <h1
        class="text-8xl font-black"
        :class="
          game.winner?.id == game.TeamA.id
            ? getColorClass(game.teamAColor, 'text')
            : getColorClass(game.teamBColor, 'text')
        "
      >
        Victory!
      </h1>
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
        >
          <Loading v-if="newRoundLoading" />
          New Round
        </Button>
        <table class="font-black">
          <thead>
            <tr>
              <td class="px-8 py-3 border-b-2 border-gray-700"></td>
              <td class="px-8 py-3 border-b-2 border-gray-700" width="160px">
                <span
                  class="flex justify-center px-3 py-2 bg-gray-800 rounded-xl"
                >
                  Stake
                </span>
              </td>
              <td class="px-8 py-3 border-b-2 border-gray-700" width="160px">
                <span
                  class="flex justify-center rounded-xl px-3 py-2"
                  :class="getColorClass(game.teamAColor)"
                >
                  {{ game.TeamA.name }}
                </span>
              </td>
              <td class="px-8 py-3 border-b-2 border-gray-700" width="160px">
                <span
                  class="flex justify-center rounded-xl px-3 py-2"
                  :class="getColorClass(game.teamBColor)"
                >
                  {{ game.TeamB.name }}
                </span>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, index) in gameResults" :key="index">
              <td
                class="px-8 py-3"
                :class="{
                  'border-t-2 border-gray-700':
                    index === gameResults.length - 1,
                }"
              >
                <span
                  class="flex justify-center px-3 py-2 bg-gray-800 rounded-xl"
                >
                  {{ row.name }}
                </span>
              </td>
              <td
                class="px-8 py-3"
                :class="{
                  'border-t-2 border-gray-700':
                    index === gameResults.length - 1,
                }"
              >
                <span
                  v-if="row?.stake"
                  class="flex justify-center px-3 py-2 rounded-xl"
                  :class="getColorClassByTeamId(row.stake.teamID, 'text')"
                >
                  <ModeIcon :mode="row.mode" :size="20" class="mr-1" />
                  {{ row?.stake?.value }}
                </span>
              </td>
              <td
                class="px-8 py-3"
                :class="{
                  'border-t-2 border-gray-700':
                    index === gameResults.length - 1,
                }"
              >
                {{ row.a }} {{ row.a_bonus ? `(+${row.a_bonus})` : "" }}
              </td>
              <td
                class="px-8 py-3"
                :class="{
                  'border-t-2 border-gray-700':
                    index === gameResults.length - 1,
                }"
              >
                {{ row.b }} {{ row.b_bonus ? `(+${row.b_bonus})` : "" }}
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
import { computed, defineComponent, reactive, ref } from "vue";
import { useActiveRound, useCurrentGame, useNewRoundMutation } from "../../api";
import Button from "../../components/Button.vue";
import ModeIcon from "../game/ModeIcon.vue";
import Loading from "../../components/Loading.vue";
import { Color, colorClasses } from "../../utils/ColorUtils";
import { getTeamColorById } from "../../utils/GameUtils";
import StaticCard from "./StaticCard.vue";
import { RoundMode } from "../../graphql/types";

export default defineComponent({
  name: "ResultStage",
  components: {
    Button,
    Loading,
    ModeIcon,
    StaticCard,
  },
  setup() {
    const game = useCurrentGame();
    const activeRound = useActiveRound();
    const newRoundMutation = useNewRoundMutation();
    const newRoundLoading = ref(false);

    console.log(game);

    function newRound() {
      newRoundLoading.value = false;
      newRoundMutation.mutate(
        {
          gameID: game.value.id,
        },
        {
          onSettled: () => {
            newRoundLoading.value = false;
          },
        }
      );
    }

    const activeRoundTurns = computed(() => {
      const stacks = activeRound.value?.stacks?.items;
      return stacks
        .filter((stack) => stack.winner && stack.points != null)
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
      const rows: {
        name: string;
        a: number;
        b: number;
        a_bonus?: number;
        b_bonus?: number;
        mode?: RoundMode;
        stake?: { teamID: string; value: number };
      }[] = [];

      const idTeamA = game.value.TeamA.id;
      const idTeamB = game.value.TeamB.id;

      game.value.Rounds.items.forEach((round, index) => {
        const result = JSON.parse(round.result);
        const stake = JSON.parse(round.stake);
        rows.push({
          name: `Round ${index + 1}`,
          a: result[idTeamA].value,
          b: result[idTeamB].value,
          a_bonus: result[idTeamA].stake_bonus,
          b_bonus: result[idTeamB].stake_bonus,
          stake,
          mode: round.mode,
        });
      });

      const result = JSON.parse(game.value.result);
      rows.push({
        name: "Total",
        a: result[idTeamA].value,
        b: result[idTeamB].value,
      });
      return rows;
    });

    function getColorClass(color: Color, type: "bg" | "text" = "bg") {
      return colorClasses[color][type];
    }

    function getColorClassByTeamId(teamId: string, type: "bg" | "text" = "bg") {
      const color = getTeamColorById(game.value, teamId);
      return colorClasses[color][type];
    }

    return reactive({
      newRound,
      activeRoundTurns,
      game,
      gameResults,
      newRoundLoading,
      getColorClass,
      getColorClassByTeamId,
    });
  },
});
</script>
