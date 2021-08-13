<template>
  <div class="relative w-screen h-screen overflow-visible text-white">
    <div class="absolute top-20 flex gap-3 p-3">
      <div
        class="
          flex
          items-center
          font-black
          text-2xl
          gap-2
          bg-gray-800
          rounded-full
          text-primary
          px-5
        "
      >
        <span>Play Mode:</span>
        <ModeIcon :mode="activeRound.mode" :size="28" />
      </div>
      <Button v-if="isClearable" @click="clear">Clear</Button>
      <Button v-if="isEndable" @click="end">End Round</Button>
    </div>
    <YourTurn />
    <StackWinner />
    <Stack v-if="Boolean(activeStack)" :stack="activeStack" />
    <Hand v-if="Boolean(activeRound)" :round="activeRound" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from "vue";
import {
  useActiveRound,
  useActiveStack,
  useClearStackMutation,
  useEndRoundMutation,
} from "../../api";
import AppHeader from "../../components/AppHeader.vue";
import Hand from "../../components/Hand.vue";
import Button from "../../components/Button.vue";
import Stack from "../../components/Stack.vue";
import YourTurn from "../../components/YourTurn.vue";
import StackWinner from "../../components/StackWinner.vue";
import ModeIcon from "./ModeIcon.vue";

export default defineComponent({
  name: "GamePage",
  components: {
    AppHeader,
    Hand,
    Stack,
    Button,
    YourTurn,
    StackWinner,
    ModeIcon,
  },
  setup() {
    const activeRound = useActiveRound();
    const activeStack = useActiveStack();

    const isEndable = computed(
      () =>
        activeRound.value.stacks.items.length == 10 && activeStack.value.winner
    );

    const isClearable = computed(
      () =>
        activeStack?.value?.actions?.items?.length >= activeStack?.value?.size
    );

    const clearStackMutation = useClearStackMutation();
    const endRoundMutation = useEndRoundMutation();

    function clear() {
      clearStackMutation.mutate({
        roundID: activeRound.value.id,
      });
    }

    function end() {
      endRoundMutation.mutate({
        roundID: activeRound.value.id,
      });
    }

    return reactive({
      activeRound,
      activeStack,
      isClearable,
      isEndable,
      end,
      clear,
    });
  },
});
</script>
