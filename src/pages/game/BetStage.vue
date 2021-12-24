<template>
  <div class="fixed top-0 left-0 w-screen h-screen overflow-visible text-white">
    <ModeSelector
      :selectedMode="mode"
      @modeChange="onModeChange"
      class="absolute right-20"
    />
    <div class="absolute left-10 top-20 py-20">
      <h3 class="font-black text-3xl mb-5">History</h3>
      <PreviousBets />
    </div>
    <div class="w-full flex justify-center absolute" style="top: 430px">
      <CurrentBet v-if="Boolean(lastBet)" :action="lastBet" />
    </div>
    <div class="flex w-full justify-center gap-3 py-20">
      <BetInput
        v-model="bet"
        class="absolute bottom-10 right-20"
        @onPlaceBet="placeBet"
        @onSkip="skip"
      />
    </div>
    <YourTurn />
    <div class="absolute top-0 left-0">
      <Hand
        v-if="Boolean(activeRound)"
        :round="activeRound"
        :handType="'HIDDEN'"
        :interCardDistance="165"
        :cardWidth="140"
        :position="[window.innerWidth / 2, 250]"
      />
      <Hand
        v-if="Boolean(activeRound)"
        :round="activeRound"
        :handType="'OPEN'"
        :interCardDistance="165"
        :cardWidth="140"
        :position="[window.innerWidth / 2, 220]"
        :interactive="true"
      />

      <Hand
        v-if="Boolean(activeRound)"
        :round="activeRound"
        :handType="'HIDDEN'"
        :interCardDistance="165"
        :cardWidth="140"
        :position="[window.innerWidth / 2, window.innerHeight - 280]"
      />
      <Hand
        v-if="Boolean(activeRound)"
        :round="activeRound"
        :handType="'OPEN'"
        :interCardDistance="165"
        :cardWidth="140"
        :position="[window.innerWidth / 2, window.innerHeight - 250]"
        :interactive="true"
      />
      <Hand
        v-if="Boolean(activeRound)"
        :round="activeRound"
        :handType="'NORMAL'"
        :interCardDistance="100"
        :cardWidth="160"
        :position="[window.innerWidth / 2, window.innerHeight]"
        :shiftOnHover="true"
        :interactive="true"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref } from "vue";
import BetInput from "./BetInput.vue";
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
    BetInput,
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

    const bet = ref(0);

    function placeBet() {
      if (!mode.value) {
        Message.error("You have to select a mode.");
        return;
      }
      console.log(bet.value);

      placeBetMutation.mutate(
        {
          roundID: activeRound.value.id,
          value: mode.value + ":" + bet.value,
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
      window,
      bet,
    });
  },
});
</script>
