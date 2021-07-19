<template>
  <AppHeader />
  <PageContainer>
    <PageTitle class="mt-10">Welcome</PageTitle>
    <div class="flex gap-10 mt-20">
      <div class="flex-1 flex items-start justify-end">
        <div class="flex flex-col gap-5">
          <h1 class="text-white text-4xl font-thin">Join Game</h1>
          <GameList />
        </div>
      </div>
      <div class="flex-1 flex items-start justify-start">
        <div class="flex flex-col gap-5">
          <h1 class="text-white text-4xl font-thin">Create Game</h1>
          <CreateGame />
        </div>
      </div>
    </div>
  </PageContainer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageContainer from "../components/PageContainer.vue";
import AppHeader from "../components/AppHeader.vue";
import PageTitle from "../components/PageTitle.vue";
import GameList from "../components/GameList.vue";
import CreateGame from "../components/CreateGame.vue";

export default defineComponent({
  name: "Home",
  components: {
    PageContainer,
    PageTitle,
    AppHeader,
    CreateGame,
    GameList,
  },
});
</script>
