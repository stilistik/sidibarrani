<template>
  <AppHeader />
  <BetStage v-if="activeRound?.status === 'BET'" />
  <PlayStage v-if="activeRound?.status === 'PLAY'" />
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { useActiveRound } from "../../api";
import AppHeader from "../../components/AppHeader.vue";
import PlayStage from "./PlayStage.vue";
import BetStage from "./BetStage.vue";

export default defineComponent({
  name: "GamePage",
  components: {
    AppHeader,
    PlayStage,
    BetStage,
  },
  setup() {
    const activeRound = useActiveRound();
    return reactive({
      activeRound,
    });
  },
});
</script>
