<template>
  <AppHeader />
  <PageContainer>
    <div class="flex">
      <div class="w-2/3 pr-10">
        <CreateGame class="my-5 mt-20" />
        <GameList />
      </div>
      <div class="w-1/3">
        <Manual />
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
import Manual from "../components/Manual.vue";

export default defineComponent({
  name: "Home",
  components: {
    PageContainer,
    PageTitle,
    AppHeader,
    CreateGame,
    GameList,
    Manual,
  },
});
</script>
