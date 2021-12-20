<template>
  <AppHeader />
  <PageContainer>
    <div class="flex gap-10 mt-20">
      <div class="flex-1 flex items-start justify-end">
        <div class="w-full flex flex-col gap-5">
          <h1 class="text-white text-4xl font-black">Join Game</h1>
          <GameList />
        </div>
      </div>
      <div class="flex-1 flex items-start justify-start">
        <div class="sticky top-32 flex flex-col gap-5">
          <h1 class="text-white text-4xl font-black">Create Game</h1>
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
