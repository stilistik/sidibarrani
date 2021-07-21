<template>
  <AppHeader />
  <PageContainer>
    <PageTitle class="mt-10">{{ data?.name }}</PageTitle>
    <div class="text-white">
      <p v-if="isError">Error</p>
      <Loading v-else-if="isLoading">Loading</Loading>
      <div v-else class="flex items-center mt-20">
        <Team :id="data?.Teams?.items[0].id" class="flex-1 shadow-primary" />
        <p class="font-extrabold text-8xl p-10">VS</p>
        <Team :id="data?.Teams?.items[1].id" class="flex-1 shadow-primary" />
      </div>
    </div>

    <div class="flex justify-center mt-32">
      <StartGame />
    </div>
  </PageContainer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageContainer from "../components/PageContainer.vue";
import AppHeader from "../components/AppHeader.vue";
import PageTitle from "../components/PageTitle.vue";
import Loading from "../components/Loading.vue";
import Team from "../components/Team.vue";
import StartGame from "../components/StartGame.vue";
import { useLobbyQuery } from "../api";
import router from "../router";

export default defineComponent({
  name: "Lobby",
  components: {
    AppHeader,
    PageContainer,
    PageTitle,
    Loading,
    Team,
    StartGame,
  },
  setup() {
    const gameId = router.currentRoute.value.query.gameId as string;
    return useLobbyQuery(gameId);
  },
});
</script>
