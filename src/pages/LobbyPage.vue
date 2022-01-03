<template>
  <AppHeader />
  <PageContainer v-if="Boolean(game)">
    <div class="w-full flex justify-center mt-10">
      <CopyJoinLink />
    </div>
    <div class="w-full rounded-2xl mt-10 bg-gray-800">
      <div class="relative text-white w-full overflow-hidden rounded-t-2xl">
        <SplitBackground
          :color1="game.TeamA ? game.teamAColor : 'gray'"
          :color2="game.TeamB ? game.teamBColor : 'gray'"
          :size="100"
          :class="'text-5xl'"
        />
        <div class="w-full flex relative items-start justify-between z-10">
          <Team :game="game" :teamKey="'A'" />
          <Team :game="game" :teamKey="'B'" />
        </div>
      </div>
      <GameSettings class="w-full p-5 text-white" />
    </div>

    <div class="flex justify-center mt-20">
      <StartGame :id="game?.id" />
    </div>
    <div class="flex justify-center mt-20">
      <Button @click="leaveGame">Leave Game</Button>
    </div>
  </PageContainer>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, watchEffect } from "vue";
import PageContainer from "../components/PageContainer.vue";
import AppHeader from "../components/AppHeader.vue";
import PageTitle from "../components/PageTitle.vue";
import Loading from "../components/Loading.vue";
import Button from "../components/Button.vue";
import Team from "../components/Team.vue";
import StartGame from "../components/StartGame.vue";
import CopyJoinLink from "../components/CopyJoinLink.vue";
import SplitBackground from "../components/SplitBackground.vue";
import GameSettings from "../components/GameSettings.vue";
import {
  useLeaveGameMutation,
  useGameQuery,
  useCurrentGame,
  useUpdateGameMutation,
} from "../api";
import router from "../router";
import { useQueryClient } from "vue-query";
import { Message } from "../utils/Message";

export default defineComponent({
  name: "LobbyPage",
  components: {
    AppHeader,
    PageContainer,
    PageTitle,
    Loading,
    Team,
    StartGame,
    CopyJoinLink,
    Button,
    SplitBackground,
    GameSettings,
  },
  setup() {
    const leaveGameMutation = useLeaveGameMutation();
    const updateGameMutation = useUpdateGameMutation();
    const qclient = useQueryClient();
    const game = useCurrentGame();

    async function leaveGame() {
      try {
        await leaveGameMutation.mutateAsync({
          gameID: game.value.id,
        });
        qclient.invalidateQueries("getGame");
        router.push({ path: "/" });
      } catch (err) {
        Message.error("Could not leave the game");
      }
    }

    watchEffect(() => {
      if (game.value?.status === "STARTED") {
        router.replace({
          path: "/game/play",
          query: { gameId: game.value.id },
        });
      }
    });

    console.log(game);

    return reactive({
      game,
      leaveGame,
    });
  },
});
</script>
