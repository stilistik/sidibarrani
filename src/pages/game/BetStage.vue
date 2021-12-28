<template>
  <ModeSelector
    :selectedMode="mode"
    @modeChange="onModeChange"
    class="absolute right-20"
  />
  <History class="absolute left-10 top-20 py-20 z-hud" />
  <CurrentBet
    v-if="Boolean(lastBet)"
    :action="lastBet"
    class="
      flex
      justify-center
      absolute
      left-1/2
      top-1/2
      -translate-x-1/2 -translate-y-1/2
    "
  />
  <BetInput
    v-model="bet"
    class="absolute bottom-10 right-20"
    @onPlaceBet="placeBet"
    @onSkip="skip"
  />
  <YourTurn />
  <Hand
    v-if="Boolean(activeRound && opponentId)"
    :round="activeRound"
    :handType="'HIDDEN'"
    :userId="opponentId"
    :interCardDistance="165"
    :cardWidth="140"
    :position="[window.innerWidth / 2, 250]"
    :interactive="false"
    :zIndex="0"
  />
  <Hand
    v-if="Boolean(activeRound && opponentId)"
    :round="activeRound"
    :handType="'OPEN'"
    :userId="opponentId"
    :interCardDistance="165"
    :cardWidth="140"
    :position="[window.innerWidth / 2, 220]"
    :interactive="false"
    :zIndex="10"
  />
  <Hand
    v-if="Boolean(activeRound && userId)"
    :round="activeRound"
    :handType="'HIDDEN'"
    :userId="userId"
    :interCardDistance="165"
    :cardWidth="140"
    :position="[window.innerWidth / 2, window.innerHeight - 280]"
    :interactive="false"
    :zIndex="0"
  />
  <Hand
    v-if="Boolean(activeRound && userId)"
    :round="activeRound"
    :handType="'OPEN'"
    :userId="userId"
    :interCardDistance="165"
    :cardWidth="140"
    :position="[window.innerWidth / 2, window.innerHeight - 250]"
    :interactive="true"
    :zIndex="10"
  />
  <Hand
    v-if="Boolean(activeRound && userId)"
    :round="activeRound"
    :handType="'NORMAL'"
    :userId="userId"
    :interCardDistance="100"
    :cardWidth="160"
    :position="[window.innerWidth / 2, window.innerHeight]"
    :shiftOnHover="true"
    :interactive="true"
    :zIndex="20"
  />
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref } from "vue";
import BetInput from "./BetInput.vue";
import Button from "../../components/Button.vue";
import Hand from "../../components/Hand.vue";
import YourTurn from "../../components/YourTurn.vue";
import CurrentBet from "./CurrentBet.vue";
import History from "./History.vue";
import ModeSelector from "./ModeSelector.vue";
import {
  useActiveRound,
  useActiveStack,
  useCurrentGame,
  usePlaceBetMutation,
  useSkipBetMutation,
} from "../../api";
import { Message } from "../../utils/Message";
import { useCurrentUser } from "../../utils/Auth";

export default defineComponent({
  components: {
    Button,
    BetInput,
    Hand,
    YourTurn,
    CurrentBet,
    History,
    ModeSelector,
  },
  setup() {
    const activeRound = useActiveRound();
    const activeStack = useActiveStack();
    const user = useCurrentUser();
    const game = useCurrentGame();

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

    const userId = computed(() => user?.value?.id);
    const opponentId = computed(() => {
      const teams = game.value?.Teams?.items;
      const allUsers = teams.reduce((acc: any, curr: any) => {
        const users = curr.TeamUsers.items.map((el: any) => el.user);
        return acc.concat(users);
      }, []);
      return allUsers.find((el: any) => el.id !== userId.value)?.id;
    });

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
      userId,
      opponentId,
    });
  },
});
</script>
