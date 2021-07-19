<template>
  <AppHeader />
  <PageContainer>
    <PageTitle>Home</PageTitle>
    <OnlineUsersList />
    <CreateGame />
  </PageContainer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageContainer from "../components/PageContainer.vue";
import AppHeader from "../components/AppHeader.vue";
import PageTitle from "../components/PageTitle.vue";
import OnlineUsersList from "../components/OnlineUsersList.vue";
import CreateGame from "../components/CreateGame.vue";

export default defineComponent({
  name: "Home",
  components: {
    PageContainer,
    PageTitle,
    AppHeader,
    OnlineUsersList,
    CreateGame,
  },
});
</script>
