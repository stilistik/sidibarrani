<template>
  <AppHeader />
  <PageContainer>
    <BetStage v-if="activeRound?.status === 'BET'" />
    <PlayStage v-if="activeRound?.status === 'PLAY'" />
    <ResultStage v-if="activeRound?.status === 'ENDED'" />
  </PageContainer>
</template>

<script lang="ts">
import { computed, defineComponent, onBeforeUnmount, reactive } from "vue";
import { useActiveRound, useGameSubscription } from "../../api";
import AppHeader from "../../components/AppHeader.vue";
import PlayStage from "./PlayStage.vue";
import BetStage from "./BetStage.vue";
import ResultStage from "./ResultStage.vue";
import router from "../../router";
import PageContainer from "../../components/PageContainer.vue";

export default defineComponent({
  name: "GamePage",
  components: {
    AppHeader,
    PlayStage,
    BetStage,
    ResultStage,
    PageContainer,
  },
  setup() {
    const activeRound = useActiveRound();

    const gameId = computed(
      () => router.currentRoute.value.query.gameId as string
    );

    const subscription = useGameSubscription(gameId.value);

    onBeforeUnmount(() => {
      subscription.unsubscribe();
    });

    return reactive({
      activeRound,
    });
  },
});
</script>
