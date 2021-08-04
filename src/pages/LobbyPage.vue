<template>
  <AppHeader />
  <PageContainer>
    <PageTitle class="mt-10">{{ gameName }}</PageTitle>
    <div class="w-full flex justify-center mt-10">
      <CopyJoinLink />
    </div>
    <div class="text-white">
      <div class="flex items-start mt-20">
        <Team :team="team1" class="flex-1" :class="`shadow-${team1?.color}`" />
        <p class="font-extrabold text-8xl p-10 mt-4">VS</p>
        <Team :team="team2" class="flex-1" :class="`shadow-${team2?.color}`" />
      </div>
      <Button @click="leaveGame">Leave Game</Button>
    </div>

    <div class="flex justify-center mt-20">
      <StartGame :id="gameId" />
    </div>
  </PageContainer>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  onBeforeUnmount,
  reactive,
  watchEffect,
} from "vue";
import PageContainer from "../components/PageContainer.vue";
import AppHeader from "../components/AppHeader.vue";
import PageTitle from "../components/PageTitle.vue";
import Loading from "../components/Loading.vue";
import Button from "../components/Button.vue";
import Team from "../components/Team.vue";
import StartGame from "../components/StartGame.vue";
import CopyJoinLink from "../components/CopyJoinLink.vue";
import {
  useLeaveTeamMutation,
  useGameQuery,
  useGameSubscription,
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
  },
  setup() {
    const leaveGameMutation = useLeaveTeamMutation();
    const qclient = useQueryClient();
    const gameId = computed(
      () => router.currentRoute.value.query.gameId as string
    );

    async function leaveGame() {
      try {
        await leaveGameMutation.mutateAsync({
          input: { gameID: gameId.value },
        });
        qclient.invalidateQueries("getGame");
      } catch (err) {
        Message.error("Could not leave the game");
      }
    }

    const subscription = useGameSubscription(gameId.value);

    onBeforeUnmount(() => {
      subscription.unsubscribe();
    });

    const { data } = useGameQuery(gameId);

    watchEffect(() => {
      if (data?.value?.status === "STARTED") {
        router.push({ path: "game", query: { gameId: gameId.value } });
      }
    });

    const team1 = computed(() => {
      return data?.value?.Teams?.items[0];
    });

    const team2 = computed(() => {
      return data?.value?.Teams?.items[1];
    });

    const gameName = computed(() => {
      return data?.value?.name;
    });

    return reactive({
      team1,
      team2,
      gameName,
      gameId,
      leaveGame,
    });
  },
});
</script>
