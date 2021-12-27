<template>
  <AppHeader />
  <PageContainer>
    <CardManager>
      <BetStage v-if="activeRound?.status === 'BET'" />
      <PlayStage v-if="activeRound?.status === 'PLAY'" />
      <ResultStage v-if="activeRound?.status === 'ENDED'" />
    </CardManager>
  </PageContainer>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { useActiveRound } from "../../api";
import AppHeader from "../../components/AppHeader.vue";
import PlayStage from "./PlayStage.vue";
import BetStage from "./BetStage.vue";
import ResultStage from "./ResultStage.vue";
import PageContainer from "../../components/PageContainer.vue";
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
  },
  setup() {
    const activeRound = useActiveRound();

    return reactive({
      activeRound,
    });
  },
});
</script>
