<template>
  <AppHeader />

  <div class="relative w-screen h-screen overflow-visible text-white">
    <div class="absolute top-20 flex gap-3 p-3">
      <Button @click="newRound">New Round</Button>
      <Button v-if="isClearable" @click="clear">Clear</Button>
    </div>
    <YourTurn />
    <StackWinner />
    <Stack v-if="Boolean(activeStack)" :stack="activeStack" />
    <Hand v-if="Boolean(activeRound)" :round="activeRound" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onBeforeUnmount, reactive } from "vue";
import {
  useActiveRound,
  useActiveStack,
  useClearStackMutation,
  useGameSubscription,
  useNewRoundMutation,
} from "../api";
import AppHeader from "../components/AppHeader.vue";
import Hand from "../components/Hand.vue";
import Button from "../components/Button.vue";
import Stack from "../components/Stack.vue";
import YourTurn from "../components/YourTurn.vue";
import StackWinner from "../components/StackWinner.vue";
import router from "../router";

export default defineComponent({
  name: "GamePage",
  components: {
    AppHeader,
    Hand,
    Stack,
    Button,
    YourTurn,
    StackWinner,
  },
  setup() {
    const gameId = computed(
      () => router.currentRoute.value.query.gameId as string
    );
    const activeRound = useActiveRound();
    const activeStack = useActiveStack();

    console.log(activeRound);

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
      activeRound,
      activeStack,
      isClearable,
      clear,
      newRound,
    });
  },
});
</script>
