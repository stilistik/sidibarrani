<template>
  <div class="relative w-screen h-screen overflow-visible text-white">
    <Hand v-for="hand in hands" :key="hand.id" :cards="hand.cards"> </Hand>
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
    const gameId = router.currentRoute.value.query.gameId as string;
    const { data, isLoading, isError } = useGameQuery(gameId);

    const hands = computed(() => data.value?.ActiveRound?.hands?.items || []);

    return reactive({
      isLoading,
      isError,
      hands,
    });
  },
});
</script>
