<template>
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
        py-2
      "
    >
      <span>Play Mode:</span>
      <ModeIcon :mode="activeRound.mode" :size="28" />
    </div>
  </div>
  <YourTurn />
  <StackWinner />
  <Stack
    v-if="Boolean(activeStack)"
    :stack="activeStack"
    :position="[window.innerWidth / 2, window.innerHeight / 2]"
    :cardWidth="140"
    :interCardDistance="30"
  />
  <Hand
    v-if="Boolean(activeRound && teamData)"
    :round="activeRound"
    :handType="'NORMAL'"
    :userId="teamData.opponentId"
    :interCardDistance="100"
    :cardWidth="140"
    :position="[window.innerWidth / 2, 100]"
    :interactive="false"
    :filterPlayed="true"
    :zIndex="20"
  />
  <Hand
    v-if="Boolean(activeRound && teamData)"
    :round="activeRound"
    :handType="'HIDDEN'"
    :userId="teamData.opponentId"
    :interCardDistance="165"
    :cardWidth="140"
    :position="[window.innerWidth / 2, 250]"
    :interactive="false"
    :zIndex="0"
  />
  <Hand
    v-if="Boolean(activeRound && teamData)"
    :round="activeRound"
    :handType="'OPEN'"
    :userId="teamData.opponentId"
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
    :position="[window.innerWidth / 2, window.innerHeight - 250]"
    :interactive="true"
    :zIndex="0"
  />
  <Hand
    v-if="Boolean(activeRound && userId)"
    :round="activeRound"
    :handType="'OPEN'"
    :userId="userId"
    :interCardDistance="165"
    :cardWidth="140"
    :position="[window.innerWidth / 2, window.innerHeight - 220]"
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
    :position="[window.innerWidth / 2, window.innerHeight + 30]"
    :shiftOnHover="true"
    :interactive="true"
    :filterPlayed="true"
    :zIndex="20"
  />
  <PlayerDeck
    v-if="Boolean(teamData)"
    :color="teamData.userTeamColor"
    :name="teamData.userTeam.name"
    :location="'bottom'"
  />
  <PlayerDeck
    v-if="Boolean(teamData)"
    :color="teamData.opponentTeamColor"
    :name="teamData.opponentTeam.name"
    :location="'top'"
  />
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  onBeforeUnmount,
  reactive,
  watch,
} from "vue";
import {
  useActiveRound,
  useActiveStack,
  useClearStackMutation,
  useCurrentGame,
  useEndRoundMutation,
} from "../../api";
import AppHeader from "../../components/AppHeader.vue";
import Hand from "../../components/Hand.vue";
import Button from "../../components/Button.vue";
import Stack from "../../components/Stack.vue";
import YourTurn from "../../components/YourTurn.vue";
import StackWinner from "../../components/StackWinner.vue";
import ModeIcon from "./ModeIcon.vue";
import PlayerDeck from "./PlayerDeck.vue";
import { useCurrentUser } from "../../utils/Auth";
import { useCardManager } from "./CardManager.vue";
import { resolveTeams } from "../../utils/GameUtils";

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
    PlayerDeck,
  },
  setup() {
    const activeRound = useActiveRound();
    const activeStack = useActiveStack();
    const { removeAllCardsFromField } = useCardManager();

    console.log(activeRound);

    onBeforeUnmount(removeAllCardsFromField);

    const isEndable = computed(
      () =>
        activeRound.value?.stacks?.items?.length ==
          36 / activeStack.value?.size + 1 && activeStack.value?.winner
    );

    const isClearable = computed(
      () =>
        activeStack?.value?.actions?.items?.length >= activeStack?.value?.size
    );

    watch(isClearable, (value) => {
      if (value && !isEndable.value) {
        setTimeout(clear, 1000);
      }
    });

    watch(isEndable, (value) => {
      if (value) {
        setTimeout(end, 1000);
      }
    });

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

    const user = useCurrentUser();
    const game = useCurrentGame();
    const userId = computed(() => user?.value?.id);

    const teamData = computed(() => resolveTeams(game.value, userId.value));

    return reactive({
      activeRound,
      activeStack,
      userId,
      window,
      teamData,
    });
  },
});
</script>
