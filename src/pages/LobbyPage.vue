<template>
  <AppHeader />
  <PageContainer>
    <PageTitle class="mt-10">{{ data?.name }}</PageTitle>
    <div class="w-full flex justify-center mt-10">
      <CopyJoinLink />
    </div>
    <div class="text-white">
      <p v-if="isError">Error</p>
      <Loading v-else-if="isLoading">Loading</Loading>
      <div v-else class="flex items-start mt-20">
        <Team
          :id="data?.Teams?.items[0].id"
          class="flex-1"
          :class="`shadow-${data?.Teams?.items[0].color}`"
        />
        <p class="font-extrabold text-8xl p-10 mt-4">VS</p>
        <Team
          :id="data?.Teams?.items[1].id"
          class="flex-1"
          :class="`shadow-${data?.Teams?.items[1].color}`"
        />
      </div>
    </div>

    <div class="flex justify-center mt-20">
      <StartGame :id="data?.id" />
    </div>
  </PageContainer>
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from "vue";
import PageContainer from "../components/PageContainer.vue";
import AppHeader from "../components/AppHeader.vue";
import PageTitle from "../components/PageTitle.vue";
import Loading from "../components/Loading.vue";
import Team from "../components/Team.vue";
import StartGame from "../components/StartGame.vue";
import CopyJoinLink from "../components/CopyJoinLink.vue";
import { useLeaveTeamMutation, useGameQuery } from "../api";
import router from "../router";
import { useQueryClient } from "vue-query";
import { Message } from "../utils/Message";

export default defineComponent({
  name: "Lobby",
  components: {
    AppHeader,
    PageContainer,
    PageTitle,
    Loading,
    Team,
    StartGame,
    CopyJoinLink,
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

    return reactive({
      ...useGameQuery(gameId),
      gameId,
      qclient,
      leaveGame,
      leaveGameMutation,
    });
  },
  beforeRouteLeave(to) {
    if (to.name !== "GamePage") this.leaveGame();
  },
});
</script>
