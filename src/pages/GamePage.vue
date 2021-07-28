<template>
  <div class="relative w-screen h-screen overflow-visible text-white">
    <div class="absolute">
      <Button @click="newRound">New Round</Button>
      <Button v-if="isClearable" @click="clear">Clear</Button>
    </div>
    <Stack v-if="Boolean(activeStack)" :stack="activeStack" />
    <Hand v-if="Boolean(activeRound)" :round="activeRound" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onBeforeUnmount, reactive } from "vue";
import {
  useClearStackMutation,
  useGameQuery,
  useGameSubscription,
  useNewRoundMutation,
} from "../api";
import Hand from "../components/Hand.vue";
import Button from "../components/Button.vue";
import Stack from "../components/Stack.vue";
import router from "../router";

export default defineComponent({
  name: "GamePage",
  components: {
    Hand,
    Stack,
    Button,
  },
  setup() {
    const gameId = computed(
      () => router.currentRoute.value.query.gameId as string
    );
    const { data, isLoading, isError } = useGameQuery(gameId);
    const activeRound = computed(() => data.value?.ActiveRound);
    const activeStack = computed(() => data.value?.ActiveRound?.activeStack);

    const isClearable = computed(
      () =>
        activeStack?.value?.actions?.items?.length >= activeStack?.value?.size
    );

    const clearStackMutation = useClearStackMutation();
    const newRoundMutation = useNewRoundMutation();

    function newRound() {
      newRoundMutation.mutate({
        gameID: gameId.value,
      });
    }

    function clear() {
      clearStackMutation.mutate({
        roundID: activeRound.value.id,
      });
    }

    const subscription = useGameSubscription(gameId.value);

    onBeforeUnmount(() => {
      subscription.unsubscribe();
    });

    return reactive({
      isLoading,
      isError,
      activeRound,
      activeStack,
      isClearable,
      clear,
      newRound,
    });
  },
});
</script>
