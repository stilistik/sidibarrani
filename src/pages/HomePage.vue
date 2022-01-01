<template>
  <AppHeader />
  <PageContainer>
    <CreateGame class="my-5 mt-20" />
    <GameList />
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
