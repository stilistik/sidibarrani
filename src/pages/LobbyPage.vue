<template>
  <AppHeader />
  <PageContainer>
    <template v-if="!isLoading">
      <div class="text-center">
        <h1 class="mt-10 text-white text-9xl font-extrabold">
          {{ gameName }}
        </h1>
      </div>
      <div class="w-full flex justify-center mt-10">
        <CopyJoinLink />
      </div>
      <div class="text-white w-full relative overflow-hidden rounded-2xl mt-10">
        <SplitBackground
          :color1="team1?.color"
          :color2="team2?.color"
          :size="100"
          :class="'text-5xl'"
        />
        <div class="w-full flex relative items-start justify-between z-10">
          <Team :team="team1" />
          <Team :team="team2" />
        </div>
      </div>

      <div class="flex justify-center mt-20">
        <StartGame :id="gameId" />
      </div>
      <div class="flex justify-center mt-20">
        <Button @click="leaveGame">Leave Game</Button>
      </div>
    </template>
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
import SplitBackground from "../components/SplitBackground.vue";
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
    SplitBackground,
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
        router.push({ path: "/" });
      } catch (err) {
        Message.error("Could not leave the game");
      }
    }

    const subscription = useGameSubscription(gameId.value);

    onBeforeUnmount(() => {
      subscription.unsubscribe();
    });

    const { data, isLoading } = useGameQuery(gameId);

    watchEffect(() => {
      if (data?.value?.status === "STARTED") {
        router.replace({ path: "game", query: { gameId: gameId.value } });
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
      isLoading,
    });
  },
});
</script>
