<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent, onBeforeUnmount } from "vue";
import { useQueryClient } from "vue-query";
import { useGameSubscription, useLeaveGameMutation } from "../api";
import router from "../router";
import { Message } from "../utils/Message";

export default defineComponent({
  name: "GameProvider",
  setup() {
    const gameId = router.currentRoute.value.query.gameId as string;
    const qclient = useQueryClient();
    const leaveGameMutation = useLeaveGameMutation();
    const subscription = useGameSubscription(gameId);

    async function leaveGame() {
      try {
        await leaveGameMutation.mutateAsync({
          gameID: gameId,
        });
        qclient.refetchQueries("getGame");
        router.push({ path: "/" });
        subscription.unsubscribe();
      } catch (err) {
        Message.error("Could not leave the game");
      }
    }

    onBeforeUnmount(() => {
      leaveGame();
    });

    window.onbeforeunload = () => {
      leaveGame();
    };
  },
});
</script>
