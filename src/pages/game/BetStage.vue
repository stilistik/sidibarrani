<template>
  <div class="fixed top-0 left-0 w-screen h-screen overflow-visible text-white">
    <ModeSelector :selectedMode="mode" @modeChange="onModeChange" />
    <div class="absolute left-10 top-20 py-20">
      <h3 class="font-black text-3xl mb-5">History</h3>
      <PreviousBets />
    </div>
    <div class="w-full flex justify-center py-20">
      <CurrentBet v-if="Boolean(lastBet)" :action="lastBet" />
    </div>
    <div class="flex w-full justify-center gap-3 py-20">
      <Button :size="'large'" @click="skip">Skip</Button>
      <Button :size="'large'" @click="placeBet(10)">+10</Button>
      <Button :size="'large'" @click="placeBet(20)">+20</Button>
    </div>
    <YourTurn />
    <div class="absolute top-0 left-0">
      <Hand v-if="Boolean(activeRound)" :round="activeRound" />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref } from "vue";
import Button from "../../components/Button.vue";
import Hand from "../../components/Hand.vue";
import YourTurn from "../../components/YourTurn.vue";
import CurrentBet from "./CurrentBet.vue";
import PreviousBets from "./PreviousBets.vue";
import ModeSelector from "./ModeSelector.vue";
import {
  useActiveRound,
  useActiveStack,
  usePlaceBetMutation,
  useSkipBetMutation,
} from "../../api";
import { Message } from "../../utils/Message";

export default defineComponent({
  components: {
    Button,
    Hand,
    YourTurn,
    CurrentBet,
    PreviousBets,
    ModeSelector,
  },
  setup() {
    const activeRound = useActiveRound();
    const activeStack = useActiveStack();

    const lastAction = computed(() => {
      const actions = activeStack.value.actions.items;
      return actions[actions.length - 1];
    });
    const lastBet = computed(() => {
      const actions = activeStack.value.actions.items;
      const reversed = actions.slice().reverse();
      return reversed.find((el: any) => el.value !== null);
    });

    const mode = ref(null);

    function onModeChange(value: string) {
      mode.value = value;
    }

    const placeBetMutation = usePlaceBetMutation();
    const skipBetMutation = useSkipBetMutation();

    function placeBet(increment: string) {
      if (!mode.value) {
        Message.error("You have to select a mode.");
        return;
      }
      const lastValue = lastAction.value
        ? parseInt(lastAction.value.value.split(":")[1])
        : 0;
      placeBetMutation.mutate(
        {
          roundID: activeRound.value.id,
          value: mode.value + ":" + (lastValue + increment),
        },
        {
          onError: ({ errors }: any) => {
            Message.error(errors[0].message);
          },
        }
      );
    }

    function skip() {
      skipBetMutation.mutate({
        roundID: activeRound.value.id,
      });
    }

    return reactive({
      mode,
      onModeChange,
      activeRound,
      placeBet,
      skip,
      lastAction,
      lastBet,
    });
  },
});
</script>
