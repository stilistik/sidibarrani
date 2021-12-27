<template>
  <div class="fixed top-0 left-0 w-screen h-screen overflow-visible text-white">
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
      <Button v-if="isClearable" @click="clear">Clear</Button>
      <Button v-if="isEndable" @click="end">End Round</Button>
    </div>
    <YourTurn />
    <StackWinner />
    <Stack
      v-if="Boolean(activeStack)"
      :stack="activeStack"
      :position="[window.innerWidth / 2, window.innerHeight / 2 - 15]"
      :cardWidth="140"
      :interCardDistance="30"
    />
    <Hand
      v-if="Boolean(activeRound && opponentId)"
      :round="activeRound"
      :handType="'HIDDEN'"
      :userId="opponentId"
      :interCardDistance="165"
      :cardWidth="140"
      :position="[window.innerWidth / 2, 250]"
      :interactive="false"
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
      :filterPlayed="true"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from "vue";
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
import { useCurrentUser } from "../../utils/Auth";

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

    const user = useCurrentUser();
    const game = useCurrentGame();
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
      activeRound,
      activeStack,
      isClearable,
      isEndable,
      userId,
      opponentId,
      end,
      clear,
      window,
    });
  },
});
</script>
