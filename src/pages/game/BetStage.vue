<template>
  <div class="relative w-screen h-screen overflow-visible text-white">
    <div class="flex w-full justify-center gap-3 pt-52">
      <Button
        :size="'large'"
        @click="onClickMode('BOTTOM_UP')"
        :active="mode === 'BOTTOM_UP'"
      >
        <Icon icon="long-arrow-alt-up" style="width: 38" />
      </Button>
      <Button
        :size="'large'"
        @click="onClickMode('TOP_DOWN')"
        :active="mode === 'TOP_DOWN'"
      >
        <Icon icon="long-arrow-alt-down" style="width: 38" />
      </Button>
      <Button
        :size="'large'"
        @click="onClickMode('SLALOM')"
        :active="mode === 'SLALOM'"
      >
        <Icon icon="arrows-alt-v" style="width: 38" />
      </Button>
      <Button
        :size="'large'"
        @click="onClickMode('TRUMP_D')"
        :active="mode === 'TRUMP_D'"
      >
        <DiamondIcon />
      </Button>
      <Button
        :size="'large'"
        @click="onClickMode('TRUMP_H')"
        :active="mode === 'TRUMP_H'"
      >
        <HeartIcon />
      </Button>
      <Button
        :size="'large'"
        @click="onClickMode('TRUMP_S')"
        :active="mode === 'TRUMP_S'"
      >
        <SpadeIcon />
      </Button>
      <Button
        :size="'large'"
        @click="onClickMode('TRUMP_C')"
        :active="mode === 'TRUMP_C'"
      >
        <ClubIcon />
      </Button>
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
import DiamondIcon from "../../components/DiamondIcon.vue";
import HeartIcon from "../../components/HeartIcon.vue";
import SpadeIcon from "../../components/SpadeIcon.vue";
import ClubIcon from "../../components/ClubIcon.vue";
import Hand from "../../components/Hand.vue";
import YourTurn from "../../components/YourTurn.vue";
import CurrentBet from "./CurrentBet.vue";
import {
  useActiveRound,
  useActiveStack,
  usePlaceBetMutation,
  useSkipBetMutation,
} from "../../api";

export default defineComponent({
  components: {
    Button,
    DiamondIcon,
    HeartIcon,
    SpadeIcon,
    ClubIcon,
    Hand,
    YourTurn,
    CurrentBet,
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

    function onClickMode(value: string) {
      mode.value = value;
    }

    const placeBetMutation = usePlaceBetMutation();
    const skipBetMutation = useSkipBetMutation();

    function placeBet(increment: string) {
      const lastValue = lastAction.value
        ? parseInt(lastAction.value.value.split(":")[1])
        : 0;
      placeBetMutation.mutate({
        roundID: activeRound.value.id,
        value: mode.value + ":" + (lastValue + increment),
      });
    }

    function skip() {
      skipBetMutation.mutate({
        roundID: activeRound.value.id,
      });
    }

    return reactive({
      mode,
      onClickMode,
      activeRound,
      placeBet,
      skip,
      lastAction,
      lastBet,
    });
  },
});
</script>
