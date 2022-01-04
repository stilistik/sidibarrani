<template>
  <AppHeader />
  <PageContainer>
    <CardManager>
      <BetStage v-if="activeRound?.status === 'BET'" />
      <PlayStage v-if="activeRound?.status === 'PLAY'" />
      <ResultStage v-if="activeRound?.status === 'ENDED'" />
    </CardManager>
    <Messenger :messages="game?.messages?.items" :gameID="game?.id" />
  </PageContainer>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { useActiveRound, useCurrentGame } from "../../api";
import AppHeader from "../../components/AppHeader.vue";
import PlayStage from "./PlayStage.vue";
import BetStage from "./BetStage.vue";
import ResultStage from "./ResultStage.vue";
import PageContainer from "../../components/PageContainer.vue";
import Messenger from "../../components/Messenger.vue";
import CardManager from "./CardManager.vue";

export default defineComponent({
  name: "GamePage",
  components: {
    AppHeader,
    PlayStage,
    BetStage,
    ResultStage,
    PageContainer,
    CardManager,
    Messenger,
  },
  setup() {
    const activeRound = useActiveRound();
    const game = useCurrentGame();

    return reactive({
      activeRound,
      game,
    });
  },
});
</script>
