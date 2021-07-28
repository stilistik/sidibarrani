<template>
  <div class="relative w-screen h-screen overflow-visible text-white">
    <Hand v-if="Boolean(roundID)" :roundID="roundID" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from "vue";
import { useGameQuery } from "../api";
import Hand from "../components/Hand.vue";
import router from "../router";

export default defineComponent({
  name: "GamePage",
  components: {
    Hand,
  },
  setup() {
    const gameId = computed(
      () => router.currentRoute.value.query.gameId as string
    );
    const { data, isLoading, isError } = useGameQuery(gameId);
    const roundID = computed(() => data.value?.ActiveRound?.id);
    return reactive({
      isLoading,
      isError,
      roundID,
    });
  },
});
</script>
