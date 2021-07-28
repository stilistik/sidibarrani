<template>
  <div class="relative w-screen h-screen overflow-visible text-white">
    <Stack v-if="Boolean(activeStack)" :stack="activeStack" />
    <Hand v-if="Boolean(activeRound)" :round="activeRound" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from "vue";
import { useGameQuery } from "../api";
import Hand from "../components/Hand.vue";
import Stack from "../components/Stack.vue";
import router from "../router";

export default defineComponent({
  name: "GamePage",
  components: {
    Hand,
    Stack,
  },
  setup() {
    const gameId = computed(
      () => router.currentRoute.value.query.gameId as string
    );
    const { data, isLoading, isError } = useGameQuery(gameId);
    const activeRound = computed(() => data.value?.ActiveRound);
    const activeStack = computed(() => data.value?.ActiveRound?.activeStack);

    return reactive({
      isLoading,
      isError,
      activeRound,
      activeStack,
    });
  },
});
</script>
