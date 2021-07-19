<template>
  <AppHeader />
  <PageContainer>
    <PageTitle class="mt-10">{{ data?.name }}</PageTitle>
    <div class="text-white">
      <Loading v-if="isLoading">Loading</Loading>
      <p v-if="isError">Error</p>
      <p>{{ data?.Teams?.items[0].name }}</p>
      <p>VS</p>
      <p>{{ data?.Teams?.items[1].name }}</p>
    </div>
  </PageContainer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageContainer from "../components/PageContainer.vue";
import AppHeader from "../components/AppHeader.vue";
import PageTitle from "../components/PageTitle.vue";
import Loading from "../components/Loading.vue";
import { useLobbyQuery } from "../api/queries";
import router from "../router";

export default defineComponent({
  name: "Lobby",
  components: {
    AppHeader,
    PageContainer,
    PageTitle,
    Loading,
  },
  setup() {
    const gameId = router.currentRoute.value.query.gameId as string;
    return useLobbyQuery(gameId);
  },
});
</script>
