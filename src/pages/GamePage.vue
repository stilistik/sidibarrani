<template>
  <div class="text-white">
    <p v-for="hand in hands" :key="hand.id">
      {{ hand?.user?.username }}

      {{ hand.cards }}
    </p>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from "vue";
import { useGameQuery } from "../api";
import router from "../router";

export default defineComponent({
  name: "GamePage",
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
